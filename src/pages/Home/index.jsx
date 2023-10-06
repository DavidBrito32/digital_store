import BannerRodape from "../../components/BannerRodape";
import Caroussel from "../../components/Caroussel";
import Colecoes from "../../components/Colecoes";
import ProductsHome from "../../components/ProductsHome";

const HomePage = () => {

    return (
        <>
            <Caroussel />
            <Colecoes />
            <ProductsHome />
            <BannerRodape />
        </>
    )
}

export default HomePage;