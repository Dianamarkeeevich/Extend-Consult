
// MENU-SHADOW

     $(function(){
     $(window).scroll(function() {
      var top = $(document).scrollTop();
       if (top < 1) $(".header").css("box-shadow", "none");
       else $(".header").css("box-shadow", "0 3px 33px rgba(0,0,0,0.2)");
     });
    });

// BURGER
  const menuBurger = document.querySelector('.header__burger');
  const menuBody = document.querySelector('.header__menu');
      $(function(){
      $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
     });
    });

// TOUCH-SCREEN

  let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };

    // if(isMobile.any()){
        document.body.classList.add('_touch');

      let menuArrows = document.querySelectorAll('.header__arrow');
      if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
          const menuArrow = menuArrows[index];
          menuArrow.addEventListener("click", function (e){
            menuArrow.parentElement.classList.toggle('_active');
          });
        }
      }

    // }else{
  //     document.body.classList.add('mouse');
  // }

// SCROLL

  const headerLinks = document.querySelectorAll('.header__link[data-goto]');
  if (headerLinks.length > 0){
    headerLinks.forEach(headerLink =>{
      headerLink.addEventListener("click", onHeaderLinkClick);
    });

    function onHeaderLinkClick(e){
      const headerLink = e.target;
      if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)){
        const gotoBlock = document.querySelector(headerLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (menuBurger.classList.contains('active')){
        document.body.classList.remove('lock');
        menuBurger.classList.remove('active');
        menuBody.classList.remove('active');
      }

      window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }
    }
  }


  // VALIDATE

  $(function(){

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e){
  e.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);

  if (error===0){
    let response = await fetch('sendmail.php',{
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      alert(result.message);
      form.reset();

    } else{
      alert("something went wrong");
    }

  } else{
    alert('Required field');
  }

}


function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('._mreq');

  for (let index = 0; index < formReq.length; index++){
    const input = formReq[index]; 
    formRemoveError(input);

      if (input.classList.contains('_email')){
        if (emailTest(input)){
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
  }
  function formRemoveError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
  }

  function emailTest(input){
    return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
  }
});

// FORM-2 VALIDATE

$(function(){

const form2 = document.getElementById('form2');
form2.addEventListener('submit', formSend);

async function formSend(e){
  e.preventDefault();

  let error = formValidate(form2);

  let formData = new FormData(form2);
  console.log("yes")
  if (error===0){
    let response = await fetch('sendmail.php',{
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      alert(result.message);
      form2.reset();

    } else{
      alert("something went wrong");
    }

  } else{
    alert('Required field');
  }

}


function formValidate(form2){
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let index = 0; index < formReq.length; index++){
    const input = formReq[index]; 
    formRemoveError(input);

        if (input.value === ''){
          formAddError(input);
          error++;
        }
    }
    return error;
  }

  function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
  }
  function formRemoveError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
  }
});

