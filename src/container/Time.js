import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total_time: 0,
            selectedPlanet: this.props.selectedPlanet,
            selectedVechile: this.props.selectedVechile
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedPlanet: nextProps.selectedPlanet, selectedVechile: nextProps.selectedVechile }, () => {
            let PlanetDistance = Object.values(this.state.selectedPlanet);
            let vechileSpeed = Object.values(this.state.selectedVechile);
            let time = 0

            for (let i = 0; i < PlanetDistance.length; i++) {
                if(PlanetDistance[i].distance !== 0 && vechileSpeed[i].speed !== 0) {
                    time += PlanetDistance[i].distance / vechileSpeed[i].speed
                }
                
            }
            this.setState({total_time: time});
        })
    }

    render() {
        console.log(this.state.total_time)
        return (
            <section className="section-time">
                <h3 className="section-time__heading">Time Taken: {this.state.total_time}</h3>
            </section>
        )
    }
}

export default Time;