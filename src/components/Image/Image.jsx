import React from 'react'

export default function Image({url,height,width}) {
  return (
    <>
    <img src={url} alt="No image to show" height={height} width={width} />
    </>
  )
}
