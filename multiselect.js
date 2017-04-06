$('#survey-pages').on('click', 'a', function (event) {
		event.preventDefault();
});

$("#survey-pages").on('click', 'li', function (e) {
    if (e.ctrlKey || e.metaKey) {
        $(this).toggleClass("drag_selected");
    } else {
        $(this).addClass("drag_selected").siblings().removeClass('drag_selected');
    }
}).sortable({
    connectWith: "#survey-pages",
    delay: 150, //Needed to prevent accidental drag when trying to select
    revert: 0,
    helper: function (e, item) {
        //Basically, if you grab an unhighlighted item to drag, it will deselect (unhighlight) everything else
        if (!item.hasClass('drag_selected')) {
            item.addClass('drag_selected').siblings().removeClass('drag_selected');
        }
        
        //////////////////////////////////////////////////////////////////////
        //HERE'S HOW TO PASS THE drag_SELECTED ITEMS TO THE `stop()` FUNCTION:
        
        //Clone the drag_selected items into an array
        var elements = item.parent().children('.drag_selected').clone();
        
        //Add a property to `item` called 'multidrag` that contains the
        //  drag_selected items, then remove the drag_selected items from the source list
        item.data('multidrag', elements).siblings('.drag_selected').remove();
        
        //Now the drag_selected items exist in memory, attached to the `item`,
        //  so we can access them later when we get to the `stop()` callback
        
        //Create the helper
        var helper = $('<li/>');
        return helper.append(elements);
    },
    stop: function (e, ui) {
        //Now we access those items that we stored in `item`s data!
        var elements = ui.item.data('multidrag');
        
        //`elements` now contains the originally drag_selected items from the source list (the dragged items)!!
        
        //Finally I insert the drag_selected items after the `item`, then remove the `item`, since
        //  item is a duplicate of one of the drag_selected items.
        ui.item.after(elements).remove();
    }

});
