const puppeteer = require('puppeteer')
const scrollPageToBottom = require('puppeteer-autoscroll-down');

const squads = ['chennai-super-kings', 'royal-challengers-bangalore',
    'punjab-kings', 'mumbai-indians', 'delhi-capitals', 'rajasthan-royals', 'kolkata-knight-riders', 'sunrisers-hyderabad']

const getSquad = async (squad) => {
    const { browser, page} = await connect(squad);
    const data = await page.evaluate((squad) => {
        const rawData = document.querySelector('.playersList')
        const rawImages = rawData.querySelectorAll('img')
        const rawNames = rawData.querySelectorAll('.player-name')
        const rawLinks = rawData.querySelectorAll('a')
        console.log(squad);
        const imgObject = [...rawImages]
        const linksObject = [...rawLinks]
        const playerNameObj = [...rawNames]
        
        // const finalSquad = imgObject.map((image, index) => {
        //     return {
        //         image: image.src,
        //         name: playerNameObj[index].innerText.replace(/(\r\n|\n|\r)/gm," "),
        //         profile: linksObject[index].href
        //     }
        // })

        // return finalSquad
    }, squad)

    console.log(data);
    await browser.close();
}

const connect = async (squad) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.iplt20.com/teams/${squad}/squad`, { waitUntil: 'networkidle2' });
    const scrollStep = 100;
    const scrollDelay = 100;
    await scrollPageToBottom(page, scrollStep, scrollDelay);
    return {browser, page};
}

squads.forEach((squad) => {getSquad(squad)})