import React from 'react';

const Container = ({children}) => {
    return (
        <section className="row mt-4">
            <div className="col-lg-10 mx-auto mb-4">
                {children}
            </div>
        </section>
    );
}

export default Container;