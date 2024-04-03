class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.tail = null; 
        this.size = 0;
    }
    enqueue(data) {
        const node = new Node(data);
        if (!this.tail) {
            this.front = node;
            this.tail = node;
        } else {
            this.tail.next = node; // Update tail's next to point to the new node
            this.tail = node; // Update tail to the new node
        }
        this.size++;
    }
    dequeue() {
        if (!this.front) {
            return null;
        }
        const dequeued = this.front.data;
        this.front = this.front.next;
        this.size--;
        return dequeued;
    }
    peek() {
        if (!this.front) {
            return null;
        }
        return this.front.data;
    }
    getSize() {
        return this.size;
    }
    print() {
        let current = this.front; // Start from the front node
        const queueElements = [];
        while (current) {
            queueElements.push(current.data); // Add current data to the queueElements array
            current = current.next; // Move to the next node
        }
        console.log("Queue:", queueElements.join(", ")); // Print the queue elements
    }
}

const que = new LinkedListQueue();

que.enqueue(500);
que.enqueue(800);
que.enqueue(300);
que.enqueue(200);
que.print(); // Output: Queue: 500, 800, 300, 200
