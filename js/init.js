$(document).ready(function () {
    $('#about-link').click(function () {
        var about = $('#about').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: about.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: about.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });

    $('#education-link').click(function () {
        var education = $('#education').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: education.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: education.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });

    $('#projects-link').click(function () {
        var projects = $('#projects').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: projects.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: projects.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });

    $('#experience-link').click(function () {
        var experience = $('#experience').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: experience.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: experience.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });

    $('#contact-link1').click(function () {
        var contact = $('#contact').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: contact.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: contact.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });

    $('#contact-link2').click(function () {
        var contact = $('#contact').position();
        if($(".flow-text").css("padding-left") == "10px") {
            $('html, body').animate({
                scrollTop: contact.top - 40
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: contact.top
            }, 500);
        }
        sideNav().removeMenu();
        return false;
    });
});

$(".button-collapse").sideNav();
$(".collapsible").collapsible();