// GET and SPLIT cookie(s)
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

// GET cookie ip_roba
function checkCookie() {
    var user = getCookie("ip_roba");
        if (user != "") {
            //Move to main_stream.html
            window.location.href = "main_stream.html";
        }
}

checkCookie();  