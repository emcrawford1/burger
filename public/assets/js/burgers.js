$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function(){
            console.log("you ate the burger = ", newDevoured);

            location.reload();
        });
    });



$(".create-form").on("submit", function(event){


    event.preventDefault();

    
    var newBurger = {
        burger_name: $('#bu').val().trim()
    };

    console.log(newBurger.burger_name);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created a new burger");
            location.reload();
        }
    );
});

});

