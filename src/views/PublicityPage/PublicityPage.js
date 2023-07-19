import Footer from "../../components/Footer";
import MagaSect from "../Homepage/MagLinkSect";
import Hero from "./Hero";
import MagSect from "./MagSect";
import QuickLinkSect from "./QuickLinkSect";

const BlogPage = () => {
    return ( 
        <>

        <main>

            <Hero />
            <QuickLinkSect />
            <MagSect />

        </main>
        <Footer />
        </>
     );
}
 
export default BlogPage;