fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data=>{
    console.log(data);
    console.log(data.limit);
    console.log(data.total);
    let tot=data.total
    console.log(data.products[5]);
    let prdata=data.products[5].title
    let productlist=document.getElementById("container")
    productlist.innerText= tot + prdata
  });

 