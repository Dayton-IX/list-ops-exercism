interface Node {
  key: number;
  value: any;
}

export class List<T> {
  constructor(public items: T[] = []) {}

  public static create<T>(...values: T[]): T[] | List<T> {
    return new List(values);
  }

  public append(newList: List<T>): T[] | List<T> {
    throw new Error("Not implemented yet");
  }

  public concat(otherList: List<T>): T[] {
    throw new Error("Not implemented yet");
  }

  public filter<U extends T>(callback: (el: U) => boolean): U[] {
    throw new Error("Not implemented yet");
  }

  public length(): number {
    let count: number = 0;
    for (const item of this.items) {
      count++;
    }
    return count;
  }

  public map<U extends T>(callback: (item: U) => boolean): U[] {
    throw new Error("Not implemented yet");
  }

  public forEach(callback: (item: T) => void): void {
    throw new Error("Not implemented yet");
  }

  public foldl(): unknown {
    throw new Error("Not implemented yet");
  }

  public foldr(): unknown {
    throw new Error("Not implemented yet");
  }

  public reverse(): unknown {
    throw new Error("Not implemented yet");
  }
}
