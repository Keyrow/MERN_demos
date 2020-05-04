// FIFO (First in First Out Queue Data Structure)
class Queue {
  // __init__
  constructor() {
    // this instead of self
    this.items = [];
  }

  // add to back of line
  enQueue(item) {
    this.items.push(item);
  }

  // remove first person in line (to service)
  deQueue() {
    return this.items.shift();
  }

  len() {
    return this.items.length;
  }
}

class Order {
  constructor(customerName, itemName) {
    this.customerName = customerName;
    this.itemName = itemName;
    this.orderedAt = new Date();
    this.completedAt = null;
  }
}

class Customer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  getCoffee(store) {
    // this customer gets in line, which customer the getCoffe method is called on
    store.orderLine.enQueue(this);
    console.log(`${this.fullName()} is queueing for coffee at ${store.name}`);
  }
}

const scott = new Customer("Scott", "Cho");
const isiah = new Customer("Isiah", "Fletcher");
const patrick = new Customer("Patrick", "Hebert");

class Address {
  constructor(number, street, city, state, zip) {
    this.number = number;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

class CoffeeShop {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.processedOrders = [];
    this.pendingOrders = new Queue();
    this.orderLine = new Queue();
    this.takeOrders(); // start the take orders interval which will run very 5 seconds
    this.processOrders();
  }

  printPendingOrders() {
    let str = "";

    for (let i = 0; i < this.pendingOrders.items.length; ++i) {
      const order = this.pendingOrders.items[i];

      str += `${i}: ${order.customerName} - ${order.itemName}\n`;
    }
    console.log(str);
  }

  orderPrompt(customer) {
    const orderText = prompt(
      `Hello ${customer.fullName()}. Place your order at ${this.name}`
    );

    if (orderText === null || orderText === "") {
      return;
    }

    const order = new Order(customer.fullName(), orderText);
    this.pendingOrders.enQueue(order);
    this.printPendingOrders();
  }

  takeOrders() {
    setInterval(() => {
      if (this.orderLine.len() > 0) {
        const nextCustomer = this.orderLine.deQueue();
        this.orderPrompt(nextCustomer);
      }
    }, 5000);
  }

  processOrders() {
    setInterval(() => {
      if (this.pendingOrders.len() > 0) {
        // imagine taking the order out of the queue means the drink has been made
        const currentOrder = this.pendingOrders.deQueue();
        currentOrder.completedAt = new Date();
        this.processedOrders.push(currentOrder);

        console.log(`Order ready:`, currentOrder);
      }
    }, 10000);
  }
}

const lostBean = new CoffeeShop(
  "The Bean Whomst Knows Not His Location",
  new Address(3335, "Susan St.", "Costa Mesa", "CA", 92626)
);

scott.getCoffee(lostBean);
isiah.getCoffee(lostBean);
patrick.getCoffee(lostBean);
console.log(lostBean);
