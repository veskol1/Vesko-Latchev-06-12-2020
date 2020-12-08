import {Selector} from 'testcafe'

fixture`footer tests`.page(`https://automation.herolo.co.il/`)

const SCROLL_TIME = 1000


test('footer help - missing input test', async t=>{

    const missingOrWrongInput = Selector('.Footer__InputError-sc-159s1ql-5.blyfOW')
    const sendButton  = Selector('.Footer__Button-sc-159s1ql-7')
    await t.expect(missingOrWrongInput.exists).notOk() //on first load we don't have any errors

    await t.click(sendButton)
    if (missingOrWrongInput.exists) {
        const url = await t.eval(() => document.documentURI)
        await t.expect(url).eql('https://automation.herolo.co.il/') //stay on the same page
    }
})


test('footer help disappearance test', async t=>{
    const footerWrapper = Selector('.iCjXOW')
    await t.expect(await footerWrapper.exists).ok()  //checks that footerWrapper is exists

    await t.eval( () => window.scrollTo(0,document.body.scrollHeight)) //scroll to the bottom of the page
    await t.wait(SCROLL_TIME)
    await t.expect(await footerWrapper.exists).notOk() //checks that footerWrapper is disappeared

    await t.eval( () => window.scrollTo(0,300)) //scroll up again
    await t.wait(SCROLL_TIME)
    await t.expect(await footerWrapper.exists).ok()  //checks that footerWrapper is appeared again

})

test('footer help - fill form test', async t=>{
    const nameInput  = Selector('input[name="name"]')
    const emailInput  = Selector('input[name="email"]')
    const phoneInput  = Selector('input[name="phone"]')
    const sendButton  = Selector('.Footer__Button-sc-159s1ql-7')

    await t.typeText(nameInput,'vesko')
    await t.typeText(emailInput,'vesko@gmail.com')
    await t.typeText(phoneInput,'0542728555')

    await t.click(sendButton)
    const url = await t.eval( () => document.documentURI)
    await t.expect(url).eql('https://automation.herolo.co.il/thank-you/')
})
