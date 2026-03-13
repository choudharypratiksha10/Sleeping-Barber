const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const MAX_CHAIRS = 5;

let queue = [];
let barberSleeping = true;
let barberBusy = false;

let nextCustomerId = 1;

let totalArrived = 0;
let totalServed = 0;

function startHaircut() {

    if (queue.length === 0) {
        barberSleeping = true;
        barberBusy = false;
        return;
    }

    barberSleeping = false;
    barberBusy = true;

    const customer = queue.shift();

    console.log("Cutting hair of Customer", customer);

    setTimeout(() => {

        console.log("Finished Customer", customer);

        barberBusy = false;

        totalServed++;

        startHaircut();

    }, 10000);
}

app.post("/customer", (req, res) => {

    totalArrived++;

    if (queue.length >= MAX_CHAIRS) {

        return res.json({
            message: "Shop Full. Customer Left."
        });
    }

    const id = nextCustomerId++;

    queue.push(id);

    if (barberSleeping) {
        barberSleeping = false;
        startHaircut();
    }

    res.json({
        message: "Customer " + id + " added"
    });
});

app.get("/status", (req, res) => {

    res.json({
        barberSleeping,
        barberBusy,
        queue,
        totalArrived,
        totalServed
    });

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});