const { By } = require("selenium-webdriver");

const addMovie = async (driver) => {
  await driver.findElement(By.xpath("//input")).sendKeys("Interstellar");

  await driver.findElement(By.xpath("//button")).click();

  const movie = await driver.findElement(By.xpath("//li"));

  const displayed = movie.isDisplayed();

  expect(displayed).toBeTruthy();
};

const deleteMovie = async (driver) => {
  await addMovie(driver);
  await driver.findElement(By.xpath("//ul/li[1]/button")).click();
  await driver.sleep(1000);
  const list = await driver.findElement(By.xpath("//ul"));
  expect(list.hasChildren).toBeFalsy();
};

const crossOffMovie = async (driver) => {
  await addMovie(driver);
  await driver.findElement(By.xpath("//span")).click();
  let checked = await driver.findElement(By.css(".checked"))
  expect(checked).toBeTruthy()
  await driver.sleep(1000);
};

const isAlert = async (driver) => {
  await deleteMovie(driver);
  const message = await driver.findElement(By.css("aside"));
  expect(message.isDisplayed()).toBeTruthy();
};

module.exports = {
  deleteMovie,
  crossOffMovie,
  isAlert,
};
