async function catGallery(apiUrl){                                               // using synchronous function
        return new Promise((resolve,reject) => {                                 //  A promise will either resolve or reject
            fetch(apiUrl)                                                        //  Using  Fetch API to get data from the url 
            .then((response)=>{                                                  //   to get the data from API 
                if(!response.ok){                                                //  checking the condition if the fetch data is not response throw the error         
                    throw new Error(`HTTP error! Status: ${response.status}`);   
                }
                return response.json();                                           // returning the data in JSON format 
            })
            .then((data)=>resolve(data))                                          //  resolve the promise with the data from response
            .catch((error)=>reject(error))                                        //  reject the  promise and show the error status

       });
}

  
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_Hc1o4dTbYVgaK8elmU9PolihVODopF0PiG5maetVIOCfCM1BBPKTU26ZWjEtk8JD`   // passing URl to the function

    
    catGallery(apiUrl)                                                            // calling the function
    .then((data)=> {                                                              // getting the response object and applying data based on requirement 
        let display = document.querySelector(".row");                             // getting the HTML collection
        for(let i=0;i<data.length;i++){                                           // iteration
            console.log(data[i].url);   
            display.innerHTML+=`<div class="card m-3" style="width:18rem;">       
            <img src=${data[i].url} class=" rounded m-3">         
          </div>`                                                                  //  adding card to HTML page
            
        }
         })
    .catch((error)=>{                                                               //  catch the error status 
        console.log(`Error fetching data:${error}`) 
    })

    let button = document.querySelector(".btn");                                    // calling the button with the className
        
        button.addEventListener('click',()=>{                                       // Adding add event listener to the button
             location.reload();                                                     // Reload the entire page to get the random image in the HTML page

        });