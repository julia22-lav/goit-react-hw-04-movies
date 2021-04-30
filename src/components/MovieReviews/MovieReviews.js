import { Component } from "react";
import { fetchMovieReviews } from "../../services/fetch";

class MovieReviews extends Component {
  state = { movieReviews: [] };

  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    this.setState({ movieReviews: [] });
    fetchMovieReviews(movieId).then((movieReviews) => {
      this.setState({ movieReviews });
    });
  };

  render() {
    return this.state.movieReviews.length > 0 ? (
      <>
        <h3>Movie reviews</h3>
        <ul>
          {this.state.movieReviews.map(({ author, content, id }) => (
               <li key={id}>
               <h4>{author}</h4>
               <p>{content}</p>
             </li>
          ))}
        </ul>
      </>
    ) : (
      <p>No reviews yet</p>
    );
  }
}

export default MovieReviews;
