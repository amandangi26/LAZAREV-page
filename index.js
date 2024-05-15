function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav2", {
            height: "21vh",
            
        });
        tl.to(".nav2-opt h5 ", {
            display: "block",
            duration:.1,
           

        });
        tl.to(".nav2-opt h5 span", {
            stagger:0.1,
            duration:1,
            display:'block',
           
            margin: "0",
        });
        let opt=document.querySelectorAll(".nav2-opt h5 span");
        for(op of opt){
         op.style.display="block"
        }
        
    });
    nav.addEventListener("mouseleave", function () {
        
        let tl = gsap.timeline()

        tl.to(".nav2", {
            height: "0vh",
            duration:.1

        });
        tl.to(".nav2-opt h5 ", {
            display: "none",
            duration:1,
            

        });
        tl.to(".nav2-opt h5 span", {
            duration:1,
            display:'none',
            margin: "100% 0 0 0",
        });
        let opt=document.querySelectorAll(".nav2-opt h5 span");
    //    for(op of opt){
    //     op.style.margin="100 0 0 0"
    //    }
    });
    
  
}

navAnimation()