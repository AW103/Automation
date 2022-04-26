const {Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');

const {deleteMovie, crossOffMovie, isAlert} = require("../functions/testMovie");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await (await driver).get("http://127.0.0.1:5500/movieList/index.html");
})

afterAll(async ()=> {
    await (await driver).quit();
})

// test("addMovie test", async () => {
//     await addMovie(driver)
//     await driver.sleep(3000)
// })
describe("Movie tests", () => {
test("should delete movie", async () => {
    await deleteMovie(driver);
    await driver.sleep(3000)
})
test("should cross out movie", async () => {
    await crossOffMovie(driver);
    await driver.sleep(3000)
})
test("should check for message", async () => {
    await isAlert(driver);
    await driver.sleep(3000)
})

})