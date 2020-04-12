const module = {
  namespaced: true, // 开启命名空间
  state: {
    cityName: '北京', // 默认城市
    cityId: '110100'// 默认城市ID
  },
  mutations: {
    // 更改city状态的名字
    setCityName (state, name) {
      state.cityName = name
    },
    // 更改city状态的Id
    setCityId (state, cityId) {
      state.cityId = cityId
    }

  }
}

export default module
