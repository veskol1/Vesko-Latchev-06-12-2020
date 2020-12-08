import {ClientFunction, Selector} from 'testcafe'

fixture `popup window tests`.page(`https://automation.herolo.co.il/`)

const TIME_TO_POPUP_APPEAR = 35000  //35 seconds

const scrollDown = ClientFunction(() => {
    window.scrollBy(0,1000);
})


test(`popup window missing details test`, async t => {
    await scrollDown();
    await t.wait(TIME_TO_POPUP_APPEAR).wait(1000)

    const missingOrWrongInput = Selector('.onUnloadPopup__InputError-v34ylr-15.dsvIDy')
    const sendButton  = await Selector('.onUnloadPopup__Button-v34ylr-19.cUxvnt')
    await t.expect(missingOrWrongInput.exists).notOk() //on first load we don't have any errors

    await t.click(sendButton)
    if (missingOrWrongInput.exists) {
        const url = await t.eval(() => document.documentURI)
        await t.expect(url).eql('https://automation.herolo.co.il/') //stay on the same page
    }
})




test(`popup window fill details test`, async t =>{
    await scrollDown();
    await t.wait(TIME_TO_POPUP_APPEAR).wait(1000)
    const p = await Selector('#modal-form div')
    const nameInput = await Selector(p).nth(1)  //
    const emailInput  = await Selector(p).nth(2)
    const phoneInput  = await Selector(p).nth(3)
    const sendButton  = await Selector('.onUnloadPopup__Button-v34ylr-19.cUxvnt')
    const spinnerButton = await  Selector(sendButton).child().exists

    await t.typeText(nameInput,'vesko')
    await t.typeText(emailInput,'v@walla.com')
    await t.typeText(phoneInput,'0545555555').wait(3000)
    await t.click(sendButton)
    await t.expect(spinnerButton).ok()

    const url = await t.eval( () => document.documentURI)
    await t.expect(url).eql('https://automation.herolo.co.il/thank-you/')
})
