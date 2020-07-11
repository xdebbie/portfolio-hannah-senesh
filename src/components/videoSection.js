import React from "react"

const VideoSection = () => {
    return (
        <div className="video-section">
            <div className="container">
                <div className="video-player">
                    <video poster="https://i.imgur.com/vxjDVxA.mp4" controls type="video/mp4" src="https://i.imgur.com/vxjDVxA.mp4" />
                    <video poster="https://i.imgur.com/l9WIOKY.mp4" controls type="video/mp4" src="https://i.imgur.com/l9WIOKY.mp4" />
                </div>
                
                <div className="video-content">
                    <div className="title">
                        <h3>Låt oss prata om det nu</h3>
                    </div>
                    <div className="content">
                        <p> Jag är så glad att presentera filmens första trailers. ”Låt Oss Prata Om Det Nu” är en film som fokuserar på Kalifornien på nittiotalet och stadskulturen på Venice Beach. Filmen utforskar de unga friheten under det decenniet liksom det fria uttrycket för alla typer av kärlek. De visuella elementen är tungt laddade på vintage- och estetiska stilar, och har också Lana del Rey som den perfekta estetiska musen i denna era.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection