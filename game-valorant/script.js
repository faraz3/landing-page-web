$('.scroll').on('click', function(e) {
    

    var lokasi = $(this).attr('href');

    var lokasiElemen = $(lokasi);


    $('html, body').animate({
        scrollTop: lokasiElemen.offset().top - 0
    }, 500, 'swing');

    e.preventDefault();

});