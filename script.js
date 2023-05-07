let typeBox=document.getElementById("typebox");
let box=document.querySelector(".box");
let store=JSON.parse(localStorage.getItem("items"))||[]
typeBox.addEventListener('keyup',(event)=>{
       if(event.key == "Enter"){
        add(typeBox.value);
        typeBox.value="" ;  
       }
})
function display(){
  //  storing variables here
  for(let i=0;i<store.length;i++){
    const li=document.createElement("li");
    li.innerHTML=`
                   ${store[i]}
                   <i class="fa-sharp fa-solid fa-xmark cross"></i>
                  `;
    box.appendChild(li);
    li.setAttribute("class","list-items");
    li.querySelector("i").addEventListener("click",()=>{
      const index=store.indexOf(li.innerText);
      store.splice(index,1);
      li.remove();
      localStorage.setItem("items",JSON.stringify(store))
     
})
  }
  
}
display();




const add=(item)=>{
  if (item==""){
    return alert("Please write something");
  }
  store.push(item);
  localStorage.setItem("items",JSON.stringify(store))


  const li=document.createElement("li");
  li.innerHTML=`
                 ${item}
                 <i class="fa-sharp fa-solid fa-xmark cross"></i>
                `;
  box.appendChild(li);
  li.setAttribute("class","list-items");
  li.querySelector("i").addEventListener("click",()=>{
        const index=store.indexOf(li.innerText);
        store.splice(index,1);
        li.remove();
        localStorage.setItem("items",JSON.stringify(store))
       
  })

}



