const text = `Shabnam,

This was never about one of us.
It was always about us—
growing, choosing, understanding.

Will you be my Valentine? ❤️`;

let i=0, el=document.getElementById("typing");

function type(){
  if(i<text.length){
    el.textContent+=text[i++];
    setTimeout(type, text[i-1]==="\n"?600:45);
  }
}
window.addEventListener("scroll",()=>{
  if(el.textContent===""){
    const t=el.getBoundingClientRect().top;
    if(t<window.innerHeight-120) type();
  }
});