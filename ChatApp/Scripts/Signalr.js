(function () { //IIFE (Immediate Invoked Function Expression)

    var chat = $.connection.chatHub; // connection to ChatHub variable created
    $.connection.hub.start()         // connection Started
        .done(function () {          // if success

            $("#buttonid").click(function () {
                var textbox1 = $("#userid").val();     // get username
                var textbox2 = $("#msgid").val();      // get message
                chat.server.send(textbox1, textbox2);  // call send method on the hub and send username and message as parameters
            });
            
    }).fail(function () { console.log("Failed!!!"); }); // if failed 

    chat.client.recieveMessage = function (username, message) {  // client receives the username and message 

        $("#chat-message").append(username + " says " + message + "<br />");
    }

})()