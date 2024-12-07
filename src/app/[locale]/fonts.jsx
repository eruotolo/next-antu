import { Marcellus, DM_Serif_Display, Manrope } from 'next/font/google';

export const marcellus = Marcellus({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-marcellus',
});
export const dmdisplay = DM_Serif_Display({
    weight: ['400'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dmdisplay',
});
export const manrope = Manrope({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-manrope',
});
