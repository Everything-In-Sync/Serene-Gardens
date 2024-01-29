import { email, phone, address } from './variables.js';
// Imports the needed variables from that file so you only have to change the email address, phone number, and address there - and in the _variables.scss file

const emailSelectors = document.querySelectorAll(".email-address");
const phoneSelectors = document.querySelectorAll(".phone-number");
const addressSelectors = document.querySelectorAll(".physical-address");



emailSelectors.forEach(function(selector) {
    selector.setAttribute('href', email);
});

phoneSelectors.forEach(function(selector) {
    selector.setAttribute('href', phone);
});

addressSelectors.forEach(function(selector) {
    selector.setAttribute('href', address);
});

