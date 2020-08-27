window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "65px";
    document.getElementById("profileImageOutline").style.width ="50px";
    document.getElementById("profileImageOutline").style.height ="50px";
    document.getElementById("profileImageOutline").style.border ="2px solid #990000";
    document.getElementById("profilePict").style.border ="0.5px solid #FFFFFF";
    document.getElementById("profilePict").style.width ="80%";
    document.getElementById("profilePict").style.height ="80%";
    document.getElementById("profilePict").style.marginTop ="8%";
    document.getElementById("profilePict").style.marginLeft ="8%";
    document.getElementById("profile").style.top ="5px";
    document.getElementById("profile").style.left ="5px";
    document.getElementById("hiThere").style.visibility = "hidden";
    document.getElementById("hiThere").style.fontSize = "1px";
    document.getElementById("im").style.fontSize = "25px";
    document.getElementById("name").style.fontSize = "25px";
    document.getElementById("name").style.marginLeft = "10px";
    document.getElementById("introduction").style.top = "15px";
    document.getElementById("introduction").style.left = "70px";
    document.getElementById("AboutMeSection").style.marginTop = "65px";
  } else {
    document.getElementById("header").style.height = "300px";
    document.getElementById("profileImageOutline").style.width ="188px";
    document.getElementById("profileImageOutline").style.height ="188px";
    document.getElementById("profileImageOutline").style.border ="6px solid #990000";
    document.getElementById("profilePict").style.border ="2px solid #FFFFFF";
    document.getElementById("profilePict").style.width ="90%";
    document.getElementById("profilePict").style.height ="90%";
    document.getElementById("profilePict").style.marginTop ="4%";
    document.getElementById("profilePict").style.marginLeft ="4%";
    document.getElementById("profile").style.top ="50px";
    document.getElementById("profile").style.left ="50px";
    document.getElementById("hiThere").style.visibility = "visible";
    document.getElementById("hiThere").style.fontSize = "40px";
    document.getElementById("im").style.fontSize = "40px";
    document.getElementById("name").style.fontSize = "40px";
    document.getElementById("name").style.marginLeft = "15px";
    document.getElementById("introduction").style.top = "100px";
    document.getElementById("introduction").style.left = "300px";
    document.getElementById("AboutMeSection").style.marginTop = "300px";
  }
}