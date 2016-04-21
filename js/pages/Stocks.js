import React from 'react';
import Stock from './Stock';
import StockStore from '../stores/StockStore';
import * as StockActions from '../actions/StockActions';

export default class Stocks extends React.Component {

    constructor() {
        super();
        this.state = {
            stocks: StockStore.getStocks()
        };
    }

    addStock() {
        StockActions.addStock(Date.now(), Date.now());
    }

    componentWillMount() {
        StockStore.on("change", () => {
            this.setState({
                stocks: StockStore.getStocks()
            });
        });
    }

    getStocks(){
        return this.state.stocks.map(( {title, text}, i) => <Stock key={i} title={title} text={text}/>);
    }

    reloadStocks() {
        StockActions.reloadStocks();
    }

    render() {
        return (
            <div>
                <button onClick={this.addStock}>Add New Stock</button>
                <button onClick={this.reloadStocks}>Reload Stocks</button>
                <h1>Stock Name: {this.props.params.stockName}</h1>
                <div class="row">
                    {this.getStocks()}
                </div>
            </div>
        );
    }
}

