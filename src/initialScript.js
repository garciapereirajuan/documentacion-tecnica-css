/*eslint-disable*/

const initialScript = (element) => {
    if(element !== "destroy" && element === "start") {
        var btnIndice=document.querySelector("#btn_indice");
        var navBar=document.querySelector("#navbar");
        var container=document.querySelector("#container");
        var navLink=document.querySelectorAll(".nav-link");
        var subLink=document.querySelectorAll(".sub-link");
        var btnActivo=false;
    
        function accionNavBar(){
            if(btnActivo===false){
                navBar.style.display="block";
                container.className="container_off";
                                        btnIndice.innerHTML="Cerrar X";
                btnIndice.style.background="#d8121f";
                btnActivo=true;
            }
            else{ 
                navBar.style.display="none";
                container.className="style_container_none";
                btnIndice.innerHTML="Índice";
                btnIndice.style.background="var(--color-background6)";
                btnActivo=false;
            }
        }
    
        btnIndice.addEventListener("click",accionNavBar);
        for(let i=0; i<navLink.length; i++){
            navLink[i].addEventListener("click",()=>{btnActivo=true;accionNavBar();});
        }
        for(let i=0; i<subLink.length; i++){
            subLink[i].addEventListener("click",()=>{btnActivo=true;accionNavBar();});
        }
    }
}

export default initialScript;