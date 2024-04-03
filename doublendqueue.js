class Deque {
    constructor() {
      this.items = [];
    }
  
    // Add element to the front of the deque
    addFront(element) {
      this.items.unshift(element);
    }
  
    // Add element to the back of the deque
    addBack(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the front of the deque
    removeFront() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // Remove and return the element from the back of the deque
    removeBack() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Get the element from the front of the deque without removing it
    peekFront() {
      return this.isEmpty() ? null : this.items[0];
    }
  
    // Get the element from the back of the deque without removing it
    peekBack() {
      return this.isEmpty() ? null : this.items[this.items.length - 1];
    }
  
    // Check if the deque is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the deque
    size() {
      return this.items.length;
    }
  
    // Print the elements of the deque
    print() {
      console.log(this.items);
    }
  }
  
  // Example usage:
  const deque = new Deque();
  deque.addBack(1);
  deque.addBack(2);
  deque.addFront(0);
  deque.print(); // Output: [0, 1, 2]
  console.log(deque.removeFront()); // Output: 0
  console.log(deque.removeBack()); // Output: 2
  