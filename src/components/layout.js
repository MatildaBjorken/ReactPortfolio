import React from "react"
import Header from "./header"
import Cursor from "./dot"

import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <title>Matilda Björk</title>
      <meta name="description" content="Matilda Björk, creative developer based in Stockholm, Sweden." />
      <Cursor />
      <Header />
      {children}
    </>
  )
}
