!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=53)}([function(e,t){!function(){function t(e,t){for(var o=0;o<t.length;o++){e(t[o])}}e.exports={load_all:function(e){var o=e.keys();t(e,o)},load_and_remove:function(e,t){var o=e.keys(),n=o.splice(o.indexOf(t),1);return e(n[0]),o},load_selected:t}}()},function(e,t){var o='<div class=page--sitedown><md-toolbar class=page__toolbar layout=row layout-align="space-between center"><div class=leftside><span class=leftside__logo translate=app_label></span></div><div class=rightside></div></md-toolbar><md-content class=page__content layout=column layout-align="begin center"><md-whiteframe class="sitedown md-whiteframe-12dp"><span class=sitedown__decor translate="<"></span> <span class=sitedown__text translate=sitedown></span> <span class=sitedown__decor translate=">"></span></md-whiteframe></md-content><div class=fixed-bottom-right><md-button class=md-fab aria-label="More Info"><span class=button__text translate=?></span><md-tooltip class=tooltip md-direction=left md-delay=60><span class=tooltip__text translate=more_info_message></span></md-tooltip></md-button></div></div>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/pages/sitedown/sitedown.html",o)}]),e.exports=o},function(e,t){var o='<div class=page--landing ng-cloak layout=column><www-mserrano-toolbar class=page__toolbar ng-class="{\'pin-to-top\': (toolbar.show_menu === true)}" scroll-affix=scroll-container data-affix-condition={{page.template.is_apple}} data-affix-top=force-show-navbar data-affix-bottom=force-show-footer></www-mserrano-toolbar><md-content class=page__content ng-class="{\'mobile-menu-is-active\': (toolbar.show_menu === true)}" id=scroll-container scroll-affix=scroll-container data-affix-condition={{page.template.is_apple}} data-affix-top=force-show-navbar data-affix-bottom=force-show-footer layout=column layout-align="start center"><div class=timeline layout=column><portfolio-project class="timeline__entry {{project_info[Const.P.Key]}}" ng-repeat="project_info in page.portfolio.immutable" data-side=$even data-info=project_info></portfolio-project></div><www-mserrano-footer class=page__footer ng-cloak ng-class="{\'pin-to-bottom\': (toolbar.show_menu === true)}"></www-mserrano-footer></md-content></div>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/pages/landing/landing.html",o)}]),e.exports=o},function(e,t){var o='<md-toolbar class="www-mserrano-toolbar md-primary" ng-click=toolbar.hide_mobile_menu() md-scroll-shrink md-shrink-speed-factor=0.82><div class="toolbar md-toolbar-tools" layout=row layout-align="start center"><div class=toolbar__menu--mobile><md-button class=toolbar__btn aria-label="Mobile Menu" ng-click="toolbar.toggle_mobile_menu(); $event.stopPropagation()"><hamburger-animation data-is-active={{toolbar.show_menu}}></hamburger-animation></md-button></div><h2 class=toolbar__title flex md-truncate><span class=custom-breakpoint--else translate=app_label></span> <span class=custom-breakpoint--mobile translate=app_label_short></span></h2><div class=toolbar__menu--desktop layout=row layout-align="start center"><md-button class=toolbar__btn aria-label=Resume ng-href={{Const.Url.Resume}} target=_blank><md-icon md-svg-icon=social:resume aria-label=Resume></md-icon></md-button><md-button class=toolbar__btn aria-label=LinkedIn ng-href={{Const.Url.LinkedIn}} target=_blank><md-icon md-svg-icon=social:linkedin aria-label=LinkedIn></md-icon></md-button><md-button class=toolbar__btn aria-label=GitHub ng-href={{Const.Url.GitHub}} target=_blank><md-icon md-svg-icon=social:github aria-label=GitHub></md-icon></md-button></div></div></md-toolbar>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/wwwMserranoToolbar/wwwMserranoToolbar.html",o)}]),e.exports=o},function(e,t){var o='<div class=footer><div class=top layout=column layout-align="center center" layout-gt-sm=row layout-align-gt-sm="space-between center" layout-gt-xs=column layout-align-gt-xs="start center"><div class=leftside layout=column layout-align="center center" layout-gt-xs=row layout-align-gt-xs="space-between center"><copy-left class=copy-left><span translate=copyleft translate-values=footer.copyleft></span></copy-left><span translate=open_source></span></div><div class=rightside><img class=us-flag src="/resources/img/us.png"> &nbsp; <span translate=locally_engineered></span></div></div><div class=mid layout=column layout-align="space-around center" layout-gt-xs=row layout-align-gt-xs="space-around start"><form class=mid__block--permission name=requestPermission flex=30><span class=title translate=title_permission></span><div class=content><p class=message translate=request_access_pass></p></div><div class=input-wrapper layout=row layout-align="start start"><md-input-container class=input aria-label="request full access to my portfolio" flex><label class=input__label translate=email></label><input class=input__field name=inputEmail required type=email ng-pattern=full_access.regex_valid_email ng-model=full_access.input_email></md-input-container><md-button class="send-request-btn md-accent" ng-class="{\n                               \'invalid-email\': css.invalid_email(requestPermission.inputEmail),\n                               \'valid-email\': css.valid_email(requestPermission.inputEmail),\n                               \'disabled\': css.disabled(requestPermission.inputEmail),\n                           }" ng-click=full_access.request_full_access() ng-disabled=css.disabled(requestPermission.inputEmail) aria-label="request permission to view full portfolio"><span translate=send></span></md-button></div></form><div class=mid__block--about-me layout=row layout="start start" flex=50><div class=portrait id=myPortrait ng-mouseenter="tooltip.portrait_msg = \'#SeaDubs\';" ng-mouseleave="tooltip.show_it = false;"></div><div layout=column flex=75><span class=title translate=title_about_me></span><div class=content><p class=message translate=short_bio translate-values=footer.short_bio></p></div></div></div><div class=mid__block--navigation flex=20><span class=title translate=title_navigation></span><div class=nav-list layout=row layout-align="start start" layout-wrap layout-gt-xs=column layout-align-gt-xs="column center"><div class=nav-list__item ng-class="{\'coming-soon\': (css.under_construction(item.url) === true)}" ng-click=tooltip.under_construction_msg(item.url) ng-repeat="item in footer.list_navigation" flex=25><md-button class=item__btn aria-label={{item.desc}} md-truncate ng-href="{{css.under_construction(item.url) ? \'\' : item.url}}" target=_blank><span ng-bind="item.label | translate"></span></md-button></div></div></div></div><div class=bot layout=row layout-align="center center"><md-button class=contact-me__btn aria-label=Twitter ng-href={{Const.Url.Twitter}} target=_blank><md-icon md-svg-icon=social:twitter aria-label=Twitter></md-icon></md-button><md-button class=contact-me__btn aria-label=Resume ng-href={{Const.Url.Resume}} target=_blank><md-icon md-svg-icon=social:resume aria-label=Resume></md-icon></md-button><md-button class=contact-me__btn aria-label=LinkedIn ng-href={{Const.Url.LinkedIn}} target=_blank><md-icon md-svg-icon=social:linkedin aria-label=LinkedIn></md-icon></md-button><md-button class=contact-me__btn aria-label=GitHub ng-href={{Const.Url.GitHub}} target=_blank><md-icon md-svg-icon=social:github aria-label=GitHub></md-icon></md-button></div></div>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html",o)}]),e.exports=o},function(e,t){var o="<div class=reveal-wrapper ng-class=\"{'do_animation': (condition === true)}\"><div class=\"reveal__side reveal__side--back\"><div class=backside-text><p ng-bind=\"backsideText | translate\"></p></div></div><div class=\"reveal__side reveal__side--animated\" ng-class=\"{\n             'left': (direction === 'true'),\n             'right': (direction === 'false'),\n         }\" ng-transclude></div></div>";angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/revealAnimation/revealAnimation.html",o)}]),e.exports=o},function(e,t){var o='<md-card-actions class=projectActions><div class="action-btn-wrapper video-btn-wrapper" flex-xs=25 layout=row layout-align="center center"><md-button class="action-btn md-icon-button" aria-label="View Private Details" ng-disabled="(template.has_video === false)" open-video="muted autoplay playsinline webkit-playsinline controls" data-video-webm={{project.video_webm}} data-video-mp4={{project.video_mp4}}><md-icon md-svg-icon=project:video aria-label="View Private Details"></md-icon></md-button><md-tooltip class=video-tooltip ng-if="template.requires_access === true" md-direction=top><span ng-show="template.has_video === true" translate=public_userfacing></span> <span ng-show="template.has_video === false" translate=locked_next_step></span></md-tooltip></div><div class=action-btn-wrapper flex-xs=25><md-button class="action-btn md-icon-button" ng-click="template.show_description = !template.show_description" aria-label="More Project Details" layout=row layout-align="center center"><md-icon md-svg-icon=project:desc aria-label="More Project Details"></md-icon></md-button></div><div class=action-btn-wrapper flex-xs=25><md-button class="action-btn md-icon-button" aria-label="Link to Project" layout=row layout-align="center center" ng-disabled="(template.is_disabled(\'url\') === false)" ng-href={{project.url}} target=_blank><md-tooltip class=note-tooltip ng-if=project.note md-direction=top><span ng-bind=project.note></span></md-tooltip><md-icon md-svg-icon=project:link aria-label="Link to Project"></md-icon></md-button></div><div class=action-btn-wrapper flex-xs=25><md-button class="action-btn md-icon-button" aria-label="Project GitHub Repo" layout=row layout-align="center center" ng-disabled="(template.is_disabled(\'git_repo\') === false)" ng-href={{project.git_repo}} target=_blank><md-icon md-svg-icon=project:github aria-label="Project GitHub Repo"></md-icon></md-button></div></md-card-actions>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/portfolioProject/projectActions/projectActions.html",o)}]),e.exports=o},function(e,t){var o='<md-card class=portfolio-project ng-class="{\n             \'leftside\': (template.side === true),\n             \'rightside\': (template.side === false)\n         }" md-theme=default md-theme-watch><md-card-title><md-card-title-text><span class=md-headline ng-bind="project.title | translate"></span> <span class=md-subhead layout=row layout="start center"><md-icon md-svg-icon=project:at-sign aria-label=organization></md-icon><span ng-bind=project.org flex></span></span></md-card-title-text></md-card-title><md-card-content layout=row layout-align=space-between><reveal-animation data-direction="{{template.side === true}}" data-condition=template.show_description data-backside-text={{project.description}}><div class="project__thumbnail md-media-xl card-media" ng-cloak layout=column><md-button class=lock-image ng-show="template.requires_access === true" ng-click=template.how_to_unlock() aria-label="how to unlock full portfolio"><img src="resources/img/locked.png"></md-button></div></reveal-animation><project-actions class=project-action-menu layout=column layout-align="start start"></project-actions></md-card-content><project-actions class=project-action-menu layout=row layout-align="center start"></project-actions></md-card>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/portfolioProject/portfolioProject.html",o)}]),e.exports=o},function(e,t){angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/openVideo/openVideo.html","")}]),e.exports=""},function(e,t){var o='<button class="mserrano hamburger {{settings.animation_type}}" type=button><span class=hamburger-box><span class=hamburger-inner></span></span></button>';angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html",o)}]),e.exports=o},function(e,t){var o="<span layout=row><span class=copyLeft>&copy;</span> <span>&nbsp;<ng-transclude class=copyLeft-transclude></ng-transclude></span></span>";angular.module("www").run(["$templateCache",function(e){e.put("frontend/src/directives/copyLeft/copyLeft.html",o)}]),e.exports=o},,,,,,,,,,,,,,,,,function(e,t){angular.module("www.services").service("Request",["Const",function(e){var t=[];return{cached:function(e){var r=t.length;t.push({promise:null,data:null}),this.is_valid=o.bind(null,t[r]),this.is_loaded=n.bind(null,t[r]),this.get_data=i.bind(null,t[r]),this.call=function(e,t){null===e.promise&&(e.promise=a.apply(null,arguments));return e.promise}.bind(null,t[r],e),this.clear_cache=function(e){e.promise=null}.bind(null,t[r])},standard:function(e){var r=t.length;t.push({promise:null,data:null}),this.is_valid=o.bind(null,t[r]),this.is_loaded=n.bind(null,t[r]),this.get_data=i.bind(null,t[r]),this.call=a.bind(null,t[r],e)}};function o(t){return t.data[e.Infrastructure.Result]!==e.Infrastructure.Fail}function n(e){return null!==e.data}function i(e,t){return e.data[t]}function a(e,t){var o=angular.extend([],arguments);return o.splice(0,2),t.apply(null,o).then(function(e,t){e.data=t.data}.bind(null,e))}}])},function(e,t){angular.module("www.services").service("DateTime",["Const",function(e){return{date:{today:function(){return t(new Date)}},time:{today:function(){return e=new Date,n=o(e.getHours(),"00"),i=o(e.getMinutes(),"00"),a=o(e.getSeconds(),"00"),t(e)+" "+n+":"+i+":"+a;var e,n,i,a}},current_year:(new Date).getFullYear()};function t(e){return o(e.getFullYear(),"0000")+"-"+o(e.getMonth()+1,"00")+"-"+o(e.getDate(),"00")}function o(e,t){var o=t+e;return o.substring(o.length-t.length)}}])},function(e,t){angular.module("www.services").service("Browser",["Const",function(e){return{is_chrome:function(){return!!window.chrome&&!!window.chrome.webstore},is_firefox:function(){return"undefined"!=typeof InstallTrigger},is_safari:function(){return/constructor/i.test(window.HTMLElement)||(e=!window.safari||"undefined"!=typeof safari&&safari.pushNotification,"[object SafariRemoteNotification]"===e.toString());var e},is_iOS:function(){var e=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],t=!1;if(navigator.platform)for(;e.length;)navigator.platform===e.pop()&&(t=!0);return t}}}])},function(e,t){angular.module("www.services").service("Midtier",["Const","$http","Request",function(e,t,o){return{my_portfolio:new o.cached(function(o){var n={},i={method:"POST",url:"/landing/my_portfolio",params:{},data:n};return n[e.P.HasAccess]=!0===o,t(i)})}}])},function(e,t){angular.module("www.routing").config(["$routeProvider","$locationProvider",function(e,t){e.when("/sitedown",{templateUrl:"frontend/src/pages/sitedown/sitedown.html",controller:"SiteDownCtrl",controllerAs:"page"}),e.when("/",{templateUrl:"frontend/src/pages/landing/landing.html",controller:"LandingCtrl",controllerAs:"page"}),e.otherwise({redirectTo:"/"})}])},function(e,t){angular.module("www.controllers").controller("SiteDownCtrl",["Const","Midtier",function(e,t){this.sitedown="Sitedown 1 "+e.Default.Date,t.www_constants.call().then(function(){var e=t.www_constants.get_data("Default");console.log(e)}),t.checker.call().then(function(){console.log("hello world")})}])},function(e,t){angular.module("www.controllers").controller("LandingCtrl",["Const","Midtier","Browser",function(e,t,o){var n=this;n.template={is_apple:!0===o.is_safari()||!0===o.is_iOS()},n.portfolio={immutable:[]};t.my_portfolio.call(!0).then(function(){n.portfolio.immutable=t.my_portfolio.get_data(e.P.ProjectInfo)})}])},function(e,t){angular.module("www.directives").directive("wwwMserranoToolbar",["Const","$mdBottomSheet","$timeout",function(e,t,o){return{restrict:"E",replace:!0,templateUrl:"frontend/src/directives/wwwMserranoToolbar/wwwMserranoToolbar.html",link:function(e,n,i){function a(){t.hide(),e.toolbar.show_menu=!1}e.toolbar={show_menu:!1,hide_mobile_menu:a,toggle_mobile_menu:function(){e.toolbar.show_menu=!e.toolbar.show_menu,!0===e.toolbar.show_menu?t.show({template:"<md-bottom-sheet>    <www-mserrano-footer></www-mserrano-footer></md-bottom-sheet>"}).catch(function(){e.toolbar.show_menu=!1}):t.hide();o(function(){var e=angular.element(document.getElementsByTagName("md-backdrop"));e.bind("click",a),e.on("$destroy",function(){e.unbind("click",a)})})},fling_or_scale:"md-fling"}}}}])},function(e,t){angular.module("www.directives").directive("wwwMserranoFooter",["Const","DateTime","$timeout","$compile",function(e,t,o,n){return{restrict:"E",replace:!0,templateUrl:"frontend/src/directives/wwwMserranoFooter/wwwMserranoFooter.html",link:function(i,a,r){function s(t){return t===e.P.ComingSoon}function l(e){return!0!==e.$error.pattern&&!0!==e.$error.required}function c(e){i.tooltip.portrait_msg=e,i.tooltip.show_it=!0,o(function(){i.tooltip.portrait_msg===e&&(i.tooltip.show_it=!1)},2e3)}i.footer={copyleft:{year:t.current_year},short_bio:{counting:(d=2014,parseInt(t.current_year-1)-d)},list_navigation:[{url:e.Url.repo_devops,desc:"DevOps github page",label:"DevOps"},{url:e.Url.repo_lab,desc:"LAB-MSERRANO github page",label:"Lab"},{url:e.Url.repo_www,desc:"WWW-MSERRANO github page",label:"Portfolio"},{url:e.Url.repo_docs,desc:"DOCS-MSERRANO github page",label:"Docs"}]},i.full_access={input_email:"",request_full_access:function(){""!==i.full_access.input_email&&c("not_available_yet")},regex_valid_email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},i.tooltip={portrait_msg:"#SeaDubs",show_it:!1,under_construction_msg:function(e){s(e)&&!1===i.tooltip.show_it&&c("more_info_message")}},i.css={under_construction:s,invalid_email:function(e){return!0===e.$error.pattern},valid_email:l,disabled:function(e){return!1===l(e)&&!1===e.$pristine}},o(function(){var e=document.getElementById("myPortrait"),t=e.outerHTML.slice(0,-6)+'<md-tooltip md-direction="top" md-autohide md-visible="tooltip.show_it"><span ng-bind="(tooltip.portrait_msg) | translate"></span></md-tooltip></div>',o=n(t)(i);e.replaceWith(o[0])},1e3);var d}}}])},function(e,t){angular.module("www.directives").directive("scrollAffix",["Const","$document","$timeout",function(e,t,o){return{restrict:"A",link:function(e,n,i){var a={scroll_id:i.scrollAffix,affix_top:i.affixTop||!1,affix_bottom:i.affixBottom||!1,affix_parallax:void 0!==i.affixParallaxEffect,do_logic:"false"!==i.affixCondition,parallax_const:40,scroll_info:null},r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;if(!0===a.do_logic){var s=angular.element(t[0].getElementById(a.scroll_id));n.addClass(a.scroll_id),!1!==a.affix_top&&(s.on("scroll",l),u("0.10s")),!1!==a.affix_bottom&&(s.on("scroll",c),u("0.10s")),!1!==a.affix_parallax&&(n.css({"background-size":"auto "+(100+a.parallax_const)+"%"}),s.on("scroll",d),r(function e(){r(e);var t={position:s[0].scrollTop,height:s[0].scrollHeight-s[0].offsetHeight};var o=t.position/t.height;var i=o*a.parallax_const;n.css({"background-position-y":"-"+i+"vh"})}),u(i.affixParallaxEffect)),n.on("$destroy",function(){s.off("scroll",l),s.off("scroll",c),s.off("scroll",d)})}function l(){var e=s[0].scrollTop<=0;!0===e?n.addClass(a.affix_top):n.removeClass(a.affix_top)}function c(){var e=s[0].scrollHeight-s[0].offsetHeight,t=e<=s[0].scrollTop;!0===t?n.addClass(a.affix_bottom):n.removeClass(a.affix_bottom)}function d(){a.scroll_info=s[0]}function u(e){o(function(){n[0].style.transition="all "+e+" ease-out"},100)}}}}])},function(e,t){angular.module("www.directives").directive("revealAnimation",["Const",function(e){return{restrict:"E",templateUrl:"frontend/src/directives/revealAnimation/revealAnimation.html",transclude:!0,scope:{condition:"=",backsideText:"@",direction:"@"}}}])},function(e,t){angular.module("www.directives").directive("projectActions",["Const",function(e){return{restrict:"E",replace:!0,templateUrl:"frontend/src/directives/portfolioProject/projectActions/projectActions.html"}}])},function(e,t){angular.module("www.directives").directive("portfolioProject",["Const","$timeout","$mdToast","$mdBottomSheet",function(e,t,o,n){return{restrict:"E",replace:!0,templateUrl:"frontend/src/directives/portfolioProject/portfolioProject.html",scope:{side:"=",info:"="},link:function(i,a,r){var s=i.info[e.P.Key];function l(t,o){var n="/resources/img/sitedown_thumb_hi.png",a="/resources/portfolio/"+t,r="/"+t+o;return!0!==i.info[e.P.NotAvail]&&(n=a+r),n}i.project={key:s,org:i.info[e.P.Organization],git_repo:i.info[e.P.GitHub],url:i.info[e.P.Url],note:i.info[e.P.Note],video_webm:l(s,"_video.webm"),video_mp4:l(s,"_video.mp4"),title:"title_"+s,description:"description_"+s},i.template={side:!0===i.side,requires_access:!0===i.info[e.P.IsPrivate],is_disabled:function(t){return i.project[t]!==e.P.NotAvail},show_description:!1,has_video:!0===i.info[e.P.HasDemo],how_to_unlock:function(){var e=o.simple().textContent("You need permission").action("REQUEST NOW").highlightAction(!0);o.show(e).then(function(e){"ok"==e&&n.show({template:"<md-bottom-sheet>    <www-mserrano-footer></www-mserrano-footer></md-bottom-sheet>"})})}},t(function(){var e=angular.element(a[0].querySelector(".project__thumbnail"));e.css({background:"url("+l(s,"_thumb_hi.png")+")","background-size":"cover"})})}}}])},function(e,t){angular.module("www.directives").directive("videoSize",["Const","$document","$timeout",function(e,t,o){return{restrict:"A",link:function(e,t,n){var i,a={window:angular.element(window)};function r(){i.window_x=document.body.clientWidth,i.window_y=document.body.clientHeight,i.video_width=t[0].clientWidth,i.video_height=t[0].clientHeight,s()}function s(){i.window_x<i.video_width?t.css({width:"80%"}):t.css({width:"100%"}),i.window_y<i.video_height&&t.css({height:"75%"})}i={window_x:null,window_y:null,video_width:null,video_height:null},o(function(){s()}),a.window.on("resize",r),a.window.on("$destroy",function(){a.window.off("resize",r)})}}}])},function(e,t){angular.module("www.directives").directive("openVideo",["Const","$timeout","$mdDialog",function(e,t,o){return{restrict:"A",link:function(e,n,i){var a;angular.element(document.body);function r(){n.off("click",s)}function s(e){o.show({template:"<video "+a.options+' aria-label="project demo" video-size>'+(a.video.webm?'<source src="%s" type="video/webm">'.replace("%s",a.video.webm):"")+(a.video.mp4?'<source src="%s" type="video/mp4">'.replace("%s",a.video.mp4):"")+"</video>",targetEvent:e,clickOutsideToClose:!0})}t(function(){a={options:i.openVideo||"",video:{webm:i.videoWebm||!1,mp4:i.videoMp4||!1},attached:!1},n.on("click",s),n.on("$destroy",r)})}}}])},function(e,t){angular.module("www.directives").directive("hamburgerAnimation",["Const",function(e){return{restrict:"E",replace:!0,templateUrl:"frontend/src/directives/hamburgerAnimation/hamburgerAnimation.html",link:function(e,t,o){o.$observe("isActive",function(e){"true"===e?t.addClass("is-active"):t.removeClass("is-active")}),e.settings={animation_type:"hamburger--emphatic"}}}}])},function(e,t){angular.module("www.directives").directive("detectBrowser",["Const","Browser",function(e,t){return{restrict:"A",link:function(e,o,n){var i={Chrome:!0===t.is_chrome(),Firefox:!0===t.is_firefox(),Safari:!0===t.is_safari(),iOS:!0===t.is_iOS()};!function(e,t){for(var o in t)!0===t[o]&&e.addClass(o)}(o,i)}}}])},function(e,t){angular.module("www.directives").directive("copyLeft",["Const",function(e){return{restrict:"E",templateUrl:"frontend/src/directives/copyLeft/copyLeft.html",transclude:!0}}])},function(e,t){angular.module("www.blocks").run(["$rootScope","Const",function(e,t){e.Const=t}])},function(e,t){angular.module("www.blocks").config(["$mdThemingProvider",function(e){var t=i("scw_blue",{50:"E0EDF6",100:"B3D3E9",200:"80B5DB",300:"2681C1",400:"2681C1",500:"006BB6",600:"0063AF",700:"0058A6",800:"0058A6",900:"003C8E",A100:"003C8E",A200:"87B0FF",A400:"548EFF",A700:"3B7EFF",contrastDefaultColor:"light"}),o=function(e){return i(e,{50:"FFF8E4",100:"FFEDBC",200:"FFE290",300:"FFD663",400:"FFCD41",500:"FFC420",600:"FFBE1C",700:"FFB618",800:"FFAF13",900:"FFA20B",A100:"FFCD41",A200:"FFC420",A400:"FFB618",A700:"FFA20B",contrastDefaultColor:"light"})}("scw_yellow"),n=function(e){return i(e,{50:"FFEBEE",100:"FFCDD2",200:"EF9A9A",300:"EF5350",400:"EF5350",500:"F44336",600:"E53935",700:"D32F2F",800:"D32F2F",900:"B71C1C",A100:"B71C1C",A200:"FF5252",A400:"FF1744",A700:"D50000",contrastDefaultColor:"light"})}("warning");function i(t,o){return e.definePalette(t,o),t}e.theme("default").primaryPalette(t).accentPalette(o).warnPalette(n)}])},function(e,t){angular.module("www.blocks").config(["$translateProvider",function(e){e.useSanitizeValueStrategy("sanitize"),e.preferredLanguage("en")}])},function(e,t){angular.module("www.blocks").config(["$mdIconProvider",function(e){e.iconSet("social:github","resources/feather/github.svg",24).iconSet("social:linkedin","resources/feather/linkedin.svg",24).iconSet("social:resume","resources/feather/file-text.svg",24).iconSet("social:twitter","resources/feather/twitter.svg",24).iconSet("project:link","resources/feather/external-link.svg",24).iconSet("project:github","resources/feather/github.svg",24).iconSet("project:desc","resources/feather/info.svg",24).iconSet("project:video","resources/feather/film.svg",24).iconSet("project:lock","resources/feather/lock.svg",24).iconSet("project:at-sign","resources/feather/at-sign.svg",24)}])},function(e,t){angular.module("www.blocks").config(["$translateProvider",function(e){e.translations("en",{"":"",app_label:"Mark Anthony Serrano",app_label_short:"Mark Serrano",sitedown:"Site Down",more_info_message:"Working on it!",not_available_yet:"Not yet available",copyleft:"{{ year }} Mark Anthony Mendoza Serrano.",open_source:"All Personal Projects Open Sourced.",license:"Under the Apache License 2.0",locally_engineered:"Engineered in Watsonville, CA.",title_permission:"See It All",request_access_pass:"Request a 2-day access key to view my FULL portfolio!",title_about_me:"Committed to Santa Cruz County",short_bio:"{{ counting }}+ years fullstack PHP/Javascript. Angular focused. Design inspired. SaltStack. Docker. Proud Banana Slug. Bachelor of Computer Science, UC Santa Cruz.",title_navigation:"Navigation",email:"Enter Email",public_userfacing:"View what is public",locked_next_step:"Did you receive your activation email?",title_cygnus:"Cygnus Management, LLC (2014)",title_hpl_com:"hospitalityPulse, inc (2014-2017)",title_pulsemobile:"pulseMobile (HITEC 2016)",title_internalc:"Internal Console 2 (2015-2018)",title_pulsebooker:"pulseBooker Consumer Version (ITB, HITEC 2017)",title_pulselink:"pulseLink (2018)",title_pulsebooker_cro:"pulseBooker CRO Version (ITB 2018)",title_lab:"LAB-MSERRANO",title_devops:"DevOps",title_www:"WWW-MSERRANO",title_docs:"DOCS-MSERRANO",description_cygnus:"A company website for Cygnus Management, LLC. After graduating I made a userfacing website for this young company serving the Bay Area. It uses Python [Django], JavaScript [AngularJS], and CSS3 (BootStrap).",description_hpl_com:"A website for hospitalityPulse, inc. After getting my first job and making a few UI pages for them, they gave me project ownership over their corporate website at www.hospitalitypulse.com. I maintained it from late 2014 to early 2018.",description_pulsemobile:"HITEC is an annual convention just for hotel technology. Working for a bleeding edge tech startup in the hotel industry, we needed to have presence there. In 2016 I helped by creating a quick demo for mobile devices, demonstrating mobile check-in. It was used in a CGI video.",description_internalc:"An internal tool used to facilitate research into issues and produce insights. Essentially a UI to their main database. As I re-designed their corporate website, I was given project ownership of this in-house tool. Starting out small, it became indespensible over the years.",description_pulsebooker:"In addition to HITEC, there is ITB Berlin (the world's leading travel trade show). After a pivot to distribution with the creation of FIRE, we needed to demonstrate the new system's capabilities. This demo is an internet booking engine capable of attribute-based selling.",description_pulselink:"With senior coworkers leaving and the success of pulseBooker, I was promoted to Senior Software Engineer. I was given project ownership over a re-design of pulseLink, an extension of our main product on operations. It is unit tested and supports IE8+.",description_pulsebooker_cro:"This year round we created a version of pulseBooker geared toward the Central Reservation Office. This is the demo made for ITB 2018. The idea is to seamlessly switch between attribute-based and category-based shopping.",description_lab:"Contains the seed for frontend apps of the mserrano-dev organization. Features a WebPack + Node.js build process, a custom made PHP test runner, coverage reporting, and SASS unit tests!",description_devops:"This project contains configuration management via infrastructure as code and a set of deployment tools for the devs of my organization. Features continuous integration tools via SaltStack/Docker and HAProxy load balancing!",description_www:"This is my portfolio website. Encapsulates all the good practices I have learned so far. Features caching, unit tests, and readable, re-usable code. Not to mention sweet animations!"})}])},function(e,t){angular.module("www.blocks").config(function(){var e=document.createElement("script");function t(){dataLayer.push(arguments)}e.async="async",e.src="https://www.googletagmanager.com/gtag/js?id=UA-120924735-1",document.head.appendChild(e),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-120924735-1")})},function(e,t){angular.module("www",["pascalprecht.translate","ngSanitize","ngMaterial","ngAnimate","ngAria","www.blocks","www.constants","www.controllers","www.directives","www.routing","www.services"]),angular.module("www.blocks",[]),angular.module("www.constants",[]),angular.module("www.controllers",[]),angular.module("www.directives",[]),angular.module("www.routing",["ngRoute"]),angular.module("www.services",[])},function(e,t,o){var n={"./app.js":51,"./blocks/config__analytics.js":50,"./blocks/config__en.js":49,"./blocks/config__icons.js":48,"./blocks/config__translations.js":47,"./blocks/config__whitelabel.js":46,"./blocks/run__const.js":45,"./directives/copyLeft/copyLeft.html":10,"./directives/copyLeft/copyLeft.js":44,"./directives/detectBrowser.js":43,"./directives/hamburgerAnimation/hamburgerAnimation.html":9,"./directives/hamburgerAnimation/hamburgerAnimation.js":42,"./directives/openVideo/openVideo.html":8,"./directives/openVideo/openVideo.js":41,"./directives/openVideo/videoSize.js":40,"./directives/portfolioProject/portfolioProject.html":7,"./directives/portfolioProject/portfolioProject.js":39,"./directives/portfolioProject/projectActions/projectActions.html":6,"./directives/portfolioProject/projectActions/projectActions.js":38,"./directives/revealAnimation/revealAnimation.html":5,"./directives/revealAnimation/revealAnimation.js":37,"./directives/scrollAffix.js":36,"./directives/wwwMserranoFooter/wwwMserranoFooter.html":4,"./directives/wwwMserranoFooter/wwwMserranoFooter.js":35,"./directives/wwwMserranoToolbar/wwwMserranoToolbar.html":3,"./directives/wwwMserranoToolbar/wwwMserranoToolbar.js":34,"./pages/landing/LandingCtrl.js":33,"./pages/landing/landing.html":2,"./pages/sitedown/SiteDownCtrl.js":32,"./pages/sitedown/sitedown.html":1,"./routes.js":31,"./services/app/Midtier.js":30,"./services/lab/Browser.js":29,"./services/lab/DateTime.js":28,"./services/lab/Request.js":27};function i(e){var t=a(e);return o(t)}function a(e){var t=n[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=52},function(e,t,o){helper=o(0);var n=o(52);helper.load_all(n)}]);