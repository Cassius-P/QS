

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
    var scrolled = this.scrollTop;
    title.innerHTML = titles[0];

    if ( scrolled >= 1000 && scrolled < 2000) {
        var scrollFrom = (scrolled - 1000)*4 ;
        parts.scroll(scrollFrom, 0);


    } else if ( scrolled >= 2000){
        title.innerHTML = titles[1];
        parts.scrollLeft;
        var scrollFrom = (scrolled - 2000)*1.5 ;
        parts.scroll(scrollFrom, 0);
        console.log("2000")
    }
    console.log(scrolled);
});


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