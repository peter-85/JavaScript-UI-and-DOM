$.fn.tabs = function() {

    var $this = $(this);
    var $tabItem = $(".tab-item");
    //initial state
    $this.addClass("tabs-container");
    $(".tab-item-content").hide();
    $(".tab-item-content").eq(1).show();
    $tabItem.eq(1)
        .addClass("current");

    //what happend after clicking
    $tabItem.on("click", function() {
        let $this = $(this);
        $(".tab-item-content").hide();
        $tabItem.removeClass("current");
        $this.addClass("current");
        $this.children(".tab-item-content").show();
    });


    // return $this;
};