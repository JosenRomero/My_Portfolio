
import {
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiLanguageJavascript,
    mdiNodejs, 
    mdiGit,
    mdiWebpack,
    // Express
    // mongoDB
    mdiReact,
    // Redux
    mdiAngular, 
    mdiFirebase, 
    mdiBootstrap,
    mdiLanguageKotlin,
    mdiLanguageTypescript
} from '@mdi/js';

const programming_language = {
    html5: [mdiLanguageHtml5, "#e44d26", "HTML5"],
    css3: [mdiLanguageCss3, "#1572b6", "CSS3"],
    javascript: [mdiLanguageJavascript, "#f0db4f", "Javascript"],
    nodeJS: [mdiNodejs, "#83cd29" , "NodeJS"],
    git: [mdiGit, "#f34f29", "Git"],
    webpack: [mdiWebpack, "#1c78c0", "Webpack"],
    react: [mdiReact, "#61dafb", "React"],
    angular: [mdiAngular, "#c4473a", "Angular"],
    firebase: [mdiFirebase, "#ffca2a", "Firebase"],
    bootstrap: [mdiBootstrap, "#5b4282", "Bootstrap"],
    kotlin: [mdiLanguageKotlin, "#7f6cb1", "Kotlin"],
    typescript: [mdiLanguageTypescript, "#007acc", "Typescript"]
}

export const projects = [
    {
        image: "images/daily_img.png",
        imageSmall: false,
        title: "Daily",
        programming_language: [
            programming_language.react,
            programming_language.nodeJS,
            programming_language.bootstrap
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/Daily",
            backend: "https://github.com/JosenRomero/backend-with-nodejs"
        },
        open_project: "https://daily-react-app.herokuapp.com/"
    },
    {
        image: "images/11seconds_img.png",
        title: "11seconds",
        imageSmall: false,
        programming_language: [
            programming_language.react,
            programming_language.bootstrap,
            programming_language.firebase
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/11seconds",
            backend: ""
        },
        open_project: "https://11seconds.vercel.app/"
    },
    {
        image: "images/notesapp_img.png",
        title: "Notes App",
        imageSmall: true,
        programming_language: [
            programming_language.kotlin
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/NotesApp",
            backend: ""
        },
        open_project: ""
    },
    {
        image: "images/musicplayerapp_img.png",
        title: "Media Player App",
        imageSmall: true,
        programming_language: [
            programming_language.kotlin
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/init21MediaPlayer",
            backend: ""
        },
        open_project: ""
    }
];

export const skills = [
    programming_language.html5,
    programming_language.css3,
    programming_language.javascript,
    programming_language.nodeJS,
    programming_language.git,
    programming_language.webpack,
    programming_language.react,
    programming_language.firebase,
    programming_language.bootstrap,
    programming_language.kotlin,
    programming_language.typescript
];