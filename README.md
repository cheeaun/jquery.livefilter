jQuery.liveFilter
=================

About
-----

A jQuery plugin to filter a list of data or elements. A fork of Mike Merritt's **older** version of [jQuery.liveFilter](https://github.com/mikemerritt/LiveFilter) plugin. I remember the script wasn't on GitHub last time when I fork it.

Demo
----

<http://cheeaun.github.com/jquery.livefilter/>

Documentation
-------------

### Syntax

<pre>
$(<var>selector</var>).liveFilter(<var>input element</var>, <var>element to be filtered</var>, <var>options</var>);
</pre>

### Options

- `filterChildSelector` - ( **string**, optional) A string indicating the selector of the elements to be matched and filtered.
- `filter(function(element, value))` - ( **function**, optional) Executed for filtering the elements based on the input field value.
- `before()` - ( **function**, optional) Executed before data or elements are filtered.
- `after()` - ( **function**, optional) Executed after data or elements are filtered.

License
-------

This script is under copyright of [Mike Merritt](https://github.com/mikemerritt/LiveFilter/blob/master/LICENSE).