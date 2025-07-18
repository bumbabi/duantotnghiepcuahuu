const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const saveBtn = document.getElementById("saveBtn");
const result = document.getElementById("result");
const searchInput = document.getElementById("searchInput");

function getBooks() {
	return JSON.parse(localStorage.getItem("bookList")) || [];
}

function saveBooks(books) {
	localStorage.setItem("bookList", JSON.stringify(books));
}

function renderBooks(filter = "") {
	const books = getBooks();
	const filtered = books.filter((b) =>
		b.title.toLowerCase().includes(filter.toLowerCase())
	);

	result.innerHTML = filtered
		.map(
			(book, index) => `
      <div class="book-item">
        <img src="${book.image}" alt="Bìa sách" />
        <p><strong>Tên sách:</strong> ${book.title}</p>
        <p><strong>Tác giả:</strong> ${book.author}</p>
        <p><strong>Thể loại:</strong> ${book.genre}</p>
        <p><strong>Năm xuất bản:</strong> ${book.year}</p>
        <p><strong>Số lượng:</strong> ${book.quantity}</p>
        <button onclick="editBook(${index})">Sửa</button>
        <button onclick="deleteBook(${index})">Xoá</button>
      </div>
    `
		)
		.join("");
}

function deleteBook(index) {
	const books = getBooks();
	if (confirm("Bạn có chắc chắn muốn xoá sách này không?")) {
		books.splice(index, 1);
		saveBooks(books);
		renderBooks(searchInput.value);
	}
}

function editBook(index) {
	const books = getBooks();
	const book = books[index];

	document.getElementById("bookTitle").value = book.title;
	document.getElementById("author").value = book.author;
	document.getElementById("genre").value = book.genre;
	document.getElementById("year").value = book.year;
	document.getElementById("quantity").value = book.quantity;
	preview.src = book.image;

	books.splice(index, 1);
	saveBooks(books);
}

window.addEventListener("load", () => {
	renderBooks();
});

searchInput.addEventListener("input", (e) => {
	renderBooks(e.target.value);
});

imageUpload.addEventListener("change", function () {
	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			preview.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
});

saveBtn.addEventListener("click", () => {
	const title = document.getElementById("bookTitle").value;
	const author = document.getElementById("author").value;
	const genre = document.getElementById("genre").value;
	const year = document.getElementById("year").value;
	const quantity = document.getElementById("quantity").value;
	const imageSrc = preview.src;

	if (
		!title ||
		!author ||
		!genre ||
		!year ||
		!quantity ||
		imageSrc.includes("placeholder")
	) {
		alert("Vui lòng điền đầy đủ thông tin và chọn ảnh bìa!");
		return;
	}

	const newBook = {
		title,
		author,
		genre,
		year,
		quantity,
		image: imageSrc,
	};

	const books = getBooks();
	books.push(newBook);
	saveBooks(books);

	preview.src = "https://via.placeholder.com/200x250?text=Bia+Sach";
	document.getElementById("bookTitle").value = "";
	document.getElementById("author").value = "";
	document.getElementById("genre").value = "";
	document.getElementById("year").value = "";
	document.getElementById("quantity").value = "";

	renderBooks();
});
