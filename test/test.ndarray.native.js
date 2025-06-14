/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var f32 = require( '@stdlib/number-float64-base-to-float32' );
var Float32Array = require( '@stdlib/array-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var sdsdot = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( sdsdot instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sdsdot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( sdsdot.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the dot product of vectors `x` and `y`', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	dot = sdsdot( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 14.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns a provided scalar constant', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot( 0, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = sdsdot( -4, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = sdsdot( 0, f32( 3.14 ), x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, f32( 3.14 ), 'returns expected value' );

	dot = sdsdot( -4, f32( 3.14 ), x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, f32( 3.14 ), 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a scalar constant to add to the dot product', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	dot = sdsdot( x.length, 10.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, -7.0, 'returns expected value' );

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot( x.length, -10.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]);

	dot = sdsdot( 3, 0.0, x, 2, 0, y, 1, 0 );
	t.strictEqual( dot, -12.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float32Array([
		6.0,  // 0
		7.0,  // 1
		8.0,  // 2
		9.0,
		10.0,
		11.0
	]);

	dot = sdsdot( 3, 0.0, x, 2, 1, y, 1, 0 );
	t.strictEqual( dot, 88.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	dot = sdsdot( 3, 0.0, x, 1, 0, y, 2, 0 );
	t.strictEqual( dot, 45.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float32Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	dot = sdsdot( 3, 0.0, x, 2, 0, y, 1, 3 );
	t.strictEqual( dot, 94.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	dot = sdsdot( 3, 0.0, x, -2, x.length-1, y, -1, 2 );
	t.strictEqual( dot, 67.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0,
		7.0,   // 2
		8.0,   // 1
		9.0,   // 0
		10.0
	]);

	dot = sdsdot( 3, 0.0, x, 2, 0, y, -1, y.length-2 );
	t.strictEqual( dot, 68.0, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently calculates the dot product', opts, function test( t ) {
	var expected;
	var dot;
	var x;
	var y;
	var i;

	expected = 0.0;
	x = new Float32Array( 100 );
	y = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected += x[ i ] * y[ i ];
	}

	dot = sdsdot( x.length, 0.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( dot, expected, 'returns expected value' );

	expected = 0.0;
	x = new Float32Array( 240 );
	y = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected += x[ i ] * y[ i ];
	}

	dot = sdsdot( x.length, 0.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( dot, expected, 'returns expected value' );
	t.end();
});
