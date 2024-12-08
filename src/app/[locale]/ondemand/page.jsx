import { useTranslations } from 'next-intl';

export default function OnDemandPage() {
    const t = useTranslations('OnDemandPage');

    return (
        <>
            <section className="section-header-ondemand mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex sm:h-[100vh] sm:flex-row sm:items-center sm:justify-between">
                    <div className="sm:w-[50%]">
                        <h1 className="font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandOne')}
                        </h1>
                        <h1 className="font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandTwo')}
                        </h1>
                    </div>
                    <div className="sm:w-[50%] sm:pl-[10%]">
                        <h1 className="text-right font-dmdisplay font-normal italic text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandThree')}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="sm:py-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="font-marcellus font-normal text-azul sm:text-[70px] sm:leading-[75px] sm:tracking-[0.02em]">
                            {t('workout')}
                        </h1>
                        <div className="sm:mt-[40px] sm:w-[50%]">
                            <p className="text-center font-manrope font-normal text-gris sm:text-[15px] sm:leading-[20px]">
                                {t('workoutText')}
                            </p>
                        </div>
                    </div>

                    <div className="section-clases-ondemand flex items-center justify-center sm:mt-[100px] sm:h-[440px] sm:flex-col"></div>
                </div>
            </section>
        </>
    );
}
