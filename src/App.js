import React from "react";
import "./App.css";
import FormInput from "./component/inputForm/formInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      birdDay: "",
      password: "",
      confirmPassword: "",
    };
  }

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  render() {
    const input = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessege:
          "Username harus 8-12 karakter dan harus mengandung angka didalamnya tanpa huruf besar",
        label: "Username",
        pattern: "^[a-z0-9]{8,12}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessege: "harus menggunakan gmail",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "birdDay",
        type: "date",
        placeholder: "BirdDay",
        errorMessege: "bocil gak boleh daftar",
        label: "BirdDay",
      },
      {
        id: 4,
        name: "password",
        type: "text",
        placeholder: "Password",
        errorMessege:
          "password harus mengandung 6-18 karakter dan 1 angka didalamnya dan 1 huruf besar",
        label: "Password",
        pattern: "^[A-Za-z0-9]{6,18}$",
        required: true,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "text",
        placeholder: "Confirm Password",
        errorMessege: "password tidak sama",
        label: "Confirm Password",
        pattern: this.state.password,
        required: true,
      },
    ];
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          {input.map((data) => (
            <FormInput
              key={data.id}
              {...data}
              value={this.state[data.name]}
              onChange={this.onChange}
            />
          ))}

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
