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

        footer.innerHTML = "EHAWK 2019 LLC";

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
		var mainAreaStuff = createEle("div");

		mainAreaStuff.className = "mainAreaStuff";
		mainAreaStuff.innerHTML = "jdfhsdaf";

		mainArea.append(mainAreaStuff);
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