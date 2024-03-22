var puppeteer = require('puppeteer');

async function searchForPhotos(url) {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto(url);
  const imageUrls = await page.evaluate(() => {
        let images = Array.from(document.getElementsByTagName('img'));
        return images.map(img => img.src);
    });

    console.log(imageUrls);

    await browser.close();
