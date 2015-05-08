(function($, window, document, undefined) {

    slideMenu();
    questionType();
    slideNav();
    showSettings();
    showSettings2();
    
})(jQuery, window, document);

function slideMenu() {
    var slideMenuBtn = $('.slide-menu-btn');
    var slideMenu = $('.slide-menu');
    var surveyContainer = $('.survey-innerContainer');
    var htmlMaster = $('html');
    var typeContainer = $('.question-types');
    slideMenuBtn.click(function() {
        //IE8 Fix
        if (htmlMaster.hasClass('lt-ie9') || htmlMaster.hasClass('ie9')) {
            if (slideMenu.css('left') != '-5px') {

                slideMenu.animate({
                    left: "-5px",

                }, 350);
                surveyContainer.animate({
                    left: "315px",

                }, 350);

            } else {
                slideMenu.animate({
                    left: "-260px",

                }, 350);
                surveyContainer.animate({
                    left: "60px",

                }, 350);
            }

        } else {

            if (!slideMenu.hasClass('active')) {
                // if(typeContainer.hasClass('active')){
                //     typeContainer.removeClass('active');
                // }
                slideMenu.addClass('active');
                slideMenuBtn.addClass('active');
                surveyContainer.addClass('side-menu-active');
            } else {
                slideMenu.removeClass('active');
                slideMenuBtn.removeClass('active');
                surveyContainer.removeClass('side-menu-active');
            }
        }
    });
}

function questionType() {
    var typeBtn = $('.q-types');
    var typeContainer = $('.question-types');

    typeBtn.click(function() {
        if (!typeContainer.hasClass('active')) {
            typeContainer.addClass('active')
            typeBtn.addClass('active');
        } else {
            typeContainer.removeClass('active');
            typeBtn.removeClass('active');
        }
    });
}

function slideNav() {
    var navBtn = $('.info');
    var slideNav = $('.slide-nav');
    var closeNav = $('.survey-innerContainer');

    navBtn.click(function() {
        if (!slideNav.hasClass('active')) {
            slideNav.addClass('active');
            navBtn.addClass('active');
        } else {
            slideNav.removeClass('active');
            navBtn.removeClass('active');
        }
    });

    $('.survey-innerContainer, .dashboard-container').click(function() {
        if (slideNav.hasClass('active')) {
            slideNav.removeClass('active');
            navBtn.removeClass('active');
        }
    });
}

function showSettings() {
    var settingsBtn = $('.settingsBtn');
    var settings = $('.survey-settings');
    var survey = $('.survey');
    settingsBtn.click(function() {
        if (!settings.hasClass('active')) {
            settings.addClass('active');
            settingsBtn.addClass('active');
            survey.addClass('active');
        } else {
            settingsBtn.removeClass('active');
            settings.removeClass('active');
            survey.removeClass('active');
        }
    });
}
function showSettings2() {
    var settingsBtn = $('.settingsBtn2');
    var settings = $('.survey-settings');
    var survey = $('.survey');
    settingsBtn.click(function() {
        if (!settings.hasClass('active')) {
            setTimeout(function() {
                size();
            }, 50);
            settings.addClass('active');
            settingsBtn.addClass('active');
            survey.addClass('active');
        } else {
            settingsBtn.removeClass('active');
            settings.removeClass('active');
            survey.removeClass('active');
        }
    });
}

(function($) {
    $.fn.openActive = function(activeSel) {
        activeSel = activeSel || ".active";

        var c = this.attr("class");

        this.find(activeSel).each(function() {
            var el = $(this).parent();
            while (el.attr("class") !== c) {
                if (el.prop("tagName") === 'UL') {
                    el.show();
                } else if (el.prop("tagName") === 'LI') {
                    el.removeClass('tree-closed');
                    el.addClass("tree-opened");
                }

                el = el.parent();
            }
        });

        return this;
    }

    $.fn.treemenu = function(options) {
        options = options || {};
        options.delay = options.delay || 0;
        options.openActive = options.openActive || false;
        options.activeSelector = options.activeSelector || "";

        this.find("> li").each(function() {
            e = $(this);
            var subtree = e.find('> ul');
            var toggler = $('<span>');
            toggler.addClass('toggler');

            e.prepend(toggler);
            if (subtree.length > 0) {
                subtree.hide();

                e.addClass('tree-closed');

                e.find(toggler).click(function() {
                    var li = $(this).parent('li');
                    li.find('> ul').toggle(options.delay);
                    li.toggleClass('tree-opened');
                    li.toggleClass('tree-closed');
                });

                $(this).find('> ul').treemenu(options);
            } else {
                $(this).addClass('tree-empty');
            }
        });

        if (options.openActive) {
            this.openActive(options.activeSelector);
        }

        return this;
    }
})(jQuery);

$(function() {
    $(".tree").treemenu({
        delay: 300
    }).openActive();
});
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})

$(".tree li a span").hover(
    function() {
        var parent = $(this).parent();
        var toggler = $('.toggler');
        parent.css('background-color', '#02b1e8');
        $(this).css('color', 'white')
            // toggler.addClass('hover');
    },
    function() {
        var parent = $(this).parent();
        var toggler = $('.toggler');
        $(this).css('color', '#333333')
        parent.css('background-color', 'transparent');
        // toggler.removeClass('hover');
    }
);


