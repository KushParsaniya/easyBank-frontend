import NavBar from "../components/NavBar";

function HomeNavBar() {
    const navbarItems = {
        item0: "EasyBank",
        item1: "Home",
        item2: "Notices",
        item3: "Contact Us",
        item4: "Sign Up",
        item5: "Sign In"
    }

    const navbarLinks = {
        link0: "/home",
        link1: "/home",
        link2: "/notices",
        link3: "/contact",
        link4: "/signup",
        link5: "/signin"
    }

    return (
        <NavBar items={navbarItems} links={navbarLinks} />
    );
}

export default HomeNavBar;