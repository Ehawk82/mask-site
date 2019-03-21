var myUI = {
	init: () => {
		var dH = createEle("div"),
		    header = createEle("header"),
		    section = createEle("section"),
		    footer = createEle("footer"),
		    navBar = createEle("div"),
		    mainArea = createEle("div");
        
        navBar.className = "navBar";
        
        mainArea.className = "mainArea";

        header.innerHTML = "THE SITE";
        
        section.append(navBar);
        section.append(mainArea);

        footer.innerHTML = "EHAWK LLC &copy; 2019";

        dH.append(header);
        dH.append(section);
        dH.append(footer);

		dvContain.append(dH); 
	}
};
window.onload = () => {
	myUI.init();
};