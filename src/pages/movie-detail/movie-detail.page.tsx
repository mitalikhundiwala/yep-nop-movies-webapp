import React, { Component } from "react";
import { connect } from "react-redux";

import format from "date-fns/format";
import MaterialIcon from "material-icons-react";

import "./movie-detail.page.scss";

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
      const sectionStyle = {
        backgroundImage: `url(${this.props.movie.thumbnailImageURL})`
      };
      return (
        <>
          <div className="card mb-3 mt-3 border-0">
            <div className="banner">
              <div style={sectionStyle} className="bg-poster"></div>
            </div>

            <div className="card-body movie-info-container">
              <div className="row">
                <div className="col-3">
                  <div className="">
                    <img
                      src={this.props.movie.thumbnailImageURL}
                      className="thumnail-image position-absolute"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div className="details">
                    <p className="h3 mb-3">{this.props.movie.name}</p>

                    <div className="mb-3 text-uppercase">
                      {this.props.movie.language}
                    </div>
                    <div className="mb-3 d-flex">
                      <MaterialIcon icon="date_range" color="#ffffff" />{" "}
                      <span className="pl-1 pr-3">
                        {format(
                          new Date(this.props.movie.releaseDate),
                          "dd MMM, uuuu"
                        )}
                      </span>
                      <MaterialIcon icon="timer" color="#ffffff" />{" "}
                      <span className="pl-1">2 Hours</span>
                    </div>
                    {this.props.movie.genres.map(genre => (
                      <span className="badge mb-2 mr-2 p-2">{genre.name}</span>
                    ))}
                  </div>
                  <details open className="mt-3">
                    <summary>SYNOPSIS</summary>
                    <p>{this.props.movie.synopsis}</p>
                  </details>
                  <details open>
                    <summary>CAST</summary>
                    <p>{this.props.movie.castString}</p>
                  </details>
                  <details open>
                    <summary>CREW</summary>
                    <div>Directors: {this.props.movie.directorString}</div>
                    <div>
                      Music Directors: {this.props.movie.musicDirectorsString}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </>
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
