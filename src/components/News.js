import React, { Component } from "react";
import NewsItem from "./NewsItem";
import MyLoader from "./MyLoader";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

    capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){

        super(props);
           this.state={
            articles:[],
            page :1,
        loading:false,
        totalResults:0
        }
    document.title =`${this.capitalizeFirstLetter(this.props.category)}-NewsAPP`;
    }

   

    async updateNews(){
this.props.setProgress(10);
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =await fetch(url);
        this.props.setProgress(40);
        let parseddata =await data.json();
        console.log(parseddata);
        this.props.setProgress(70);
        this.setState({articles:parseddata.articles,
            totalResults:parseddata.totalResults,
            loading:false
        });
        this.props.setProgress(100);
    }
async componentDidMount(){


   this.updateNews();
}
handlePreviousButton=async()=>{

this.setState({
     page:this.state.page-1,

});







this.updateNews();
}
handleNextButton=async()=>{
    
this.setState({
    page:this.state.page+1,

});
this.updateNews();

}

fetchMoreData = async() => {
  
  this.setState({page :this.state.page + 1});
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data =await fetch(url);
        let parseddata =await data.json();
        console.log(parseddata);
        this.setState({articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
            loading: true,
        });

 
};



  render() {
    return (
      <>
        <h3 className="text-center" style={{margin:'35px 0px'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headline</h3>
{this.state.loading && <MyLoader/>}
<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<MyLoader/>}
        >


          <div className="container">
          <div className="container">
            
        <div className="row" >

            { this.state.articles.map((element)=>
            {
                return <div className="col-md-4" key ={element.url}>
                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} 
                author ={!element.author?"unknown":element.author} date ={element.publishedAt} source ={element.source.name}/>
              
              </div> 
            })}
            </div>
            </div>
            </div>
            </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreviousButton}>&laquo; previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextButton}>next &raquo;</button>
          </div> */}

         

         
        </>
      
    );
  }
}

export default News;
