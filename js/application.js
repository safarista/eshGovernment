$(function() {
	// Stuff to do as soon as the DOM is ready;
	// ===CAROUSEL===
	$('.carousel').carousel({
		// speed: 2000,
		pause: 'hover'
	});

	// ===MODAL===
	$('#modal').modal({
		backdrop: true, // Bool,'static' => stops close on click
		keyboard: true, // Bool, close modal if 'escape' key
		show: true // Bool, display modal when init
		// remote:  // path, uses jQuery `load` to inject remote content into '.modal-body'. Use href to specify 
	});

	
	$('#modal').on('hidden', function (click) {
		$(this).modal('hide');
	});

	// ===ACCORDION===
	$("#accordion2 .collapse").collapse();

	// ===TABS===
	// $('#myTab a').click(function (e) {
	// 	e.preventDefault();
	// 	$(this).tab('show');
	// });
	$('a[data-toggle="tab"]').on('shown', function (e) {
		e.target // activated tab
		e.relatedTarget // previous tab
		// e.preventDefault();
	});
});
