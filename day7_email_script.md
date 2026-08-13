# Google Apps Script: Day 7 Custom Email (AI & Games)

This script contains the exact copy-pasteable code with your text formatted beautifully.

## [LIST] Apps Script Code

```javascript
// =========================================================================
// [LIST] DAY 7 ACCEPTED PARTICIPANTS REGISTRY (Total: 111 users)
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
// RUN THIS FUNCTION TO SEND DAY 7 EMAIL
// =========================================================================
function sendDay7Email() {
  var sentCount = 0;
  
  for (var i = 0; i < PARTICIPANTS.length; i++) {
    var p = PARTICIPANTS[i];
    if (!p.email || p.email.trim() === "") continue;
    
    try {
      sendDay7Template(p.name, p.email.trim());
      Logger.log("[SUCCESS] Sent Day 7 Schedule to: " + p.email);
      sentCount++;
      
      // 1 second delay between emails to avoid hitting Apps Script spam filters
      Utilities.sleep(1000);
      
    } catch (e) {
      Logger.log("[ERROR] Failed sending to " + p.email + ": " + e.toString());
    }
  }
  
  Logger.log("[FINISHED] Day 7 Emailer finished! Sent " + sentCount + " emails.");
}

// =========================================================================
// [TEMPLATE] EMAIL DESIGN
// =========================================================================
function sendDay7Template(fullName, email) {
  var subject = "QSSC3 2026 - Day 7: Quanta Talks & Game Space";
  
  var htmlBody = 
    "<div style='font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #000000; box-shadow: 6px 6px 0 #000000; padding: 24px; background: #fffaf0; color: #2d3748;'>" +
      
      // Header Banner
      "<div style='background: #023047; padding: 22px; border-bottom: 4px solid #000000; text-align: center;'>" +
        "<h1 style='color: #ffcc00; font-size: 24px; margin: 0; font-family: monospace; text-transform: uppercase; letter-spacing: 1px;'>[QSSC3] Day 7 Programme</h1>" +
        "<p style='color: #55ffff; font-size: 11px; margin: 6px 0 0; font-weight: bold; letter-spacing: 0.5px; font-family: monospace;'>QUANTA SCIENCE SUMMER CAMP</p>" +
      "</div>" +
      
      // Body Content
      "<div style='padding: 24px 0; border-bottom: 4px solid #000000;'>" +
        "<p style='font-size: 16px; line-height: 1.5; margin-bottom: 14px;'>Hi <strong>" + (fullName || "Camp Companion") + "</strong>,</p>" +
        "<p style='font-size: 15px; line-height: 1.6; margin-bottom: 20px; color: #475569;'>" +
          "Get ready for a day combining thoughtful discussion, teamwork, and recreational games! Here is the programme for tomorrow, <strong>Monday, July 13 — Day 7</strong>." +
        "</p>" +
        
        // Schedule Info Box
        "<div style='background: #fffbeb; border: 3px solid #ffb703; padding: 18px; margin-bottom: 28px; box-shadow: 4px 4px 0 #000000;'>" +
          "<h3 style='margin: 0 0 12px 0; font-size: 14px; color: #023047; font-family: monospace; font-weight: bold; text-transform: uppercase;'>📅 PROGRAMME LOGISTICS</h3>" +
          "<p style='margin: 6px 0; font-size: 14.5px;'><strong>📅 Date:</strong> Monday, July 13, 2026</p>" +
          "<p style='margin: 6px 0; font-size: 14.5px;'><strong>📍 Location:</strong> Amphi Science B</p>" +
          "<p style='margin: 6px 0; font-size: 14.5px;'><strong>🕚 Time:</strong> 11:00 – 16:30</p>" +
        "</div>" +
        
        // Timeline Table
        "<h4 style='font-family: monospace; font-size: 14px; text-transform: uppercase; margin: 0 0 14px 0; color: #023047;'>🕒 SESSION SCHEDULE:</h4>" +
        "<table width='100%' cellpadding='0' cellspacing='0' style='border-collapse: collapse; margin-bottom: 28px;'>" +
          
          // Quanta Talks
          "<tr><td style='padding: 14px; background: #ffffff; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td><strong>🎤 Quanta Talks: AI and the Human Future</strong>" +
              "<div style='font-size: 12px; color: #0284c7; font-family: monospace; font-weight: bold; margin-top: 4px;'>Interactive debate & team challenges</div></td>" +
              "<td align='right' style='color: #d97706; font-family: monospace; font-weight: bold; vertical-align: top;'>11:00 - 12:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
          "<tr><td style='height: 10px;'></td></tr>" +
          
          // Break
          "<tr><td style='padding: 10px 14px; background: #f8fafc; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td>🍽️ Lunch Break</td>" +
              "<td align='right' style='color: #64748b; font-family: monospace; font-weight: bold; vertical-align: top;'>12:30 - 13:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
          "<tr><td style='height: 10px;'></td></tr>" +
          
          // Game Space
          "<tr><td style='padding: 14px; background: #ffffff; border: 2px solid #000000; box-shadow: 2px 2px 0 #000;'>" +
            "<table width='100%'><tr>" +
              "<td><strong>🎮 Game Space: Play, Connect & Compete</strong>" +
              "<div style='font-size: 12px; color: #0284c7; font-family: monospace; font-weight: bold; margin-top: 4px;'>Social, board, and digital gaming</div></td>" +
              "<td align='right' style='color: #d97706; font-family: monospace; font-weight: bold; vertical-align: top;'>13:30 - 16:30</td>" +
            "</tr></table>" +
          "</td></tr>" +
          
        "</table>" +
        
        // Quanta Talks description
        "<div style='background: #f0f9ff; border: 2px solid #0284c7; padding: 18px; margin-bottom: 24px; box-shadow: 3px 3px 0 #000000;'>" +
          "<strong style='color: #0369a1; font-size: 15px;'>🎤 11:00–12:30 — Quanta Talks: AI and the Human Future</strong>" +
          "<p style='margin: 8px 0 0 0; font-size: 13.5px; line-height: 1.5; color: #334155;'>" +
            "An interactive session exploring how artificial intelligence is transforming education, healthcare, science, employment, creativity, and society." +
          "</p>" +
          "<p style='margin: 8px 0 0 0; font-size: 13.5px; line-height: 1.5; color: #334155;'>" +
            "Through quick polls, real-life scenarios, team challenges, and debate, we will discuss one central question:<br>" +
            "<strong style='color: #0369a1; display: block; margin-top: 6px; text-align: center;'>"How much control should we give artificial intelligence?"</strong>" +
          "</p>" +
          
          // Prep checklist
          "<div style='margin-top: 14px; background: #ffffff; border: 1.5px solid #0284c7; padding: 12px;'>" +
            "<strong style='color: #0369a1; font-size: 13px; font-family: monospace;'>💡 TO PREPARE, THINK ABOUT:</strong>" +
            "<ul style='margin: 6px 0 0 0; padding-left: 20px; font-size: 13px; color: #475569; line-height: 1.45;'>" +
              "<li>One real example of how AI affects your field or daily life.</li>" +
              "<li>One important benefit of AI.</li>" +
              "<li>One possible risk or ethical concern.</li>" +
              "<li>One decision that should always remain under human control.</li>" +
            "</ul>" +
          "</div>" +
          
          "<p style='margin: 10px 0 0 0; font-size: 12.5px; color: #64748b; font-style: italic;'>" +
            "No technical knowledge is required—just bring your ideas, questions, and opinions!" +
          "</p>" +
        "</div>" +
        
        // Game Space description
        "<div style='background: #f0fdf4; border: 2px solid #16a34a; padding: 18px; margin-bottom: 24px; box-shadow: 3px 3px 0 #000000;'>" +
          "<strong style='color: #15803d; font-size: 15px;'>🎮 13:30–16:30 — Game Space: Play, Connect & Compete</strong>" +
          "<p style='margin: 8px 0 0 0; font-size: 13.5px; line-height: 1.5; color: #334155;'>" +
            "Enjoy a relaxed afternoon featuring social games, board games, and digital gaming, including UNO, Monopoly, FIFA, and other friendly competitions." +
          "</p>" +
          
          // Bring list
          "<div style='margin-top: 14px; background: #ffffff; border: 1.5px solid #16a34a; padding: 12px;'>" +
            "<strong style='color: #15803d; font-size: 13px; font-family: monospace;'>🎮 YOU ARE ENCOURAGED TO BRING:</strong>" +
            "<ul style='margin: 6px 0 0 0; padding-left: 20px; font-size: 13px; color: #475569; line-height: 1.45;'>" +
              "<li>PS4, PS5, or Xbox consoles</li>" +
              "<li>Controllers and multiplayer games</li>" +
              "<li>Board games and card games (UNO, Monopoly, chess, or similar games)</li>" +
            "</ul>" +
          "</div>" +
        "</div>" +
        
        // Closing phrase
        "<p style='font-size: 15px; font-weight: bold; text-align: center; margin-top: 24px; color: #023047;'>" +
          "See you tomorrow—ready to think, debate, play, and connect!" +
        "</p>" +
        
      "</div>" +
      
      // Footer
      "<div style='padding-top: 16px; font-size: 12px; color: #718096; text-align: center; font-family: monospace; font-weight: bold;'>" +
        "Quanta Club<br>" +
        "<span style='color: #0284c7;'>QSSC³ — The Future Is Ours</span>" +
      "</div>" +
      
    "</div>";
    
  var textBody = "Hi Camp Companions,\n\n" +
                 "Here is the programme for tomorrow, Monday, July 13 — Day 7. Get ready for a day combining thoughtful discussion, teamwork, and recreational games!\n\n" +
                 "📅 Date: Monday, July 13, 2026\n" +
                 "📍 Location: Amphi Ben Badis\n" +
                 "🕚 Time: 11:00–16:30\n\n" +
                 "🎤 11:00–12:30 — Quanta Talks: AI and the Human Future\n" +
                 "An interactive session exploring how artificial intelligence is transforming education, healthcare, science, employment, creativity, and society. Through quick polls, real-life scenarios, team challenges, and debate, we will discuss one central question: How much control should we give artificial intelligence?\n\n" +
                 "To prepare, think about:\n" +
                 "- One real example of how AI affects your field or daily life.\n" +
                 "- One important benefit of AI.\n" +
                 "- One possible risk or ethical concern.\n" +
                 "- One decision that should always remain under human control.\n\n" +
                 "No technical knowledge is required—just bring your ideas, questions, and opinions!\n\n" +
                 "🍽️ 12:30–13:30 — Lunch Break\n\n" +
                 "🎮 13:30–16:30 — Game Space: Play, Connect & Compete\n" +
                 "Enjoy a relaxed afternoon featuring social games, board games, and digital gaming, including UNO, Monopoly, FIFA, and other friendly competitions.\n" +
                 "You are highly encouraged to bring any games or equipment you can, such as: PS4, PS5, or Xbox, controllers, and board/card games.\n\n" +
                 "See you tomorrow—ready to think, debate, play, and connect!\n\n" +
                 "Quanta Club\n" +
                 "QSSC³ — The Future Is Ours";
                 
  GmailApp.sendEmail(email, subject, textBody, { htmlBody: htmlBody });
}

```
