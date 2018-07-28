import React from "react";
import ReactDOM from "react-dom";
import YTS from 'youtube-api-search'

import VideoItem from './component/video_item'
import VideoList from './component/video_list'
import SearchBar from './component/search_bar'
import "./styles.css";


const API_KEY = 'AIzaSyDrowUlRDFYGN3HTCc-QIMCOHeYoY8glBs';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      searchInput:'hi',
      searchInputFinal: null,
      selectedVideo: null,
      videos:[],
    
    }
    this.searchFun()


  }
     searchFun =() =>{
      YTS({ key: API_KEY, term: this.state.searchInput }, videos => {
        this.setState({ videos })

      })
    }

   changeHandler= (event) =>{
        this.setState({searchInput:event.target.value})
    }
    submitHandler =(e) => {
  
    this.searchFun()
    const inputvalue = this.state.searchInput;
    this.setState({
      searchInputFinal:inputvalue
    })
      e.preventDefault()
    

    }

    clickHandler= (video) => {
      this.setState({
        selectedVideo: video
      })
      
    }

  render(){
    return(
      <div>

      <SearchBar 
      
      inputValue={this.state.searchInput}
      handleChange={this.changeHandler}
      handleSubmit={this.submitHandler}
       />

      <VideoItem video={this.state.selectedVideo} />

      <VideoList
      clickHandler={(video) =>this.clickHandler(video)}
       videos={this.state.videos} />

      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
