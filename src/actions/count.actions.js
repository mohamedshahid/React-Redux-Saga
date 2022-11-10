export const increment = () => {
    return {
        type: 'INCREMENT',
        payload: {
            userId:1,
        }
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
        payload: {
            userId:2,
        }
    }
}