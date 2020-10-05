import React from "react";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { InputField, Button, TextArea } from "./components/Form";
import "./styles/base.scss";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: {
        nama: "",
        fakultas: "",
        jurusan: "",
        id_line: "",
        cerita: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (e) => {
    let name = e.target.name;
    let data = this.state.data;
    data[name] = e.target.value;
    this.setState({ data });
  };

  onSubmit(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="form-container">
          <InputField
            hasLabel={true}
            label="nama"
            inputType="text"
            name="nama"
            handleChange={this.handleChange}
            value={this.state.data.nama}
          />
          <TextArea
            hasLabel={true}
            label={"Ceritamu"}
            value={this.state.data.cerita}
            name="cerita"
            handleChange={this.handleChange}
          />
          <Button
            onClick={this.onSubmit}
            text={"Kirimkan Ceritamu"}
            onClickParams={"Clicked"}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
