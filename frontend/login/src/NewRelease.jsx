/*import React from 'react';

export const NewReleases = () => {
  return (
    <div className="new-releases-container">
      <h1>New Movie Releases</h1>
      <div className="movie-list">
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie poster" />
          <h2>Movie Title 1</h2>
          <p>Release Date: January 1, 2023</p>
          <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie poster" />
          <h2>Movie Title 2</h2>
          <p>Release Date: February 1, 2023</p>
          <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="movie-card">
          <img src="https://via.placeholder.com/150" alt="Movie poster" />
          <h2>Movie Title 3</h2>
          <p>Release Date: March 1, 2023</p>
          <p>Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-04-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>New Releases</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { NewRelease };*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-03-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">MovieTix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <div className="container">
        <h1>New Releases</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.overview}</p>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { NewRelease };*/




/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-04-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const renderMovieCards = () => {
    return movies.map((movie, index) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const releaseDate = new Date(movie.release_date).toLocaleDateString();

      return (
        <div key={movie.id} className="col-md-4 mb-3">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {releaseDate}
              </Card.Subtitle>
              <Button onClick={() => handleShowModal(movie)}>Details</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  const renderModal = () => {
    if (!selectedMovie) {
      return null;
    }

    const { title, release_date, overview, poster_path } = selectedMovie;

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${title} poster`}
              />
            </div>
            <div className="col-md-8 mb-3">
              <p>
                <strong>Release Date:</strong>{' '}
                {new Date(release_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Overview:</strong> {overview}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <h1>New Releases</h1>
      <div className="row">{renderMovieCards()}</div>
      {renderModal()}
    </div>
  );
};

export default NewRelease;*/



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-04-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>New Releases</h1>
      <Row>
        {movies.map((movie) => (
          <Col sm={4} key={movie.id} style={{ marginBottom: '20px' }}>
            <Card>
              {movie.poster_path && (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  {movie.overview}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewRelease;*/




/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './NewRelease.css';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-03-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="new-releases-container">
      <h1>New Releases</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <Card onClick={() => console.log(movie)}>
              {movie.poster_path && (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  Release Date: {movie.release_date}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NewRelease };*/



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  Link  from 'react-bootstrap/Button';
import './NewRelease.css';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-03-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  const handleViewDetails = (movie) => {
    console.log(movie);
    // Navigate to the details page
  }

  return (
    <div className="new-releases-container">
      <h1>New Releases</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <Card>
              {movie.poster_path && (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  Release Date: {movie.release_date}
                </Card.Text>
                <Button variant="primary" onClick={() => handleViewDetails(movie)}>View Details</Button>
                <Link to={`/SeatSelection/${movie.id}`} className="btn btn-primary ms-2">Book Tickets</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NewRelease };



/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './NewRelease.css';

const NewRelease = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: '745520c85720709cfe436dfc35843432',
              sort_by: 'release_date.desc',
              'primary_release_date.gte': '2023-02-01',
              'primary_release_date.lte': '2023-03-30',
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  const handleViewDetails = (movie) => {
    console.log(movie);
    // Navigate to the details page
  }

  return (
    <div className="new-releases-container">
      <h1>New Releases</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col">
            <Card>
              {movie.poster_path && (
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              )}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  Release Date: {movie.release_date}
                </Card.Text>
                <Button variant="primary" onClick={() => handleViewDetails(movie)}>View Details</Button>
                <Link to={`/SeatSelection/${movie.id}`} className="btn btn-primary ms-2">Book Tickets</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NewRelease };*/






