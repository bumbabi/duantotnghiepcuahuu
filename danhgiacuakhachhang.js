// document.addEventListener("DOMContentLoaded", () => {
// 	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// 	const borrowList = JSON.parse(localStorage.getItem("borrowList")) || [];
// 	const bookRatings = JSON.parse(localStorage.getItem("bookRatings")) || [];
// 	const libraryRatings =
// 		JSON.parse(localStorage.getItem("libraryRatings")) || [];

// 	const ratedBookSelect = document.getElementById("ratedBookSelect");
// 	const bookComment = document.getElementById("bookComment");
// 	const libraryComment = document.getElementById("libraryComment");

// 	// Lọc sách đã mượn
// 	const borrowedBooks = borrowList.filter(
// 		(b) => b.email === currentUser?.email && b.status !== "Chưa xác định"
// 	);

// 	if (borrowedBooks.length === 0) {
// 		ratedBookSelect.innerHTML = `<option disabled selected>Không có sách nào để đánh giá</option>`;
// 	} else {
// 		ratedBookSelect.innerHTML = borrowedBooks
// 			.map((b) => `<option value="${b.bookTitle}">${b.bookTitle}</option>`)
// 			.join("");
// 	}

// 	// Gửi đánh giá sách
// 	document.getElementById("bookRatingForm").addEventListener("submit", (e) => {
// 		e.preventDefault();
// 		const bookTitle = ratedBookSelect.value;
// 		const comment = bookComment.value.trim();

// 		if (!bookTitle || !comment) return;

// 		bookRatings.push({
// 			username: currentUser?.username || "Ẩn danh",
// 			bookTitle,
// 			comment,
// 			date: new Date().toLocaleString(),
// 		});

// 		localStorage.setItem("bookRatings", JSON.stringify(bookRatings));
// 		alert("Đã gửi đánh giá sách!");
// 		bookComment.value = "";
// 	});

// 	// Gửi đánh giá thư viện
// 	document
// 		.getElementById("libraryRatingForm")
// 		.addEventListener("submit", (e) => {
// 			e.preventDefault();
// 			const comment = libraryComment.value.trim();
// 			if (!comment) return;

// 			libraryRatings.push({
// 				username: currentUser?.username || "Ẩn danh",
// 				comment,
// 				date: new Date().toLocaleString(),
// 			});

// 			localStorage.setItem("libraryRatings", JSON.stringify(libraryRatings));
// 			alert("Đã gửi đánh giá thư viện!");
// 			libraryComment.value = "";
// 		});
// });
// 