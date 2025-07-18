const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
	alert("Bạn chưa đăng nhập!");
	window.location.href = "nguoidung.html";
} else {
	document.getElementById("welcome").textContent = `Xin chào, ${
		currentUser.username || "người dùng"
	}!`;
}

function logout() {
	localStorage.removeItem("currentUser");
	alert("Bạn đã đăng xuất.");
	window.location.href = "nguoidung.html";
}
