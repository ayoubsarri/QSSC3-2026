const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const fs = require("fs");
const path = require("path");

const SERVICE_ACCOUNT = {
  "type": "service_account",
  "project_id": "qssc3-d300f",
  "private_key_id": "d6222fb068ad8cad8dcf5e4d7ad1993b19344224",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2bIXEuWRwovRQ\nucqTEbLf3XWTMbEhvjaBriRwfj099Y+/GK3gZKE9FDS9aVYMEe/8l/6jtClXYfl9\nNjjgNs33gBbrdscfYwkF5AxxzMcUEKjtKE90MT5f3lmB19zRS18RVvDWebzc2RTC\n3WsAtkoqbtn9t3YoYRuISER/g4aOiCD4lAy+2ewy/vSGlQ9+aZFQpD+hUj5hFVDf\n93YoYGPJe8bQ9EL6YxD8VPJ3AEmqDototizDxc8ti+ArFXMPw3nY3Hcfp7+c0RnJ\nxVSwLhVhOuTchgNVQFKR1SkZf19F8x9FB4uStFZJZ4Tk+Nq0cYdVjgovHfpFllzX\nkgZ+NDrJAgMBAAECggEANPrwoLE9J+9TqGxFFpBx1E1zm7O3X3boSqJiR9+J9sgu\nHtBSk1R2dZA8PvRsPqYo/kHAfRfSV+QG+uP4Abo4+FQVk/4Tl5yCHtlb+eMAwGWU\nQghOhw7UMDCZ6zlfktNigV0wJgIGJVfQjUWUEYlfodI+8k5JfTGyttJSPnxa5GLL\n9kxh+HtI3dwBGtpaDT4kYm8dcve4p5wGt0rSz7Nv2rgTq+bJ9SYfJfnxOqS9jYqz\nAbXEGe2EAc5Y+Tkcks6Lf6MlINLWgYpTECKo634bh4lflcl+WZ7jBG6aZDCLbItH\n0e6gv19XfmH9jPH3CsTqX/b35tNesoblo30/87XtvwKBgQDmK/JvHFykW8cuokmO\nd2zq5uO3490fSiA2pBhoE8wQikIW2ZUE1yeBFGe2nY3BdmI2sPJq+dfBfEFX8a3s\nBI4OslNqF2G0JLzYyEVPwE3+hvHEzk2m3IrB4PtW2IrWvlRUzgeBIIAVYPvkAkOX\nehEWUPZ6VqycE1cy6bqlsk201wKBgQDK5PG4XJRo7rJPN8eMMjuROnZEjm1puBek\n89wRVb91X8nkh3EiEYEpZwVd812rImSuqmzklM0KmfiJj8JAE3xLuOOnLs7oQjiS\n/Z3kE6G4sbjKvX/FoOosQyhzw4WK6ntFdkLYKdQg369UbGG5mtO4H3C2pQpGDFml\nASnobS/5XwKBgBvq5qvdZ8szqpQYcQ2LpLVVLfem9rIN3pxiCOfOxuiWrG9zEqUU\np6D7ZZz7vS7i+gSiL7UT+rxoItDU6oB/CO/1ZzKuBVbBQfqVR/rlW1Bs87QoRbjg\ndSAQ9stQ1n43dakXmEdsNrzhF4xPTf14e8wWI98w1hzUJ7ZwLQhd+RjfAoGAar+0\nEezbxK25sQZG/hM71fgtW3qYRGQwRIBtS82Ssz2Xqp48PtF45ICoiTrPEIhC8scG\nDengS3ChHDc/25ik7+4yELcG85pLy8KWPPa7QsJ22GyFekRkkK8w7F91tpYSD4Te\nPH8ddcJarA9uB0pXlGsuUVpaImrDC5amJvyznf8CgYEA3jhzEKVj0dnEjYyVz9+y\nmXwOdmU4U+keC8sG+5MwVS6y9dMRUSWq5EkZvz1jTU1sa/PKxPIHMuSw7hm9HqM+\nlRVFiVxyUmppHOHeuEuxABCCoIoWJBsZDc+Y1fb5C7iHCsX05f5MIEJBUEsWm6BN\npFyDAK0iFaS5Y0zb/FHGNM0=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@qssc3-d300f.iam.gserviceaccount.com"
};

// Replace double slashes to newlines
SERVICE_ACCOUNT.private_key = SERVICE_ACCOUNT.private_key.replace(/\\n/g, '\n');

initializeApp({
  credential: cert(SERVICE_ACCOUNT)
});

const auth = getAuth();

const participantsFile = path.join(__dirname, "parsed_participants.json");
const participants = JSON.parse(fs.readFileSync(participantsFile, "utf8"));

async function syncPasswords() {
  console.log("Starting Firebase Auth password sync...");
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  for (let i = 0; i < participants.length; i++) {
    const p = participants[i];
    if (p.status !== "Accepted") {
      skipCount++;
      continue;
    }

    try {
      // Look up user
      const userRecord = await auth.getUserByEmail(p.email);
      
      // Update password
      await auth.updateUser(userRecord.uid, {
        password: p.password
      });
      
      console.log(`[${i+1}/${participants.length}] Synced password for: ${p.email} -> ${p.password}`);
      successCount++;
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // User doesn't exist in Firebase Auth yet, let's create them!
        try {
          await auth.createUser({
            email: p.email,
            emailVerified: true,
            password: p.password,
            displayName: p.name
          });
          console.log(`[${i+1}/${participants.length}] Created new Firebase Auth account for: ${p.email} with password: ${p.password}`);
          successCount++;
        } catch (createErr) {
          console.error(`Error creating user ${p.email}:`, createErr.message);
          failCount++;
        }
      } else {
        console.error(`Error syncing ${p.email}:`, error.message);
        failCount++;
      }
    }
  }

  console.log(`\nPassword sync completed:`);
  console.log(`- Successfully Synced/Created: ${successCount}`);
  console.log(`- Skipped (Not Accepted): ${skipCount}`);
  console.log(`- Failed: ${failCount}`);
  
  process.exit(0);
}

syncPasswords();
