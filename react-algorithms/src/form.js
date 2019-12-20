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

    handleSubmit(e) {
        e.preventDefault();

        const input = parseInt(e.target.num.value);
        const searchBy = e.target.searchBy.value;

        if(searchBy === 'linear') {
            this.setState(this.linearSearch(data, input));
        }
        if(searchBy === 'binary') {
            const sortedData = data.sort((a, b) => a-b);
            this.setState(this.binarySearch(data, input));
        }
    }

    linearSearch(arr, input) {
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
    binarySearch(arr, input, start=0, end=arr.length - 1, counter=0) {
        counter++;
        it(start>end) {
            return{input, located: false, counter};
    }
    const index= Math.floor((start+end)/2);
    const num = arr[i];

    if(input === num) {
        return{input, located: true, counter};
    } else if (input > num) {
        return this.binarySearch(arr, input, index+1, end, counter);
    } else if (input < num) {
        return this.binarySearch(arr, input, start, index-1, counter);
    }
}

    render() {
        return (
            <div className='searchForm'>
                <form onSbumit={(e) => this.handleSubmit(e)}
                > 
                    <input type='text' name='input' id='input' onChange = 
                </form>
            </div>

        )
    }