import React from "react";
// import axios from "axios";

//Components
import SearchInv from '../components/SearchInv';
import Items from '../components/Items';
import InvyApi from "../data/inventories.json";

//Styles 
import './Main_Inv.css';


class Inventory extends React.Component {
  state = {
    myInventory: InvyApi,
  };
  // componentDidMount() {
  //   this.getVideos('inventories');
  //   this.getVideoById('inventories');
  // }

  // // Gets Videos
  // getVideos() {
  //   axios
  //     .get('inventories')
  //     .then((response) => {
  //       this.setState({
  //         inventories: response.data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }

  // // Get Video by Id
  // getVideoById(id) {
  //   axios
  //     .get(InvyApi)
  //     .then((response) => {
  //       this.setState({
  //         inventories: response.data
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }

  //Component Did Update
  // componentDidUpdate(prevProps, prevState) {
  //     const { id } = this.props.match.params;
  //     if (id) {
  //         if (prevState.inventories.id !== id) {
  //             this.getVideoById(id);
  //         }
  //     }
  // }
  // router.post('/', (req, res) => {

  //   const newInventoryItem = {
  //     itemName: 
  //   }
  // })

  render() {
    return (
      <div className="Inventory">
        <>
          <section className="Inventory-MainPage">
            <SearchInv />
            <Items ItemApi={this.state.myInventory} />
            {/* <InvApi/> */}
          </section>
        </>
      </div>
    );
  }
}

export default Inventory;