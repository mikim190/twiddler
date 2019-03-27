$(document).ready(function(){ //have the JQuery data ready
  var $body = $('body'); //defines JQ '.tweets' element as variable $body
  // $body.html(''); //replace all contents in HTML body with empty string
  var index = streams.home.length - 1; //access to global data, start from tweet at index 10
  var latest = 0; //keep track number of tweets displayed in DOM
  while(index >= 0){ 
    var tweet = streams.home[index];//this equals to object tweet {name:"",message:"",date:00}
    var $main = $('<section class="main"></section>');
    $main.appendTo($body)
    var $tweet = $('<div class="tweet"></div>'); //creates a new <div>, only exists in the local memory,= var 
    $tweet.text(' ' + tweet.message + ' '); //text() method: set content to each <$tweet> element 
    $tweet.appendTo($main); //inserts content from $tweet to $main section
    var $timestamp = $('<div class="timestamp"></div>');
    $timestamp.text(' ' + tweet.created_at + ' '); 
    $timestamp.appendTo($main);
    var $user = $('<a class="user" data-value="' + tweet.user + '"></a>');
    $user.addClass(".user").text('@' + tweet.user + ': '); //add style to username(in bold), then set content for it
    $user.prependTo($main); //inserts username in front of other content
    index --; //decrease the index after inserting tweet into $body
    latest++; //increase number of tweets after adding into DOM
  };

  //click button to get new Tweets //similar to above method

  $("button").on("click", function (){  
    index = streams.home.length - 1; //access to global data, start from bottom
    while(index >= latest) { // index decreases, latest increases after adding each tweet into DOM 
      var newTweet = streams.home[latest];
      var $main = $('<section class="main"></div>');
      $main.appendTo($body)
      var $tweet = $('<div class="tweet"></div>');
      $tweet.text(' ' + newTweet.message + ' ');
      $tweet.appendTo($main);
      var $timestamp = $('<div class="timestamp"></div>')
      $timestamp.text(' ' + newTweet.created_at);
      $timestamp.appendTo($main);
      var $user = $('<a class="user" data-value="' + newTweet.user + '"></a>');
      $user.text('@' + newTweet.user + ': ');
      $user.prependTo($main);
      latest++;
      };
  });  

  //Show username's timeline
  //watch document, triggers click event on <a>/anchor selector, invoke fn:
  $(document).on("click", "a", function() {
    var username = $(this).data("value"); //"this" refers to <a> selector, data(key): get data named "value"
    $body.html(''); //html('')is used to set an element's content, any content that was in that element is completely replaced by the new content.
    var $twiddUser = $('<header><h1>Twiddler - ' + username +'</h1></header>');
    $twiddUser.appendTo($body);
    var $home = $('<div class="home"><a href="index.html">Main Page</a></div>');
    $home.appendTo($body);
    var userIndex = streams.users[username].length - 1;
    while (userIndex >= 0) {
      var userTweet = streams.users[username][userIndex];
      var $main = $('<section class="main"></section>');
      $main.appendTo($body)
      var $tweet = $('<div class="tweet"></div>');
      $tweet.text(userTweet.message);
      $tweet.appendTo($main);
      var $timestamp = $('<div class="timestamp"></div>');
      $timestamp.text(userTweet.created_at);
      $timestamp.appendTo($main);
      var $user = $('<a class="user" data-value="' + userTweet.user + '"></a>');
      $user.text('@' + userTweet.user + ': ');
      $user.prependTo($main);
      userIndex -= 1;
      }
    });

}); //main closing bracket
    