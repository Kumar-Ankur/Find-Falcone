import React, { Component,Fragment } from 'react';

import Planet from '../container/Planet';
import Navbar from '../presentation/Navbar';

class FindFalcone extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Planet />
            </Fragment>
        )
    }
}

export default FindFalcone;