const request = require('request');
const cheerio = require('cheerio');

const station_ids = [
  'lsid_9180',
  'lsid_9230',
  'lsid_9240',
  'lsid_9245',
  'lsid_9290',
  'lsid_9580',
  'lsid_9600',
  'lsid_9603',
  'lsid_9633'
];

exports.index = (req, res) => {
  request(process.env.SHMU_URL, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
      res.status(40).json({
        message: 'Operation failed',
        error
      });
    }
    console.log("Status code: " + response.statusCode);
    var $ = cheerio.load(body);
    let titles = getHeaders($);

    let result = {};
    station_ids.forEach(id => {
      let station = {}
      $(`a#${id}`).closest('tr').find('td').each(function(index) {
        if (titles[index] === undefined || titles[index].trim() === "") {
          return;
        } else {
          station[titles[index]] = $(this).text();
        }
      });
      result[id] = station;
    });
    // console.log(result);
    res.status(200).json({
      message: 'OK',
      data: result
    })
  });
}

function getHeaders($) {
  let title = [];
  $('.dynamictable').find('thead > tr > td').each(function(){
    title.push($(this).text());
  });
  return title;
}