export function titleLoader(title){
    titleReset();
    let tag = document.createElement("div");
   let text = document.createTextNode(title);
   
   tag.appendChild(text);
   let element = document.getElementById("titleHere");
   //console.log(element);
 
   let child = element.appendChild(tag);
   child.setAttribute("id", "titlee");
   
   
}

//titleLoader();
export function titleReset(){
    
   let element = document.getElementById("titlee");
   //console.log(element);
   //let 
  element.remove();
   
}