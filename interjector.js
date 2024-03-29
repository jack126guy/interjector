/*
@licstart The following is the entire license notice for the JavaScript code in this page.

Copyright (c) 2016-2022 Jack126Guy <http://github.com/jack126guy>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@licend The above is the entire license notice for the JavaScript code in this page.
*/

(function(document) {
	'use strict';

	//Names of classes to update
	var fillNames = [
		'linux',
		'gnu',
		'components',
		'os',
		'posix',
		'project',
		'kernel',
		'kernel-role',
		'osys',
	];

	//Get the element for filling in the value
	function getFillElement(name) {
		return document.getElementById('ijtr-fill-' + name);
	}

	//Get the elements that are tied to the value
	function getTiedElements(name) {
		return document.querySelectorAll('#interjector .tied-' + name);
	}

	//Register an event handler on update
	function registerUpdateHandler(name) {
		getFillElement(name).addEventListener('keyup', function() {
			setTiedText(name, getFillText(name));
		});
	}

	//Get the filled text
	function getFillText(name) {
		return getFillElement(name).value;
	}

	//Set the text on the tied elements
	function setTiedText(name, text) {
		var tiedElements = getTiedElements(name);
		for (var i = 0; i < tiedElements.length; i++) {
			tiedElements[i].textContent = text;
		};
	}

	//Update "tied" elements on each change of the "fill" input
	function registerFillUpdates() {
		for (var i = 0; i < fillNames.length; i++) {
			registerUpdateHandler(fillNames[i]);
		};
	}

	//Deal with "a/an" selection
	function registerAAnUpdates() {
		document.getElementById('ijtr-option-a')
			.addEventListener('click', function() {
				setTiedText('a-an', 'a');
			});
		document.getElementById('ijtr-option-an')
			.addEventListener('click', function() {
				setTiedText('a-an', 'an');
			});
	}

	registerFillUpdates();
	registerAAnUpdates();
})(document);