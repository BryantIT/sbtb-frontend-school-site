import React from 'react';
import '../../loading.css';

const Loading = () => {
  return (
    <div class="center-container">
      <svg id="triangle-1" class="triangle center-contents" height="300"
        width="350">
       <polygon points="0,300 175,0 350,300"/>
      </svg>
      <svg id="triangle-2" class="triangle center-contents" height="300"
        width="350">
       <polygon points="0,300 175,0 350,300"/>
      </svg>
      <svg id="triangle-3" class="triangle center-contents" height="300"
        width="350">
       <polygon points="0,300 175,0 350,300"/>
      </svg>
  <h1 id="spin-text" class="center-contents">
    Loading...
  </h1>
</div>
  )
}

export default Loading
