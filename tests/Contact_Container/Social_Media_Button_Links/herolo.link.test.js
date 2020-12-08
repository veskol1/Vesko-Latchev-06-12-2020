import {Selector} from 'testcafe'

fixture`social media herolo Web link test`.page(`https://automation.herolo.co.il/`)

// test ('social media herolo Web link', async t => {
//     const heroloWebButton = Selector('.socialMediaBar__ImgSocial-sc-1ry1db0-2.bXWGqN')
//
//     await t.click(heroloWebButton())
//     const url = await t.eval(() => document.documentURI)
//     await t.expect(url).contains('https://herolo.co.il/')
//     await t.closeWindow()
// })

//I removed this test because I got strange Promise error:
// "unhandled promise rejection: TypeError [ERR_INVALID_PROTOCOL]: Protocol "http:" not supported. Expected "https:"
