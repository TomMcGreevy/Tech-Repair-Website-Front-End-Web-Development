//Open / close for mobile navbar
let mobilenavbutton = document.getElementById("hamburgerwrapper");
mobilenavbutton.onclick = function() {
	let mobilenav = document.getElementById("mobilenav");
	if (mobilenav.style.transform == "scale(1)") {
		mobilenav.style.animation = "slideup 0.75s"
		mobilenav.style.transform = "scale(0)"
	} else {
		mobilenav.style.animation = "slidedown 0.75s"
		mobilenav.style.transform = "scale(1)"
	}
}

// Nav bar sticky after scroll
let nav = document.getElementById("nav");
let sticky = nav.offsetTop;
window.onscroll = function() {
	if (window.pageYOffset >= sticky) {
		nav.classList.add("sticky")
	} else {
		nav.classList.remove("sticky");
	}
}

//Tables on repairs page
if (document.getElementById('applelogo') != null) {
	clicktoshowtable(document.getElementById('applelogo'), document.getElementById('appletable'))
	clicktoshowtable(document.getElementById('huaweilogo'), document.getElementById('huaweitable'))
	clicktoshowtable(document.getElementById('samsunglogo'), document.getElementById('samsungtable'))
	clicktoshowtable(document.getElementById('phonelogo'), document.getElementById('phonetable'))
	clicktoshowtable(document.getElementById('computerlogo'), document.getElementById('computertable'))
}

function clicktoshowtable(logodiv, table) {
	logodiv.onclick = function() {
		if (table.style.transform == "scale(0)" || table.style.transform == "") {
			table.style.transform = "scale(1)";
			table.style.height = "100%";
			table.classList.add("downfade")
			table.classList.remove("upfade")

		} else {
			table.style.transform = "scale(0)";
			table.style.height = "0";
			table.classList.remove("downfade")
			table.classList.add("upfade")
		}
	}
}

// Google Maps API integration
var map;
// Map options
var options = {
	zoom: 17,
	center: {
		lat: 52.628494,
		lng: -1.156594
	},
	disableDefaultUI: true
}

// Initialise map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position: {
			lat: 52.628494,
			lng: -1.156594
		},
		map: map,
		icon: {
			url: "https://webstockreview.net/images/pc-clipart-computer-tech-2.png",
			scaledSize: new google.maps.Size(50, 50)
		},
		animation: google.maps.Animation.BOUNCE
	})

	var infoString = '<div id=infostring>' + '<div>' + '<h1 id=maptitle>CheapFixUK</h1>' + '<p>149 Barclay Street<br />' + 'Leicester<br />' + 'Leicestershire<br />' + 'LE3 0JE<br /></p>' + '</div>' + '</div>'
	var information = new google.maps.InfoWindow({
		content: infoString
	})
	marker.addListener('click', function() {
		information.open(map, marker);
	})

}