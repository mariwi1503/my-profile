function VideoStory() {
  return (
    <div className="mt-10">
      <video
        src="video/story.mp4"
        className="w-full max-h-[510px] object-cover rounded-lg"
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
