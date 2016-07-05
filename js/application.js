// Your JavaScript
$(function() {
  $('.img-center-fill').load(function(){
    var parent = $(this).parent();
    var imgClass = (this.width/this.height > parent.width()/parent.height()) ? 'wide' : 'tall';
    $(this).addClass(imgClass);
  })

  var switchPos = $('#new-articles').position().top + $('#new-articles').height();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= switchPos) {
      $(".navbar-wrapper").addClass("darken");

    } else {
      $(".navbar-wrapper").removeClass("darken");
    }
  });
});

function onYouTubeIframeAPIReady() {
  $('.youtube-video').each(function() {
    var id = $(this).data('id');

    var player = new YT.Player('youtube-video-' + id, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });

    function onPlayerStateChange(event) {
      if(event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED)
        $('#youtube-title-' + id).show();
      else
        $('#youtube-title-' + id).hide();
    }

  });
}
