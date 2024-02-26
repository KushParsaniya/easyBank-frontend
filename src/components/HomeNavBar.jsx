import NavBar from "./NavBar";

function HomeNavBar() {
    const itemInfo = {
        item1: "Home",
        item2: "Notices",
        item3: "Contact Us",
        item4: "Sign Up"
    }

    return (

        // <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-2">
        //     <a class="navbar-brand" href="/home">EasyBank</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        //     <div class="collapse navbar-collapse " id="navbarSupportedContent">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item active">
        //                 <a class="nav-link text-dark" href="/home">Home</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link text-dark" href="/notices">Notices</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link text-dark" href="/contact">Contact Us</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link text-dark" href="#">Disabled</a>
        //             </li>
        //         </ul>
        //     </div>
        //     <button class="btn text-dark btn-outline-success bg-warning my-2 my-sm-0" type="submit">Log In</button>
        // </nav>

       

        <NavBar items={itemInfo} />
        
    );
}

export default HomeNavBar;