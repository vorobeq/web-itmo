let string = "Андрей Гриценко учусь в итмо";
document.write(string, "</br>");
document.write("Количество слов = ", string.split(" ").length, "</br>");
document.write("Количество букв = ", string.length - string.split(" ").length + 1, "</br>");
document.write("URL = ", document.location.href, "</br>");
document.write("Protocol = ", document.location.protocol, "</br>");
document.write("Name = ", document.location.pathname.split(".")[0], "</br>");
document.write("Extention = ", document.location.pathname.split(".")[1], "</br>");
let Parametrs = window.location.search.replace( '?', '');
document.write("Substring parametrs:", Parametrs, "</br>");
let count = 0;
links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		count++;
	}
}
document.write("Anchors = ", count, "</br>");
document.write("Links = ", links.length, "</br>");
for (i = 0; i < links.length; i++) {
	if (links[i].getAttribute('href')[0] == "#") {
		document.write("First anchor = ", links[i].innerHTML, "</br>");
		break;
	}
}
images = document.getElementsByTagName("img");
document.write("Images = ", images.length, "</br>");
document.write("Width first img = ", images[0].getAttribute('width'), "</br>");
let maxWidth = 0;
for (i = 0; i < images.length; i++) {
	if (maxWidth < +images[i].getAttribute('width')) {
		maxWidth = +images[i].getAttribute('width');
	}
}
document.write("Max width = ", maxWidth, "</br>");
let imagesHeightAdd = 0;
for (i = 0; i < images.length; i++) {
	imagesHeightAdd += +images[i].getAttribute('height');
}
document.write("imagesHeightAdd = ", imagesHeightAdd, "</br>");
forms = document.getElementsByTagName("form");
document.write("Even forms = ");
for (i = 0; i < forms.length; i++) {
	if (((i + 1) % 2) == 0) {
		document.write(forms[i].getAttribute('name'), ", ");
	}
}
function onClickButton(j) {
	for (i = 0; i < forms[j].childNodes.length; i++) {
		if ((forms[j].childNodes[i].tagName == "BUTTON") && (forms[j].childNodes[i].innerHTML == "Show the form name")) {
			alert(forms[j].childNodes[i].innerHTML);
			break;
		}
	}
	return false;
}
function formID (j) {
	alert (forms[j].getAttribute('id'));
	return false;
}
function reset (j) {
	forms[j].reset();
}
function quantityInputs(j) {
	let qInputs = 0;
	for (i = 0; i < forms[j].childNodes.length; i++) {
		if (forms[j].childNodes[i].tagName == "INPUT") {
			qInputs++;
		}
	}
	alert (qInputs);
	return false;
}
function tableCreate() {
	let tbl = document.createElement("table");
  	tbl.border = 1;
	let lastLinks = [];
	for (i = 0; i < links.length; i++) {
		if (links[i].getAttribute('class') == "LastTask") {
			lastLinks.push(links[i]);
		}
	}
	let set = new Set();
	for (i = 0; i < lastLinks.length; i++) {
		set.add(lastLinks[i].innerHTML);
	}
	for (let item of set) {
		let tr = tbl.insertRow(item.number);
		for (j = 0; j < 3; j++) {
			let td = tr.insertCell(j);
			switch(j) {
				case 0:
				td.innerHTML = String(item);
				break;
				case 1:
				td.innerHTML = quantity(1, item, lastLinks);
				break;
				case 2:
				td.innerHTML = quantity(2, item, lastLinks);
				break;
			}
		}
	}
	document.body.appendChild(tbl);
}
function quantity(number, item, lastLinks) {
	let arr = [];
	let count = 0;
	for (i = 0; i < lastLinks.length; i++) {
		if (lastLinks[i].innerHTML == item) {
			count++;
			arr.push(lastLinks[i].getAttribute('href'));
		}
	}
	if (number == 1) {
		return count;
	} else {
		return arr;
	}

}