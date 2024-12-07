'use client';

import { useTranslations } from 'next-intl';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';

export default function VideoDemoModal() {
    const t = useTranslations('HomePage');

    return (
        <Dialog>
            <DialogTrigger className="rounded-[26px] border-[2px] border-rosa px-[30px] py-[6px] font-marcellus font-normal uppercase text-beige hover:bg-rosa sm:mr-[10px] sm:text-[23px]">
                {t('watchDemo')}
            </DialogTrigger>
            <DialogContent>
                <h1>Hola</h1>
            </DialogContent>
        </Dialog>
    );
}
