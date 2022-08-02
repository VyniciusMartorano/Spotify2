import React, { useRef, useState } from "react"
import '../css/Player.css'
import TimeBar from "./TimeBar"
import IconHeart from "./IconHeart"
import VolumeBar from "./VolumeBar"
import IconVolume from './IconVolume'



const Player = (props) => {

        let currentIndex = 0
        let [isPlaying, setisPlaying] = useState(false)
        const audioPlayer = useRef()


        const playPauseMusic = () => {
        if (isPlaying) {
            audioPlayer.current.pause()
            setisPlaying(false)
        }
        else {
            audioPlayer.current.play()
            setisPlaying(true)
        }
        console.log(props.musics, props.nome)
        }

        return (
        <div className="player-container">
            <div className="box-player">
                <div id="left-item-player-bar" className="item-player">
                    <div id="box-image-player">
                    </div>
                    <div className="texts-content-player">
                        <h3 className="title-music-player">Rockstar</h3>
                        <span className="autor-music-player">Post Malone</span>
                    </div>
                    <div className="fav-div-icon">
                        <IconHeart/>
                    </div>
                </div>
                <div id="center-item-player-bar" className="item-player">
                    <div className="player-buttons-container">
                        <i className="fa-solid fa-shuffle icon-button i-tiny"></i>
                        <i className="fa-solid fa-backward-step icon-button i-normal"></i>
                        {
                        isPlaying ? <i onClick={playPauseMusic} className="fa-solid fa-circle-pause icon-button-pp i-larger"></i>:<i onClick={playPauseMusic} className="fa-solid fa-circle-play icon-button-pp i-larger"></i>
                        }

                        <audio ref={audioPlayer} src="Post Malone - Circles.mp3"/>
                        <i className="fa-solid fa-forward-step icon-button i-normal"></i>
                        <i className="fa-solid fa-repeat icon-button i-tiny"></i>
                    </div>
                    <TimeBar/>
                </div>
                <div id="right-item-player-bar" className="item-player">
                    <IconVolume/>
                    <VolumeBar/>
                </div>
            </div>
           
        </div>
        )
}

export default Player