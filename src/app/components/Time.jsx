import React from 'react';

const Time = ({second}) => {

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

