import React, { useState, useEffect } from "react"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", moveMouse)
    }
    const removeEventListeners = () => {
      document.removeEventListener("mousemove", moveMouse)
    }
    const moveMouse = el => {
      setPosition({ x: el.clientX, y: el.clientY })
    }
    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <div
      className={"cursor"}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}