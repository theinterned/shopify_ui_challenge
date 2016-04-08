

## Features

1. **List all Contacts**
  * The app is cold-started with 3 contacts stubbed into the initialState of the redux store.
  * The list is responsive.
  * From here you can *create a new contact* via a button in the header or navigate to the *detail screen* of an existing contact by clicking on a list item.
2. **Add a contact**
  * Just covers the basics: Name, phone and email.
  * Name is a required field although there's no validation for phone number (email validation is done by the `<input type="email" />` html5 element).
  * From here you can *back to the list* via cancel button in the header, or *save the contact* and navigate to that contact's details.
3. **View details of a contact**
  * Pretty basics output of the Contact detials on a particular contact.
  * Click the email address to send the contact an email! The subject of the email is a reference to a [joke by Frank Chimero](http://www.frankchimero.com/writing/new-yorker/).
  * From here you can go *back to the list* via back button in the header.
4. **Edit a contact**
  * reuses the same contact form component as the create a conatct page.
4. **CSS styles**
  * The CSS is pretty simple and clean with a theme that draws inspiration from your [marketing site](http://www.shopify.com/).
  * Special attention was given to the styling of the forms which have a vaguely Material Design inspired lined-input look.
  * The design is very much mobile-first but works okay at larger sizes. Given more time I'd probably put the list and detail/form on the same screen.
5. **Tests**
  * All the actions and reducers are fully tested/
  * Run `npm test` to run the tests. Run `npm run test:watch` to watch the project for changes and run the tests.


## Getting started

1. Clone this repo using `git clone https://github.com/mxstbr/react-boilerplate.git`.

2. Run `npm install` to install the dependencies.

3. Run `npm start` to start the local web server.

4. Go to [`http://localhost:3000`](http://localhost:3000) and you should see the app running!

## Building & Deploying

1. Run `npm run build`, which will compile all the necessary files in a `build` folder.

2. Upload the contents of the `build` folder to your web server.

3. See **Browser testing** below for instructions on running a local server to display the built static app.

### Server Configuration

#### Apache

This boilerplate includes a `.htaccess` file that does two things:

1. Redirect all traffic to HTTPS because ServiceWorker only works for encrypted traffic

2. Rewrite all pages (e.g. yourdomain.com/subpage) to the `index.html` to let `react-router` take care of presenting the correct page

## CSS

The CSS modules found in the `css` subfolders all get imported into one big file (`main.css`), which gets transpiled with PostCSS.

See the [`css` folder README](css/README.md) for more information about the PostCSS plugins used and the CSS structure.

## JS

All files that are `import`ed/`require`d somewhere get compiled into one big file at build time. (`build/bundle.js`) Webpack automatically optimizes your JavaScript with `UglifyJS`, so you don't have to worry about that.

See the [`js` folder README](js/README.md) for more information about the JS structure.

## Testing

### Browser testing

With `npm run serve` you can start a server that's accessible in the entire local network and shows the version of the app that's in the `build` folder. Useful for testing on different devices!

### Unit testing

Unit tests live in the `test` directory, and are run with `npm test`. There are two files in there already, testing that the current AppActions and Reducers are working correctly. Mocha is used as a unit testing framework, check out the official [documentation](http://mochajs.org)!

## Files in the root folder

For a full explanation of all files in the root folder, see [`docs/FILES.md`](docs/FILES.md).

-----

Based on [React.js Boilerplate](https://github.com/mxstbr/react-boilerplate/) by [Max Stoiber](https://twitter.com/mxstbr)!
