import test from 'ava';
import arrayMin from './';

test(t => {
	t.is(arrayMin([5, 4, 3, 2, 1]), 1);
	t.is(arrayMin([22, 44, 11, 66, 88]), 11);
	t.is(arrayMin([1, 0.11, 2.25, 0.0051]), 0.0051);
	t.end();
});
