import React from "react";
import { Link } from "react-router-dom";

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from "@carbon/icons-react";

const NavBar = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          DPS Skills Tracker
        </HeaderName>
        <HeaderNavigation aria-label="DPS Skills Tracker">
          <HeaderMenuItem element={Link} to="/">
            My skills
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/dashboard">
            Manager dashboard
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
    )}
  />
);

export default NavBar;
