(function() {
    'use strict';

    angular
        .module('partyon.chat')
        .factory('Socket', Socket);

    Socket.$inject = ['socketFactory'];

    function Socket(socketFactory) {

      //Create socket and connect to socket server
      var myIoSocket = io.connect('http://chat.socket.io');

      mySocket = socketFactory({
        ioSocket: myIoSocket
      });

      return mySocket;
    }
})();
