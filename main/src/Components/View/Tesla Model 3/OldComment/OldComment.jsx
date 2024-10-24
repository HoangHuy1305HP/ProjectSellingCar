import React from 'react';
import './OldComment.css'
import usercomment from '../../../../img/usercomment.png'
const OldComment = () => {
  return (
    <div className="comment-box">
      <div className="comment-header">
        <i className="comment-icon">💬</i>
        <span>1 Comment</span>
      </div>
      <div className="comment-content">
        <img
          src={usercomment}
          alt="Ryan Carder"
          className="user-avatar"
        />
        <div className="comment-text">
          <strong>Ryan Carder</strong>
          <p>
            Cras faucibus sit porttitor amet neque. Luctus ut maecenas urna
            pretium tristique aliquam, ante. Ut scelerisque mauris consequat,
            ornare orci enim. Dolor velit, in nisl fermentum vel, tempor vitae
            neque, libero. Ac quam aliquam vel lectus. Quam dignissim vehicula
            gravida aliquam aliquam gravida tempus posuere. Volutpat facilisi
            nunc, quis enim urna est. Suspendisse amet, in blandit nec id mattis
            in consequat. Mattis enim aliquet pellentesque vel, vitae id. Est et
            fermentum at tempus eget nibh ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OldComment;
