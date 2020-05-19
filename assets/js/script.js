

window.onload = function () {
    //createCursor();
    getHeight();
    loadParticles();

};

window.onresize = function () {
    getHeight();
};

function createCursor(){
    new kursor({
        type:4,
        removeDefaultCursor: true,
        color: "#FFF"
    })
}

function getHeight(){
    var elmtHeight = document.querySelector("#main").offsetHeight;
    document.querySelector("#bg").style.height = elmtHeight + "px";
}

function loadParticles(){
    particlesJS.load('bg', 'assets/particles.json', function() {
        console.log("Particles loaded succefully")
    });
}




$(window).scroll(function() {

    var parts = document.querySelector("#parts");

    if (window.scrollY >= "1000") {
        var scrollFrom = (window.scrollY - 1000)*5 ;
        parts.scroll({top : 0, left : scrollFrom, behavior:"auto"});

    } else {
        console.log("<1000");


    }
});