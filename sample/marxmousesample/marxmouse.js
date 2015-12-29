var x = 0
var y = 0
var shot = 0

function move(keys) {
	if (keys.keyCode == 119) {
	y = y - 1
	document.getElementById("doctormilhouse").style.top = y + "%"
	}
	else if (keys.keyCode == 97) {
	x = x - 1
	document.getElementById("doctormilhouse").style.left = x + "%"
	}
	else if (keys.keyCode == 115) {
	y = y + 1
	document.getElementById("doctormilhouse").style.top = y + "%"
	}
	else if (keys.keyCode == 100) {
	x = x + 1
	document.getElementById("doctormilhouse").style.left = x + "%"
	}
	else if (keys.keyCode == 117) {
	shoot()
	}
	else if (keys.keyCode == 118) {
	shoot()
	}
}

//bullet image variable; shoot function that creates bullet image; bulletshot function that moves bullet; bullet

function shoot() {
	var bullet = document.createElement("IMG");
	bullet.setAttribute("src", "images/bullet.jpg");
	bullet.setAttribute("id", "bullet");
	bullet.setAttribute("style", "position: fixed; left: " + x);
	bullet.setAttribute("width", "1%");
	bullet.setAttribute("height", "1%");
	document.body.appendChild(bullet);
	shotx = x
	shoty = y
	bulletshoot();
	}
	

function bulletshoot() {
	shotx = shotx + 1
	document.getElementById("bullet").style.left = shotx + "%"
	document.getElementById("bullet").style.top = shoty + "%"
	setTimeout(function(){bulletshoot()},100)
	if (shotx >= x + 50) {
		document.getElementById("bullet").remove();
		shotx = 0
		}
	else if (shoty >= 50) {
		document.getElementById("bullet").remove();
		shoty = 0
		}
	}
