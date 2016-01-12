(function () {
  var appName = 'app';
  var app = angular.module(appName, []);

  app.directive('autocomplete',
                function Autocomplete(Animals) {
    return {
      restrict: 'E',
      scope: {},
      template: `<input ng-model="input"></input>
                <ul>
                  <li ng-repeat="e in data" ng-click="select(e)">
                    {{e.name}}
                  </li>
                </ul>
                <br></br>
                <div ng-if"selected">Selected: {{selected.name}} {{selected.type}}</div>
                `,
      link: function (scope, element, attrs) {
        scope.select = function select(chosen) {
          scope.selected = chosen;
        };

        var destroyListener = element.on('keyup', function (e) {
          if (!scope.input) {
            scope.data = [];
            return scope.$digest();
          }

          Animals.get(scope.input)
            .then(function (resp) {
              scope.data = resp.data;
            });
        });

        scope.$on('$destroy', function () {
          destroyListener();
        });
      }
    };
  });

  app.factory('Animals',
    function Animals($q, $http) {
      var data = [
        {
          name: 'amber',
          type: 'dog'
        },
        {
          name: 'andy',
          type: 'dog'
        },
        {
          name: 'andrew',
          type: 'dog'
        },
        {
          name: 'foo',
          type: 'cat'
        },
        {
          name: 'cindy',
          type: 'cat'
        },
        {
          name: 'candy',
          type: 'cat'
        }
      ];

      function get(name) {
        function byName(animal) {
          return animal.name.indexOf(name) !== -1;
        }

        var defer = $q.defer();
        defer.resolve({
          data: data.filter(byName)
        });
        return defer.promise;
      }

      return {
        get: get
      };
  });

  angular.bootstrap(document, [appName]);
})();

