const btn_nav=document.querySelector(".btn_mobile_nav");
const header=document.querySelector(".header");



btn_nav.addEventListener("click",function(){
    header.classList.toggle("nave_open");
})

const heroSection=document.querySelector(".section_hero");

const obs=new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky")
    }else{
        document.body.classList.remove("sticky")
        
    }

},{
    root: null,
    threshold: 0,
    rootMargin:'-80px',
})

obs.observe(heroSection);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
