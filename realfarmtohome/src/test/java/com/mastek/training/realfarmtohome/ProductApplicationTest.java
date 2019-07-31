package com.mastek.training.realfarmtohome;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mastek.training.realfarmtohome.apis.ProductService;
import com.mastek.training.realfarmtohome.entities.OrderItem;
import com.mastek.training.realfarmtohome.entities.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductApplicationTest {

	@Autowired
	ProductService prodService;

	//@Autowired
	Product prod;

	@Before
	public void setup() {
		prod = new Product();
		prod.setProductName("blaaa");
		prod.setDescription("this is blaaaaa");
		prod.setProductType("Blaaaa");
		prod.setUnitPrice(2);
		prod = prodService.registerOrUpdateProduct(prod);
	}

	@Test
	public void addProductUsingService() {
//		prod.setProductId(0);
		prod.setProductName("blaaa");
		prod.setDescription("this is blaaaaa");
		prod.setProductType("Blaaaa");
		prod.setUnitPrice(2);
		prod = prodService.registerOrUpdateProduct(prod);
		assertNotNull(prod);
	}

	@Test
	public void findByProductIdUsingService() {
		assertNotNull(prodService.findByProductId(prod.getProductId()));
	}

	@Test
	public void deleteByProductIdUsingService() {
		prodService.deleteByProductId(prod.getProductId());
		assertNull(prodService.findByProductId(prod.getProductId()));
	}

	@Test
	public void manageProductassocaitions() {

		Product p1 = new Product();
		p1.setProductName("blaaa");
		p1.setDescription("association");
		p1.setProductType("association");
		p1.setUnitPrice(2);

		OrderItem i1 = new OrderItem();

		OrderItem i2 = new OrderItem();

		p1.getManyorderitems().add(i1);
		p1.getManyorderitems().add(i2);

		i1.setCurrentProduct(p1);
		i2.setCurrentProduct(p1);

		prodService.registerOrUpdateProduct(p1);


	}

	@Test
	public void deleteProductUsingService() {
		prodService.deleteProduct(prod);
		assertNull(prodService.findByProductId(prod.getProductId()));
	}

	@Test
	public void checkFetchByProductName() {
		List<Product> prods = prodService.fetchProductByProductName("Potatos");
		for (Product product : prods) {
			System.out.println(product);
		}
		assertEquals(14,prods.size());
	}
}
