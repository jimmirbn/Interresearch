//detect css animation end
function whichAnimationEvent() {
    var t,
    el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

var animationEvent = whichAnimationEvent();

(function($, window, document, undefined) {
    $('#carousel-btn').carousel({
        interval: false,
        keyboard: false,
    })

    slideMenu();
    questionType();
    // slideNav();
    showSettings();
    showSettings2();
    shiftCompiling();
    shiftCompiling2();
    sortDemo();
    extraMenu();
    navSelect();
    progressDemo();
    pageBreak();
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

function progressDemo() {
    var bar = $('.progress-bar');

    $.each(bar, function() {
        if ($(this).hasClass('all')) {
            var theBar = $(this).find('.positive');

            theBar.one(animationEvent,
                function(event) {
                    $(this).addClass('active');
                });
        }
    });
}

function pageBreak() {
    var breakBtn = $('.breaker');
    var surveyListDivs = $('.survey__list').children();
    var survey__list = $('.survey__list');
    var count = 0;
    breakBtn.click(function() {
        var countDivs = $('.survey__list .page').length;
        count++;
        var breakerContainer = $(this);
        if (countDivs == 0) {
            survey__list.prepend('<div class="page page' + count + '"><p>Page ' + count + '</p></div>');
        } else {
            $('<div class="page page' + count + '"><p>Page ' + count + '</p></div>').insertAfter($('.page' + (count - 1)));
        }
        $.each(surveyListDivs, function() {
            $('.page' + count).append($(this).not('.page div'));
            if ($(this).is(breakerContainer)) {
                return false;
            }
        });
    });
}

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

function shiftCompiling2() {
    var status = $('.compiling2');
    setTimeout(function() {
        if (status.hasClass('compiling--red')) {
            status.removeClass('compiling--red').addClass('compiling--yellow');
        }
    }, 5000);
    setTimeout(function() {
        if (status.hasClass('compiling--yellow')) {
            status.removeClass('compiling--yellow').removeClass('compiling2').addClass('compiling--error');
        }
    }, 10000);
    setTimeout(function() {
        status.addClass('active');
    }, 10050);
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
    extraBtn.on('click', function(event) {
        event.preventDefault()
        if (!extraMenu.hasClass('active')) {
            extraMenu.addClass('active');
            extraBtn.addClass('open');
        } else {
            extraMenu.removeClass('active');
            extraBtn.removeClass('open');
        }
    });
}

function navSelect() {
    var selectBtn = $('.nav-placeholder');
    var select = $('.nav-select ');
    selectBtn.on('click', function(event) {

        var self = $(this);
        var navParent = self.parent();
        event.preventDefault()
        if (!navParent.hasClass('nav-active')) {
            if (select.hasClass('nav-active')) {
                select.removeClass('nav-active');
            }
            navParent.addClass('nav-active');
        } else {
            navParent.removeClass('nav-active');
        }
    });
}

function slideMenu() {
    var navBtn = $('.info');
    var slideMenuBtn = $('.slideBtn');
    var slideMenu = $('.slide-menu');
    var surveyContainer = $('.survey-innerContainer');
    var htmlMaster = $('html');
    var typeContainer = $('.question-types');
    var dashboard = $('.dashboard-container');
    slideMenuBtn.click(function() {
        if (!slideMenu.hasClass('active')) {
            slideMenu.addClass('active');
            slideMenuBtn.addClass('active');
            dashboard.addClass('side-menu-active');

        } else {
            slideMenu.removeClass('active');
            slideMenuBtn.removeClass('active');
            dashboard.removeClass('side-menu-active');
        }

    });
}
var navBtn = $('.info');
navBtn.click(function(e) {

    var dashboard = $('.dashboard-container');
    e.preventDefault();
    var divWrapper = $('#wrapper');
    // divWrapper.toggleClass("toggled");
    if (!divWrapper.hasClass('toggled')) {
        divWrapper.addClass('toggled');
        navBtn.addClass('active');
        dashboard.addClass('side-menu-active');
    } else {
        divWrapper.removeClass('toggled');
        navBtn.removeClass('active');
        dashboard.removeClass('side-menu-active');
    }
});

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

// function slideNav() {
//     var navBtn = $('.info');
//     var slideNav = $('.slide-nav');
//     var closeNav = $('.survey-innerContainer');

//     navBtn.click(function() {
//         if (!slideNav.hasClass('active')) {
//             slideNav.addClass('active');
//             navBtn.addClass('active');
//         } else {
//             slideNav.removeClass('active');
//             navBtn.removeClass('active');
//         }
//     });

//     $('.survey-innerContainer, .dashboard-container').click(function() {
//         if (slideNav.hasClass('active')) {
//             slideNav.removeClass('active');
//             navBtn.removeClass('active');
//         }
//     });
// }

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


$(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
    });
    // $('.settlement-icon--open').tooltip('show');
})

//# sourceMappingURL=site.js.map