import {Selector} from 'testcafe'

fixture`logo animation test`.page(`https://automation.herolo.co.il/`)

test ('logo animation movement test' , async  t => {
    const logo = Selector(`#logom`)
    const logoPosition1 = await Selector(logo).getStyleProperty('background-position')
    const logoPosition2 = await Selector(logo).getStyleProperty('background-position')

    await t.expect(logoPosition1).notEql(logoPosition2)  //background-position is always changes
})
