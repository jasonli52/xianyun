//保存数据的属性 state
export const state = () => {
    return {
        userInfo: {
            token: "",
            user: {}
        }
    }
}
//同步修改数据 mutations
export const mutations={
    setUserInfo(state, data){
        state.userInfo  = data;
    },

    // 清除用户数据
    clearUserInfo( state ){
        state.userInfo = {
            token: "",
            user: {}
        }
    }
}

//异步修改数据 actions
export const actions={

}