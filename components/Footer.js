import React from "react";

import styles from './../styles/Home.module.css'

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerChild1}>
                    Designed and Developed by <span style={{color:'rgb(251, 53, 251)', fontWeight:'bold', fontStyle:'italic'}}>Srinivas Batthula</span>
                </div>
                <div className={styles.footerChild2}>
                    Copyright © 2025 BSP
                </div>
                <div className={styles.footerChild3}>
                    <a href="https://www.linkedin.com/in/srinivas-batthula/" title="srinivas batthula linkedin socials" target="_blank" style={{fontSize:'1.5rem', color:'skyblue', marginRight:'1rem'}}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/srinivas-batthula/" title="srinivas batthula github socials" target="_blank" style={{fontSize:'1.5rem', color:'white', marginRight:'1rem'}}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/srinivas_abhi8/" title="srinivas batthula x twitter socials" target="_blank" style={{fontSize:'1.5rem', color:'red', marginRight:'1rem'}}>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    {/* <a href="https://leetcode.com/u/WRBRSO7OH6/" target="_blank" style={{width:'1.8rem', height:'1.8rem', fontSize:'1.8rem', color:'yellow', marginRight:'1rem'}}>
                    <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="black"></path></svg>
                    </a> */}
                </div>
            </div>
        </>
    )
}