const puppeteer = require('puppeteer');

async function searchForPhotos(url) {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
  let imageUrls = await page.evaluate(() => {
        let images = Array.from(document.getElementsByTagName('img'));
        return images.map(img => img.src);
    });

    console.log(imageUrls);

    await browser.close();
