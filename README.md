# Herolo Automation test

This repo contains tests wroten with testcafe using javascript

## Installation

Go to [testcafe](https://devexpress.github.io/testcafe/documentation/getting-started/) to install the tool.
make sure you already installed [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) and run the command:

```bash
npm install -g testcafe
```

## Configuration
Open package.json file and configure which tests will tested:
```json
  "scripts": {
    "test": "testcafe chrome ./tests/"
  },
```

## Run tests
Open IDE and run the command:
```javascript
npm test
```

## Tests Scenarios
* Contact Container:

  contact.container.test - has 2 tests: the first one try to send the form without filling all the fields, the second one fill all the fields and check we got forward to the right url.

  social.media.buttons.links - has 4 social media buttons test. each test checks that clicking on the button forwards the user to the correct website.

* Costumers: 

  costumers.test - has 2 tests: the first one checks that purple animation shows when scrolling to costumers section , the second one checks if the automate sliding is coresponding to the slick dots.

* Floating Buttons: 

  scroll.to.top.test - first test check the animation, position, fade in and out of the button, second test tests the functionality of the button when clicked.

  whatsapp.button.test -  tests the functionality of the button when clicked.

* Footer: 

  footer.test - has 3 tests: the first one try to send the form without filling all the fields, the second check footer container disappearance, the third test fill all the fields and send the form.

* Header: 

  logo.test - has 1 test: checks herolo animation logo is working

* Popup Window: 

  popup.window.test - has 2 tests: the first one try to send the form without filling all the fields, the third test fill all the fields and send the form.

* Portfolio: 

  portfolio.max.window.test - has 3 tests: the first one test navigation on slick slide to right with loop , the second test navigation on slick slide to left with loop, the third checks if clicking the dots make the currect slide to appear

  portfolio.min.window.test - has 2 tests: (first we minimize the screen size so the UI will change the number of slides and dots) the first one test navigation on automate slick slide , the scond test navigation on automate slick slide with hovering

