import "../sass/main.css"


function RentalTags({tag}) {
    return (
        <div className="rental-tags" key={tag}>
            <p>{tag}</p>
        </div>
    )
}


export default RentalTags