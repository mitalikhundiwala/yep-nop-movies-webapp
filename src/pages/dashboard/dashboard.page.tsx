import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

import MovieList from "../../components/movies-list/movie-list";
import { startSetMovies } from "../../actions/movies";
import Movie from "../../models/movie";

interface IProps {
  startSetMovies: () => Promise<Movie[]>;
}

const DashboardPage = (props: IProps) => {
  const { addToast } = useToasts();

  useEffect(() => {
    props.startSetMovies().catch(error => {
      addToast(error.message, { appearance: "error" });
    });
  }, []);

  return <MovieList></MovieList>;
};

const mapDispatchToProps = dispatch => {
  return {
    startSetMovies: () => dispatch(startSetMovies())
  };
};

export default connect(undefined, mapDispatchToProps)(DashboardPage);
