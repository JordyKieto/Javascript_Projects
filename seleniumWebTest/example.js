const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:8080/');
 //   await driver.get('http://www.google.com/ncr');
 //   await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);

    var feed = await driver.findElement(By.className('feedItem'))[2]
    await feed.click()
    await driver.wait(until.titleIs('webdriver - Google Search'), 100000);
  } finally {
    await driver.quit();
  }
})();