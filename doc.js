document.addEventListener("DOMContentLoaded", function() {

    function updateObjectData() {
		
		var pageElements = document.querySelectorAll('.page');
		
		
		pageElements.forEach(function(element) {
			element.style.display = 'block';
			element.style.marginLeft = 'auto';  // not sure why, but I need this
			element.style.marginRight = 'auto';  // not sure why, but I need this
		});
		
        if (window.outerWidth > 768) {	
			
			document.body.style.background = 'grey';
			
			
			document.getElementById('pdf-container-1').style.display = 'block';
			document.getElementById('pdf-container-2-alt').style.display = 'none';
			document.getElementById('pdf-container-2').style.display = 'none';
			
			
			if (window.outerWidth > 1024) {
				pageElements.forEach(function(element) {element.style.width = 'calc(180mm + 20%)';});  // <---
			} else {
				pageElements.forEach(function(element) {element.style.width = '90%';});  // <---
			}
			
			
			pageElements.forEach(function(element) {
				element.style.marginTop = '3vh';
				element.style.marginBottom = '3vh';
				element.style.boxShadow = '0.2vw 0.3vw 0.2vw 0.3vw #404040';
			});
			
        } else {  // smaller screens
			
			document.body.style.background = 'black';
			
			
            document.getElementById('pdf-container-1').style.display = 'none';
			if (window.outerWidth > 425) {  // not so small
				document.getElementById('pdf-container-2-alt').style.display = 'block';
				document.getElementById('pdf-container-2').style.display = 'none';
			} else {  // smallest
				document.getElementById('pdf-container-2-alt').style.display = 'none';
				document.getElementById('pdf-container-2').style.display = 'block';
			}
			
			
			pageElements.forEach(function(element) {element.style.width = '97.5%';});  // <---
			
			
			pageElements.forEach(function(element) {
				element.style.marginTop = '1vh';
				element.style.marginBottom = '1vh';
				element.style.boxShadow = 'none';
			});
			
        }
		
    }
    
    window.onresize = updateObjectData;
    updateObjectData();

});
