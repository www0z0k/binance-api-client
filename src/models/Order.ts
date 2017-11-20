export class Order {

    private _price: number;
    private _quantity: number;

    constructor( json: any ) {
        this._price = json[ 0 ];
        this._quantity = json[ 1 ];
    }

    get price(): number {
        return this._price;
    }

    set price( value: number ) {
        this._price = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity( value: number ) {
        this._quantity = value;
    }

}