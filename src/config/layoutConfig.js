// Define the layout for the grid items
// const layout = [
//     { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
//     { i: 'toggleBtn', x: 2, y: 0, w: 1, h: 2 },
//     { i: 'portrait1', x: 3, y: 0, w: 1, h: 4 },
//     { i: 'map', x: 0, y: 0, w: 1, h: 2 },
//     { i: 'linkedIn', x: 1, y: 0, w: 1, h: 2 },
//     { i: 'portrait2', x: 2, y: 0, w: 1, h: 4 },
//     { i: 'about', x: 0, y: 2, w: 2, h: 2 },
//     { i: 'misc', x: 3, y: 0, w: 1, h: 2 },
//     { i: 'landscape', x: 0, y: 3, w: 2, h: 2 },
//     { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
// ];

export const gridLayouts = {
    all: {
        lg: [
            { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
            { i: 'map', x: 2, y: 0, w: 1, h: 2 },
            { i: 'portrait1', x: 3, y: 0, w: 1, h: 4 },
            { i: 'misc', x: 0, y: 1, w: 1, h: 2 },
            { i: 'linkedIn', x: 1, y: 0, w: 1, h: 2 },
            { i: 'portrait2', x: 2, y: 0, w: 1, h: 4 },
            { i: 'about', x: 0, y: 2, w: 2, h: 2 },
            { i: 'toggleBtn', x: 3, y: 0, w: 1, h: 2 },
            { i: 'landscape', x: 0, y: 3, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
        ],
        md: [
            { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
            { i: 'map', x: 2, y: 0, w: 1, h: 1 },
            { i: 'portrait1', x: 3, y: 0, w: 1, h: 2 },
            { i: 'misc', x: 0, y: 2, w: 2, h: 1 },
            { i: 'portrait2', x: 2, y: 1, w: 1, h: 2 },
            { i: 'toggleBtn', x: 3, y: 2, w: 1, h: 1 },
            { i: 'about', x: 0, y: 3, w: 2, h: 2 },
            { i: 'landscape', x: 2, y: 3, w: 2, h: 1 },
            { i: 'linkedIn', x: 1, y: 5, w: 1, h: 1 },
            { i: 'contact', x: 2, y: 3, w: 2, h: 2 },

        ],
        sm: [
            { i: 'intro', x: 0, y: 0, w: 4, h: 2 },
            { i: 'map', x: 0, y: 2, w: 4, h: 1 },
            { i: 'linkedIn', x: 0, y: 3, w: 2, h: 1 },
            { i: 'portrait1', x: 2, y: 3, w: 2, h: 2 },
            { i: 'portrait2', x: 0, y: 4, w: 2, h: 2 },
            { i: 'toggleBtn', x: 2, y: 5, w: 2, h: 1 },
            { i: 'misc', x: 0, y: 6, w: 4, h: 2 },
            { i: 'about', x: 0, y: 8, w: 4, h: 2 },
            { i: 'landscape', x: 0, y: 10, w: 4, h: 1 },
            { i: 'contact', x: 0, y: 11, w: 4, h: 2 },

        ],
    },

    about: {
        lg: [ //layout-about
            { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
            { i: 'map', x: 2, y: 0, w: 1, h: 2 },
            { i: 'linkedIn', x: 3, y: 0, w: 1, h: 2 },
            { i: 'misc', x: 0, y: 1, w: 1, h: 2 },
            { i: 'toggleBtn', x: 1, y: 1, w: 1, h: 2 },
            { i: 'portrait1', x: 3, y: 1, w: 1, h: 4 },
            { i: 'portrait2', x: 2, y: 0, w: 1, h: 4 },
            { i: 'about', x: 0, y: 2, w: 2, h: 2 },
            { i: 'landscape', x: 0, y: 3, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
        ],
        md: [
            { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
            { i: 'map', x: 2, y: 0, w: 1, h: 1 },
            { i: 'linkedIn', x: 3, y: 0, w: 1, h: 1 },
            { i: 'misc', x: 0, y: 2, w: 2, h: 1 },
            { i: 'portrait1', x: 3, y: 1, w: 1, h: 2 },
            { i: 'portrait2', x: 2, y: 1, w: 1, h: 2 },
            { i: 'about', x: 0, y: 3, w: 2, h: 2 },
            { i: 'landscape', x: 2, y: 3, w: 2, h: 1 },
            { i: 'contact', x: 2, y: 4, w: 2, h: 2 },
            { i: 'toggleBtn', x: 1, y: 5, w: 1, h: 1 },

        ],
        sm: [
            { i: 'map', x: 0, y: 0, w: 4, h: 1 },
            { i: 'intro', x: 0, y: 1, w: 4, h: 2 },
            { i: 'linkedIn', x: 0, y: 3, w: 2, h: 1 },
            { i: 'portrait1', x: 2, y: 3, w: 2, h: 2 },
            { i: 'portrait2', x: 0, y: 4, w: 2, h: 2 },
            { i: 'toggleBtn', x: 2, y: 5, w: 2, h: 1 },
            { i: 'misc', x: 0, y: 6, w: 4, h: 2 },
            { i: 'about', x: 0, y: 8, w: 4, h: 2 },
            { i: 'landscape', x: 0, y: 10, w: 4, h: 1 },
            { i: 'contact', x: 0, y: 11, w: 4, h: 2 },

        ],
    },

    projects: {
        lg: [ 
            { i: 'landscape', x: 0, y: 0, w: 2, h: 2 },
            { i: 'portrait2', x: 2, y: 0, w: 1, h: 4 },
            { i: 'portrait1', x: 3, y: 0, w: 1, h: 4 },
            { i: 'intro', x: 0, y: 1, w: 2, h: 2 },
            { i: 'misc', x: 0, y: 2, w: 1, h: 2 },
            { i: 'linkedIn', x: 1, y: 2, w: 1, h: 2 },
            { i: 'map', x: 2, y: 2, w: 1, h: 2 },
            { i: 'toggleBtn', x: 3, y: 2, w: 1, h: 2 },
            { i: 'about', x: 0, y: 3, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
        ],
        md: [
            { i: 'landscape', x: 0, y: 0, w: 2, h: 1 },
            { i: 'portrait1', x: 2, y: 0, w: 1, h: 2 },
            { i: 'portrait2', x: 3, y: 0, w: 1, h: 2 },
            { i: 'intro', x: 0, y: 1, w: 2, h: 2 },
            { i: 'misc', x: 2, y: 2, w: 2, h: 1 },
            { i: 'map', x: 0, y: 3, w: 1, h: 1 },
            { i: 'linkedIn', x: 1, y: 3, w: 1, h: 1 },
            { i: 'about', x: 0, y: 4, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 3, w: 2, h: 2 },
            { i: 'toggleBtn', x: 2, y: 5, w: 1, h: 1 },

        ],
        sm: [
            { i: 'portrait2', x: 0, y: 0, w: 2, h: 2 },
            { i: 'portrait1', x: 2, y: 0, w: 2, h: 2 },
            { i: 'landscape', x: 0, y: 2, w: 4, h: 1 },
            { i: 'intro', x: 0, y: 3, w: 4, h: 2 },
            { i: 'map', x: 0, y: 5, w: 4, h: 1 },
            { i: 'toggleBtn', x: 2, y: 6, w: 2, h: 1 },
            { i: 'linkedIn', x: 0, y: 6, w: 2, h: 1 },
            { i: 'misc', x: 0, y: 7, w: 4, h: 2 },
            { i: 'about', x: 0, y: 9, w: 4, h: 2 },
            { i: 'contact', x: 0, y: 11, w: 4, h: 2 },

        ],
    },

    media: {
        lg: [ // layout-media
            { i: 'about', x: 0, y: 0, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 0, w: 2, h: 2 },
            { i: 'misc', x: 0, y: 1, w: 1, h: 2 },
            { i: 'linkedIn', x: 1, y: 0, w: 1, h: 2 },
            { i: 'portrait1', x: 3, y: 1, w: 1, h: 4 },
            { i: 'portrait2', x: 2, y: 1, w: 1, h: 4 },
            { i: 'landscape', x: 0, y: 2, w: 2, h: 2 },
            { i: 'intro', x: 0, y: 3, w: 2, h: 2 },
            { i: 'toggleBtn', x: 2, y: 3, w: 1, h: 2 },
            { i: 'map', x: 3, y: 3, w: 1, h: 2 },
        ],
        md: [
            { i: 'about', x: 0, y: 0, w: 2, h: 2 },
            { i: 'contact', x: 2, y: 0, w: 2, h: 2 },
            { i: 'misc', x: 0, y: 2, w: 2, h: 1 },
            { i: 'map', x: 2, y: 2, w: 1, h: 1 },
            { i: 'portrait1', x: 3, y: 2, w: 1, h: 2 },
            { i: 'intro', x: 0, y: 3, w: 2, h: 2 },
            { i: 'portrait2', x: 2, y: 3, w: 1, h: 2 },
            { i: 'toggleBtn', x: 3, y: 4, w: 1, h: 1 },
            { i: 'landscape', x: 0, y: 5, w: 2, h: 1 },
            { i: 'linkedIn', x: 2, y: 5, w: 1, h: 1 },

        ],
        sm: [
            { i: 'misc', x: 0, y: 0, w: 4, h: 2 },
            { i: 'about', x: 0, y: 2, w: 4, h: 2 },
            { i: 'contact', x: 0, y: 4, w: 4, h: 2 },
            { i: 'map', x: 0, y: 6, w: 4, h: 1 },
            { i: 'linkedIn', x: 0, y: 7, w: 2, h: 1 },
            { i: 'portrait1', x: 2, y: 7, w: 2, h: 2 },
            { i: 'portrait2', x: 0, y: 8, w: 2, h: 2 },
            { i: 'toggleBtn', x: 2, y: 9, w: 2, h: 1 },
            { i: 'intro', x: 0, y: 10, w: 4, h: 2 },
            { i: 'landscape', x: 0, y: 11, w: 4, h: 1 },

        ],
    },
};


export const highlightItem = {
    all: {
        intro: true,
        toggleBtn: true,
        portrait1: true,
        map: true,
        linkedIn: true,
        portrait2: true,
        about: true,
        misc: true,
        landscape: true,
        contact: true,
    },
    about: {
        intro: true,
        map: true,
        linkedIn: true,
    },
    projects: {
        portrait1: true,
        portrait2: true,
        landscape: true,
    },
    media: {
        about: true,
        contact: true,
        misc: true,
    },
}

// useGSAP(() => {
//   const tl = gsap.timeline();

//   tl
//     .to("react-grid-item", {
//       transition: "none",
//       delay: 1,
//     })
//     .fromTo(".layout", {
//       y: 15,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       duration: 0.8,
//       // ease: "power4.out"
//     },"<")
// }, [])