function textareaResize(e) {
	e.outerHeight(0);
	var h = e[0].scrollHeight;
	e.outerHeight(h);
}
$(function() {
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('textarea').each(function() {
		textareaResize($(this));
	})
	$('textarea').on('keyup', function() {
		textareaResize($(this));
	});
	var skillSteps = [0, 2, 5, 10];
	$('.form-skill--slider').slider({
		min: skillSteps[0],
		max: skillSteps[3],
		value: skillSteps[1],
		slide: function( event, ui ) {
            if ( skillSteps.indexOf(ui.value) === -1 ) {
				return false
			}
		}
	});
	for ( var i=0; i<skillSteps.length; i++ ) {
		var t = $('.form-skill--marks');
		var max = skillSteps.length-1;
		var posLeft = skillSteps[i]/skillSteps[skillSteps.length-1]*t.outerWidth()
		t.append('<i style="left:'+posLeft+'px"></i>')
	}
	$('.form-skill__desc--label').on('click', function() {
		$('.form-skill--slider').slider('value',skillSteps[$(this).index()]);
	});
});