import {Selector} from 'testcafe'

fixture`social media whatsapp link test`.page(`https://automation.herolo.co.il/`)

test ('social media whatsapp link', async t => {
    const whatsappButton = Selector('.socialMediaBar__ImgSocial-sc-1ry1db0-2.jOgeKm')

    await t.click(whatsappButton())
    const url = await t.eval(() => document.documentURI)
    await t.expect(url).eql('https://api.whatsapp.com/send?phone=972544945333')
})
