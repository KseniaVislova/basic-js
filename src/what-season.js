const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (date instanceof Date === false || date[Symbol.toStringTag]) {
    throw new Error("Invalid date!");
  }

  let season = '';

  if (date.getMonth() < 2 || date.getMonth() > 10) {
    season = 'winter';
  } else if (date.getMonth() < 5) {
    season = 'spring';
  } else if (date.getMonth() < 8) {
    season = 'summer';
  } else {
    season = 'autumn';
  }

  return season;
}

module.exports = {
  getSeason
};
