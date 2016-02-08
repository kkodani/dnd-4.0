var game = {

  dm: "DM",
  player: "Player",
  itemList: {},
  commandHistory: {history: [], index: -1},

  init: function() {
    $(document).ready(function() {

      game.itemList = createItemList();

      game.displayMessage(game.dm, "Welcome!  Enter a command");

      //clear command box on startup
      $("#inputBox").val("");

      //clicking submit to send command
      $("#enterButton").on("click", function(event) {
        game.sendCommand();
        $("#inputBox").val("");
      });

      //keyboard input while typing
      $('#inputForm').keydown(function (event) {
        //pressing enter to submit
        if (event.which === 13) {
          game.sendCommand();
          game.commandHistory.history.unshift($("#inputBox").val());
          game.commandHistory.index = -1;
          $("#inputBox").val("");
          return false;
        }
        //pressing up to scroll command history
        if (event.which === 38) {
          if(game.commandHistory.index < game.commandHistory.history.length-1) {
            game.commandHistory.index++;
            $("#inputBox").val(game.commandHistory.history[game.commandHistory.index]);
            return false;
          }
        }
        //pressing down to scroll command history
        if (event.which === 40) {
          if(game.commandHistory.index > -1) {
            game.commandHistory.index--;
            $("#inputBox").val(game.commandHistory.history[game.commandHistory.index]);
            return false;
          }
        }
      });

    });
  },

  sendCommand: function() {
    var msg = $("#inputBox").val();
    game.displayMessage(game.player, msg);
    setTimeout(game.processCommand.bind(null, msg), 700);
    
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