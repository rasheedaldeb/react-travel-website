import  './Video.css'
const Video = ({videoTitle, bgImg, playLogo}) => {
    return (
        <div className='video' style={{backgroundImage:`url(${bgImg})`}}>
        <h1>{videoTitle}</h1>
        <img src={playLogo} alt="" />
        </div>
    )
}

export default Video
