import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousels from "../../components/carousels/Carousels";
import ProductCard from "../../common/organisms/ProductCard";
import { Grid } from "@chakra-ui/react";
import Footer from "../../components/footer/Footer";
import * as Types from "../../common/common";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleRouting = (routeId: number): void => {
    navigate(`/productDetails/${routeId}`);
  };
  const [products, setProducts] = useState<Types.ProductDetails[]>([
    {
      imageUrl: "",
      imageAlt: "",
      beds: 0,
      baths: 0,
      title: "",
      formattedPrice: "",
      reviewCount: 0,
      rating: 0,
    },
  ]);
  useEffect(() => {
    setProducts([
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title:
          "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
      },
    ]);
  }, []);
  return (
    <>
      <Carousels />
      <Grid templateColumns={"repeat(4,1fr)"} gap="5" m={"5px"}>
        {products &&
          products.map((product, id) => {
            return (
              <ProductCard
                key={id}
                handleRouting={handleRouting}
                productId={id}
                product={product}
              />
            );
          })}
      </Grid>
      <Footer />
    </>
  );
};

export default HomePage;
