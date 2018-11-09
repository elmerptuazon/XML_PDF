"use strict";

var click = document.getElementById('SubmitForm');
click.addEventListener('click', function(e) {
	e.preventDefault();
	var template = "<?xml version=1.0?>\n<formData>";
	var form = document.getElementById('book').elements;
	var i;
	//***GET ALL INPUT DATA
	for(i=0;i<form.length;i++) {
		var elem = form[i];
		if(elem.tagName == 'INPUT') {
			template += "\n<" + elem.name + ">\n" + elem.value + "\n</" + elem.name + ">\n";
		}
	}
	template += "</formData>";
	document.getElementById('SubmitPDF').disabled = false;
	//***OPEN WINDOW FOR SAVING XML FILE
	var blob = new Blob([template], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "Sample.xml");
}, false);


var clickpdf = document.getElementById('SubmitPDF');
clickpdf.addEventListener('click', function(e) {
	e.preventDefault();
	var doc = new jsPDF();
	var arr = [];
	var title = document.getElementById('form_title').value;
	var author = document.getElementById('form_author').value;
	var desc = document.getElementById('form_description').value;
	arr = ['Title: ' + title, 'Author: ' + author, 'Description: ' + desc];
	doc.text(arr, 10, 10);
	doc.save(title + '.pdf');
}, false);