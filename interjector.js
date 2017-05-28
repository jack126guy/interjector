$(function() {
	interjector.registerFillUpdates();
	interjector.registerAAnUpdates();
});

var interjector = {
	//Names of classes to update
	fillNames: [
		'linux',
		'gnu',
		'components',
		'os',
		'posix',
		'project',
		'kernel',
		'kernel-role',
		'osys',
	],
	//Get the element for filling in the value
	getFillElement: function(name) {
		return $('#ijtr-fill-' + name);
	},
	//Get the elements that are tied to the value
	getTiedElements: function(name) {
		return $('#interjector .tied-' + name);
	},
	//Register an event handler on update
	registerUpdateHandler: function(name, handler) {
		this.getFillElement(name).keyup(handler);
	},
	//Get the filled text
	getFillText: function(name) {
		return this.getFillElement(name).val();
	},
	//Set the text on the tied elements
	setTiedText: function(name, text) {
		this.getTiedElements(name).text(text);
	},
	//Update "tied" elements on each change of the "fill" input
	registerFillUpdates: function() {
		var t = this;
		this.fillNames.forEach(function(name) {
			t.registerUpdateHandler(name, function() {
				t.setTiedText(name, t.getFillText(name));
			});
		});
	},
	//Deal with "a/an" selection
	registerAAnUpdates: function() {
		var t = this;
		$('#ijtr-option-a').click(function() {
			t.setTiedText('a-an', 'a');
		});
		$('#ijtr-option-an').click(function() {
			t.setTiedText('a-an', 'an');
		});
	},
}