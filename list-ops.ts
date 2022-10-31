interface Node {
  key: number;
  value: any;
}

export class List<T> {
  constructor(public items: T[] = []) {}

  public static create<T>(...values: unknown[]): T[] | List<T> {
    return new List(values);
  }

  public append(newList: List<T>): T[] | List<T> {
    throw new Error("Not implemented yet");
  }

  public concatenate(): unknown {
    throw new Error("Not implemented yet");
  }

  public filter(): unknown {
    throw new Error("Not implemented yet");
  }

  public length(): unknown {
    throw new Error("Not implemented yet");
  }

  public map(): unknown {
    throw new Error("Not implemented yet");
  }
}
