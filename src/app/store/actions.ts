
import { state } from './state';

export const actions = [
    {
        type: 'GET_PELICULAS',
        action: (val) => {
            state.data = val;
            return state.backup = val;
        }
    }
];