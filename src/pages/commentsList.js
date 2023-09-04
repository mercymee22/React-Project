import React, { useState } from 'react';
import { Card, CardDeck, Container, Button, CardTitle, CardSubtitle } from 'reactstrap';
import { comments } from '../arrays/comments';

const CommentsList = () => {
  const itemsPerPage = 4;
  const [activeIndex, setActiveIndex] = useState(0);

  const pageCount = Math.ceil(comments.length / itemsPerPage);

  const next = () => {
    if (activeIndex < pageCount - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const previous = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const renderCards = () => {
    const startIndex = activeIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentComments = comments.slice(startIndex, endIndex);

    return currentComments.map((comment) => (
      <Card key={comment.id} className="mb-4 bg-light">
        <div className="card-body">
          <CardTitle>{comment.author}</CardTitle>
          <CardSubtitle>Rating: {comment.rating} out of 5</CardSubtitle>
          <p className="mb-1">{comment.text}</p>
        </div>
      </Card>
    ));
  };

  return (
    <Container>
      <CardDeck>{renderCards()}</CardDeck>
      <div className="d-flex justify-content-between mt-3">
        <Button color="primary" onClick={previous} disabled={activeIndex === 0}>
          Previous
        </Button>
        <Button color="primary" onClick={next} disabled={activeIndex === pageCount - 1}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default CommentsList;