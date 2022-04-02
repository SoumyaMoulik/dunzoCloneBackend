function myFunction() {
    window.location.href = "http://google.com";
}
document.getElementById("logo").addEventListener("click", hello);
        function hello() {
            window.location.href = "./index.html"
        }
       
        var data = localStorage.getItem("location");
        data = JSON.parse(data);
        if (data == null) {
            var place = "Mumbai";
            place = JSON.stringify(place)
            localStorage.setItem("location", place);
        }
        // location functionality
        document.getElementById("set_location").addEventListener("click", getLoc);
        function getLoc() {
            var input = prompt("Please enter your location.");
            var place = "Delhi"
            if (localStorage.getItem("location") == null) {
                localStorage.setItem("location", JSON.stringify("place"));
            } else if (localStorage.getItem("location") != null) {
                var data = localStorage.getItem("location");
                data = JSON.parse(data);
                if (data != input) {
                    localStorage.setItem("location", JSON.stringify(input));
                }
            }
        }

        function showData(){
            if(localStorage.getItem("location")!=null){
                var data = JSON.parse(localStorage.getItem("location"));
                document.getElementById("location").innerText=data;
                document.getElementById("location1").innerText=data;
                document.getElementById("homeloc").innerText=`India > ${data}`
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
                if(data!=input&&input!=""){
                    localStorage.setItem("location",JSON.stringify(input));
                } 
            }
            }