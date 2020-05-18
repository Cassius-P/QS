window.onload = function () {
    getHeight();
};

function getHeight(){
    var nb = document.querySelectorAll(".fullScreen").length;
    loadParticles(nb);
}

function loadParticles(nb){
    console.log(nb);
    document.querySelector("#bg").style.height = nb * 100 + "vh";

    particlesJS.load('bg', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}
