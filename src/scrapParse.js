const rp = require('request-promise');
var $ = require('cheerio');

if( typeof $ != 'function' ) $ = require('cheerio').default;

const scrapParse = (url) => {
    return rp(url)
    .then((html)=>{
        return {
        name: $('.firstHeading', html).text(),
        birthday: $('.bday', html).text(),
        };
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = scrapParse;


