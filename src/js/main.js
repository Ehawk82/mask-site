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
        var navToggleBtn = createEle("button");
        
        navToggleBtn.innerHTML = "&#9776;";
        navToggleBtn.className = "navToggleBtn";
        navToggleBtn.onclick = myUI.navToggleFunc(navToggleBtn, navBar);

        navBar.append(navToggleBtn);
	},
	generateMainItems: (mainArea) => {
		var mainAreaStuff = createEle("div"),
		    mainAreaStuff2 = createEle("div"),
		    mainAreaStuff3 = createEle("div");

        mainAreaStuff3.className = "mainAreaStuff3";
		mainAreaStuff3.innerHTML = "&nbsp;";

		mainAreaStuff2.className = "mainAreaStuff2";
		mainAreaStuff2.innerHTML = "This is the area for secondary stuffs";

		mainAreaStuff.className = "mainAreaStuff";
		mainAreaStuff.innerHTML = "This is the area for primary stuffs";

		mainArea.append(mainAreaStuff);
		mainArea.append(mainAreaStuff2);
		mainArea.append(mainAreaStuff3);

	},
	navToggleFunc: (navToggleBtn, navBar) => {
		return () => {
			if (navBar.className === "navBar") {
				makeFull(navBar);
				makeFull(navToggleBtn);
			}else if (navBar.className === "navBar_full") {
				takeFull(navBar);
				takeFull(navToggleBtn);
			}
		}
	}
};
window.onload = () => {
	myUI.init();
};