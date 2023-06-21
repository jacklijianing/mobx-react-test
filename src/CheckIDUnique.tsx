import { BinTreeNode } from "./TreeNode";

export function checkIDUnique(input: BinTreeNode): boolean{
    // Use BFS to check all IDs
    // actually DFS is also OK, writing BFS to show someway other than recursion!
    let IDSet = new Set();
    let queue = new Queue<BinTreeNode>();
    queue.enqueue(input);
    while (!queue.isEmpty)
    {
        const element = queue.dequeue();
        if (IDSet.has(element.id))
        {
            // we have duplicate IDs
            return false;
        }
        IDSet.add(element.id);
        if (element.left && element.left !== null) queue.enqueue(element.left);
        if (element.right && element.right !== null) queue.enqueue(element.right);
    }
    return true;

}

class Queue<T> {
  
    public constructor(
        private elements: Record<number, T> = {},
        private head: number = 0,
        private tail: number = 0
    ) { }

    public enqueue(element: T): void {
        this.elements[this.tail] = element;
        this.tail++;
    }

    public dequeue(): T {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;

        return item;
    }

    public peek(): T {
        return this.elements[this.head];
    }

    public get length(): number {
        return this.tail - this.head;
    }

    public get isEmpty(): boolean {
        return this.length === 0;
    }

}