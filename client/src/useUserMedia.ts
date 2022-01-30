import {useEffect, useState} from "react";

export function useUserMedia(requestedMedia: MediaStreamConstraints) {
    const [mediaStream, setMediaStream] = useState<MediaStream>(null as any);

    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
                setMediaStream(stream);

				const recorder = new MediaRecorder(stream);

				recorder.ondataavailable = event => {
					// console.log(event.data)
				}

				recorder.start(100)
            } catch(err) {
                console.error(err); }
        }

        if (!mediaStream) {
            enableStream();
        } else {
            return function cleanup() {
                mediaStream.getTracks().forEach(track => {
                    track.stop();
                });
            }
        }
    }, [mediaStream, requestedMedia]);

    return mediaStream;
}
