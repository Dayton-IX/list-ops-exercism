interface Node {
  key: number;
  value: any;
}

export class List {
  list: Node[];

  constructor(values: unknown[]) {
    this.list = this.create(values);
  }

  public static create(...values: unknown[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    console.log(values);

    return this.list;
  }

  public static append(...values: unknown[]): List {
    throw new Error("Not implemented yet");
  }
}
