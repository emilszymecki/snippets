$('.imagemap').mapster({
        fillOpacity: 0.4,
        fillColor: "d42e16",
        stroke: true,
        strokeColor: "FFFFFF",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        singleSelect: false,
		onClick: function(e){
			$(this).parent().parent().find('.n-'+e.key).find(".answer").click().trigger('change')
		}
    });
