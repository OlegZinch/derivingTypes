type Operation = {
  readonly add: (a: number, b: number) => number
  readonly subtract: (a: number, b: number) => number
}

type Results<T> = {
  [Key in keyof T]?: number
}

let mathOperations: Operation = {
  add(a: number, b: number) {
    return a + b
  },
  subtract(a: number, b: number) {
    return a - b
  },
}

let mathResults: Results<Operation> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2),
}

// mathResults.add = 10
