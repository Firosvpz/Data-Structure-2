class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(50)
queue.enqueue(100)
queue.enqueue(500)
queue.enqueue(5000)
queue.print()
queue.dequeue()
queue.print()
