$(document).ready(function () {
    var about = $('#about').position();
    var education = $('#education').position();
    var projects = $('#projects').position();
    var experience = $('#experience').position();

    $('#about-link').click(function () {
        $('html, body').animate({
            scrollTop: about.top
        }, 500);
        sideNav().removeMenu();
        return false;
    });

    $('#education-link').click(function () {
        $('html, body').animate({
            scrollTop: education.top
        }, 500);
        sideNav().removeMenu();
        return false;
    });

    $('#projects-link').click(function () {
        $('html, body').animate({
            scrollTop: projects.top
        }, 500);
        sideNav().removeMenu();
        return false;
    });

    $('#experience-link').click(function () {
        $('html, body').animate({
            scrollTop: experience.top
        }, 500);
        sideNav().removeMenu();
        return false;
    });
});

$("ul#slide-out li a").click(function () {
    
});

$(".button-collapse").sideNav();
$(".collapsible").collapsible();