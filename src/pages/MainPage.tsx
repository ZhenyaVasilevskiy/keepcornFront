import AboutProduct from "../components/AboutProductSection/AboutProduct";
import AllAssistants from "../components/AllAssistants/AllAssistants";
import Header from "../components/header/Header";
import TopAssistants from "../components/TopAssistantsSection/TopAssistants";

const MainPage = () => {
    return(
        <>
            <Header/>
            <AboutProduct/>
            <TopAssistants/>
            <AllAssistants/>
        </>

    )
    
}

export default MainPage;