# Randy's Print Shop

A simple, free website for showing off 3D prints and taking order requests. It's hosted on GitHub Pages.

## What's in this folder

| File | What it does | Who edits it |
|---|---|---|
| `products.js` | Shop name, order-form link, and **the list of items** | Randy ✏️ |
| `images/` | Item photos | Randy 📸 |
| `index.html` | Page layout and text (story, FAQ) | Sometimes |
| `style.css` | Colors and look | Rarely |
| `script.js` | Makes the shop work | No need |

## Put it online (one-time, about 15 minutes, done by a parent)

1. **Create a GitHub account** at https://github.com/signup. GitHub requires users to be 13 or older, so the account should be a parent's.
2. Click **+ → New repository**.
   - Name it `randy-prints`. If you name it `yourusername.github.io` instead, the site lives at that address directly.
   - Set it to **Public**, then click **Create repository**.
3. Click **uploading an existing file**, drag in *everything* in this folder (including the `images` folder), then click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, then **main** and **/(root)**, then **Save**.
5. Wait 1–2 minutes. The site will be at `https://yourusername.github.io/randy-prints/`.

## Set up the order form (Google Forms)

1. Go to https://forms.google.com and make a new form called "Randy's Print Shop – Order Request".
2. Suggested questions:
   - Kid's **first name only** (short answer, required)
   - Which item? (dropdown with your item names, plus "Custom idea")
   - Color (short answer)
   - How many? (number)
   - Custom idea details (paragraph, optional)
   - **Parent/guardian email** (required)
   - Checkbox: "My parent says it's OK to order" (required)
3. Turn on **Settings → Responses → Get email notifications** so you hear about new orders.
4. Click **Send → link icon (🔗)**, copy the link, and paste it into `orderFormUrl` in `products.js`.

## How Randy adds a new item

1. Take a square photo of the print on a plain background and name it something like `octopus.jpg`.
2. On GitHub, open the `images` folder, click **Add file → Upload files**, and upload the photo.
3. Open `products.js` and click the ✏️ pencil icon.
4. Copy one `{ ... },` block, paste it at the end of the list, and change the name, price, `image: "images/octopus.jpg"`, colors and so on.
5. Click **Commit changes**. The site updates in about a minute.

To mark an item as sold out, change `status` to `"sold-out"`.

## Optional: a custom domain (like randyprints.com)

1. Buy a domain from a registrar such as Cloudflare or Namecheap (usually $10–20 a year).
2. In the repo, go to **Settings → Pages → Custom domain**, enter the domain, and save.
3. At the registrar, add the DNS records that GitHub shows. GitHub's guide: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
4. Check **Enforce HTTPS** once it becomes available.

## Safety checklist

- [ ] No full names, school name, home address or face photos on the site
- [ ] The form asks for a first name only, plus a parent's email
- [ ] All payment happens in person, and the site never collects card details
- [ ] Every model sold is Randy's own design, or its license allows commercial use
- [ ] The school is OK with orders and pickups on campus
