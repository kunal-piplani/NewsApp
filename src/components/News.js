import React, { Component } from "react";
import NewsItem from "./NewsItem";
import MyLoader from "./MyLoader";
import PropTypes from 'prop-types'

export class News extends Component {


    static defaultProps = {
        country: 'in',
        pageSize:10,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category: PropTypes.string,
    }



    articles =  []



    constructor(){

        super();
        console.log("Constr from News Component ");
           this.state={
            articles:[],
            page :1,
        loading:false
        }
    
    }
async componentDidMount(){


    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =await fetch(url);
    let parseddata =await data.json();
    console.log(parseddata);
    this.setState({articles:parseddata.articles,
        totalResults:parseddata.totalResults,
        loading:false
    });
}
handlePreviousButton=async()=>{

    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    let data =await fetch(url);
    let parseddata =await data.json();
this.setState({
page:this.state.page-1,
articles:parseddata.articles,
loading:false
})



}
handleNextButton=async()=>{
    
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =await fetch(url);
        let parseddata =await data.json();
    this.setState({
    page:this.state.page+1,
    articles:parseddata.articles,
    loading:false
    })
   
    }
    
    else{
  
}
}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text ceter">Top Headline</h1>
{this.state.loading && <MyLoader/>}
        <div className="row" >

            { !(this.state.loading) && this.state.articles.map((element)=>
            {
                return <div className="col-md-4" key ={element.url}>
                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} 
                author ={!element.author?"unknown":element.author} date ={element.publishedAt} source ={element.source.name}/>
              
              </div> 
            })}
            </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreviousButton}>&laquo; previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextButton}>next &raquo;</button>
          </div>

         

         
        </div>
      
    );
  }
}

export default News;
