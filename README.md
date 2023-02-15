## Usage : Categories

### GET /category/readAll

- To fetch all categories

### GET /category/read/:categoryID

- To fetch a category by categoryID

### POST /category/create

- To add a new category

```yaml
{
    categoryName: "Electronics"
}
```

### PUT /category/update/:categoryID

- To update a category

```yaml
{
    categorytName: "Mobile Gadgets"
}
```

### DELETE /delete/:categoryID

- To remove a category

## Usage : Products

### GET /product/readAll

- To fetch all products

### GET /product/read/:productID

- To fetch a product by productID

### POST /product/create

- To add a new product

```yaml
{
    productName: "IPhone 13 Mini",
    qtyPerUnit: "1",
    unitPrice: "40000",
    unitInStock: "10",
    discontinued: false,
    categoryID: "demo123" 
}
```

### PUT /product/update/:productID

- To update a product

```yaml
{
    productName: "Apple IPhone 13 Mini",
    qtyPerUnit: "1",
    unitPrice: "350000",
    unitInStock: "0",
    discontinued: true,
    categoryID: "demo123"
}
```

### DELETE /product/delete/:productID

- To remove a product