//Beginning of Data
const names = ["Tracey", "Blake", "Chelby", "Derek", "indi"];
const occupations = ["Pro Gamer", "Model", "Welder", "Photographer", "Streamer"];
const prices = [400, 1200, 800, 2200, 1400 ]

let freelancers = [
    {name: "Fuzo" , occupation: "Streamer" , price: 400},
    {name: "Tracey", occupation: "Model" , price: 1200},
    {name: "Chelby", occupation: "Photographer", price: 2200},
    {name: "Indi", occupation: "Streamer", price: 1400},
    {name: "Derek", occupation: "Welder", price: 800},
];

// calculate the average starting price
function calculateAveragePrice(freelancers) {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 2);
    return total / freelancers.length;
}

function renderFreeLancers(){
    const container = document.getbyElementById("freelancer-container");
    container.innerHTML = ""; // clear previous freelancers
}

freelancers.forEach(freelancers => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.innerHTML =

  container.appendChild(freelancerDiv);
}

)