import {Selector} from 'testcafe'

fixture`social media Linkedin link test`.page(`https://automation.herolo.co.il/`)

test ('social media Linkedin link', async t => {
    const linkedinButton = Selector('.socialMediaBar__ImgSocial-sc-1ry1db0-2.gcUHBk')

    await t.click(linkedinButton())
    const url = await t.eval(() => document.documentURI)
    await t.expect(url).contains('https://www.linkedin.com/')
})
