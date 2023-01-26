let myLibrary = [];
let arrayId = 3;
let i = 0;

myLibrary[0] = { title: "The Hobbit", author: "J.R.R Tolkien", status: "read"};
myLibrary[1] = { title: "The Three body Problem", author: "Cixin Liu", status: "read"};
myLibrary[2] = { title: "The Fellowship of The Ring", author: "J.R.R Tolkien", status: "read"};

function addBookToLibrary(){
  let bookTitle = document.getElementById('title');
  let bookAuthor = document.getElementById('author');
  let status = document.getElementById('status');

  // object
  myLibrary[arrayId] = {
    title: bookTitle.value,
    author: bookAuthor.value,
    status: status.value
  };

  console.log(myLibrary);
  arrayId+=1; 

  // Clear Method
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('status').value = "read";

  showBooks();
}


function showBooks(){
  
  while(i<arrayId)
  {
    let book = myLibrary[i];

    const paragraph = document.createElement('p');
    const node = document.createTextNode(`${book.title  } by ${  book.author  } (${  book.status  })`);
    paragraph.appendChild(node);

    const element = document.getElementById('container');
    element.appendChild(paragraph);
    i+=1;
  }
  
}

window.onload = showBooks;

// the constructor
function Book(name, author) {
  this.name = name // Referencia ao obj atual
  this.author = author
  
  this.info = function() {
    console.log(name+author);
  }
}

const threeBody = new Book('The Three Body Problem', 'Xines')
threeBody.info()



