//
// Copyright (c) 2016 by Cotep. All Rights Reserved.
//

/*
 * Optional imports
 */

import optional_require from './optional_require';

const mongoose = optional_require('mongoose');
const moment = optional_require('moment');

/*
 * This class contain utilitaries functions for devutils
 */

/**
 * Contain utilitaries functions
 */
export default class Utils {
  static get MONGO_DB_ID_LENGTH() {
    return 24;
  }

  /**
   * Do we have a json in parameters?
   *
   * WARNING: JSON.PARSE ACCEPT PLAIN NUMBERS AND NULL AS VALUES
   *
   * @param {Object} v
   * @return {Boolean}
   */
  static isAJSON(v) {
    // handle the null case
    if (v === null || v === false || typeof v === 'undefined') return false;

    // handle one part of numbers
    if (v instanceof Number) return false;

    if (typeof v === 'object') return true;

    if (!Utils.isAString(v)) return false;

    // Test a json contains {} or [] data in it
    const regexpJson = /(({*})|(\[*\]))+/;

    if (!regexpJson.test(v)) return false;

    try {
      JSON.parse(v);

      // handle the numbers
      if (Utils.isAnInteger(v) || Utils.isAFloat(v)) return false;

      return true;
    } catch (e) {
      return false;
    }
  }


  /**
   * Create a monoline from an array which is usefull when you have a line that is too long
   */
  static monoline(parts) {
    return parts.reduce((str, x) => `${str}${x}`, '');
  }

  /**
   * Check if we got a String
   * @param {Object} v
   * @return {Boolean}
   */
  static isAString(v) {
    return typeof v === 'string';
  }

  /**
   * Check if we have a mongoose id element
   *
   * @param {Object} v
   * @return {Boolean}
   */
  static isAMongooseObjectId(v) {
    return mongoose ? v instanceof mongoose.Types.ObjectId()
      .constructor : false;
  }

  /**
   * Check if we got a Boolean
   * @param {Object} v
   * @return {Boolean}
   */
  static isABoolean(v) {
    return typeof v === 'boolean' || v === 'true' || v === 'false';
  }

  /**
   * Check if we got a Boolean (permissive with true and false strings)
   * @param {Object} v
   * @return {Boolean}
   */
  static isABooleanPermissive(v) {
    return Utils.isABoolean(v) || (v === 'true') || (v === 'false');
  }

  /**
   * Check if we got an ID
   * @param {Object} v
   * @return {Boolean}
   */
  static isAnID(v) {
    if (!v || (typeof v !== 'string')) return false;

    return new RegExp(`^[a-f\\d]{${String(Utils.MONGO_DB_ID_LENGTH)}}$`, 'i')
      .test(v);
  }


  /**
   * Check if we got a Float
   * @param {Object} v
   * @return {Boolean}
   */
  static isAFloat(v) {
    if (typeof v === 'undefined' ||
      v === null ||
      v instanceof Array ||
      (typeof v === 'object' && !(v instanceof Number))) return false;

    const regexp = /^[+-]?\d+(\.\d+)?$/;

    return regexp.test(v);
  }

  /**
   * Check if we got an Integer
   * @param {Object} v
   * @return {Boolean}
   */
  static isAnIPAddress(v) {
    if (!Utils.isAString(v)) return false;

    const regexpIpv4 = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;

    const regexpIpv6 = /^::ffff:[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;

    return regexpIpv4.test(v) || regexpIpv6.test(v);
  }


  /**
   * Check if we got a timestamp
   * @param {Object} v
   * @return {Boolean}
   */
  static isATimestamp(v) {
    if (!v) return false;

    if (v instanceof Date) return true;

    if (typeof v !== 'string' && typeof v !== 'number') return false;

    return (new Date(Number(v)))
      .getTime() > 0;
  }

  /**
   * Check if we got an Integer
   * @param {Object} v
   * @return {Boolean}
   */
  static isAnInteger(v) {
    if (typeof v === 'undefined' ||
      v === null ||
      v instanceof Array ||
      (typeof v === 'object' && !(v instanceof Number))) return false;

    if (v instanceof Number) return true;

    const regexp = /^[+-]?(0|[1-9]\d*)$/;

    return regexp.test(v);
  }


  /**
   * Check if we got a null value
   *
   * Is considered NULL :
   * - an empty String
   * - the value 0
   * - the boolean false
   * - the null value
   * - undefined
   *
   * @param {Object} v
   * @return {Boolean}
   */
  static isNull(v) {
    return (v === null) || (v === 0) || (v === false) || (v === 'null') || (typeof v === 'undefined');
  }
  /**
   * Check if we got an unsigned Integer
   * @param {Object} v
   * @return {Boolean}
   */
  static isAnUnsignedInteger(v) {
    if (typeof v === 'undefined' || v === null || v instanceof Array || (typeof v === 'object' && !(v instanceof Number))) return false;

    if (v instanceof Number && v >= 0) return true;

    const regexp = /^\+?(0|[0-9]\d*)$/;

    return regexp.test(v);
  }

  /**
   * Display a message in console
   * @param {{
   *   str: String,
   *   carriageReturn: Boolean,
   *   out: Object,
   *   from: String,
   * }}
   */
  static displayMessage({
    str,
    carriageReturn = true,
    out = process.stdout,
    from = 'unkown',
    time = Date.now(),
  }) {
    out.write(`${moment ? moment(time).format() : time}:${from} > - ${str}${carriageReturn ? '\n' : ''}`);
  }
}
