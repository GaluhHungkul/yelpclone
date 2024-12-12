const { create } = require("zustand");

const useLogin = create((set) => ({
    isLogin : false,
    handleLogin: () => set({ isLogin: true })
}))

export default useLogin