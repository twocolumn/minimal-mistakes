$(document).ready(function(){
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results && results[1] || 0;
  }
});
