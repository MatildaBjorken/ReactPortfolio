import React, { useEffect, useRef, useState } from "react"
import cn from "classnames"
import useOnScreen from "./useOnScreen"
import "./gallery.scss"
import { points, text, margins } from "./data"

export default function GalleryItem({ src, index, columnOffset }) {
  const ref = useRef(null)
  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])
  const values = points[index]

  const test = margins[index]
  const galleryText = text[index]

  if (!values) return null
  const [top, left] = test
  const [row, column, spanRow, spanColumn] = values

  const scrollIndex = () => {
    if (index === 1) return -1
    if (index === 4) return -1
    if (index === 0) return 0
    if (index === 3) return 0

    return 1
  }
  return (
    <div
      className="gallery-item"
      data-scroll
      data-scroll-speed={scrollIndex()}
      // data-scroll-direction="vertical"
      ref={ref}
      style={{
        gridArea: `${row} / ${column + columnOffset} `,
        marginTop: `${top}rem `,
        marginLeft: `${left}rem `,
      }}
    >
      <div className={cn("gallery-item-image", { reveal: reveal })}>
        <img src={src} alt={src} />
      </div>

      <div
        className="behind-text fill gallery-txt"
        data-scroll
        data-scroll-speed
        style={{
          marginLeft: `${left}rem `,
        }}
      >
        <p>{galleryText}</p>
      </div>

      <div
        className="behind-text outline gallery-txt"
        data-scroll
        data-scroll-speed
        style={{
          marginLeft: `${left}rem `,
        }}
      >
        <p>{galleryText}</p>
      </div>
    </div>
  )
}
