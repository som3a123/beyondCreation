export function toggle(){
    var nav = document.getElementById("nav-bar");
    if(nav.style.height == 0 || nav.style.display == "none"){
        nav.style.transition = "all 2s";
        nav.style.display = "flex";
        nav.style.height = "100vh";
        
    }else{
        
        nav.style.height = "0";
        nav.style.display = "none";
    }
}