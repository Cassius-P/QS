

window.onload = function () {
    //createCursor();
    //getHeight();
    loadParticles();

};

window.onresize = function () {
    //getHeight();
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
    document.querySelector("#main").style.height = elmtHeight + "px";
}

function loadParticles(){
    particlesJS.load('bg', 'assets/particles.json', function() {
        console.log("Particles loaded succefully")
    });
}


var main = document.querySelector("#main");
console.log(main);

main.scroll(function() {

    var parts = document.querySelector("#parts");

    if (main.scrollY >= "1000") {

        console.log("<1000");
        var scrollFrom = (window.scrollY - 1000)*5 ;
        parts.scroll(scrollFrom, 0);

    } else {
        console.log("<1000");


    }
});