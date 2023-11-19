/* eslint-disable */
const state = () => ({
	idToken:localStorage.getItem("idtoken"),
	showNavbar: true,
	showSideBar: true,
	
});

const getters = {
	getToken(state: { idToken: any }) {
		return state.idToken;
	},
	getNavbarstatus(state: { showNavbar: any }) {
		 return state.showNavbar;
         
	},
	getSideNavbarstatus(state: { showSideBar: any }) {
		return state.showSideBar;
	},
};

const actions = {
	async setToken({ commit }: any, data: any) {
		commit("setToken", data);
	},
	async setNavbar({ commit }: any, data: any) {
		commit("setNavbar", data);
	},
	async setSideNavbar({ commit }: any, data: any) {
		commit("setSideNavbar", data);
	}
};

const mutations = {
	setToken(state: { idToken: any }, idTokenLog: any) {
		state.idToken = idTokenLog;
		localStorage.setItem("idtoken", idTokenLog);
	},
	setNavbar(state: { showNavbar: any }, shownavstatus: any) {
		
		state.showNavbar = shownavstatus;
		localStorage.setItem("showNavbar", shownavstatus);
		state.showNavbar = shownavstatus;
	},
	setSideNavbar(state: { showSideBar: any }, showsidenavstatus: any) {
		localStorage.setItem("showSideBar", showsidenavstatus);
		state.showSideBar = showsidenavstatus;
	}
};

export default {
	state,
    getters,
    actions,
    mutations
};