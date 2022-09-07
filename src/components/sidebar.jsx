import '../css/component/sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney, 
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Melanin Kapital</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Business Profile
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Risk Profile
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Pending
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Konnect
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Academy
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;