angular.module("www.directives")
        .directive("portfolioProject", function (Const, $timeout, $mdToast, $mdBottomSheet) {
            var directive_def = {
                restrict: "E",
                replace: true,
                templateUrl: "frontend/src/directives/portfolioProject/portfolioProject.html",
                scope: {
                    side: "=",
                    info: "=",
                },
                link: linkFn,
            };
            return directive_def;

            // -- Functions -- //
            function linkFn(scope, elem, attrs) {
                var key = scope.info[Const.P.Key];
                scope.project = {
                    key: key,
                    org: scope.info[Const.P.Organization],
                    git_repo: scope.info[Const.P.GitHub],
                    url: scope.info[Const.P.Url],
                    note: scope.info[Const.P.Note],
                    video_webm: __path(key, '_video.webm'),
                    video_mp4: __path(key, '_video.mp4'),
                    //
                    title: "title_" + key,
                    description: "description_" + key,
                };
                scope.template = {
                    side: (scope.side === true),
                    requires_access: (scope.info[Const.P.IsPrivate] === true),
                    is_disabled: is_disabled,
                    show_description: false,
                    has_video: (scope.info[Const.P.HasDemo] === true),
                    how_to_unlock: how_to_unlock,
                };

                $timeout(function () {
                    var thumbnail = angular.element(elem[0].querySelector(".project__thumbnail"));
                    thumbnail.css({
                        "background": "url(" + __path(key, '_thumb_hi.png') + ")",
                        "background-size": "cover",
                    });
                });

                // -- Helpers -- //
                function how_to_unlock() {
                    var toast = $mdToast.simple()
                            .textContent('You need permission')
                            .action('REQUEST NOW')
                            .highlightAction(true)

                    $mdToast.show(toast).then(function (response) {
                        if (response == 'ok') {
                            show_mobile_menu();
                        }
                    });
                }
                function show_mobile_menu() {
                    $mdBottomSheet.show({
                        template: '<md-bottom-sheet>' +
                                '    <www-mserrano-footer></www-mserrano-footer>' +
                                '</md-bottom-sheet>'
                    });
                }
                function is_disabled(key) {
                    return (scope.project[key] !== Const.P.NotAvail);
                }
                function __path(key, extension) {
                    var _return = '/resources/img/sitedown_thumb_hi.png';

                    var base_path = "/resources/portfolio/" + key;
                    var filename = "/" + key + extension;

                    if (scope.info[Const.P.NotAvail] !== true) {
                        _return = base_path + filename;
                    }
                    return _return;
                }
            }

        });
