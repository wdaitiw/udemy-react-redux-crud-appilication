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