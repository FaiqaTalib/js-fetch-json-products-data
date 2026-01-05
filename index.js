 async function datafetch() {
     let response = await fetch('https://dummyjson.com/products', { method: 'get' });
     let data = await response.json();
     let record = data.products
     console.log(record[0].title);



     document.getElementById('prodrow');
     prodrow.innerHTML = '';
     for (i = 0; i < record.length; i++) {
         prodrow.innerHTML += `
         <h1 class='h1 text-center bg-primary text-light py-5'></h1>
         <div class="card" style="width: 18rem;">
  <img src="${record[i].thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${record[i].title}</h5>
    <p class="card-text">${record[i].description}</p>
    <h6>$ ${record[i].price}</h6>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
         `
     }

 }

 datafetch()