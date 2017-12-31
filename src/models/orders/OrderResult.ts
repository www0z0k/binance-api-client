import { OrderStatus } from "../../enums/OrderStatus";
import { TimeInForce } from "../../enums/TimeInForce";
import { OrderType } from "../../enums/OrderType";
import { OrderSide } from "../../enums/OrderSide";

export class OrderResult {

    private _symbol: string;
    private _orderId: number;
    private _clientOrderId: string;
    private _timestamp: Date;
    private _price: number;
    private _originalQuantity: number;
    private _executedQuantity: number;
    private _status: OrderStatus;
    private _timeInForce: TimeInForce;
    private _type: OrderType;
    private _side: OrderSide;

    constructor( json: any ) {

        this._symbol = json.symbol;
        this._orderId = json._orderId;
        this._clientOrderId = json._clientOrderId;
        this._timestamp = new Date( json.transactTime );
        this._price = json.price;
        this._originalQuantity = json.origQty;
        this._executedQuantity = json.executedQty;
        this._status = OrderStatus[ json.status as string ];
        this._timeInForce = TimeInForce[ json._timeInForce as string ];
        this._type = OrderType[ json.type as string ];
        this._side = OrderSide[ json._side as string ];

    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol( value: string ) {
        this._symbol = value;
    }

    get orderId(): number {
        return this._orderId;
    }

    set orderId( value: number ) {
        this._orderId = value;
    }

    get clientOrderId(): string {
        return this._clientOrderId;
    }

    set clientOrderId( value: string ) {
        this._clientOrderId = value;
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    set timestamp( value: Date ) {
        this._timestamp = value;
    }

    get price(): number {
        return this._price;
    }

    set price( value: number ) {
        this._price = value;
    }

    get originalQuantity(): number {
        return this._originalQuantity;
    }

    set originalQuantity( value: number ) {
        this._originalQuantity = value;
    }

    get executedQuantity(): number {
        return this._executedQuantity;
    }

    set executedQuantity( value: number ) {
        this._executedQuantity = value;
    }

    get status(): OrderStatus {
        return this._status;
    }

    set status( value: OrderStatus ) {
        this._status = value;
    }

    get timeInForce(): TimeInForce {
        return this._timeInForce;
    }

    set timeInForce( value: TimeInForce ) {
        this._timeInForce = value;
    }

    get type(): OrderType {
        return this._type;
    }

    set type( value: OrderType ) {
        this._type = value;
    }

    get side(): OrderSide {
        return this._side;
    }

    set side( value: OrderSide ) {
        this._side = value;
    }

}