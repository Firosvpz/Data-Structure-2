class Stack{
    constructor(){
        this.top=[]
        this.size=0
    }
    push(element){
        return this.top.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }else{
            this.top.pop()
        }
    }
    isEmpty(){
        return this.top.length===0
    }
    getSize(){
        return this.top.length
    }
    print(){
        let element=0
        let arr=[]
        for(let i=0;i<arr.length;i++){
            arr.push(element)
        }
    }
}

const st = new Stack()
st.push(30)
st.push(40)
console.log(st.getSize());
st.pop()
console.log(st.getSize());