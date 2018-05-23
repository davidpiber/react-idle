import { Component } from 'react';
import PropTypes from 'prop-types';

class IdleTimeout extends Component {

    constructor(props) {
        super(props);
        this.timerId = null;
        this.idle = false;
        this.element = null;
        this.handleEvent = this.handleEvent.bind(this);
        this.toggleIdleState = this.toggleIdleState.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentDidMount() {
        const element = document.getElementById(this.props.elementId);

        if (element) {
            this.element = element;
            this.props.events.forEach(e => element.addEventListener(e, this.handleEvent));
            this.resetTimer();
        }

    }

    componentWillUnmount() {
        clearTimeout(this.timerid);

        if (this.element) {
            this.props.events.forEach(e => this.element.removeEventListener(e, this.handleEvent));
        }
    }

    resetTimer() {
        this.timerid = setTimeout(this.toggleIdleState.bind(this), this.props.timeout);
    }

    handleEvent() {
        if (this.timerid) {
            clearTimeout(this.timerid);
        }
        if (this.idle) {
            this.toggleIdleState();
        }
        this.resetTimer();
    }

    toggleIdleState() {
        this.idle = !this.idle;
        if (this.idle) {
            this.props.onTimeout();
        }
    }

    render() { return null; }
}

IdleTimeout.propTypes = {
    timeout: PropTypes.number.isRequired,
    onTimeout: PropTypes.func.isRequired,
    elementId: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired
};

export default IdleTimeout;