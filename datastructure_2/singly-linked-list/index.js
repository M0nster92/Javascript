class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length -= 1;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  printList() {
    console.log("Printing the linked list ---> length:", this.length);
    let temp = this.head;
    if (!this.head) {
      console.log("List is empty");
    }
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  bubbleSort() {
    let end = null;

    while (end != this.head.next) {
      let p = this.head;
      while (p.next != end) {
        let q = p.next;
        if (p.val > q.val) {
          [p.val, q.val] = [q.val, p.val];
        }
        p = p.next;
      }
      end = p;
    }
  }
}

let ll = new LinkedList();
ll.push(5);
ll.push(74);
ll.push(33);
ll.push(6);
ll.push(3);

ll.bubbleSort();
ll.printList();
