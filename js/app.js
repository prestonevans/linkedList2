class LinkedList {
	constructor() {
		this.head = this.tail = null;
	}
	append(value) {
		if (!this.tail) {
			this.head = this.tail = new Node(value);
		} else {
			let oldTail = this.tail;
			this.tail = new Node(value);
			oldTail.next = this.tail;
			this.tail.prev = oldTail;
		}
	}
	prepend(value) {
		if (!this.head) {
			this.head = this.tail = new Node(value);
		} else {
			let oldHead = this.head;
			this.head = new Node(value);
			oldHead.prev = this.head;
			this.head.next = oldHead;
		}
	}
	deleteHead() {
		if (!this.head) {
			return null;
		} else {
			let oldHead = this.head;
			if (this.head === this.tail) {
				this.head = this.tail = null;
				return oldHead.value;
			}
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
			return oldHead.value;
		}
	}
	deleteTail() {
		if (!this.tail) {
			return null;
		} else {
			let oldTail = this.tail;
			if (this.tail === this.head) {
				this.head = this.tail = null;
				return oldTail.value;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null;
				oldTail.prev = null;
				return oldTail.value;
			}
		}
	}
	search(val) {
		let current = this.head;
		while (current != null) {
			if (this.head.value === val) {
				return val;
			} else {
				current = current.next;
			}
		}
		return null;
	}
}

class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.prev = prev || null;
		this.next = next || null;
	}
}

const linkedlist = new LinkedList();

linkedlist.prepend('Hello');
console.log(linkedlist.search('Hello'));
linkedlist.prepend('Hello2');
linkedlist.prepend('No I said hello first');
console.log(linkedlist.deleteTail());
console.log(linkedlist.deleteHead());
console.log(linkedlist.deleteTail());
console.log(linkedlist.deleteTail());
console.log(linkedlist.deleteTail());
// console.log(linkedlist.deleteHead());
// console.log(linkedlist.deleteHead());
// console.log(linkedlist.deleteHead());
// console.log(linkedlist.deleteHead());
console.log(linkedlist);
// linkedlist.append('tester');
// console.log(linkedlist);
