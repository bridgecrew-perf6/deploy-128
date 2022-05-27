import React from "react";

function Popup(props) {
  console.log({props})
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <button className="cancel-btn" onClick={()=> props.setTrigger(false)}>
          Cancel
        </button>
        <button className="delete-btn">
          Delete
        </button>

        <h3 className="delete-text">Delete Address Group</h3>
         <p className="group-text">Do you want to delete Address Group?</p>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
