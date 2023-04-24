function MeetupItem(props) {
    return <li>
        <div>
            <img src={props.image} alt={props.title} />
        </div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div>
            <button>To Favorites</button>
        </div>
    </li>
}

export default MeetupItem;