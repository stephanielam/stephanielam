$(function(){
  console.log("jquery");
  $('#renadrone').click(function(){
    window.location = 'https://renadrone.herokuapp.com/drones';
  });

  $('#kairos').click(function(){
    window.location = 'https://github.com/stephanielam/kairos';
  });

  $('#bhmm').click(function(){
    window.location = 'https://bhmm_lighthouse.mooo.com/locations';
  });

  $('#cashout').click(function(){
    window.location = 'http://cash-out.herokuapp.com/';
  });
});