import React, { Component } from "react";


import Navbar from "../presentation/Navbar";


class Result extends Component {
    componentDidMount() {
        console.log("==========call planet API to fetch the data =============");
        fetch('https://findfalcone.herokuapp.com/token', {
            method: 'post',
            headers: {
                'Accept': 'application/json'
            }
        }).then(list => list.json()).then(anjali => {
            fetch('https://findfalcone.herokuapp.com/find', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "token": anjali.token,
                    "planet_names": [
                        "Donlon",
                        "Enchai",
                        "Pingasor",
                        "Sapir"
                    ],
                    "vehicle_names": [
                        "Space pod",
                        "Space rocket",
                        "Space rocket",
                        "Space rocket"
                    ]
                })
            })
                .then(res => res.json()).then(res => console.log(res))
        }).catch(err => {
            throw new TypeError(err);
        });
    }
    render() {
        return (
            <div className="section-result">
                <Navbar />

                <section className="section-btn">

                    <a href="#" className="navbtn navbtn--animated navbtn--white">
                        Start Again
          </a>

                </section>


            </div>
        );
    }
}

export default Result;
