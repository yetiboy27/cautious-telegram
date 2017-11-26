import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
    selector: 'auction-featured-page',
    templateUrl: 'app/components/featured/featured.html'
})
export default class FeaturedComponent {
    @Input() product: Product;
}