import { createStore } from 'vuex'

import LoginModule from './module/LoginModule';

const store = createStore({
	modules: {
		LoginModule,
	},
});

export default store;
