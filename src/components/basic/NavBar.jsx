function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
            <a className="navbar-brand" href={props.links.link0}>{props.items.item0}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-dark" href={props.links.link1}>{props.items.item1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={props.links.link2}>{props.items.item2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={props.links.link3}>{props.items.item3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={props.links.link4}>{props.items.item4}</a>
                    </li>
                </ul>
            </div>
            <button className="btn text-dark btn-outline-success bg-warning my-2 my-sm-0">
            <a href={props.links.link5}>
                {props.items.item5}
            </a>
            </button>
        </nav>
    );
}

export default NavBar;