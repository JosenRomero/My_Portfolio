import { Button } from "react-bootstrap"

import { IconGithub, IconEmail, IconLinkedin } from "../Icons/Icons"

const SocialMedia = () => {
	return (
		<div className="socialMedia">
			<Button
				href="https://github.com/JosenRomero"
				className="m-1"
				variant="outline-secondary"
				target="_blank"
			>
				<IconGithub />
			</Button>
			<Button
				href="mailto:romerojosemanuel@hotmail.com"
				className="m-1"
				variant="outline-secondary"
			>
				<IconEmail />
			</Button>
			<Button
				href="https://www.linkedin.com/in/romerojosemanuel/"
				className="m-1"
				variant="outline-secondary"
				target="_blank"
			>
				<IconLinkedin />
			</Button>
		</div>
	)
}

export default SocialMedia
