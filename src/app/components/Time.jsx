import React, { useEffect, useState } from 'react';

const Time = () => {
    const [second, setSecond]= useState(30);
    useEffect(() => {
        if (second > 0) {
            setTimeout(function(){
                let newSecond = second;
                newSecond--;
                setSecond(newSecond);
            }, 1000);
        }
    }, [second]);

    return (
        <article className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">Modal title</div>
                </div>
                <div className="modal-body">
                    <p>Tiempo restante en esta pregunta.</p>
                    <h4 className="badge badge-dark">{second} segundos</h4>
                </div>
            </div>
        </article>
    );
}

export default Time;

