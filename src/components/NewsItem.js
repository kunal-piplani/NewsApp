import React, { Component } from 'react'

export class NewsItem extends Component {
 
   
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className="my-3">
                <h2>NewsApp-Top Head Lines</h2>
                <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Details View</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
