const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.document = new JSDOM("random").window.document;

axios.get("https://timesofindia.indiatimes.com/rssfeeds/54829575.cms?feedtype=sjson").then((response) => {

    const results = response.data.channel.item.map((article) => {
        const div = document.createElement('div');
        div.innerHTML = article.description;
        let anchorTag = div.getElementsByTagName('a');
        const imageTag = anchorTag[0].getElementsByTagName('img');

        anchorTag[0].parentNode.removeChild(anchorTag[0])
        
        const image = imageTag[0].src;
        const description = div.innerHTML;

        const links = article.description.match(/\bhttps?::\/\/\S+/gi);
        console.log(links);
        console.log(article.title, article.description + "\n");
        return {
            title: article.title,
            image,
            description
        }
    })

    console.log(results);
    
})