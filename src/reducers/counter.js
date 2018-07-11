import {INCLEMENT, DECREMENT} from '../actions/counter';

const counter = (state = {clicks: 0, value: 0}, action) => {
    switch (action.state) {
        case INCLEMENT:
            return {
                'clicks': state.clicks + 1,
                'value': state.value + 1
            };
        case DECREMENT:
            return {
                'clicks': state.clicks + 1,
                'value': state.value - 1
            };
        default:
            return state;
    }
};

export default counter;