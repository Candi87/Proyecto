import { useEffect } from 'react';

function useBackgroundImg(myBackGroundImg) {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${myBackGroundImg})`;
    }, [myBackGroundImg]);
}

export default useBackgroundImg;
