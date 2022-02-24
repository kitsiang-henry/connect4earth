import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { BackgroundImgs } from '../../../assets';

function BackgroundSlideshow() {
    return (
        <BackgroundSlider
            images={BackgroundImgs}
            duration={8}
            transition={2} />
    );
}

export default BackgroundSlideshow;