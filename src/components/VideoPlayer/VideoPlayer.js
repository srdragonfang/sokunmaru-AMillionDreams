import React from 'react'
import './videoplayer.css'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import { IoIosClose } from 'react-icons/io'

const VideoPlayer = () => {
    const opts = {
        width: "780",
        height: "460",
        playerVars: {
            autoplay: 1,
        }
    }
    return (
        <>
            <div className='data__popUp-trailer'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://images8.alphacoders.com/121/1211632.jpg")`,
                    backgroundPosition: "center center"
                }}
            >
                <div class="data__bg-trailer">
                    <div className='trailer__popUp-bar'><Link className="link__button" to="/"><IoIosClose size={30} /></Link></div>
                    <Youtube
                        videoId="4Ps6nV4wiCE"
                        opts={opts}
                    />
                </div>
            </div>

        </>
    )
}
export default VideoPlayer