class FautaoErrou extends React.Component {
  componentDidMount() {
    const audio = new Audio('faustao-errou.mp3');
    audio.play();
  }

  render() {
    return (
      <div>
        <img src="faustao-errou.jpg" />
      </div>
    )
  }
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return [
        "Something went wrong!",
        <FautaoErrou />
        ];
    }
    return this.props.children;
  }
}

// const names = ['Maria','Ana','Tamara'];
const names = { name1: 'Maria', name2: 'Ana', name3: 'Tamara' };

const renderChildHelloWorld = () => {
  try {
    return names.map(i => i);
  } catch (error) {
    return <span>Something went wrong!</span>;
  }
}

const HelloWorld = () => <div>{names}</div>;

class SumNumber extends React.Component {
  constructor(props) {
     super(props);
    
    this.state = {
      sum: 0,
    }
  }

  onClickSum = () => {
    this.setState((currentState) => ({ 
      sum: currentState.sum + 1,
    }));
  }
  
  render() {
    return (
    <div onClick={this.onClickSum}>
       Sum number: <span>{this.state.sum} {this.state.x}</span>
    </div>
    )
  }
}

class SumNumberWithErrorBoundary extends React.Component {
  constructor(props) {
     super(props);
    
    this.state = {
      sum: 0,
      catchError: null,
      catchInfo: null,
      x: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      catchError: error,
      catchInfo: info,
    })
  }

  onClickSum = () => {
    this.setState((currentState) => ({ 
      sum: currentState.sum + 1,
      x: {},
    }));
  }
  
  render() {
    if (this.state.catchError) {
      return "Something went wrong!";
    }

    return (
    <div onClick={this.onClickSum}>
       Sum number: <span>{this.state.sum} {this.state.x}</span>
    </div>
    )
  }
}

const App = () => (
   <div>
     <ErrorBoundary>
        <h1>Hello world</h1>
        <SumNumber />
        <HelloWorld />
      </ErrorBoundary>
   </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
