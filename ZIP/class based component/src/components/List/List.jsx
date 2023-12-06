import { Component } from "react";
import ShowClContext from "../context/show-cl-context";

class List extends Component {
  constructor() {
    super();
    this.state = {
      text: "class based",
    };
    // this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    console.log("Componet mounted");
  }

  // useEffect(()=>{
  //   console.log("componet mounted");
  // },[])

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text === "class based") {
      console.log("Component updated");
    }
  }

  // useEffect(()=>{
  //   if (text === "class based") {
  //     console.log("Component updated");
  //   }
  // },[text])

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  // useEffect(()=>{
  //   logika.....
  //   return ()=>{
  //     console.log("Component unmounted");
  //   }
  // },[text])

  changeText = () => {
    if (this.state.text === "class based") {
      this.setState({ text: "functional" });
    } else {
      this.setState({ text: "class based" });
    }
  };
  render() {
    const { number } = this.props;
    return (
      <ShowClContext.Consumer>
        {(ctx) => {
          return (
            <>
              <h1>now : {number}</h1>
              <p>I'm {this.state.text} component</p>
              <button onClick={this.changeText}>on Toggle</button>
              <button onClick={ctx.onToggle}>hide or show 2</button>
            </>
          );
        }}
      </ShowClContext.Consumer>
    );
  }
}

export default List;
