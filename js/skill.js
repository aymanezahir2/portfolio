const skill = [
  { names: "html", power: "90" },
  { names: "css", power: "85" },
  { names: "javaScript", power: "75" },
  { names: "python", power: "70" },
];

const containerOfPourcenetage = document.querySelector(
  ".skill .content .pourcentage"
);
const scro = document.getElementById("skill");

function InnerElement() {
    skill.forEach(function (e){
        let content = `<div class="box" data-size="${e.power}" data-type="${e.names}">
        <h3>${e.names}</h3>
        <div data-size="${e.power}"><span></span>
        </div>
        
        </div>`
        containerOfPourcenetage.innerHTML +=content
    })
}
function MufunctionWidth(){
    const divs = document.querySelectorAll('.pourcentage .box')
    console.log('object');
    divs.forEach(function (a){
        let span = a.lastElementChild.firstElementChild
        span.style.Transition = ".7s all"
        span.style.width = `${a.dataset.size}%`
    })
}

window.onscroll = function (){
    window.scrollY > 6400 ? MufunctionWidth() :false
}



window.addEventListener("DOMContentLoaded", () => {
    window.scrollY > 6400 ? MufunctionWidth() :false
  InnerElement();
});

// <div class="box python"><h3>Python</h3><div><span></span></div></div>
