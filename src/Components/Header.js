import { useLocation } from "react-router";

const PAGES = {
    "/drugs/search": "Drug Search"
};

const Header = () => {
    const location = useLocation();
    return (
        <header className="w-full flex align-center bg-blue-300 drop-shadow-md h-24 items-center mb-8">
            <h1 className="mr-8 ml-8 text-5xl"> Blink Takehome </h1>
            <h2 className="text-4xl"> { PAGES[location.pathname] || "Drug Details" } </h2>
        </header>
    );
}

export default Header;
