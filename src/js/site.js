(function($, window, document, undefined) {

    slideMenu();
    questionType();
    slideNav();
    showSettings();
    showSettings2();
    shiftCompiling();
    sortDemo();
    extraMenu();
    $('input').iCheck();

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    $(function() {
        $.contextMenu({

            selector: '.survey-item',
            trigger: 'left',

            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "headline": {
                    name: "",
                    className: "not-selectable headline",
                },
                "open": {
                    name: "Åbn",
                    icon: "open"
                },
                "open as": {
                    name: "Åben som",
                    icon: "openAs"
                },
                "print": {
                    name: "Vis udskrift",
                    icon: "print"
                },
                "Edit": {
                    name: "Rediger",
                    icon: "edit"
                },
                "settlement": {
                    name: "Afvikling",
                    icon: "settlement"
                },
                "sep1": "---------",
                "rapport": {
                    name: "Tilføj analyserapport",
                    icon: "rapport"
                },
                "copy": {
                    name: "Kopiér",
                    icon: "copy"
                },
                "rename": {
                    name: "Omdøb",
                    icon: "rename"
                },
                "delete": {
                    name: "Slet",
                    icon: "delete"
                },
                "move": {
                    name: "Flyt",
                    icon: "move"
                },
                "sep2": "---------",
                "answers": {
                    name: "Bevarelser",
                    icon: "answers"
                },
                "settings": {
                    name: "Indstillinger",
                    icon: "settings"
                },
                "jump": {
                    name: "Spring",
                    icon: "jump"
                },
                "languages": {
                    name: "Sprogversioner",
                    icon: "languages"
                },
                "autoanswer": {
                    name: "Autosvar",
                    icon: "autoanswer"
                },
                "adSurvey": {
                    name: "Advanced edit survey",
                    icon: "adSurvey"
                },

            }
        });

        $('.survey-item').on('click', function(e) {
            var menuHeadline = $('.headline');
            var thisName = $(this).find('p').text()
            var thisRealName = thisName + '<br>'
            menuHeadline.find('span').append(thisRealName + this.id);
        })
    });

})(jQuery, window, document);

function shiftCompiling() {
    var status = $('.compiling');
    setTimeout(function() {
        if (status.hasClass('compiling--red')) {
            status.removeClass('compiling--red').addClass('compiling--yellow');
        }
    }, 5000);
    setTimeout(function() {
        if (status.hasClass('compiling--yellow')) {
            status.removeClass('compiling--yellow').addClass('compiling--done');
        }
    }, 10000);
}

function sortDemo() {
    var sortingHead = $('.item-overview-header ul li');
    sortingHead.on('click', function(e) {
        sortingHead.not($(this)).removeClass('sorted').removeClass('up');
        var self = $(this);
        if (!self.hasClass('sorted')) {
            self.addClass('sorted');
        } else if (self.hasClass('sorted') && self.hasClass('up')) {
            self.removeClass('up');
        } else if (self.hasClass('sorted')) {
            self.addClass('up');
        }
    });
}

function extraMenu() {
    var extraBtn = $('.extra-menu-btn');
    var extraMenu = $('.extra-menu');
    extraBtn.on('click', function(e) {
        if(!extraMenu.hasClass('active')){
            extraMenu.addClass('active');
            extraBtn.addClass('open');
        }
        else{
            extraMenu.removeClass('active');
            extraBtn.removeClass('open');
        }
    });
}

function slideMenu() {
    var slideMenuBtn = $('.slide-menu-btn');
    var slideMenu = $('.slide-menu');
    var surveyContainer = $('.survey-innerContainer');
    var htmlMaster = $('html');
    var typeContainer = $('.question-types');
    var dashboard = $('.dashboard-container');
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
                dashboard.addClass('side-menu-active');

            } else {
                slideMenu.removeClass('active');
                slideMenuBtn.removeClass('active');
                dashboard.removeClass('side-menu-active');
            }
        }
    });
}

function questionType() {
    var typeBtn = $('.q-types');
    var typeContainer = $('.question-types');
    var closeContainer = $('.survey-innerContainer');
    var survey_list = $('.survey__list');

    typeBtn.click(function() {
        if (!typeContainer.hasClass('active')) {
            typeContainer.fadeIn('100000').addClass('active');
            typeBtn.addClass('active');
            survey_list.addClass('active');

        } else {

            typeContainer.removeClass('active').css('display', 'none');
            typeBtn.removeClass('active');
            survey_list.removeClass('active');
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
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
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
