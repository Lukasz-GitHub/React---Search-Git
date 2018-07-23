'use strict';

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
    minHeight: '310px',
    margin: '0.5em'
};

Gif = React.createClass({
    getURL: function() {
        return this.props.sourceURL || GIPHY_LOADING_URL;
    },
    render: function() {
        var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
        
        return (
            <div style={styles}>
                <a href={this.getURL()} title='viev this on giphy' target='new'>
                </a>
            </div>
        );
    }
});