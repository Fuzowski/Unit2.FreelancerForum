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
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return (total / freelancers.length).toFixed(2);
}
const container = document.getElementById("freelancer-container");
const averaragePriceDisplay =document.getElementById("average-price")

function renderFreeLancers(){
    
    container.innerHTML = ""; // clear previous freelancers
}

freelancers.forEach(freelancers => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.innerHTML = `
    <p><strong> ${freelancers.name}<strong></p>
    <p> ${freelancers.occupation} </p>
    <p>Starting Price: $${freelancers.price}</p>
     `

  container.appendChild(freelancerDiv);
});

    // Update the average price display
     averaragePriceDisplay.textContent = calculateAveragePrice();

function addRandomFreelancers() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = prices [Math.floor(Math.randdom() * prices.length)];

    freelancers.push({name: randomName, occupation: randdomOccupation, price: randomPrice});
    renderFreeLancers();
}

// Initail render
renderFreeLancers();

// Add a new freelancer every 5 seconds
setInterval(addRandomFreelancers, 5000);

console.log(addRandomFreelancers)

