import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useUserMedia, useRecorder } from './useUserMedia'

const App = () => {

    const constrains: MediaStreamConstraints = {
        audio: true,
        video: true
    };

    const localVideoRef = useRef<HTMLVideoElement>(null);
    const mediaStream: MediaStream = useUserMedia(constrains);
	// const recorder: MediaRecorder = useRecorder(mediaStream);

	console.log(typeof mediaStream)

    // запускаем видео с вебки
    if (mediaStream && localVideoRef.current && !localVideoRef.current.srcObject) {
        localVideoRef.current.srcObject = mediaStream;
    }

	return (<React.Fragment>

		<div>Hello</div>

            <video
                className="absolute top-1 left-1 w-96 h-auto"
                ref={localVideoRef}
                id="local-video"
                muted
                autoPlay>
            </video>
			</React.Fragment>)
}

ReactDOM.render(<App />, document.getElementById("root"))
