## Project info

Custom domain: www.magalibr.com

Huge thank you to Mais Hatem (www.maishatem.com) for providing a lot of the inspiration for this website!

This project uses:
- CSS & Flexbox (Useful resource for learning: Flexbox Froggy https://flexboxfroggy.com/)
- React & React router
- Fonts: Google Fonts
- Emoji favicon from: https://favicon.io/emoji-favicons/ (did not use https://realfavicongenerator.net/)

Other useful options:
- Domain: GoDaddy
- Hosting: Vercel
- Tools for design: Figma (Figma community)
- Inspiration: Dribble, Behance
- Color palettes: Any color generator tool, e.g., https://coolors.co/ 
- CSS grid tutorial from Froggy's creator (https://codepip.com/games/grid-garden/)

## Project requirements

On a Mac or Linux machine, run this project by using the following Node and npm versions:
* Node `v22.7.0`
* npm `10.8.3`

## Usage guide

### Local testing

1. Install dependencies: `npm install`
1. Place your `.md` files in a directory called `md/` in the project root then run:

    ```
    npm run generate-file-lists
    ```
    This will generate `blogFiles.json` and `recipesFiles.json`; a list of the files names the front-end will eventually parse. 

    NOTE: Currently, the `md/` directory has placeholder blogs (Blog 1, 2, and 3).

1. Run the dev server: `npm run dev`

### Deployment on Github Pages

GitHub pages are a nice way to host but they only work on [private repos](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

How to deploy Vite project to GitHub pages? 
1. Deploy changes to gh-pages branch: `npm run deploy` . This will force a new deploy of your Github Pages repo branch.

Documentation:
* https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3
* Configure GitHub Pages URL correctly in router: https://stackoverflow.com/questions/74518887/blank-page-when-deploying-a-react-app-to-github-pages-and-vite (in my case router basename lives in App.jsx)
* Fix gh-pages to version 5 rather than version ^6.3.0 in package.json due to [running into  "spawn E2BIG" error](https: //github.com/tschaub/gh-pages/issues/399).
* Currently deploying from Branch gh-pages, but if want to deploy using GitHub Actions: https://vite.dev/guide/static-deploy.html#github-pages

Custom Domain
* Documentation: 
  * https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site 
  * https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages 
  * https://github.com/tschaub/gh-pages/issues/127
* If switch to custom domain rather than GitHub Pages extension /personal-website/, 
  1. change basename to `/` in App.jsx router basename
  1. remove entire line `base: "/personal-website/",` in vite.config.js. 
  

* If switch to GitHub Pages repo extension like https://magali-br.github.io/personal-website/
  1. change basename to `personal-website/` in App.jsx router basename, 
  1. add line `base: "/personal-website/",` in vite.config.js. 
  

### Deployment on Vercel [not in use]

Original project uses Vercel for Serverless deployments and CI/CD on GitHub. The free tier is ok as long as the website does not run ads / make profit.
The files `vercel.json` and `vite.config.js` are essential for Vercel to be able to run the right build script.

Settings on Vercel (also see ../screenshots/vercel-project-settings.png):

<p float="left">
  <img src="screenshots/vercel-project-settings.png" width="700" />
</p>



Last update: 2025-05-03





