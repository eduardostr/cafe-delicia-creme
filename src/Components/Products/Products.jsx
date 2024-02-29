import Product from './Product';
import styles from './Products.module.scss';

const Products = () => {
  return (
    <section id='products' className={styles.products}>
      <Product
        product='1'
        title='Café delicia tradicional'
        stars='5'
        reviews='16'
        price='20,00'
      />
      <Product
        product='2'
        title='Café delicia cappuccino'
        stars='5'
        reviews='12'
        price='25,00'
      />
      <Product
        product='3'
        title='Café delicia chocolate'
        stars='5'
        reviews='8'
        price='25,00'
      />
      <Product
        product='4'
        title='Café delicia paçoca'
        stars='5'
        reviews='7'
        price='25,00'
      />
    </section>
  );
};

export default Products;
