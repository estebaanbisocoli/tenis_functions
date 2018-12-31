import { app } from "firebase-admin";

/**
 * Represents the status of reservations of a month
 */
class Month {
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
}

class User {
  name;
  phoneToken;
}

/**
 * Represents one booking, it has to have an owner,
 */
class Appointment {
  from;
  to;
  owner;
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
}

class Day {
  day;
  state;
  appointment;

  /**
   *
   * @param {number} day
   * @param {"full"|"free"} state
   * @param {Appointment} appointment
   */
  constructor(day, state, appointment) {
    this.day = day;
    this.appointment = appointment;
    this.state = state;
  }
}
