import { Nav } from "react-bootstrap"
import { Link } from "react-scroll"

const ItemLink = ({ to, spy, children }) => {
	return (
		<Nav.Item as={"li"}>
			<Nav.Link as={Link} active={false} href={to} activeClass={ spy ? "blueActive" : "" } smooth={true} spy={spy} offset={-25} to={to} delay={0}>
				{children}
			</Nav.Link>
		</Nav.Item>
	)
}

export default ItemLink
