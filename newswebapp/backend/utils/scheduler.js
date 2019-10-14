var cron = require('node-cron');
var datafetch = require('../controllers/dataFetch');
const puppeteer = require('puppeteer');
var userOperation = require('../db/helpers/newsOperation');

// var schedule1 = cron.schedule('* * 23 * * *', () => {
//     console.log("run first time");
//     callfunction();
// });
function schedule() {
    //schedule1.start();
    // callfunction();
}
async function callfunction() {

    var obj = { 'day': new Date().toISOString().slice(0, 10) }
    var objarr = ['worldNews', 'opinion', 'cricket', 'entertainmentsNews'];
    var dataArray = [];
    var arr = ['https://www.hindustantimes.com/world-news/', 'https://www.hindustantimes.com/opinion/', 'https://www.hindustantimes.com/cricket/', 'https://www.hindustantimes.com/entertainment/',];
    // await (arr.map(addNews));
    for (let i = 0; i < arr.length; i++) {
        let t = await addNews(arr[i]);
        dataArray.push(JSON.stringify(t));
    }
    for (let i = 0; i < arr.length; i++) {
        obj[objarr[i]] = dataArray[i];
    }
    for (let key in obj) {
        console.log(key);
    }
    userOperation.add(obj);
}
async function addNews(ele) {
    console.log(ele);
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // await page.setViewport({ width: 1920, height: 926 });
        await page.goto(ele);
        page.waitForNavigation({ waitUntil: 'domcontentloaded' });

        let worldNewsData = await page.evaluate(() => {
            console.log("inside the world:::");
            var news = [];

            let newslist = document.querySelectorAll('ul[class="latest-news-morenews more-latest-news more-separate newslist-sec"]>li');

            newslist.forEach((newselement) => {
                let newsJson = {};
                try {
                    newsJson.newsHeading = newselement.querySelector('div[class="media-body"]>div>a').innerText;
                    newsJson.news = newselement.querySelector('p').innerText;
                    newsJson.date = newselement.querySelector('div[class="media-body"]>span').innerText;
                    let data = newselement.querySelector('div[class="media-left"]>a').innerHTML;
                    let index = data.indexOf("alt") - 2;
                    newsJson.imageUrl = data.slice(10, index);
                }
                catch (exception) {
                    console.log(exception);
                    next(exception);
                }
                news.push(newsJson);
            });
            return news;
        });

        // console.log("data___==========================>>>>>>>>>>>>>>>>>>>>>", worldNewsData);
        return worldNewsData;



    }
    catch (err) {
        console.log("ERROR IN CATCH BLOCK" + err);
        // addNews(ele);
    }

}
module.exports = schedule;