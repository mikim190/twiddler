$(document).ready(function(){ //have the JQuery data ready
  var $body = $('.tweets'); //defines JQ '.tweets' element as variable $body
  // $body.html(''); //replace all contents in HTML body with empty string
  var index = streams.home.length - 1; //start from index -1
  while(index >= 0){ 
    var tweet = streams.home[index];//this equals to object tweet {name:"",message:"",date:00}
    var $tweet = $("<div class='tweet'></div>");//creates a new <div>, only exists in the local memory,= var 
    var $user = $("<span class='user'></span>");
    var $message = $("<span class='message'></span>");
    var $time = $("<span class='time'></span>");
    // $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at); //text() method: set content to each <$tweet> element ->creates a string "@user:message, date/time"
    $tweet.appendTo($body); //inserts content from $tweet to $body
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
    var $newUser = $("<span class='user'></span>");
    var $newMessage = $("<span class='message'></span>");
    var $newTime = $("<span class='time'></span>");
    var data = streams.home.pop(); //get data from window
    // var data = bigData.slice(i, i+1); 

    var $newTweet = $("<div class='newTweet'></div>"); //initialize new <div> in DOM, = var

    $newTweet.appendTo(".tweets"); //inserts newTweet "@..." into <div tweets>
    $newUser.addClass(".user").text("@" + data.user + ": ").appendTo($newTweet);
    $newMessage.addClass(".message").text(" " + data.message).appendTo($newTweet);
    $newTime.text(" " + data.created_at).appendTo($newTweet);
      // $newTweet.text($newUser + $newMessage + $newTime)
      // $newTweet.addClass(".newTweet").text("@" + data.user + ': ' + data.message + ' ' + data.created_at); //set content to each $newTweet elemnt      
  });



    //acess to each user's timeline
    // have a function that you click on 
    // $(".user").on('click', function(event){
    //   var userName = streams.user[event.target.tweet]
    // // goes to the user profile and see all the tweets that person posted 
  
  
    




});
    