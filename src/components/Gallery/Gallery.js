import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Gallery.module.css';

class Gallery extends Component {
	render() {
		const { movies } = this.props;
		return (
			<ul>
				{movies.map(({ title, id }) => (
					<li key={id} className={s.GalleryItem}>
						<Link className={s.Link} to={`/movies/${id}`}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		);
	}
}

Gallery.propTypes = {
	movies: PropTypes.array
};

export default Gallery;
