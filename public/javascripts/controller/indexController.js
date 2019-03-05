app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {
    const socket = io.connect('http://localhost:3000');
    const connectionOptions = {
        reconnectionAttemps: 3,
        reconnection: 600
    }
    indexFactory.connectSocket('http://localhost:3000', connectionOptions, {
    }).then((socket) => {
       console.log('bağlantı gerçekleşti', socket) 
    }).catch((err) => {
        console.log(err)
    });
}]);