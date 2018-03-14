import React from "react";

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <p>
                {this.props.statusCode
                    ? `Server error ${this.props.statusCode}`
                    : "An error occurred on client"}
            </p>
        );
    }
}