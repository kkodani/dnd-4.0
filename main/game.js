var game = {

  dm: "DM",
  player: "Player",
  itemList: {},

  init: function() {
    $(document).ready(function() {

      game.itemList = createItemList();

      game.displayMessage(game.dm, "Welcome!  Enter a command")

      //clicking submit to send command
      $("#enterButton").on("click", function(event) {
        game.sendCommand();
        $("#inputBox").val("");
      });

      //pressing enter to send command
      $('#inputForm').keypress(function (event) {
        if (event.which == 13) {
          game.sendCommand();
          $("#inputBox").val("");
          return false;
        }
      });
    });
  },

  sendCommand: function() {
    var msg = $("#inputBox").val();
    game.displayMessage(game.player, msg);
    setTimeout(game.processCommand.bind(null, msg), 1000);
    
  },

  displayMessage: function(character, message) {
    var $newMsg = $("<div class=\"playerCommand\">"
                    +"<p><span class=\"username\">"
                      +character+": "
                    +"</span><span class=\"message\">"
                      +message+
                    "</span></p>"
                  +"</div>");
    $("#gameArea").prepend($newMsg);
  },

  processCommand: function(uneditedMsg) {
    var msg = uneditedMsg.toLowerCase();
    var trimmedMsg = msg.replace(/ /g,'');

    if(msg.substring(0,6)==="rename") {
      game.displayMessage(game.dm, "Okay, " + uneditedMsg.substring(7));
      game.player = uneditedMsg.substring(7);
      return;
    }
    else if(msg==="hello"||msg==="hey"||msg==="hi") {
      game.displayMessage(game.dm, "Greetings "+game.player+"!");
      return;
    }
    else if(msg.substring(0,5)==="roll ") {
      var r=roll(parseInt(msg.substring(5)));
      game.displayMessage(game.dm, game.player+" rolls a "+r);
      return;
    }
    else if(game.itemList[trimmedMsg]!==undefined) {
      game.displayMessage(game.dm, game.itemList[trimmedMsg].getInfo())
    }
    else {
      game.displayMessage(game.dm, "Not a valid command.");
      return;
    }
  }
};

game.init();