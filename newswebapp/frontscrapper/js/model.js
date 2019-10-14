app.factory("newsFactory", ($http, $q, PRODUCTURL) => {
    var obj = {
        doAjax() {
            let defer = $q.defer();
            $http.get(PRODUCTURL).then((data) => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return obj;
})
//passport factory
app.factory("authFactory", ($http, $q) => {
    var obj = {
        passport() {
            $http({
                method: 'GET',
                url: 'http://localhost:8080/oauth',

            }).then(function (response) {
                if (response.data) {
                    alert("Authenticate successfully)");
                    defer.resolve(response);
                }
            }), function (err) {
                alert("Some Problem");
                defer.reject(err);
            }
        }
    }
    return obj;
})



//Crud factory
app.factory("crudFactory", ($http, $q) => {

    var obj = {


        add(newsData) {

            let defer = $q.defer();

            $http({
                method: 'POST',
                url: 'http://localhost:8080/news/add',
                data: JSON.stringify(newsData),
                headers: {
                    'Content-Type': 'application/json'
                }


            }).then(function (response) {
                if (response.data) {
                    alert("Data Added successfully :)");
                    defer.resolve(response);
                }
            }), function (err) {
                alert("Some Problem");
                defer.reject(err);
            }
            return defer.promise;
            // return defer.promise;
        },
        loadData() {
            console.log("inside the model loaddata");
            let defer = $q.defer();
            $http.get('http://localhost:8080/news/load').then((data) => {
                defer.resolve(data);
            }, (err) => {
                defer.reject(err);
            });
            return defer.promise;
        },
        delete(obj) {
            let defer = $q.defer();
            $http({
                method: 'POST',
                url: 'http://localhost:8080/news/delete',
                data: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }


            }).then(function (response) {
                if (response.data) {

                }
            }), function (err) {

            }

        },
        update(obj) {
            let defer = $q.defer();
            $http({
                method: 'POST',
                url: 'http://localhost:8080/news/update',
                data: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }


            }).then(function (response) {
                if (response.data) {
                    alert("Updated successfully");
                    defer.resolve(response);
                }
            }), function (err) {
                console.log("request unsuccesful");
                defer.reject(err);
            }
            return defer.promise;
        }


    }
    return obj;
})