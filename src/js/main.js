var myUI;

myUI = {
	init: () => {
		var dH = createEle("div"),
		    header = createEle("header"),
		    section = createEle("section"),
		    footer = createEle("footer"),
		    navBar = createEle("nav"),
		    mainArea = createEle("div"),
		    ads = createEle("aside");
        
        ads.innerHTML = "ADS GO HERE";

        navBar.className = "navBar";
        
        mainArea.className = "mainArea";

        header.innerHTML = "HOLO-EX";

        myUI.generateMainItems(mainArea);

        myUI.generateNavItems(navBar, mainArea);
        
        section.append(navBar);
        section.append(mainArea);
        section.append(ads);

        footer.innerHTML = "EHAWK LLC &copy; 2019";

        dH.append(header);
        dH.append(section);
        dH.append(footer);

		dvContain.append(dH); 
	},
	generateNavItems: (navBar, mainArea) => {
		for (var i = 0; i < 5; i++) {
			var btns = createEle("button"),
			    ele = navText[i].toLowerCase() + "PageBtn";
			btns.className = "navBtns";
			btns.id = ele;
			btns.innerHTML = navText[i];
			btns.onclick = myUI.doNavFunction(btns, i, mainArea);

            navBar.append(btns);
		}
	},
	generateMainItems: (mainArea) => {
		var item1 = createEle("div");

		item1.className = "mainItems";
		item1.innerHTML = homePage[0] + homePage[1] + homePage[2] + homePage[3] + homePage[4] + homePage[5];

        mainArea.append(item1);
        setTimeout(() => {
			    makeFull(mainArea);
	    }, 200);
	},
	doNavFunction: (btns, i, mainArea) => {
		return () => {

			takeFull(mainArea);
		
			var mainItems = bySel(".mainItems"), x;

			if (i === 0) {
				x = homePage;
			}
            if (i === 1) {
				x = shopPage;
			}
			if (i === 2) {
				x = designPage;
			}
			if (i === 3) {
				x = contactPage;
			}
			if (i === 4) {
				x = aboutPage;
			}
			setTimeout(() => {
				mainItems.innerHTML = x[0] + x[1] + x[2] + x[3] + x[4] + x[5];
				
				if (i === 0) {
				}
	            if (i === 1) {
				}
				if (i === 2) {
					
				}
				if (i === 3) {
					
				}
				if (i === 4) {
				}		
			}, 530);
			setTimeout(() => {
				if (mainArea.className === "mainArea_full") {
                /*err check on time for className change*/
				} else {
                    makeFull(mainArea);
				}
			}, 500);
	    }
    }
};

window.onload = () => {
	myUI.init();
};