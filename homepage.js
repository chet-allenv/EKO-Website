$(function() {
    $("#tabs").tabs({
        collapsible: true,
    });
    $("#contact-tab").on("click", function() {
        window.location.href = "contact.html";
    });
});