import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Agent" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/Agent/candidatelist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Candidate List
              </li>
            </Link>
            <Link to="/Agent/candidateacceptedlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Candidate Accepted List
              </li>
            </Link>
            <Link to="/Agent/candidaterejectedlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Candidate Rejected List
              </li>
            </Link>
            <Link to="/Agent/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/Agent/useracceptedlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users Accepted List
              </li>
            </Link>
            <Link to="/Agent/userrejectedlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users Rejected List
              </li>
            </Link>
            <Link to="/Agent/uservotes" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users Votes
              </li>
            </Link>
            <Link to="/Agent/uservoteaccepted" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Vote Accepted 
              </li>
            </Link>
            <Link to="/Agent/uservoterejected" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Vote Rejected
              </li>
            </Link>
            <Link to="/Agent/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
