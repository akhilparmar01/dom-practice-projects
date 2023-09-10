var iststus = document.querySelector("h5")
var btn= document.querySelector("#add")
var check =0;
//var removeFriend=document.querySelector("#remove")

btn.addEventListener("click", function(){
    if(check==0){
    iststus.innerHTML= "friends"
    iststus.style.color="green"
    btn.innerHTML='remove friends '
    check=1
    }else{
        iststus.innerHTML= "stranger"
    iststus.style.color="red"
    btn.innerHTML='add friends'
    check=0
    }
})

// removeFriend.addEventListener("click", function(){
//     iststus.innerHTML="Strange"

// })