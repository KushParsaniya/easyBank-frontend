function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-2">
            <a class="navbar-brand" href="/home">EasyBank</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link text-dark" href="/home">{props.items.item1}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="/notices">{props.items.item2}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="/contact">{props.items.item3}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">{props.items.item4}</a>
                    </li>
                </ul>
            </div>
            <button class="btn text-dark btn-outline-success bg-warning my-2 my-sm-0" type="submit">{props.items.item5}</button>
        </nav>
    );
}

export default NavBar;