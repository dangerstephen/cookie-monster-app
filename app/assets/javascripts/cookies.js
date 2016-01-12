$(function(){
  console.log("document.cookie =>", document.cookie)
  can_has = readCookie('can_has')
  fav_color = readCookie('fav_color')

  console.log("Cookie: can_has => ", can_has)
  console.log("Cookie: fav_color => ", fav_color)

  $('body').css("background-color", fav_color || "white" )

  if ( $("#cookies_index_page").length ) {

    // Challenge Prompts
    if(!fav_color){
      $('body').append(
          $("<h2>", {text: "Challenge 1: Set you favorite color as the background color"} ),
          $("<p>", {text: "> Open your console and create the cookie: 'fav_color=green'"} ),
          $("<p>", {text: "> HINT: Make sure to refresh! (the javascript on this page only checks for a cookie on page load)"} )

      )
    } else {
      $('body').append(
          $("<h2>", {text: "Challenge 1: ✓✓✓"} )
      )
      CHALLENGE_1_DONE = true;
    }

    if (window.CHALLENGE_1_DONE) {
      if(can_has !== "yarly" ){
        $('body').append(
            $("<h2>", {text: "Challenge 2: Unlock the Cookie Show pages!"} ),
            $("<p>", {text: "> Create a cookie 'can_has=yarly' that will trick the server into thinking you're logged in!"} ),
            $("<p>", {text: "> See `app/controllers/cookies_controller.rb#l10`"} )
        )
      } else {
        $('body').append(
            $("<h2>", {text: "Challenge 2: ✓✓✓"} ),
            $("<h3>", {text: "Success! You have a cookie in your browser!"} ),
            $("<h3>", {text: "You now have access to all pages"} ),
            $("<img>", {src: "https://media.giphy.com/media/E6pfGEOsrDidq/giphy.gif"})
        )
      }
    }

  }


})







// Cookie Manipulation
// Source: http://www.quirksmode.org/js/cookies.html

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
