#!/usr/bin/env node

"use strict";

const bigInt = require("big-integer");

const param = process.argv[2];
let outputBase = 36;

// maildrop constants
const prefix = "D-";
const modifier = 3434093741;

if(typeof param == "undefined") {
  console.error("Please specify a parameter.");
  process.exit(1);
}

if(process.argv[3] === "--no-base36") {
 outputBase = 10;
}

if(process.argv[3] === "--convert") {
  try {
    console.log(bigInt(param, 36).toString(10));
    process.exit(0);
  } catch(e) {
    console.error(e.message);
    process.exit(1);
  }
}

if(param.substr(0, 2) === prefix) {
  processAltInbox(param);
} else {
  processRegularInbox(param);
}

function processRegularInbox(regularInbox) {
  try {
    console.log(`${regularInbox} -> ${convertToAltInbox(regularInbox)}`);
    process.exit(0);
  } catch(e) {
    console.error(e.message);
    process.exit(1);
  }
}

function processAltInbox(altInbox) {
  try {
    console.log(`${altInbox} -> ${convertToRegularInbox(altInbox)}`);
    process.exit(0);
  } catch(e) {
    console.error(e.message);
    process.exit(1);
  }
}

function convertToAltInbox(regularInbox) {
  const regularBigInt = bigInt(regularInbox.toLowerCase().replace(/[^A-Za-z0-9]/g, ""), 36);
  return prefix + bigInt("1" + reverseString(regularBigInt.toString(10))).plus(modifier).toString(outputBase);
}

function convertToRegularInbox(altInbox) {
  const altBigInt = bigInt(altInbox.toLowerCase().replace(prefix.toLowerCase(), ""), 36);
  return bigInt(reverseString(altBigInt.minus(modifier).toString(10).substring(1))).toString(outputBase);
}

function reverseString(str) {
  return [...str].reverse().join("");
}
