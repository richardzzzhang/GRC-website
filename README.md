# grc brown website

## quick start
unzip → double-click `index.html`

## changing stuff

**colors/fonts** → `css/style.css`, edit the `:root` block at the top

**text on any page** → just edit the html directly

**add a team member** → copy a `.team-card` block in `team.html`, update initials/name/role

**add a photo** → drop it in `images/`, then swap the placeholder with `<img src="images/yourphoto.jpg" alt="..."/>`
- hero photo → index.html, look for "Add your team photo here"
- mission photo → index.html, the `.mission-right` div
- about photos → about.html, the `.two-col-right` divs
- team photos → replace the initials inside `.team-avatar` with an img tag

**add a client** → `<span class="client-name">Org Name</span>` in the clients row in index.html

**add an faq** → copy a `.faq-item` block in contact.html

## contact form emails
sign up at formspree.io → create a form → add `action="https://formspree.io/f/YOURID"` to the form tag in contact.html → delete the `e.preventDefault()` line in main.js

## deploy
upload to github → settings → pages → source: main branch → done
