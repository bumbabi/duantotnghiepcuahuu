const bookInput = document.getElementById("bookInput");
const suggestions = document.getElementById("suggestions");

// Gợi ý sách khi nhập vào ô tên sách
bookInput.addEventListener("input", () => {
	const inputValue = bookInput.value.toLowerCase();
	suggestions.innerHTML = "";

	if (!inputValue) {
		suggestions.style.display = "none";
		return;
	}

	const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
	const availableBooks = bookList.filter((book) => Number(book.quantity) > 0);

	const matches = availableBooks.filter((book) =>
		book.title.toLowerCase().includes(inputValue)
	);

	if (matches.length > 0) {
		suggestions.style.display = "block";
		matches.forEach((book) => {
			const div = document.createElement("div");
			div.textContent = `${book.title} - ${book.author} (Còn: ${book.quantity})`;
			div.dataset.title = book.title;
			suggestions.appendChild(div);
		});
	} else {
		suggestions.style.display = "none";
	}
});

// Khi chọn gợi ý
suggestions.addEventListener("click", (e) => {
	if (e.target.dataset.title) {
		bookInput.value = e.target.dataset.title;
		suggestions.innerHTML = "";
		suggestions.style.display = "none";
	}
});

// Xử lý form mượn sách
document.getElementById("borrowForm").addEventListener("submit", function (e) {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const bookTitle = document.getElementById("bookInput").value;
	const returnDate = document.getElementById("returnDate").value;
	const borrowDate = new Date().toISOString().split("T")[0];

	const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
	const bookIndex = bookList.findIndex((book) => book.title === bookTitle);

	if (bookIndex === -1 || bookList[bookIndex].quantity <= 0) {
		alert("Sách này đã hết hoặc không tồn tại!");
		return;
	}

	// Trừ số lượng sách
	bookList[bookIndex].quantity -= 1;
	localStorage.setItem("bookList", JSON.stringify(bookList));

	// Kiểm tra người dùng đang đăng nhập hay không
	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	const status = currentUser ? "đang chờ duyệt" : "đang mượn";

	const borrowList = JSON.parse(localStorage.getItem("borrowList")) || [];
	borrowList.push({
		name,
		email,
		phone,
		bookTitle,
		borrowDate,
		returnDate,
		status,
		username: currentUser ? currentUser.username : "",
	});

	localStorage.setItem("borrowList", JSON.stringify(borrowList));

	alert("Mượn sách thành công!");
	this.reset();
	suggestions.innerHTML = "";
	suggestions.style.display = "none";
});
