import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Review component //
function ReviewForm = ({author, content}) => {
  return (
    <div className="review">
        <h3>{author}</h3>
        <p>{content}</p>
    </div>
  );
};

// movie component with review form using React Bootstrap //
const Movie = ({ title, initialReviews }) => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ author: '', content: '' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newReview.author.trim() !== '' && newReview.content.trim() !== '') {
        setReviews([...reviews, newReview]);
        setNewReview({ author: '', content: '' });
      }
    };
  
    return (
      <Container className="movie">
        <h2>{title}</h2>
        <Row>
          <Col>
            <div className="reviews-container">
              {reviews.map((review, index) => (
                <Review key={index} author={review.author} content={review.content} />
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="authorInput">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" name="author" value={newReview.author} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="contentInput">
                <Form.Label>Review:</Form.Label>
                <Form.Control as="textarea" rows={3} name="content" value={newReview.content} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Review
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
    return (
      <div className="app">
        <Movie title="Inception" initialReviews={initialReviews} />
      </div>
    );
  };


export default ReviewForm