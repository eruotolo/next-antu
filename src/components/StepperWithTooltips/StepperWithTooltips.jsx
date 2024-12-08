'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function StepperWithTooltips() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const t = useTranslations('AboutPage');

    const steps = [
        { id: 1, title: t('tooltipTitleOne'), tooltip: t('tooltipTextOne') },
        { id: 2, title: t('tooltipTitleTwo'), tooltip: t('tooltipTextTwo') },
        { id: 3, title: t('tooltipTitleThree'), tooltip: t('tooltipTextThree') },
    ];

    return (
        <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
                <div key={step.id} className="relative flex flex-col items-center">
                    {/* Line between steps */}
                    {index > 0 && (
                        <div
                            className="absolute -left-[175px] top-[15%] h-[1px] w-[310px] -translate-y-[25%] bg-[#f3efea]"
                            aria-hidden="true"
                        />
                    )}

                    {/* Circle with hover and tooltip */}
                    <div
                        className={`mx-[150px] flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border-2 ${
                            hoveredStep === step.id
                                ? 'border-[#f3efea] bg-[#e7e7ea]'
                                : 'border-[#f3efea] bg-transparent'
                        }`}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                    >
                        {/* Tooltip */}
                        {hoveredStep === step.id && (
                            <div className="absolute left-1/2 top-[100px] flex flex-col">
                                <div className="relative z-10 flex w-[280px] -translate-x-1/2 transform items-center justify-center rounded p-2 text-center font-manrope text-[15px] leading-[20px] text-beige">
                                    {step.tooltip}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Title below the circle */}
                    <h4
                        className={`mt-[20px] font-marcellus sm:text-[27px] ${
                            hoveredStep === step.id ? 'text-rosa' : 'text-beige'
                        }`}
                    >
                        {step.title}
                    </h4>
                </div>
            ))}
        </div>
    );
}
