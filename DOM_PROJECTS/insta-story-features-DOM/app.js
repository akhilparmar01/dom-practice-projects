var arr=[{dp:"https://plus.unsplash.com/premium_photo-1664867432812-19643431d4f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60", story:"https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"},

{dp:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", story:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"},

 {dp:"https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
,story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},

{dp:"https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", story:"https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"}]

var storyan =document.querySelector("#storyan")
var clutter =""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img  id="${idx}"src="${elem.dp}" alt="">
</div>`
})
storyan.innerHTML=clutter

storyan.addEventListener("click", function(dets){
document.querySelector("#full-screen").style.display= "block"
document.querySelector("#full-screen").style.backgroundImage= `url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#full-screen").style.display= "none"
},3000)
});