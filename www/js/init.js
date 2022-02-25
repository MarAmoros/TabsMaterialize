(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs({"swipeable": true});



  }); // end of document ready
})(jQuery); // end of jQuery name space

// Arxiu init.js + index.js
 
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}