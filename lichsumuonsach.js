let borrowList = JSON.parse(localStorage.getItem("borrowList")) || [];
const tbody = document.getElementById("historyBody");

function isOverdue(dateStr) {
	const today = new Date();
	const returnDate = new Date(dateStr);
	const diffDays = Math.floor((returnDate - today) / (1000 * 60 * 60 * 24));
	return diffDays < 0;
}

function calculateDaysLeft(dateStr) {
	const today = new Date();
	const returnDate = new Date(dateStr);
	const diffDays = Math.ceil((returnDate - today) / (1000 * 60 * 60 * 24));
	return diffDays >= 0 ? `${diffDays} ngày` : "Đã quá hạn";
}

function renderHistory() {
	if (borrowList.length === 0) {
		tbody.innerHTML = `<tr><td colspan="8">Chưa có lịch sử mượn sách nào.</td></tr>`;
		return;
	}

	const filter = document.getElementById("statusFilter")?.value || "all";

	// Lọc theo trạng thái
	let filteredList = [...borrowList];
	if (filter !== "all") {
		filteredList = filteredList.filter((item) => item.status === filter);
	}

	// Ưu tiên "đang chờ duyệt" lên đầu
	const sortedList = filteredList.sort((a, b) => {
		if (a.status === "đang chờ duyệt" && b.status !== "đang chờ duyệt")
			return -1;
		if (a.status !== "đang chờ duyệt" && b.status === "đang chờ duyệt")
			return 1;
		return 0;
	});

	if (sortedList.length === 0) {
		tbody.innerHTML = `<tr><td colspan="8">Không có dữ liệu phù hợp.</td></tr>`;
		return;
	}

	tbody.innerHTML = sortedList
		.map((b, index) => {
			let statusDisplay = "";

			if (b.status === "đang chờ duyệt") {
				statusDisplay = "Đang chờ duyệt";
			} else if (b.status === "đang mượn") {
				statusDisplay = isOverdue(b.returnDate)
					? "Chưa trả (quá hạn)"
					: `Đang mượn (${calculateDaysLeft(b.returnDate)})`;
			} else {
				statusDisplay = b.status || "Chưa trả";
			}

			let actionBtn = "";
			if (b.status === "đang chờ duyệt") {
				actionBtn = `<button onclick="confirmBorrow(${borrowList.indexOf(
					b
				)})">Xác nhận</button>`;
			} else if (b.status === "đang mượn") {
				actionBtn = `<button onclick="returnBook(${borrowList.indexOf(
					b
				)})">Trả sách</button>`;
			} else {
				actionBtn = "";
			}

			return `
			<tr class="${isOverdue(b.returnDate) ? "overdue" : ""}">
				<td>${b.name}</td>
				<td>${b.email}</td>
				<td>${b.phone}</td>
				<td>${b.bookTitle}</td>
				<td>${b.borrowDate}</td>
				<td>${statusDisplay}</td>
				<td>${actionBtn}</td>
			</tr>`;
		})
		.join("");
}

function confirmBorrow(index) {
	borrowList[index].status = "đang mượn";
	localStorage.setItem("borrowList", JSON.stringify(borrowList));
	alert("Đã xác nhận mượn sách.");
	renderHistory();
}

function returnBook(index) {
	const borrow = borrowList[index];
	const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
	const bookIndex = bookList.findIndex((b) => b.title === borrow.bookTitle);

	if (bookIndex !== -1) {
		bookList[bookIndex].quantity = Number(bookList[bookIndex].quantity) + 1;
		localStorage.setItem("bookList", JSON.stringify(bookList));
	}

	borrowList[index].status = "đã trả";
	localStorage.setItem("borrowList", JSON.stringify(borrowList));

	alert("Trả sách thành công!");
	renderHistory();
}

renderHistory();
