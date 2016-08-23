function openMenu($element){
	$element.addClass('menu-open');
}

function hideMenu($element){
	$element.removeClass('menu-open');
}

$(".navbar-mini").on('click', function(){
	openMenu($('html'));
});

$("a.list-link").on('click', function(e){
	if(this === e.target)
		hideMenu($('html'));
})

$("html, body").on('click', function(e){
	if(this === e.target)
		hideMenu($('html'));
});

$(document).ready(function(){
  $("nav a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  });
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})