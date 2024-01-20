import { arrayMove, ensureArray } from "./array"

describe("ensureArray function", () => {
  it("should return an array if the input is already an array", () => {
    const input = [1, 2, 3]
    const result = ensureArray(input)
    expect(result).toEqual(input)
  })

  it("should wrap a truthy non-array value in a new array", () => {
    const input = 42
    const result = ensureArray(input)
    expect(result).toEqual([input])
  })

  it("should return an empty array for falsy or undefined input", () => {
    const input1 = null
    const input2 = undefined
    const result1 = ensureArray(input1)
    const result2 = ensureArray(input2)
    expect(result1).toEqual([])
    expect(result2).toEqual([])
  })

  it("should handle boolean input correctly", () => {
    const input = true
    const result = ensureArray(input)
    expect(result).toEqual([input])
  })
})

describe("arrayMove function", () => {
  it("moves an item to a different position", () => {
    const originalArray = [1, 2, 3, 4, 5]

    // Test moving item from index 2 to index 4
    const newArray1 = arrayMove(originalArray, 2, 4)
    expect(newArray1).toEqual([1, 2, 4, 5, 3])

    // Test moving item from index 0 to index 2
    const newArray2 = arrayMove(originalArray, 0, 2)
    expect(newArray2).toEqual([2, 3, 1, 4, 5])
  })
})
