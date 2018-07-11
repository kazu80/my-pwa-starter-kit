export const INCLEMENT = 'INCLEMENT';
export const DECREMENT = 'DECREMENT';

export const inclement = () => {
    return {
        type: INCLEMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};