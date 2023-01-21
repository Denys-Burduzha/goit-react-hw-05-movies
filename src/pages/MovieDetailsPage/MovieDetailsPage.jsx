import React, { Suspense } from 'react';
import Spinner from '../../Components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsList = React.lazy(() =>
  import('../../Components/MovieDetailsList/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button className={styles.backButton}>
        <Link className={styles.btnLink} to={backLink}>
          Back 
        </Link>
      </button>

      <h3 className={styles.title}>Movie Details Page</h3>
      <div className={styles.detailsContainer}>
        <Suspense fallback={<Spinner />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
