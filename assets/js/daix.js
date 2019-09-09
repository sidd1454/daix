$(document).ready(function() {
    $('#js-ticker-button').click(function() {
        $('.currency').slideToggle();
        $('span', this).toggleClass('fa-minus');
    });

    var ticker = $('#js-ticker');
    var tickerButton = $('#js-ticker-button');
    var tickerHeight = tickerButton.innerHeight();

    var backToTop = $('.back-to-top');
    var offset = 250;
    var duration = 300;

    $(backToTop).css({ 'margin-bottom': tickerHeight });

    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            $(backToTop).fadeIn(duration);
        } else {
            $(backToTop).fadeOut(duration);
        }
    });

    $(backToTop).click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });

    $('#hideshow').on('click', function(event) {
        $('.js-btc, .js-usd').toggleClass('d-none');
        $('.js-currency').toggleClass('opacity-5');
    });

    // Bootstrap Select
    // $('.js-bs-select').selectpicker();
    // document.querySelector('.js-bs-select').onchange = function(e) {
    //     window.location.href = e.srcElement.value;
    // };

    // Bootstrap Newsletter Modal
    $('#newsletterModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var body = button.data('body');
        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('.modal-body').text(body);
    });
});

$('.js-smooth-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate(
        {
            scrollTop: $(sectionTo).offset().top,
        },
        1500
    );
});

// Video Controls

$('video').click(function() {
    var video = $(this).get(0);
    var icon = $(this).prev();
    handleVideo(video, icon);
});

$('.js-play-button').click(function() {
    var video = $(this).next();
    var icon = $(this).get(0);
    handleVideo(video, icon);
});

var handleVideo = function(video, icon) {
    if (video.paused) {
        video.play();
        icon.toggleClass('js-hide');
    } else {
        video.pause();
        icon.toggleClass('js-hide');
    }
};

$('.typeahead').typeahead({
    source: [
        { id: 'id1', name: 'Bitcoin', value: 'http://www.google.com' },
        { id: 'id2', name: 'Litecoin', value: 'http://www.google.com' },
        { id: 'id3', name: 'Dogecoin', value: 'http://www.google.com' },
    ],

    autoSelect: false,

    afterSelect: function(e) {
        window.location.href = e.value;
    },
});

$('.js-typeahead').on('click', function() {
    $('.typeahead').focus();
});
