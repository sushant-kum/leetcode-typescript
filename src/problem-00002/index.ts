/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;

  /**
   * Creates an instance of ListNode.
   * @param {number} [val] - The value of the node.
   * @param {(ListNode | null)} [next] - The reference to the next node in the list.
   */
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Adds two numbers represented by linked lists and returns the sum as a new linked list.
 * Each linked list node contains a single digit, and digits are stored in reverse order.
 * @param {ListNode | null} l1 - The first linked list representing a number.
 * @param {ListNode | null} l2 - The second linked list representing a number.
 * @returns {ListNode | null} - A linked list representing the sum of the two input numbers.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  let currentL1Node: ListNode = l1;
  let currentL2Node: ListNode = l2;
  let sumList: ListNode;
  let currentSumListNode: ListNode;
  let sumListPointer: ListNode;

  while (
    currentL1Node !== undefined ||
    currentL2Node !== undefined ||
    currentSumListNode === undefined ||
    currentSumListNode?.next !== null
  ) {
    const currentSum: number =
      (currentSumListNode?.next?.val ?? 0) + (currentL1Node?.val ?? 0) + (currentL2Node?.val ?? 0);

    currentSumListNode = currentSumListNode?.next ?? undefined;

    if (sumList === undefined) {
      sumList = new ListNode(currentSum % 10);

      currentSumListNode = sumList;
      sumListPointer = sumList;
    } else {
      if (currentSumListNode === undefined) {
        currentSumListNode = new ListNode(currentSum % 10);
      } else {
        currentSumListNode.val = currentSum % 10;
      }

      sumListPointer.next = currentSumListNode;
      sumListPointer = sumListPointer.next;
    }

    currentL1Node = currentL1Node?.next ?? undefined;
    currentL2Node = currentL2Node?.next ?? undefined;

    if (currentSum >= 10) {
      currentSumListNode.next = new ListNode(1);
    }
  }

  return sumList;
}

/**
 * Converts an array of numbers into a linked list.
 * @param {number[]} arr - An array of numbers.
 * @returns {ListNode} - The head of the linked list representing the array.
 */
function arrayToLinkedList(arr: number[]): ListNode {
  let linkedList: ListNode;
  let linkedListPointer: ListNode;

  for (const num of arr) {
    const node = new ListNode(num);

    if (linkedList == undefined) {
      linkedList = node;
      linkedListPointer = linkedList;
    } else {
      linkedListPointer.next = node;
      linkedListPointer = linkedListPointer.next;
    }
  }

  return linkedList;
}

/**
 * Runs a test case with two sample linked lists representing [2, 4, 3] and [5, 6, 4].
 * Outputs the result of adding the two numbers.
 */
function runTest1(): void {
  const l1 = arrayToLinkedList([2, 4, 3]);
  const l2 = arrayToLinkedList([5, 6, 4]);

  console.log(`🚀 ~ runTest1 ~ addTwoNumbers([2,4,3], [5,6,4]):`, JSON.stringify(addTwoNumbers(l1, l2)));
}

/**
 * Runs a test case with two sample linked lists representing [0] and [0].
 * Outputs the result of adding the two numbers.
 */
function runTest2(): void {
  const l1 = arrayToLinkedList([0]);
  const l2 = arrayToLinkedList([0]);

  console.log(`🚀 ~ runTest2 ~ addTwoNumbers([0], [0]):`, JSON.stringify(addTwoNumbers(l1, l2)));
}

/**
 * Runs a test case with two sample linked lists representing [9, 9, 9, 9, 9, 9, 9] and [9, 9, 9, 9].
 * Outputs the result of adding the two numbers.
 */
function runTest3(): void {
  const l1 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = arrayToLinkedList([9, 9, 9, 9]);

  console.log(`🚀 ~ runTest3 ~ addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]):`, JSON.stringify(addTwoNumbers(l1, l2)));
}

/**
 * Main function to run test cases.
 */
function main(): void {
  runTest1();
  runTest2();
  runTest3();
}

main();
