export function toggle(){
    var nav = document.getElementById("nav-bar");
    if(nav.style.height == 0 || nav.style.display == "none"){
        nav.style.transition = "all 2s";
        nav.style.display = "flex";
        nav.style.height = "95vh";
        
    }else{
        
        nav.style.height = "0";
        nav.style.display = "none";
    }
}