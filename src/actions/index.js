//component側であるイベントを掴んだ時に適切な状態遷移の仕組みを行っている。

export const INCREMENT = 'INCREMENT'//外で使えるようにexportする
export const DECREMENT = "DECREMENT"

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})

// export const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }