import React from "react";
import { useParams } from "react-router-dom";

function CreateReviews({ reviews = [], delRev }) {
  const { id } = useParams();

  return (
    <div className="reviews__wrap" id="rewWrap">
      {reviews.map((review) => (
        <div className="reviews_box" key={review.id}>
          <div className="reviews_wrapBox">
            <p className="reviews_login">{review.login}</p>
          </div>
          <div className="reviews_wrapBox2">
            <p className="reviews_rare">Оценка: {review.rare}</p>
            <p className="reviews_text">Отзыв: {review.text}</p>
          </div>
          <div className="reviews_wrapBox3">
            <button
              onClick={() => delRev(id, review.id)}
              className="reviews_del"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateReviews;