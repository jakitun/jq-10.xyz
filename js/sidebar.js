$(document).ready(function(){
  
    var menu = $(".menu");
    var hamburger = $(".hamburger");
    var arrow = $(".arrow");
    var menuOpen;
    
    function openMenu(){
      menu.css("left", "0px");
      menuOpen = true;
    }
    
    function closeMenu(){
      menu.css("left", "-450px");
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
    
    arrow.on({
      click: function(){
        toggleMenu();
      }
    })
    
    
  
  });