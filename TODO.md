# TODO

## Version control

- [x] Upload to Github repo
- [x] Set up on Github Pages repo

## Structure & dev

- [x] Define my own sections
- [x] Make README my own
- [x] Have single logic for parsing Blogs and Recipes and Language resources pages
- [x] Improve CSS logic
- [x] Create a domain
- [x] Apply domain - see README for links
- [x] Fix refresh not working on subpages (sub-URLs not working)
- [x] Fix recipe display not working (linked to sub-URLs not working?)
- [x] Download fonts locally for GDPR
  - Google Fonts and GDPR: https://www.cookieyes.com/documentation/google-fonts-and-gdpr/
  - https://developers.google.com/fonts/faq/privacy
  - https://www.wpeka.com/google-fonts-gdpr.html
  - OMGF for local fonts with wordpress https://daan.dev/wordpress/omgf/
- [x] Cleanup embedded Google Docs / iFrame errors
- [x] Fix Google Docs layout not working on phone
- [x] Footer goes below view screen -> Fixed in App.css > Container > minheight (increased what's substracted)
- [x] Move to TypeScript
- [x] Clean up CSS & make padding standard everywhere

- [] Bug: from Home page, clicking on "coach" or "language resources" sends you to bottom of new page. Should scroll back up to top.
- [] Bug: Loading Google form on Coaching page generates "Failed to load resource: net::ERR_FILE_NOT_FOUND"

## Contact

- [x] Add Instagram logo + link to Footer -> Found icon at https://freepnglogo.com/logos/instagram & changed colour of white icon via https://onlinepngtools.com/change-png-color
- [x] Add FB logo + link to Footer -> Found icon at https://www.iconsdb.com/white-icons/
- [x] Add LinkedIn logo + link to Footer -> Found icon at https://www.iconsdb.com/white-icons/

- [] Add Contact link to Footer + Contact page so can always be found

## Branding

- [x] Change fonts
- [x] Change favicon
- [x] Change basic look
- [x] Make more professional
- [x] Experiment with colours (https://colorkit.co/color/9ba2ff/ is great for this)
- [x] Add professional photos of me
- [x] Create basic Provence Blue & Yellow brand --> To switch, modify src/App.css & src/components/Footer/Footer.jsx

- [] Make style more modern

## Style

- [x] Remove empty white space below the copyright
- [x] Fix flash when loading recipe detail page (on slow 4G, see that footer is flashing across screen)
- [x] Mobile - don't allow image on About page to shrink too small
- [x] Make page text centered
- [x] Add buttons & make them modern and robust

- [] Make page text left-aligned within center bar (Values / Valeurs pages are purely centered)
- [] Mobile - make navbar vertical
- [] Mobile - improve Footer
- [] Mobile - Headers should shrink responsively to be smaller in phone mode (adapt line height using @media in App.css)
- [] Mobile - scale everything appropriately using @media in App.css
- [] Get rid of awkward AppContainer CSS line "min-height: calc(100vh - 207px);" - & doesn't work on mobile
- [] Navbar - Choose between my name left-aligned, menu right-aligned vs both centered with name above menu
- [] Navbar bug - When shrink too much, background colour is narrower than page and white chunk appears on the right

## Navigation

- [n/a] Group similar navbar items into dropdowns: e.g. Coaching and Coaching Tools
- [x] Navbar and footer menu links and icons: Improve hover (=> modernized: changed from colouring background to making font grow in size. Also only have that item grow, nothing else.)

- [] Group Reading / Recipes / Languages under "Fun" dropdown menu?

## Home

- [] Add something about coaching to the home page.
- [] Make home page stronger.

## About

- [] Add pronunciation mp3 for my name.

## Coaching + Coaching Tools

- [x] Create values generator for weekly inspiration
- [x] Make lists of values available in French and English
- [x] Define what coaching is, explain why it's important to me and my journey

- [] Improve text on Coaching Tools page.
- [] Republish Coaching Tools page?

## Books/Reading

- [] Add modern-looking blog list + blog entry pages
- [] Add 3-4 blog entries

## Books/Reading

- [x] Add blurb about why I have a Books/Reading section on my coaching website: I love seeing different facets of a person...

## Recipes & conversions

- [x] Expand generate-blog-list to also work for Recipes
- [x] Separate recipes into desserts, mains, and sides
- [x] Add blurb about why I have a Recipe section on my coaching website: I love coaches who are humans....

- [] Random recipe selector for every category (desserts, mains, sides)
- [] Explore https://github.com/TandoorRecipes/recipes
- [] Add a "conversions" section with textboxes for conversions: temperature, tsp, tbsp, flour, butter, (brown, icing) sugar, ...
- [] Add photo to every recipe
- [] Add a few more of my favourite recipes! (phil's flourless chocolate cake, mjaddara safra, ...)

## Language resources

- [] Structure Language Resources: add dropdown on Navbar and list going to separate page for each language
- [] Add language resources for Arabic
- [] Add language resources for Spanish
- [] Fill out language resources for German

## Misc
