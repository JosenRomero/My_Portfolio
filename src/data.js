import {
	IconHTML,
	IconCSS3,
	IconJavascript,
	IconNodeJS,
	IconGit,
	IconReact,
	IconFirebase,
	IconBootstrap,
	IconTailwind,
	IconKotlin,
	IconTypescript,
	IconMongoDB,
	IconJest,
} from "./Icons/Icons"

const programming_language = {
	html5: { icon: IconHTML, name: "HTML5" },
	css3: { icon: IconCSS3, name: "CSS3" },
	javascript: { icon: IconJavascript, name: "JavaScript" },
	nodeJS: { icon: IconNodeJS, name: "Node.js" },
	git: { icon: IconGit, name: "Git" },
	react: { icon: IconReact, name: "React.js" },
	firebase: { icon: IconFirebase, name: "Firebase" },
	bootstrap: { icon: IconBootstrap, name: "Bootstrap" },
	tailwind: { icon: IconTailwind, name: "Tailwind CSS" },
	kotlin: { icon: IconKotlin, name: "Kotlin" },
	typescript: { icon: IconTypescript, name: "TypeScript" },
	mongoDB: { icon: IconMongoDB, name: "MongoDB" },
	jest: { icon: IconJest, name: "Jest" },
}

export const projects = [
	{
		image: "images/easy_tailwindcss_img.webp",
		imageSmall: false,
		title: "Easy Tailwind CSS extension",
		programming_language: [programming_language.typescript],
		view_code: "https://github.com/JosenRomero/easy-tailwindcss",
		open_project: "https://marketplace.visualstudio.com/items?itemName=josenromero.easy-tailwindcss",
	},
	{
		image: "images/blogJavascriptIsWeird_img.webp",
		imageSmall: false,
		title: "Blog: Javascript is weird",
		programming_language: [
			programming_language.typescript,
			programming_language.tailwind,
		],
		view_code: "https://github.com/JosenRomero/javascript-is-weird",
		open_project: "https://javascript-is-weird.onrender.com/",
	},
	{
		image: "images/urusai_img.webp",
		imageSmall: false,
		title: "Urusai",
		programming_language: [
			programming_language.react,
			programming_language.tailwind,
			programming_language.nodeJS,
			programming_language.mongoDB,
		],
		view_code: "https://github.com/JosenRomero/Urusai",
		open_project: "https://urusai.vercel.app/",
	},
	{
		image: "images/next_letter_puzzle_img.webp",
		title: "Next Letter Puzzle",
		imageSmall: false,
		programming_language: [
			programming_language.react,
			programming_language.tailwind
		],
		view_code: "https://github.com/JosenRomero/my-next-letter-puzzle",
		open_project: "https://next-letter-puzzle.onrender.com/",
	},
	{
		image: "images/noteApp_img.webp",
		title: "Note App",
		imageSmall: false,
		programming_language: [programming_language.kotlin],
		view_code: "https://github.com/JosenRomero/NoteAndMore",
		download_apk: "apk/notes-and-more-debug.apk",
	},
	{
		image: "images/multiples_Of_three_game.webp",
		title: "Multiples Of Three",
		imageSmall: false,
		programming_language: [programming_language.kotlin],
		view_code: "https://github.com/JosenRomero/MultiplesOfThree",
		download_apk: "apk/multiples_Of_three_release.apk",
	},
]

export const skills = [
	programming_language.html5,
	programming_language.css3,
	programming_language.javascript,
	programming_language.nodeJS,
	programming_language.git,
	programming_language.react,
	programming_language.firebase,
	programming_language.bootstrap,
	programming_language.tailwind,
	programming_language.kotlin,
	programming_language.typescript,
	programming_language.mongoDB,
	programming_language.jest,
]

export const contributions = [
	{
		title: "La velada web oficial",
		link: "https://github.com/midudev/la-velada-web-oficial",
		proyects: ["0", "1", "2"]
	},
	{
		title: "http-sentinel",
		link: "https://github.com/JorgeRosbel/http-sentinel",
		proyects: ["3"]
	},
	{
		title: "Falso",
		link: "https://github.com/ngneat/falso",
		proyects: ["4"]
	}
]
