$(function() {
	//Update "tied" elements on each change of the "fill" input
	interjector.fillNames.forEach(function(name) {
		$('#ijtr-fill-' + name).keyup(function() {
			$('#interjector .tied-' + name).text($('#ijtr-fill-' + name).val());
		});
	});
	//Deal with "a/an" selection
	$('#ijtr-option-a').click(function() {
		$('#interjector .tied-a-an').text('a');
	});
	$('#ijtr-option-an').click(function() {
		$('#interjector .tied-a-an').text('an');
	});
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
}