import React, { Component } from 'react';
import data from './data';

class SearchForm extends React.Component {
    state = {
        item: null,
        located: false,
        count: 0
    };

    componentDidMount() {
        const sortedData = data.sort();
        this.setState({sortedData})
    }

    linearSearch(arr, item) {
        console.log(arr);
        let counter = 0;
        for(let i = 0; i < arr.length; i++) {
            counter++;
            if(arr[i] === item) {
                return{
                    item, located: true, counter
                };
            }
        }
        return {item, located: false, counter}
    };

}