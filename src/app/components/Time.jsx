import React from 'react';

const Time = ({second}) => {

    return (
        <article className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">Modal title</div>
                </div>
                <div className="modal-body">
                    <p>Time left on this question.</p>
                    <h4 className="badge badge-dark">{second} seconds</h4>
                </div>
            </div>
        </article>
    );
}

export default Time;

