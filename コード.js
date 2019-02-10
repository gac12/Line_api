
var channel_access_token = '/FfI7ceRaLkOTu0+Qb7mY814tq5jdkuR6rjl5uNTUHCFB9qRK/sJbifQjU23XYIWFsTgcvQcgIbDqNnpFPM8YICBdf1zHVow2Wmsda3uDklQfII4rZnNFrVhtpfZsT0nV7eE0gcwXPZ8YSdd4pwCsAdB04t89/1O/w1cDnyilFU=';

var my_id = "Ud563a3856711ffd9a401e97412b64f07"

function doPost(e) {
  var events = JSON.parse(e.postData.contents).events;
  events.forEach(function(event) {
    console.log(event);
    if(event.type == "message") {
      console.log("Message");
      console.log(event);
      reply(event);
    }
    else if(event.type == "join"){
      console.log("join")
      console.log(event)
    }
  });
}

function reply(e) {
  var message = {
    "replyToken" : e.replyToken,
    "messages" : [
      {
        "type" : "text",
        "text" : ((e.message.type=="text") ? e.message.text : "Text以外は返せません・・・")
      }
    ]
  };

  var replyData = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_access_token,
    },
    "payload" : JSON.stringify(message)
  };
  //addLog(replyData);
  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
  
  return response.getResponseCode();
}


function send_message() {
  var group_id = "Cca46e7cc0c1da4c06fc3847660e44fcf"
  var message = {
    "to" : group_id,
    "messages" : [
      {
        "type" : "text",
        "text" : "aaaaasssaa"
      }
    ]
  };

  var replyData = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_access_token,
    },
    "payload" : JSON.stringify(message),
    muteHttpExceptions: true,
  };
  
  
  var response = UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", replyData);
  Logger.log(response)
  
  
}

