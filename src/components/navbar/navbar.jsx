import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHouse, faTv, faStore, faUser, faGamepad, faListSquares, faBell } from '@fortawesome/free-solid-svg-icons'

import "./navbar.css";

import { getAuth, signOut } from "firebase/auth";

const head = (props) => {

    //logout button 
    const logoutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("singout succesfull")
        }).catch((error) => {
            // An error happened.
            console.log("singout failed")
        });
    } 

    return (

        <div className='head'>

            <div className='head1'>
                <FaFacebook className="fa-3x" />
                <i className="fa-brands fa-facebook fa-3x" ></i>
            </div>

            <div className="head2">
                <FontAwesomeIcon icon={faSearch} />
                <input type="search" placeholder="Search Facebook" className="head2-input" />
            </div>

            <div className="head3">
                <FontAwesomeIcon icon={faHouse} className="head3-icon" />
                <FontAwesomeIcon icon={faTv} className="head3-icon" />
                <FontAwesomeIcon icon={faStore} className="head3-icon" />
                <FontAwesomeIcon icon={faUser} className="head3-icon" />
                <FontAwesomeIcon icon={faGamepad} className="head3-icon" />
            </div>

            <div className="head4">

                <div className="list">

                    <FontAwesomeIcon icon={faListSquares} className="head4-icon" />
                </div>

                <div className="messenger">
                    <FaFacebookMessenger className="head4-icon" />
                </div>

                <div className="bell">
                    <FontAwesomeIcon icon={faBell} />
                </div>

                <div className="DP">
                    <img src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/64394308_863057987410325_717689932809764864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AaNetFhW5gkAX9caNwP&_nc_ht=scontent.fkhi17-1.fna&oh=00_AT_YjRvm_y-82lo0AimqpCJHAi6otVudw-U-MyJfsixApg&oe=63684293" alt="DP" width={20} />
                </div>

                <div onClick={props.click} className='togle' > < CgDarkMode />  </div>
                <button className="logoutButton" onClick={logoutHandler} >logout</button>

            </div>


        </div>
    )
}
export default head;