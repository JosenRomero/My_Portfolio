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
	javascript: { icon: IconJavascript, name: "Javascript" },
	nodeJS: { icon: IconNodeJS, name: "NodeJS" },
	git: { icon: IconGit, name: "Git" },
	react: { icon: IconReact, name: "React" },
	firebase: { icon: IconFirebase, name: "Firebase" },
	bootstrap: { icon: IconBootstrap, name: "Bootstrap" },
	tailwind: { icon: IconTailwind, name: "Tailwind" },
	kotlin: { icon: IconKotlin, name: "Kotlin" },
	typescript: { icon: IconTypescript, name: "Typescript" },
	mongoDB: { icon: IconMongoDB, name: "MongoDB" },
	jest: { icon: IconJest, name: "Jest" },
}

export const projects = [
	{
		image: "images/easy_tailwindcss_img.webp",
		imageSmall: false,
		title: "Easy Tailwind CSS extension",
		programming_language: [programming_language.typescript],
		view_code: {
			frontend: "https://github.com/JosenRomero/easy-tailwindcss",
			backend: "",
		},
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
		view_code: {
			frontend: "https://github.com/JosenRomero/javascript-is-weird",
			backend: "",
		},
		open_project: "https://javascript-is-weird.onrender.com/",
	},
	{
		image: "images/daily_img.png",
		imageSmall: false,
		title: "Daily",
		programming_language: [
			programming_language.react,
			programming_language.nodeJS,
			programming_language.bootstrap,
			programming_language.mongoDB,
		],
		view_code: {
			frontend: "https://github.com/JosenRomero/Daily",
			backend: "https://github.com/JosenRomero/backend-with-nodejs",
		},
		open_project: "https://daily2022.vercel.app/",
	},
	{
		image: "images/11seconds_img.png",
		title: "11seconds",
		imageSmall: false,
		programming_language: [
			programming_language.react,
			programming_language.bootstrap,
			programming_language.firebase,
		],
		view_code: {
			frontend: "https://github.com/JosenRomero/11seconds",
			backend: "",
		},
		open_project: "https://11seconds.vercel.app/",
	},
	{
		image: "images/noteApp_img.webp",
		title: "Note App",
		imageSmall: false,
		programming_language: [programming_language.kotlin],
		view_code: {
			frontend: "https://github.com/JosenRomero/NoteAndMore",
			backend: "",
		},
		open_project: "",
		download_apk: "apk/notes-and-more-debug.apk",
	},
	{
		image: "images/multiples_Of_three_game.webp",
		title: "Multiples Of Three",
		imageSmall: false,
		programming_language: [programming_language.kotlin],
		view_code: {
			frontend: "https://github.com/JosenRomero/MultiplesOfThree",
			backend: "",
		},
		open_project: "",
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
