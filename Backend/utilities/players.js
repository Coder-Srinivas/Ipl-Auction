const puppeteer = require('puppeteer')

const getSquad = async (squad) => {
    const { browser, page} = await connect(squad);
    console.log("Connected");
    const data = await page.evaluate(() => {
        const playersList = document.querySelector('.playersList');
        console.log(playersList);
        return playersList;
    })

    console.log(data);
    console.log("Retrieval Done");
    await browser.close();
}

const connect = async (squad) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.iplt20.com/teams/${squad}/squad`, { waitUntil: 'networkidle2'});
    return {browser, page};
}

getSquad('punjab-kings');