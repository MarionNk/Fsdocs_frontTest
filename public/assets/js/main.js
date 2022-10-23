function myFunction(){
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.body.style.position="relative";
        document.querySelectorAll('.main *:not(#menu)').forEach((el)=>el.style.filter="blur(0px)"); 
    }
    else {
        x.style.display = "block";
        document.body.style.position="fixed";
        x.style.filter="blur(0px)";
        document.querySelectorAll('.main *:not(#menu)').forEach((el)=>el.style.filter="blur(2px)");
    }
}
function closeNav(){
    document.getElementById("menu").style.display="none";
    document.body.style.position="relative";
    document.querySelectorAll('.main *:not(#menu)').forEach((el)=>el.style.filter="blur(0px)"); 
}