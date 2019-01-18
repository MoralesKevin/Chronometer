import React, { Component } from 'react';
import './Chronometre.css';

class Chronometre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centiemes: 0,
            secondes: 0,
            minutes: 0,
            heures: 0,
            centiemesInter: 0,
            secondesInter: 0,
            minutesInter: 0,
            heuresInter: 0,
            stop: false,
            tour: [,],
            intervalle: [,],
            count: 0,
        }
        this.AddZeroFormat = this.AddZeroFormat.bind(this);
        this.tempsTour = this.tempsTour.bind(this);
        this.reset = this.reset.bind(this);
        this.Stop = this.Stop.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.centiemes < 100 && this.state.stop === true) {
                this.setState({
                    centiemes: (this.state.centiemes + 1),
                    centiemesInter: (this.state.centiemesInter + 1),
                })
            }
        }, 10);
    }

    componentDidUpdate() {

        if (this.state.stop === true) {
            if (this.state.centiemes > 99) {
                this.setState({
                    centiemes: 0,
                    secondes: this.state.secondes + 1,
                });
            } else if (this.state.centiemesInter > 99) {
                this.setState({
                    centiemesInter: 0,
                    secondesInter: this.state.secondesInter + 1,
                })
            } else if (this.state.secondes > 59) {
                this.setState({
                    secondes: 0,
                    minutes: this.state.minutes + 1,
                });
            } else if (this.state.secondesInter > 59) {
                this.setState({
                    secondesInter: 0,
                    minutesInter: this.state.minutesInter + 1,
                })
            } else if (this.state.minutes > 59) {
                this.setState({
                    minutes: 0,
                    heures: this.state.heures + 1,
                });
            } else if (this.state.minutesInter > 59) {
                this.setState({
                    minutesInter: 0,
                    heuresInter: this.state.heuresInter + 1,
                })
            }
        }
    }

    AddZeroFormat(number) {
        return number < 10 ? `0${number}` : number;
    }

    Stop() {
        this.setState({
            stop: !this.state.stop,
        })
    }

    tempsTour() {
        const arr = this.state.tour;
        const count = this.state.count;
        const intervalle = this.state.intervalle;



        if (arr[count] === `${this.AddZeroFormat(this.state.heures)} : ${this.AddZeroFormat(this.state.minutes)} : ${this.AddZeroFormat(this.state.secondes)} : ${this.AddZeroFormat(this.state.centiemes)}`) {
            alert("Vous ne pouvez pas sauvegarder 2 fois le même tour.");
            this.setState({
                count: count,
            })
        } else {

            arr.push(`${this.AddZeroFormat(this.state.heures)} : ${this.AddZeroFormat(this.state.minutes)} : ${this.AddZeroFormat(this.state.secondes)} : ${this.AddZeroFormat(this.state.centiemes)}`);

            intervalle.push(`${this.AddZeroFormat(this.state.heuresInter)} : ${this.AddZeroFormat(this.state.minutesInter)} : ${this.AddZeroFormat(this.state.secondesInter)} : ${this.AddZeroFormat(this.state.centiemesInter)}`);

            this.setState({
                tour: arr,
                intervalle: intervalle,
                count: count + 1,
                centiemesInter: 0,
                secondesInter: 0,
                minutesInter: 0,
                heuresInter: 0,

            })
            console.log(intervalle);
        }
    }

    reset() {
        this.setState({
            centiemes: 0,
            secondes: 0,
            minutes: 0,
            heures: 0,
            tour: [,],
            intervalle: [,],
            count: 0,
            centiemesInter: 0,
            secondesInter: 0,
            minutesInter: 0,
            heuresInter: 0,
        })
    }

    render() {
        return (
            <div className="Chronometre">
                <h1>Chronometer</h1>
                <div className="compteur">
                    <h3> {this.AddZeroFormat(this.state.heures)} : {this.AddZeroFormat(this.state.minutes)} : {this.AddZeroFormat(this.state.secondes)} : </h3>
                    <h3 className="centiemes"> {` ${this.AddZeroFormat(this.state.centiemes)}`}</h3>
                </div>

                <div className="button">
                    <button onClick={this.Stop}>START / STOP</button>
                    <button onClick={this.tempsTour}>LAP</button>
                    <button onClick={this.reset} >RESET</button>
                </div>

                <div className="tableauTemps">
                    <div className="tempsDuTour">
                        <h2>Lap time :</h2>

                        {this.state.tour.map(lap => (
                            <p className={`temps`}> {this.state.tour.indexOf(lap)} - {lap} <br /> <hr /> </p>))
                        }
                    </div>

                    <div className="intervalle">
                        <h2>Interval :</h2>

                        {this.state.intervalle.map(inter => (
                            <p className={`inter`}> {inter} <br /> <hr /> </p>))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Chronometre;