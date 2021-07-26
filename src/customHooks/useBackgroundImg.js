import { useEffect } from 'react';

function useBackGroundImg(myBackGroundImg) {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${myBackGroundImg})`;
    }, [myBackGroundImg]);
}

export default useBackGroundImg;
