const vidElement = document.querySelector("video");

const mime = 'video/mp4; codecs="avc1.64001f,mp4a.40.02"';
/*
var mediaSource = new MediaSource();
// vidElement.src = URL.createObjectURL(mediaSource);
// mediaSource.addEventListener("sourceopen", sourceOpen);

function sourceOpen(e) {

    var sourceBuffer = mediaSource.addSourceBuffer(mime);

    fetch("assets/init.mp4")
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
        sourceBuffer.appendBuffer(arrayBuffer);
        return fetch("assets/video1_00.m4s");
    })
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
        sourceBuffer.appendBuffer(arrayBuffer);
    });

}*/


// const mimeCodec = 'video/mp4; codecs="avc1.64001f,mp4a.40.02"';
// const mimeCodecOld = 'video/mp4; codecs="avc1.64001f,mp4a.40.02"';

(async () => {
	const videoElement = document.querySelector('video');
	const vidClips = [
		'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.160p.webm',
		'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.webm',
		'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f5/STB_Stuttgart_F%C3%B6hrich_U6_Line_Entering_Station_VIDEO.webm/STB_Stuttgart_F%C3%B6hrich_U6_Line_Entering_Station_VIDEO.webm.160p.webm'
	];

	// const teaserClips = [
	// 	'http://localhost:3000/multi-file/manual/rabbit320.webm',
	// 	'http://localhost:3000/multi-file/manual/Schlossbergbahn.webm.160p.webm',
	// 	'http://localhost:3000/multi-file/manual/STB_Stuttgart_F%C3%B6hrich_U6_Line_Entering_Station_VIDEO.webm.160p.webm'
	// ];
	

	const teaserClips = [
        'http://localhost:3000/chunked/init.mp4',
		'http://localhost:3000/chunked/movie_ad_00.m4s',
		'http://localhost:3000/chunked/movie_ad_01.m4s',
		'http://localhost:3000/chunked/movie_ad_02.m4s',
		'http://localhost:3000/chunked/movie_ad_03.m4s',
		'http://localhost:3000/chunked/movie_ad_04.m4s',
		'http://localhost:3000/chunked/movie_ad_05.m4s',
		'http://localhost:3000/chunked/movie_ad_06.m4s',
		'http://localhost:3000/chunked/movie_ad_07.m4s',
		'http://localhost:3000/chunked/movie_ad_08.m4s',
		'http://localhost:3000/chunked/movie_ad_09.m4s',
		'http://localhost:3000/chunked/movie_ad_10.m4s',
		'http://localhost:3000/chunked/movie_ad_11.m4s',
		'http://localhost:3000/chunked/movie_ad_12.m4s',
		'http://localhost:3000/chunked/movie_ad_13.m4s',
		'http://localhost:3000/chunked/movie_ad_14.m4s',
		'http://localhost:3000/chunked/movie_ad_15.m4s',
        'http://localhost:3000/chunked/movie_ad_16.m4s',
        'http://localhost:3000/chunked/movie_ad_17.m4s',
        'http://localhost:3000/chunked/movie_ad_18.m4s',
        'http://localhost:3000/chunked/movie_ad_19.m4s',
        'http://localhost:3000/chunked/movie_ad_20.m4s',
        'http://localhost:3000/chunked/movie_ad_21.m4s',
        'http://localhost:3000/chunked/movie_ad_22.m4s',
        'http://localhost:3000/chunked/movie_ad_23.m4s',
        'http://localhost:3000/chunked/movie_ad_24.m4s',
        'http://localhost:3000/chunked/movie_ad_25.m4s',
        'http://localhost:3000/chunked/movie_ad_26.m4s',
        'http://localhost:3000/chunked/movie_ad_27.m4s',
        'http://localhost:3000/chunked/movie_ad_28.m4s',
        'http://localhost:3000/chunked/movie_ad_29.m4s',
        'http://localhost:3000/chunked/movie_ad_30.m4s',
        'http://localhost:3000/chunked/movie_ad_31.m4s',
	];

    const teaserChunkDuration = [
        2.0,
        0.068733,
		1.968633,
		1.968633,
		2.002,
		2.068733,
		1.935267,
		2.002,
		2.068733,
		1.935267,
		2.002,
		2.068733,
		1.935267,
		2.068733,
		2.002,
		1.935267,
		2.002,
		2.068733,
	];

	const mainUnitClips = [
        'http://localhost:3000/chunks2/init.mp4',
		'http://localhost:3000/chunks2/video2_00.m4s',
		'http://localhost:3000/chunks2/video2_01.m4s',
		'http://localhost:3000/chunks2/video2_02.m4s',
		'http://localhost:3000/chunks2/video2_03.m4s',
		'http://localhost:3000/chunks2/video2_04.m4s',
		'http://localhost:3000/chunks2/video2_05.m4s',
		'http://localhost:3000/chunks2/video2_06.m4s',
		'http://localhost:3000/chunks2/video2_07.m4s',
		'http://localhost:3000/chunks2/video2_08.m4s',
		'http://localhost:3000/chunks2/video2_09.m4s',
		'http://localhost:3000/chunks2/video2_10.m4s',
		'http://localhost:3000/chunks2/video2_11.m4s',
		'http://localhost:3000/chunks2/video2_12.m4s',
		'http://localhost:3000/chunks2/video2_13.m4s',
		'http://localhost:3000/chunks2/video2_14.m4s'
	];

    // const tmainUnitClipsDuration = [
    //     2.0,
    //     0.068733,
	// 	1.968633,
	// 	1.968633,
	// 	2.002,
	// 	2.068733,
	// 	1.935267,
	// 	2.002,
	// 	2.068733,
	// 	1.935267,
	// 	2.002,
	// 	2.068733,
	// 	1.935267,
	// 	2.068733,
	// 	2.002,
	// 	1.935267,
	// 	2.002,
	// 	2.068733,
	// ];

	// const mainUnitClips = [
	// 	'http://localhost:3000/chunked/movie_ad_16.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_17.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_18.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_19.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_20.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_21.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_22.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_23.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_24.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_25.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_26.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_27.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_28.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_29.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_30.m4s',
	// 	'http://localhost:3000/chunked/movie_ad_31.m4s',
	// ];



	// Shuffle clips. If you reload the page, you will get a random order of videos!
	// shuffleArr(vidClips);
	// shuffleArr(teaserClips);
	// shuffleArr(mainUnitClips);

	// const fetchOriginalClips =  async () => {
	// 	return await Promise.all(
	// 		vidClips.map(async (vidUrl,i) => {
	// 			const blob = await (await fetch(vidUrl));//.blob();
	// 			const duration = await getDuration(blob);
	// 			const buff = await blob.arrayBuffer();
	// 			return {
	// 				url: vidUrl,
	// 				duration,
	// 				buff
	// 			};
	// 		})
	// 	);
	// };

	const fetchTeaserClips =  async () => {
		return await Promise.all(
			teaserClips.map(async (vidUrl,i) => {
				const blob = await (await fetch(vidUrl));//.blob();
				const duration = (Math.random()*3); //teaserChunkDuration[i];//await getDuration(blob);
				const buff = await blob.arrayBuffer();
				return {
					url: vidUrl,
					duration,
					buff
				};
			})
		);
	};


	const fetchMainUnitClips =  async () => {
		return await Promise.all(
			mainUnitClips.map(async (vidUrl,i) => {
				const blob = await (await fetch(vidUrl));//.blob();
				const duration = (Math.random()*3);//teaserChunkDuration[i]; //0;//await getDuration(blob);
				const buff = await blob.arrayBuffer();
				return {
					url: vidUrl,
					duration,
					buff
				};
			})
		);
	};
	let teaserClipIndex = 0;
	const loadTeaserVideosIntoMSE = async () => {
		
		teaserClipsToAppend = await fetchTeaserClips();
        console.log('teaserClipsToAppend.length:'+teaserClipsToAppend.length);
		if (teaserClipIndex < teaserClipsToAppend.length - 1) {
			// We have another segment to add
			// BUT, first we need to offset the time by the duration of
			// the previously appended clip. Otherwise it will overwrite it
			//debugger
			sourceBuffer.timestampOffset += teaserClipsToAppend[teaserClipIndex].duration;
			// Now we can move on to next clip and append it
			teaserClipIndex++;
			console.log('timestampOffset:'+sourceBuffer.timestampOffset+':duration:'+teaserClipsToAppend[teaserClipIndex].duration)
			console.log('teaserClipIndex:'+teaserClipIndex)
			sourceBuffer.appendBuffer(teaserClipsToAppend[teaserClipIndex].buff);
		} else {
			// Done!
			mediaSource.endOfStream();
			//mediaSource.
			videoElement.play();
			
		}

	}

	const loadMainVideosIntoMSE = async (mainClipsToAppend) => {
        console.log(`loadMainVideosIntoMSE~loadMainVideosIntoMSE!`);
		let mainClipIndex = 0, sourceBuffer2;
        const mediaSource2 = new MediaSource();
		//mainClipsToAppend = await fetchMainUnitClips();
        videoElement.src = URL.createObjectURL(mediaSource2);
        sourceBuffer2 = await addSourceBufferWhenOpen(mediaSource2, `video/mp4; codecs="avc1.64001f,mp4a.40.02"`, 'segments');
        sourceBuffer2.appendBuffer(mainClipsToAppend[mainClipIndex].buff);
        sourceBuffer2.onupdateend = async () => {
            console.log('mainClipsToAppend.length:'+mainClipsToAppend.length);
            if (mainClipIndex < mainClipsToAppend.length - 1) {
                // We have another segment to add
                // BUT, first we need to offset the time by the duration of
                // the previously appended clip. Otherwise it will overwrite it
                // --- sourceBuffer.timestampOffset += mainClipsToAppend[mainClipIndex].duration;
                // Now we can move on to next clip and append it
                console.log(`loadMainVideosIntoMSE~loadMainVideosIntoMSE! ${mainClipIndex} `);
                sourceBuffer2.appendBuffer(mainClipsToAppend[mainClipIndex].buff);
                mainClipIndex++;
            } else {
                console.log(`loadMainVideosIntoMSE~loadMainVideosIntoMSE Done!`);
                // Done!
                mediaSource2.endOfStream();
                //mediaSource.
                videoElement.play();
            }
        };

	}


	// For `sourceBuffer.mode = 'segments'`, we have to be careful with multiple
	// videos. Segments means that browser will try to sniff timestamps from
	// the files. In our case, we are using completely separate files, without
	// timeline info. So, we need to compute the duration of each, and then use
	// that later to manually offset each chunk from the previous

	/**
	 * @typedef {{url: string, duration: number, buff: ArrayBuffer}} ClipToAppend
	 */
	/** @type {ClipToAppend[]} */
	/*const clipsToAppend = await Promise.all(
		vidClips.map(async (vidUrl) => {
			const blob = await (await fetch(vidUrl)).blob();
			const duration = await getDuration(blob);
			const buff = await blob.arrayBuffer();
			return {
				url: vidUrl,
				duration,
				buff
			};
		})
	);*/
	let teaserClipsToAppend, mainUnitClipsToAppend, clipsToAppend, mainClipsToAppend;
	let sourceBuffer;
	clipsToAppend = await fetchTeaserClips();
    //fetchOriginalClips();//fetchTeaserClips();//fetchOriginalClips();

	// Normal setup, with MediaSource, Object URL, and prepped SourceBuffer
	const mediaSource = new MediaSource();
    videoElement.src = URL.createObjectURL(mediaSource);

	//const mediaSource2 = new MediaSource();
    //videoElement.src = URL.createObjectURL(mediaSource2);

	// mode = segments
	sourceBuffer = await addSourceBufferWhenOpen(mediaSource, `video/mp4; codecs="avc1.64001f,mp4a.40.02"`, 'segments');
    //sourceBuffer = await addSourceBufferWhenOpen(mediaSource, `video/webm; codecs="vp8,vorbis"`, 'segments');

	/**
	 * Pointer to last vid appended out of source list
	 */
	let clipIndex = 0;
	sourceBuffer.onupdateend = async () => {
        console.log('clipsToAppend.length:'+clipsToAppend.length);
		if (clipIndex < clipsToAppend.length - 1) {
			// We have another segment to add
			// BUT, first we need to offset the time by the duration of
			// the previously appended clip. Otherwise it will overwrite it
			// -- sourceBuffer.timestampOffset += clipsToAppend[clipIndex].duration;
			// Now we can move on to next clip and append it
			
			sourceBuffer.appendBuffer(clipsToAppend[clipIndex].buff);
            clipIndex++;
		} else {
			// Done!
			mediaSource.endOfStream();
            //videoElement.src = URL.createObjectURL(mediaSource);
            videoElement.play();
			//loadTeaserVideosIntoMSE()
            mainClipsToAppend = await fetchMainUnitClips();
            
            setTimeout(() => {
                console.log('load and play main unit videos')
                loadMainVideosIntoMSE(mainClipsToAppend);
            },9000);
		}
	};

	// This will kick off event listener chain above
	sourceBuffer.appendBuffer(clipsToAppend[clipIndex].buff);

	// Debug Info
	console.log({
		sourceBuffer,
		mediaSource,
		videoElement
	});
})();



