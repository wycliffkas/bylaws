# Ecommerce Store

This challenge is to build a collapsing Table of Contents alongside a piece of legislation. We’ll provide you with a scaffold HTML file, you do the rest.

The provided HTML file has the contents of Cape Town’s Animal by-law, exactly as it is on https://openbylaws.org.za/za-cpt/act/by-law/2011/animal/eng/.

Please build a functional table of contents to the left of the text of the by-law. The table of contents must scroll independently of the text. The table of contents forms a hierarchy: chapters can contain sections. The table of contents should reflect this hierarchy. When the user clicks on an entry, the text should update to display only the text for that entry.

As a bonus, a user should be able to collapse or expand an entry in the table of contents. This will probably be by clicking on an icon or similar, since clicking on an entry’s name displays that entry.

You can use any Javascript framework (or none), and any CSS framework (or none). Please be able to motivate your choice.

You can submit your challenge by email, or by GitHub Gist, up to you. This shouldn't take more than a few hours.

Please email greg@laws.africa if you have any questions.

Thanks :)

## Features

1. As a reader, I want to have a table of contents to the left of the text of the by-law, that scrolls independently of the by-law text.
2. A reader is able to click on an entry in the table of contents, and read only that entry’s text.
3. Collapse and expand the sections in the table of contents.

## How to run the application

#### requirements

- Before you run the application make sure the following are installed
- `Node, npm or yarn`

#### installation

- Clone the repository on the local environment by running:
  `git clone https://github.com/wycliffkas/bylaws.git`
- Run `npm install` if you use npm or `yarn` if you use yarn inorder to install the dependencies
- Run `yarn start` to launch the app which will automatically launch the app in the browser.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.