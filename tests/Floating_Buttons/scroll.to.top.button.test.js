import {ClientFunction, Selector} from "testcafe";

fixture `floating scroll to top button`.page(`https://automation.herolo.co.il/`)

const SCROLL_TIME = 1000
const scrollDown = ClientFunction(() => {window.scrollBy(0,1500);});
const getInnerHeight = ClientFunction(() => window.innerHeight.toString());
const btnTopPosition = 0.65

test('scroll button appearance test', async t =>{
    const scrollButton = Selector('.huPgzm')
    await t.expect( await scrollButton.exists).notOk()  //scroll button don't exists until we scroll down
    await scrollDown()
    await t.wait(SCROLL_TIME)
    await t.expect( await scrollButton.exists).ok() //scroll button don't exists until we scroll down

    const propCursor = await Selector(scrollButton).getStyleProperty(`cursor`)
    await t.expect(propCursor).eql('pointer')

    let propTopInPixels = await Selector(scrollButton).getStyleProperty(`top`)
    propTopInPixels = propTopInPixels.split('.')[0]  //remove after dot string

    let innerHeight = await getInnerHeight();       //get window height
    let innerHeightPixels = (innerHeight * btnTopPosition).toString()  //calc relative (65%) of the button
    innerHeightPixels = innerHeightPixels.split('.')[0]

    await t.expect(propTopInPixels).eql(innerHeightPixels)  //check button position is 65% from top

})


test(`scroll to top functionality test`, async t =>{
    await scrollDown();
    await t.wait(SCROLL_TIME)

    const topButton = Selector('.huPgzm')
    await t.click(topButton).wait(SCROLL_TIME)

    const scrollPosition = await t.eval( () => document.body.getBoundingClientRect().top)
    await t.expect(scrollPosition).eql(0)
})
