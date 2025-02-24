export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  // before
  // let num1 = 0;
  // let num2 = 0;
  // while (l1) {
  //   num1 *= 10;
  //   num1 += l1.val;
  //   l1 = l1.next;
  // }
  //
  // while (l2) {
  //   num2 *= 10;
  //   num2 += l2.val;
  //   l2 = l2.next;
  // }
  //
  // let result = num1 + num2;
  //
  // if (result === 0) {
  //   return new ListNode();
  // }
  //
  // const head = new ListNode();
  // let current = head;
  // while (result) {
  //   current.next = new ListNode(result % 10);
  //   current = current.next;
  //   result = Math.floor(result / 10);
  // }
  //
  // return head.next;
  //
  //
  // After

  const head = new ListNode();
  let current = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
}
