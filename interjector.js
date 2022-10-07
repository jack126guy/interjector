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