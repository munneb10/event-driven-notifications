# 🪩 Event-Driven Notification System

*A tiny project that teaches you one of the biggest lessons in software architecture.*

---

### 💡 The Idea

In big systems, services rarely talk to each other directly.
Instead, they whisper events into the air *“A user just signed up!”*, *“An order was placed!”* and whoever’s interested listens and reacts.

That’s how **Netflix sends you emails**, **GitHub triggers actions**, or **Stripe updates dashboards** they’re all event-driven under the hood.

This project is a **mini simulation of that world**, built entirely in **TypeScript**, showing how *event-driven systems* decouple logic and make everything scalable, asynchronous, and beautifully clean.

---

### ⚙️ What Happens

1. A **user registers** → `UserService` emits a `user:registered` event
2. A **notification service** listens and sends a “Welcome Email”
3. An **order is placed** → `OrderService` emits an `order:placed` event
4. The same notification service reacts again “Order confirmation sent”

No one calls anyone directly.
They just publish and subscribe to events. ✨

---

### 🛠 Setup & Run

```bash
npm install
npm start
```

Expected output:

```
👤 User registered: Alice
📩 Welcome email sent to Alice!
📦 Order placed for MacBook Pro
🛒 Order confirmation sent for order #123456789
```

---

### 🧠 What You’ll Learn

* How **event buses** work (like a simplified Kafka or SNS)
* How to design **loosely coupled microservices**
* Why asynchronous, reactive systems scale better
* How simple patterns (Observer, Pub/Sub) build the foundation of distributed systems

---

### ✨ Closing Thought

This project might look small, but it carries a big idea:

> *“In great systems, communication is an event not a call.”*

Once you feel this pattern click, you’ll start seeing it everywhere from frontend frameworks to massive backend architectures.

---

### 🧰 Tech Stack

* **TypeScript**
* **Node.js**
* No external frameworks pure logic

---

### 📚 Explore & Fork

If you like small, concept-driven projects like this, check out my GitHub I build minimal clones that teach **software engineering principles in motion**.
