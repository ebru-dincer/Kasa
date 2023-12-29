import "../sass/main.css"
import arrowTop from '../assets/arrow_top.png'
import { useState } from "react"



// fonction qui marche 
// function Collapse() {
//     return (
//         <div>
//             {textContentAbout.map((item) => (
//                 <DropdownItem title={item.title}>
//                     <DropdownText content={item.content}/>
//                 </DropdownItem>
//             ))}
//         </div>
//     )
// }


function Dropdown(props) {
    return (
        <div>
                <DropdownItem title={props.title}>
                    <DropdownText content={props.content} />
                </DropdownItem>
        </div>
    )
}


// function Collapse() {
//     return (
//     <div className="collapse">
//         <DropdownItem title="Fiabilité">
//             <DropdownText content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
//         </DropdownItem>

//         <DropdownItem title="Respect">
//             <DropdownText content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
//         </DropdownItem>

//         <DropdownItem title="Service">
//             <DropdownText content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
//         </DropdownItem>

//         <DropdownItem title="Sécurité">
//             <DropdownText content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
//         </DropdownItem>


//     </div>
//     )
// }

function DropdownItem(props) {

    const [open, setOpen] = useState(false);

    const [rotateChevron, setRotateChevron] = useState(false);

    const handleRotate = () => setRotateChevron(!rotateChevron);

    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    function dropdownEvent() {
        setOpen(!open);
        handleRotate();
    }

    return (
        
        <div className="dropdown-item">
            <div className="dropdown-title"> 
                <p>{props.title}</p>
                <img src={arrowTop} alt='flèche vers le haut' className='dropdown-title__image' style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={dropdownEvent}/>      
            </div>

            {open && props.children}

        </div>

    )
}


function DropdownText(props) {
    return (     
        <div className="dropdown-txt">
            <p>{props.content}</p>
        </div>
    )
}

export default Dropdown