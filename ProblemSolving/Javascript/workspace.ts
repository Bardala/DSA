class MinHeap {
    minHeap: number[] = [];
    constructor() { }

    public insert(value: number) {
        this.minHeap.push(value);

        if (this.minHeap.length > 1) { // if more than 1 element
            let currentIndex = this.minHeap.length - 1; // last index 
            let parentIndex = Math.floor(currentIndex / 2);
            // (parent > child) -> swap
            while (currentIndex > 0 && this.minHeap[parentIndex] > this.minHeap[currentIndex]) {
                this.swap(currentIndex, parentIndex); // ex: [1,2,3] -> [2,1,3]
                currentIndex = parentIndex;
                parentIndex = Math.floor(currentIndex / 2)
            }
        }
    }

    swap(a: number, b: number) {
        [this.minHeap[a], this.minHeap[b]] = [this.minHeap[b], this.minHeap[a]];
    }

    public remove() {
        if (this.minHeap.length > 1) { // if more than 1 element -> swap
            this.minHeap[0] = this.minHeap.pop() as number; // last element

            let current = 0;
            let leftChild = current * 2 + 1;
            let rightChild = current * 2 + 2;

            // if parent > child -> swap
            while (this.minHeap[leftChild] && this.minHeap[rightChild]
                &&
                (this.minHeap[current] > this.minHeap[leftChild]
                    ||
                    this.minHeap[current] > this.minHeap[rightChild])
            ) {
                if (this.minHeap[leftChild] < this.minHeap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
                leftChild = current * 2 + 1;
                rightChild = current * 2 + 2;
            }

            if (this.minHeap[leftChild] && this.minHeap[current] > this.minHeap[leftChild]) {
                this.swap(current, leftChild);
            }

        } else if (this.minHeap.length === 1) {
            this.minHeap.pop();
        } else {
            return null;
        }
    }

    size(): number {
        return this.minHeap.length;
    }

    first(): number {
        return this.minHeap[0]
    }

    removeFirst(): void {
        this.minHeap.shift()
    }
}

class KthLargest {
    private heap: MinHeap;
    private k: number;

    constructor(k: number, nums: number[]) {
        this.heap = new MinHeap();
        this.k = k;
        for (let i of nums) {
            this.heap.insert(i);
        }
    }

    add(val: number): number {
        this.heap.insert(val);
        while (this.heap.size() > this.k) {
            this.heap.remove()
        }


        return this.heap.first();
    }
}

let kthLargest0 = new KthLargest(3, [4, 5, 8, 2]);  // [2,4,5,8]
console.log(kthLargest0.add(3));   // returns 4 -> [3,4,5,8]
console.log(kthLargest0.add(5));   // returns 5 -> [4,5,5,8]
console.log(kthLargest0.add(10));  // returns 5 -> [5,8,10]
console.log(kthLargest0.add(9));   // returns 8 -> [8,9,10]
console.log('\n')

let kthLargest1 = new KthLargest(1, []); // []
console.log(kthLargest1.add(-3)); // [-3]
console.log(kthLargest1.add(-2)); // [-2]
console.log(kthLargest1.add(-4)); // [-2]
console.log(kthLargest1.add(0));  // [0]
console.log(kthLargest1.add(4));  // [4] 
console.log('\n')

let kthLargest2 = new KthLargest(2, [0]);  // [0]
console.log(kthLargest2.add(-1)); // [-1,0] -> -1
console.log(kthLargest2.add(1)); // [0,1] -> 0
console.log(kthLargest2.add(-2)); // [0,1] -> 0
console.log(kthLargest2.add(-4)); // [0,1] -> 0
console.log(kthLargest2.add(3)); // [1,3] -> 1

