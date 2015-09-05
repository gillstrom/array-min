'use strict';
var numberIsInteger = require('number-is-integer');

module.exports = function (input) {
	if (!Array.isArray(input)) {
		throw new Error('Expected an array');
	}

	input.map(function (el) {
		if (!numberIsInteger(el)) {
			throw new TypeError('Array values must be numbers');
		}
	});

	return Math.min.apply(null, input);
};
