import React from "react";

export default function Star(props) {
    const starColored = "./heart.PNG";
    const starUncolored = "./love.PNG";

    const starIcon = props.isFilled ? starColored : starUncolored;

    return(
       <img src={starIcon} alt="star" width={20} onClick={props.handleClick}/>
    )
}