$(".first_task").css("fontWeight", "bold");
$(".first_task").css("color", "#112233");
$(".first_task").css("fontSize", "15px");
$(document).ready(function(){
	$("input").attr("disabled", "disabled");
});
$("a").prepend("↗");
$("a").attr("target", "_blank");

function reloadPage() {
	let p = document.createElement("p");
	$(p).load("https://inxaoc.github.io/example/ajax-1.html");
	document.body.appendChild(p);
}

$("table").css("border", "3px solid black");
$("td").css("border", "2px dashed red");
$(".btnInTable").css("width", "100%")
$(".prgInTable").css("fontWeight", "bold");
$(".prgInTable").css("fontSize", "15px");

function toggle(i) {
	$(".prgInTable").eq(i).toggle(1000);
}

function fadeToggle(i) {
	$(".prgInTable").eq(i).fadeToggle(1000);
}

function animateFont(i) {
	$(".prgInTable").eq(i).animate({fontSize: "20px"});
	$(".prgInTable").eq(i).animate({fontSize: "15px"});
}

function slideToggle(i) {
	$(".prgInTable").eq(i).slideToggle(1000);
}

function opacityAnimation(i) {
	$(".prgInTable").eq(i).animate({opacity: "0"}, 1000);
	$(".prgInTable").eq(i).animate({opacity: "1"}, 1000);
}

function getJSON(){
	$.getJSON("https://inxaoc.github.io/example/ajax.json", function(data) {
		let ulMain = document.createElement("ul");
		function jsonToList(obj,curUl) {
			for (let key in obj) {
				let li = document.createElement("li");
				let item = key + " : ";
				li.innerHTML = item;
				curUl.appendChild(li);
				if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
					let ul = document.createElement("ul");
					jsonToList(obj[key],ul);
					curUl.appendChild(ul);
				} else {
					item += obj[key];
					li.innerHTML = item;
				}
			}
		}
		jsonToList(data, ulMain);
		document.body.appendChild(ulMain);
	});
}