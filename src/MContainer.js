import React, { Component } from 'react';

class MContainer extends Component {
    render() { 
        return ( 
            <div class="container">
            <div class="notification">
                This container is <strong>centered</strong> on desktop.
            </div>

            <div class="tabs is-toggle is-toggle-rounded">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>

            </div>
         );
    }
}
 
export default MContainer;