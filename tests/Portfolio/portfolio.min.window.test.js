import {ClientFunction, Selector} from 'testcafe'

fixture`portfolio gallery minimized window test`.page(`https://automation.herolo.co.il/`)

const NUM_DOTS = 19  //last slide position 0->4
const TIME_TO_POPUP_APPEAR = 40000
const HOVER_TIME = 2000

test(`configuration - minimize window`, async t => {
    await t.resizeWindow(900,600)
})

const scrollDown = ClientFunction( () => {
    window.scrollBy(0,1000);
});


// test(`Slides changing according to automate slick dots change test`, async t=>{
//     const currentSlide = Selector('.slick-slide.slick-active.slick-current')
//     const closePopupButton = await Selector('.onUnloadPopup__CloseModalBtn-v34ylr-1.gFThxT' )
//
//     await scrollDown() //scroll down just to start the timer of the popup
//
//     const slickDot = await Selector('.slick-slider.portfolio__Slider-sc-80s039-2.cCmxEs.slick-initialized li div').nth(NUM_DOTS)
//
//     await t.wait(TIME_TO_POPUP_APPEAR).click(closePopupButton)//wait for popup to appear and close it
//     await t.wait(1000)
//     await t.click(slickDot) //click last dot and wait
//
//     let slideIndex = 0  //slides go from 0 to 19, dots go to 19 to 0
//     for(let i = NUM_DOTS; i > 0; i--){  //slick dots change automaticly
//         await t.expect(currentSlide().getAttribute('data-index')).eql(slideIndex.toString())  //check that slide was changed
//         slideIndex++
//     }
// })


test(`Slides changing according to automate slick dots change (with hover other elements) test`, async t=>{
    const currentSlide = Selector('.slick-slide.slick-active.slick-current')
    const closePopupButton = await Selector('.onUnloadPopup__CloseModalBtn-v34ylr-1.gFThxT' )
    const customersDiv = await Selector('.customers__Customers-fb9045-0.hYqFxv' )

    await scrollDown() //scroll down just to start the timer of the popup

    const slickDot = await Selector('.slick-slider.portfolio__Slider-sc-80s039-2.cCmxEs.slick-initialized li div').nth(NUM_DOTS)
    await t.wait(TIME_TO_POPUP_APPEAR).click(closePopupButton) //wait for popup to appear and close it
    await t.wait(1000)

    await t.click(slickDot) //click first dot

    let slideIndex = 0
    for(let i = NUM_DOTS; i > 0; i--){
        await t.expect(currentSlide().getAttribute('data-index')).eql(slideIndex.toString())  //check that slide was changed
        await t.hover(currentSlide).wait(HOVER_TIME)
        await t.hover(customersDiv).wait(HOVER_TIME)
        slideIndex++
    }
})
