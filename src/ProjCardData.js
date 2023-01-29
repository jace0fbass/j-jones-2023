import React from "react";
import moonstone from "../src/images/moonstone.jpg";
import socialApi from "../src/images/socialMediaApi.jpg";
import teamProfile from "../src/images/teamProfileMaker.jpg";
import tekB from "../src/images/tekblahg.jpg";
import artHub from "../src/images/artHub.jpg";
import ecomB from "../src/images/ecomBackEnd.jpg";
import empTrack from "../src/images/empTracker.jpg";
import musicalC from "../src/images/musicalChairs.jpg";
import read2me from "../src/images/read2me.jpg";
import workDay from "../src/images/workDayScheduler.jpg";

export default [
    {
        id: 1,
        title: "laurenatmoonstone.com",
        description: "A website built for Moonstone Studio hair salon.",
        skills: "HTML, CSS, Bootstrap, Git",
        imageRoute: moonstone,
        alt: "Moonstone Studio's portfolio page.",
        deployedLink: "laurenatmoonstone.com",
        githubLink: "https://github.com/jace0fbass/moonstone"
    },
    {
        id: 2,
        title: "Team Profile Maker",
        description: "An application to create profiles for employees.",
        skills: "HTML, CSS, Bootstrap, Javascript, Inquirer, OOP, TDD, Node, Git",
        imageRoute: teamProfile,
        alt: "TeamProfileMaker being ran.",
        deployedLink: "N/A",
        githubLink: "https://github.com/jace0fbass/team-profile-maker"
    },
    {
        id: 3,
        title: "tekBLAHg",
        description: "A website where users can create blog posts.",
        skills: "HTML, CSS, Javascript, MVC, ORM, MySQL, Sequelize, OOP, Express, Node",
        imageRoute: tekB,
        alt: "tekBLAHg home page",
        deployedLink: "https://tekblog-app.herokuapp.com/login",
        githubLink: "https://github.com/jace0fbass/tech-blog"
    },
    {
        id: 4,
        title: "Employee Tracker Database",
        description: "An application that allows a manager to add, update, and delete employees, departments, jobs, and salaries.",
        skills: "Javascript, Inquirer, MySQL, OOP, Express, Node",
        imageRoute: empTrack,
        alt: "Employee Tracker Database",
        deployedLink: "N/A",
        githubLink: "https://github.com/jace0fbass/employee-tracker-app"
    },
    {
        id: 5,
        title: "Social Media Backend API",
        description: "A build of a social media platform's backend and API.",
        skills: "Javascript, NoSQL, MongoDB, Mongoose, Postman, ORM, OOP, Express, Node",
        imageRoute: socialApi,
        alt: "A social media backend.",
        deployedLink: "N/A",
        githubLink: "https://github.com/jace0fbass/social-media-api"
    },
    {
        id: 6,
        title: "Musical Chairs",
        description: "A website where users can reserve tickets for concerts.",
        skills: "Javascript, Handlebars, MVC, ORM, MySQL, Sequelize, OOP, Express, Node",
        imageRoute: musicalC,
        alt: "Musical Chairs' home page.",
        deployedLink: "https://secret-hamlet-03727.herokuapp.com/",
        githubLink: "https://github.com/adriennecordell/musical-chairs"
    },
    {
        id: 7,
        title: "E-commerce Backend API",
        description: "A backend built for an e-commerce website",
        skills: "Javascript, ORM, MySQL, Sequelize, OOP, Insomnia, Express, Node",
        imageRoute: ecomB,
        alt: "E-commerce backend being ran",
        deployedLink: "N/A",
        githubLink: "https://github.com/jace0fbass/E-com-back-end-build"
    },
    {
        id: 8,
        title: "Riid2mii (mobile)",
        description: "An application where users can hold their phone over text and it will read the text aloud after being scanned.",
        skills: "HTML, CSS, Javascript, Git",
        imageRoute: read2me,
        alt: "Riid2mii being used to scan a book's cover",
        deployedLink: "https://jace0fbass.github.io/read-2-me/",
        githubLink: "https://github.com/jace0fbass/read-2-me"
    },
    {
        id: 9,
        title: "Art-Hub",
        description: "An endless scroll style application that fetches art from The Met and Harvard art museums.",
        skills: "Javascript, jQuery, REST API, Git",
        imageRoute: artHub,
        alt: "A piece of art",
        deployedLink: "https://ddwk21.github.io/art-hub/",
        githubLink: "https://github.com/ddwk21/art-hub"
    },
    {
        id: 10,
        title: "Work Day Scheduler",
        description: "An application the lets a user schedule their day by the hour.",
        skills: "HTML, CSS, Javascript, jQuery, Moment, Git",
        imageRoute: workDay,
        alt: "Work Day Scheduler in use",
        deployedLink: "https://jace0fbass.github.io/work-day-scheduler/",
        githubLink: "https://github.com/jace0fbass/work-day-scheduler"
    },
]
