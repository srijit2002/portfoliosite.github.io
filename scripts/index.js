// Cursor Animation

const cursor=document.getElementById("cursor");

window.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX+'px';
    cursor.style.top=e.pageY+'px';
})

// Cursor hover animation
const projects=document.querySelectorAll(".project__img");


projects.forEach((project)=>{
  project.addEventListener("mouseenter",()=>{
    cursor.classList.replace("cursor","pointer");
    cursor.innerHTML=`<h1 class="pointer__text">Click-to-see-more-</h1>`;

   // splitting the letters into spans to make then circular curser which will appear on image

    const text=document.querySelector(".pointer__text");
    text.innerHTML=text.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
    const letters=document.querySelectorAll(".letter");
    letters.forEach((letter,i)=>{
      letter.style.transform=`rotate(${i*20}deg)`
    })

  })

  project.addEventListener("mouseleave",()=>{
    cursor.classList.replace("pointer","cursor");
    cursor.innerHTML=``;
    
  })

})


// Enlarging the heading quate at center on opening*****************************************
const enlargeCenter=()=>{
  const center=document.querySelector(".center");
  center.style.transform="scale(500)";
  center.addEventListener("webkitTransitionEnd",()=>{
    preloader.style.display="none";
    document.querySelector("body").style.overflowY="auto";//So that vertical scrollbar does not appear on preloader
// Animation on opening

// scalex animation of navbar****************************************************************
const opener= gsap.utils.toArray(".opener");
opener.forEach((item) => {
  const tl = gsap.timeline();

  tl.from(item, {
    scaleX:0,
    duration:1.7
  })
});
// text reveal animation of navbar links*****************************************************
const hiders=gsap.utils.toArray(".hider");
hiders.forEach((hider) => {
 gsap.fromTo(hider, {y:'100%',x:0}, {y:'0%',x:0, delay:1.7,duration: 1,ease:'power1.out'});
});
gsap.from(".intro__para",{
  opacity:0,
  delay:1,
  duration:1.5
})
 })

}


//*****Animation at opener quate section*************************************************

const preloaderTimeline=gsap.timeline();
const preloader=document.getElementById("preloader");
window.addEventListener("load",()=>{
  preloader.innerHTML=``;
  for(var i=0;i<11;i++){
    if(i==5){
      preloader.innerHTML+=`<h1 class="center">Be Yourself, Everyone else is taken</h1>`;
    }
    else{
      preloader.innerHTML+=`<h1 class="preloader__text">Be Yourself, Everyone else is taken</h1>`;
    }
  }
const preloaderTexts=document.querySelectorAll(".preloader__text");
preloaderTimeline.from(preloaderTexts, {
  opacity:0,
  duration:0.4,
  stagger:{
    each:0.3,
    from:"edges",
  },
  onComplete:()=>{document.querySelector(".center").style.opacity=1;}
  
})
.to(preloaderTexts, {
  opacity:0,
  duration:1,
  onComplete:enlargeCenter
});
})



// Scrollbar Animation********************************************************

const scrollbar=document.getElementById("scrollbar__thumb");
const totalHeight=document.body.scrollHeight-window.innerHeight;
window.addEventListener('scroll',()=>{
    const progressHeight=(window.pageYOffset/totalHeight)*100;
    scrollbar.style.top=progressHeight+"%";
})

// Animation at project section************************************************

projects.forEach((project)=>{
  gsap.to(project, {
    scrollTrigger:project,
    webkitClipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
    clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
    duration:0.5
  });
  
})

//**********************/ skew effect in precontact section/*********************
var currentPosition=window.pageYOffset;

const about=document.getElementById("about");
function skewEffect(){
  var newPosition=window.pageYOffset;
  var diff=newPosition-currentPosition;
  var skew=diff*0.2;
  about.style.transform=`skewY(${skew}deg)`;
  currentPosition=newPosition;
  requestAnimationFrame(skewEffect);
}
skewEffect();





// const hamburger=document.querySelector(".hamburger");
// const navbar=document.querySelector(".navbar");

// hamburger.addEventListener("click",()=>{
//   console.log("hello")
//   if(navbar.style.transform==`scaleX(0)`){
//     navbar.style.transform=`scaleX(1)`;
//   }
//   else{
//     navbar.style.transform=`scaleX(0)`;
//   }
  
// })