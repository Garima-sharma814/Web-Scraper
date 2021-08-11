// Scraping the data from the website
// Language: javascript
// Path: src\scrapParse.js

const rp = require("request-promise");
var $ = require("cheerio");
const scrapParse = require("./src/scrapParse");

const url = "https://en.wikipedia.org/wiki/List_of_presidents_of_India";

if (typeof $ != "function") $ = require("cheerio").default;

rp(url)
  .then((html) => {
    const presidentUrl = [];
    const length = $("th > a", html).length;
    for (let i = 0; i < length; i++) {
      presidentUrl.push($("th > a", html)[i].attribs.href);
    }
    return Promise.all(
      presidentUrl.map((name) => {
        return scrapParse(`https://en.wikipedia.org${name}`);
      })
    );
  })
  .then((presidents) => {
    console.log(presidents);
  })
  .catch((err) => {
    console.log(err);
  });
