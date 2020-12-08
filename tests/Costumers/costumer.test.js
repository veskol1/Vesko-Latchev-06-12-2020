import {Selector} from 'testcafe'

fixture`Costumer animation test`.page(`https://automation.herolo.co.il/`)
const NUM_SLIDES = 3

test (`costumer animation appearance`, async t => {
    const costumerClass = Selector(`.customers__Animation-fb9045-1.eAUjZr.aos-init`)
    const costumerClassAnimation = Selector(`.customers__Animation-fb9045-1.eAUjZr.aos-init.aos-animate`)

    await t.expect(await costumerClassAnimation.exists).notOk()  //animation not appears on top of page
    await t.hover(costumerClass())   //scroll to costumer section
    await t.expect(await costumerClassAnimation.exists).ok()  //animation appears when scrolling to the required section

})

test('costumers automate sliding test ', async t =>{
    const slickCostumerSlides = Selector(`.slick-slider.customers__Slider-fb9045-4.kgTZws.slick-initialized div div`)
    const slickCostumerDots = Selector(`.slick-slider.customers__Slider-fb9045-4.kgTZws.slick-initialized ul li`)

    const numOfDots = await Selector(slickCostumerDots).count  //3

    const dot = await Selector(slickCostumerDots).nth((numOfDots-1)) //starting dot is 2
    await t.click(dot)
    for(let i=numOfDots-1; i>=0; i--){  //starting dot is 2 then 1 then 0
        const currentSlide = await Selector(slickCostumerSlides).child((3+i))  //slide 5->4->3
        await t.expect( currentSlide().getAttribute('class')).eql('slick-slide slick-active slick-current')
    }

})
