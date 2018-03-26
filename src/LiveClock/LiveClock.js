import React, { Component } from 'react';
import './LiveClock.css';
import Clock from 'react-live-clock';

class LiveClock extends Component {

    render() {
        return (
            <div class="clock">
                <Clock
                    ticking={true}
                    format={`dddd, MMMM Do, YYYY`}
                />
                <br />
                <Clock
                    ticking={true}
                    format={`h:mm:ss A`}
                />
            </div>

        )
    }
}

export default LiveClock;