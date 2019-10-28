import React, { Component } from "react"; // let's also import Component
import Axios from "axios";

type ListState = {
  list: [];
  asd: "";
};

export class ListCT extends Component<{}, ListState> {
  componentDidMount() {
    Axios.get("https://localhost:44382/api/Ogrenci").then(res => {
      //Apiden Gelen data burada 
      console.log(res);
      this.setState({ list: res.data });
      console.log(this.state.list)
    });
    
  }

  render() {
    return null;
  }
}
