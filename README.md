# gabolemus.is-a.dev
My personal website.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/gabolemus/gabolemus.github.io/deploy.yml?style=flat-square)
![License](https://img.shields.io/github/license/gabolemus/gabolemus.github.io.svg?style=flat-square)

## Environment
### Languages
* TypeScript
* React

### Package Management
* yarn
* dependabot

### Library and Frameworks
* React
* Axios

### Hosting and CI
* GitHub Pages (main branch)
* GitHub Actions

## Running the app
```bash
# Install dependencies
yarn install

# Serve with hot reload at localhost:3000
yarn start

# Build for production
yarn run build
```

## Directory structures
```
.
|-.github/
|   └-workflows/
|       |-deploy.yml (build and deploy page with changes from `main`)
|       └-pr-to-main.yml (open a PR to `main` with changes from `develop`)
|
|-public/
|   |-CV/ (CV PDF files)
|   |-index.html
|   └-* (assets)
|
└-src (source file directory)
    |-index.tsx (entry point of the app)
    |-App.tsx (app router)
    |-components/ (app components organized with atomic web design)
    |-sass/ (app styles)
    └-utils/ (app pages, text localization and general utility functions)
```
