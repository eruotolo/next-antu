'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import VimeoVimeo from '@/components/VideoVimeo/VideoVimeo';

export default function VideoDemoModal() {
    const t = useTranslations('HomePage');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="h-[54px] w-[224px] rounded-[26px] border-[2px] border-rosa px-[30px] py-[6px] font-marcellus text-[20px] font-normal uppercase text-beige hover:bg-rosa sm:mr-[10px] sm:text-[23px]">
                {t('watchDemo')}
            </DialogTrigger>
            <DialogContent className="modalvideo rounded-0 border-[0px] px-[0px] pb-[0px] pt-[0px] sm:max-w-[1080px]">
                <DialogClose className="absolute right-[14px] top-[14px] z-20">
                    <X className="h-[24px] w-[24px] text-blanco" />
                </DialogClose>
                <VimeoVimeo videoId="1049113761" />
            </DialogContent>
        </Dialog>
    );
}
