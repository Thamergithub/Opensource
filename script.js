
const alternativesData = [
  {
    "paid": "Microsoft Office",
    "domain": "Office & Productivity",
    "icon": "fa-file-word",
    "alternatives": [
      {"name": "LibreOffice", "description": "Complete open-source office suite", "website": "https://www.libreoffice.org/" , "image": "https://i0.wp.com/iledefrance-unowhy.com/wp-content/uploads/2021/07/LOGO-LIBRE-OFFICE.png?fit=354%2C383&ssl=1", "demo": "video/Optimizing LibreOffice To Work Like Microsoft Office ... - Michael Horn (720p, h264).mp4", "demoType": "video"},
      {"name": "OnlyOffice", "description": "Collaborative office suite", "website": "https://www.onlyoffice.com/" , "image": "https://www.drupal.org/files/project-images/Logo%20ONLYOFFICE.png" , "demo": "video/ONLYOFFICE Tutorial  How to Use ONLYOFFICE for Beginners - How to Hippo 🦛 (720p, h264).mp4", "demoType": "video"},
      {"name": "Google Docs (Free version)", "description": "Online document editor", "website": "https://docs.google.com/" , "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png" , "demo": "video/How To Use Google Docs  Tech Insider - Insider Tech (720p, h264).mp4", "demoType": "video"}
    ]
  },
  {
    "paid": "Adobe Photoshop",
    "domain": "Image & Design",
    "icon": "fa-image",
    "alternatives": [
      {"name": "GIMP", "description": "Powerful open-source image editor", "website": "https://www.gimp.org/", "image" : "https://i0.wp.com/iledefrance-unowhy.com/wp-content/uploads/2021/03/GIMP-logoo.png?fit=1200%2C1200&ssl=1" , "demo": "video/[ TUTO ] les BASES de GIMP en 10 POINTS ! Tutorial en français - Bertrand . Tech (720p, h264).mp4", "demoType": "video"},
      {"name": "Krita", "description": "Free digital painting software", "website": "https://krita.org/" , "image" : "https://upload.wikimedia.org/wikipedia/commons/7/73/Calligrakrita-base.svg" , "demo": "video/Krita 5 Tutorial for Beginners - Getting Started (Lesson 1) 🎨 - Aaron Rutten (1080p, h264).mp4", "demoType": "video"},
      {"name": "Inkscape", "description": "Vector graphics editor", "website": "https://inkscape.org/" ,  "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1024px-Inkscape_Logo.svg.png" , "demo": "video/Inkscape Lesson 1 - Interface and Basic Drawing - TJ FREE (720p, h264).mp4", "demoType": "video"}
    ]
  },
  {
    "paid": "Adobe Premiere Pro",
    "domain": "Video & Audio",
    "icon": "fa-video",
    "alternatives": [
      {"name": "OpenShot", "description": "Easy-to-use video editor", "website": "https://www.openshot.org/" , "image": "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/openshot-icon.png" , "demo": "video/OpenShot Video Editor - Tutorial for Beginners in 9 MINUTES!  [ UPDATED ] - Skills Factory (720p, h264).mp4", "demoType": "video"},
      {"name": "Kdenlive", "description": "Professional video editor", "website": "https://kdenlive.org/" ,  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kdenlive-logo.svg/2560px-Kdenlive-logo.svg.png" , "demo": "video/Kdenlive Beginner Tutorial Basic Video Editing 2022 - EPIC Mentorship (720p, h264).mp4", "demoType": "video"},
      {"name": "Shotcut", "description": "Free cross-platform video editor", "website": "https://shotcut.org/" , "image": "https://iconape.com/wp-content/files/ia/384353/svg/384353.svg" , "demo": "video/How To Use Shotcut Video Editor - Insider Tech (720p, h264).mp4", "demoType": "video"}
    ]
  },
  {
    "paid": "JetBrains PyCharm Professional",
    "domain": "Development & Coding",
    "icon": "fa-code",
    "alternatives": [
      {"name": "VS Code", "description": "Free, lightweight code editor", "website": "https://code.visualstudio.com/" , "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" , "demo": "video/Learn Visual Studio Code in 7min (Official Beginner Tutorial) - Visual Studio Code (720p, h264).mp4", "demoType": "video" },
      {"name": "Eclipse", "description": "Open-source IDE for multiple languages", "website": "https://www.eclipse.org/" , "image": "https://www.svgrepo.com/show/353685/eclipse-icon.svg" , "demo": "video/#0 Java Tutorial  How to use Eclipse - Telusko (720p, h264).mp4", "demoType": "video" },
      {"name": "Atom", "description": "Hackable text editor for developers", "website": "https://atom.io/" , "image": "https://staging.svgrepo.com/show/86346/atom.svg" , "demo": "video/How to run Python Program in Atom Editor - OSPY (720p, h264).mp4", "demoType": "video" }
    ]
  },
  {
    "paid": "Dropbox",
    "domain": "Cloud Storage & Collaboration",
    "icon": "fa-cloud",
    "alternatives": [
      {"name": "Nextcloud", "description": "Self-hosted cloud storage solution", "website": "https://nextcloud.com/" , "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/2560px-Nextcloud_Logo.svg.png" , "demo": "video/Nextcloud Made Easy #0 Introduction - Techlore (720p, h264).mp4", "demoType": "video"},
      {"name": "Seafile", "description": "Secure file syncing and sharing", "website": "https://www.seafile.com/" ,  "image": "https://staging.svgrepo.com/show/331570/seafile.svg" , "demo": "video/Installation du client Seafile - Arx One (720p, h264).mp4", "demoType": "video"},
      {"name": "OwnCloud", "description": "Open-source cloud platform", "website": "https://owncloud.com/" , "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/OwnCloud_logo_and_wordmark.svg/1280px-OwnCloud_logo_and_wordmark.svg.png" , "demo": "video/Quick Guide Update Your OwnCloud Web URL - Easy Steps! - TheShellGuru (720p, h264).mp4", "demoType": "video" }
    ]
  },
  {
    "paid": "Norton Antivirus",
    "domain": "Security & Utilities",
    "icon": "fa-shield-alt",
    "alternatives": [
      {"name": "ClamAV", "description": "Open-source antivirus engine", "website": "https://www.clamav.net/" , "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/ClamAV_Logo.png" , "demo": "video/How To Install and Use ClamAV to Protect Your Linux System From Virus_Malware - InfoSec Pat (720p, h264).mp4", "demoType": "video"},
      {"name": "Sophos Home Free", "description": "Free security solution", "website": "https://www.sophos.com/en-us/free-tools.aspx" , "image": "https://www.svgrepo.com/show/331579/sophos.svg" , "demo": "video/How To Run Full Scan Sophos Home Free Antivirus [Tutorial] - MDTechVideos2 (720p, h264).mp4", "demoType": "video"},
      {"name": "Comodo Antivirus (Free version)", "description": "Free security and firewall", "website": "https://www.comodo.com/home/internet-security/antivirus.php" , "image": "https://tiendassl.com/cdn/shop/collections/Comodo_Group_logo_svg.png?v=1731528557" , "demo": "video/Comodo Antivirus Free 2024 Review and Tutorial - LuisTutorialTV (720p, h264).mp4", "demoType": "video"}
    ]
  }
];

// Search and display alternatives
document.getElementById('searchBtn').addEventListener('click', searchApp);
document.getElementById('clearBtn').addEventListener('click', clearResults);

// Press Enter to search
document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchApp();
  }
});

function searchApp() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!query) return;

  const found = alternativesData.find(item => item.paid.toLowerCase().includes(query));

  if (found) {
    found.alternatives.forEach(alt => {
      const card = document.createElement('div');
      card.className = 'card';
      
      // Generate unique ID for each video player
      const videoId = `video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      card.innerHTML = `
        ${alt.image ? `<img src="${alt.image}" alt="${alt.name}" class="alt-image">` : ''}
        <h3><i class="fas ${found.icon}"></i> ${alt.name}</h3>
        <p>${alt.description}</p>
        ${alt.demo && alt.demoType === 'video' ? `
          <div class="video-container">
            <video id="${videoId}" class="demo-video" controls>
              <source src="${alt.demo}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        ` : ''}
        <a href="${alt.website}" target="_blank">Visit Website</a>
      `;
      resultsDiv.appendChild(card);
    });
  } else {
    resultsDiv.innerHTML = '<p style="text-align:center; margin-top:20px;">No alternatives found. Try another software name.</p>';
  }
}

// Clear input and results
function clearResults() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
  document.getElementById('searchInput').focus(); // focus back on input
}
