var myUI = {
	init: () => {
		var dH = createEle("div"),
		    header = createEle("header"),
		    section = createEle("section"),
		    footer = createEle("footer");
        
        header.innerHTML = "THE MASK SITE";
        
        section.innerHTML = "-THE MASK SECTION-";

        footer.innerHTML = "n   EHAWK 2019 LLC";


        dH.append(header);
        dH.append(section);
        dH.append(footer);

		dvContain.append(dH); 
	}
};
window.onload = () => {
	myUI.init();
};