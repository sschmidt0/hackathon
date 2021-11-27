const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  const errors = {};
  const yearStr = new Date().getFullYear();
  const expireStr = parseInt(data.expireDate.substr(-2)) + 2000;
  const trimmedCardNumber = data.cardNumber.trim(' ');
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const visaRegEx = /^4[0-9]{2,}$/;
  const mastercardRegEx = /^5[1-5][0-9]{14}$/;
  const amexpRegEx = /^3[47][0-9]{5,}$/;
  const discovRegEx = /^6(?:011|5[0-9]{2})[0-9]{3,}$/;
  const expireDateRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  const cvc3DigRegEx = /^\d{3}$/;
  const cvc4DigRegEx = /^\d{4}$/;
  const zipRegEx = /^\d{5}$|^\d{5}-\d{4}$/;

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : "";
  data.expireDate = !isEmpty(data.expireDate) ? data.expireDate : "";
  data.cvcNumber = !isEmpty(data.cvcNumber) ? data.cvcNumber : "";
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.zip = !isEmpty(data.zip) ? data.zip : "";

  // email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Type in your email";
  } else if (data.email.match(emailRegEx) === null) {
    errors.email = "Invalid email";
  }

  // cardNumber check
  if (Validator.isEmpty(data.cardNumber)) {
    errors.cardNumber = "Type in your card number";
  } else if (
    trimmedCardNumber.match(visaRegEx) === null &&
    trimmedCardNumber.match(mastercardRegEx) === null &&
    trimmedCardNumber.match(amexpRegEx) === null &&
    trimmedCardNumber.match(discovRegEx) === null
  ) {
    errors.cardNumber = "Invalid card number";
  }

  // expireDate check
  if (Validator.isEmpty(data.expireDate)) {
    errors.expireDate = "Type in your expire date";
  } else if (data.expireDate.match(expireDateRegEx) === null) {
    errors.expireDate = "Invalid expire date";
  } else if (expireStr < yearStr) {
    errors.expireDate = "Invalid expire date";
  }

  // cvcNumber check
  if (Validator.isEmpty(data.cvcNumber)) {
    errors.cvcNumber = "Type in your CVC number";
  } else if (data.cvcNumber.match(cvc3DigRegEx) === null && data.cvcNumber.match(cvc4DigRegEx) === null) {
    errors.cvcNumber = "Invalid CVC number";
  }

  // fullName check
  if (Validator.isEmpty(data.fullName)) {
    errors.fullName = "Type in your name";
  }

  // country check
  if (Validator.isEmpty(data.country)) {
    errors.country = "Choose a country";
  }

  // zip check
  if (Validator.isEmpty(data.zip)) {
    errors.zip = "Type in your zip code";
  } else if (data.zip.match(zipRegEx) === null) {
    errors.zip = "Invalid zip code";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
