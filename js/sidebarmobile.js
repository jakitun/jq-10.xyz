$(document).ready(function(){
  
    var menu = $(".menu");
    var hamburgermobile = $(".hamburger-mobile");
    var arrow = $(".arrow");
    var tutup = $(".tutup");
    var menuOpen;

    
    function openMenu(){
      menu.css("left", "0px");
      tutup.css("left", "88%");
      menuOpen = true;
    }
    
    function closeMenu(){
      menu.css("left", "-450px");
      tutup.css("left", "-10%");
      menuOpen = false;
    }
    
    function toggleMenu(){
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
   
    
    hamburgermobile.on({
      click: function(){
        toggleMenu();
      }
    })


    tutup.on({
      click: function(){
        toggleMenu();
      }
    })

    
  
  });