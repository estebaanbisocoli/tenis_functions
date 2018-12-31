module.exports = class Month {
  month;
  year;
  days;

  /**
   *
   * @param {number} month
   * @param {number} year
   * @param {Day[]} days
   */
  constructor(month, year, days) {
    this.month = month;
    this.year = year;
    this.days = days;
  }
};
