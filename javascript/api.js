require ("isomorphic-fetch")
const getBooks = async() =>{
    try{
        let data =  await fetch('http://fakerestapi.azurewebsites.net/api/Books')
        let response = await data.json()
        return(
            response
        )
    }
    catch(error){
        console.log(error)
    }
}


const deleteBook = async(id) => {
    try{
        let data =await fetch(`http://fakerestapi.azurewebsites.net/api/Books/${id}`, {
            method: 'delete'
          });
          let response = await data.json();
          return(
              response
          )
          
        }
    catch(error){
        console.log(error)
    }
}

const getAbook = async(id) => {
    try{
        let data = await fetch(`http://fakerestapi.azurewebsites.net/api/Books/${id}`);
        let response = await data.json()
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
    }
}

const postBook = ( url, book) => {
    try{
        fetch(url, {
            body: JSON.stringify(book),
            method: 'POST',
        })
        .then(response => response.json());
    }
    catch(error){
        console.log(error)
    }
}

const getPhotos = (url) => {
    try{    
    fetch(url)
    .then(response => response.json());
    }
    catch(error){
        console.log(error)
    }
}


function onAdd() {
    const id = getBooks.length;
    const title = document.getElementById("bookTitle").value;
    const desc = document.getElementById("bookDesc").value;
    const pageCount = document.getElementById("bookPage").value;
    const excerpt = document.getElementById("bookExc").value;
    const publishDate = document.getElementById("bookPubl").value;
    
    const book = {id, title, desc, pageCount, excerpt, publishDate};
    postBook('http://fakerestapi.azurewebsites.net/api/Books', book);
}

function onPut(id){
    const book = getAbook(id);
    const title = document.getElementById("bookTitle").value || book.title;
    const desc = document.getElementById("bookDesc").value || book.description;
    const pageCount = document.getElementById("bookPage").value || book.pageCount;
    const excerpt = document.getElementById("bookExc").value || book.excerpt;
    const publishDate = document.getElementById("bookPubl").value || book.PublishDate;
    
    const newBbook = {id, title, desc, pageCount, excerpt, publishDate};
    postBook(`http://fakerestapi.azurewebsites.net/api/Books/${id}`, newBook);
}



getBooks()
