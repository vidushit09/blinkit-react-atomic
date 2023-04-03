import React from "react";
import PropTypes from 'prop-types';
import "./style.css"

class UpdateButton extends React.Component {
    
    render() {
        const {id, firstAdd, plusone, minusone}= this.props;
        let val=0, showDefault=true;

        if(window.localStorage.getItem(id)){
            val=JSON.parse(window.localStorage.getItem(id)).quantity;
            showDefault=false;
        }
            
        return (
            <>
                <button id="products-container__item-add--default" className="products-container__item--add-default" onClick={firstAdd} style={{ display: showDefault ? "block" : "none" }}>ADD</button>
                <div id="products-container__item-add--updated" className="products-container__item--add-updated" style={{ display: showDefault ? "none" : "flex" }}>
                    <i className="fa fa-minus" aria-hidden="true" id="minus-button" onClick={minusone}></i><div className="count">{val}</div><i className="fa fa-plus" aria-hidden="true" id="plus-button" onClick={plusone}></i>
                </div>
            </>

        )
    }
}
UpdateButton.propTypes = {
    id: PropTypes.string
  };


export default UpdateButton;