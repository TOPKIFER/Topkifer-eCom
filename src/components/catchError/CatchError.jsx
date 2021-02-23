import React from "react";

class CatchError extends React.Component {

    state = {
        error: null,
        errorInfo: null,
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo, hasError: true});
    }

    render() {
        return this.state.hasError ? null : this.props.children;
    }
}

export default CatchError;