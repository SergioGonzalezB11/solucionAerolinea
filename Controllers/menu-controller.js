export class MenuController extends HTMLElement{
    constructor(){
        super();this.initMenu();
    }
    initMenu = () => {
        document.querySelectorAll('.link-menu').forEach((val,id)=>{
            val.addEventListener("click", e =>{
                console.log("cliiip");
                const dato = e.target.dataset.info;
                switch(dato){
                    case "modal":
                        break;
                    case "wc-listarcliente":
                        break;
                    case "wc-list":
                        break;    
                }

                e.stopImmediatePropagation();
                e.preventDefault();

            })
        })
    }
}
customElements.define("menu-controller",MenuController);