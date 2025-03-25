class ListNode{
    value: number;
    next: ListNode | null

    constructor(value: number){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;

    constructor() {
        this.head = null
        this.tail = null
    }

    insertAtHead(value: number): void {
        const newNode = new ListNode(value);
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode
        }
    }

    insertAtTail(value: number):void{
        const newNode = new ListNode(value)
        if(this.tail === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    delete(value: number): boolean{
        if (this.head === null) return false;
        
        //handle case where head needs to be deleted
        if (this.head.value === value){
            this.head = this.head.next;
            if (this.head === null){
                this.tail = null;
            }
            return true;
        }

        let current: ListNode | null = this.head;
        while(current.next !== null){
            if(current.next.value === value){
                current.next = current.next.next;
                if (current.next == null){
                    this.tail = current;
                }
                return true;
            }
            current = current.next;

        }
        return false;
    }

    toArray(): number[]{
        const result: number[] = [];
        let current = this.head;
        while (current !== null){
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

}

//test the imple
const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(5);
ll.insertAtTail(15);
ll.delete(10);
console.log(ll.toArray()); // Expected Output: [5, 15]