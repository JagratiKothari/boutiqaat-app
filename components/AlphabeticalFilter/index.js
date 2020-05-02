import React from 'react';

class AlphabeticalFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleClick(key) {
        const { filterByAlphabets } = this.props;
        if(key.target.innerText =="All Celebrities"){
            filterByAlphabets("");
        } else {
            filterByAlphabets(key.target.innerText);
        }
    }

    render() {
        let arr =[];
        for(let i=1; i<27; i++) {
            arr.push(String.fromCharCode(64 + i));
        }
        return (
            <div className="alphabeticalFilterSection">
                <div className="allCelebrityFilter" onClick={this.handleClick.bind(this)}>All Celebrities</div>
                <div className="filterSection">{
                    arr.map((value) => {
                        return <div className="alphabets" onClick={this.handleClick.bind(this)}>{value}</div>
                    })

                }</div>
            </div>
        );
    }

}

export default AlphabeticalFilter;
