// AOS Library load
AOS.init();
// Menu animation
function headerAnimation(x) {
    x.classList.toggle("change");
    if (!document.getElementsByClassName('change').length){
        // class name does not exist in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "none";
        document.getElementById('nav-bg').style.cssText = "display: none !important";
        document.querySelector('main').style.filter = "blur(0)";
        // document.querySelector('#title-tag').classList.add('smooth');
    }else {
        // class exists in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "block";
        document.getElementById('nav-bg').style.cssText = "display: block !important";
        document.querySelector('main').style.filter = "blur(5px)";
    }
}
var btn = document.getElementById('form-btn');
var mailer = document.addEventListener('click', function(){
    var r = new XMLHttpRequest();
    r.open("POST", "https://formspree.io/leoabreu14@gmail.com", true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200){
            console.log('Deu ruim');
        }else{
            console.log("Success: " + r.responseText);
        }
    };
    r.send();
});
