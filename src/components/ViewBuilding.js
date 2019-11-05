import React from 'react';
/*
class ViewBuilding extends React.Component {
	render() {
		return (
			<div className = "selectedBuilding">
				<p>				
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
*/


export default({data, selectedBuilding}) =>{
	return (
			
			<div className = "selectedBuilding">
				<p>								
					<i>Click on a name to view more information</i>
				</p>				
					{typeof(data[selectedBuilding-1].name) != "undefined" ?
					<ul>{(data[selectedBuilding-1].name)}</ul>: null}				
				
					{typeof(data[selectedBuilding-1].code) != "undefined" ? 
					<ul>{(data[selectedBuilding-1].code)}</ul>: null}
								
					{typeof(data[selectedBuilding-1].coordinates) != "undefined" ?
					<ul>{(data[selectedBuilding-1].coordinates.latitude)}</ul>: null}				
				
					{typeof(data[selectedBuilding-1].coordinates) != "undefined" ?
					<ul>{(data[selectedBuilding-1].coordinates.longitude)}</ul>: null}
				
					{typeof(data[selectedBuilding-1].address) != "undefined" ?
					<ul>{(data[selectedBuilding-1].address)}</ul>: null}
			</div>			

		)
}
