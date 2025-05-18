# McGill Flying Club Website

## 🚀 Project Structure

```text
/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── flight-training/
│       │   ├── general-information.astro
│       │   ├── ground-school.astro
│       │   └── partner-flight-school.astro
│       ├── events-activities/
│       │   ├── pilot-for-a-day.astro
│       │   ├── skydiving.astro
│       │   └── flight-simulators.astro
│       ├── about-us/
│       │   ├── our-team.astro
│       │   ├── founders-history.astro
│       │   └── past-executives.astro
│       ├── social-media/
│       │   ├── facebook.astro
│       │   ├── instagram.astro
│       │   ├── twitter.astro
│       │   └── youtube.astro
│       ├── contact.astro
│       └── apply.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Content Sections

The website is organized into the following main sections:

1. **Home** - Landing page with main hero sections and club introduction
2. **Flight Training**
   - General Information
   - Ground School
   - Partner Flight School
3. **Events & Activities**
   - Pilot for a Day
   - Skydiving
   - Flight Simulators
4. **About Us**
   - Our Team
   - Founders & History
   - Past Executives
5. **Social Media**
   - Facebook
   - Instagram
   - Twitter
   - YouTube
6. **Contact Us** - Contact information and form
7. **Apply** - Membership application page
