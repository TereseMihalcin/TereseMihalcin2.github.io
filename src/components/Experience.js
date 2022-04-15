import React, { Component } from "react";
import ReactPlayer from 'react-player';



class Video extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.video;
    }
      
    
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
            </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div> 
                <ReactPlayer 
                style={{ margin: "30px" }}
                controls
                url = 'https://www.youtube.com/watch?v=UlbJXGSf9TM'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
