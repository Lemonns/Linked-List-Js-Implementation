class Node {
    constructor(value=null, nextNode=null) {
        this.nextNode = nextNode;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    prepend(value) {
        let newHead = new Node(value)
        newHead.nextNode = this.head
        this.head = newHead
    }

    append(value) {
        let newNode = new Node(value)
        
        if (this.head == null) this.prepend(newNode)
        else {
            let pointer = this.head
            while (pointer.nextNode !== null) 
                pointer = pointer.nextNode 

            pointer.nextNode = newNode
        }
    }

    get_size() {
        let tot = 0
        let pointer = this.head

        if (pointer == null) return 0
        
        tot++ //adds 1 bc we have a head
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
            tot++
        }
        return tot
        
    }

    //returns value of the first node
    get_head() {
        return this.head.value
    }

    //returns value of the last node
    get_tail() {
        let pointer = this.head

        if (pointer == null) return null
        else if (pointer.nextNode == null) return pointer.value
        
        while (pointer.nextNode !== null) 
            pointer = pointer.nextNode
        
        return pointer

    }
    
    at(index) {
        let pointer = this.head

        if (pointer == null) return null
        else if (pointer.nextNode == null) return pointer.value

        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode
        }

        return pointer
    }

    pop() {
        let pointer = this.at(this.get_size()-2)
        pointer.nextNode = null
    }

    contains(value) {
        const range = this.get_size()
        for (let i = 0; i < range; i++) {
            if (this.at(i).value == value) return true
        }
        return false
    }

    find(value) {
        let index = 0
        const range = this.get_size()
        for (let i = 0; i < range; i++) {
            index = i
            if (this.at(i).value == value) return index
        }
        return null
    }

    toString() {
        let pointer = this.head
        let string = ""
        while (pointer !== null) {
            string += `(${pointer.value}) -> `
            pointer = pointer.nextNode
        }
        return string + null
    }

    indexAt(value, index) {
        
    }
}









let sampleList = new LinkedList()

sampleList.prepend(5) //index 0
sampleList.append(7) //index 1
sampleList.append(78) // index 2 ...
sampleList.append(278)
sampleList.append(9)
sampleList.append(1)
sampleList.append(53)
sampleList.append(433)
sampleList.append(12)
console.log(sampleList.get_size())
console.log(sampleList.get_tail())
sampleList.pop()
console.log(sampleList.get_size())
console.log(sampleList.at(2).value)
console.log(sampleList.contains(7))
console.log(sampleList.find(78))
sampleList.pop()
sampleList.pop()
console.log(sampleList.toString())

