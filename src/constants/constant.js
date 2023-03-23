import { tour1, tour2, tour3, tour4, tour5, tour6 } from "../assets";

const navigationLinks = [
    { name: "Home", route: "#home" },
    { name: "About", route: "#about" },
    { name: "Services", route: "#services" },
    { name: "Tours", route: "#tours" }
];

const services = [
    {
        iconClass: 'fas fa-wallet',
        title: 'Saving Money',
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        iconClass: 'fas fa-tree',
        title: 'Endless Hiking',
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
    {
        iconClass: 'fas fa-socks',
        title: 'Amazing Comfort',
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia."
    },
]

const socialMedia = [
    { id: 'facebook', link: "https://www.facebook.com/Manu.karki555", iconClass: 'fa-facebook' },
    { id: 'twitter', link: 'https://twitter.com/ManishK67188205', iconClass: 'fa-twitter' },
    { id: 'squareSpace', link: 'https://www.squarespace.com/', iconClass: 'fa-squarespace' }
]

const tours = [
    {
        id: 1,
        image: {
            imgPath: tour1,
            date: 'August 26th, 2020'
        },
        title: 'tibet adventure',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'china',
        tourInterval: 6,
        price: 2100
    },
    {
        id: 2,
        image: {
            imgPath: tour2,
            date: 'october 1th, 2020'
        },
        title: 'best of java',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        tourInterval: 11,
        price: 1400
    },
    {
        id: 3,
        image: {
            imgPath: tour3,
            date: 'september 15th, 2020'
        },
        title: 'explore hong kong',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'hong kong',
        tourInterval: 8,
        price: 5000
    },
    {
        id: 4,
        image: {
            imgPath: tour4,
            date: 'December 5th, 2019'
        },
        title: 'Kenya highlights',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'kenya',
        tourInterval: 20,
        price: 3300
    },
    {
        id: 5,
        image: {
            imgPath: tour5,
            date: 'october 8th, 2019'
        },
        title: 'india highlights',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'india',
        tourInterval: 10,
        price: 1000
    },
    {
        id: 6,
        image: {
            imgPath: tour6,
            date: 'september 26th, 2019'
        },
        title: 'safari highlights',
        tourDetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'south africa',
        tourInterval: 15,
        price: 3000
    }
]
export { navigationLinks, services, socialMedia, tours };