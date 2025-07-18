function switchForm(type) {
	document.getElementById("loginForm").style.display =
		type === "login" ? "block" : "none";
	document.getElementById("registerForm").style.display =
		type === "register" ? "block" : "none";
}

function handleRegister() {
	const username = document.getElementById("registerUsername").value;
	const email = document.getElementById("registerEmail").value;
	const password = document.getElementById("registerPassword").value;
	const confirm = document.getElementById("registerConfirm").value;

	if (!username || !email || !password || !confirm) {
		alert("Vui lòng điền đầy đủ thông tin.");
		return;
	}

	if (password !== confirm) {
		alert("Mật khẩu không khớp.");
		return;
	}

	const users = JSON.parse(localStorage.getItem("users") || "[]");
	const exists = users.find(
		(u) => u.username === username || u.email === email
	);

	if (exists) {
		alert("Tên đăng nhập hoặc email đã tồn tại.");
		return;
	}

	users.push({ username, email, password });
	localStorage.setItem("users", JSON.stringify(users));
	alert("Đăng ký thành công! Vui lòng đăng nhập.");
	switchForm("login");
}

function handleLogin() {
	const username = document.getElementById("loginUsername").value;
	const password = document.getElementById("loginPassword").value;

	const users = JSON.parse(localStorage.getItem("users") || "[]");
	const found = users.find(
		(u) => u.username === username && u.password === password
	);

	if (found) {
		localStorage.setItem(
			"currentUser",
			JSON.stringify({
				username: found.username,
				email: found.email,
			})
		);
		alert("Đăng nhập thành công!");
		window.location.href = "giaodiennguoidung.html";
	} else {
		alert("Sai tên đăng nhập hoặc mật khẩu.");
	}
}
