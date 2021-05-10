let container = document.querySelector(".container");
let api = new XMLHttpRequest();
let id = 0;
api.open("GET", " https://ghibliapi.herokuapp.com/films ");
api.onload = () => {
    let data = JSON.parse(api.response);
    let id = 1;
    if(api.status >= 200 && api.status < 400){
        data.forEach(item => {
            container.innerHTML += `
                   <div class="card" id="id${id}">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <button onclick="expendInfo(${id})">More</button>
                        <div class="more" id="more${id}">
                            <h5>Japanese Name : ${item.original_title}(${item.original_title_romanised})</h5>
                            <p>Release Date : ${item.release_date}</p>
                            <p>Running Time : ${item.running_time} min</p>
                            <p>Tomato Rating : ${item.rt_score}</p>
                        </div>
                    </div>
                `
            id++;
            console.log(item);
        })
    }else{
        console.log("Error")
    }
}
api.send();


// Function for expending information

function expendInfo(id) {
    let current = document.getElementById(`id${id}`);
    let currentMore = document.getElementById(`more${id}`);
    currentMore.classList.toggle("display");
}