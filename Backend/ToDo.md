### Structure of the auction

# We can use puppeteer and get the squad data from the ipl t20 website.

# Once a particular year's squad data is fetched, we will store it inside the database or locally on the server as it is unlikely for the full squad to change.

const rawData = document.querySelector('.playersList')
const rawImages = rawData.querySelectorAll('img')
const imgObject = [...rawImages]
const images = imgObject.map((image) => {return image.src})