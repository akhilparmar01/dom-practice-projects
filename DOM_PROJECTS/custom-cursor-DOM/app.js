// var con = document.querySelector("#container")

// var love = document.querySelector("i")

// con.addEventListener("dbclick",function(){
//     love.style.transform='translate(-50%, 50%) scale(1)'
//     love.style.opacity=0.8

//     setTimeout(function(){
//         love.style.opacity=0
//     },1000);

//     setTimeout(function(){
//         love.style.transform='translate(-50%, 50%) scale(0)'
//     },3000);
// })


var main = document.querySelector("#main")
var crs = document.querySelector(".cursor")


    main.addEventListener("mousemove",function(dets){
        crs.style.left=dets.x+"px"
        crs.style.top=dets.y+"px"
    })
