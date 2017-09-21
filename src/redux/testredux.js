import { increment, decrement, reset } from './actions/counter';

import store from './store';

console.log(11, store.getState());

let unsubscrive = store.subscribe(() => {
    console.log(22, store.getState());
})

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

unsubscrive();