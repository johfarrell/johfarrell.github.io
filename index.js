document.cookie = 'SameSite=None';
window.onscroll = function() {scrollFunction()};

var more900 = window.matchMedia("(min-width: 900px)")
more900.addListener(scrollFunction)

var less900 = window.matchMedia("(max-width: 899px)")
less900.addListener(scrollFunction)

window.onload = function(){
    if(less900.matches){
        document.getElementById("drop").style.visibility = "visible";
        document.getElementById("drop").style.paddingRight = "5px";
        document.getElementById("drop").style.paddingLeft = "5px";
        document.getElementById("drop").style.margin = "6px";
        document.getElementById("dropIcon").style.fontSize = "33px";

        if(document.getElementById("dropDownContainer").style.visibility === "hidden"){
            document.getElementById("collapse").style.visibility = "hidden";
            document.getElementById("collapse").style.paddingRight = "0";
            document.getElementById("collapse").style.paddingLeft = "0";
            document.getElementById("collapse").style.margin = "0";
            document.getElementById("collapseIcon").style.fontSize = "0";
        }else if(document.getElementById("dropDownContainer").style.visibility === "visible"){
            document.getElementById("drop").style.visibility = "hidden";
            document.getElementById("drop").style.paddingRight = "0";
            document.getElementById("drop").style.paddingLeft = "0";
            document.getElementById("drop").style.margin = "0";
            document.getElementById("dropIcon").style.fontSize = "0";
        }

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
    }
}

function scrollFunction() {
    if(more900.matches){
        document.getElementById("dropDownContainer").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "hidden";
        document.getElementById("drop").style.paddingRight = "0";
        document.getElementById("drop").style.paddingLeft = "0";
        document.getElementById("drop").style.margin = "0";
        document.getElementById("dropIcon").style.fontSize = "0";
        document.getElementById("collapse").style.visibility = "hidden";
        document.getElementById("collapse").style.paddingRight = "0";
        document.getElementById("collapse").style.paddingLeft = "0";
        document.getElementById("collapse").style.margin = "0";
        document.getElementById("collapseIcon").style.fontSize = "0";

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
    }else if(less900.matches){
        document.getElementById("drop").style.visibility = "visible";
        document.getElementById("drop").style.paddingRight = "5px";
        document.getElementById("drop").style.paddingLeft = "5px";
        document.getElementById("drop").style.margin = "6px";
        document.getElementById("dropIcon").style.fontSize = "33px";

        if(document.getElementById("dropDownContainer").style.visibility === "hidden"){
            document.getElementById("collapse").style.visibility = "hidden";
            document.getElementById("collapse").style.paddingRight = "0";
            document.getElementById("collapse").style.paddingLeft = "0";
            document.getElementById("collapse").style.margin = "0";
            document.getElementById("collapseIcon").style.fontSize = "0";
        }else if(document.getElementById("dropDownContainer").style.visibility === "visible"){
            document.getElementById("drop").style.visibility = "hidden";
            document.getElementById("drop").style.paddingRight = "0";
            document.getElementById("drop").style.paddingLeft = "0";
            document.getElementById("drop").style.margin = "0";
            document.getElementById("dropIcon").style.fontSize = "0";
        }

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
    }
    var headerHeight = document.getElementById("header").offsetHeight;
    var aboutMeHeight = document.getElementById("AboutMeSection").offsetHeight;
    var skillView = headerHeight+aboutMeHeight + 50 - 300
    
    if(window.scrollY>=skillView){
        document.getElementById("HTMLBar").style.width = "95%";
        document.getElementById("CSSBar").style.width = "90%";
        document.getElementById("JSBar").style.width = "70%";
        document.getElementById("UMLBar").style.width = "70%";
        document.getElementById("AndroidBar").style.width = "65%";
        document.getElementById("JavaBar").style.width = "65%";
        document.getElementById("ReactNativeBar").style.width = "60%";
        document.getElementById("CBar").style.width = "53%";
        document.getElementById("SQLBar").style.width = "40%";
        document.getElementById("PythonBar").style.width = "40%";
        document.getElementById("UIUXBar").style.width = "95%";
        document.getElementById("LogoDesignBar").style.width = "70%";
        document.getElementById("VideoEditingBar").style.width = "65%";
        document.getElementById("IllustrationBar").style.width = "30%";
        document.getElementById("LeadershipBar").style.width = "95%";
        document.getElementById("TeamworkBar").style.width = "85%";
        document.getElementById("CreativityBar").style.width = "85%";
        document.getElementById("AnalysistBar").style.width = "55%";
    }else if(window.scrollY < (skillView-100)){
        document.getElementById("HTMLBar").style.width = "0%";
        document.getElementById("CSSBar").style.width = "0%";
        document.getElementById("JSBar").style.width = "0%";
        document.getElementById("UMLBar").style.width = "0%";
        document.getElementById("AndroidBar").style.width = "0%";
        document.getElementById("JavaBar").style.width = "0%";
        document.getElementById("ReactNativeBar").style.width = "0%";
        document.getElementById("CBar").style.width = "0%";
        document.getElementById("SQLBar").style.width = "0%";
        document.getElementById("PythonBar").style.width = "0%";
        document.getElementById("UIUXBar").style.width = "0%";
        document.getElementById("LogoDesignBar").style.width = "0%";
        document.getElementById("VideoEditingBar").style.width = "0%";
        document.getElementById("IllustrationBar").style.width = "0%";
        document.getElementById("LeadershipBar").style.width = "0%";
        document.getElementById("TeamworkBar").style.width = "0%";
        document.getElementById("CreativityBar").style.width = "0%";
        document.getElementById("AnalysistBar").style.width = "0%";
    }
}

function pushHeader(index){
    if(more900.matches){
        //If not yet scroll -> scroll 55px to collapse
        if(window.scrollY<50){
            event.preventDefault();
            window.scroll(0, 55);
            setTimeout(() => {
                if(index==1){
                    window.location.replace("#AboutMeSection")
                }else if(index==2){
                    window.location.replace("#SkillsSection")
                }else if(index==3){
                    window.location.replace("#ExperienceSection")
                }else if(index==4){
                    location.href = "#EducationSection";
                    window.location.replace("#EducationSection")
                }
            }, 505);
        }else{
            event.preventDefault();
            if(index==1){
                window.location.replace("#AboutMeSection")
            }else if(index==2){
                window.location.replace("#SkillsSection")
            }else if(index==3){
                window.location.replace("#ExperienceSection")
            }else if(index==4){
                window.location.replace("#EducationSection")
            }
        }
    }else if(less900.matches){
        event.preventDefault();
        if(index==1){
            window.location.replace("#AboutMeSection")
            dropcollapse();
        }else if(index==2){
            window.location.replace("#SkillsSection")
            dropcollapse();
        }else if(index==3){
            window.location.replace("#ExperienceSection")
            dropcollapse();
        }else if(index==4){
            window.location.replace("#EducationSection")
            dropcollapse();
        }
    }
}

function mailFarrell(){
    event.preventDefault();
    window.location.href = "mailto:farrelllandutama@gmail.com";
}

function dropdown(){
    event.preventDefault();
    if(less900.matches){
        document.getElementById("dropDownContainer").style.visibility = "visible";
        document.getElementById("drop").style.visibility = "hidden";
        document.getElementById("drop").style.paddingRight = "0";
        document.getElementById("drop").style.paddingLeft = "0";
        document.getElementById("drop").style.margin = "0";
        document.getElementById("dropIcon").style.fontSize = "0";
    
        document.getElementById("collapse").style.visibility = "visible";
        document.getElementById("collapse").style.paddingRight = "5px";
        document.getElementById("collapse").style.paddingLeft = "5px";
        document.getElementById("collapse").style.margin = "6px";
        document.getElementById("collapseIcon").style.fontSize = "33px";
    }

}

function dropcollapse(){
    event.preventDefault();
    if(less900.matches){
        document.getElementById("dropDownContainer").style.visibility = "hidden";
        document.getElementById("drop").style.visibility = "visible";
        document.getElementById("drop").style.paddingRight = "5px";
        document.getElementById("drop").style.paddingLeft = "5px";
        document.getElementById("drop").style.margin = "6px";
        document.getElementById("dropIcon").style.fontSize = "33px";
        
        document.getElementById("collapse").style.visibility = "hidden";
        document.getElementById("collapse").style.paddingRight = "0";
        document.getElementById("collapse").style.paddingLeft = "0";
        document.getElementById("collapse").style.margin = "0";
        document.getElementById("collapseIcon").style.fontSize = "0";
    }
}