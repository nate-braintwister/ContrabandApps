const Nav = React.createClass({
  render: () => {
    return (
        <nav>
          <ul>
            <li><a>Item</a></li>
            <li><a>Item</a></li>
            <li><a>Item</a></li>
            <li><a>Item</a></li>
          </ul>
        </nav>
    );
  }
});

ReactDOM.render(
  <Nav/>
);
