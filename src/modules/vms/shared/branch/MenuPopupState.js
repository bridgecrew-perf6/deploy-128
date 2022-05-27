import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import styled from "styled-components";

const PopUpMenu = styled(Menu)`
  width: 191px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const MostRecent = styled(MenuItem)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #f24f17 !important;
`;

export default function MenuPopupState(props) {
  const { icon , iconName } = props;

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconContainer {...bindTrigger(popupState)}>
            <img src={icon} alt="more" />
            <div>{iconName}</div>
          </IconContainer>

          <PopUpMenu {...bindMenu(popupState)}>
            {props.iconName === "SORT" ? (
              <div>
                <MostRecent onClick={popupState.close}>Most Recent</MostRecent>
                <MenuItem onClick={popupState.close}>Sort A to Z</MenuItem>
                <MenuItem onClick={popupState.close}>Sort Z to A</MenuItem>
                <MenuItem onClick={popupState.close}>Sort </MenuItem>
              </div>
            ) : (
              ""
            )}

            {props.iconName === "FILTER"? (
              <div>
                <MostRecent onClick={popupState.close}>Most Recent</MostRecent>
                <MenuItem onClick={popupState.close}>Sort A to Z</MenuItem>
                <MenuItem onClick={popupState.close}>Sort Z to A</MenuItem>
                <MenuItem onClick={popupState.close}>Sort </MenuItem>
              </div>
            ) : (
              ""
            )}
           
          </PopUpMenu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
