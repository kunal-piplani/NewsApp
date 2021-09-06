import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
articles =  []
    constructor(){

        super();
        console.log("Constr from News Component ");
           this.state={
            articles:[],
            page :1,
        
        }
    
    }
async componentDidMount(){


    let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=1&pageSize=21";
    let data =await fetch(url);
    let parseddata =await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles,
        totalResults:parseddata.totalResults
    });
}
handlePreviousButton=async()=>{

    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page -1}&pageSize=21`;
    let data =await fetch(url);
    let parseddata =await data.json();
this.setState({
page:this.state.page-1,
articles:parseddata.articles
})



}
handleNextButton=async()=>{
    
    if(this.state.page+1>Math.ceil(this.state.totalResults/21)){


    }
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page +1}&pageSize=21`;
    let data =await fetch(url);
    let parseddata =await data.json();
this.setState({
page:this.state.page+1,
articles:parseddata.articles
})

}
}

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headline</h2>
        <div className="row" >
            {  this.state.articles.map((element)=>
            {
                return <div className="col-md-4" key ={element.url}>
                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
              
              </div> 
            })}
            </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreviousButton}>&laquo; previous</button>
          <button type="button" className="btn btn-success" onClick={this.handleNextButton}>next &raquo;</button>
          </div>

         

         
        </div>
      
    );
  }
}

export default News;
