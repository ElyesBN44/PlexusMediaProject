import React, { useEffect } from 'react'
import "./frontpage.css"
import { useNavigate } from 'react-router'
import FontCards from './fontCard/FontCards'
import {useDispatch,useSelector} from 'react-redux'
import { getPost } from '../../api/api_Admin/api_admin'
import { setPost } from '../../store/postSlice'

const User = ({logout,auth}) => {
  // jiben el postowet
  const posts = useSelector(state=>state.post)
  console.log('posts',posts)
  const nvigate = useNavigate()
const dispatch = useDispatch()
  const jibAllpost=async()=>{
const data = await getPost()
dispatch(setPost(data.Posts))
console.log('data posts',data.Posts)
  }

  useEffect(()=>{
    jibAllpost()
   },[])
   let array=[1,2,3,4,5,6]
  return (
    <div>
        <div className="landing-page-studio">
    <div className="div">
      <div className="top-menu">
        <p className="a-studio">
          <span className="text-wrapper">LOGO</span>
          <span className="span"> PlexusMedia</span>
        </p>
        <div className="navbar">
          <div className="text-wrapper-2">{auth.name}</div>
          <div className="text-wrapper-3"   onClick={()=>logout()} >logout</div>
          {/* <div className="text-wrapper-4" onClick={()=>logout()}  >logout</div> */}
          <div className="text-wrapper-5"  onClick={()=>nvigate('/register')}  >Register</div>
        </div>
      </div>
      <div className="hero-headline">
        <div className="overlap">
          <div className="dot-ornament">
            <img className="dot" alt="Dot" src="/img/dot-3.png" />
            <img className="img" alt="Dot" src="/img/dot-3.png" />
          </div>
          <div className="content">
            <div className="text-wrapper-8">Notre agence en stratégie digitale.</div>
            <p className="p">
            Notre mission ? Développer votre business en exploitant tout le potentiel du digital dans une logique d’investissement optimisé pour des performances immédiates et durables.
            </p>
            <div className="CTA-contact-now">
              <div className="text-wrapper-9">Contactez nous</div>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <img className="image" alt="Image" src="/img/image-8.png" />
        </div>
      </div>
      <div className="our-client">
        <p className="text-wrapper-10">Les clients qui ont choisis notre agence:</p>
        <div className="text-wrapper-8">Nos clients</div>
        <img className="uber-eats-logo" alt="Uber eats logo" src="/img/uber-eats-logo.svg" />
        <img className="airbnb-logo" alt="Airbnb logo" src="/img/airbnb-logo.svg" />
        <img className="google-logo" alt="Google logo" src="/img/google-logo.svg" />
        <img className="amazon-logo" alt="Amazon logo" src="/img/amazon-logo.svg" />
      </div>
      <div className="how-can-we-help">
        <div className="overlap-2">
          <div className="ellipse-2" />
          <div className="group">
            <img className="dot-2" alt="Dot" src="/img/dot-4.png" />
            <img className="img" alt="Dot" src="/img/dot-4.png" />
          </div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
         {/* partie view khidmet el admin  */}
{
  posts.map((el,i)=><FontCards  i={i} post={el}  />)
}
         
        
        </div>
      </div>
      <div className="great-since">
        <div className="overlap-3">
          <div className="ellipse-3" />
          <img className="unsplash" alt="Unsplash" src="/img/unsplash-bzqu01v-g54.svg" />
          <div className="play-rounded-button">
            <div className="overlap-group-3">
              <div className="rectangle-4" />
              <img className="group-5" alt="Group" src="/img/group.png" />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-5" />
          <p className="our-business-plan-is">
            Our Business Plan is a written document describing a company&#39;s core business activites, Objectives,
            and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern
            idea accordingly their budgets and according thir reuirements.
          </p>
          <div className="group-6">
            <p className="text-wrapper-18">Great Digital Product Agency since 2016</p>
          </div>
        </div>
      </div>
      <div className="happy-client">
        <div className="overlap-5">
          <img className="dot-3" alt="Dot" src="/img/dot-3.png" />
          <div className="ellipse-4" />
          <img className="unsplash-mtztgvdshfy" alt="Unsplash mtztgvdshfy" src="/img/unsplash-mtztgvdshfy.png" />
        </div>
        <div className="overlap-6">
          <div className="ellipse-5" />
          <div className="group-7">
            <img className="unsplash-k" alt="Unsplash k" src="/img/unsplash-mez3pofgs-k.svg" />
            <img className="unsplash-ohkelokqre" alt="Unsplash" src="/img/unsplash-ohkelokq3re.svg" />
            <img className="unsplash-tll-hnjo" alt="Unsplash" src="/img/unsplash-3tll-97hnjo.svg" />
            <img className="unsplash-wbedub-i" alt="Unsplash" src="/img/unsplash-w7b3edub-2i.svg" />
            <img className="unsplash-et" alt="Unsplash et" src="/img/unsplash-et-78qkmmqs.svg" />
            <img className="unsplash-anudmpilw" alt="Unsplash" src="/img/unsplash-6anudmpilw4.svg" />
            <img className="unsplash-dupkifda" alt="Unsplash" src="/img/unsplash-d1upkifd04a.svg" />
            <img className="unsplash-oymvtwfu" alt="Unsplash" src="/img/unsplash-o3ymvt7wf9u.svg" />
          </div>
        </div>
        <p className="text-wrapper-19">Several selected clients, who already believe in our service.</p>
        <p className="text-wrapper-20">What our happy client say</p>
        <div className="group-8">
          <div className="text-wrapper-21">Matthew Paul</div>
          <p className="text-wrapper-22">
            Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality
            and quick turnaround time. Highly recommend.
          </p>
          <div className="ellipse-6" />
          <div className="ellipse-7" />
          <div className="ellipse-8" />
          <div className="ellipse-9" />
          <div className="ellipse-10" />
        </div>
      </div>
      <div className="newsletter">
        <div className="overlap-7">
          <div className="group-9" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-31.svg" />
          <div className="group-10">
            <div className="overlap-group-4">
              <div className="text-wrapper-23">Enter your email address..</div>
              <div className="frame">
                <div className="text-wrapper-24">Contact Now</div>
              </div>
            </div>
          </div>
          <p className="text-wrapper-25">I will update good news and promotion service not spam</p>
          <div className="text-wrapper-26">Subscribe Newsletter</div>
        </div>
      </div>
      <footer className="footer">
        <p className="a-studio-2">
          <span className="text-wrapper">A+</span>
          <span className="span"> Studio</span>
        </p>
        <div className="text-wrapper-27">What We Do</div>
        <div className="text-wrapper-28"></div>
        <div className="text-wrapper-29"></div>
        <div className="text-wrapper-30"></div>
        <p className="web-design-app">
          Content Strategy
           <br />
          Social Media Marketing Plan
          <br />
          Events Online
          <br />
          Outsourcing
          <br/>
          Graphic Design
          <br/>
          Photography
        </p>
       
        <div className="FAQ-policy-business">
          
          <br />
          
          <br />
         
        </div>
        <div className="whatsapp-support">
          
          <br />
        
        </div>
        <img className="line" alt="Line" src="/img/line-6.svg" />
        <img className="line-2" alt="Line" src="/img/line-8.svg" />
        <p className="text-wrapper-31">
          Leading digital agency with solid design and development expertise. We build readymade websites, mobile
          applications, and elaborate online business services.
        </p>
        <img className="facebook" alt="Facebook" src="/img/facebook.svg" />
        <img className="twitter" alt="Twitter" src="/img/twitter.svg" />
        <img className="linkedin" alt="Linkedin" src="/img/linkedin.svg" />
        <img className="line-3" alt="Line" src="/img/line-7.png" />
        <p className="text-wrapper-32">Copyright © 2024 PlexusMedia</p>
      </footer>
    </div>
  </div>
    </div>
  )
}

export default User
