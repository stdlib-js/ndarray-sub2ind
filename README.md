<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sub2ind

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert subscripts to a linear index.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sub2ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-sub2ind@deno/mod.js';
```

#### sub2ind( shape, ...subscripts\[, options] )

Converts subscripts to a linear index.

```javascript
var shape = [ 2, 2 ];

var idx = sub2ind( shape, 1, 0 );
// returns 2
```

The function supports the following `options`:

-   **mode**: specifies how to handle subscripts which exceed array dimensions. The following modes are supported:

    -   `throw`: specifies that the function should throw an error when a subscript exceeds array dimensions.
    -   `normalize`: specifies that the function should normalize negative subscripts and throw an error when a subscript exceeds array dimensions.
    -   `wrap`: specifies that the function should wrap around subscripts exceeding array dimensions using modulo arithmetic.
    -   `clamp`: specifies that the function should set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.

    If provided a `mode` array, each array element corresponds to a dimension. If provided fewer modes than dimensions, the function reuses modes using modulo arithmetic. Default: `[ 'throw' ]`.

-   **order**: specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style). Default: `'row-major'`.

By default, the function assumes a row-major array. To return a linear index for a column-major array, set the `order` option.

```javascript
var shape = [ 2, 2 ];
var opts = {};

opts.order = 'column-major';
var idx = sub2ind( shape, 1, 0, opts );
// returns 1
```

By default, the function throws an `error` if provided subscripts which exceed array dimensions. To specify alternative behavior, set the `mode` option.

```javascript
var shape = [ 2, 2 ];
var opts = {};

opts.mode = 'wrap';
var idx = sub2ind( shape, -2, 0, opts );
// returns 0

opts.mode = 'clamp';
idx = sub2ind( shape, 10, 10, opts );
// returns 3
```

To specify separate modes for each dimension, provide a `mode` array.

```javascript
var shape = [ 2, 2, 2 ];
var opts = {
    'mode': [
        'wrap',
        'clamp'
    ]
};

var idx = sub2ind( shape, -2, 10, -1, opts );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@deno/mod.js';
import sub2ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-sub2ind@deno/mod.js';

var shape = [ 3, 3, 3 ];
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( i );
}

var opts = {
    'order': 'column-major'
};

console.log( '' );
console.log( 'Dimensions: %s.', shape.join( 'x' ) );
console.log( 'View:' );
console.log( '' );

var slice;
var idx;
var row;
var j;
var k;
for ( k = 0; k < shape[ 2 ]; k++ ) {
    slice = 'A[:,:,'+k+'] = ';
    console.log( slice );
    for ( i = 0; i < shape[ 0 ]; i++ ) {
        row = '  ';
        for ( j = 0; j < shape[ 1 ]; j++ ) {
            idx = sub2ind( shape, i, j, k, opts );
            row += arr[ idx ];
            if ( j < shape[ 1 ]-1 ) {
                row += ', ';
            }
        }
        console.log( row );
    }
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-ind2sub`][@stdlib/ndarray/ind2sub]</span><span class="delimiter">: </span><span class="description">convert a linear index to an array of subscripts.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-sub2ind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-sub2ind

[test-image]: https://github.com/stdlib-js/ndarray-sub2ind/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-sub2ind/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-sub2ind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-sub2ind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-sub2ind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-sub2ind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-sub2ind/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-sub2ind/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-sub2ind/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-sub2ind/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-sub2ind/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-sub2ind/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-sub2ind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-sub2ind/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/ind2sub]: https://github.com/stdlib-js/ndarray-ind2sub/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
