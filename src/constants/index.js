const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "note",
        name: "note",
        icon: "note.png",
        canOpen: true,
        link: "https://typing-game-eosin-theta.vercel.app/",
    },
    {
        id: "calculator",
        name: "calculator",
        icon: "calculator.png",
        canOpen: true,
    },
    {
        id: "typing",
        name: "Typing", // was "Finder"
        icon: "Typing.png",
        canOpen: true,
        link: "https://typing-game-eosin-theta.vercel.app/",
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "tracker",
        name: "tracker",
        icon: "tracker.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
    {
        id: "news",
        name: "News",
        icon: "news.png",
        canOpen: true,
        link: "https://rad-faloodeh-91eaca.netlify.app/",
    },
    {
        id: "currency",
        name: "currency", // was "Safari"
        icon: "pngegg.png",
        canOpen: true,
        link: "https://nh-bappy.github.io/currency-converter/",
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "Understanding the Project: What It Is, Why It Matters, and How You Can Contribute to Make a Real Difference",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "If you would like to, you can contribute to our website and be part of our journey. Your ideas, feedback, and code can help us grow, improve, and create something even better together. Join us in building a collaborative and innovative platform!",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "This project is available on GitHub, and we welcome contributions from everyone.You can explore the code, suggest improvements, or add new features to help us grow.Check it out and contribute here: https://github.com/NH-Bappy",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub" , "Vercel", "Netlify"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/shadman2503",
    },
    {
        id: 2,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/NH-Bappy",
    },
    // {
    //     id: 2,
    //     text: "Platform",
    //     icon: "/icons/atom.svg",
    //     bg: "#4bcb63",
    //     link: "https://jsmastery.com/",
    // },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/shadman_2503",
    },
    {
        id: 4,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/Naimul22Bappy",
    },
    {
        id: 5,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/shadman-shoumik-96846829b/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "../../public/images/715gsyCwlRL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 2,
        img: "../../public/images/Our+Top+10+Favorite+Books+About+International+History+and+Culture.webp",
    },
    {
        id: 3,
        img: "../../public/images/bangla-book.jpg",
    },
    {
        id: 4,
        img: "../../public/images/1734305471900.png",
    },
    {
        id: 5,
        img: "../../public/images/1682684666671.png",
    },
    {
        id: 6,
        img: "../../public/images/images (1).jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Website Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Project.information",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This is a learning project recreated while following the course Modern HTML & CSS From the Beginning by Brad Traversy.This is a personal portfolio website built using the concept of Sass(Syntactically Awesome Stylesheets) to organize and manage CSS efficiently.The site showcases personal branding, UI / UX skills, and web development projects This portfolio website is designed to present personal skills and work professionally. It uses Sass to make CSS modular, maintainable, and scalable. Sections included in the website: Hero / introduction Skills & specialties Creative process Metrics(Clients, Projects, Hours, Awards)Footer & contact information.",
                    ],
                },
                {
                    id: 2,
                    name: "shadman.com",
                    icon: "/images/portfolio.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shadman-sass.netlify.app/",
                    position: "top-10 right-20",
                },
                // {
                //     id: 4,
                //     name: "portfolio.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 right-80",
                //     imageUrl: "/images/project-1.png",
                // },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "StreamSphere",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Project.information",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A Vanilla JS web app to browse current movies and TV shows — built while following the Modern JavaScript From The Beginning 2.0 course by Brad Traversy.This is a learning-project clone of the original Flixx App. The app fetches data from The Movie Database (TMDB) API v3 and displays: Popular movies and TV shows Detailed info pages(movie or TV show) Search functionality with pagination for movies / shows A slider of currently- playing movies(powered by Swiper) It’s meant as a hands - on practice project to explore vanilla JS, DOM manipulation, asynchronous requests, and working with external APIs.",
                    ],
                },
                {
                    id: 2,
                    name: "movieflixx.com",
                    icon: "../../public/images/streaming.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shadmanmovieflixx.netlify.app/",
                    position: "top-20 left-20",
                },
                // {
                //     id: 4,
                //     name: "ai-resume-analyzer.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 left-80",
                //     imageUrl: "/images/project-2.png",
                // },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 left-5",
                // },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "TripTrek",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Project.information",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                        "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "TripTrek.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://amazing-kangaroo-5b2558.netlify.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "travel app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "../../public/images/travel.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About us",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "bappy.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "../../public/images/B.jpg",
        },
        {
            id: 2,
            name: "shadman.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "../../public/images/sh.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-us.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "The Developer Behind the Project",
            image: "../../public/images/team.jpg",
            description: [
                "We are a small team of passionate developers 😊 stepping into this industry with excitement and determination 😄. Although we are new to this field 🙂, we are fully committed to learning, growing, and improving every day 😌. This is our very first project as a team 😃, and we have given our best effort to make it meaningful and impactful 😇.We are looking forward to gaining more experience and building even better projects in the future 🤗",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },

    currency: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    calculator: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    note: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    tracker: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    news: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };