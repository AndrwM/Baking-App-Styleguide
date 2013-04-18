$(document).ready(function() {

    $(".check").each(function() {
        $(this).hide();

        var $image = $("http://cdn.sstatic.net/stackoverflow/img/sprites.png").insertAfter(this);    

        $image.click(function() {
            var $checkbox = $(this).prev(".check");
            $checkbox.prop('checked', !$checkbox.prop('checked'));

            if($checkbox.prop("checked")) {
                $image.attr("src", "http://cdn.sstatic.net/stackoverflow/img/sprites.png");
            } else {
                $image.attr("src", "http://www.gravatar.com/avatar/972d1ca011c1a846ba6d354be83708c5?s=32&d=identicon&r=PG");
            }
        })
    });
});