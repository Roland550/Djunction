import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import ProductCard from './ProductCard';
import Footer from '../footer/Footer';

export default function Card() {
  return (
   <>
   <Navbar/>
   <ProductCard/>
   <Footer/>
   </>
  );
}

Card.propTypes = {
  children: PropTypes.node, // Validates that `children` is any renderable node and required
};