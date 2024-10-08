const store = require('./src/redux/store');
const { bookAdded, bookRemoved } = require('./src/redux/actions/bookActions');
const { userAdded, userRemoved } = require('./src/redux/actions/userActions');

store.dispatch(bookAdded( 'Thus Spoke Zarathustra', 'Friedrich Nietzsche' ));
store.dispatch(bookAdded( 'Critique of Pure Reason', 'Immanuel Kant' ));
store.dispatch(bookAdded( 'The Stranger', 'Albert Camus'));
store.dispatch(bookRemoved( 1 ));

store.dispatch(userAdded( 'RoZa', 'admin' ));
store.dispatch(userAdded( 'VG', 'editor' ));
store.dispatch(userRemoved( 1 ));

console.log(store.getState());

