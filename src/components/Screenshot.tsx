import React from 'react'

type ScreenshotProps = {
  src: string
  alt: string
}

const screenshot = (props: ScreenshotProps) => (
  <div className="w-100 aspect-ratio aspect-ratio--16x9 bg-light-gray black-50">
    <img className="aspect-ratio--object" src={props.src} alt={props.alt} />
  </div>
)

export default screenshot
