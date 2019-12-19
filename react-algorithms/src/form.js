import React, { Component } from 'react';
import data from './data';
import { render } from '@testing-library/react';

class SearchForm extends React.Component {
    state = {
        input: null,
        located: false,
        count: 0
    };

    componentDidMount() {
        const sortedData = data.sort();
        this.setState({sortedData})
    }

    linearSearch(arr, num) {
        console.log(arr);
        let counter = 0;
        for(let i = 0; i < arr.length; i++) {
            counter++;
            if(arr[i] === input) {
                return{
                    input, located: true, counter
                };
            }
        }
        return {input, located: false, counter}
    };

}
    binarySearch(arr, item, start=0, end=arr.length - 1, counter=0) {
        counter++;
        it(start>end) {
            return{input, located: false, counter};
    }
    const index= Math.floor((start+end)/2);
    const item = arr[i];

    console.log('index:' + index);
    console.log('item:'+ item);

    if(input === num) {
        return{input, located: true, counter};
    } else if (input > item) {
        return this.binarySearch(arr, input, index+1, end, counter);
    } else if (input < item) {
        return this.binarySearch(arr, inpute, start, index-1, counter);
    }
}

    render() {
        return (
            
        )
    }