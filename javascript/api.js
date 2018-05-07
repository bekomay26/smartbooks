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
getAbook(4)