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
var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} scalar - scalar constant to add to dot product
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {number} dot product
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
* // returns -5.0
*/
function sdsdot( N, scalar, x, strideX, y, strideY ) {
	var ix;
	var iy;
	if ( N <= 0 ) {
		return f32( scalar );
	}
	ix = stride2offset( N, strideX );
	iy = stride2offset( N, strideY );
	return ndarray( N, scalar, x, strideX, ix, y, strideY, iy );
}


// EXPORTS //

module.exports = sdsdot;
