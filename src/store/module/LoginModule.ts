/* eslint-disable */
const state = () => ({
	
	showNavbar: true,
	showSideBar: true,
	
});

const getters = {
	getNavbarstatus(state: { showNavbar: any }) {
		 return state.showNavbar;
         
	},
	getSideNavbarstatus(state: { showSideBar: any }) {
		return state.showSideBar;
	},
};

const actions = {
	async setNavbar({ commit }: any, data: any) {
		commit("setNavbar", data);
	},
	async setSideNavbar({ commit }: any, data: any) {
		commit("setSideNavbar", data);
	}
};

const mutations = {
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