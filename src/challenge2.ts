class Stack<T> {
    private items: T[]

    constructor(){
        this.items = [];
    }

    push(value: T): void{
        this.items.push(value);
    }

    pop():T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items.length > 0 ? this.items[this.items.length -1]: undefined;
    }

    size(): number{
        return this.items.length;
    }
}

//test the imple
const s = new Stack<number>();
s.push(1);
s.push(2);
console.log(s.peek());  // Expected: 2
console.log(s.pop());    // Expected: 2
console.log(s.size());   // Expected: 1