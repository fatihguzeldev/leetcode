/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start

class MinHeap {
  private heap: ListNode[] = [];

  insert(node: ListNode) {
    this.heap.push(node);

    this.bubbleUp();
  }

  extractMin(): ListNode | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].val <= this.heap[index].val) {
        break;
      }

      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];

      index = parent;
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }

      if (right < length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }

      if (index === smallest) {
        break;
      }

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];

      index = smallest;
    }
  }
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap = new MinHeap();

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      heap.insert(lists[i]);
    }
  }

  const dummy = new ListNode(0, null);
  let current = dummy;

  while (!heap.isEmpty()) {
    const node = heap.extractMin();
    current.next = node;
    current = current.next;
    if (node.next) {
      heap.insert(node.next);
    }
  }

  return dummy.next;
}

export {};
// @lc code=end
