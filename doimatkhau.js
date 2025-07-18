function changePassword() {
	const oldPass = document.getElementById("oldPassword").value;
	const newPass = document.getElementById("newPassword").value;
	const confirmPass = document.getElementById("confirmPassword").value;

	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	const users = JSON.parse(localStorage.getItem("users") || "[]");

	if (!currentUser) {
		alert("Bạn chưa đăng nhập.");
		return;
	}

	const userIndex = users.findIndex((u) => u.username === currentUser.username);

	if (userIndex === -1) {
		alert("Tài khoản không tồn tại.");
		return;
	}

	if (users[userIndex].password !== oldPass) {
		alert("Mật khẩu hiện tại không đúng.");
		return;
	}

	if (!newPass || !confirmPass) {
		alert("Vui lòng nhập đầy đủ mật khẩu mới.");
		return;
	}

	if (newPass !== confirmPass) {
		alert("Mật khẩu mới không khớp.");
		return;
	}

	users[userIndex].password = newPass;
	localStorage.setItem("users", JSON.stringify(users));

	alert("Đổi mật khẩu thành công!");
	window.location.href = "giaodiennguoidung.html";
}
