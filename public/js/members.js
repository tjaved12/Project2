$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
 $.get("/api/user_data").then(function(data) {
   $(".member-name").text(data.email);
  });



$.get('/api/user_diet').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast").text(data[0].breakfast);
  $(".diet-lunch").text(data[0].lunch);
  $(".diet-dinner").text(data[0].dinner)
});


$.get('/api/user_diet2').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast2").text(data[0].breakfast);
  $(".diet-lunch2").text(data[0].lunch);
  $(".diet-dinner2").text(data[0].dinner)
});

$.get('/api/user_diet3').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast3").text(data[0].breakfast);
  $(".diet-lunch3").text(data[0].lunch);
  $(".diet-dinner3").text(data[0].dinner)
});

$.get('/api/user_diet4').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast4").text(data[0].breakfast);
  $(".diet-lunch4").text(data[0].lunch);
  $(".diet-dinner4").text(data[0].dinner)
});

$.get('/api/user_diet5').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast5").text(data[0].breakfast);
  $(".diet-lunch5").text(data[0].lunch);
  $(".diet-dinner5").text(data[0].dinner)
});

$.get('/api/user_diet6').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast6").text(data[0].breakfast);
  $(".diet-lunch6").text(data[0].lunch);
  $(".diet-dinner6").text(data[0].dinner)
});

$.get('/api/user_diet7').then(function(data){
  console.log("diet", data)
  $(".diet-breakfast7").text(data[0].breakfast);
  $(".diet-lunch7").text(data[0].lunch);
  $(".diet-dinner7").text(data[0].dinner)
});

});
