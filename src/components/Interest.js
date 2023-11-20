import React from "react"

export default function Interest() {
    const [interest, setInterest] = React.useState("Sunny Dev Expo has contributed to the tech front-end industry by building apps that help to solve major problems which make the interest of David Oyetundeto be solving of major problems.")

    return (
        <div>
            <h2 className="heading">Interest</h2>
            <h3>{interest}</h3>
        </div>
    )
}