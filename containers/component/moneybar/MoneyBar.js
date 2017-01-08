import './moneybar.scss'
import React from 'react'


function MoneyBar(props){
  return (<div className="money-bar" role="menubar" tabIndex="0">
    <div className="segments">
    <div className="money-bar-segment">
	<h4 className="segment-header">
		<span className="segment-text-bold">50</span>
		<span className="segment-text">Unbilled</span>
	</h4>


    <div className="cells">
    <div  className="money-bar-cell mbDarkBlue"  tabIndex="-1" role="menuitem">
       <div className="money-bar-block"></div>
       <div className="money-bar-text">
       	<span className="primary-text">$50.00</span>
       	<span className="secondary-text">2 ESTIMATE</span>
       	<span className="close-icon" tabIndex="-1" aria-label="Close" role="button"> </span>
       </div>
       </div>

       <div  className="money-bar-cell mbLightBlue"  tabIndex="-1" role="menuitem">
           <div className="money-bar-block"></div>
           <div className="money-bar-text">
           	<span className="primary-text">$50.00</span>
           	<span className="secondary-text">2 UNBILLED ACTIVITY</span>
           	<span className="close-icon" tabIndex="-1" aria-label="Close" role="button"> </span>
           </div>
       </div>
    </div>

</div>
</div>
</div>)
}

export default MoneyBar
