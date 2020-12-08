import {Selector} from 'testcafe'

fixture`portfolio gallery maximized window test`.page(`https://automation.herolo.co.il/`)

const NUM_SLIDES = 4  //last slide position 0->4
const SLIDE_WAIT_TIME = 1000

test(`configuration - maximize window`, async t => {
    await t.maximizeWindow()
})

test('portfolio gallery right 2 loops test', async t => {
    //const slick = Selector('.slick-slide div')
    const currentSlide = Selector('.slick-slide.slick-active.slick-current')
    const rightSlideButton = Selector('.slick-arrow.slick-next')

    for(let loop = 0; loop<2; loop++) {
        for (let i = 0; i < NUM_SLIDES; i++) { //first loop test
            await t.expect(currentSlide().getAttribute('data-index')).eql(i.toString())
                .wait(SLIDE_WAIT_TIME)
                .click(rightSlideButton)
        }
        await t.wait(SLIDE_WAIT_TIME)
        await t.click(rightSlideButton) //go to first slide -> start loop again
    }

})


test('portfolio gallery left 2 loops test', async t => {
    const currentSlide = Selector('.slick-slide.slick-active.slick-current')
    const leftSlideButton = Selector('.slick-arrow.slick-prev')

    await t.click(leftSlideButton()) //start loop

    for(let loop = 0; loop<2; loop++){
        for (let i = NUM_SLIDES; i >= 0; i--) { //first loop test
            await t.expect(currentSlide().getAttribute('data-index')).eql(i.toString())
                .wait(SLIDE_WAIT_TIME)
                .click(leftSlideButton())
        }
        await t.wait(SLIDE_WAIT_TIME)
    }

})


test(`clicking on dots switches to the correct slide test`, async t=>{
    const currentSlide = Selector('.slick-slide.slick-active.slick-current')
    const slickDot = await Selector('.slick-slider.portfolio__Slider-sc-80s039-2.cCmxEs.slick-initialized li div')

    for(let i = 0; i<NUM_SLIDES; i++){
        const currentSelectedDot = await Selector(slickDot).nth(i)  // get current selected dot
        await t.click(currentSelectedDot).wait(SLIDE_WAIT_TIME)
        await t.expect(currentSlide().getAttribute('data-index')).eql(i.toString())  //check that slide was changed to the same index
    }
})
