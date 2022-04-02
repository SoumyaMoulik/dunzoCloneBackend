



let Fruits_Data=[
   {
      img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/YVIzdnJwRm4rM2M2YVVmT1VjUDhxQT09-product_image.jpg",
      name:'Fresh Fruits',
      volume:'1 PC',
      price:32,
      Dprice:42
   },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/YVIzdnJwRm4rM2M2YVVmT1VjUDhxQT09-product_image.jpg",
       name:'Fresh Coconut',
       volume:'1 PC',
       price:32,
       Dprice:42
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844132032_product_5bd323493cd51519e935400c_1.jpg",
       name:'Orange',
       volume:'6 PC',
       price:59,
       Dprice:87
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844008116_product_5c0916970ac44c06a6f15e0d_1.jpg",
       name:'Washington Apple',
       volume:'4 PC',
       price:181,
       Dprice:87
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135183_product_5c35dbf1b1e6c12dfdc86725_1.jpg",
       name:'Apple Royal Gala',
       volume:'6 PC',
       price:239,
       Dprice:298
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135293_product_5c35dbf1b1e6c12dfdc86747_1.jpg",
       name:'Sweet Lime - Mosambi',
       volume:'4 PC',
       price:68,
       Dprice:76
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010337_product_5c790174d661476ccea6355f_1.jpg",
       name:'Muskmelon',
       volume:'1 PC',
       price:50,
       Dprice:62
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844136632_product_5c80d9cbd8b2f755a2d44052_1.jpg",
       name:'Pineapple',
       volume:'1 PC',
       price:51,
       Dprice:63
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844133820_product_5c0e70078d92d07fdfc24835_1.jpg",
       name:'Pomegranate',
       volume:'2 PC',
       price:81,
       Dprice:120
    },
    {
       img:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010855_product_5caef825de0f3b0443a7d9d7_1.jpg",
       name:'Papaya',
       volume:'1 PC',
       price:56,
       Dprice:62
    },
]


    let fruits_Data= [Fruits_Data];
    localStorage.setItem('fruits_Data',JSON.stringify(fruits_Data));



    function display(arr) {
        let main_div = document.getElementById("prds");

        arr.forEach(function(type) {
            type.forEach(function(products,index) {
                    if(index === 0){
                        let h2 = document.createElement('h2');
                        h2.innerText = products.name;
                        h2.style.fontWeight = '100';
                        h2.style.fontSize="20px";
                        h2.style.marginLeft="22px";
                        h2.style.marginTop="22px"
                        main_div.append(h2);
                    }else{
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("id","img")
                        var details = document.createElement("div");
                        var name = document.createElement("h4")
                        var quantity = document.createElement("p");
                        var price = document.createElement("h5");
                        var button = document.createElement("button");
                        
                        // Adding all products dynamically.
                        img.src = products.img;
                        name.textContent=products.name;
                        quantity.textContent=products.volume;
                        price.textContent=`₹ ${products.price}`;
                        button.innerText="+ADD"
                        details.append(name,quantity,price);
                        quantity.setAttribute("class","quantity");
                        name.setAttribute("class","name");
                        price.setAttribute("class","name")
                        details.setAttribute("id","details")
                        div.append(img,details,button);
                        div.setAttribute("id","divs")
                        document.getElementById("prds").append(div);
                        button.addEventListener('click',moveToCart);
                        div.addEventListener('mouseenter',function(){
                            div.querySelector('h4').style.color = 'green'; 
                            div.setAttribute('class','transform');
                        })
                        div.addEventListener('mouseleave',function(){
                            div.querySelector('h4').style.color = 'black';
                            div.setAttribute('class','transformBack');
                        })
                    }
                    
            })
        });
        before_div = document.getElementById('prds');
    }

    function displayitems(e,id){
        before_element.style = "none";
        console.log(before_div)
        
        while (before_div.firstChild) {
            before_div.removeChild(before_div.lastChild);
        }

        let btn = e.target;
        btn.style.fontSize = "large";
        btn.style.fontWeight = "bold";
        btn.style.color="rgb(0, 179, 122)";
        before_element = btn;

        let itemsHead = document.getElementById('heading');
        itemsHead.innerText = btn.innerText;
        let data = JSON.parse(localStorage.getItem(id));

        if(data == null){
            let main_div = document.getElementById("prds");
            let h2 = document.createElement('h2');
            h2.innerText = "No data available";
            //h2.style.fontWeight = 'bold';
            main_div.append(h2);
        }else{
            display(JSON.parse(localStorage.getItem(id)));
        }
       
    }
    


    display(JSON.parse(localStorage.getItem('fruits_Data')));
    

    function moveToCart() {
        location.reload();
        let cart = [];
        let isThere = false;
        
        let price = event.target.parentNode.querySelector('h5').innerText;
        let arr = price.split(" ");
        price = Number(arr[1]);

        let item = {
            name:event.target.parentNode.querySelector('h4').innerText,
            img:event.target.parentNode.querySelector('img').src,
            volume:event.target.parentNode.querySelector('p').innerText,
            price:price,
            qty:1
        };
        console.log(item);

        cart = JSON.parse(localStorage.getItem('dunzoCart')); 

        if(cart === null){
            console.log('set the cart');
            cart = [item];
            localStorage.setItem('dunzoCart',JSON.stringify(cart));
        }else{
            cart.forEach(function(prd){
                if(prd.name === item.name){
                    prd.qty = prd.qty + 1;
                    isThere = true;
                } 
            });

            if(isThere == false){
                cart[cart.length]=item;
                localStorage.setItem('dunzoCart',JSON.stringify(cart));
                isThere = false;
            }else{
                localStorage.setItem('dunzoCart',JSON.stringify(cart));
            }
            
        }
        if(JSON.parse(localStorage.getItem('dunzoCart')) != null){
            //console.log("madhu")
            displayCartItems();
        }
       
    }


    function displayCartItems() {
        let total_price = 0;
        let main_div = document.getElementById('products3')
        main_div.style.overflow = 'scroll';
        let cart = JSON.parse(localStorage.getItem('dunzoCart'));
        console.log(cart);
    
            while (main_div.firstChild) {
            main_div.removeChild(main_div.lastChild);
            }

            let p = document.createElement('p');
            p.innerText = 'Your Cart';
            p.style.color="black"
            p.style.marginLeft="20px"
            let ul = document.createElement('ul');
            main_div.append(p);

            cart.forEach(function(prd){
                let li = document.createElement('li');
                li.style.display = 'flex';
                li.style.marginBottom = '15px'

                let div1 = document.createElement('div');
                div1.style.width = '40%'
                let h3 = document.createElement('h3');
                h3.innerText = prd.name;
                h3.style.fontWeight = 'lighter';
                let h5 = document.createElement('h5');
                h5.style.fontWeight = 'lighter';
                h5.innerText = prd.volume;

                let div2 = document.createElement('div');
                div2.id = "box";
                div2.style.width = '15%'
                let btn1 = document.createElement('button');
                btn1.id = 'minus';
                btn1.addEventListener('click',function(){
                    //jkjashljkhfdlhaiuldhvjahdjbvc
                    let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                    let cart = JSON.parse(localStorage.getItem('dunzoCart'));

                    cart.forEach(function(prd,index){
                        if(prd.name == name){
                            prd.qty = prd.qty-1;
                            if(prd.qty == 0){
                                cart.splice(index,1)
                               
                            }
                            total_price -= prd.price;
                        }
                    });
                    localStorage.removeItem('dunzoCart')
                    localStorage.setItem('dunzoCart',JSON.stringify(cart));
                    location.reload();
                    if(JSON.parse(localStorage.getItem('dunzoCart')).length === 0){
                        localStorage.removeItem('dunzoCart')
                    }

                })


                let span = document.createElement('span');
                span.id ='val';


                let btn2 = document.createElement('button');
                btn2.id = 'plus';
                btn2.addEventListener('click',function(){
                    
                    let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                    let cart = JSON.parse(localStorage.getItem('dunzoCart'));

                    cart.forEach(function(prd){
                        if(prd.name == name){
                            prd.qty = prd.qty+1;
                            total_price += prd.price;
                        }
                    });
                    localStorage.removeItem('dunzoCart')
                    localStorage.setItem('dunzoCart',JSON.stringify(cart));
                    location.reload();
                })
                
                span.innerText = prd.qty;
                btn1.innerText = '-';
                btn2.innerText = '+';

                let div3 = document.createElement('div');
                div3.style.width = '20%'
                let h4 = document.createElement('h4');
                h4.innerText = '₹'+ prd.price * prd.qty;

                total_price += prd.price*prd.qty;

                div1.append(h3,h5);
                div2.append(btn1,span,btn2);
                div3.append(h4)
                li.append(div1,div2,div3);
                ul.append(li)
                
            })
                let div4 = document.createElement('div');
                div4.id = 'checkout';
                let checkout_btn = document.createElement('button');
                checkout_btn.innerText = `Checkout ₹${total_price}`;
                checkout_btn.setAttribute("class","checkout")
                checkout_btn.addEventListener('click',function(){
                    window.location.href = "./cart.html";
                });
                div4.append(checkout_btn);

            main_div.append(ul,div4);
           
    }

    if(JSON.parse(localStorage.getItem('dunzoCart')) != null){
        displayCartItems();
    }
    // logo redirect to home;
    document.getElementById("logo").addEventListener("click",redirect);
    function redirect(){
        window.location.href="./index.html"
    }
    //adding location;
    document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"));
    document.getElementById("set_location").addEventListener("click",getLoc);
        function getLoc(){
            var input = prompt("Please enter your location.");
            if(localStorage.getItem("location")==null){
                localStorage.setItem("location",JSON.stringify(input));
            }else if(localStorage.getItem("location")!=null){
            var data = localStorage.getItem("location");
            data = JSON.parse(data);
            if(data!=input){
                localStorage.setItem("location",JSON.stringify(input));
            } 
        }
    }
    document.getElementById("cart").addEventListener("click",cart);
    function cart(){
        window.location.href="./cart.html"
        }
        //shops location
        document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`

        if(JSON.parse(localStorage.getItem('dunzoCart')) != null){
            var circle = document.getElementById('circle');

            let arr = JSON.parse(localStorage.getItem('dunzoCart'));
            let qty = 0;

            arr.forEach(function(prd){
                qty += prd.qty;
            });

            circle.innerText = qty;
        }else{
            document.getElementById('circle').style.display = "none";
        }

          // navbar logo functionality
    document.getElementById("logo").addEventListener("click", hello);
    function hello() {
        window.location.href = "./index.html"
    }