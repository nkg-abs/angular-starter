export const actions = {
  increment: ({ state: { count } }: any) => ({ count: count + 1}),
  decrement: ({ state: { count } }: any) => ({ count: count - 1}),
  reset: () => ({ count: 0}),
}
