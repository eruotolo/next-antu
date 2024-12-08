import { useTranslations } from 'next-intl';

export default function SliderContent() {
    const t = useTranslations('AboutPage');

    return [
        <div key="1" className="slider-about-One">
            <div className="container mx-auto flex flex-col items-start sm:h-[820px] sm:pt-[240px]">
                <h2 className="font-manrope font-bold text-beige sm:text-[27px] sm:tracking-[0.25em]">
                    {t('sliderTitle')}
                </h2>
                <div className="sm:mt-[30px] sm:w-[30%]">
                    <h3 className="text-left font-dmdisplay font-normal italic text-beige sm:text-[23px]">
                        {t('sliderTextOne')}
                    </h3>
                </div>
            </div>
        </div>,
        <div key="2" className="slider-about-Two">
            <div className="container mx-auto flex flex-col items-start sm:h-[820px] sm:pt-[240px]">
                <h2 className="font-manrope font-bold text-beige sm:text-[27px] sm:tracking-[0.25em]">
                    {t('sliderTitle')}
                </h2>
                <div className="sm:mt-[30px] sm:w-[30%]">
                    <h3 className="text-left font-dmdisplay font-normal italic text-beige sm:text-[23px]">
                        {t('sliderTextTwo')}
                    </h3>
                    <p className="text-left font-manrope font-normal text-beige sm:mt-[30px] sm:text-[15px] sm:leading-[20px]">
                        {t('sliderTextThree')}
                    </p>
                </div>
            </div>
        </div>,
        <div key="3" className="slider-about-Three">
            <div className="container mx-auto flex flex-col items-start sm:h-[820px] sm:pt-[240px]">
                <h2 className="font-manrope font-bold text-beige sm:text-[27px] sm:tracking-[0.25em]">
                    {t('sliderTitle')}
                </h2>
                <div className="sm:mt-[30px] sm:w-[30%]">
                    <h3 className="text-left font-dmdisplay font-normal italic text-beige sm:text-[23px]">
                        {t('sliderTextFour')}
                    </h3>
                </div>
            </div>
        </div>,
    ];
}
