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

  scroll.to.top.test - first test check the animation, position, fade in and out of the button, second test tests the functionality of the button when clicked

  whatsapp.button.test -  tests the functionality of the button when clicked
* Footer: 

  scroll.to.top.test - first test check the animation, position, fade in and out of the button, second test tests the functionality of the button when clicked

whatsapp.button.test -  tests the functionality of the button when clicked
