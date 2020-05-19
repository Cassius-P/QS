

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




$('#main').scroll( function() {

    var parts = document.querySelector("#parts");
    var scrolled = this.scrollTop;

    if ( scrolled >= 1000) {

        console.log(scrolled+"YES");
        var scrollFrom = (scrolled - 1000)*5 ;
        parts.scroll(scrollFrom, 0);

    } else {
        console.log(scrolled);
    }
});