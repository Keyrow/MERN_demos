class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(item) {
    this.items.push(item);
  }

  deQueue() {
    return this.items.shift();
  }

  len() {
    return this.items.length;
  }
}

const orderFactory = (name, itemName) => {
  return {
    name: name, // long form
    itemName, // short hand, if key name matches
    orderedAt: new Date(),
    completedAt: null
  };
};

// destructur object argument into individual parameters by key name
// shorthand return notation, parenthesis needed because returning an object
const customerFactory = ({ firstName, lastName }) => ({
  firstName,
  lastName,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getCoffee(store) {
    store.orderLine.enQueue(this);
  }
});

const addressFactory = ({ number, street, city, state, zip }) => {
  return {
    number,
    street,
    city,
    state,
    zip
  };
};

class CoffeeShop {
  constructor({ name, address }) {
    this.name = name;
    this.address = address;
    this.processedOrders = [];
    this.pendingOrders = new Queue();
    this.orderLine = new Queue();
    this.takeOrders();
    this.processOrders();
  }

  takeOrders() {
    setInterval(() => {
      console.log("takeORders interval");

      if (this.orderLine.len() > 0) {
        this.orderPrompt(this.orderLine.deQueue());
      }
    }, 5000);
  }
  orderPrompt(customer) {
    const order = prompt(
      `Hello ${customer.fullName()}. Place your order at ${this.name}`
    );

    if (order !== null) {
      this.pendingOrders.enQueue(orderFactory(customer.fullName(), order));
    }
  }
  processOrders() {
    setInterval(() => {
      if (this.pendingOrders.len() > 0) {
        const currentOrder = this.pendingOrders.deQueue();
        currentOrder.completedAt = new Date();
        this.processedOrders.push(currentOrder);

        console.log("Order ready:");
        console.log(currentOrder);
      }
    }, 10000);
  }
}

const quang = customerFactory({
  firstName: "Quang",
  lastName: "Waldo"
});

const chad = customerFactory({
  firstName: "Chad",
  lastName: "Flex"
});

const logan = customerFactory({
  firstName: "Logan",
  lastName: "Steele"
});

const lostBean = new CoffeeShop({
  name: "The Bean Whomste Knows Not His Location",
  address: addressFactory({
    number: 10,
    street: "Susan",
    city: "Costa Mesa",
    state: "CA",
    zip: 92626
  })
});

quang.getCoffee(lostBean);
chad.getCoffee(lostBean);
logan.getCoffee(lostBean);
