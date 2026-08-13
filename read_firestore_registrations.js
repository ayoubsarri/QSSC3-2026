const crypto = require("crypto");

const SERVICE_ACCOUNT = {
  "type": "service_account",
  "project_id": "qssc3-d300f",
  "private_key_id": "d6222fb068ad8cad8dcf5e4d7ad1993b19344224",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2bIXEuWRwovRQ\nucqTEbLf3XWTMbEhvjaBriRwfj099Y+/GK3gZKE9FDS9aVYMEe/8l/6jtClXYfl9\nNjjgNs33gBbrdscfYwkF5AxxzMcUEKjtKE90MT5f3lmB19zRS18RVvDWebzc2RTC\n3WsAtkoqbtn9t3YoYRuISER/g4aOiCD4lAy+2ewy/vSGlQ9+aZFQpD+hUj5hFVDf\n93YoYGPJe8bQ9EL6YxD8VPJ3AEmqDototizDxc8ti+ArFXMPw3nY3Hcfp7+c0RnJ\nxVSwLhVhOuTchgNVQFKR1SkZf19F8x9FB4uStFZJZ4Tk+Nq0cYdVjgovHfpFllzX\nkgZ+NDrJAgMBAAECggEANPrwoLE9J+9TqGxFFpBx1E1zm7O3X3boSqJiR9+J9sgu\nHtBSk1R2dZA8PvRsPqYo/kHAfRfSV+QG+uP4Abo4+FQVk/4Tl5yCHtlb+eMAwGWU\nQghOhw7UMDCZ6zlfktNigV0wJgIGJVfQjUWUEYlfodI+8k5JfTGyttJSPnxa5GLL\n9kxh+HtI3dwBGtpaDT4kYm8dcve4p5wGt0rSz7Nv2rgTq+bJ9SYfJfnxOqS9jYqz\nAbXEGe2EAc5Y+Tkcks6Lf6MlINLWgYpTECKo634bh4lflcl+WZ7jBG6aZDCLbItH\n0e6gv19XfmH9jPH3CsTqX/b35tNesoblo30/87XtvwKBgQDmK/JvHFykW8cuokmO\nd2zq5uO3490fSiA2pBhoE8wQikIW2ZUE1yeBFGe2nY3BdmI2sPJq+dfBfEFX8a3s\nBI4OslNqF2G0JLzYyEVPwE3+hvHEzk2m3IrB4PtW2IrWvlRUzgeBIIAVYPvkAkOX\nehEWUPZ6VqycE1cy6bqlsk201wKBgQDK5PG4XJRo7rJPN8eMMjuROnZEjm1puBek\n89wRVb91X8nkh3EiEYEpZwVd812rImSuqmzklM0KmfiJj8JAE3xLuOOnLs7oQjiS\n/Z3kE6G4sbjKvX/FoOosQyhzw4WK6ntFdkLYKdQg369UbGG5mtO4H3C2pQpGDFml\nASnobS/5XwKBgBvq5qvdZ8szqpQYcQ2LpLVVLfem9rIN3pxiCOfOxuiWrG9zEqUU\np6D7ZZz7vS7i+gSiL7UT+rxoItDU6oB/CO/1ZzKuBVbBQfqVR/rlW1Bs87QoRbjg\ndSAQ9stQ1n43dakXmEdsNrzhF4xPTf14e8wWI98w1hzUJ7ZwLQhd+RjfAoGAar+0\nEezbxK25sQZG/hM71fgtW3qYRGQwRIBtS82Ssz2Xqp48PtF45ICoiTrPEIhC8scG\nDengS3ChHDc/25ik7+4yELcG85pLy8KWPPa7QsJ22GyFekRkkK8w7F91tpYSD4Te\nPH8ddcJarA9uB0pXlGsuUVpaImrDC5amJvyznf8CgYEA3jhzEKVj0dnEjYyVz9+y\nmXwOdmU4U+keC8sG+5MwVS6y9dMRUSWq5EkZvz1jTU1sa/PKxPIHMuSw7hm9HqM+\nlRVFiVxyUmppHOHeuEuxABCCoIoWJBsZDc+Y1fb5C7iHCsX05f5MIEJBUEsWm6BN\npFyDAK0iFaS5Y0zb/FHGNM0=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@qssc3-d300f.iam.gserviceaccount.com"
};

function base64url(str) {
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken() {
  const header = JSON.stringify({ alg: "RS256", typ: "JWT" });
  const now = Math.floor(Date.now() / 1000);
  const claim = JSON.stringify({
    iss: SERVICE_ACCOUNT.client_email,
    scope: "https://www.googleapis.com/auth/datastore",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  });
  
  const signatureInput = base64url(header) + "." + base64url(claim);
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(signatureInput);
  const formattedKey = SERVICE_ACCOUNT.private_key.replace(/\\n/g, '\n');
  const signature = sign.sign(formattedKey);
  const jwt = signatureInput + "." + base64url(signature);
  
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=" + jwt
  });
  
  const tokenJson = await response.json();
  return tokenJson.access_token;
}

async function fetchRegistrations() {
  try {
    const token = await getAccessToken();
    let nextPageToken = "";
    const allDocuments = [];

    do {
      let url = "https://firestore.googleapis.com/v1/projects/qssc3-d300f/databases/(default)/documents/registrations?pageSize=100";
      if (nextPageToken) {
        url += "&pageToken=" + nextPageToken;
      }
      
      const response = await fetch(url, {
        headers: { "Authorization": "Bearer " + token }
      });
      
      const data = await response.json();
      if (data.documents) {
        allDocuments.push(...data.documents);
      }
      nextPageToken = data.nextPageToken || "";
    } while (nextPageToken);

    console.log(`\nSUCCESS: Fetched all pages. Total registrations found in Firebase: ${allDocuments.length}`);

    const accepted = [];
    const others = {};

    allDocuments.forEach(doc => {
      const fields = doc.fields || {};
      const status = fields.status ? fields.status.stringValue : "Pending";
      const fullName = fields.fullName ? fields.fullName.stringValue : (fields.name ? fields.name.stringValue : "Unnamed");
      const email = fields.email ? fields.email.stringValue : "No Email";
      const password = fields.password ? fields.password.stringValue : "No Password";

      if (status === "Accepted") {
        accepted.push({ name: fullName, email: email, password: password });
      } else {
        others[status] = (others[status] || 0) + 1;
      }
    });

    console.log("\nFirebase Status Breakdown:");
    console.log(`- Accepted: ${accepted.length}`);
    for (const [status, count] of Object.entries(others)) {
      console.log(`- ${status}: ${count}`);
    }

    console.log("\nAccepted Participants Array:");
    console.log(JSON.stringify(accepted));
    
  } catch (error) {
    console.error("Error fetching registrations:", error);
  }
}

fetchRegistrations();
