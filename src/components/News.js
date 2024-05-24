import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:  PropTypes.string,
  }
 
  constructor(){
    super();
    console.log("Hello I am constructor from News component");
    this.state = {
      articles: [],
      loading: false, 
      page:1
    }
  }
async componentDidMount(){
  console.log("cdm");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b616ba1cd96547f4a1c8745ab4c1e1a2&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData)
  this.setState({articles: parseData.articles, 
    totalResults: parseData.totalResults,
    loading: false
  })
}

handlePrevClick = async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b616ba1cd96547f4a1c8745ab4c1e1a2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData)
  this.setState({articles: parseData.articles})


  this.setState({
    page: this.state.page - 1,
    loading: false
  })
}
handleNextClick = async ()=>{
  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b616ba1cd96547f4a1c8745ab4c1e1a2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()
  
  this.setState({articles: parseData.articles})
  }


  this.setState({
    page: this.state.page + 1,
    loading: false
  })
}

  render() {
    return (
      <div>
        <div className='container my-3 '>
          <h2 className='text-center' style={{margin: '35px 0px'}}>Way4News - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
          <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title?element.title:""} description={element.descrption?element.description:""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
           </div>
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
