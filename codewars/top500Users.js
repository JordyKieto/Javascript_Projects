const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');
const URL = 'https://www.codewars.com/users/leaderboard';
const util = require('util')

/**
 You should get and parse the html of the codewars leaderboard page.

You can use Nokogiri(Ruby) or BeautifulSoup(Python) or CheerioJS(Javascript).

For Javascript: Return a Promise resolved with your 'Leaderboard' Object!

You must meet the following criteria:

Return a 'Leaderboard' object with a position property.
Leaderboard#position should contain 500 'User' objects.
Leaderboard#position[i] should return the ith ranked User(1 based index).
Each User should have the following properties:

User#name    # => the user's username, not their real name
User#clan    # => the user's clan, empty string if empty clan field
User#honor   # => the user's honor points as an integer
 */


function solution() {
        var Leaderboard = { position: {} }
        var promise = new Promise((resolve, reject) => {
        request(URL, async function(err, res, html) {
            let $ = await cheerio.load(html);
            $("tr").each(function(i, user) {
                    let rank = parseInt($(this).children().first().text().replace("#", ""));
                    let clan =  $(this).children().eq(2).text();
                    let honor = parseInt($(this).children().eq(3).text().replace(",", "" ));
                    let name = $(this).attr('data-username');
                    if (!isNaN(rank))
                    {Leaderboard.position[rank] = {name: name, clan: clan, honor: honor}};
            });
            resolve(Leaderboard);
        });
        });
        return promise;
};

solution().then((data)=>{console.log(data.position[1])});