import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            showGalleryPlayButton: true,
            showGalleryFullscreenButton: true,
            showVideo: {}
        };

        this.images = [
            {
              original: 'http://lorempixel.com/1000/600/nature/1/',
              thumbnail: 'http://lorempixel.com/250/150/nature/1/',
              embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
              renderItem: this._renderVideo.bind(this)
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/3/',
              thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]
    }

    _renderVideo = (item) => {
        return (
          <div className='image-gallery-image'>
            {
              this.state.showVideo[item.embedUrl] ?
                <div className='video-wrapper'>
                    <a
                      className='close-video'
                      onClick={() => this._toggleShowVideo(item.embedUrl)}
                    >
                    </a>
                    <iframe
                      width='560'
                      height='315'
                      src={item.embedUrl}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe>
                </div>
              :
                <a onClick={() => this._toggleShowVideo(item.embedUrl)}>
                  <div className='play-button'></div>
                  <img src={item.original}/>
                </a>
            }
          </div>
        );
      }

    _toggleShowVideo = (url) => {
        console.log(url);
        console.log(this.state);
      this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
      this.setState({
        showVideo: this.state.showVideo
      });
  
      if (this.state.showVideo[url]) {
        if (this.state.showGalleryPlayButton) {
          this.setState({showGalleryPlayButton: false});
        }
  
        if (this.state.showGalleryFullscreenButton) {
          this.setState({showGalleryFullscreenButton: false});
        }
      }
    }

    _resetVideo = () => {
        this.setState({showVideo: {}});

        if (!this.state.showGalleryPlayButton) {
        this.setState({showGalleryPlayButton: true});
        }

        if (!this.state.showGalleryFullscreenButton) {
        this.setState({showGalleryFullscreenButton: true});
        }
    }

    render() {
        return (
            <ImageGallery 
                items={this.images}
                showFullscreenButton={this.state.showGalleryFullscreenButton}
                showPlayButton={this.state.showGalleryPlayButton}
                onSlide={this._resetVideo}            
            />
        );
    }
}

export default Gallery;