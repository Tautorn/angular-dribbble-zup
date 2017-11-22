angular.module("appShots").directive("uiShots", function () {
    return {
        restrict: "AE",
        scope: {
            shot: '=item'
        },
        templateUrl: "view/shotsList.html",
        link: function (scope, element, attr) {
            $(scope).ready(function(){
                $(".shotModal").iziModal({
                    width: 920,
                    background: '#f4f4f4',
                    padding: 40,
                    navigateArrows: 'closeToModal',
                    closeButton : false,
                    transitionIn: 'comingIn',
                    transitionOut: 'comingOut',
                    transitionInOverlay: 'fadeIn',
                    transitionOutOverlay: 'fadeOut',
                    overlayClose: true,
                    closeOnEscape: true,
                    closeButton: true,
                });
            });
        }
    };
});
