let myLibrary = [];

function addBookToLibrary(){
  
}
// the constructor
function Book(name, author, pages, situation) {
  this.name = name // Referencia ao obj atual
  this.author = author
  this.pages = pages
  this.situation = situation
  this.info = function() {
    console.log(name+author+pages+situation);
  }
}

const threeBody = new Book('The Three Body Problem', 'Xines', '300 pages', 'not ready yet')
threeBody.info()


