import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifResults : [],
    search : 'dolphin'
    }

    componentDidMount(){
      fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=PK9UtwhvaHceeXQCFioyplDjWA4G4b4b&rating=g`)
      .then(res => res.json())
      .then(gif =>{
        this.setState({
          gifResults : gif.data.slice(0,3)
        })
      })
    }

    searchHandler = (input)=>{
      this.setState({
        search : input

      })
    }
    

  render() {

    console.log(this.state)
    return (
      <div>
        <GifSearch searchHandler={this.searchHandler}></GifSearch>
        <GifList gifResults={this.state.gifResults}></GifList>
      </div>
    )
  }
}

export default GifListContainer
