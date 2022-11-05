import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faMagnifyingGlass, faVideo } from '@fortawesome/free-solid-svg-icons'
import { GiPresent } from "react-icons/gi";
import "./right.css";

const right = (props) => {
    return (
        <div className="rightside">
            <div className="Sponserd">

                <div className="spon"><h3>Sponsored</h3></div>

                <div className="ad">
                    <img src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0208103220_3.jpg?v=1658733583" alt="" width={150} />
                    <span className='set1'>
                    <h4 className='brandTextHeading'>Outfitters</h4>
                    <a className='brandText' href='https://outfitters.com.pk/products/f0206-106?variant=41492096057535&utm_source=Facebook&utm_campaign=All%20Placements%20%7C%20Remarketing%20%7C%20Catalog%20Sales%20%20%7C%2027-01-2021&utm_medium=paid&utm_term=All%20Website%20Visitors%20and%20Add%20to%20Carts%20-%20Last%20180%20Days%20%7C%20All%20Placements%20%7C%20All%20Men%27s%20Summer%20Product%20%7C%20All%20%7C%2018-65%2B&utm_content=All%20Men%27s%20Summer%20Collection%20%7C%2002-03-2021&fbclid=IwAR0MVIOKsoZdyx7dcKqnyoGtd0YfA6dfh1IvoFp8cppX_dfc-N7v9ONLOSc'>
                    Outfiiters.compk</a>
                    </span>
                </div>

                <div className="ad1">
                    <img src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0290106618_3_7f3402f6-44f0-48f1-894a-6d454b683e51.jpg?v=1660815436" alt="" width={150} />
                    <span className='set1'>
                    <h4 className='brandTextHeading'>NDURE</h4>
                    <a className='brandText' href='https://www.ndure.com/' >
                    ndure.com</a>
                    </span>
                </div>
            </div>

            {/* <div className="Birthday">
                <div><h3>Birthdays</h3></div>

                <div className="wish">
                    < GiPresent className="bdLogo" />
                    <h5>Samad Ahmed's</h5>
                    <p>birthday today</p>
                </div>

            </div> */}

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

                    <div className='cd'>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/66653274_891752237871737_6834786104726519808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGPgaEsT3IpehOnEWeFvp8YyCR42Y8v0yjIJHjZjy_TKBzf6YN8UER38r6oz3MYRoPrSj9Qmr3ObDGPoNDkccXF&_nc_ohc=-0AWJJH2MUAAX9wNlUl&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfDbdYXWiAbqzZDdcCpUhVklIlGQlvacBm6_oSy7UXaqBQ&oe=638DA7F9" alt="" width={25} />
                        <h5 className='cdText'>Shoaib Ahmed</h5>
                    </div>

                    <div className='cd'>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/308726312_1761995204154668_4264263450349056369_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGq04S8zAdIJ85G7yPh_Z_95XINnOou-pHlcg2c6i76kUUJ13Gglxyb_TimzqsSkxTG_FYrqGGu08GAmlI-XEv5&_nc_ohc=6UKR1EjlYYIAX8t9cdm&_nc_oc=AQleZsCLl5HcOY8nZadFm5nYt13Bmhv5jFlYdoWJW4_tdiGORZ9JYaEwtZoR9i1JxEw&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfBliEUAiA9ERvlQTwp1UyuTTFt0wRZx42f4hRRiP5-IOw&oe=636B6FBB" alt="" width={25} />
                        <h5 className='cdText'>Zohair Sajjad</h5>
                    </div>

                    <div className='cd'>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/279490519_5257804607612654_1524429002187659267_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHddAv_2ZVz2uOGnpTRlouwGXENOOjk-I4ZcQ046OT4jr98WhXV_nMoKkoIIMdsp2bg1U1YNZw9t3qVuRokZLfL&_nc_ohc=C2tjO6ZPZq0AX8dKPjV&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfB-7yk8cDL_KVyYT1y9Oxf8ZaI-mt2A1rh84UScJIe2ew&oe=636A4FEA" alt="" width={25} />
                        <h5 className='cdText'>Tallal Masuad</h5>
                    </div>

                    <div className='cd'>
                        <img className='CDprofile' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/285710244_1023865741856326_2760863608056738885_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXsXgD10ZG0ZQzUsrJALYrQTBmI6najSBBMGYjqdqNIMa2SrrFzVrS0sI40aiQ7NlJ-WCyPaKAFWjBGAZmOYoD&_nc_ohc=Uc8UDhExXTwAX_Oy_zO&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfClrtkwVLPwx6dPACIrhxq_aZPtNVoQF4Uj4lHgAnWlvQ&oe=636B4B48" alt="" width={25} />
                        <h5 className='cdText'>Huzaifa akbar</h5>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default right;