import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShop, faTvAlt, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SiFacebookgaming } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import "./left.css";

const left = (props) => {
    return (
        <div className="leftside">

            <div className="side1">
                <div className="homeicon "> <FontAwesomeIcon className='i1' icon={faHouse} />
                <p>Home</p>  </div>
            </div>
            <div className="sideProfilePic">
                <img className='i2' src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/64394308_863057987410325_717689932809764864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AaNetFhW5gkAX9caNwP&_nc_ht=scontent.fkhi17-1.fna&oh=00_AT_YjRvm_y-82lo0AimqpCJHAi6otVudw-U-MyJfsixApg&oe=63684293" alt="DP" width={20} />
                <p>Hassaan Muhammad</p>
            </div>

            <div className='side2'>
                <div className='menu'> <BsFillGrid3X3GapFill  />
                    <h3>Menu</h3>
                </div>

                <div className='friends'> <FontAwesomeIcon className='i3' icon={faUserGroup} />
                    <p>Friends</p>
                </div>

                <div className='watch'> <FontAwesomeIcon className='i4' icon={faTvAlt} />
                    <p>Watch</p>
                </div>

                <div className='shop'> <FontAwesomeIcon className='i5' icon={faShop} />
                    <p>Marketplace</p>
                </div>

                <div className='gaming'> <SiFacebookgaming  className='i6' />
                    <p>Gaming</p>
                </div>
            </div>


            <div className='side3'>
                <div className='Groups'> <MdGroups /> <h3>Groups</h3>  </div>

                <div className='G1'><img src="https://www.smiu.edu.pk/themes/smiu/images/smiu-pic01.jpg" alt="" width={20} />
                    <p>SMIU meme posting</p></div>

                <div className='G2'><img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/122772111_10221878275619877_6290543080817050964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHUrt5MyL5SsSxlapo0XaxLFLwsBELRKBUUvCwEQtEoFbZ3oTl5ZpQC2sEKNxUOWufrWy7EBIIJ-QQcY4oX-FUU&_nc_ohc=pzJ_ZRXgfHkAX8bVOP8&_nc_oc=AQnEHTr610-6DWxyZkPEWOgbkjl-Sq-VUL79YGOqHlPU3ErrJopDuCBrqrqA_4GbXHg&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT-N08CDvCLDFxu1RkliqQYU-MswND0q9jPnhAOGKyKlkA&oe=637202B9" alt="" width={20} />
                    <p>Tarakh metha ka olta chasma </p></div>

                <div className='G3'><img src="https://www.fitnessfirst.co.uk/media/cm2jlwu2/fitnessfirst_interiors-bakerst_147_web.jpg?width=540&height=405&quality=80&rnd=132869859581330000" alt="" width={20} />
                    <p>Gym posting</p></div>

            </div>






        </div>
    )
}

export default left;    