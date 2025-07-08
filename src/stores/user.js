import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || '')
  const isLoggedIn = computed(() => !!token.value && !!user.value)

  // 登录
  const login = async (credentials) => {
    try {
      // 这里应该调用实际的API
      // const response = await api.login(credentials)
      
      // 模拟登录响应
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: 1,
          username: credentials.username,
          email: credentials.email || 'user@example.com',
          avatar: '/src/assets/images/default-avatar.jpg',
          age: 25,
          gender: '女',
          location: '广东 广州市',
          height: '165CM',
          education: '本科',
          maritalStatus: '未婚'
        }
      }
      
      token.value = mockResponse.token
      user.value = mockResponse.user
      localStorage.setItem('token', mockResponse.token)
      localStorage.setItem('user', JSON.stringify(mockResponse.user))
      
      return { success: true, data: mockResponse }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // 注册
  const register = async (userData) => {
    try {
      // 这里应该调用实际的API
      // const response = await api.register(userData)
      
      // 模拟注册响应
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: Date.now(),
          username: userData.username,
          email: userData.email,
          avatar: '/src/assets/images/default-avatar.jpg',
          age: userData.age,
          gender: userData.gender,
          location: `${userData.province} ${userData.city}`,
          height: userData.height || '165CM',
          education: userData.education || '本科',
          maritalStatus: userData.maritalStatus
        }
      }
      
      token.value = mockResponse.token
      user.value = mockResponse.user
      localStorage.setItem('token', mockResponse.token)
      localStorage.setItem('user', JSON.stringify(mockResponse.user))
      
      return { success: true, data: mockResponse }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // 登出
  const logout = () => {
    user.value = null
    token.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  // 初始化用户信息
  const initUser = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser && token.value) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (error) {
        console.error('Failed to parse saved user data:', error)
        logout()
      }
    }
  }

  // 更新用户信息
  const updateUser = (userData) => {
    user.value = { ...user.value, ...userData }
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    logout,
    initUser,
    updateUser
  }
})
