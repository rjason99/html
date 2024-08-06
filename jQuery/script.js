$(document).ready(function () {

    // jQuery methods go here...
    $("#myButton").click(function(event){
        let divText = $("div").first().text();
        $("div").first().text(`${divText} <p>Paragraph</p>`);
        $("div").last().html("<p>Paragraph</p>");
        $("input").val("Input value");
    });
    $("#removeButton").click(function(event){
        $("div").first().remove();
    });
    $("#emptyButton").click(function(event){
        $("div").first().empty();
    });
    $("#colorButton").click(function(event){
        $("div").addClass("colored").css("font-size", "20px");
    });
});