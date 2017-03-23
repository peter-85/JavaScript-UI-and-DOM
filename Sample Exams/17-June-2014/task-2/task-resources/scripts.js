/* globals $ */
$.fn.gallery = function(cols) {
    cols = cols || 4;

    var $this = $(this);
    $this.addClass("gallery");
    $selected = $this.children(".selected");
    $selected.hide();
    var $galleryList = $(".gallery-list");

    var $imageContainer = $(".image-container");
    $imageContainer.each(function(index, element) {
        if (index % cols === 0) {
            $(element).addClass("clearfix");
        }
    });

    $galleryList.on("click", "img", function() {
        $selected.show();
    });




    return $this;
    //creating a table
    // var $table = $("<table>")
    //     .addClass("gallery")
    //     .appendTo($(".gallery-list"));
    // var rows = Math.ceil(12 / cols);
    // var counter = 0;
    // for (var row = 0; row < rows; row++) {
    //     var $tr = $("<tr>").addClass("row" + row).appendTo($table);
    //     for (var col = 0; col < cols; col++) {

    //         var $td = $("<td>")
    //             .addClass("cell" + counter)
    //             // .append($("[data-info]"))
    //             // .eq((col + 1) * (row + 1))
    //             .appendTo($tr);
    //         var $img = $("[data-info]").eq(counter).appendTo($td);
    //         counter += 1;
    //     }
    //}


};