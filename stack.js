class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            console.log('stack underflow');
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            console.log('there is no elements');
        }
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.print()
console.log('peak:',stack.peek());
stack.pop()
stack.print()
console.log(stack.getSize());