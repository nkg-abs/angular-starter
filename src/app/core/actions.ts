export const actions = {
  increment: ({ state: { count, value } }: any) => ({ count: count + value}),
  decrement: ({ state: { count, value } }: any) => ({ count: count - value}),
  reset: () => ({ count: 0}),
  updateMovies: ({ data: movies }: any) => ({ movies }),
  updateValue: ({ data: value }: any) => ({ value })
}
