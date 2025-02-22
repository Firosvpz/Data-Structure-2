class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.cuurentLength = 0
        this.rear = -1
        this.front = -1
    }
    isFull() {
        return this.cuurentLength === this.capacity
    }
    isEmpty() {
        return this.cuurentLength === 0
    }
    enqueue(element) {
        if (!this.isFull()) {
            this.rear = this.rear + 1
            this.items[this.rear] = element
            this.cuurentLength += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.cuurentLength -= 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    print() {
        if (this.isEmpty()) {
            console.log('Queue is emptyyy');
        }
        else {
            let i
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' '
            }
            str += this.items[i]
            console.log(str);
        }
    }
}

const queue = new circularQueue(5)
console.log(queue.isEmpty());
queue.enqueue(20)
queue.enqueue(70)
queue.enqueue(40)
queue.enqueue(90)
queue.enqueue(30)
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()