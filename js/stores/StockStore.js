import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class StockStore extends EventEmitter {

    constructor() {
        super();
        this.stocks = [
            {title: "Stock 1", text: "Amazing stock", id: "23232323"}
        ];
    }

    getStocks() {
        return this.stocks;
    }

    addStock(title, text) {
        const id = Date.now();
        const stock = {id, title, text};
        this.stocks.push(stock);

        this.emit('change');
    }

    reloadStocks(stocks) {
        this.stocks = stocks;
        this.emit('change');
    }

    handleActions(action) {
        console.log("New Event - ", action.type);
        switch (action.type) {
            case "ADD_STOCK": {
                this.addStock(action.title, action.text);
                break;
            }
            case "RELOAD_STOCKS": {
                this.reloadStocks(action.stocks);
                break;
            }
        }
    }

}

const stockStore = new StockStore;

dispatcher.register(stockStore.handleActions.bind(stockStore));

window.addStock = stockStore.addStock.bind(stockStore);
window.disptacher = dispatcher;

export default stockStore;