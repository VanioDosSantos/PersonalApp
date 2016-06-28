// create a class fro complex numbers

// create a contructor with two fields, real and imaginary
function ComplexNumber(re, im) {
  this.re = re;
  this.im = im;
}

// doubles the real and imaginary parts of z
ComplexNumber.prototype.double = function() {
  this.re = 2 * this.re;
  this.im = 2 * this.im;
};

ComplexNumber.prototype.square = function() {
  const rel1 = (this.re * this.re) - (this.im * this.im);
  const im1 = 2 * (this.re * this.im);
  this.re = rel1;
  this.im = im1;
};

myObj = (function() {
  // define a bunch of stuff, with new function
  // temp variables
  // all hidden from the rest of the program
  function a(x) {return x * 2}
  const b = [1, 2, 3];
  // ...
})

const nums = new ComplexNumber(1, 2);
nums.double();
nums.square();

// squareOdds([3, 4, 7]);
//
// function squareOdds(list) {
//   return _.map(return (_.filter(list, function(nums){return nums % 2 != 0})), function(num) {
//       return num * num;
//   });
// }
//
// squareNeg([-1, -4, 5, -8]);
//
// function squareNeg(list) {
//   return _.map(return (_.filter(list, function(num) {return num > 0}), function(x) {return x * x});
// }

Template.test.helpers({
  num: function() {return num;}
});
