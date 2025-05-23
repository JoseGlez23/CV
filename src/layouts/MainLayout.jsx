import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BreadcrumbPage from "../pages/BreadcrumbPage";

const MainLayout = ({ Children}) => (
    <div className="layout">
        <Header />
        <Navbar />
        <div className="layout-body">
            <Sidebar />
            <main className="main-content">{Children}</main>
            <BreadcrumbPage />
        </div>
        
        <Footer />
    </div>
);

export default MainLayout;
