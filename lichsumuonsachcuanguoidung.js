const borrowList = JSON.parse(localStorage.getItem("borrowList")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const tbody = document.getElementById("historyBody");

function calculateDaysLeft(returnDateStr) {
	const today = new Date();
	const returnDate = new Date(returnDateStr);
	const diff = Math.ceil((returnDate - today) / (1000 * 60 * 60 * 24));
	return diff;
}

function renderHistory() {
	if (!currentUser) {
		tbody.innerHTML = `<tr><td colspan="7">Bạn chưa đăng nhập.</td></tr>`;
		return;
	}

	const userBorrowList = borrowList.filter(
		(item) => item.email === currentUser.email
	);

	if (userBorrowList.length === 0) {
		tbody.innerHTML = `<tr><td colspan="7">Bạn chưa mượn sách nào.</td></tr>`;
		return;
	}

	tbody.innerHTML = userBorrowList
		.map((item, index) => {
			const daysLeft = calculateDaysLeft(item.returnDate);
			let status = "";

			if (item.status === "đang chờ duyệt") {
				status = "Đang chờ duyệt";
			} else if (item.status === "đang mượn") {
				status =
					daysLeft < 0 ? "Quá hạn" : `Đang mượn (${daysLeft} ngày còn lại)`;
			} else {
				status = "Chưa xác định";
			}

			const rowClass =
				item.status === "đang mượn" && daysLeft < 0 ? "expired" : "";

			// Nếu đang chờ duyệt thì thêm nút XÓA
			const action =
				item.status === "đang chờ duyệt"
					? `<button onclick="deleteRequest(${index})">Xóa</button>`
					: "";

			return `
        <tr class="${rowClass}">
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <td>${item.bookTitle}</td>
          <td>${item.borrowDate}</td>
          <td>${status}</td>
          <td>${action}</td>
        </tr>
      `;
		})
		.join("");
}
function deleteRequest(index) {
	const userBorrowList = borrowList.filter(
		(item) => item.email === currentUser.email
	);

	// Xác định phần tử cần xóa trong toàn bộ borrowList
	const itemToDelete = userBorrowList[index];
	const globalIndex = borrowList.findIndex(
		(item) =>
			item.email === itemToDelete.email &&
			item.bookTitle === itemToDelete.bookTitle &&
			item.borrowDate === itemToDelete.borrowDate &&
			item.status === "đang chờ duyệt"
	);

	if (globalIndex !== -1) {
		if (
			confirm(
				`Bạn có chắc chắn muốn hủy yêu cầu mượn sách "${itemToDelete.bookTitle}" không?`
			)
		) {
			// ✅ Cộng lại số lượng sách
			const bookList = JSON.parse(localStorage.getItem("bookList")) || [];
			const bookIndex = bookList.findIndex(
				(b) => b.title === itemToDelete.bookTitle
			);

			if (bookIndex !== -1) {
				bookList[bookIndex].quantity = Number(bookList[bookIndex].quantity) + 1;
				localStorage.setItem("bookList", JSON.stringify(bookList));
			}

			// ✅ Xóa yêu cầu
			borrowList.splice(globalIndex, 1);
			localStorage.setItem("borrowList", JSON.stringify(borrowList));
			alert("Đã hủy yêu cầu mượn sách.");
			renderHistory();
		}
	}
}

renderHistory();
