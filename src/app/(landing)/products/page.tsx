import ProductCard from '@/app/components/ProductCard';

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-3">
      <ProductCard product={{ title: 'Product 1', image: '/card-image.png' }} />
    </div>
  );
};

export default ProductsPage;
