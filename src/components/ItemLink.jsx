import { Nav } from "react-bootstrap"
import { Link } from "react-scroll"

// react-bootstrap needs href to use Navbar collapse
const ItemLink = ({ to, children }) => {
	return (
		<Nav.Item as={"li"}>
			<Nav.Link as={Link} href={to} activeClass="blueActive" smooth spy offset={-25} to={to} delay={0}>
				{children}
			</Nav.Link>
		</Nav.Item>
	)
}

export default ItemLink
