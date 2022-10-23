
import "./post.css";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare, } from '@fortawesome/free-solid-svg-icons'


function Hi({ profilePhoto, name, postTime, postText, postImage }) {
  return <div className='post'>

    <div className='postHeader'>

      <img className='profilePhoto' src={profilePhoto} alt="profile" />

      <div>
        {name} <br />
        {moment(postTime).fromNow()}
      </div>

    </div>

    <div className='postText'>
      {postText}
    </div>


    <img className='postImage' src={postImage} alt="postImage" />

    <hr />
    <div className='postFooter'>
      <div> <FontAwesomeIcon icon={faThumbsUp} /> Like  </div>
      <div>  <FontAwesomeIcon icon={faComment} /> Comment </div>
      <div> <FontAwesomeIcon icon={faShare} /> Share </div>
    </div>
    <hr />


  </div>;
}

function Page() {
  return <div className='page'>
    <div className="p1">
      <Hi
        name="Hassaan"
        profilePhoto="https://news.microsoft.com/wp-content/uploads/prod/sites/133/2018/07/sayed11-215x215.jpg"
        postTime="12 Apr 22"
        postText="Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws."
        postImage="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/311605052_645751980443434_3067620997962997180_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFOaQsW5J5CuynMhXS99PzWUmcfWrvLmn1SZx9au8uafZiiH7f68bpxcc09s9DeKBtXgpz0UylEBygTGWpjL37Z&_nc_ohc=3Q_1QmDe88YAX8HbEf6&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT--QU5NqzMply5TCliDsCEkEv4hU32SGGNtGRA9L0zOwA&oe=6359758E"
      />
    </div>

    <div className="p2">
      <Hi
        name="Taha"
        profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtT0qHIHkUd7ldDm9B5J4Bs13zWJybgIslMQ&usqp=CAU"
        postTime="12 Jan 22"
        postText="CHAINSAW MAN"
        postImage="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/312215542_120607880799057_5096196978958358731_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF4tNtCibVWE-PzWWdpAIPw2mXaiu42oxjaZdqK7jajGCjLmO2jc5T5hiFcg2Vex8e0pRRfSV2goZ0Wd32eR7lH&_nc_ohc=HgQl0SkTzy0AX_qmdfV&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT_buwTJCvkr_9JlrpowQ87stLGM2qDK2N5zKQ4Moxz1Og&oe=6358B120"
      />
    </div>
  </div>
}

export default Page;