import './css.css'
import SearchCategory from "./Template/SearchCategory";
import Header from "../Components/Header";
import Footer from '../Components/Footer';

export default function HomePage() {

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <SearchCategory />
            <Footer />
        </div>
    )
}