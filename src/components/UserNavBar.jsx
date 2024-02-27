import NavBar from "./basic/NavBar";

function UserNavBar() {

    const navbarItems = {
        item0: "KP",
        item1: "Account Info.",
        item2: "Balance/History",
        item3: "Loans",
        item4: "Cards",
        item5: "Log Out"
    }

    const navbarLinks = {
        link0: "/user-page",
        link1: "account-info",
        link2: "balance",
        link3: "loans",
        link4: "cards",
        link5: "logout"
    }

    return (
        <NavBar items={navbarItems} links={navbarLinks} />
    );

}

export default UserNavBar;