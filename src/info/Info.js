import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(150, 180, 250)", "rgb(153,184,255)"]; 
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ignacio",
    lastName: "Musa",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌊',
            text: 'I love the sea'
        },
        {
            emoji: '🌎',
            text: 'based on Argentina'
        },
        {
            emoji: "💼",
            text: "Student looking for your first IT experience"
        },
        {
            emoji: "📧",
            text: "ignaciomusa26@gmail.com"
        },
        {
            emoji: "📞",
            text: "+5493416813156"
        }
    ],
    socials: [
        {
            link:"https://wa.me/+5493416813156",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        },
        /* {
            link: "https://facebook.com/nachito.rc",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/ignaciomusa",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }, */
        {
            link: "https://github.com/Nacho-10",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/ignacio-musa",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ignacio. I'm a student and employee. I did bootcamp at SoyHenry from fullstack and now I do backend course in CoderHouse. I like to be with family and friends, I am a friendly person and eager to continue learning!",
    skills:
        {   proficientWith: ['javascript', 'node.js', 'git', 'github', 'bootstrap', 'html5', 'css', 'mongo'],
            exposedTo: ['adobe illustrator', 'react', 'redux'],
            development: [],
            know: []
        }
    ,
    hobbies: [
        {
            label: 'study',
            emoji: '📖'
        },
        {
            label: 'party',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project soyHenry: food",
            //live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Nacho-10/henryFoods", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
     /*    {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        } */
    ]
}