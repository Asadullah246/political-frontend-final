import { create } from 'zustand';

interface Store {
    ModalisOpen: boolean
    ModalonOpen: () => void
    ModalonClose: () => void
}

export const useStore = create<Store>((set) => ({
    ModalisOpen: false,
    ModalonOpen: () => set({ModalisOpen: true}),
    ModalonClose: () => set({ModalisOpen: false})
}))