import React, { useEffect, useState } from "react";

import styles from "./../styles/Projects.module.css";


function Card({ data }) {
    return (
        // <div >
        <div className={styles.card}>
            <div className={styles.img}>
                {/* Copy 'imgI' & paste it for current img with the new img path/url... */}
                <div className={styles.imgI} style={{ backgroundImage: `url(${data.imgUrl})` }}></div>
            </div>
            <div className={styles.title}>
                {data.title}
            </div>
            <div className={styles.content}>
                {data.des}
            </div>
            <div className={styles.links}>
                {/* Use this DropDown to display 2-github links for Frontend & Backend */}
                {
                    (data.isOneRepo === 'true')
                        ? (<button className={styles.btn2} style={{ marginRight: '1rem' }}><a href={data.urlRepo} target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', padding: '0.3rem' }}><i className="fa-brands fa-github"></i></a></button>)
                        : (<div className={styles.dropdown}>
                            <button className={styles.dropbtn}><i className="fa-brands fa-github"></i></button>
                            <div className={styles.dropdownContent}>
                                <a href={data.urlFront} target="_blank">Frontend repo</a>
                                <a href={data.urlBack} target="_blank">Backend repo</a>
                            </div>
                        </div>)
                }
                {/* Use this Link to display Live-Demo link */}
                {/* <button className={styles.btn2} style={{ marginLeft: '1rem' }}><a href={data.urlLive} target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}><i className="fa-solid fa-arrow-up-right-from-square" style={{ paddingTop: '0.2rem', marginRight: '0.3rem' }}></i><span>  Demo  </span></a></button> */}
                {
                    (data.title !== "ATM System") && <a href={data.urlLive} target="_blank" style={{ textDecoration: 'none' }}><button className={styles.animatedBtn}><i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '1rem' }}></i></button></a>
                }
            </div>
        </div>
        // </div>
    )
}

export default function ProjectsPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        const Fetch = async () => {
            try {
                let r = await fetch('https://api.github.com/users/srinivas-batthula/repos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                r = await r.json()

                // Sort repositories by creation date (descending)
                r.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                const promises = r.map(async (item) => {
                    try {
                        let res = await fetch(`https://raw.githubusercontent.com/srinivas-batthula/${item.name}/main/metadata.json`, {
                            method: 'GET',
                        })
                        if (res.status === 200) {
                            res = await res.json()
                            console.log(item.name)
                            return res
                        }
                    } catch (error) {
                        console.log(' ')
                        // console.log(error);
                    }
                })

                // Wait for all fetch requests to finish
                const Data = await Promise.all(promises)
                setTimeout(() => {
                    setData(Data.filter(item => item !== undefined))     // Filter out any undefined results (in case of fetch errors)
                }, 1000)

            } catch (error) {
                // console.log(error);
                console.log(' ')
                // setData([])
            }
        }
        Fetch()
    }, [])

    // metadata.json.....
    //     {
    //         "imgUrl": "https://srinivas-batthula.github.io/portfolio/utils/todo_project.png",
    //         "title": "Task Manager",
    //         "des": "'Task Manager' is an innovative web app built with MERN stack and PWA features, designed to streamline task organization and productivity. The app features an intuitive UI, Notifications, Secure user-authentication and Offline functionality, ensuring accessibility on the go. Explore how it simplifies everyday planning, and feel free to reach out for any collaboration opportunities!",
    //         "isOneRepo": "false",
    //         "urlFront": "https://github.com/srinivas-batthula/todo",
    //         "urlBack": "https://github.com/srinivas-batthula/todo_backend",
    //         "urlLive": "https://srinivas-batthula.github.io/todo"
    //     }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.head} style={{ marginBottom: '4rem' }}>
                    My Recent <span style={{ color: 'rgb(251, 53, 251)', fontWeight: 'bold' }}>Works</span>
                    <div style={{ margin: '0.2rem', fontSize: '1.1rem', fontWeight: '400' }}>Here are a few projects I've worked on recently.</div>
                </div>
                <div className={styles.main2}>

                    {
                        (data && data.length !== 0) ? data.map((item, index) => {
                            return (
                                <Card key={index} data={item} />
                            )
                        }) : <div className="text-center w-full my-12 text-green-400 animate-pulse transition-colors duration-500 hover:text-purple-500">
                            <h4>Loading Projects from GitHub...</h4>
                        </div>

                    }

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
