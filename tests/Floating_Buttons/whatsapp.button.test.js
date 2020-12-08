import {Selector} from 'testcafe'

fixture `floating whatsapp button`.page(`https://automation.herolo.co.il/`)

test(`'whatsapp floating button test`, async t =>{
    const whatsappButton = Selector(`.callUsWhatsapp__BtnWhatsapp-rkzbui-0.cjunrQ`)
    await t.click(whatsappButton)
    const url = await t.eval(() => document.documentURI)
    await t.expect(url).eql('https://api.whatsapp.com/send?phone=972544945333');
})
