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
import com.mastek.training.realfarmtohome.entities.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductApplicationTest {

	@Autowired
	ProductService prodService;

	@Autowired
	Product prod;

	@Before
	public void setup() {
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
	public void deleteProductUsingService() {
		prodService.deleteProduct(prod);
		assertNull(prodService.findByProductId(prod.getProductId()));
	}

	@Test
	public void checkFetchByProductName() {
		List<Product> prods = prodService.fetchProductByProductName("tatos");
		for (Product product : prods) {
			System.out.println(product);
		}
		assertEquals(prods.size(), 2);
	}
}
