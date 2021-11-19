/**
 * @file This shows how, when using the segments mode of SourceBuffer, and appending disparate files, you need to manage offsets yourself
 */

(async () => {
	const videoElement = document.querySelector('video');
	const vidClips = [
		'http://localhost:3000/mediasource-append-examples/multi-file/manual/STB_Stuttgart_F%C3%B6hrich_U6_Line_Entering_Station_VIDEO.webm.160p.webm',
		'http://localhost:3000/mediasource-append-examples/multi-file/manual/Schlossbergbahn.webm.160p.webm',
		'http://localhost:3000/mediasource-append-examples/multi-file/manual/rabbit320.webm'
	];
	// Shuffle clips. If you reload the page, you will get a random order of videos!
	shuffleArr(vidClips);


	const mediaSource = new MediaSource();
	videoElement.src = URL.createObjectURL(mediaSource);
	mediaSource.addEventListener('sourceopen', sourceOpen, { once: true });
  
	function sourceOpen() {
	  URL.revokeObjectURL(videoElement.src);
	  const sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp09.00.10.08"');
  
	  // Fetch beginning of the video by setting the Range HTTP request header.
	  fetch(vidClips[0], { headers: { range: 'bytes=0-567139' } })
	  .then(response => response.arrayBuffer())
	  .then(data => {
		sourceBuffer.appendBuffer(data);
		sourceBuffer.addEventListener('updateend', updateEnd, { once: true });
	  });
	}
  
	function updateEnd() {
	  // Video is now ready to play!
	//   const bufferedSeconds = videoElement.buffered.end(0) - videoElement.buffered.start(0);
	//   console.log(`${bufferedSeconds} seconds of video are ready to play.`);
  
	  // Fetch the next segment of video when user starts playing the video.
	  videoElement.addEventListener('playing', fetchNextSegment, { once: true });
	  videoElement.play();
	}
  
	function fetchNextSegment() {
	  fetch(vidClips[1], { headers: { range: 'bytes=567140-1196488' } })
	  .then(response => response.arrayBuffer())
	  .then(data => {
		const sourceBuffer = mediaSource.sourceBuffers[0];
		sourceBuffer.appendBuffer(data);
		// TODO: Fetch further segment and append it.
	  });
	}

})();
