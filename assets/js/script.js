// AOS Library load
AOS.init();
let mainbutton = document.getElementById('scrollDown');
let about = document.getElementById('link_about');
let portifolio = document.getElementById('link_portifolio');
let contact = document.getElementById('link_contact');


mainbutton.addEventListener('click', function(){

      var a = document.getElementById('about_me');
      var medidaArrA = a.offsetTop;
      console.log(medidaArrA);
      scrollToElem(medidaArrA);
});
about.addEventListener('click', function(){

      var b = document.getElementById('about_me');
      var medidaArrB = b.offsetTop;
      console.log(medidaArrB);
      scrollToElem(medidaArrB);
});
portifolio.addEventListener('click', function(){

      var c = document.getElementById('my_portifolio');
      var medidaArrC = c.offsetTop;
      console.log(medidaArrC);
      scrollToElem(medidaArrC);
});
contact.addEventListener('click', function(){

      var d = document.getElementById('contact_me');
      var medidaArrD = d.offsetTop;
      console.log(medidaArrD);      
      scrollToElem(medidaArrD);
});



function scrollToElem(y){
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
}

// Menu animation
function headerAnimation(x) {
    x.classList.toggle("change");
    if (!document.getElementsByClassName('change').length){
        // class name does not exist in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "none";
        document.querySelector('main').style.filter = "blur(0)";
        // document.querySelector('#title-tag').classList.add('smooth');
    }else {
        // class exists in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "block";
        document.querySelector('main').style.filter = "blur(5px)";
    }
}
// MAILER
var btn = document.getElementById('form-btn');
var mailer = btn.addEventListener('click', function(e){
    var r = new XMLHttpRequest();
    r.open("POST", "https://formspree.io/leoabreu14@gmail.com", true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200){
            console.log('error');
        }else{
            console.log("Success: " + r.responseText);
        }
    };
    r.send();
    e.preventDefault();
    btn.setAttribute('disabled','disabled');
});
