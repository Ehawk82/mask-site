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

            navBar.append(btns);
		}
	},
	generateMainItems: (mainArea) => {
        mainArea.innerHTML = "test";
	}
};
window.onload = () => {
	myUI.init();
};