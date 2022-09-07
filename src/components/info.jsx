import '../css/component/info.css' 
import { ArrowDownward } from "@material-ui/icons"; 
function FeaturedInfo() { 
  return ( 
    <div className="featured"> 
      <div className="featuredItem"> 
        <span className="featuredTitle"> Get</span> 
        <div className="featuredMoneyContainer"> 
          <span className="featuredMoney"> A Loan </span> 
          <span className="featuredMoneyRate"> 
            -11.4 <ArrowDownward className="featuredIcon negative"/> 
          </span> 
        </div> 
      </div> 
      <div className="featuredItem"> 
        <span className="featuredTitle"> Get Private</span> 
        <div className="featuredMoneyContainer"> 
          <span className="featuredMoney">Capital</span>
          <span className="featuredMoneyRate"> 
            -1.4 <ArrowDownward className="featuredIcon negative"/> 
          </span> 
        </div> 
        </div> 
      </div> 
    ); 
} 
export default FeaturedInfo;