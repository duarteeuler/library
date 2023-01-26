let myLibrary = [];
let arrayId = 0;

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

}


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



