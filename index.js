"use strict";

const result = require("./MyMath");
const { MyMath, PI } = result;
console.log(PI);
console.log(MyMath);

const result = require('./Component');
// const { Component } = result;
console.log(Component)


console.log(5 + 5);
console.log(MyMath.sum(12, 12, 23, 12, 4));
