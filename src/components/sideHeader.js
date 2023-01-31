import React from "react"
import "./sideHeader.scss"

const addresses = [
  {
    town: "internago",
    address: "Link",
  },
  {
    town: "Ruth",
    address: "Link",
  },
]
export default function Footer() {
  return (
    <div
      className="footer"
      data-scroll
      data-scroll-speed={-7}
      style={{
        backgroundUrl: `url(https://images.unsplash.com/photo-1473433025194-381637d4c01f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80)`,
      }}
    >
      <div className="contact-addresses">
        {addresses.map(info => (
          <div key={info.town}>
            <h1>{info.town}</h1>
            <div>
              {info.address.split(",").map(element => (
                <p key={element}>{element}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
