A barber shop(saloon) has one barber, one barber chair and N chairs for waiting customers to sit. If there is no customer, the barber goes to sleep. When a customer arrives, he has to wake up the sleeping barber. If additional customers arrive while the barber is cutting a customer’s hair then they sit if chairs are empty, they leave the shop. Customers are serviced in First Come First Serve (FCFS) order. The problem is to program the barber and customers without getting into race condition.

# Sleeping Barber Simulation

This project simulates the classic **Sleeping Barber problem** in Operating Systems using a web-based interface. 
It demonstrates concepts like **concurrency, race conditions, and synchronization** in a visual and interactive way.

## Features
- Real-time simulation of barbers and waiting customers.
- Web frontend built with HTML, CSS, and JavaScript.
- Backend server using Node.js and Express.
- Easy to run locally with `node server.js`.

## Project Structure
- `server.js` → Node.js server that serves the frontend and handles backend logic.
- `public/` → Contains HTML, CSS, and client-side JavaScript.
- `package.json` → Project dependencies and scripts.

## How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
