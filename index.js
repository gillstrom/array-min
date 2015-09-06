'use strict';
module.exports = function (input) {
	if (!Array.isArray(input)) {
		throw new Error('Expected an array');
	}

	input.map(function (el) {
		if (typeof el !== 'number') {
			throw new TypeError('Array values must be numbers');
		}
	});

	return Math.min.apply(null, input);
};
