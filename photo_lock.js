const puppeteer = require('puppeteer');

async function searchForPhotos(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  const imageUrls = await page.evaluate(() => {
        const images = Array.from(document.getElementsByTagName('img'));
        return images.map(img => img.src);
    });

    console.log(imageUrls);

    await browser.close();
