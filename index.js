let myLibrary = [];
let arrayId = 3;
let i = 0;

myLibrary[0] = { title: "The Hobbit", author: "J.R.R Tolkien", status: "read"};
myLibrary[1] = { title: "The Three body Problem", author: "Cixin Liu", status: "read"};
myLibrary[2] = { title: "The Fellowship of The Ring", author: "J.R.R Tolkien", status: "read"};

function addBookToLibrary(){
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const status = document.getElementById('status');

  // object
  myLibrary[arrayId] = {
    title: bookTitle.value,
    author: bookAuthor.value,
    status: status.value
  };

  arrayId+=1; 

  // Clear Method
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('status').value = "read";

  showBooks();
}

// update the book list
function showBooks(){
  while(i<arrayId)
  {
    const book = myLibrary[i];

    const paragraph = document.createElement('p');
    const node = document.createTextNode(`${book.title  } by ${  book.author  }`);
    paragraph.appendChild(node);

    const element = document.getElementById('container');
    element.appendChild(paragraph);

    // add button to book. Define data index for each button related to index of array book
    const button = document.createElement('button');
    const text = document.createTextNode("X");

    button.setAttribute("data-index", i);
    button.appendChild(text);
    element.appendChild(button);


    // button status
    const buttonStatus = document.createElement('select');
    const textStatus = document.createTextNode(book.status);

    buttonStatus.setAttribute("data-index", i);
    buttonStatus.appendChild(textStatus);
    element.appendChild(buttonStatus);

    const option1 = document.createElement('option');
    option1.value = "read";
    option1.text = "read";
    const option2 = document.createElement('option');
    option2.value = "notRead";
    option2.text = "not read";

    buttonStatus.appendChild(option1);
    buttonStatus.appendChild(option2);

    buttonStatus.value = book.status;
    i+=1;

    // event listener to the select element
    buttonStatus.addEventListener("change", ()=>{
      const index = buttonStatus.getAttribute("data-index");
      myLibrary[index].status = buttonStatus.value;
    });


    // eslint-disable-next-line no-loop-func
    button.addEventListener("click", () =>{
      const index = button.getAttribute("data-index");
      myLibrary.splice(index,1);
      
      arrayId-=1;
      i=0;

      const element = document.getElementById('container');
        
      while (element.firstChild) {
          element.removeChild(element.firstChild);
      }
      showBooks();
    });


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

function showForm(){
  document.getElementById("form-block").style.display="block";
}

