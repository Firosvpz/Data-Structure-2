class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(!this.items){
           return 'underflow'
        }
        return this.items.shift()
    }
    peek(){
        if(!this.items){
            return 'underflow'
        } 
        return this.items[0]
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const que = new Queue()
console.log(que.getSize());
que.enqueue(20)
que.enqueue(40)
que.enqueue(50)
que.enqueue(10)
que.print()
console.log(que.getSize());
que.dequeue()
que.dequeue()
que.dequeue()
que.dequeue()
console.log(que.peek());
que.print()