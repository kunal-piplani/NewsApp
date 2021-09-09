import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import MyLoader from "./MyLoader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setActicles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(true);
  // document.title =`${this.capitalizeFirstLetter(props.category)}-NewsAPP`;



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parseddata = await data.json();
    console.log(parseddata);
    props.setProgress(70);
    setActicles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);

    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title =`${this.capitalizeFirstLetter(props.category)}-NewsAPP`;
 updateNews();
  }, [])

  const handlePreviousButton = async () => {
    setPage(page-1)
  

    updateNews();
  };
  const handleNextButton = async () => {
    setPage(page+1)
   
    updateNews();
  };

  const  fetchMoreData = async () => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2bfde93e3f87449991a5d025e5c4b65e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setActicles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
    setLoading(true);
  
  };

  return (
    <>
      <h3 className="text-center" style={{ margin: "35px 0px" }}>
        Top {capitalizeFirstLetter(props.category)} Headline
      </h3>
      {loading && <MyLoader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<MyLoader />}
      >
        <div className="container">
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={!element.author ? "unknown" : element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreviousButton}>&laquo; previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextButton}>next &raquo;</button>
          </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
