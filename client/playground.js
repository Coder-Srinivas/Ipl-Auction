const axios = require('axios');

axios.get("https://timesofindia.indiatimes.com/rssfeeds/54829575.cms?feedtype=sjson").then((response) => {

    const results = response.data.channel.item.map((article) => {
        const array = article.description.split("\"");
        console.log(array);
        return {
            title: article.title,
            image: array[array.length - 2].trim(),
            description: array[array.length - 1].replace("/></a>", '').trim()
        }
    })

    //console.log(results);
    
})