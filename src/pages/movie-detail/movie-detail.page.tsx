import React, { Component } from "react";
import { connect } from "react-redux";

import format from "date-fns/format";
import {DateRange, Timer} from '@material-ui/icons';

import RatingComponent from "../../components/rating/rating";
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
    console.log(this.state);
    this.props.startSetMovie();
  }

  render() {
    if (this.props.movie) {
      const sectionStyle = {
        backgroundImage: `url(${this.props.movie.thumbnailImageURL})`
      };
      return (
        <>
          <div className="card border-0">
            <div className="banner">
              <div style={sectionStyle} className="bg-poster"></div>
            </div>

            <div className="card-body movie-info-container">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 left-container">
                  <div className="d-none d-md-block">
                    <img
                      src={this.props.movie.thumbnailImageURL}
                      className="thumnail-image position-absolute img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 right-container">
                  <RatingComponent movieId={this.props.movie.movieId}></RatingComponent>
                  <div className="details mt-md-5">
                    <p className="h3 mb-3">{this.props.movie.name}</p>

                    <div className="mb-3 text-uppercase">
                      {this.props.movie.language}
                    </div>
                    <div className="mb-3 d-flex">
                      {/* <MaterialIcon icon="date_range" color="#ffffff" />{" "} */}
                      <DateRange></DateRange>
                      <span className="pl-1 pr-3">
                        {format(
                          new Date(this.props.movie.releaseDate),
                          "dd MMM, uuuu"
                        )}
                      </span>
                      {/* <MaterialIcon icon="timer" color="#ffffff" />{" "} */}
                      <Timer></Timer>
                      <span className="pl-1">2 Hours</span>
                    </div>
                    {this.props.movie.genres.map(genre => (
                      <span className="badge mb-2 mr-2 p-2">{genre.name}</span>
                    ))}
                  </div>

                  <details open className="info-container">
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
