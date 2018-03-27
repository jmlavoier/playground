
const Name = () => "João Lavoier" || 2018;


const OtherColumns = () => (
  <React.Fragment> 
    <td>Likes</td>
    <td>Points</td>
  </React.Fragment>
);

const Table = () => (
  <table>
    <tbody>
      <tr>
        <td>id</td>
        <td>name</td>
        <OtherColumns />
      </tr>
    </tbody>
  </table>
);

const App = () => (
  <div>
    <h1>React@16 - Fragments</h1>
    <Table />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));