# Hayaath Banking website

A static, one-page website for **Hayaath Banking by Hayaath Group**, built with React.
It tells the story like a short film: the problem, the idea, how the account and PAN flow works,
who does what, the planned family account, the future vision, and the waitlist.

There is no backend, login or database. The finished site is plain files you can host anywhere.

## What's inside

| Tool | Why |
| --- | --- |
| React 19 + Vite 8 | The site and the build |
| Tailwind CSS 4 | Styling |
| Motion (`motion/react`) | Animations |
| Lenis | Smooth scrolling |
| Newsreader + Hanken Grotesk | Fonts, bundled with the site (no Google Fonts call) |

## Quick start

You need **Node.js 22 or newer** ([nodejs.org](https://nodejs.org)).

```bash
npm install      # once, downloads the packages
npm run dev      # opens a live preview at http://localhost:5173
npm run build    # makes the final site in the dist/ folder
npm run preview  # checks the built site at http://localhost:4173
```

## Put it online (free)

The `dist/` folder in this zip is already built, so you can publish it straight away.

**GitHub Pages (automatic deploys from this repository)**
1. Push your changes to the `main` branch on GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.
5. Your site will be at https://sanushcj.github.io/Hayaath-Banking-/.

The workflow builds the site and publishes it whenever you push to `main`. The first deployment may take a few minutes.

**Easiest: Netlify Drop**
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page.
3. You get a live link in a few seconds.

**Vercel (good once the code is on GitHub)**
1. Push this folder to a GitHub repo.
2. In Vercel, click "Add New Project" and pick the repo.
3. Vercel detects Vite. Keep the defaults and click Deploy.

If you change anything, run `npm run build` again and re-upload `dist`.

## Before you share the link

1. **Waitlist link.** Open `src/content.js` and paste your Google Form link into `waitlistUrl`.
   While it's empty, the final button says "Waitlist opens soon" and the other buttons scroll down to it.
2. **Contact links.** In the same file, fill `email`, `linkedin` and `instagram`. Empty ones stay hidden.
3. **Link previews.** If you use a custom domain, update the URLs in `index.html`.
   WhatsApp and LinkedIn need the full address to show the preview image (`public/og-image.png`).
4. **Check the facts on the page are still true:**
   - "more than 30 students" (Problem scene) comes from your interviews. Update it if the number changes.
   - The family account is marked "Planned. Needs partner bank approval." Keep that until the bank confirms.
   - Everything in "What's next" is marked as not live and not final. Keep it that way until it ships.

## Where to change things

| You want to change | Edit this |
| --- | --- |
| Any words on the page | `src/content.js` |
| Colours and fonts | `src/index.css` (the `@theme` block at the top) |
| A scene's layout | `src/components/<SceneName>.jsx` |
| Page title, description, preview image | `index.html` and `public/` |

## Copy rules (please keep these)

- Hayaath is **not a bank**. A licensed partner bank holds deposits, runs the account under its licence,
  and makes the final KYC decision.
- The **Income Tax Department issues PAN**. Hayaath only helps you apply.
- Don't add user numbers, testimonials, partner logos or bank names until they are real and signed.
- Anything not built yet stays labelled as planned.
- The launch is for 18+ users. Don't write copy aimed at minors.

## How the motion works

Each scene has one main movement, and nothing else moves. That restraint is what keeps it cinematic.

| Scene | Movement |
| --- | --- |
| Opening | The frame opens from a thin widescreen slit, the light settles, the title rises line by line |
| The problem | A giant "18" drifts slowly behind the text |
| The idea | The screen holds still while the sentence lights up word by word as you scroll |
| How it works | The scene pins in place, the steps change, and the flow line draws itself |
| Who does what | Nothing moves on purpose: trust should feel steady |
| What's next | Laid out like end credits; lines fade in at the bottom of the screen and out at the top |
| Finale | The light from the opening returns |

Between scenes, the whole page fades between dark and light, like the lighting changing between shots
(`src/hooks/useSceneTone.js`).

**Accessibility:** if a visitor's phone or computer is set to "reduce motion", smooth scrolling, pinning
and movement switch off, and the steps show as a normal list. Phones also get the simple list version
of "How it works". Keyboard users get a "Skip to content" link and visible focus outlines.

## Folder structure

```
hayaath-website/
├─ index.html              page title, description, link preview tags
├─ public/                 favicon, apple-touch-icon, og-image (link preview)
├─ dist/                   the built site, ready to upload
└─ src/
   ├─ content.js           ALL the words on the site
   ├─ index.css            colours, fonts, buttons, grain, scene lighting
   ├─ App.jsx              puts the scenes in order
   ├─ hooks/
   │  ├─ useLenis.jsx      smooth scrolling + scroll-to-section
   │  ├─ useSceneTone.js   dark/light lighting changes between scenes
   │  └─ useMediaQuery.js  checks screen size
   └─ components/
      ├─ Nav, Hero, Problem, TitleCard, HowItWorks, FlowDiagram,
      │  WhoDoesWhat, Families, Vision, Finale, Footer
      ├─ Logo.jsx, WaitlistButton.jsx
      └─ motion/MaskText.jsx   the line-by-line title reveal
```
