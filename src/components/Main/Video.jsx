import React from 'react'

function Video() {
    return (
        <div className='maincontent__video'>
            <iframe className='video'
                src="https://www.youtube.com/embed/b7htm6pQARY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
    )
}

export default Video