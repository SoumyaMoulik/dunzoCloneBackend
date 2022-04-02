let url = `http://localhost:5000/grocery`;
async function FetchApi(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        appendData(data)
    } catch (error) {
        console.log("error",error);
    }
}
FetchApi();

function appendData(data){
    data.forEach(element => {
        console.log(element);
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = element.shop;
        p.innerText = element.area;

        p.innerText = element.distance;


        

        let img = document.createElement("img");
        img.src = element.icon_link;

        div.append(p,img);
        document.querySelector(".main").append(div);

    });
}
