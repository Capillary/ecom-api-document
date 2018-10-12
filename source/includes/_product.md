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
	"isGoLive": True
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

Parameter | Description
-------- | -----------
MerchantId* | Specify the merchant id for which the review has to be associated
UserId* | Specify the unique id of the customer that provided the review
SKU* | Specify the product SKU for which the review has to be associated

### Request Attributes

Attribute | Description
-------- | ----------
title* | Specify the title of the product review as provided by the customer
message* | Specify the entire review content as entered by the customer
isGoLive* | 





## Get Reviews of a Product

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


