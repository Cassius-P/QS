

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
