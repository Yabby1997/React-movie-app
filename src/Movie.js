import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

class Movie extends React.Component {
    render() {
        return (
            <div class="movie">
                <h3 class="movie__title">{this.props.title}</h3>
                <h5 class="movie__year">{this.props.year}</h5>
                <img class="movie__poster" src={this.props.poster}></img>
                <p class="movie__summary">{this.props.summary}</p>
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