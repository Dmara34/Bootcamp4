import React from 'react';

class AddBuilding extends React.Component {
		nameUpdate() {
			const name= this.myName.value
			const code= this.myCode.value
			const latitude= this.myLatitude.value
			const longitude= this.myLongitude.value
			const address= this.myAddress.value
			const data = this.props.data
			this.props.nameUpdate(name,code,latitude,longitude,address,data)				
		}
		addBuilding(){
			
			const data = this.props.data			
			const name= this.myName.value
			const code= this.myCode.value
			const latitude= this.myLatitude.value
			const longitude= this.myLongitude.value
			const address= this.myAddress.value
			const building =
					{
						id: data.length+1,
						code: code,
						name: name,
						coordinates:{
								latitude: latitude,
								longitude: longitude
						},
						address: address
					}
			
			console.log('This is my building', building)
			if(name != "" && code != ""){
				data.push(building);
				
			}			
			console.log('This is my building in data', data[data.length-1])
		}
	render(){
		const {data, selectedUpdate} = this.props
	return (		
			<form>
				<input
				 type="addresstext" 
				 ref={(value)=> this.myName = value}
				 placeholder="Name"				 
				 onChange={this.nameUpdate.bind(this)}
				/>
				<input
         		type="addresstext" 
         		ref={(value)=> this.myCode = value}
         		placeholder="Code"        
         		onChange={this.nameUpdate.bind(this)}
        		/>
        		<input
         		type="addresstext" 
         		ref={(value)=> this.myLatitude = value}
         		placeholder="Latitude"        
         		onChange={this.nameUpdate.bind(this)}
        		/>
        		<input
         		type="addresstext" 
         		ref={(value)=> this.myLongitude = value}
         		placeholder="Longitude"        
         		onChange={this.nameUpdate.bind(this)}
        		/>
		        <input
        		 type="addresstext" 
         		ref={(value)=> this.myAddress = value}
         		placeholder="Address"        
         		onChange={this.nameUpdate.bind(this)}
        		/>
        		<tr         			
					onClick={this.addBuilding.bind(this)}					
				>
				<td>								
					<i>Click here to add listing above</i>     
				</td>
				</tr>	
				<tr key={data.length}
					onClick={()=> selectedUpdate(data.length)}
				>
					<td><i>Click here to update the list after adding an entry</i></td>					
				</tr>
			</form>

		);
	}

}

export default AddBuilding;
	
