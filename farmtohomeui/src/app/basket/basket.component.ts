import { Component, OnInit } from '@angular/core';
import { Item } from '../item.entity';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.entity';

//all added for basket
@Component({
	templateUrl: 'basket.component.html'
})

export class BasketComponent implements OnInit {

	private items: Item[] = [];
	private total: number = 0;

	constructor(
    private activatedRoute: ActivatedRoute,
		private productService: ProductService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var productId = params['productId'];
			if (productId) {
				var item: Item = {
					product: this.productService.find(productId),
					quantity: 1
				};
				if (localStorage.getItem('basket') == null) {
					let basket: any = [];
					basket.push(JSON.stringify(item));
					localStorage.setItem('basket', JSON.stringify(basket));
				} else {
					let basket: any = JSON.parse(localStorage.getItem('basket'));
					let index: number = -1;
					for (var i = 0; i < basket.length; i++) {
						let item: Item = JSON.parse(basket[i]);
						if (item.product.productId == productId) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						basket.push(JSON.stringify(item));
						localStorage.setItem('basket', JSON.stringify(basket));
					} else {
						let item: Item = JSON.parse(basket[index]);
						item.quantity += 1;
						basket[index] = JSON.stringify(item);
						localStorage.setItem("basket", JSON.stringify(basket));
					}
				}
				this.loadBasket();
			} else {
				this.loadBasket();
			}
		});
	}

	loadBasket(): void {
		this.total = 0;
		this.items = [];
		let basket = JSON.parse(localStorage.getItem('basket'));
		for (var i = 0; i < basket.length; i++) {
			let item = JSON.parse(basket[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.unitPrice * item.quantity;
		}
	}

	remove(productId: number): void {
		let basket: any = JSON.parse(localStorage.getItem('basket'));
		let index: number = -1;
		for (var i = 0; i < basket.length; i++) {
			let item: Item = JSON.parse(basket[i]);
			if (item.product.productId == productId) {
				basket.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("basket", JSON.stringify(basket));
		this.loadBasket();
	}


}

