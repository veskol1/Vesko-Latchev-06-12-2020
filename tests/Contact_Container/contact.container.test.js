import {Selector} from 'testcafe'

fixture`contact container test`.page(`https://automation.herolo.co.il/`)

test('contact container - missing input test', async t=>{

    const missingOrWrongInput = Selector('.commun__Input-zi6nvq-4.form__Input-y0ft28-0.iMXXfW')
    const sendButton  = Selector('.commun__Button-zi6nvq-0')
    await t.expect(missingOrWrongInput.exists).notOk() //on first load we don't have any errors

    await t.click(sendButton)
    if (missingOrWrongInput.exists) {
        const url = await t.eval(() => document.documentURI)
        await t.expect(url).eql('https://automation.herolo.co.il/') //stay on the same page
    }
})

test('contact container send form test', async t=>{
    const nameInput  = Selector('input[id="name"]')
    const companyInput  = Selector('input[id="company"]')
    const emailInput  = Selector('input[id="email"]')
    const phoneInput  = Selector('input[id="telephone"]')
    const sendButton  = Selector('.commun__Button-zi6nvq-0')

    await t.typeText(nameInput,'vesko')
    await t.typeText(companyInput, 'Pixellot')
    await t.typeText(emailInput,'vesko@gmail.com')
    await t.typeText(phoneInput,'0542728555')

    await t.click(sendButton)
    const url = await t.eval( () => document.documentURI)
    await t.expect(url).eql('https://automation.herolo.co.il/thank-you/')
})
