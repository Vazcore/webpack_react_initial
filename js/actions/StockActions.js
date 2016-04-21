import dispatcher from '../dispatcher';

export function addStock(title, text) {
    dispatcher.dispatch(
        {type: "ADD_STOCK", title, text}
    );
}

export function reloadStocks() {
    dispatcher.dispatch({type: "BEFORE_FETCHING_STOCKS"});

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RELOAD_STOCKS",
            stocks: [
                {id: 12121212, title: "Messing around", text: "sdsdsdsdsdsdsd"},
                {id: 1212333, title: "Loco", text: "sdsdsdsdsdsdsd22"}
            ]
        });
    }, 2000);
}