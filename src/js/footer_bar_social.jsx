import React, {Component} from "react";

class FooterBarSocial  extends Component{
    render(){
        return (
            <div className={"footer__bar__social"}>
                <p className={"long"}>Find us on:</p>
                <a href={"https://www.facebook.com/campaign/landing.php?&campaign_id=1547038796&extra_1=s%7Cc%7C293767122640%7Ce%7Cfacebook%27%7C&placement=&creative=293767122640&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1547038796%26adgroupid%3D58389919345%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011795%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAs67yBRC7ARIsAF49CdW68zXtd9UgtYgTuaGwRpEQZs4UWxzQW6MfVPWHqQJ7YnX5sGLKu50aAvkJEALw_wcB"} target={"_blank"}><img src={"../../assets/images/facebook.png"} alt={"facebook"} style={{width:"39px",height:"39px"}}/></a>
                <a href={"https://twitter.com/?lang=en"} target={"_blank"}><img src={"../../assets/images/twitter.png"} alt={"twitter"}/></a>
                <a href={"https://www.flickr.com/"} target={"_blank"}> <img src={"../../assets/images/flickr.png"} alt={"flickr"}/></a>
                <a href={"https://vimeo.com/upgrade?vcid=33432&utm_medium=cpc&utm_source=google&gclid=Cj0KCQiAs67yBRC7ARIsAF49CdX61-hzAlpYRRiaOly7w87fV3AaLY_otyO1cf0-DKM9qEypJfY4RYcaAhidEALw_wcB&gclsrc=aw.ds"} target={"_blank"}><img src={"../../assets/images/vimeo.png"} alt={"vimeo"}/></a>
                <a href={"https://www.pinterest.com/"} target={"_blank"}><img src={"../../assets/images/pinterest.png"} alt={"pinterest"}/></a>
            </div>
        )
    }
}

export default FooterBarSocial;