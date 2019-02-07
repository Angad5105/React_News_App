import React from 'react'
import Grid from '@material-ui/core/Grid'


const News = (props) => (
  <div className='news__info'>
  <Grid container spacing={40}>
   <Grid item xs={4}>
  {
      props.url &&
      <p>
        <img className='weather__key'
        src= {props.urlToImage} />
      </p>
    }
    </Grid>
    <Grid item xs={8}>
    {
      props.author &&
      <h1 className='weather__key'>
        <b>Author</b>: {props.author}
      </h1>
    }
    {
      props.title &&
      <h2 className='weather__key'>
        <b>Title</b>: {props.title}
        </h2>
    }
    {
      props.country &&
      <p className='weather__key'>
        <b>Country</b>: {props.country}%
      </p>
    }
    {
      props.description &&
      <p className='weather__key'>
        <b>Description</b>: {props.description};
      </p>
    }
    
   
    {
      props.publishedAt &&
      <p className='weather__key'>
        <b>Published</b>: {props.publishedAt};
      </p>
    }
    {
      props.content &&
      <p className='weather__key'>
        <b>Content</b>: {props.content};
      </p>
    }
    {
      props.error &&
      <p className='weather__key'>
        <b>Error</b>: {props.error}
      </p>
    }
    </Grid>
    </Grid>
  </div>
  
)

export default News