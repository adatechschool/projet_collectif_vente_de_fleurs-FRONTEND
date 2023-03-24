import { Link } from "react-router-dom";
import BasketIcon from "../../../img/basket.png";

const BasketButton = () => {
    return (
        <Link to="/panier">
        <li className="py-2 px-4">
          <img
            src={BasketIcon}
            className="h-10 w-10 rounded hover:shadow-xl"
            alt="login"
          />
        </li>
      </Link>
    )
}

export default BasketButton;