import NavBar from "../components/NavBar"
import GridDisplay from "../components/GridDisplay";
// import New from "../components/New";
import { TabsProvider } from "../context/tabs";
// import ThemesContext from "../context/themes";
// import { useContext } from "react";


function HomePage() {
    // const [tabSelected, setTabSelected] = useState("all");
    // const {isDarkEnabled} = useContext(ThemesContext);
    
    return (
        <TabsProvider>
            <NavBar />
            <div className="w-full flex justify-center pb-[80px] overflow-hidden">
                <GridDisplay />
            </div>
        </TabsProvider>
    );
}

export default HomePage;