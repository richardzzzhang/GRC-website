# GRC Brown Website — 5 Pages

index.html, about.html, team.html, services.html, contact.html
css/style.css, js/main.js, images/ (add your photos here)

---

## HOW TO PUT THIS ON GITHUB (step by step)

### Step 1 — Make a GitHub account
Go to https://github.com and sign up for free if you don't have one.

### Step 2 — Create a new repository
- Click the green "New" button (top left)
- Name it: grc-brown
- Leave everything else as default
- Click "Create repository"

### Step 3 — Upload your files
- On the next screen, click "uploading an existing file"
- Drag ALL the files from this zip into the upload window
  - Make sure to upload the css/ and js/ folders too, not just the HTML files
- Click "Commit changes"

### Step 4 — Enable GitHub Pages
- Go to Settings (top menu of your repo)
- Scroll down to "Pages" in the left sidebar
- Under "Source" select: Deploy from branch → main → / (root)
- Click Save

### Step 5 — Your site is live!
After ~1 minute, visit: https://YOUR-USERNAME.github.io/grc-brown/
(replace YOUR-USERNAME with your actual GitHub username)

---

## HOW TO ADD YOUR PHOTOS

1. Put your image files in the images/ folder
2. Open the HTML file you want to edit
3. Find the placeholder div, e.g.:
   <div class="hero-image-placeholder">[ Add your photo here ]</div>
4. Replace it with:
   <img src="images/your-photo.jpg" alt="Description" style="width:100%;border-radius:8px;object-fit:cover;max-height:380px;" />

Photo slots:
- Home hero:         hero-image-placeholder  (building/city photo)
- About story:       story-image-placeholder (team meeting photo)
- About what we do:  what-we-do-image-placeholder (UN/global photo)
- About mission:     mission-image-placeholder (handshake photo)

---

## HOW TO MAKE THE CONTACT FORM ACTUALLY SEND EMAILS

The form currently shows a success message but doesn't email anyone.
To make it real:

1. Go to https://formspree.io and sign up (free)
2. Create a new form — copy your form ID (looks like: xabcdefg)
3. In contact.html, change this line:
   <form id="contactForm">
   to:
   <form id="contactForm" action="https://formspree.io/f/xabcdefg" method="POST">
4. That's it — submissions go straight to your email.

---

## UPDATING TEAM MEMBERS

In team.html, each member looks like:
  <div class="team-card">
    <div class="team-avatar">KA</div>
    <h3>Kashif Ansari</h3>
    <p>Co-President</p>
  </div>

Change the initials, name, and title as needed.
To add a photo instead of initials:
  <div class="team-avatar" style="background:none;padding:0;overflow:hidden;">
    <img src="images/kashif.jpg" style="width:100%;height:100%;object-fit:cover;" />
  </div>
