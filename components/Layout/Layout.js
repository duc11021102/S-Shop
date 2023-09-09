import Header from "./Header";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return <div>
        <Header />
        <MainNavigation />
        {props.children}
    </div>
}
export default Layout;