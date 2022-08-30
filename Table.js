

class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.lenght;
    }

    get ColumnCount(){
        return this.rows.lenght;
    }
}

module.exports = Table;