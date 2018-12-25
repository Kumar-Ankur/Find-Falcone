import React, { Component } from 'react';

class Planet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planet_list: [],
            planet_name: []
        }
    }

    componentDidMount() {
        console.log("==========call planet API to fetch the data =============");

        fetch('https://findfalcone.herokuapp.com/planets')
        .then(list => list.json())
        .then(list => {
            console.log("********* Data Feched successfully ***********")
            this.setState ({ 
                planet_list : list,
                planet_name: Object.keys(
                    list.map(res_name => res_name.name)
                    .reduce((a,b) => {
                        a[b] = 0;
                        return a;
                    }, {})
                ) 
            })
        })
        .catch(err => {
            throw new TypeError(err);
        });
    }

    render() {
        return(
            <div>I am Planet View</div>
        )
    }
}

export default Planet;