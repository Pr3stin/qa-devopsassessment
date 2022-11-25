
import { Builder, Capabilities, By } from "selenium-webdriver"
import { elementIsDisabled } from "selenium-webdriver/lib/until"
import { SequelizeScopeError } from "sequelize"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking on draw button displays div choices', async () => {
    const buttonClicked = await driver.findElement(By.id('draw')).click
    const display = await driver.findElement(By.id('choices')).isDisplayed
    expect(buttonClicked).toBe(display)
})

test('click on add to duo button', async () => {
    const clicker = await driver.findElement(By.className('bot-btn')).click
    const display = await driver.findElement(By.id('player-duo')).isDisplayed
    expect(clicker).toBe(display)
})