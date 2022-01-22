import { Box, Image, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import * as Types from "../common";

interface ProductProps {
  handleRouting: (route: number) => void;
  productId: number;
  product: Types.ProductDetails;
}
const ProductCard: React.FC<ProductProps> = ({
  handleRouting,
  productId,
  product,
}) => {
  return (
    <Box
      maxW={"fit-content"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => handleRouting(productId)}
    >
      <Image src={product.imageUrl} alt={product.imageAlt} />

      <Box p="6">
        <Stat>
          <StatLabel> {product.title}</StatLabel>
          <StatNumber>Rs. {product.formattedPrice}</StatNumber>
        </Stat>
      </Box>
    </Box>
  );
};

export default ProductCard;
