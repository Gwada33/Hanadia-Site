document.getElementById("nav-container").innerHTML = `
<nav class="navjs">
<ul>
<div onclick="action();" class="chevron">
<span class="lol1"></span>
<span class="lol2"></span>
<span class="lol3"></span>
</div>
    <li><a href="launcher.html" class="ade">Launcher</a></li>
    <li><a href="tebex" class="ade">Shop</a></li>
    <li><a href="https://faq.hanadia.fr" class="ade">FAQ</a></li>
</ul>
<button>Telecharger</button>
</nav>


<div id="long-nav">
<ul>
    <li><a href="launcher.html" class="ade">Launcher</a></li>
    <li><a href="tebex" class="ade">Shop</a></li>
    <li><a href="https://faq.hanadia.fr" class="ade">FAQ</a></li>
</ul>
</div>`

let truelify = false;

document.getElementById("long-nav").style.transform = "translate('-100%')"
 

function action(){
    if(truelify === false){
        document.getElementById("long-nav").style.opacity = 1;
        document.getElementById("long-nav").style.transform = "translateX('100%')"
        truelify = true;
        console.log("1")
    } else if(truelify === true){
        document.getElementById("long-nav").style.opacity = 0;
        document.getElementById("long-nav").style.transform = "translateX('-100%')"
        truelify = false;
        console.log("2")
    }
}
