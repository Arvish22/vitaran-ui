export class Product {

    public id : number;
	public name : string;
	public discrition : string;
    public  brand : string;
    
    constructor(options: Partial<Product>) {
        Object.assign(this, options);
    }
}
