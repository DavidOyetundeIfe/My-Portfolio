import React from "react"
import Star from "./Star";



export default function Infor() {
        const [name, setName] = React.useState("David Oyetunde");
        const [skill, setSkill] = React.useState("Front-End Dev");
        const [company, setConmpany] = React.useState("Sunny Dev Expo");
        
        const [contact, setContact] = React.useState(
                {
                    first: "dave",
                    lastName: "sunny",
                    phone: 232-232-222,
                    email: "dave@gmail.com",
                    isFavorite: false
                }
            );
      

            
        function toggleFaviourite () {
            setContact( prevContact => {
                return {
                    ...prevContact,
                    isFavorite: !prevContact.isFavorite 
                }
            })
        }

    

    return (
        <div>
        <div className="set">
            <img src="./david.JPG" className="img" alt="profile picure" />
            <h1>{name}</h1>
            <h3>{skill}</h3>
            <h4>{company}</h4>
            <button>Email</button>
            <button>LinkedIn</button>
        </div>
              
              <div> 
                <Star isFilled={contact.isFavorite} handleClick={toggleFaviourite}/>
              </div>
          
          </div>
  
    )
}



