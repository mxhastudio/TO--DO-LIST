$(document).ready(function() {

    // Task Add karo
    $("#add-btn").on("click", function() {
        var task = $("#task-input").val();
        if (task) {
            $("#task-list").append(
                '<li>' +
                '<input type="checkbox">' +
                '<span>' + task + '</span>' +
                '<button class="delete">X</button>' +
                '</li>'
            );
            $("#task-input").val("");
        }
    });

    // Task Delete karo
    $(document).on("click", ".delete", function() {
        $(this).parent().remove();
    });

    // Toggle Completion
    $(document).on("change", 'input[type="checkbox"]', function() {
        $(this).parent().toggleClass("completed");
    });

});