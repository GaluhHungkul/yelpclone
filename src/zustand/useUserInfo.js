import { create } from "zustand"

const useUserInfo = create((set) => ({
    dataUser : {},
    setDataUser : (value) => set({dataUser : value})
}))

export default useUserInfo