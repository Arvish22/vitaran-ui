import { ProductCategory } from './product-category';
import { Store } from './store';

export class Product {

    public id : number;
	public name : string;
	public discrition : string;
    public  brand : string;
    public store : Store;
    public productCategory : ProductCategory;
    
    constructor(options: Partial<Product>) {
        Object.assign(this, options);
    }
}
