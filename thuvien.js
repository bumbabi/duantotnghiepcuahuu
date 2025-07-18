const defaultBooks = [
	{
		title: "Thinking, Fast and Slow",
		author: "Daniel Kahneman",
		genre: "Tâm lý học",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Influence",
		author: "Robert B. Cialdini",
		genre: "Tâm lý học",
		year: "1984",
		quantity: 1,
		image: "",
	},
	{
		title: "The Power of Habit",
		author: "Charles Duhigg",
		genre: "Tâm lý học",
		year: "2012",
		quantity: 1,
		image: "",
	},
	{
		title: "Emotional Intelligence",
		author: "Daniel Goleman",
		genre: "Tâm lý học",
		year: "1995",
		quantity: 1,
		image: "",
	},
	{
		title: "The Psychology of Money",
		author: "Morgan Housel",
		genre: "Tâm lý học",
		year: "2020",
		quantity: 1,
		image: "",
	},
	{
		title: "Tư duy nhanh và chậm",
		author: "Daniel Kahneman",
		genre: "Tâm lý học",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Man’s Search for Meaning",
		author: "Viktor E. Frankl",
		genre: "Tâm lý học",
		year: "1946",
		quantity: 1,
		image: "",
	},
	{
		title: "Grit",
		author: "Angela Duckworth",
		genre: "Tâm lý học",
		year: "2016",
		quantity: 1,
		image: "",
	},
	{
		title: "Cảm xúc - bí mật sức mạnh của sự đồng cảm",
		author: "Melody Beattie",
		genre: "Tâm lý học",
		year: "1990",
		quantity: 1,
		image: "",
	},
	{
		title: "The Art of Thinking Clearly",
		author: "Rolf Dobelli",
		genre: "Tâm lý học",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "How Psychology Works",
		author: "DK",
		genre: "Tâm lý học",
		year: "2018",
		quantity: 1,
		image: "",
	},
	{
		title: "Hiểu về trái tim",
		author: "Minh Niệm",
		genre: "Tâm lý học",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Đắc Nhân Tâm",
		author: "Dale Carnegie",
		genre: "Tâm lý học",
		year: "1936",
		quantity: 1,
		image: "",
	},
	{
		title: "Bố Già",
		author: "Mario Puzo",
		genre: "Tiểu thuyết",
		year: "1969",
		quantity: 1,
		image: "",
	},
	{
		title: "A Tale Of Two Cities",
		author: "Charles Dickens",
		genre: "Tiểu thuyết",
		year: "1859",
		quantity: 1,
		image: "",
	},
	{
		title: "One Hundred Years of Solitude",
		author: "Gabriel Garcia Marquez",
		genre: "Tiểu thuyết",
		year: "1967",
		quantity: 1,
		image: "",
	},
	{
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		genre: "Tiểu thuyết",
		year: "1951",
		quantity: 1,
		image: "",
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		genre: "Tiểu thuyết",
		year: "1960",
		quantity: 1,
		image: "",
	},
	{
		title: "Bên kia đường biên",
		author: "Jack London",
		genre: "Tiểu thuyết",
		year: "1903",
		quantity: 1,
		image: "",
	},
	{
		title: "Cuốn theo chiều gió",
		author: "Margaret Mitchell",
		genre: "Tiểu thuyết",
		year: "1936",
		quantity: 1,
		image: "",
	},
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		genre: "Tiểu thuyết",
		year: "1925",
		quantity: 1,
		image: "",
	},
	{
		title: "Tuổi thơ dữ dội",
		author: "Phùng Quán",
		genre: "Tiểu thuyết",
		year: "1988",
		quantity: 1,
		image: "",
	},
	{
		title: "Số đỏ",
		author: "Vũ Trọng Phụng",
		genre: "Tiểu thuyết",
		year: "1936",
		quantity: 1,
		image: "",
	},
	{
		title: "The Da Vinci Code",
		author: "Dan Brown",
		genre: "Trinh thám",
		year: "2003",
		quantity: 1,
		image: "",
	},
	{
		title: "The Trial",
		author: "Franz Kafka",
		genre: "Trinh thám",
		year: "1925",
		quantity: 1,
		image: "",
	},
	{
		title: "The Chosen of Sarah",
		author: "David Jackson",
		genre: "Trinh thám",
		year: "2004",
		quantity: 1,
		image: "",
	},
	{
		title: "Where the Crawdads Sing",
		author: "Delia Owens",
		genre: "Trinh thám",
		year: "2018",
		quantity: 1,
		image: "",
	},
	{
		title: "All the Light We Cannot See",
		author: "Anthony Doerr",
		genre: "Trinh thám",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "The Book Thief",
		author: "Markus Zusak",
		genre: "Trinh thám",
		year: "2005",
		quantity: 1,
		image: "",
	},
	{
		title: "Murder on the Orient Express",
		author: "Agatha Christie",
		genre: "Trinh thám",
		year: "1934",
		quantity: 1,
		image: "",
	},
	{
		title: "The Hound of the Baskervilles",
		author: "Arthur Conan Doyle",
		genre: "Trinh thám",
		year: "1902",
		quantity: 1,
		image: "",
	},
	{
		title: "Big Little Lies",
		author: "Liane Moriarty",
		genre: "Trinh thám",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "Sherlock Holmes",
		author: "Arthur Conan Doyle",
		genre: "Trinh thám",
		year: "1892",
		quantity: 1,
		image: "",
	},
	{
		title: "Kỳ án ánh trăng",
		author: "Quỷ Cổ Nữ",
		genre: "Trinh thám",
		year: "2005",
		quantity: 1,
		image: "",
	},
	{
		title: "Cái giá của ngôi nhà X",
		author: "Higashino Keigo",
		genre: "Trinh thám",
		year: "2008",
		quantity: 1,
		image: "",
	},
	{
		title: "Vụng trộm",
		author: "Higashino Keigo",
		genre: "Trinh thám",
		year: "2006",
		quantity: 1,
		image: "",
	},
	{
		title: "Fifty Shades of Grey",
		author: "E. L. James",
		genre: "Ngôn tình",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Ngôn tình",
		year: "1813",
		quantity: 1,
		image: "",
	},
	{
		title: "The Notebook",
		author: "Nicholas Sparks",
		genre: "Ngôn tình",
		year: "1996",
		quantity: 1,
		image: "",
	},
	{
		title: "Outlander",
		author: "Diana Gabaldon",
		genre: "Ngôn tình",
		year: "1991",
		quantity: 1,
		image: "",
	},
	{
		title: "Me Before You",
		author: "Jojo Moyes",
		genre: "Ngôn tình",
		year: "2012",
		quantity: 1,
		image: "",
	},
	{
		title: "Hồi ức kẻ ngốc",
		author: "Stephenie Meyer",
		genre: "Ngôn tình",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "Beautiful Disaster",
		author: "Jamie McGuire",
		genre: "Ngôn tình",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Eleanor & Park",
		author: "Rainbow Rowell",
		genre: "Ngôn tình",
		year: "2013",
		quantity: 1,
		image: "",
	},
	{
		title: "It Ends with Us",
		author: "Colleen Hoover",
		genre: "Ngôn tình",
		year: "2016",
		quantity: 1,
		image: "",
	},
	{
		title: "Bên nhau trọn đời",
		author: "Cố Mạn",
		genre: "Ngôn tình",
		year: "2003",
		quantity: 1,
		image: "",
	},
	{
		title: "Tình yêu thứ ba",
		author: "Ân Tầm",
		genre: "Ngôn tình",
		year: "2007",
		quantity: 1,
		image: "",
	},
	{
		title: "Ốc sên chạy",
		author: "Điện Tuyến",
		genre: "Ngôn tình",
		year: "2010",
		quantity: 1,
		image: "",
	},
	{
		title: "Hãy nhắm mắt khi anh đến",
		author: "Đinh Mặc",
		genre: "Ngôn tình",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "Hôn nhân không tình yêu",
		author: "Diệp Lạc Vô Tâm",
		genre: "Ngôn tình",
		year: "2018",
		quantity: 1,
		image: "",
	},
	{
		title: "Parasite Eve",
		author: "Sena Hideaki",
		genre: "Kinh dị",
		year: "1995",
		quantity: 1,
		image: "",
	},
	{
		title: "Dracula",
		author: "Bram Stoker",
		genre: "Kinh dị",
		year: "1897",
		quantity: 1,
		image: "",
	},
	{
		title: "Interview with the Vampire",
		author: "Anne Rice",
		genre: "Kinh dị",
		year: "1976",
		quantity: 1,
		image: "",
	},
	{
		title: "The Exorcist",
		author: "William Peter Blatty",
		genre: "Kinh dị",
		year: "1971",
		quantity: 1,
		image: "",
	},
	{
		title: "It",
		author: "Stephen King",
		genre: "Kinh dị",
		year: "1986",
		quantity: 1,
		image: "",
	},
	{
		title: "The Silence of the Lambs",
		author: "Thomas Harris",
		genre: "Kinh dị",
		year: "1988",
		quantity: 1,
		image: "",
	},
	{
		title: "Pet Sematary",
		author: "Stephen King",
		genre: "Kinh dị",
		year: "1983",
		quantity: 1,
		image: "",
	},
	{
		title: "The Haunting of Hill House",
		author: "Shirley Jackson",
		genre: "Kinh dị",
		year: "1959",
		quantity: 1,
		image: "",
	},
	{
		title: "Bird Box",
		author: "Josh Malerman",
		genre: "Kinh dị",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "House of Leaves",
		author: "Mark Z. Danielewski",
		genre: "Kinh dị",
		year: "2000",
		quantity: 1,
		image: "",
	},
	{
		title: "Tế tôn ở địa ngục",
		author: "Thảo Trang",
		genre: "Kinh dị",
		year: "2018",
		quantity: 1,
		image: "",
	},
	{
		title: "Người trừ quỷ",
		author: "Phan Cường",
		genre: "Kinh dị",
		year: "2017",
		quantity: 1,
		image: "",
	},
	{
		title: "Câu thần giao thế giới",
		author: "Jonathan Stroud",
		genre: "Kinh dị",
		year: "2013",
		quantity: 1,
		image: "",
	},
	{
		title: "Ngôi làng có một người",
		author: "Nguyễn Thị Trúc Linh",
		genre: "Kinh dị",
		year: "2006",
		quantity: 1,
		image: "",
	},
	{
		title: "Đại Nam dị truyện",
		author: "Phan Cường",
		genre: "Kinh dị",
		year: "2016",
		quantity: 1,
		image: "",
	},
	{
		title: "Dune",
		author: "Frank Herbert",
		genre: "Khoa học viễn tưởng",
		year: "1965",
		quantity: 1,
		image: "",
	},
	{
		title: "Ender’s Game",
		author: "Orson Scott Card",
		genre: "Khoa học viễn tưởng",
		year: "1985",
		quantity: 1,
		image: "",
	},
	{
		title: "Foundation",
		author: "Isaac Asimov",
		genre: "Khoa học viễn tưởng",
		year: "1951",
		quantity: 1,
		image: "",
	},
	{
		title: "The Hunger Games",
		author: "Suzanne Collins",
		genre: "Khoa học viễn tưởng",
		year: "2008",
		quantity: 1,
		image: "",
	},
	{
		title: "1984",
		author: "George Orwell",
		genre: "Khoa học viễn tưởng",
		year: "1949",
		quantity: 1,
		image: "",
	},
	{
		title: "Brave New World",
		author: "Aldous Huxley",
		genre: "Khoa học viễn tưởng",
		year: "1932",
		quantity: 1,
		image: "",
	},
	{
		title: "The Martian",
		author: "Andy Weir",
		genre: "Khoa học viễn tưởng",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Neuromancer",
		author: "William Gibson",
		genre: "Khoa học viễn tưởng",
		year: "1984",
		quantity: 1,
		image: "",
	},
	{
		title: "Snow Crash",
		author: "Neal Stephenson",
		genre: "Khoa học viễn tưởng",
		year: "1992",
		quantity: 1,
		image: "",
	},
	{
		title: "Ready Player One",
		author: "Ernest Cline",
		genre: "Khoa học viễn tưởng",
		year: "2011",
		quantity: 1,
		image: "",
	},
	{
		title: "Tam Thể",
		author: "Lưu Từ Hân",
		genre: "Khoa học viễn tưởng",
		year: "2006",
		quantity: 1,
		image: "",
	},
	{
		title: "Cỗ máy thời gian",
		author: "H. G. Wells",
		genre: "Khoa học viễn tưởng",
		year: "1895",
		quantity: 1,
		image: "",
	},
	{
		title: "Người về từ sao Hỏa",
		author: "Andy Weir",
		genre: "Khoa học viễn tưởng",
		year: "2014",
		quantity: 1,
		image: "",
	},
	{
		title: "Frankenstein",
		author: "Mary Shelley",
		genre: "Khoa học viễn tưởng",
		year: "1818",
		quantity: 1,
		image: "",
	},
	{
		title: "Cuộc xâm lược",
		author: "Katherine Applegate",
		genre: "Khoa học viễn tưởng",
		year: "1996",
		quantity: 1,
		image: "",
	},
	{
		title: "The Little Prince",
		author: "Antoine de Saint-Exupéry",
		genre: "Ngụ ngôn triết lý",
		year: "1943",
		quantity: 1,
		image: "",
	},
	{
		title: "The Alchemist",
		author: "Paulo Coelho",
		genre: "Ngụ ngôn triết lý",
		year: "1988",
		quantity: 1,
		image: "",
	},
	{
		title: "Animal Farm",
		author: "George Orwell",
		genre: "Ngụ ngôn triết lý",
		year: "1945",
		quantity: 1,
		image: "",
	},
	{
		title: "Tuesdays with Morrie",
		author: "Mitch Albom",
		genre: "Ngụ ngôn triết lý",
		year: "1997",
		quantity: 1,
		image: "",
	},
	{
		title: "Jonathan Livingston Seagull",
		author: "Richard Bach",
		genre: "Ngụ ngôn triết lý",
		year: "1970",
		quantity: 1,
		image: "",
	},
	{
		title: "Life of Pi",
		author: "Yann Martel",
		genre: "Ngụ ngôn triết lý",
		year: "2001",
		quantity: 1,
		image: "",
	},
	{
		title: "The Prophet",
		author: "Kahlil Gibran",
		genre: "Ngụ ngôn triết lý",
		year: "1923",
		quantity: 1,
		image: "",
	},
	{
		title: "The Giving Tree",
		author: "Shel Silverstein",
		genre: "Ngụ ngôn triết lý",
		year: "1964",
		quantity: 1,
		image: "",
	},
	{
		title: "Zen and the Art of Motorcycle Maintenance",
		author: "Robert M. Pirsig",
		genre: "Ngụ ngôn triết lý",
		year: "1974",
		quantity: 1,
		image: "",
	},
	{
		title: "Siddhartha",
		author: "Hermann Hesse",
		genre: "Ngụ ngôn triết lý",
		year: "1922",
		quantity: 1,
		image: "",
	},
	{
		title: "Người đua diều",
		author: "Khaled Hosseini",
		genre: "Ngụ ngôn triết lý",
		year: "2003",
		quantity: 1,
		image: "",
	},
	{
		title: "Tên của đóa hồng",
		author: "Umberto Eco",
		genre: "Ngụ ngôn triết lý",
		year: "1980",
		quantity: 1,
		image: "",
	},
	{
		title: "451 độ F",
		author: "Ray Bradbury",
		genre: "Ngụ ngôn triết lý",
		year: "1953",
		quantity: 1,
		image: "",
	},
	{
		title: "Suối nguồn",
		author: "Ayn Rand",
		genre: "Ngụ ngôn triết lý",
		year: "1943",
		quantity: 1,
		image: "",
	},
	{
		title: "Infinite Jest",
		author: "David Foster Wallace",
		genre: "Ngụ ngôn triết lý",
		year: "1996",
		quantity: 1,
		image: "",
	},
	{
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
		genre: "Giả tưởng kỳ ảo",
		year: "1997",
		quantity: 1,
		image: "",
	},
	{
		title: "The Fellowship of the Ring",
		author: "J.R.R. Tolkien",
		genre: "Giả tưởng kỳ ảo",
		year: "1954",
		quantity: 1,
		image: "",
	},
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		genre: "Giả tưởng kỳ ảo",
		year: "1937",
		quantity: 1,
		image: "",
	},
	{
		title: "A Game of Thrones",
		author: "George R.R. Martin",
		genre: "Giả tưởng kỳ ảo",
		year: "1996",
		quantity: 1,
		image: "",
	},
	{
		title: "The Chronicles of Narnia",
		author: "C.S. Lewis",
		genre: "Giả tưởng kỳ ảo",
		year: "1950",
		quantity: 1,
		image: "",
	},
	{
		title: "Eragon",
		author: "Christopher Paolini",
		genre: "Giả tưởng kỳ ảo",
		year: "2002",
		quantity: 1,
		image: "",
	},
	{
		title: "Mistborn",
		author: "Brandon Sanderson",
		genre: "Giả tưởng kỳ ảo",
		year: "2006",
		quantity: 1,
		image: "",
	},
	{
		title: "The Wheel of Time",
		author: "Robert Jordan",
		genre: "Giả tưởng kỳ ảo",
		year: "1990",
		quantity: 1,
		image: "",
	},
	{
		title: "A Wizard of Earthsea",
		author: "Ursula K. Le Guin",
		genre: "Giả tưởng kỳ ảo",
		year: "1968",
		quantity: 1,
		image: "",
	},
	{
		title: "The Name of the Wind",
		author: "Patrick Rothfuss",
		genre: "Giả tưởng kỳ ảo",
		year: "2007",
		quantity: 1,
		image: "",
	},
	{
		title: "The Stormlight Archive",
		author: "Brandon Sanderson",
		genre: "Giả tưởng kỳ ảo",
		year: "2010",
		quantity: 1,
		image: "",
	},
	{
		title: "Magnus Chase",
		author: "Rick Riordan",
		genre: "Giả tưởng kỳ ảo",
		year: "2015",
		quantity: 1,
		image: "",
	},
	{
		title: "The Trials of Apollo",
		author: "Rick Riordan",
		genre: "Giả tưởng kỳ ảo",
		year: "2016",
		quantity: 1,
		image: "",
	},
	{
		title: "Discworld",
		author: "Terry Pratchett",
		genre: "Giả tưởng kỳ ảo",
		year: "1983",
		quantity: 1,
		image: "",
	},
	{
		title: "The Dark Tower",
		author: "Stephen King",
		genre: "Giả tưởng kỳ ảo",
		year: "1982",
		quantity: 1,
		image: "",
	},
];

// Nếu chưa có bookList trong localStorage thì lưu mặc định
if (!localStorage.getItem("bookList")) {
	localStorage.setItem("bookList", JSON.stringify(defaultBooks));
}

const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

function renderBooks(books) {
	if (books.length === 0) {
		bookGrid.innerHTML = "<p>Không tìm thấy sách phù hợp.</p>";
		return;
	}
	bookGrid.innerHTML = books
		.map(
			(book) => `
		<div class="book">
			<img src="${book.image}" alt="Ảnh bìa">
			<div class="book-title">${book.title}</div>
			<div class="book-meta">Tác giả: ${book.author}</div>
			<div class="book-meta">Thể loại: ${book.genre}</div>
			<div class="book-meta">Năm XB: ${book.year}</div>
			<div class="book-meta">Còn lại: ${book.quantity}</div>
		</div>
	`
		)
		.join("");
}

function filterBooks() {
	const books = JSON.parse(localStorage.getItem("bookList")) || [];
	const keyword = searchInput.value.toLowerCase();
	const genre = genreFilter.value;

	const filtered = books.filter((b) => {
		const matchesGenre = genre === "" || b.genre === genre;
		const matchesTitle = b.title.toLowerCase().includes(keyword);
		return matchesGenre && matchesTitle;
	});

	renderBooks(filtered);
}

searchInput.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);

// Khởi tạo
filterBooks();
