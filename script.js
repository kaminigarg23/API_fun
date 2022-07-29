//console.log("hello");

var request = new XMLHttpRequest();
request.open ('GET','https://api.giphy.com/v1/gifs/random?api_key=EDeJ9wMqW8o4gfJrd97SIssKWC3lTW4S&tag=rabbit&rating=g'); 
request.onload = function() {
var response = request.response;
var parseData = JSON.parse(response);
console.log(parseData);
var originalUrl = parseData.data.images.original.url;
console.log(originalUrl);

var Images = document.createElement('img')
Images.setAttribute('src', originalUrl);
document.body.appendChild(Images);
// for(item in parseData) {
//     var name = parseData[item].name;
//     var products = document.createElement('li')
//     products.innerHTML = name;
//     document.body.appendChild(products);

//     var imageUrl = parseData[item].image;
//     var Images = document.createElement('img')
//     Images.setAttribute('src', imageUrl);
//     document.body.appendChild(Images);
// }




}
request.send();