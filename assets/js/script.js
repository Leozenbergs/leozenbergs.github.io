// AOS Library load
AOS.init();
let mainbutton = document.getElementById('scrollDown');
let about = document.getElementById('link_about');
let portifolio = document.getElementById('link_portifolio');
let contact = document.getElementById('link_contact');

let a = document.getElementById('about_me');
let b = document.getElementById('about_me');
let c = document.getElementById('my_portifolio');
let d = document.getElementById('contact_me');


function scrollToElem(y){
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
}
function mapLinks(){
    document.addEventListener('click', (e)=>{
        let click = e.target.id;
        switch(click){
            case 'scrollDown':
                var medidaArr = a.offsetTop;
            break;
            
            case 'link_about':
                var medidaArr = b.offsetTop;
            break;

            case 'link_portifolio':
                var medidaArr = c.offsetTop;
            break;

            case 'link_contact':
                var medidaArr = d.offsetTop;
            break;
        }
        scrollToElem(medidaArr);
    });
}



// Menu animation
function headerAnimation(x){
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



function main(){
    mapLinks();
}
window.onload = main;

