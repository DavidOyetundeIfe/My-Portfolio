import React from "react"

export default function About(){
    const [about, setAbout] = React.useState("David Oyetunde is a 22 year old CEO and founder of the Sunny Dev Expo. He is know for is excemptional contribution to the tech world in africa and beyond.")

    return(
        <div>
            <h2 className="heading">About</h2>
            <h3>{about}</h3>
        </div>
    )
}