# Product

A product is an item that a merchant sells on the Anywhere Commerce platform. This resource consists of APIs related managing product inventory of a merchant such as variable and bundle items, product categories, location, and promotions; and also to fetch product details.

## Add Review

```html
https://www.martjack.com/developerapi/Product/AddReview/81e77da2-723b-483d-8c0d-49f800c1exxx/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx/PZLG-WM
```

> Sample Request

```json
{
	"title": "Title31",
	"message": "message75",
	"isGoLive": "True"
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Publishes customer review for a specific product. 


### Resource Information
| | |
--------- | ----------- |
URI | `Product/AddReview/{MerchantId}/{UserId}/{SKU}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/AddReview/{MerchantId}/{UserId}/{SKU}`



### Request Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Specify the merchant id for which the review has to be associated
UserId* | string | Specify the unique id of the customer that provided the review
SKU* | string  | Specify the product SKU for which the review has to be associated

### Request Attributes

Attribute | Description
-------- | ----------
title* | Specify the title of the product review as provided by the customer
message* | Specify the entire review content as entered by the customer
isGoLive* | 




## Update Location wise Stock

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateLocationWiseStock/f48fdd16-92db-4188-854d-1ecd9b62xxxx/18340
```

> Sample Response


```json
{
	"products": {
		"product": {
			"sku":"zara1234121",
			"variantsku":"",
			"stock":"10",
			"locationrefcode":"4702",
			"Quantity":"1",
			"MRP":"444",
			"WebPrice":"333",
			"TokenPrice":"222"
		},
		"product": {
			"sku":"sun1234121",
			"variantsku":"",
			"stock":"10",
			"locationrefcode":"48976",
			"Quantity":"2",
			"MRP":"200",
			"WebPrice":"190",
			"TokenPrice":"50"
		}
	}
  }

```

> Sample Response

```json
{
   "messageCode":"1018",
   "Message":"Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
   "Taskid":"2718751",
   "ErrorCode":0
}

```

Updates item stock and price of a specific location.

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/LocationWiseStock/{{MerchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes


### Request URL

`https://{host}/developerapi/Location/UpdateLocationWiseStock/{{MerchantId}}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
sku | string | SKU of the product of a specific location for which you want to update stock and price
variantsku | string | The variant SKU of the current item
stock | int | Number of available items of the current SKU. Specify NA if not applicable
locationrefcode | string | Location reference code of the current item (physical store or warehouse)
Quantity  | int | The quantity of the item for which you want to update the price
MRP  | float | Retail price of the item
WebPrice | float | Selling price of the item
TokenPrice | float | Minimum amount required for the customer to reserve the item and purchase later on


## Update Product Information

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateProductInfo	

```

> Sample POST Request

```json
{
    "Products":{
        "Product":
    {
        "SKU": "458636",
        "VariantSKU": "",
        "BrandID": "1756",
        "ProductTitle": "TiTle test",
        "Inventory": "2000",
        "MRP": "499",
        "Webprice": "499",
        "Availability": "Y",
        "BarCode":"TestBarcode111,testbarcode222"
    }

    }
 }
```


> Sample Response

```json
{
    "messageCode": "1018",
    "Message": "Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
    "Taskid": "2718747",
    "ErrorCode": 0
}
```

Lets you update product details.

### Resource Information
| | |
--------- | ----------- |
URI | `Product/UpdateProductInfo`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/UpdateProductInfo`

### Request Body Parameters
Parameter | Type | Description 
-------- | --------- | -----------
SKU* | string | Unique SKU of the product
VariantSKU* | string  | Unique SKU of the variant product.
VariantProperty | string | The property of the variant product such as size, color, and weight. *Required for Variant Product
VariantValue | string | The value of the specified property. *Required for Variant Product
BrandID* | string | Unique id of the brand to which you want to associate the product
ProductTitle* | string | New title of the product
ProductType* | string | Values: P, A, D, B. P for normal products, A for add-on products, D for deal product, and B for bundle product
CategoryRefCode | string | Reference code of the product category
Inventory | int |  The number of available products of the current SKU (stock)
MRP | float  | Retail price of the product
Webprice | float | Selling price of the product
Availability | string | Values: Y, N. Specify `Y` if the product is available and `N` if unavailable
BarCode | string | Bar code of the product



## Get Item (SKU) Price

> Sample Request

```html
https://www.martjack.com/developerapi/Product/GetReviews/81e77da2-723b-483d-8c0d-49f800c1exxx/PZLG-WM
```

> Sample POST Request

```json
{
  "sku": "TEQUILA11547BLK",
  "variantsku": "11547BLK",
  "usergroupid": 67,
  "locationrefcode": "",
  "channelrefcode": "string"
}
```


> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "CurrentPrice":[
      {
         "merchantid":"81e77da2-723b-483d-8c0d-49f800c1exxx",
         "sku":"100002587",
         "variantsku":"0",
         "usergroupname":null,
         "locationrefcode":"1001",
         "channelrefcode":null,
         "mrp":6402,
         "webprice":6401,
         "quantity":1,
         "tokenprice":0
      },
      {
         "merchantid":"f48fdd16-92db-4188-854d-1ecd9b62d066",
         "sku":"100002587",
         "variantsku":"0",
         "usergroupname":null,
         "locationrefcode":"Azmi Nagar",
         "channelrefcode":null,
         "mrp":6402,
         "webprice":6401,
         "quantity":1,
         "tokenprice":0
      }
   ]
}
```




Retrieves the price of a specific item

### Resource Information
| | |
--------- | ----------- |
URI | `Product/Price/{MerchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/Price/{MerchantId}`

### Request Body Parameters Information
Parameter | Datatype | Description 
--------- | -------- | -----------
sku* | string | SKU of the item
variantsku | string | SKU of the variant product (required for variant product)
usergroupid | int | Specify the user group id to associate the price list to a specific group
locationrefcode  |  string | Location/store code associated to the price list
channelrefcode | string  | Channel code to which the price list is associated








## Get Product Reviews

```html
https://www.martjack.com/developerapi/Product/GetReviews/81e77da2-723b-483d-8c0d-49f800c1exxx/PZLG-WM
```



> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Successful",
	"Reviews": [{
			"UserId": "0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx",
			"UserName": "Tom",
			"ProductTitle": "Capillary Men's Slim Fit Striped Collar Shirt",
			"ReviewTitle": "Special occasion wear",
			"ReviewDescription": "Looks semi-formal as per my liking. The shirt is very comfortable and feels really nice for both as a casual wear or occasional wear.",
			"CreatedDateTime": "10/9/2018 5:46:25 AM",
			"Rating": 1,
			"IsGoLive": "True"
		},
		{
			"UserId": "0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx",
			"UserName": "James",
			"ProductTitle": "Capillary Men's Slim Fit Striped Collar Shirt",
			"ReviewTitle": "Nice material and comfortable wear",
			"ReviewDescription": "Beautiful color, and material. A very well made shirt",
			"CreatedDateTime": "10/9/2018 12:44:00 AM",
			"Rating": 1,
			"IsGoLive": "False"
		}
	]
}
```

Retrieves the user reviews of a specific product. 

### Resource Information
| | |
--------- | ----------- |
URI | `Product/GetReviews/{MerchantId}/{Sku10_ProductId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/GetReviews/{MerchantId}/{Sku10_ProductId}`


