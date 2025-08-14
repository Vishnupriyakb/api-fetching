const body = document.getElementsByTagName("body");

const card = document.createElement("div");
card.setAttribute("class","card");

const cardbody = document.createElement("div");
cardbody.setAttribute("class","card-body");

const img = document.createElement("img");
img.setAttribute("src","https://i.redd.it/fcnh4ty49i791.png");
img.setAttribute("height","560px");
img.setAttribute("width","380px");

cardbody.appendChild(img);
card.appendChild(cardbody);
body[0].appendChild(card);
