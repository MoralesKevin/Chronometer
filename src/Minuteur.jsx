import React, { Component } from 'react';

class Minuteur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heures: 0,
            minutes: 0,
            secondes: 20,
        }
        this.demarrer = this.demarrer.bind(this);
        this.heuresChange = this.heuresChange.bind(this);
        this.minutesChange = this.minutesChange.bind(this);
        this.secondesChange = this.secondesChange.bind(this);
    }

    demarrer() {
        setInterval(() => {
            this.setState({
                heures: this.state.heures,
                minutes: this.state.minutes,
                secondes: this.state.secondes - 1,
            })
        }, 1000);
    }

    componentDidUpdate() {
        /* si les secondes arrivent a 0 les minutes font -1 */
        if (this.state.minutes === 0 && this.state.heures > 0) {
            this.setState({
                heures: this.state.heures - 1,
            })
            /* si les heures arrivent a 0 et que les minutes sont egal a 0, alors les minutes sont a 59 */
        } else if (this.state.secondes === 0 && this.state.minutes > 0) {
            this.setState({
                minutes: this.state.minutes - 1,
            })
            /* si les minutes arrivent a 0 les heures font -1 */
        } else if (this.state.heures === 0 && this.state.minutes === 0) {
            this.setState({
                minutes: 59,
            })
            /* si les minutes arrivent a 0 et que les secondes sont egal a 0, alors les secondes sont a 59 */
        } else if (this.state.minutes === 0 && this.state.secondes === 0) {
            this.setState({
                secondes: 59,
            })
        }
    }

    heuresChange(e) {
        this.setState({
            heures: e.target.value,
        })
    }

    minutesChange(e) {
        this.setState({
            minutes: e.target.value,
        })
    }

    secondesChange(e) {
        this.setState({
            secondes: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h2>Minuteur</h2>
                <div>
                    <h3>{this.state.heures}</h3>
                    <input type="number" value={this.state.heures} onChange={this.heuresChange} />
                </div>
                <div>
                    <h3>{this.state.minutes}</h3>
                    <input type="number" value={this.state.minutes} onChange={this.minutesChange} />
                </div>
                <div>
                    <h3>{this.state.secondes}</h3>
                    <input type="number" value={this.state.secondes} onChange={this.secondesChange} />
                </div>
                <button onClick={this.demarrer} >Demarrer</button>
            </div>);
    }
}

export default Minuteur;