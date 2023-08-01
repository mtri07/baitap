function loadCates(){
    fetch("data/categories.json").then(res=>res.json()).then(data => {
        let h = "";
        for(let c of data)
            h+=`<li><a href="#">${c.name}</a></li>`;

        let e = document.getElementById("menu");
        if(e !== null){
            e.innerHTML += h;
        }
    })
}

function loadProducts(){
    fetch("data/products.json").then(res=>res.json()).then(data => {
        let h ="";
        for(let c of data){
            h+= `<div class="product">
            <div>
                <div><img src="${c.image}" alt="iPhone" /></div>
                <h3>${c.name}</h3>
                <p>${c.price}</p>
                <a href="javascript:;" class="del">&times;</a>
            </div>
        </div>`;
        }
        let e = document.getElementById("products");
        if(e !== null)
        {
            e.innerHTML = h;
            //nap ban cho no dong bo
            let buttons = document.getElementsByClassName("del");
            for(let b of buttons){
                b.addEvenlistener("click", function(){
                    if(confirm("Ban chac chan muon xoa khong?") === true)
                         this.parentNode.parentNode.remove(); 
                });
            }
        }
    })
}

window.onload = function(){
    loadCates();
    loadProducts();
}