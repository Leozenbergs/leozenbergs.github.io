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


let scrollToElem = (y) => {
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
}
let mapLinks = () => {
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
let headerAnimation = (x) => {
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

var mailer = (btn = document.getElementById('form-btn')) =>{
    let form = document.getElementById('form_contato');
    let data = new FormData(form);
    btn.addEventListener('click', (e) => {
        var r = new XMLHttpRequest();
        r.open("POST", "//formspree.io/leoabreu14@gmail.com/", true);
        r.setRequestHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept');
        r.setRequestHeader('Access-Control-Allow-Origin', '*');
        r.onreadystatechange = () => {
            if (r.readyState != 4 || r.status != 200){
                console.log(`${r.status} error`);
            }else{
                console.log(`Success:  ${r.responseText}`);
            }
        };
        r.send(data);
        e.preventDefault();
        btn.setAttribute('disabled','disabled');
    });
}

let main = () => {
    mapLinks();
    mailer();
}
window.onload = main;

