import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

//components
import MenuItemComponent from "../menuItem/menuItem";
//styles
import "./directoryComponentStyle.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/* i will try to spread props here instead of breaking all these down =>title, imageUrl, size, linkUrl   */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItemComponent key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateTopProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateTopProps)(Directory);
