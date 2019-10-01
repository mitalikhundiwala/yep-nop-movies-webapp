import React, { Component } from "react";
import { connect } from "react-redux";

import { startSetMovie } from "../../actions/movies";
import Movie from "../../models/movie";
import { IStore } from "../../store/configureStore";

interface IProps {
  startSetMovie: () => Promise<Movie>;
  movie: Movie;
}

export class MovieDetailPage extends Component<IProps> {
  props: IProps;

  componentDidMount() {
    this.props.startSetMovie();
  }

  render() {
    if (this.props.movie) {
      return (
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={this.props.movie.poster_image}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.movie.name}</h5>
                <p className="card-text">{this.props.movie.synopsis}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {this.props.movie.releaseDate}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state: IStore, props): Partial<IProps> => {
  return {
    movie: state.movies.entities[props.match.params.id]
  };
};

const mapDispatchToProps = (dispatch, props): Partial<IProps> => {
  return {
    startSetMovie: () => dispatch(startSetMovie(props.match.params.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailPage);
