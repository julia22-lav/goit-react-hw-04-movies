import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Gallery.module.css';

class Gallery extends Component {
	render() {
		const { movies, location } = this.props;
		return (
			<ul>
				{movies.map(({ title, id }) => (
					<li key={id} className={s.GalleryItem}>
						<Link className={s.Link} to={{ pathname: `/movies/${id}`, state: { from: location } }}>
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

export default withRouter(Gallery);
