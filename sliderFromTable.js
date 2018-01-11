var makeSliderFromTable = function (po){
    var table = $(po).find('table'),
        tbody = $(po).find('tbody'),
        labels = $(table).find('.first-row').find('th').toArray().map(function(a,b){ return $(a).text()}).slice(1)

    $(table).after($('<div>').addClass('slider_container'));
    var slider_container = $(po).find('.slider_container');
    $(tbody).find('tr').each(function(){
        var self = this,
           n = $(this).getValueN(),
           label = $(this).find('td').eq(0).text();
        $(slider_container).append($('<div>').addClass('slider_num_'+n).addClass('slider_el'))
            var slider = $('.slider_num_'+n).slider({
               range: "min",     
               value: 0,
               min: 0,
               max: labels.length - 1,
               step: 1,
               change: function(event, ui) {
                     $(self).find('.answer').eq(ui.value).prop('checked',true).trigger('change')
                     $('.slick-next').show()
                },
               create: function(event, ui) {
                   var tooltip = $('<div class="label_slider" />').text(label.toUpperCase());
                   $(event.target).find('.ui-slider-range').before(tooltip);
               },
      }).each(function(){
            var opt = $(this).data().uiSlider.options,
                vals = opt.max - opt.min;
                for (var i = 0; i <= vals; i++) {
                    var el = $('<label class = "slider_scale">'+(labels[i])+'</label>').css('left',(i/vals*100)+'%'); 
                    $(this).append(el);
                }
        });
    });

    $(slider_container).on('init', function(event, slick, currentSlide, nextSlide){
            $(po).find('.slick-next').hide()
            $(po).find('.slick-dots').find('li').hide()
            $(po).find('.slick-dots').find('li').eq(0).show()
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        if($(tbody).find('tr').eq(currentSlide).find('.answer:checked').length){
            $(po).find('.slick-next').show();
        }else{
            $(po).find('.slick-next').hide();
        }
        $(po).find('.slick-dots').find('li').eq(currentSlide).show();
    });

    $(slider_container).slick({
        draggable:false,
        dots: true,
        infinite: false,
    })

    $(po).find('.slider_el').css('width','90%');
    $(table).hide();
} 
