$('.content').hide();

$(".link").click(function(){$('.content').show();});

$(".close-classic").click(function(){
  $(".content").slideUp("slow");
  $('.close-box').hide("slow");
});


$(".link").click(function() {
$(".content-container").css({"top":"20%"});
});


$("#link-1").click(function(){
  $("#content-1").slideToggle("slow");
  $('.close-box').show("slow");
  $("#content-2").slideUp("slow");
  $("#content-3").slideUp("slow");
  $("#content-4").slideUp("slow");
  $("#content-5").slideUp("slow");
  });

$("#link-2").click(function(){
  $("#content-2").slideToggle("slow");
  $('.close-box').show("slow");
  $("#content-1").slideUp("slow");
  $("#content-3").slideUp("slow");
  $("#content-4").slideUp("slow");
  $("#content-5").slideUp("slow");
  });

$("#link-3").click(function(){
  $("#content-3").slideToggle("slow");
  $('.close-box').show("slow");
  $("#content-2").slideUp("slow");
  $("#content-1").slideUp("slow");
  $("#content-4").slideUp("slow");
  $("#content-5").slideUp("slow");
  });

$("#link-4").click(function(){
  $("#content-4").slideToggle("slow");
  $('.close-box').show("slow");
  $("#content-2").slideUp("slow");
  $("#content-3").slideUp("slow");
  $("#content-1").slideUp("slow");
  $("#content-5").slideUp("slow");
  });

$("#link-5").click(function(){
  $("#content-5").slideToggle("slow");
  $('.close-box').show("slow");
  $("#content-2").slideUp("slow");
  $("#content-3").slideUp("slow");
  $("#content-4").slideUp("slow");
  $("#content-1").slideUp("slow");
  });


$(".scroller").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
























google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
var mapOptions = {
center: new google.maps.LatLng(48.8645,2.332605),
zoom: 14,
zoomControl: true,
zoomControlOptions: {
style: google.maps.ZoomControlStyle.DEFAULT,
},
disableDoubleClickZoom: true,
mapTypeControl: true,
mapTypeControlOptions: {
style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
},
scaleControl: true,
scrollwheel: false,
panControl: true,
streetViewControl: true,
draggable : true,
overviewMapControl: true,
overviewMapControlOptions: {
opened: false,
},
mapTypeId: google.maps.MapTypeId.ROADMAP,
}
var mapElement = document.getElementById("demodemo");
var map = new google.maps.Map(mapElement, mapOptions);
var locations = [
['Demo Business', 'Demo lorepsum dollor sit amet.', '01.45.45.45.45', 'demo@demo.com', 'demo.com', 48.8628903, 2.3357052, 'https://mapbuildr.com/assets/img/markers/default.png']
];
for (i = 0; i < locations.length; i++) {
if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
marker = new google.maps.Marker({
icon: markericon,
position: new google.maps.LatLng(locations[i][5], locations[i][6]),
map: map,
title: locations[i][0],
desc: description,
tel: telephone,
email: email,
web: web
});
bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web);
 }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web) {
if (web.substring(0, 7) != "http://") {
link = "http://" + web;
} else {
link = web;
}
  var infoWindowVisible = (function () {
  var currentlyVisible = false;
  return function (visible) {
  if (visible !== undefined) {
  currentlyVisible = visible;
  }
  return currentlyVisible;
   };
   }());
   iw = new google.maps.InfoWindow();
   google.maps.event.addListener(marker, 'click', function() {
   if (infoWindowVisible()) {
   iw.close();
   infoWindowVisible(false);
   } else {
   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:250px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
   iw = new google.maps.InfoWindow({content:html});
   iw.open(map,marker);
   infoWindowVisible(true);
   }
});
google.maps.event.addListener(iw, 'closeclick', function () {
infoWindowVisible(false);
});
 }
}