function VideoStory() {
  return (
    <div className="p-5 ">
      <video
        src="video/story.mp4"
        className="w-full h-full object-cover rounded-lg"
        controls
        autoPlay
        // loop
        muted
      />
      <p>
        Source:
        <a
          href="https://www.instagram.com/reel/C11oadyPOKg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
        >
          @alamandas
        </a>
      </p>
    </div>
  );
}

export default VideoStory;
