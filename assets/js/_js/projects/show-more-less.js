/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let showMoreBtns = $(".project-show-more-btn");

    if (showMoreBtns.length > 0) {
      showMoreBtns.click(function () {
        let section = $(this).closest('.project-section');
        let overflow = section.find('.project-overflow');
        let showMore = $(this).find('.show-more');
        let showLess = $(this).find('.show-less');

        if (overflow.first().is(':hidden')) {
          overflow.slideDown();
          showMore.hide();
          showLess.show();
        } else {
          overflow.slideUp();
          showMore.show();
          showLess.hide();
        }
      });
    }
  });

})();
