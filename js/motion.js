var counter = function () {

  $('.section-counter').waypoint(function (direction) {

    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
      $(this.element).find('.number-counter').each(function () {
        var $this = $(this),
          num = $this.data('number');
        $this.animateNumber(
          {
            number: num,
            numberStep: comma_separator_number_step
          },
          {
            easing: 'swing',
            duration: 3000
          }
        );
      });

    }

  }, { offset: '95%' });

};