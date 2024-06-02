$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
         $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

$('#bhromaon-btn').on('click', ()=> {
    $('.bhromaon-show-text').slideToggle(1000); 
    let x=document.getElementById("bhromaon-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});


$('#genesis-btn').on('click', ()=> {
    $('.genesis-show-text').slideToggle(1000); 
    let x=document.getElementById("genesis-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});


$('#aupairweb-btn').on('click', ()=> {
  $('.aupairweb-show-text').slideToggle(1000); 
  let x=document.getElementById("aupairweb-btn"); 
  if(x.innerHTML==="Show more"){
      x.innerHTML = "Show less"; 
  } else {
      x.innerHTML = "Show more"; 
  }
});


$('#sourcandyswimwearshop-btn').on('click', ()=> {
  $('.sourcandyswimwearshop-show-text').slideToggle(1000); 
  let x=document.getElementById("sourcandyswimwearshop-btn"); 
  if(x.innerHTML==="Show more"){
      x.innerHTML = "Show less"; 
  } else {
      x.innerHTML = "Show more"; 
  }
});


