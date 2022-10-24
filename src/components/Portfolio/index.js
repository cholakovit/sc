import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Cube from "../Cube";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="scroll">
                    <div>
                        <h2>https://cholakovit.com</h2>
                        <p>Web based application - presentation site. We rewrote the REACT presentation site as it is
                            an emerging technology in the web space with many serious advantages. One of the most
                            important advantages is speed. Especially for this website we use a framework based on
                            REACT and it is NEXT.JS. One of the most important advantages of NEXT.JS is the
                            generation of static files, which are then loaded by the browser very quickly! This is also
                            very important for SEO Optimization of a site and is a key factor, especially in large
                            applications with heavy traffic
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>NEXTJS</li>
                            <li>MongoDB</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://balken.cholakovit.com</h2>
                        <p>Web based application - presentation site. For a company focusing on the development of
                            renewable energy projects with extensive experience in photovoltaic and wind projects.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>GIT: https://github.com/cholakovit/sportal</h2>
                        <p>Web based application - I was requested to create a small application.. similar to this one i
                            am showing in this demo. A form from where a user can insert data and see it bellow. The
                            form has validation, I am using react-hook-form to validate data.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT - Vitejs + TypeScript</li>
                            <li>Reduxjs/Toolkit + RTKQ</li>
                            <li>MUI – Material UI Tools</li>
                            <li>Unit testing - react library, jest, integrational testing and cypress</li>
                            <li>Data is loaded through json-server</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Demo Project: Mojo Casino Games – https://mojo.cholakovit.com
                            GIT: https://github.com/cholakovit/mojos</h2>
                        <p>I was asked to create an application that calculates the distance between two points. In this
                            case.. if you have a party, and you want to invite all of your friends, but within X km radius.
                            based on the entered coordinates, the application calculates which ones are in the given
                            radius and shows them to you.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT + TypeScript</li>
                            <li>Reduxjs/Toolkit + RTKQ</li>
                            <li>MUI – Material UI Tools</li>
                            <li>Unit testing - react library, jest, integrational testing</li>
                            <li>Data is loaded through json-server</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Demo Project: Mojo Casino Games – https://mojo.cholakovit.com
                            GIT: https://github.com/cholakovit/mojos</h2>
                        <p>small application showing games by category. Dark and Light mode included. Second page
                            has featured games and all games that the user can filter. Two types of filtering. Labels on
                            each game based on the included categories.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>Redux with thunks</li>
                            <li>MUI – Material UI Tools</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DEMO Project: Crypto page - https://crypto.cholakovit.com
                            Git: https://github.com/cholakovit/crypto</h2>
                        <p>This is a small application that reads cryptocurrency data and displays it on a ‘crypto’ page
                            of the app. The user can sort them by the arrows on each title of each column, and on the
                            bottom we have pagination feature. The application is made with react & redux and I also
                            use thunks. You can see the code and how it is written in the link leading to the GIT
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>Redux with thunks</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DEMO Project: blog app with json-server OFFLINE
                            Git: https://github.com/cholakovit/blog</h2>
                        <p>А Blog application with users. You can create, edit or delete a user (CRUD). Each created
                            user is able to create an additional article that appears in the blog with a date (how long ago,
                            it was published) ... and by whom. You are able to view each article in entirely, as well as
                            each user with all the data entered. However, since I do not have a json-server on my
                            hosting, the application has not been uploaded. But the code is uploaded to the GIT and you
                            can view it from there. I used react with redux and RTK Query to make it. If you want to
                            download and test it, you need to install json-server:
                            https://www.npmjs.com/package/json-server and run it with this command: 
                            “npx jsonserver -- watch data /data.json --port 3500 ”
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>Redux with RTKQ</li>
                            <li>Json-server</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DEMO Project: to-do app based on GO LANG
                            https://github.com/cholakovit/todo-application-2</h2>
                        <p>This is a to-do app i recently developed based on GO LANG. I am always excited to learn
                            new technologies and improve my work and technical skills. In this case I am combining top
                            UI technologies with top backend technologies.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT - Vite, TypeScript</li>
                            <li>SWR Data Fetching and caching</li>
                            <li>Mantine UI</li>
                            <li>GO Lang</li>
                            <li>Github Actions - CI/CD</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DEMO Project: uploading and reading file –
                            https://dropzone.cholakovit.com
                            Git: https://github.com/cholakovit/dropzone</h2>
                        <p>This is an application where you can drag and drop a specific scv file in the specified box.
                            The application intercepts it, reads and shows all employees worked on certain projects and
                            calculates how many days they have worked. Then shows those employees who worked
                            together on a project and how long each one worked, and then shows the employee who
                            worked the most. The application intercepts all types of dates that can be entered and
                            works with them, and if there is a blank date NULL also intercepts it and there is no
                            problem. You can download the code from the link to the GIT below and the file inside that
                            tests zzz.scv and see the result .. the code is based on pure react.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>DEMO Project: movie app searching and displaying a movie –
                            https://movie.cholakovit.com
                            Git: https://github.com/cholakovit/movie-app
                        </h2>
                        <p>This is an application where you can search for a movie through the search engine and, .. in
                            addition showing a list of movies. When you click on a movie, the details of that movie are
                            displayed. The application is made with redux toolkit and redux saga.</p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>REACT</li>
                            <li>Saga</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://diversity.com</h2>
                        <p>12 years of development and maintanance of web-based job board application for United
                            States, where companies can post job postings and applicants can apply. The application is
                            large with heavy traffic and high requirements. Speed is very important and for this purpose
                            we decided to write it in pure PHP. In this way we manage to achieve the highest possible
                            efficiency and speed.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>PHP & MySql</li>
                            <li>JS (jquery)</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://bmsfood.bg</h2>
                        <p>Presentation web site of Bulgarian cuisine BMS. The client requested a presentation site
                            with a more unique and representative design for their needs. In our opinion - WP is the
                            best solution for the given requirements with a unique theme built by us.
                        </p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>WP Theme - PHP & MySql</li>
                            <li>JS (jquery)</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://dairysystemsbulgaria.com</h2>
                        <p>Presentation web site of a company that builds and maintains farms - dairysystemsbulgaria.
                            The client needed a clean and simple design, legible and clearly presenting their services.
                            For this purpose, we focused on a topic from the WP. It is based on WP - PHP & MySql, js
                            (jquery), html, css as main technologies</p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>WP Theme - PHP & MySql</li>
                            <li>JS (jquery)</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://agroplovdiv.bg</h2>
                        <p>Website such as `online newspaper` - agroplovdiv. The client requested a faster and
                            cheaper site that could be installed and could easily upload articles to it. Also well optimized
                            for Google. For this purpose, we focused on the WP topic.</p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>WP Theme - PHP & MySql</li>
                            <li>JS (jquery)</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <h2>https://oetq.net</h2>
                        <p>Website for presentation and sale of essential oils. The requirements were to make a clean,
                        simple, presentation website for the presentation of oils, as well as the management of sales
                        representatives. For the given purposes we chose WP as a faster and cheaper option for the
                        needs of our client.</p>
                        <h2>Main Technologies:</h2>
                        <ul>
                            <li>WP Theme - PHP & MySql</li>
                            <li>JS (jquery)</li>
                            <li>HTML5, CSS3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cube />
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;