import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid'
import Form from './components/form'
import News from './components/news'


const API_KEY = '40c4cbbfe4a044fb820bebaca8a1f978'
class App extends Component {
  
  state = {
    author: null,
    title: null,
    description: null,
    url: null,
    urlToImage: null,
    publishedAt: null,
    content: null,
    error: null
}

getNews = async (event) => {
  event.preventDefault()
  console.log(this.state)
  const country = event.target.elements.country.value

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`

    const api_call = await fetch(url)

    const data = await api_call.json()

    if (country && data.cod !== '404') {
      this.setState({
        
        author: data.articles[1].author,
        title: data.articles[1].title,
        country: data.articles[1].country,
        description: data.articles[1].description,
        url: data.articles[1].url,
        urlToImage: data.articles[1].urlToImage,
        publishedAt: data.articles[1].publishedAt,
        content: data.articles[1].content,
        error: ''
      })
    }else {
      this.setState({
        author: null,
        title: null,
        country: null,
        description: null,
        url: null,
        urlToImage: null,
        publishedAt: null,
        content: null,
        error: 'Please fill in the form fields'
      })
    }
  }
  
  render () {
    return (
      <div className='wrapper'>
        <div className='main'>
          <Grid container spacing={0}>
            <Form 
              getNews={this.getNews}
             
            />
            <News 
               
               author={this.state.author}
               title={this.state.title}
               country={this.state.country}
               description={this.state.description}
               url={this.state.url}
               urlToImage={this.state.urlToImage}
               publishedAt={this.state.publishedAt}
               content={this.state.content}
               error={this.state.error}
             
            />
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;
