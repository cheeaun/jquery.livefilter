/*
 * jQuery.liveFilter 1.0
 *
 * Copyright (c) 2009 Mike Merritt
 *
 * Slightly modified by Lim Chee Aun (cheeaun.com)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
 
(function($){
	$.fn.liveFilter = function(inputEl, filterEl, options){
		var defaults = {
			filterChildSelector: null,
			before: function(){},
			after: function(){}
		};
		var options = $.extend(defaults, options);
		
		var el = $(this).find(filterEl);
		if (options.filterChildSelector) el = el.find(options.filterChildSelector);
	 
		$(inputEl).keyup(function(){
			var val = $(this).val();
			var contains = el.filter(':inContains("'+val+'")');
			var containsNot = el.filter(':not(:inContains("'+val+'"))');
			if (options.filterChildSelector){
				contains = contains.parents(filterEl);
				containsNot = containsNot.parents(filterEl).hide();
			}
			
			options.before.call(this, contains, containsNot);
			
			contains.show();
			containsNot.hide();
			
			options.after.call(this, contains, containsNot);
		});
		
		$.extend($.expr[':'], {
			inContains: function(a,i,m){
				return $(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
			}
		});
	}
})(jQuery);
