import { Equal, Expect } from '../common/utils/ts-helpers.ts'

// task 1
const getLastItem = (array: any[]) => {
  return array[array.length - 1]
}

const item1 = getLastItem(['react', 'typescript'])
const item2 = getLastItem([1, 2])

// @ts-ignore
type test1 = [Expect<Equal<typeof item1, string>>]
// @ts-ignore
type test2 = [Expect<Equal<typeof item2, number>>]
