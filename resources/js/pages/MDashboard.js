import React, { Component } from 'react';

class MDashboard extends Component {
    render() { 
        return ( 
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-primary">
                        <p class="title">Jumlah Pekerja</p> {/* Number of employee */}
                        <p class="subtitle">{/* Insert number of employee from database here */}</p>
                        </article>
                    </div>

                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                        <p class="title">Jangka Masa Kerja Hari Ini {/* Insert date here */}</p> {/**Total working hour for today */}
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png"/>
                        </figure>
                        </article>
                    </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Jumlah Pekerja Hari Ini</p> {/** Number of workers for today */}
                        <p class="subtitle"> {/** Insert number of workers for today */} </p>
                        <div class="content">
                        </div>
                    </div>
                    </article>
                </div>
                </div>
         );
    }
}
 
export default MDashboard;