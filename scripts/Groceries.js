// let stores = [
//     {
//         name:"Poorti Supermarket",
//         area:"Marol Military Road",
//         distance:1.2,
//         timeTakes:30,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/5e252a0e-ba37-4b86-a1d1-711f6e361168-1563962206090-store_image.jpg'
//     },
//     {
//         name:"Om Sai Dairy",
//         area:"kurla west",
//         distance:1,
//         timeTakes:36,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/NzlLemhwaTdOMjFLQk9JQUdXdDJWUT09-1598353288299-store_image.jpg'
//     },
//     {
//         name:"Maharashtra Dairy Farm",
//         area:"Bandra West",
//         distance:1.1,
//         timeTakes:45,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/SFV6dE8vQ3VGUFg3VHpHSk92V0FHZz09-1600427663123-store_image.jpg'
//     },
//     {
//         name:"Ambika Dairy & General Store",
//         area:"Ghatkopar",
//         distance:0.6,
//         timeTakes:23,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/UFZ2dnRIbzA0YmcwUUJ3U2VscjFIQT09-1578920151950-store_image.jpg'
//     },
//     {
//         name:"DS Foods",
//         area:"Santacruz",
//         distance:4.2,
//         timeTakes:40,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/849faef2-28dd-4997-9914-b76191be3324-1630308368220-store_image.jpg'
//     },
//     {
//         name:"Maya Mart 24x7",
//         area:"Chembur",
//         distance:5.3,
//         timeTakes:50,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/0d2207f2-bd18-4245-a2ce-125aafb3955f-1606815438888-store_image.jpg'
//     },
//     {
//         name:"Xpress Basket",
//         area:"khar",
//         distance:3.9,
//         timeTakes:28,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/87e7648c-290e-4fdb-9ff2-9e8cc15d2c5e-1607518175103-store_image.jpeg'
//     },
//     {
//         name:"Kwality Wall's",
//         area:"Powai",
//         distance:15.2,
//         timeTakes:46,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-220,h-220,cm-pad_resize_store_thumbnail/stores/TUtZckw5Vldyd3IzeXExQ1I0bExCZz09-1592307253125-store_image.jpg'
//     },
// ];

document.getElementById("logo").addEventListener("click", hello);
        function hello() {
            window.location.href = "./index.html"
        }

//fetch api    -------------------- heroku api ------------------------------
let url = `https://dunzo-clone-masai.herokuapp.com/grocery`;
async function FetchApi(){
    try {
        
        let res = await fetch(url);
        let data = await res.json()
        console.log(data)
        showItems(data)
    } catch (error) {
        console.log(error)
    }
}
FetchApi()

// display apis in dom 
function showItems(data){
    data.forEach(function(product){
        console.log(product)
    var div = document.createElement("div");
    var details = document.createElement("div");
    var icon_link = document.createElement("img");
    var shop = document.createElement("p");
    var area = document.createElement("p");
    var distance = document.createElement("p");
      icon_link.src = product.icon_link;
        shop.innerText=product.shop;
        shop.style.fontSize="18px"
        icon_link.style.borderRadius=`${15}px`
        area.innerText=product.area;
        distance.innerText=product.distance+" km";
        area.style.color="grey";
        distance.style.color="grey";
        div.addEventListener("click",call);
        details.append(shop,area,distance);
        details.setAttribute("id","details");
        div.setAttribute("id","store");
        div.append(icon_link,details);
        document.getElementById("body").appendChild(div);
    })
}
// showItems();
function call(){
window.location.href="./Groceries_cart.html"
}
document.getElementById("search").addEventListener("click",refer);
    function refer(){
        window.location.href=".././search.html"
    }
    // document.getElementById("logo").addEventListener("click",home);
    function showData(){
        if(localStorage.getItem("location")!=null){
        var data = JSON.parse(localStorage.getItem("location"));
        document.getElementById("location").innerHTML=data;
        document.getElementById("location1").innerHTML=`Groceries & Essentials in ${data}`
    }
}
    showData();
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