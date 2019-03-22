var myUI = {
	init: () => {
		var dH = createEle("div"),
		    header = createEle("header"),
		    section = createEle("section"),
		    footer = createEle("footer"),
		    navBar = createEle("div"),
		    mainArea = createEle("div");
        
        navBar.className = "navBar";
        myUI.generateNavItems(navBar);
        
        mainArea.className = "mainArea";
        myUI.generateMainItems(mainArea);

        header.innerHTML = "THE SITE";
        
        section.append(navBar);
        section.append(mainArea);

        footer.innerHTML = "EHAWK LLC &copy; 2019";

        dH.append(header);
        dH.append(section);
        dH.append(footer);

		dvContain.append(dH); 
	},
	generateNavItems: (navBar) => {
		for (var i = 0; i < 5; i++) {
			var btns = createEle("button");
			btns.className = "navBtns";
			btns.id = "navBtn_" + i;
			btns.innerHTML = navText[i];
			btns.onclick = myUI.doNavFunction(btns, i);

            navBar.append(btns);
		}
	},
	generateMainItems: (mainArea) => {
		var item1 = createEle("div");

		item1.className = "mainItems";
		item1.innerHTML = homePage[0];

        mainArea.append(item1);
	},
	doNavFunction: (btns, i) => {
		return () => {

	}
};
window.onload = () => {
	myUI.init();
};
window.onresize = () => {
	location.reload();
};