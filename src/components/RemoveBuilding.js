import React from 'react';

class RemoveBuilding extends React.Component {
	
	removeBuilding() {
		const data = this.props.data
		const selectedBuilding = this.props.selectedBuilding
			for( var i = 0; i < data.length; i++){ 
   				if ( data[i].id == selectedBuilding) {
     				data.splice(i, 1); 
   				}
			}	
	}
	render(){

		const { data, selectedBuilding, removeBuilding, selectedUpdate } = this.props;
	return (			
			<div className = "selectedBuilding">
				<tr key={selectedBuilding}
					onClick={this.removeBuilding.bind(this)}
				>
				<td>								
					<i>Click here to remove the selected listing</i>     
				</td>
				</tr>		
				<tr key={data.length}
					onClick={()=> selectedUpdate(data.length)}
				>
					<td><i>Click here to update the list after removing an entry</i></td>					
				</tr>					
			</div>			

		);
	}
}

	

export default RemoveBuilding;