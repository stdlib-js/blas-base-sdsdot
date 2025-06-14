/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var f32 = require( '@stdlib/number-float64-base-to-float32' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param {integer} N - number of indexed elements
* @param {number} scalar - scalar constant to add to dot product
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} dot product
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/
function sdsdot( N, scalar, x, strideX, offsetX, y, strideY, offsetY ) {
	var dot;
	var ix;
	var iy;
	var m;
	var i;

	dot = scalar;
	if ( N <= 0 ) {
		return f32( dot );
	}
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += x[ ix ] * y[ iy ];
				ix += 1;
				iy += 1;
			}
		}
		if ( N < M ) {
			return f32( dot );
		}
		for ( i = m; i < N; i += M ) {
			dot += ( x[ix]*y[iy] ) + ( x[ix+1]*y[iy+1] ) + ( x[ix+2]*y[iy+2] ) + ( x[ix+3]*y[iy+3] ) + ( x[ix+4]*y[iy+4] ); // eslint-disable-line max-len
			ix += M;
			iy += M;
		}
		return f32( dot );
	}
	for ( i = 0; i < N; i++ ) {
		dot += x[ ix ] * y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return f32( dot );
}


// EXPORTS //

module.exports = sdsdot;
