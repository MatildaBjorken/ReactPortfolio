import React from "react"
import Header from "./header"
import Cursor from "./dot"

import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <title>Matilda Björk</title>
      <Cursor />
      <Header />
      {children}
    </>
  )
}
