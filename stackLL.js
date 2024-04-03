class Node{
   constructor(data){
     this.data=data
     this.next=null
   }
}

class linkedListStack{
   constructor(){
       this.top=null
       this.size=0
   }
   push(data){
       const node = new Node(data)
       if(!this.top){
           this.top=node
       }else{
           node.next=this.top
           this.top=node
       }
       this.size++
   }
   pop(){
       if(!this.top){
           return null
       }
       const popped = this.top.data
       this.top=this.top.next
       this.size --
       return popped
   }
   peek(){
       if(!this.top){
           return null
       }
       return this.top.data
   }
   getSize(){
       return this.size
   }
   print() {
       let current = this.top;
       const stackElements = [];
       while (current) {
           stackElements.push(current.data);
           current = current.next;
       }
       console.log("Stack:", stackElements.join(", "));
   }

}

const stack = new linkedListStack()

console.log(stack.getSize());
stack.push(300)
stack.push(350)
stack.push(200)
stack.push(250)
console.log(stack.getSize());
console.log(stack.peek());
stack.pop()
console.log(stack.getSize());
stack.print()