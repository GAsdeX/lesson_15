$('#open-nav').click(function(){
	$('#mobile-menu').addClass('active');
	$('.content-box').addClass('active');

});

$('#mobile-menu').click(function(e){
	if ($(e.target).closest('.modal-window .content-box').length == 0) {
		$('#mobile-menu').removeClass('active');
	}
});

$('[data-close]').click(function(){
	$('#mobile-menu').removeClass('active');
	$('.content-box').removeClass('active');
});

$('[data-open-modal]').click(function(){
	$('.modal-window').addClass('active');
});

$('.modal-window').click(function(e){
	console.log(e);
	if ($(e.target).closest('.modal-window .modal-box').length == 0) {
		$('.modal-window').removeClass('active');
	}
});
