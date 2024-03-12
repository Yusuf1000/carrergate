async function getProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response);
        //convert the returned promise to an object

        const productData = await response.json();
        console.log(productData)

        //grab an empty container from the DOM
        const productCard = document.getElementById("product-card");

        //create an undefined variable
        let myCards = "";

        //loop through the array of products fetched
        productData.map((card) =>{
         myCards += `
         <div class="card">
             <img src=${card.image} alt="photo" />
            <h3>${card.title}</h3>
            <div class="amount">
                <h5>Price</h5>
                <p>&#8358${card.price}</p>
             </div>

            <div class="category">
                <h5>category</h5>
                <p>${card.category}</p>
            </div>
            <p>${card.description}</p>
        </div>
        `
     });

        productCard.innerHTML = myCards;

    } 
    
    
    catch (error) {
        alert("Not today")
    }
};

getProduct();

