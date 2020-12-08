import {Selector} from 'testcafe'

fixture`social media facebook link test`.page(`https://automation.herolo.co.il/`)

test ('social media facebook link', async t => {
    const facebookButton = Selector('.socialMediaBar__ImgSocial-sc-1ry1db0-2.eufMcD')

    await t.click(facebookButton())
    const url = await t.eval(() => document.documentURI)
    await t.expect(url).eql('https://www.facebook.com/Herolofrontend')
})
