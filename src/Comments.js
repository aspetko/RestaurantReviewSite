import React, { Component } from 'react';

class Comments extends Component {
  render() {
      let display = [];
      let count = this.props.stars;
      for (let i =0 ; i<5; i++){
          if (i<count){
              display.push(<span key={i} className="glyphicon glyphicon-star" aria-hidden="true"/>);
          } else {
              display.push(<span key={i} className="glyphicon glyphicon-star-empty" aria-hidden="true"/>);
          }
      }
      return (<div>
              <hr/>
                <p>{this.props.comment}</p>
                {display}
              </div>
    );
  }
}

export default Comments;
