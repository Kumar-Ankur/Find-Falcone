import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total_time : 0
        }
    }

    render() {
        return(
            <section className="section-time">
                <h3 className="section-time__heading">Time Taken: {this.state.total_time}</h3>
            </section>
        )
    }
}

export default Time;