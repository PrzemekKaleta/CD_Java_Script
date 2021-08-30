$(function () {
//1
    var first = $('span [data-task="_task1"]');

    var pClosest = first.siblings('p.item-qty');

    var parentP = pClosest.closest('section');

    var nextSection = parentP.next();

    var containerEl = nextSection.find('.container');

    containerEl.css("background", "green").addClass("answerTask1");

    containerEl.slideUp(5000);

    console.log(containerEl);
//2
    var span2 = $("span[data-task='_task2']");

    var sectionShopping = span2.parent().prev('.shopping');

    var secondDiv = sectionShopping.children('div').eq(1);

    var button = secondDiv.children().find('button');

    var cartItem = button.closest('.cart-item');

    cartItem.addClass('cart-updated');


});