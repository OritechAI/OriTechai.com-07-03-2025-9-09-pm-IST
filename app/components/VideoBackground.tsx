'use client'

export default function VideoBackground() {
  return (
    <>
      {/* Video Background */}
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        poster="/video-fallback.jpg"
        aria-label="AI consulting and automation technology background"
      >
        <source src="/Robot Website.mp4" type="video/mp4" />
        {/* Fallback image for browsers that don't support video */}
        <img 
          src="/video-fallback.jpg" 
          alt="AI consulting and automation technology background"
          className="video-background object-cover"
        />
      </video>
      
      {/* Overlay for text readability */}
      <div className="video-overlay" />
    </>
  )
}