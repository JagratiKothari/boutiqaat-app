import React from 'react';
import Filter from "../Filter";
import ListItem from "../ListItem";
import data from "../../data";
import AlphabeticalFilter from "../AlphabeticalFilter";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(JSON.stringify(data))
        };
        this.searchData = this.searchData.bind(this);
        this.filterByAlphabets = this.filterByAlphabets.bind(this);
    }

    searchData(key) {
        const currentItems = JSON.parse(JSON.stringify(data));
        if(key) {

            let filteredItems = this.state.data.list.filter((value) => {
                    return value.celeb_name.toLowerCase().includes(key.toLowerCase());
                });
            if(filteredItems.length) {
                this.setState({
                    data: {
                        list: filteredItems
                    }
                });
            } else {
                this.setState({
                    data: currentItems
                });
            }
            console.log(this.state.data);
        } else {
            this.setState({
                data : currentItems
                }
            );
        }

    }


    filterByAlphabets(val) {
        const currentItems = JSON.parse(JSON.stringify(data));
        if(val) {

            let filteredItems = currentItems.list.filter((value) => {
                return value.celeb_name.toUpperCase().startsWith(val);
            });
            if (filteredItems.length) {
                this.setState({
                    data: {
                        list: filteredItems
                    }
                });
            } else {
                this.setState({
                    data: currentItems
                });
            }
        } else {
                this.setState({
                        data : currentItems
                    }
                );
            }

    }


    render() {
        return (
            <div className="container">
                <Filter searchData={this.searchData}/>
                <AlphabeticalFilter filterByAlphabets={this.filterByAlphabets}/>
                <ListItem list={this.state.data.list}/>
            </div>
        );
    }

}

export default Gallery;
