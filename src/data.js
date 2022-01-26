
import {
    mdiNodejs, 
    mdiReact, 
    mdiBootstrap, 
    mdiAngular, 
    mdiLanguageTypescript,
    mdiLanguageKotlin 
} from '@mdi/js';

export const projects = [
    {
        image: "images/dailyapp_img.png",
        imageSmall: false,
        title: "Daily App",
        programming_language: [
            [mdiReact, "#61dafb"],
            [mdiNodejs, "#83cd29"],
            [mdiBootstrap, "#5b4282"]
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/DailyApp",
            backend: "https://github.com/JosenRomero/backend-with-nodejs"
        },
        open_project: "https://daily-react-app.herokuapp.com/"
    },
    {
        image: "images/darklydreamingapp_img.png",
        title: "Darkly Dreaming App",
        imageSmall: false,
        programming_language: [
            [mdiAngular, "#c4473a"],
            [mdiNodejs, "#83cd29"],
            [mdiBootstrap, "#5b4282"],
            [mdiLanguageTypescript, "#007acc"]
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/DarklyDreamingApp",
            backend: "https://github.com/JosenRomero/simple-backend"
        },
        open_project: "https://darkly-dreaming-app.vercel.app/notes"
    },
    {
        image: "images/notesapp_img.png",
        title: "Notes App",
        imageSmall: true,
        programming_language: [
            [mdiLanguageKotlin, "#7f6cb1"]
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
            [mdiLanguageKotlin, "#7f6cb1"]
        ],
        view_code: {
            frontend: "https://github.com/JosenRomero/init21MediaPlayer",
            backend: ""
        },
        open_project: ""
    }
];