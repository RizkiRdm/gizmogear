import CarouselHero from './CarouselHero'
import Slider from "react-slick";

// setting carousel
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


import image from "../../../public/wallhaven-dp3lrj.png"

const items = [
    {
        slug: "product-1",
        title: "Product 1",
        src: image,
        price: 50,
    },
]


const carousel: React.FC = () => {
    return (
        <>
            <Slider {...settings}>
                {items.map((product, index) => (
                    <CarouselHero
                        key={index}
                        title={product.title}
                        slug={product.slug}
                        price={product.price}
                        src={product.src}
                    />
                ))}
            </Slider>
        </>
    )
}

export default carousel