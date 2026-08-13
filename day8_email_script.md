# Google Apps Script: Day 8 Email Announcement (Vibe Coding)

This script is pre-populated with **all 111 accepted participants**.

## [LIST] Copy and Paste this Script

Replace the code in your **Google Apps Script editor** with the code below:

```javascript
// =========================================================================
// [LIST] DAY 8 ACCEPTED PARTICIPANTS REGISTRY (Total: 111 users)
// =========================================================================
var PARTICIPANTS = [
  {
    "name": "Bechari Abdelmalek",
    "email": "abdelmalek.bechari@edu.ensa.dz"
  },
  {
    "name": "abderrahmane lab",
    "email": "abderrahmanelab99@gmail.com"
  },
  {
    "name": "Yousuf Abu Rahma",
    "email": "aburahmayousuf@gmail.com"
  },
  {
    "name": "Hanane Benamar",
    "email": "ahananetabe@gmail.com"
  },
  {
    "name": "Ahmed Farah",
    "email": "ahfarah627@gmail.com"
  },
  {
    "name": "Dahmani Aissa",
    "email": "aissadahmanibac@gmail.com"
  },
  {
    "name": "Belalia ishak",
    "email": "aizak2424@gmail.com"
  },
  {
    "name": "Alaa Morsi",
    "email": "al1amorsi22@gmail.com"
  },
  {
    "name": "Alaa Djema",
    "email": "alaadjema0@gmail.com"
  },
  {
    "name": "Alaa Djema",
    "email": "alaadjema3@gmail.com"
  },
  {
    "name": "Amira Touileb",
    "email": "amiratouileb21@gmail.com"
  },
  {
    "name": "Morena Asma AOUADI",
    "email": "aouadiasma281@gmail.com"
  },
  {
    "name": "Maroua MEHDI",
    "email": "arilin.0810@gmail.com"
  },
  {
    "name": "Asma Benamane",
    "email": "asma.benamane@univ-alger.dz"
  },
  {
    "name": "Ayoub Sarri",
    "email": "ay.oubsarri1@gmail.com"
  },
  {
    "name": "aya laouadi",
    "email": "aya.laouadi@ensia.edu.dz"
  },
  {
    "name": "Ayoub Sarri",
    "email": "ayoubsarri1@gmail.com"
  },
  {
    "name": "Azil Farida",
    "email": "azilfarida2@gmail.com"
  },
  {
    "name": "Azzouz Oumaima",
    "email": "azzouyab980@gmail.com"
  },
  {
    "name": "Beldjerdi sirine",
    "email": "bdjsirine42@gmail.com"
  },
  {
    "name": "Belhadj  Hanane",
    "email": "belhadjhanane445@gmail.com"
  },
  {
    "name": "Stambouli Naziha",
    "email": "bn.stambouli@ensta.edu.dz"
  },
  {
    "name": "Bendjeddou nassreddine",
    "email": "bnjdnasro@gmail.com"
  },
  {
    "name": "Mohammed Rafik Bouras",
    "email": "bourasmohammedrafik@gmail.com"
  },
  {
    "name": "Chaima Chaid",
    "email": "chaidchaima@gmail.com"
  },
  {
    "name": "Chaima Saoudi",
    "email": "chaiimassa@gmail.com"
  },
  {
    "name": "Chaima Belhamel",
    "email": "chaimabelhamel936@gmail.com"
  },
  {
    "name": "Chaima deghmane",
    "email": "chaimadeghmane96@gmail.com"
  },
  {
    "name": "Chaima Touam",
    "email": "chaimatouam981@gmail.com"
  },
  {
    "name": "Belamine Chouaib abderrahmane",
    "email": "chouaibbelamine@gmail.com"
  },
  {
    "name": "Soumia Teriki",
    "email": "digateriki3@gmail.com"
  },
  {
    "name": "Djema Mohamed Alaa Eddine",
    "email": "djemamuhammad@gmail.com"
  },
  {
    "name": "Lassouane djazia",
    "email": "djeyyyyyyyyyyyyyyyyyyyyyyyz@gmail.com"
  },
  {
    "name": "Djidji Knour",
    "email": "djidjiknour2502@gmail.com"
  },
  {
    "name": "Nour",
    "email": "djidjiknour2502@gmail.com"
  },
  {
    "name": "Hadji Djouaïria",
    "email": "djouairiahadji@gmail.com"
  },
  {
    "name": "Djouhaina Mechati",
    "email": "djouhainamechati2@gmail.com"
  },
  {
    "name": "Derradji Douaa",
    "email": "douaadrj695@gmail.com"
  },
  {
    "name": "Fares Lahrir",
    "email": "fares.lahrir@gmail.com"
  },
  {
    "name": "Fadwa Benchabane",
    "email": "fedouabenchabane@gmail.com"
  },
  {
    "name": "FETTOUS YOUSRA LYNA",
    "email": "fettouslyna@gmail.com"
  },
  {
    "name": "Galoul Anis",
    "email": "gal7anis7@gmail.com"
  },
  {
    "name": "Kermoun nour",
    "email": "goldenwave.accessories@gmail.com"
  },
  {
    "name": "Grar dounia",
    "email": "grdounia11@gmail.com"
  },
  {
    "name": "Hamadi ahmed yacine",
    "email": "hamadiahmedyacine@gmail.com"
  },
  {
    "name": "Khalil Hamidani",
    "email": "hamidani2002@gmail.com"
  },
  {
    "name": "Hamza kezzoula",
    "email": "hamzakezzoula@gmail.com"
  },
  {
    "name": "Dahmani Hanane",
    "email": "hananedahmani003@gmail.com"
  },
  {
    "name": "شلبوبة حياة",
    "email": "hayat.chalbouba.2001@gmail.com"
  },
  {
    "name": "Amrani Hiba",
    "email": "hibaamrani071@gmail.com"
  },
  {
    "name": "Bouflouh Hiba",
    "email": "hibabouflouh@gmail.com"
  },
  {
    "name": "LAIBI Hibat Ellah",
    "email": "hibat.ellah.laibi@gmail.com"
  },
  {
    "name": "Himrane Djouhar",
    "email": "himranedjouhar@gmail.com"
  },
  {
    "name": "Bouhenouche Ikram",
    "email": "ikrambouhenouche@gmail.com"
  },
  {
    "name": "Imene che",
    "email": "imenechb7@gmail.com"
  },
  {
    "name": "Abbad khadidja",
    "email": "its.khadidja@icloud.com"
  },
  {
    "name": "Kouachi Kenza Sirine",
    "email": "k.kenza.sirine@gmail.com"
  },
  {
    "name": "Lafsihane kamelia",
    "email": "kamylafsi20088@gmail.com"
  },
  {
    "name": "Boughara Kenza",
    "email": "kenzabg52@gmail.com"
  },
  {
    "name": "Kermoun nour",
    "email": "kermounoor17@gmail.com"
  },
  {
    "name": "Kheireddine Haballa",
    "email": "kheireddine.haballa@edu.ensa.dz"
  },
  {
    "name": "Belkada kamilia",
    "email": "kikamiliab@gmail.com"
  },
  {
    "name": "Karous sara",
    "email": "kr.sara.prv@gmail.com"
  },
  {
    "name": "Larbi Lyna",
    "email": "larbilyna11@gmail.com"
  },
  {
    "name": "Lardjane meriem",
    "email": "lardjanemeriem9@gmail.com"
  },
  {
    "name": "Lyna Benfeta",
    "email": "linabenfeta@gmail.com"
  },
  {
    "name": "Lokmane",
    "email": "lokmanbas999@gmail.com"
  },
  {
    "name": "Bouteldja assia",
    "email": "lyynaassia@gmail.com"
  },
  {
    "name": "Kradda Mokhtaria",
    "email": "m.kradda@nsnn.edu.dz"
  },
  {
    "name": "guezlane roumaissa",
    "email": "marcelinemarslinanchbh@gmail.com"
  },
  {
    "name": "Maria Saadi",
    "email": "mariasaadi227@gmail.com"
  },
  {
    "name": "Maria Taleb",
    "email": "maryatalb98@gmail.com"
  },
  {
    "name": "Matouk Hocine",
    "email": "matoukhocine0@gmail.com"
  },
  {
    "name": "ines mehenni",
    "email": "mehenni914519@gmail.com"
  },
  {
    "name": "Melissa slimani",
    "email": "melissaslimani207@gmail.com"
  },
  {
    "name": "Khamouli meriem",
    "email": "meriemkhamouli@gmail.com"
  },
  {
    "name": "amina ch",
    "email": "mini7chame7@gmail.com"
  },
  {
    "name": "HADDADI Mohamed Amine",
    "email": "mohamed_amine.haddadi@g.enp.edu.dz"
  },
  {
    "name": "Rihab Mrain",
    "email": "mrainrihab30@gmail.com"
  },
  {
    "name": "Laidouci Nadjet",
    "email": "nadjet041@gmail.com"
  },
  {
    "name": "Katia Manel Nafaa",
    "email": "nafaakatiamanel@gmail.com"
  },
  {
    "name": "Noufel",
    "email": "noufel.maze@gmail.com"
  },
  {
    "name": "Othmani djawed",
    "email": "othmanimaraboutdjaweda5@gmail.com"
  },
  {
    "name": "Ouaggazi Rihana",
    "email": "ouggazirihana@gmail.com"
  },
  {
    "name": "Raghis Amina",
    "email": "raghisamina7@gmail.com"
  },
  {
    "name": "DEHIRI ABDERRAOUF",
    "email": "raoufdehiri4@gmail.com"
  },
  {
    "name": "Lazli Mohamed Reda",
    "email": "redadev4869@gmail.com"
  },
  {
    "name": "Larbaoui Nada",
    "email": "rosesnada@gmail.com"
  },
  {
    "name": "Malki Rahma",
    "email": "rouroumiimi@gmail.com"
  },
  {
    "name": "Maria Chahrazed Sakrani",
    "email": "sakranimariachahrazed@gmail.com"
  },
  {
    "name": "Sarah sadoudi",
    "email": "sarahhsadoudi21@gmail.com"
  },
  {
    "name": "Sarahmerzougui",
    "email": "sarahmerzougui04@icloud.com"
  },
  {
    "name": "Sellidj Maria",
    "email": "sellidjmaria81@gmail.com"
  },
  {
    "name": "Zemiri selsabil",
    "email": "selsabilzm@gmail.com"
  },
  {
    "name": "Zemiri selsabil",
    "email": "selsabilzm@gmail.com"
  },
  {
    "name": "Taleb serine cherifa",
    "email": "serinesafa2001@gmail.com"
  },
  {
    "name": "Taleb serine cherifa",
    "email": "serinetaleb18@gmail.com"
  },
  {
    "name": "Si Ahmed Abderzak",
    "email": "siahmedabderrezak@gmail.com"
  },
  {
    "name": "Tei Khadidja",
    "email": "sirinetei09dz@gmail.com"
  },
  {
    "name": "Cerine",
    "email": "sirinopro1235@gmail.com"
  },
  {
    "name": "سيرين شنيوني",
    "email": "sirinopro1235@gmail.com"
  },
  {
    "name": "Bouhadjar Tesnim",
    "email": "tesnimbou11@gmail.com"
  },
  {
    "name": "MENIAI ABDENNOUR",
    "email": "the2real8abdou@gmail.com"
  },
  {
    "name": "Touil cerine",
    "email": "tsyrine21@gmail.com"
  },
  {
    "name": "Turqui nardjes",
    "email": "turquinardjes55@gmail.com"
  },
  {
    "name": "Meriem Benmouma",
    "email": "victoriaash387@gmail.com"
  },
  {
    "name": "Wissem touileb",
    "email": "wissemtouileb91@gmail.com"
  },
  {
    "name": "yakine aridj",
    "email": "yakinearidj2@gmail.com"
  },
  {
    "name": "Yasmine Ait Mebarek",
    "email": "yasmineaitmebarek.st.ingd@gmail.com"
  },
  {
    "name": "Bouchekhima yasmine",
    "email": "yasminebouchekhima@gmail.com"
  },
  {
    "name": "Youcef Lezzoum",
    "email": "youceflezzoum626@gmail.com"
  }
];

// =========================================================================
// RUN THIS FUNCTION TO SEND DAY 8 EMAIL
// =========================================================================
function sendDay8Email() {
  var sentCount = 0;
  
  for (var i = 0; i < PARTICIPANTS.length; i++) {
    var p = PARTICIPANTS[i];
    if (!p.email || p.email.trim() === "") continue;
    
    try {
      sendDay8Template(p.name, p.email.trim());
      Logger.log("[SUCCESS] Sent Day 8 Schedule to: " + p.email);
      sentCount++;
      
      // 1 second delay between emails to avoid hitting Apps Script spam filters
      Utilities.sleep(1000);
      
    } catch (e) {
      Logger.log("[ERROR] Failed sending to " + p.email + ": " + e.toString());
    }
  }
  
  Logger.log("[FINISHED] Day 8 Emailer finished! Sent " + sentCount + " emails.");
}

// =========================================================================
// [TEMPLATE] EMAIL DESIGN
// =========================================================================
function sendDay8Template(fullName, email) {
  var subject = "QSSC3 2026 - Day 8: Vibe Coding 101 & AI Hackathon";
  
  var htmlBody = 
    "<div style='font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #000000; box-shadow: 6px 6px 0 #000000; padding: 24px; background: #fffaf0; color: #2d3748;'>" +
      
      // Header Banner
      "<div style='background: #0f172a; padding: 22px; border-bottom: 4px solid #000000; text-align: center;'>" +
        "<h1 style='color: #2dd4bf; font-size: 23px; margin: 0; font-family: monospace; text-transform: uppercase; letter-spacing: 1px;'>[QSSC3] Day 8: Vibe Coding</h1>" +
        "<p style='color: #94a3b8; font-size: 11px; margin: 6px 0 0; font-weight: bold; letter-spacing: 0.5px; font-family: monospace;'>QUANTA SCIENCE SUMMER CAMP</p>" +
      "</div>" +
      
      // Body Content
      "<div style='padding: 24px 0; border-bottom: 4px solid #000000;'>" +
        "<p style='font-size: 16px; line-height: 1.5; margin-bottom: 14px;'>Hi <strong>" + (fullName || "Camp Companion") + "</strong>,</p>" +
        "<p style='font-size: 15px; line-height: 1.6; margin-bottom: 20px; color: #475569;'>" +
          "Discover a new way of programming where AI becomes your coding partner! Tomorrow we will learn how to build, test, improve, and present a real project from scratch by communicating effectively with AI." +
        "</p>" +
        
        // Laptop warning block (CRITICAL) - Using HTML entities &#9888; for warning symbol
        "<div style='background: #fffbeb; border: 3px solid #e11d48; padding: 18px; margin-bottom: 28px; box-shadow: 4px 4px 0 #000000;'>" +
          "<h3 style='margin: 0 0 10px 0; font-size: 14px; color: #e11d48; font-family: monospace; font-weight: bold; text-transform: uppercase;'>&#9888; CRITICAL REQUIREMENT</h3>" +
          "<p style='margin: 0; font-size: 14.5px; line-height: 1.5; font-weight: bold; color: #9f1239;'>" +
            "Please bring your LAPTOP and charger with you tomorrow! This is a fully hands-on mini-hackathon day where you will build and code your own web application. Extension cords are also highly recommended." +
          "</p>" +
        "</div>" +
        
        // Logistics Box - Using HTML entities for icons
        "<div style='background: #f8fafc; border: 3px solid #0f172a; padding: 18px; margin-bottom: 28px; box-shadow: 4px 4px 0 #000000;'>" +
          "<h3 style='margin: 0 0 10px 0; font-size: 14px; color: #0f172a; font-family: monospace; font-weight: bold; text-transform: uppercase;'>&#128205; LOGISTICS</h3>" +
          "<p style='margin: 6px 0; font-size: 14px;'><strong>&#128197; Date:</strong> Tuesday, July 14, 2026 (Day 8)</p>" +
          "<p style='margin: 6px 0; font-size: 14px;'><strong>&#127979; Location:</strong> Faculty Library</p>" +
          "<p style='margin: 6px 0; font-size: 14px;'><strong>&#128100; Instructor:</strong> Hamidani Khalil</p>" +
          "<p style='margin: 6px 0; font-size: 14px;'><strong>&#128100; Co-Instructor:</strong> Belili Samy</p>" +
        "</div>" +
        
        // Timeline Table
        "<h4 style='font-family: monospace; font-size: 14px; text-transform: uppercase; margin: 0 0 14px 0; color: #023047;'>&#128338; SESSION TIMELINE:</h4>" +
        "<table width='100%' cellpadding='0' cellspacing='0' style='border-collapse: collapse; margin-bottom: 28px;'>" +
          
          // Vibe Coding 101
          "<tr><td style='padding: 14px; background: #ffffff; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td><strong>&#128187; Vibe Coding 101: From Idea to App</strong>" +
              "<div style='font-size: 12px; color: #0d9488; font-family: monospace; font-weight: bold; margin-top: 4px;'>AI-assisted coding, Prompt engineering, UI/UX</div></td>" +
              "<td align='right' style='color: #0f172a; font-family: monospace; font-weight: bold; vertical-align: top;'>09:30 - 11:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
          "<tr><td style='height: 10px;'></td></tr>" +
          
          // Guided Build
          "<tr><td style='padding: 14px; background: #ffffff; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td><strong>&#128736; Guided Build Lab</strong>" +
              "<div style='font-size: 12px; color: #0d9488; font-family: monospace; font-weight: bold; margin-top: 4px;'>Git organization, testing, product design</div></td>" +
              "<td align='right' style='color: #0f172a; font-family: monospace; font-weight: bold; vertical-align: top;'>11:30 - 12:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
          "<tr><td style='height: 10px;'></td></tr>" +
          
          // Lunch
          "<tr><td style='padding: 10px 14px; background: #f8fafc; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td>&#127869; Lunch Break</td>" +
              "<td align='right' style='color: #64748b; font-family: monospace; font-weight: bold; vertical-align: top;'>12:30 - 13:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
          "<tr><td style='height: 10px;'></td></tr>" +
          
          // Hackathon
          "<tr><td style='padding: 14px; background: #ffffff; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td><strong>&#128293; Vibe Coding Sprint: Mini Hackathon</strong>" +
              "<div style='font-size: 12px; color: #0d9488; font-family: monospace; font-weight: bold; margin-top: 4px;'>Team competition, prototype creation, jury presentation</div></td>" +
              "<td align='right' style='color: #0f172a; font-family: monospace; font-weight: bold; vertical-align: top;'>13:30 - 16:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
        "</table>" +
        
        // Workshop Details
        "<h4 style='font-family: monospace; font-size: 14px; text-transform: uppercase; margin: 0 0 12px 0; color: #0f172a;'>&#128366; PROGRAMME DETAILS:</h4>" +
        
        // Vibe Coding details
        "<div style='background: #fff; border: 2px solid #000; padding: 14px; margin-bottom: 14px; box-shadow: 2px 2px 0 #000;'>" +
          "<strong style='color: #0d9488; font-size: 13.5px;'>&#128187; Vibe Coding 101: From Idea to App</strong>" +
          "<p style='margin: 8px 0 0 0; font-size: 13px; line-height: 1.5; color: #475569;'>" +
            "An introduction to AI-assisted software development and the fundamentals of building applications through effective prompting. Explore: Prompt engineering, rapid prototyping, frontend/backend generation, debugging with AI, and UI/UX design." +
          "</p>" +
        "</div>" +
        
        // Hackathon details
        "<div style='background: #fff; border: 2px solid #000; padding: 14px; box-shadow: 2px 2px 0 #000;'>" +
          "<strong style='color: #0d9488; font-size: 13.5px;'>&#128293; Vibe Coding Sprint: Mini Hackathon</strong>" +
          "<p style='margin: 8px 0 0 0; font-size: 13px; line-height: 1.5; color: #475569;'>" +
            "A fast-paced team competition where participants transform an idea into a working web application within a limited time. Teams will choose a challenge, build a prototype using AI, improve user experience, and pitch to a jury. Evaluation metrics: Creativity, functionality, UX, effective use of AI, and teamwork." +
          "</p>" +
        "</div>" +
        
      "</div>" +
      
      // Footer
      "<div style='padding-top: 16px; font-size: 11px; color: #718096; text-align: center;'>" +
        "© 2026 Quanta Club. Built for student scientists and developers." +
      "</div>" +
      
    "</div>";
    
  var textBody = "Hi Camp Companion,\n\n" +
                 "Here is the program for tomorrow, Tuesday, July 14 (Day 8):\n\n" +
                 "Date: Tuesday, July 14, 2026\n" +
                 "Location: Faculty Library\n" +
                 "Instructor: Hamidani Khalil -- Co-instructor: Belili Samy\n" +
                 "Hours: 09:30 - 16:30\n\n" +
                 "IMPORTANT: Please bring your LAPTOP and charger! This is a fully hands-on mini-hackathon day where you will build and code your own web application.\n\n" +
                 "Session 1 (09:30 - 11:30): Vibe Coding 101: From Idea to App\n" +
                 "Session 2 (11:30 - 12:30): Guided Build Lab\n" +
                 "Session 3 (13:30 - 16:30): Vibe Coding Sprint: Mini Hackathon\n\n" +
                 "See you tomorrow!\n" +
                 "Quanta Club Team";
                 
  GmailApp.sendEmail(email, subject, textBody, { htmlBody: htmlBody });
}

```
