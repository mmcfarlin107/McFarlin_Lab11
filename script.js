$(document).ready(function(){

$.get('https://www.reddit.com/r/aww/.json',function(x){

  console.log(x.data.children[1].data.title);

  var payload = x.data.children;

  payload.forEach(function(item){

$('body').append('<div><h3>' + item.data.title + '</h3><img src=' + item.data.thumbnail + '><p>' + item.data.author + '</p></div>');
  });




});
// closure for document.ready
});
