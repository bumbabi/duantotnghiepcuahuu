const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
const borrowList = JSON.parse(localStorage.getItem("borrowList")) || [];
const input = document.getElementById("bookTitle");
const suggestionsBox = document.getElementById("suggestions");

// Gợi ý sách
input.addEventListener("input", () => {
	const value = input.value.toLowerCase();
	suggestionsBox.innerHTML = "";
	if (!value) return;

	const matches = bookList.filter((book) =>
		book.title.toLowerCase().includes(value)
	);

	if (matches.length === 0) {
		const div = document.createElement("div");
		div.textContent = "Không tìm thấy sách.";
		div.style.padding = "8px";
		div.style.color = "gray";
		suggestionsBox.appendChild(div);
		return;
	}

	matches.forEach((book) => {
		const div = document.createElement("div");
		div.classList.add("suggestion-item");
		div.textContent = `${book.title} - ${book.author} (Còn: ${book.quantity})`;
		div.addEventListener("click", () => {
			input.value = book.title;
			suggestionsBox.innerHTML = "";
		});
		suggestionsBox.appendChild(div);
	});
});

// Ẩn gợi ý khi click ra ngoài
document.addEventListener("click", (e) => {
	if (!e.target.closest(".relative")) {
		suggestionsBox.innerHTML = "";
	}
});

// Gán min cho ô ngày trả
document.addEventListener("DOMContentLoaded", () => {
	const returnDateInput = document.getElementById("returnDate");
	const today = new Date().toISOString().split("T")[0];
	returnDateInput.setAttribute("min", today);
});

// Hàm mượn sách
function borrowBook() {
	const name = document.getElementById("name").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const email = document.getElementById("email").value.trim();
	const bookTitle = input.value.trim();
	const returnDate = document.getElementById("returnDate").value;
	const borrowDate = new Date().toISOString().split("T")[0];

	if (!name || !phone || !email || !bookTitle || !returnDate) {
		alert("Vui lòng nhập đầy đủ thông tin.");
		return;
	}

	const today = new Date();
	const selectedReturnDate = new Date(returnDate);
	if (selectedReturnDate <= today) {
		alert("Ngày trả phải lớn hơn hôm nay.");
		return;
	}

	const bookIndex = bookList.findIndex((b) => b.title === bookTitle);
	if (bookIndex === -1) {
		alert("Không tìm thấy sách trong thư viện.");
		return;
	}

	if (bookList[bookIndex].quantity <= 0) {
		alert("Sách đã hết.");
		return;
	}

	const alreadyBorrowed = borrowList.find(
		(b) =>
			b.email === email && b.bookTitle === bookTitle && b.status !== "đã trả"
	);
	if (alreadyBorrowed) {
		alert("Bạn đã mượn sách này và chưa trả.");
		return;
	}

	bookList[bookIndex].quantity--;
	localStorage.setItem("bookList", JSON.stringify(bookList));

	borrowList.push({
		name,
		email,
		phone,
		bookTitle,
		borrowDate,
		returnDate,
		status: "đang chờ duyệt",
	});

	localStorage.setItem("borrowList", JSON.stringify(borrowList));

	alert(`Mượn sách thành công!\nSách: ${bookTitle}\nTrả trước: ${returnDate}`);
	document.querySelectorAll("input").forEach((i) => (i.value = ""));
	suggestionsBox.innerHTML = "";
}
