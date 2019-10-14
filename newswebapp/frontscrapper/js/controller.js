app.controller('worldsNews', ($scope, newsFactory) => {
    $scope.ajax = () => {
        console.log("inside the ajax")
        var promise = newsFactory.doAjax();
        promise.then(data => {
            $scope.data = data.data;
            // console.log(JSON.parse($scope.data[0]));
            // $scope.data = JSON.parse($scope.data[2]);
            console.log(JSON.parse($scope.data.cricket));
            $scope.cricket = JSON.parse($scope.data.cricket);
            $scope.worldNews = JSON.parse($scope.data.worldNews);
            $scope.opinion = JSON.parse($scope.data.opinion);
            $scope.entertaiment = JSON.parse($scope.data.entertaiment);

        }, (err) => {
            $scope.err = err;
        });
    }
    $scope.ajax();
});
app.controller('oauth', ['$window', '$scope', 'authFactory', function ($window, $scope, authFactory) {
    $scope.auth = function () {
        authFactory.passport();
    }
}]);
app.controller('crud', ['$window', '$scope', 'crudFactory', function ($window, $scope, crudFactory) {

    $scope.localData;
    $scope.check = 1;
    $scope.crudCollect = function () {
        $scope.newsObj = {}
        $scope.newsObj.heading = $scope.heading;
        $scope.newsObj.data = $scope.data;
        $scope.newsObj.id = $scope.id;
        $scope.newsObj.url = $scope.files[0].name;
        return $scope.newsObj;
        // var promise = crudFactory.add($scope.newsObj);
    }
    $scope.add = function () {
        let obj = $scope.crudCollect();
        let promise = crudFactory.add(obj);
        promise.then(data => {
            $scope.load();
        }, (err) => {
            console.log("error");
        })
    }
    $scope.remove = function (index) {
        let obj = {}
        obj.id = $scope.localData[index].id;
        if ($window.confirm("Do you want to delete news of ID: " + $scope.localData[index].id)) {
            var promise = crudFactory.delete(obj);
            $scope.load();
            $scope.localData.splice(index, 1);
        }

    }
    $scope.upIndex;
    $scope.edit = function (index) {
        $scope.upIndex = index;
        $scope.id = $scope.localData[index].id;
        $scope.heading = $scope.localData[index].heading;
        $scope.data = $scope.localData[index].data;
        $scope.check = 0;
        // $scope.files[0].name = $scope.localData[index].url;
    }

    $scope.update = function () {
        let obj = $scope.crudCollect();
        $scope.check = 1;
        console.log($scope.upIndex)
        //  $scope.loadData[$scope.upIndex] = obj;
        let promise = crudFactory.update(obj);
        promise.then(data => {
            $scope.load();
        }, (err) => {
            console.log("error");
        });
    }
    $scope.load = function () {

        console.log("inside the load function");
        var promise = crudFactory.loadData();
        promise.then(data => {
            $scope.localData = data.data;
            if ($scope.localData.length == 0) {
                $scope.id = 1;
            } else {
                // $scope.id = " ";
                $scope.id = $scope.localData[$scope.localData.length - 1].id + 1;
            }
        }, (err) => {
            console.log(err);
        }
        )
    }
    $scope.load();



}]
);



app.directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.bind('change', function () {
                $parse(attributes.fileInput)
                    .assign(scope, element[0].files)
                scope.$apply()
            });
        }
    };
}]);