import { create } from 'zustand';

const useColorStore = create((set) => ({
    blancoColor: '#f3efea',
    beigeColor: '#F2EFEB',
    marronColor: '#66434B',
    grisColor: '#626262',
    azulColor: '#3970A4',
    rosaColor: '#C19D9D',
    verdeColor: '#151E1D',

    setBlancoColor: (color) => set({ blancoColor: color }),
    setBeigeColor: (color) => set({ beigeColor: color }),
    setMarronColor: (color) => set({ marronColor: color }),
    setGrisColor: (color) => set({ grisColor: color }),
    setAzulColor: (color) => set({ azulColor: color }),
    setRosaColor: (color) => set({ rosaColor: color }),
    setVerdeColor: (color) => set({ verdeColor: color }),
}));

export default useColorStore;
