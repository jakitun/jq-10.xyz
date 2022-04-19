$(document).ready(function(){
  
    var menu = $(".menu");
    var hamburger = $(".hamburger");
    var arrow = $(".arrow");
    var tutup = $(".tutup");
    var menuOpen;

    
    function openMenu(){
      menu.css("left", "0px");
      tutup.css("left", "90%");
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
   
    hamburger.on({
      mouseenter: function(){
        openMenu();
      }
    });
    
    menu.on({
      mouseleave: function(){
        closeMenu();
      }
      
    });
    
    hamburger.on({
      click: function(){
        toggleMenu();
      }
    })


    tutup.on({
      click: function(){
        toggleMenu();
      }
    })


    arrow.on({
      mouseenter: function(){
        openMenu();
      }
    });
    
    menu.on({
      mouseleave: function(){
        closeMenu();
      }
      
    });
    
    
    
  
  });