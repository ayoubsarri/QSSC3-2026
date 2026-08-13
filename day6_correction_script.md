# Google Apps Script: Day 6 Correction Email (Beekeeping & Botany)

This script is pre-populated with **all 86 non-accepted users** who mistakenly received the invitation.

## [LIST] Copy and Paste this Script

Replace the code in your **Google Apps Script editor** with the code below:

```javascript
// =========================================================================
// [LIST] RECIPIENTS FOR CANCELLATION/CORRECTION EMAIL (Total: 86 users)
// =========================================================================
var RECIPIENTS = [
  {
    "name": "Candidate",
    "email": "079286223gr@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "a.elhorma@esi-sba.dz"
  },
  {
    "name": "Candidate",
    "email": "aa1262407@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "abdallahbengriche@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "abdelfatahtalaourar@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "abdelmalekbechari@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "abdououachem35@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "achouakoukefil@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "achraf.abdelkafi10@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "achraf.moon65@gmail.com"
  },
  {
    "name": "Hamadi ahmed yacine",
    "email": "ahmedniggezinparis@gamil.com"
  },
  {
    "name": "Candidate",
    "email": "aliloudjemmel37@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "amine.it.amalou@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "amiraboudia87@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "amiratsaghahadil@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "amranemmd0@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "athletemoenid@proton.me"
  },
  {
    "name": "Candidate",
    "email": "ayoubsddarri1@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "benamer.mohamed.st.ing@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "benmoumameriem07@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "bensalemhadjer66@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "bm.sellidj@ensta.edu.dz"
  },
  {
    "name": "Candidate",
    "email": "boukhenifermaria@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "bouroubichaima@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "bouzidiidriss23@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "chachanez469@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "chaimachelbouba@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "chblina673@gmail.com"
  },
  {
    "name": "سيرين شنيوني ",
    "email": "cheniounosirine@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "chibi3229@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "contact.rayan.aitakil@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "cordillia3@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "cosmoo94@hotmail.com"
  },
  {
    "name": "Candidate",
    "email": "djaffar.mehamsadji@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "djamalsitahar@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "douaasadou@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "ferielbouaita@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "forkocherahil@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "frmaroua1@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "h8laggoune@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "hadil.boufenissa@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "hadjadjihouda7@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "hibahireche26@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "hibazebbar1@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "ineslefki12@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "israasouiki@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "karimboucetta528@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "karimdrider78@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "kr.sara.dev@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "linabanfeta@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "louaimenaceur22@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "lylydia032@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "lynn.her@iclood.com"
  },
  {
    "name": "Candidate",
    "email": "m.yahi@nsnn.edu.dz"
  },
  {
    "name": "Candidate",
    "email": "malak0rekkache@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "maroua.md.0810@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "melissabouikni1@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "melyakin16@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "mrainriham5@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "nacirabouzeghoub002@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "nesrinebenguesmi2707@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "ouais0670@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "pa_bayou@esi.dz"
  },
  {
    "name": "Candidate",
    "email": "rahimmoussouni77@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "ramziabbad2025@gmail.com"
  },
  {
    "name": "Fettous Razane",
    "email": "razroza120@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "ryma.bentouati@univ-alger.dz"
  },
  {
    "name": "Candidate",
    "email": "rymdz11@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "rzdjawed@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "saifiabdou404@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "salimbelmahdi68@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "sararahma04@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "sararazali.info@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "sarayaddadene8@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "sellamiahmedyassine@gmail.com"
  },
  {
    "name": "Soumia Teriki",
    "email": "soumiateriki@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "tifaouiamel31613514@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "wafamessaoudiusthb@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "yacine.djabali@univ-alger.dz"
  },
  {
    "name": "Candidate",
    "email": "yacinekhellal2207@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "yacinetve658@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "youcefredjem123@gmail.com"
  },
  {
    "name": "Fettous Younes",
    "email": "younesyo2012younes@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "yousrayou0000@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "youstan19@gmail.com"
  },
  {
    "name": "Candidate",
    "email": "zinebbouakel@gmail.com"
  }
];

// =========================================================================
// RUN THIS FUNCTION TO SEND CORRECTION EMAIL
// =========================================================================
function sendCorrectionEmail() {
  var sentCount = 0;
  
  for (var i = 0; i < RECIPIENTS.length; i++) {
    var p = RECIPIENTS[i];
    if (!p.email || p.email.trim() === "") continue;
    
    try {
      sendCorrectionTemplate(p.name, p.email.trim());
      Logger.log("[SUCCESS] Sent Correction to: " + p.email);
      sentCount++;
      
      Utilities.sleep(1000); // 1 second delay
      
    } catch (e) {
      Logger.log("[ERROR] Failed sending to " + p.email + ": " + e.toString());
    }
  }
  
  Logger.log("[FINISHED] Sent " + sentCount + " correction emails.");
}

// =========================================================================
// CORRECTION EMAIL TEMPLATE
// =========================================================================
function sendCorrectionTemplate(fullName, email) {
  var subject = "IMPORTANT: QSSC³ 2026 - Day 6 Email Correction";
  
  var htmlBody = 
    "<div style='font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #ef4444; box-shadow: 6px 6px 0 #000000; padding: 24px; background: #fffaf0; color: #2d3748;'>" +
      "<div style='background: #ef4444; padding: 20px; border-bottom: 4px solid #000000; text-align: center;'>" +
        "<h1 style='color: #ffffff; font-size: 20px; margin: 0; font-family: monospace; text-transform: uppercase; letter-spacing: 0.5px;'>⚠️ IMPORTANT CORRECTION</h1>" +
      "</div>" +
      "<div style='padding: 24px 0; border-bottom: 4px solid #000000; font-size: 15px; line-height: 1.6;'>" +
        "<p>Hi <strong>" + (fullName || "Candidate") + "</strong>,</p>" +
        
        "<p style='margin-bottom: 16px;'>" +
          "You recently received an automated email regarding the QSSC³ Day 6 schedule. Please kindly disregard that email, as it was sent to you by mistake." +
        "</p>" +
        
        "<p style='margin-bottom: 16px; font-weight: bold; color: #b91c1c;'>" +
          "Please note that you can only attend tomorrow's workshops if you have received an official acceptance email before this." +
        "</p>" +
        
        "<p style='margin-bottom: 16px;'>" +
          "Due to the very limited number of laboratory seats and the supervision conditions required for tomorrow’s workshops, your participation unfortunately could not be confirmed for this session." +
        "</p>" +
        
        "<p style='margin-bottom: 16px;'>" +
          "We sincerely thank you for your interest in Quanta Science Summer Camp and for your motivation. This situation does not reflect negatively on your application. We will keep your information and will be happy to invite you to future Quanta Club activities, workshops, and opportunities." +
        "</p>" +
        
        "<p style='margin-bottom: 16px; font-weight: bold; color: #b91c1c;'>" +
          "Therefore, please take in consideration this situation for tomorrow’s workshops, Sunday, July 12." +
        "</p>" +
        
        "<p style='margin-top: 24px;'>" +
          "We sincerely apologize for the confusion and thank you for your understanding." +
        "</p>" +
        
        "<p style='margin-top: 24px; font-weight: bold;'>" +
          "Quanta Club Team" +
        "</p>" +
      "</div>" +
      "<div style='padding-top: 16px; font-size: 11px; color: #718096; text-align: center;'>" +
        "Quanta Club Team • QSSC³ 2026" +
      "</div>" +
    "</div>";
    
  var textBody = "Hi " + (fullName || "Candidate") + ",\n\n" +
                 "You recently received an automated email regarding the QSSC³ Day 6 schedule. Please kindly disregard that email, as it was sent to you by mistake.\n\n" +
                 "Please note that you can only attend tomorrow's workshops if you have received an official acceptance email before this.\n\n" +
                 "Due to the very limited number of laboratory seats and the supervision conditions required for tomorrow’s workshops, your participation unfortunately could not be confirmed for this session.\n\n" +
                 "We sincerely thank you for your interest in Quanta Science Summer Camp and for your motivation. This situation does not reflect negatively on your application. We will keep your information and will be happy to invite you to future Quanta Club activities, workshops, and opportunities.\n\n" +
                 "Therefore, please take in consideration this situation for tomorrow’s workshops, Sunday, July 12.\n\n" +
                 "We sincerely apologize for the confusion and thank you for your understanding.\n\n" +
                 "Quanta Club Team";
                 
  GmailApp.sendEmail(email, subject, textBody, { htmlBody: htmlBody });
}
```
