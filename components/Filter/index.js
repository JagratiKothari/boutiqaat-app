import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange(key) {
        const { searchData } = this.props;
        this.setState( { value: key.target.value});
            searchData(key.target.value);
    }

    render() {
        return (
            <div className="filterSection">
                <div className="subHeading">Celebrities</div>
                <div className="filterInput"><input className="inputBox" onChange={this.handleChange.bind(this)} value={this.state.value} type="text"/></div>
            </div>
        );
    }

}

export default Filter;
