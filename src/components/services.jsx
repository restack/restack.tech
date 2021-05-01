import React from 'react'
import ReactPlayer from 'react-player'

export const Services = (props) => {
  return (
    
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          Live patching hallelujah (whoo) Live patching hallelujah (whoo)
          ‘Cause Uptime Funk gon’ give it to ya ‘Cause Uptime Funk gon’ give it to ya
          Saturday night and servers alright Don’t reboot it just patch (come on)
          </p>
        </div>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=SYRlTISvjww'
              playing
              controls
              muted
              loop
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
              width="100%"
              height="100%"
            />
          </div>
      </div>
    </div>
  )
}
