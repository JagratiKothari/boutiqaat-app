import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        return (
            <div className="ListItem">
                {
                    list.map((value) => {
                        return (
                            <div className="ItemSection">
                                <a><img className="image" src={value.img_url} /></a>
                                <div className="name">{value.celeb_name}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}

export default ListItem;
