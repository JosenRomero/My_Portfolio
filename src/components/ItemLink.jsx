import { Link } from "react-scroll";

const ItemLink = ({ to, children}) => {

  return (
    <li>
      <Link activeClass="active" smooth spy offset={-25} to={to}>
        {children}
      </Link>
    </li>
  )

}

export default ItemLink;