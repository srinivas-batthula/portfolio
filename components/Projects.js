import React from "react";

import styles from "./../styles/Projects.module.css";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Card({data}){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.img}>
                    {/* Copy 'imgI' & paste it for current img with the new img path/url... */}
                    <div className={styles.imgI} style={{ backgroundImage:`url(${data.imgUrl})` }}></div>
                </div>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.content}>
                    {data.des}
                </div>
                <div className={styles.links}>
                                        {/* Use this DropDown to display 2-github links for Frontend & Backend */}
                    <DropdownButton id="dropdown-item-button" title="GitHub" style={{color:'white', backgroundColor:'transparent', boxShadow:'0 0 0.6rem blue'}}>
                        <Dropdown.Item as="button"><a href={data.urlFront} target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Frontend Code</a></Dropdown.Item>
                        <Dropdown.Item as="button"><a href={data.urlBack} target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '1rem' }}>Backend Code</a></Dropdown.Item>
                    </DropdownButton>
                                        {/* Use this Link to display Live-Demo link */}
                    <button className={styles.btn2} style={{ marginLeft: '1rem' }}><a href={data.urlLive} target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}><i className="fa-solid fa-arrow-up-right-from-square" style={{ paddingTop: '0.2rem', marginRight: '0.3rem' }}></i><span>  Demo  </span></a></button>
                </div>
            </div>
        </>
    )
}

export default function ProjectsPage() {

    const projects = [
        {
            imgUrl: 'https://srinivas-batthula.github.io/portfolio/utils/todo_project.png',
            title: 'Task Manager',
            des: "'Task Manager' is an innovative web app built with MERN stack and PWA features, designed to streamline task organization and productivity. The app features an intuitive UI, Notifications, Secure user-authentication and Offline functionality, ensuring accessibility on the go. Explore how it simplifies everyday planning, and feel free to reach out for any collaboration opportunities!",
            urlFront: 'https://github.com/srinivas-batthula/todo',
            urlBack: 'https://github.com/srinivas-batthula/todo_backend',
            urlLive: 'https://srinivas-batthula.github.io/todo'
        },
        {
            imgUrl: 'https://srinivas-batthula.github.io/portfolio/utils/portfolio_project.png',        //  ../public/utils/portfolio_project.png
            title: 'Personal Portfolio',
            des: "'Personal Portfolio' is a modern & responsive website developed using React & Next.js, designed to showcase my skills, projects... in the tech world. The portfolio features an interactive user experience with smooth transitions and a mobile-friendly design. Feel free to explore and get a glimpse of my journey as a developer, and don't hesitate to reach out if you’d like to connect!",
            urlFront: 'https://github.com/srinivas-batthula/portfolio',
            urlBack: 'https://github.com/srinivas-batthula/portfolio_backend',
            urlLive: 'https://srinivas-batthula.github.io/portfolio/' 
        }
    ]

    return (
        <>
            <div className={styles.main}>
                <div className={styles.head}>
                    My Recent <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Works</span>
                    <div style={{ margin: '0.2rem', fontSize: '1.1rem', fontWeight: '400' }}>Here are a few projects I've worked on recently.</div>
                </div>
                <div className={styles.main2}>


                    {
                        projects.map((item)=>{
                            return(
                                <Card data={item} />
                            )
                        })
                    }

                    <div className={styles.card}>
                        <div className={styles.img}>
                                <div className={styles.img2}></div>
                        </div>
                        <div className={styles.title}>
                            ATM System
                        </div>
                        <div className={styles.content}>
                            Welcome to the Project 'ATM System' - A Robust Banking Experience! This Python application simulates an ATM interface, allowing users to perform essential banking operations such as balance inquiries, deposits, transaction history with permanent data storage in JSON files and account management—all within a command-line environment.
                        </div>
                        <div className={styles.links}>
                            <button className={styles.btn2} style={{ marginRight: '1rem' }}><a href="https://github.com/srinivas-batthula/ATM_System" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding:'0.3rem' }}>GitHub</a></button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.img}>
                            <div className={styles.img3}></div>
                        </div>
                        <div className={styles.title}>
                            Coming Soon...
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
