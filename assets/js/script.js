

window.onload = function () {
    //createCursor();
    loadParticles();


};



function createCursor(){
    new kursor({
        type:4,
        removeDefaultCursor: true,
        color: "#FFF"
    })
}

function loadParticles(){
    particlesJS.load('bg', 'assets/particles.json', function() {
        console.log("Particles loaded succefully")
    });
}



/* ===== Title Scroling ===== */
$('#main').scroll( function() {
    var partsName = document.querySelectorAll("div[data-title]");
    var titles = [];
    for (let i = 0; i < partsName.length ; i++) {
        var name = partsName[i].getAttribute("data-title");
        titles.push(name);
    }


    var parts = document.querySelector("#parts");
    var title = parts.querySelector('h2');

    title.innerHTML = titles[0];

    var scrolled = this.scrollTop;

    if ( scrolled >= 1000 && scrolled < 2300) {

        var scrollFrom = (scrolled - 1000)*5 ;
        parts.scroll(scrollFrom, 0);


    } else if ( scrolled >= 2500 && scrolled < 4000){
        parts.scrollLeft;
        title.innerHTML = titles[1];

        var scrollFrom = (scrolled - 2500) ;
        parts.scroll(scrollFrom, 0);
    }else if ( scrolled >= 4600 && scrolled <= 5600){
        parts.scrollLeft;
        title.innerHTML = titles[2];

        var scrollFrom = (scrolled - 4600)*3;
        parts.scroll(scrollFrom, 0);
        //Verif si page d'accueil partie services
        if(document.querySelector("#services") && scrolled >= 5100){
            disableScroll();
            var scrollServices = (scrolled - 4600);
            document.querySelector("#services").scroll(scrollServices,0);
        }
    }else if(scrolled >= 5600){
        parts.scrollLeft;
        title.innerHTML = titles[3];

        var scrollFrom = (scrolled - 5600)*5;
        parts.scroll(scrollFrom, 0);
    }
    //console.log(scrolled);
});

function disableScroll() {
    // Get the current page scroll position
    var services = document.querySelector("#services");
    var scrollTop = services.scrollTop;
    var scrollLeft =  services.scrollLeft;

    var main = document.querySelector("#main");

        // if any scroll is attempted, set this to the previous value
        main.onscroll = function() {
            console.log(scrollLeft + " - " + scrollTop);

        };
}


/* ===== Team on hover ===== */
var team = document.querySelector("#team");
var person = team.querySelectorAll("section");
for (let i = 0; i < person.length; i++) {
    person[i].addEventListener('mouseover', function(){
        enlightPerson(this);
    });
    person[i].addEventListener('mouseout', function () {
        endarkPerson(this)
    });
}

function enlightPerson(elmt) {
    var resume = elmt.querySelector(".resume");
    resume.classList.add("lightResume")
}

function endarkPerson(elmt) {
    var resume = elmt.querySelector(".resume");
    resume.classList.remove("lightResume")
}