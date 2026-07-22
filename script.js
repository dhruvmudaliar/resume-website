// =============================
// Scroll Progress Bar
// =============================

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let progress =
    (scrollTop / height) * 100;


    document.getElementById("progressBar").style.width =
    progress + "%";

});



// =============================
// Typing Animation
// =============================

const roles = [

    "AI Engineer",
    "Azure Cloud Developer",
    "Cybersecurity Analyst",
    "Generative AI Builder",
    "Cloud Solutions Engineer"

];


let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".hero h2");


function typeEffect(){


    if(charIndex < roles[roleIndex].length){


        typingElement.innerHTML =
        roles[roleIndex].substring(0,charIndex+1);


        charIndex++;

        setTimeout(typeEffect,100);


    }

    else{


        setTimeout(deleteEffect,1500);


    }


}



function deleteEffect(){


    if(charIndex > 0){


        typingElement.innerHTML =
        roles[roleIndex].substring(0,charIndex-1);


        charIndex--;

        setTimeout(deleteEffect,50);


    }

    else{


        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex=0;

        }


        setTimeout(typeEffect,300);


    }

}


typeEffect();




// =============================
// Scroll Reveal Animations
// =============================


const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:.15

});




document.querySelectorAll(

".card, .project-card, .timeline-item, .skill"

)

.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .7s ease";


observer.observe(element);


});





// =============================
// Navbar Active Highlight
// =============================


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;


if(scrollY >= sectionTop){

current =
section.getAttribute("id");


}


});



navLinks.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")
===
"#"+current){


link.style.color="#00c6ff";


}


});


});