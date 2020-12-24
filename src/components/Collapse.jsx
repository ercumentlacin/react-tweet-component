import React from "react";

class Collapse extends React.Component {
  state = { showContent: false };

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="m-3 text-center" onClick={this.showMore}>
        <button className="btn btn-primary w-100">
          {/* this.props.children.props.cardTitle */}
          {React.Children.map(
            this.props.children,
            children => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show">
            {/*this.props.children*/}
            {React.Children.map(this.props.children, children => children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
