import PropTypes from "prop-types";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 20,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.8,
    },
  },
};

const Specials = (props) => {
  return (
    <div>
      <motion.section className="card" variants={cardVariants}>
        <img
          src={`./imagesInPublic/${props.img}`}
          alt={`${props.menu} Image`}
        />
        <div>
          <div className="menu-price">
            <h3>{props.menu}</h3>
            <span className="price">{props.price}</span>
          </div>
          <p className="description">{props.description}</p>

          <a href="/" className="order-delivery">
            <span className="order-button">{props.order}</span>
            <img
              className="delivery"
              src={`./imagesInPublic/${props.deliveryLogo}`}
              alt={`${props.menu} Image`}
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

Specials.propTypes = {
  img: PropTypes.string.isRequired,
  menu: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  deliveryLogo: PropTypes.string.isRequired,
};

export default Specials;
