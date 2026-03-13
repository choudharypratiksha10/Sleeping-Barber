async function addCustomer() {

    const res = await fetch("/customer", {
        method: "POST"
    });

    const data = await res.json();

    alert(data.message);

    loadStatus();
}

async function loadStatus() {

    const res = await fetch("/status");

    const data = await res.json();

    const status = document.getElementById("status");
    const indicator = document.getElementById("indicator");
    const barberChair = document.getElementById("barberChair");

    if (data.barberSleeping) {

        status.innerText = "Barber Status: Sleeping";
        indicator.style.background = "red";
        barberChair.classList.remove("busy");

    }
    else if (data.barberBusy) {

        status.innerText = "Barber Status: Cutting Hair";
        indicator.style.background = "green";
        barberChair.classList.add("busy");

    }
    else {

        status.innerText = "Barber Status: Waiting";
        indicator.style.background = "orange";
        barberChair.classList.remove("busy");

    }

    const queueDiv = document.getElementById("queue");

    queueDiv.innerHTML = "";

    data.queue.forEach((c) => {

        const card = document.createElement("div");

        card.className = "customer-card";

        card.innerText = "Customer " + c;

        queueDiv.appendChild(card);

    });

    const chairs = document.querySelectorAll(".chair");

    chairs.forEach((chair, index) => {

        if (index < data.queue.length) {
            chair.classList.add("filled");
        }
        else {
            chair.classList.remove("filled");
        }

    });

    document.getElementById("arrived").innerText = data.totalArrived;
    document.getElementById("served").innerText = data.totalServed;
    document.getElementById("waiting").innerText = data.queue.length;

    updateProgress(data.barberBusy);
}

function updateProgress(isBusy) {

    const bar = document.getElementById("progress");

    if (!isBusy) {
        bar.style.width = "0%";
        return;
    }

    let width = 0;

    const interval = setInterval(() => {

        width += 10;

        bar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
        }

    }, 1000);
}

setInterval(loadStatus, 1000);

loadStatus();