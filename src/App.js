import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      name: 'jk',
      code: '',
      latitude: '',
      longitude: '',
      address: '',
      selectedBuilding: 1,
      data: this.props.data
    };
  }

  dataUpdate(data){
    this.setstate({
      data: data
    })
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    console.log('This is my value', value);
    this.setState({
      filterText: value
    })
  }

  nameUpdate(name,code,latitude,longitude,address,data) {
    //Here you will need to set the filterText property of state to the value passed into this function
    console.log('This is my name', name);
    console.log('This is my code', code);
    console.log('This is my latitude', latitude);
    console.log('This is my longitude', longitude);
    console.log('This is my address', address);
    this.setState({
      name: name,
      code: code,
      latitude: latitude,
      longitude: longitude,
      address: address,
      data: data
    })
  }
  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    
    //const card = this.state.selectedBuilding
    console.log(id)
    this.setState({selectedBuilding: id})
  }
  removeBuilding(data, selectedBuilding) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    
    //const card = this.state.selectedBuilding
    console.log('Building ',data[selectedBuilding-1],' flagged for removal') 
  }
  addBuilding(data,name,code,latitude,longitude,address) {
  //addBuilding(name) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    
    //const card = 
    console.log('Building ',name,' flagged for addition')  
    //this.setState({
    //  name: name
      //code: code,
      //latitude: latitude,
      //longitude: longitude,
      //address: address
    //})
    
  }
  render() {    
    console.log(this.state.data)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>


        <main>
         <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
         />
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
              />              
              <RemoveBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
                removeBuilding={this.removeBuilding.bind(this)}
                selectedUpdate={this.selectedUpdate.bind(this)}
              />
            </div>
            <div className="column3">
              <AddBuilding                                 
                name={this.state.name}
                code={this.state.code}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                address={this.state.address}
                data={this.state.data}
                nameUpdate={this.nameUpdate.bind(this)}
                addBuilding={this.addBuilding.bind(this)}
                selectedUpdate={this.selectedUpdate.bind(this)}
                
                                
              />
            </div>
          </div>          
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

      