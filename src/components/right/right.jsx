import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faMagnifyingGlass, faVideo } from '@fortawesome/free-solid-svg-icons'
import { GiPresent } from "react-icons/gi";
import "./right.css";

const right = (props) => {
    return (
        <div className="rightside">
            <div className="Sponserd">

                <div className="spon"><h3>Sponsored</h3></div>

                <div className="ad1">
                    <img src="https://scontent.fkhi5-1.fna.fbcdn.net/v/t58.17529-6/100308571_806614580581931_3229529770411000564_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6cb3ed&_nc_eui2=AeGg7L5gzvA7fb-4CCm46G8mwASMBWIez8_ABIwFYh7Pz_E4rEuFer7Zf-wVu_GTq4cZU9F1elbbBEusYTRgUNbp&_nc_ohc=MjAMMvG1sCYAX_vE_Xx&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi5-1.fna&oh=00_AT9D1XfzWO6Xm3KLpr48xvIY7yegCvOcwwYlYclFZHtf4A&oe=634F1942" alt="" width={150} />
                    <div className='set1'>
                        <h4 className='head'>Now Rs:1990</h4>
                        <p>outfiiters.compk</p>
                    </div>
                </div>

                <div className="ad2">
                    <img src="https://scontent.fkhi5-1.fna.fbcdn.net/v/t58.17529-6/174759404_2048106878715814_860850474191589235_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6cb3ed&_nc_eui2=AeHVHzLDJKE6r3ak_3UzcX9r2cnSCQN0vA3ZydIJA3S8DWdWpiy40YIbyV5TFT-34tlmt_UweBWs9TYoo-u6J9zU&_nc_ohc=RnMB0bRMiTsAX9a1v5c&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi5-1.fna&oh=00_AT8TuBNZbLR3jiw0VMo_ciMIAWZnlq-z_-cWLzwX4ZNpcQ&oe=634F3228" alt="" width={150} />
                    <h4>NDURE</h4>
                    <p>ndure.com</p>
                </div>
            </div>

            <div className="Birthday">
                <div><h3>Birthdays</h3></div>

                <div className="wish">
                    < GiPresent className="bdLogo" />
                    <h5>Samad Ahmed's</h5>
                    <p>birthday today</p>
                </div>

            </div>

            <div className="contacts">
                <div className='bar'>

                    <div>  <h3>Contacts</h3> </div>
                    <div className='icons'>
                        <FontAwesomeIcon className='video' icon={faVideo} />
                        <FontAwesomeIcon className='mag' icon={faMagnifyingGlass} />
                        <FontAwesomeIcon className='dots' icon={faEllipsis} />
                    </div>
                </div>


                <div className='ContactDetails'>

                    <div>
                        <img className='CDprofile' src="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-1/275144205_1599442833769337_1930652895224366154_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG1KD-YMNib-Fb61AP0r_sjztbHrVcZcl7O1setVxlyXolEK9YB34Zhfkh4_Qh64HEvzW16PXi-FA8VYaRjagy2&_nc_ohc=jBuAwIgRFEcAX_caD5t&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi5-2.fna&oh=00_AT-BXOgL4TBiD_ou0M6-9fGp4QOn2Fmh7suHorcoPLSPkw&oe=63526053" alt="" width={25} />
                        <h5>Shoaib Ahmed</h5>
                    </div>

                    <div>
                        <img className='CDprofile' src="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-1/278033989_4900304783420121_2076340717544993623_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFuYwNMtAaiSMs_ncTm4vQthO_Zl0-_GMuE79mXT78Yy3l0wlcxv0b63O-AnOjIkQJahgtOno-gsLLIlXuM6e3_&_nc_ohc=JcQ5lIQXSHUAX_J1l27&_nc_ht=scontent.fkhi5-2.fna&oh=00_AT8dWyn85ARyVPTn33OU4o1Wrg5iE27knv2g_3b2M9tIAg&oe=63518A97" alt="" width={25} />
                        <h5>Muddasir Brahmani</h5>
                    </div>

                    <div>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-1/279490519_5257804607612654_1524429002187659267_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHddAv_2ZVz2uOGnpTRlouwGXENOOjk-I4ZcQ046OT4jr98WhXV_nMoKkoIIMdsp2bg1U1YNZw9t3qVuRokZLfL&_nc_ohc=RM8yXVysL1YAX_xbsEi&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT-H8XlIt9a4elG8Y8A6ldcEXu5ZITWVhtTLD8ioN9ODOw&oe=6351AE6C" alt="" width={25} />
                        <h5>Tallal Masuad</h5>
                    </div>

                    <div>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-1/285710244_1023865741856326_2760863608056738885_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFXsXgD10ZG0ZQzUsrJALYrQTBmI6najSBBMGYjqdqNIMa2SrrFzVrS0sI40aiQ7NlJ-WCyPaKAFWjBGAZmOYoD&_nc_ohc=THX9t0irGjgAX9BItqo&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT_YAGOrA6JHDvOLZfX3KsfN23gr5NLZvwJlS-LE0Qi-cw&oe=6352A9C6" alt="" width={25} />
                        <h5>Huzaifa akbar</h5>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default right;