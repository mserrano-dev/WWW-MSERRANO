angular.module("www.controllers")
        .controller("LandingCtrl", function (Const, Midtier, Browser) {
            var _this = this;

            _this.template = {
                is_apple: (Browser.is_safari() === true) || (Browser.is_iOS() === true),
            };
            _this.portfolio = {
                immutable: [],
            };

            var has_access = true;
            Midtier.my_portfolio.call(has_access).then(function () {
                _this.portfolio.immutable = Midtier.my_portfolio.get_data(Const.P.ProjectInfo);
            });

            // -- Functions -- //

        });
