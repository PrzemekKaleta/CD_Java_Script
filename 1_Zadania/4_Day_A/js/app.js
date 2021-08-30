$(function() {

    var allLi = $('.main li');
    allLi.addClass("borderClass colorText backgroundElement").fadeOut('slow').fadeIn('slow');

    var elShowMore = $('.showMore');
    elShowMore.eq(0).css('color','red');

    var allLinks = $('.menu').find('a');
    //allLinks.css('color','red');

    allLinks.addClass('redLinks');

    allLinks.eq(0).addClass('biggerText');

    var h1 = $('h1');

    if(h1.hasClass('creepyHeader')) {
        console.log("h1 has class creepyHeader")
    }else{
        h1.addClass("creepyHeader");


    };

});
