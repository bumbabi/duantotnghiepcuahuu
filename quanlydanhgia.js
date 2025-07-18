document.addEventListener("DOMContentLoaded", () => {
	const bookRatings = JSON.parse(localStorage.getItem("bookRatings")) || [];
	const libraryRatings =
		JSON.parse(localStorage.getItem("libraryRatings")) || [];

	const bookContainer = document.getElementById("bookRatingContainer");
	const libraryContainer = document.getElementById("libraryRatingContainer");

	// Hiển thị đánh giá sách
	if (bookRatings.length === 0) {
		bookContainer.innerHTML = "Chưa có đánh giá sách nào.";
	} else {
		bookContainer.innerHTML = bookRatings
			.map(
				(r) =>
					`<div>
        <span class="book-title">${r.bookTitle}</span> - <i>${r.username}</i>:
        <p>${r.comment}</p>
        <small>${r.date}</small>
      </div><hr/>`
			)
			.join("");
	}

	// Hiển thị đánh giá thư viện
	if (libraryRatings.length === 0) {
		libraryContainer.innerHTML = "Chưa có đánh giá thư viện nào.";
	} else {
		libraryContainer.innerHTML = libraryRatings
			.map(
				(r) =>
					`<div>
        <i>${r.username}</i>:
        <p>${r.comment}</p>
        <small>${r.date}</small>
      </div><hr/>`
			)
			.join("");
	}
});
