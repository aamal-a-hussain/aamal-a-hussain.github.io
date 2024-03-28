# Portfolio Website Aamal Hussain

Available here: http://aamal-a-hussain.github.io

## Available Scripts
In the project directory, you can run:

```
npm start
npm run build

```
to run the app in the development environment (http://localhost:3000) <br />
to build the app for production in the `build` folder


## Website Deployment

The website is deployed using a fork of this repo and GitHub Pages.

Run `nom install --save gh-pages` to install the github pages dependency. <br />
To the file `package.json` add `"homepage": "https://myusername.github.io/repo-name"` and two more scripts `"predeploy": "npm run build", "deploy": "gh-pages -d build"`. <br />
Deploy with `npm run deploy`.

Within the GitHub repo, go to Settings then Pages. Set the deployment to be from the `gh-pages` branch. <br />
In Actions, you can see the progress of the deployment.

