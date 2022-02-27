/*navStuffs*/
navText = ["HOME", "SHOP", "DESIGN", "CONTACT", "ABOUT"];

var line1 = "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";
    line1 += "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";
    line1 += "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";

var line2 = "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";
    line2 += "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";

var line3 = "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";

var lineSale = "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";
    lineSale += "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";
    lineSale += "<img src='./src/assets/logo1.png' onclick='explodeImg(this,body)' />&nbsp;";

/*
mainItems
*MUST HAVE SAME AMOUNT OF ITEMS* 
*/
var homePage = [
	"<h1>HOME</h1>",
	"<p>A CUSTOM MASK DEVELOPER!</p>",
	"<p>100% HANDMADE!</p>",
	"<p>INDIVIDUAL SERVICE!</p>",
	"<p>UNIQUE DESIGNS!</p>",
	"<p>RANDOM DEALS!</p>"
];

var shopPage = [
	"<h1>SHOP</h1>",
	"<p>BROWSE OUR COLLECTION!</p>",
	"<p class='lines'>" + line1 + "</p>",
	"<p class='lines'>" + line2 + "</p>",
	"<p class='lines'>" + line3 + "</p>", 
	"<p class='lines'>" + lineSale + "</p>"
];

var designPage = [
	"<h1>DESIGN</h1>",
	"<p>MAKE YOUR OWN!</p>",
	"<p>DESCRIPTION</p>", 
	"<p><textarea placeholder='PLEASE MAKE A DETAILED EXPLAINATION OF YOUR DESIGN!'></textarea></p>",
	"<p><input placeholder='NAME YOUR MASK!' /></p>", 
	"<p><a>ORDER NOW</a></p>"
];

var contactPage = [
	"<h1>CONTACT US</h1>",
	"<p>If you have any questions, concerns, issues with the site, please use this information to contact the developer.</p>",
	"<p>Be as specific as possible</p>",
	"<p>If your email is regarding an order, please include your order number in the subject line</p>", 
	"<p><a href='tel:+17165638088'>CALL US</a>&nbsp;<a href='mailto:mrehawk82@gmail.com' target='_blank' onclick='window.open('your WS URL');'>SEND EMAIL</a></p>",
	"<p>PLEASE BE PATIENT WHILE OUR TEAM CAN EVALUATE YOUR INPUT AND RESPOND</p>"
];

var aboutPage = [
	"<h1>ABOUT OUR GROUP</h1>",
	"<p>WE ARE A CUSTOM MASK BUSINESS</p>",
	"<p>WE CAN MAKE NEARLY ANYTHING</p>", 
	"<p>WE OFFER FAIR PRICING</p>", 
	"<p>WE WILL CONTACT YOU WHEN YOUR MASK IS READY</p>",
	"<p>WE OFFER AVAILABLE IN-STOCK MASKS AT A DISCOUNT</p>"
];
//

const explodeImg = (x,body) => {
	var newThingy = createEle("img"),
	    newThingyContainer = createEle("div"),
	    xOut = createEle("span");

	//
	xOut.innerHTML = "X";
	xOut.onclick = doDelete(newThingyContainer);
	xOut.className = "xOut";

	newThingy.innerHTML = "&nbsp;";
	newThingy.className = "newThingy";
	newThingy.src = x.src;

	newThingyContainer.className = "newThingyContainer";
	newThingyContainer.append(newThingy,xOut);

	body.append(newThingyContainer);
};
const doDelete = (x) => {
	return () => {
		x.remove();
	}
};