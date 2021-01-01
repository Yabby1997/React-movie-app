import React from "react";
import PropTypes from "prop-types";

class Movie extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.year}</h2>
                <img src={this.props.poster}></img>
                <h3>{this.props.summary}</h3>
            </div>
        )
    }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;