const puppeteer = require('puppeteer')
const scrollPageToBottom = require('puppeteer-autoscroll-down');
let allSquads = []

const getSquad = async (squadName, browser) => {
    const url = `https://www.iplt20.com/teams/${squadName}/squad`;
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await scrollToBottom(page);

    const scrapedSquad = await page.evaluate((squad) => {
        const rawData = document.querySelector('.playersList')
        const rawImages = rawData.querySelectorAll('img')
        const rawNames = rawData.querySelectorAll('.player-name')
        const rawLinks = rawData.querySelectorAll('a')
        const imgObject = [...rawImages]
        const linksObject = [...rawLinks]
        const playerNameObj = [...rawNames]
        const data = imgObject.map((image, index) => {
            return {
                image: image.src,
                name: playerNameObj[index].innerText.replace(/(\r\n|\n|\r)/gm," "),
                profile: linksObject[index].href,
                squad
            }
        })
        return data
    }, squadName)

    allSquads.push({
        squad: squadName,
        players: scrapedSquad
    })

    await page.close();
}


const connect = async () => {
    const browser = await puppeteer.launch({headless: false});
    return browser;
}

const disconnect = async(browser) => {
    await browser.close()
}

const scrollToBottom = async(page) => {
    const scrollStep = 100;
    const scrollDelay = 100;
    await scrollPageToBottom(page, scrollStep, scrollDelay);
}

const getAllSquads = async () => {
    const browser = await connect();
    await getSquad('chennai-super-kings', browser);
    await getSquad('royal-challengers-bangalore', browser);
    await getSquad('punjab-kings', browser);
    await getSquad('mumbai-indians', browser);
    await getSquad('delhi-capitals', browser);
    await getSquad('rajasthan-royals', browser);
    await getSquad('kolkata-knight-riders', browser);
    await getSquad('sunrisers-hyderabad', browser);
    return browser;
}

const getStats = async (playerProfile, browser) => {
    const page = await browser.newPage();
    await page.goto(playerProfile, { waitUntil: 'networkidle2' });
    const scrollStep = 100;
    const scrollDelay = 100;
    await scrollPageToBottom(page, scrollStep, scrollDelay);

    const stats = await page.evaluate(() => {

        const table = document.querySelectorAll('.table')
        const battingTable = table[0]
        const bowlingTable = table[1]
        const careerRow = battingTable.querySelector('.player-stats-table__highlight')
        const careerRowValues = careerRow.querySelectorAll('td')
        const labelRow = battingTable.querySelector('tr')
        const labelValues = labelRow.querySelectorAll('th');
        let careerRowObj = [...careerRowValues];
        let labelsObj = [...labelValues];
        labelsObj = labelsObj.splice(1);
        careerRowObj = careerRowObj.splice(1);
    
        const stats = labelsObj.map((label, index) => {
            return{
                label: label.innerText,
                value: careerRowObj[index].innerText
            }
        })
        
        return stats;
    })
    
    console.log({
        stats
    })

    await page.close();
    return stats;
}

getAllSquads().then(async (browser) => {
    const s1 = allSquads[0];
    const players = s1.players;
    //console.log(response);
    for (player of players){
        await getStats(player.profile, browser)
    }
});
