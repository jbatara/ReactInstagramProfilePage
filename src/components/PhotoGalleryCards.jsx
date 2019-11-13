import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function PhotoGalleryCards(props) {
  return (<div>
    <div class="card bg-dark text-white">
      <img src={props.url} class="card-img" alt="..."/>
        <div class="card-img-overlay reveal">
          <p class="card-text">{<FontAwesomeIcon icon={faHeart} />}{props.likes}   {<FontAwesomeIcon icon={faComment} />} {props.comments}</p>
        </div>
      </div>

    </div>
    );
}

export default PhotoGalleryCards;
