import "../sass/main.css"

/**
 * 
 * @param {string} tag
 * @returns <RentalTags tag={tag} key={tag} />
 */
function RentalTags({tag}) {
    return (
        <div className="rental-tags" key={tag}>
            <p>{tag}</p>
        </div>
    )
}


export default RentalTags