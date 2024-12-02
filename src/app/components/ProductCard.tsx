import Image from 'next/image'

type Product = {
  title: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return (
    <div className="w-34">
      <Image
      src={'/card-image.png'}
      width={400}
      height={250}
      alt={product.title}
      />
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductCard;