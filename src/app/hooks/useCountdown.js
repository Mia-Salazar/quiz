import { useEffect, useState } from 'react';

const useCountdown = (initialCount = 30) => {
    const [second, setSecond]= useState(initialCount);

    useEffect(() => {
        let timer;
        if (second > 0) {
            timer = setTimeout(function(){
                let newSecond = second;
                newSecond--;
                setSecond(newSecond);
            }, 1000);
        }

        return () => clearTimeout(timer);

    }, [second, setSecond]);

    return {
        second,
        setSecond,
    };
}

export default useCountdown;