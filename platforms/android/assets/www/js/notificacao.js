module.run(function($cordovaPush) {

    var androidConfig = {
        "senderID": "replace_with_sender_id",
    };

    document.addEventListener("deviceready", function(){
        $cordovaPush.register(androidConfig).then(function(result) {
            // Success
        }, function(err) {
            // Error
        })

        $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
            switch(notification.event) {
                case 'registered':
                    if (notification.regid.length > 0 ) {
                        alert('registration ID = ' + notification.regid);
                    }
                    break;

                case 'message':
                    // this is the actual push notification. its format depends on the data model from the push server
                    alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
                    break;

                case 'error':
                    alert('GCM error = ' + notification.msg);
                    break;

                default:
                    alert('An unknown GCM event has occurred');
                    break;
            }
        });


        // WARNING: dangerous to unregister (results in loss of tokenID)
        $cordovaPush.unregister(options).then(function(result) {
            // Success!
        }, function(err) {
            // Error
        })

    }, false);
});