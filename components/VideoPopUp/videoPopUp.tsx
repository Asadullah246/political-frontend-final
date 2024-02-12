import useClickoutside from "@/hooks/useClickOutsite"
import { useStore } from "@/hooks/useStore"
import { FormInput, Maximize, Maximize2, Pause, PictureInPicture2Icon, Play, PlaySquare, Ratio, Volume1, Volume2, VolumeX, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

  const VideopoPup = () => {
     const ModalOpenClose = useStore()

     const popup = useRef(null)
     const [index, setIndex] = useState(0) 
     useClickoutside(popup, () => {
          ModalOpenClose.ModalonClose()
     });

    useEffect(() => {
     const video = document.querySelector("video") as HTMLVideoElement;
     const videoContainer = document.querySelector(".video-container");
     const playPauseBtn = document.querySelector(".play-pause-btn") as HTMLElement;
     const theaterBtn = document.querySelector(".theater-btn") as HTMLElement;
     const miniPlayerBtn = document.querySelector(".mini-player-btn") as HTMLElement;
     const fullScreenBtn = document.querySelector(".full-screen-btn") as HTMLElement;
     const muteBtn = document.querySelector(".mute-btn") as HTMLElement;
     const volumeSlider = document.querySelector(".volume-slider") as HTMLInputElement;
     const currentTime = document.querySelector(".current-time") as HTMLElement;
     const totalTime = document.querySelector(".total-time") as HTMLElement;
     const speedBtn = document.querySelector(".speed-btn") as HTMLElement;
     const timeline = document.querySelector(".timeline") as HTMLElement;
     const thumbIndicator = document.querySelector(".thumb-indicator") as HTMLElement;
     const timelineContainer = document.querySelector(".timeline-container") as HTMLElement;
     // timeline
     timelineContainer.addEventListener("mousemove",handelTimeLineUpdate)
     timelineContainer.addEventListener("mousedown", toggleScrabbing)
     document.addEventListener("mouseup", (e)=> {
          if(isScrabbing) {
               toggleScrabbing(e)
          }

     })
     let isScrabbing = false
     let wasPaused:any
     function toggleScrabbing(e:any) {
          const rect = timelineContainer.getBoundingClientRect()
          const percent = Math.min(Math.max(0,e.x - rect.x), rect.width) / rect.width
          isScrabbing = (e.buttons & 1) === 1
          videoContainer?.classList.toggle("scrabbing", isScrabbing)
          if(isScrabbing) {
               wasPaused = video.paused
               video.pause()
          }
          else {
          if(!wasPaused) {
               video.currentTime = video.duration * percent
               video.play()
          }
          }
          handelTimeLineUpdate(e)
     }
     function handelTimeLineUpdate(e:any) {
          const rect = timelineContainer.getBoundingClientRect()
          const percent = Math.min(Math.max(0,e.x - rect.x), rect.width) / rect.width
          timelineContainer.style.setProperty('--preview-position', percent.toString())
          if (isScrabbing) {
               e.preventDefault()
               timelineContainer.style.setProperty("--progress-position", percent.toString())
             }
     }
     // timeline
     // speed
     speedBtn?.addEventListener("click", changesPlaybackSpeed)
     function changesPlaybackSpeed() {
           let newPlaybackSpeed = parseFloat((video?.playbackRate as any)) + .25
               if(newPlaybackSpeed > 2) {
                    newPlaybackSpeed = .25
               }
               video.playbackRate = newPlaybackSpeed
               speedBtn.textContent = `${newPlaybackSpeed}x`
     }
     // speed
     // time

     video?.addEventListener("loadeddata", ()=> {

          totalTime.textContent = formaDuration(video?.duration)
     })
     video?.addEventListener("timeupdate", ()=> {
          currentTime.textContent = formaDuration(video?.currentTime)
          const percent = video?.currentTime / video?.duration
          timelineContainer.style.setProperty("--progress-position", percent.toString())
     })
     const leadingZeroFormat = new Intl.NumberFormat(undefined, {minimumIntegerDigits: 2})
     function formaDuration(time: any) {
          const seconds = Math.floor(time % 60)
          const minutes = Math.floor((time / 60) % 60)
          const hours = Math.floor(time / 3600)
          if(hours === 0) {
               return `${minutes}:${leadingZeroFormat.format(seconds)}`
          }
          return `${hours}:${leadingZeroFormat.format(minutes)}:${leadingZeroFormat.format(seconds)}`
     }
     // time
     // volume modes
     muteBtn?.addEventListener("click", toggleMute)
     volumeSlider?.addEventListener("input", (e:any)=>{
               video.volume = e.target.value
               video.muted = e.target.value === 0
     })
     function toggleMute() {
               video.muted = !video?.muted
     }
     video?.addEventListener("volumechange", ()=> {
          let volume = parseFloat(volumeSlider.value)
          volume = video.volume
          let volumeLevel
          if(video?.muted || video?.volume === 0) {
               volume = 0
               volumeLevel = "muted"
          }
          else if( video.volume >= .5){
               volumeLevel = "high"
          }
          else {
               volumeLevel = "low"
          }
          videoContainer?.setAttribute("data-volume-lavel", volumeLevel)
     })
     // volume modes
     // view modes
     theaterBtn?.addEventListener("click", toggelTheaterMode)
     miniPlayerBtn?.addEventListener("click", toggelMiniPlayerMode)
     fullScreenBtn?.addEventListener("click", toggleFullScreenMode)
     function toggelTheaterMode() {
          videoContainer?.classList.toggle("theater")
     }
     function toggelMiniPlayerMode() {
          if(videoContainer?.classList.contains("mini-player")) {
                document.exitPictureInPicture()
          }
          else {
               video?.requestPictureInPicture()
          }
     }
     function toggleFullScreenMode() {
          if(document.fullscreenElement !== null) {
               document.exitFullscreen()
          }
          else {
               videoContainer?.requestFullscreen()
          }
     }
     document.addEventListener("fullscreenchange", ()=> {
          videoContainer?.classList.toggle("full-screen",document.fullscreenElement !== null)
     })
     video?.addEventListener("enterpictureinpicture", ()=> {
          videoContainer?.classList.add("mini-player")
     })
     video?.addEventListener("leavepictureinpicture", ()=> {
          videoContainer?.classList.remove("mini-player")
     })
     // view modes
     // play pause btn
     playPauseBtn?.addEventListener("click", togglePlay)
     video?.addEventListener("click", togglePlay)
     function togglePlay() {
          video?.paused ? video?.play() : video?.pause()
     }
     video?.addEventListener("play", ()=>{
          videoContainer?.classList.remove("paused")
     })
     video?.addEventListener("pause", ()=>{
          videoContainer?.classList.add("paused")
     })
     // play pause btn
    }, [])

    return (
        <div className="fixed top-[0%] bottom-[0%] left-0 right-0 bg-black/50 z-[99999999999] md:w-[110%] w-[100%] min-h-screen md:h-[100%] overflow-y-auto h-[100vh]">
            <div className=" flex justify-center items-center w-[100%]">
            <div className="lg:w-[50%] md:w-[75%] w-[100%] mx-auto bg-gray-700 md:p-8 rounded-md md:h-[100%] h-[100vh] p-2" ref={popup}>
            <div className=" flex justify-between">
                 <h2 className=" text-gray-300 text-[14px] font-[800]">Course Preview</h2>
                    <X size={20} className="text-gray-100 cursor-pointer"
                    onClick={()=>ModalOpenClose.ModalonClose()}
                    />
            </div>
            {/* -----main data---- */}

            <div>
               {/* ----course Tittle----- */}
            <h2 className=" md:text-[18px] text-[12px] font-[800] text-white mt-1">
            Editing a WordPress Website using the Divi Page Builder 2023
            </h2>
            {/* ----course Tittle----- */}
                <div className="py-5">
                  <div className={`video-container paused`} data-volume-lavel="high">
                    <div className=" video-controls-container">
                         <div className="timeline-container">
                              <div className="timeline">
                                   <div className="thumb-indicator"></div>
                              </div>
                         </div>
                         <div className=" controls">
                              <button className="play-pause-btn"
                              >
                              <Play className=" play-icon" fill="white"/>
                              <Pause className=" pause-icon" fill="white"/>
                              </button>
                              <div className="volume-container">
                              <button className="mute-btn">
                                   <Volume1 className="volume-low-icon"/>
                                   <Volume2 className="volume-high-icon"/>
                                   <VolumeX className="volume-muted-icon"/>
                              </button>
                              <input className="volume-slider" type="range" min="0" max="1" step="any" defaultValue="1"/>
                              </div>
                              <div className="duration-container">
                                   <div className="current-time">0:00</div>
                                   /
                                   <div className="total-time"></div>
                              </div>
                              <button className=" speed-btn wide-btn">
                                   1x
                              </button>
                              <button className="mini-player-btn">
                               <PictureInPicture2Icon/>
                              </button>
                              <button className="theater-btn">
                                   <FormInput className=" tall"/>
                                   <Ratio className="wide"/>
                              </button>
                              <button className="full-screen-btn">
                                    <Maximize className="open"/>
                                    <Maximize2 className="close"/>
                              </button>
                         </div>
                    </div>
                    <video className="w-full h-[100%]">
                    <source src="https://political2.s3.amazonaws.com/welcome.mp4" type="video/mp4"  />
                  </video>
                  </div>
                </div>
                {/* ------other video div----- */}
                 <div className=" bg-gray-500 p-2 rounded-sm w-full h-[60px] mb-3 relative">
                     {/* div */}
                          <div className=" flex gap-x-2 w-full h-full items-center">
                            <img src="/assets/testimonial-v1-2.jpg" className=" h-[40px] w-[40px]" alt="" />
                            <PlaySquare size={20} className="text-white" />
                            <h2 className="text-[12px] md:text-[14px] font-[800] text-white w-[80%]">
                            Editing a WordPress Website using the Divi Page Builder 2023
                            </h2>
                            <div className=" absolute right-3 w-[30px]">
                                 {/* time */}
                                   <h2 className="text-[12px] text-white font-[800] md:text-[15px]">
                                        2:30
                                   </h2>
                                 {/* time */}
                            </div>
                          </div>
                     {/* div */}
                 </div>
                {/* ------other video div----- */}
                {/* ------other video div----- */}
                <div className=" bg-gray-500 p-2 rounded-sm w-full h-[60px] mb-3 relative">
                     {/* div */}
                          <div className=" flex gap-x-2 w-full h-full items-center">
                            <img src="/assets/testimonial-v1-2.jpg" className=" h-[40px] w-[40px]" alt="" />
                            {/* <PlaySquare size={20} className="text-white" /> */}
                            <h2 className="text-[12px] md:text-[14px] font-[800] text-white w-[80%]">
                            Editing a WordPress Website using the Divi Page Builder 2023
                            </h2>
                            <div className=" absolute right-3 w-[30px]">
                                 {/* time */}
                                   <h2 className="text-[12px] text-white font-[800] md:text-[15px]">
                                        2:30
                                   </h2>
                                 {/* time */}
                            </div>
                          </div>
                     {/* div */}
                 </div>
                {/* ------other video div----- */}
            </div>
             {/* -----main data---- */}
           </div>
            </div>

        </div>
    )
}

export default VideopoPup
