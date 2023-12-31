const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 600;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);

const n = 200;
const cars = generateCars(n);
let bestCar = cars[0];

let mutationPotency;

const storedPotency = localStorage.getItem("potency");

if (storedPotency !== null || storedPotency !== undefined) {
    mutationPotency = parseFloat(storedPotency);
} else {
    mutationPotency = 0.1;
}
console.log(mutationPotency);

if (localStorage.getItem("bestBrain")) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].brain = JSON.parse(localStorage.getItem("bestBrain"));

        if (i != 0) {
            NeuralNetwork.mutate(cars[i].brain, mutationPotency); //0.05 for similar, 0.1 for normal, 0.2 for spread
        }
    }
    console.log(mutationPotency);
}

const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2), 
    new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2.02), 
    new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(0), -500, 30, 50, "DUMMY", 2.02),
    new Car(road.getLaneCenter(1), -500, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -700, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -700, 30, 50, "DUMMY", 2.02),
    new Car(road.getLaneCenter(1), -900, 30, 50, "DUMMY", 2), 
    new Car(road.getLaneCenter(0), -900, 30, 50, "DUMMY", 2), 
    new Car(road.getLaneCenter(2), -1100, 30, 50, "DUMMY", 2.02),
    new Car(road.getLaneCenter(0), -1100, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -1300, 30, 50, "DUMMY", 2.02),
    new Car(road.getLaneCenter(1), -1300, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(2), -1500, 30, 50, "DUMMY", 2),
    new Car(road.getLaneCenter(1), -1500, 30, 50, "DUMMY", 2.1),
    new Car(road.getLaneCenter(0), -1500, 30, 50, "DUMMY", 2)
];

animate();

function save() {
    localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain));
}

function discard() {
    localStorage.removeItem("bestBrain");
}

function mutationSelection(mode) {
    if (mode === "low") {
        localStorage.setItem("potency", 0.05);
        mutationPotency = 0.05; // Low
    } else if (mode === "high") {
        mutationPotency = 0.2; // High
        localStorage.setItem("potency", 0.2);
    } else {
        mutationPotency = 0.1; // Normal
        localStorage.setItem("potency", 0.1);
    }
    console.log(mutationPotency);
}

function restart() {
    location.reload();
}

function generateCars(n) {
    const cars = [];

    for (let i = 0; i <= n; i++) {
        cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
    }

    return cars;
}

function animate(time) {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    
    for (let i = 0; i < cars.length; i++) {
        cars[i].update(road.borders, traffic);
    }

    // Car with least y value.
    bestCar = cars.find(c => c.y == Math.min(...cars.map(c => c.y)));

    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);

    road.draw(carCtx);

    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, "red");
    }

    carCtx.globalAlpha = 0.2;

    for (let i = 0; i < cars.length; i++) {
        cars[i].draw(carCtx, "blue");
    }

    // Draw most successful car without transparency. 
    carCtx.globalAlpha = 1;
    bestCar.draw(carCtx, "blue", true);

    carCtx.restore();

    networkCtx.lineDashOffset = -time / 50;

    Visualizer.drawNetwork(networkCtx, bestCar.brain);
    requestAnimationFrame(animate);
}





