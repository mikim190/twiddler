$(document).ready(function(){ //have the JQuery data ready
  var $body = $('.tweets'); //defines JQ '.tweets' element as variable $body
  // $body.html(''); //replace all contents in HTML body with empty string
  var index = streams.home.length - 1; //start from index -1
  while(index >= 0){ 
    var tweet = streams.home[index];//this equals to object tweet {name:"",message:"",date:00}
    var $tweet = $("<div class='tweet'></div>");//creates a new <div>, only exists in the local memory,= var 
    var $user = $("<p class='user'></p>");
    var $message = $("<p class='message'></p>");
    var $time = $("<span class='time'></span>");
    // $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at); //text() method: set content to each <$tweet> element ->creates a string "@user:message, date/time"
    $tweet.appendTo(".main"); //inserts content from $tweet to $body
    //add style to username(in bold), then set content for it, then inserts into $tweet
    $user.addClass(".user").text("@" + tweet.user+ ": ").appendTo($tweet); //"@username:"
    $message.addClass(".message").text(" " + tweet.message).appendTo($tweet); 
    $time.text(" " + tweet.created_at).appendTo($tweet);
    index -= 1; //decrements the index after inserting tweet into $body
  };
// });

  // access data from window 
  // var bigData = window.streams.home //[{},{},{}]

    //button to get new Tweets  
  $("button").on("click", function (){
    generateRandomTweet();
    var $newUser = $("<p class='user'></p>");
    var $newMessage = $("<p class='message'></p>");
    var $newTime = $("<span class='time'></span>");
    var data = streams.home.pop(); //get data from window
    // var data = bigData.slice(i, i+1); 

    var $newTweet = $("<div class='newTweet'></div>"); //initialize new <div> in DOM, = var

    $newTweet.appendTo(".newfeed"); //inserts newTweet "@..." into <div tweets>
    $newUser.addClass(".user").text("@" + data.user + ": ").appendTo($newTweet);
    $newMessage.addClass(".message").text(" " + data.message).appendTo($newTweet);
    $newTime.text(" " + data.created_at).appendTo($newTweet);
      // $newTweet.text($newUser + $newMessage + $newTime)
      // $newTweet.addClass(".newTweet").text("@" + data.user + ': ' + data.message + ' ' + data.created_at); //set content to each $newTweet elemnt      
  });
  

  //when click on name of user ->retrieve name and display in body as username's timeline
  $('.tweets').on('click', '.tweet .user', function(event){ //event = "click"
        // event "click" selected element ".user" will not be triggered
          event.preventDefault();
          // alert(event);
          //text(): Returns value from ".user"
          var user = $(this).text(); 
          //remove everything from timeline
          //initialize user's name timeline and inserts into $body
          var $timeline = $(`<h1 class=timeline> ${user}'s Timeline</h1>`);
          $timeline.prependTo($body);
          $('.new').hide(); 
          //hide all tweet that not contain our user's name
          $('.tweet').not("div:contains('" + user + "')").hide(400);
          //show all tweet that contains our user's name
          $("div:contains('" + user + "')").show(400);
          
        });


});
    