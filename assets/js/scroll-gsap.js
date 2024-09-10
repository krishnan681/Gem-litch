const canvas =document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 95;

const currentFrame = (index) => `./house/${(index + 1).toString()}.png`;
const images =[];
let ball = {frame :0};

for(let i=0; i < frameCount; i++){
    const img =new Image();
    img.src =currentFrame(i);
    console.log(currentFrame(i));
    images.push(img);
}

console.log(images);

// image /gsap 

gsap.to(ball, {
    frame: frameCount - 1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
        scrub: 0.5,
        pin:"canvas",
        end:"500%",
        // markers: true,
    },
    onUpdate: render,
});



// text gsap 


gsap.fromTo(".house-text",{
    opacity:0,
},{
    opacity:1,
    scrollTrigger:{
        scrub:1,
        ease:"none",
        start:"-0%",
        end:"45%",
    },
    onComplete:() => {
        gsap.to(".house-text",{opacity:0});
    },
    // onComplete:() => {
    //     gsap.to(".icon",{opacity:0});
    // }
});


gsap.fromTo(".icon",{
    opacity:0,
},{
    opacity:1,
    scrollTrigger:{
        scrub:1,
        ease:"none",
        start:"0%",
        end:"45%",
    },
    onComplete:() => {
        gsap.to(".icon",
            {opacity:0},
            {ease:0},
        );
    }
});







images[0].onload = render;
function render(){

    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;


    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}


