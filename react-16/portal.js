
class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.rootPortal = document.createElement('div');
  }

  componentWillMount() {
    this.rootPortal.id = 'portal';
    document.body.appendChild(this.rootPortal);
  }
  
  componentWilUnmount() {
    document.body.removeChild(this.rootPortal);
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    return ReactDOM.createPortal(
      this.props.children,
      this.rootPortal
    );
  }
}

const Modal = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <h2>Modal</h2>
    </div>
  );
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      modalShow: false,
    }
  }

  onClick = (event) => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
      modalShow: !currentState.modalShow,
    }));
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <h3>Box = {this.state.count}</h3>
        <div style={{border: '1px solid #000'}} >
          <Portal>
            <Modal show={this.state.modalShow} />
          </Portal>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <h1>React@16 - Portal</h1>
    <Box />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));