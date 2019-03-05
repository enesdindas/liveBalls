app.factory('indexFactory', [() => {
    const connectSocket = (url, options) => {
        return new Promise((resolve, rejects) => {
            const socket = io.connect(url, options);

            socket.on('connect', () => {
                resolve(socket);
            });

            socket.on('connect_error', () => {
                rejects(new Error('connect_error'));
            });
        });
    };

    return {
        connectSocket
    };
}]);