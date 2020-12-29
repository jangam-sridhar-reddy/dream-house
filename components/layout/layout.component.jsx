
import Navbar from "../navbar/navbar.components";
import Footer from "../footer/footer.components";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}

export default Layout;