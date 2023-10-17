import Footer from "../../components/Footer";
import Hero from "./Hero";
import MagSect from "./MagSect";
import Members from "./Members";
import QuickLinkSect from "./QuickLinkSect";

const BlogPage = () => {
    return ( 
        <>

        <main>

            <Hero />
            <QuickLinkSect />
            <MagSect />
            <Members />

        </main>
        <Footer />
        </>
     );
}
 
export default BlogPage;