import React from 'react'

const Vibe = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center px-6 py-12 '>
      <div className='max-w-3xl w-full space-y-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 font-outfit tracking-tight'>
            Vibe with Me?
          </h1>
        </div>
        
        <div className=' rounded-lg p-1 '>
<iframe 
  data-testid="embed-iframe" 
  style={{ borderRadius: '12px' }}
  src="https://open.spotify.com/embed/playlist/6WiH6cEjtId18uBlzpojlp?utm_source=generator" 
  width="100%" 
  height="352" 
  frameBorder="0" 
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy"
  title="Spotify Playlist"
/>
        </div>
      </div>
    </div>
  )
}

export default Vibe