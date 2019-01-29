# Pricelist

## Update Pricelist

> Sample Request

```html
https://www.martjack.com/developerapi/Pricelist/f48fdd16-92db-4188-854d-1ecd9b62xxxx/ABC/upload

```

> Sample POST Request

```json
MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={  
   "pricelistitems":{  
      "pricelistiem":{  
         "sku":"zara1234121",
         "variantsku":"",
         "Quantity":"1",
         "MRP":"444",
         "WebPrice":"333",
         "TokenPrice":"222"
      },
      "product":{  
         "sku":"sun1234121",
         "variantsku":"",
         "Qty":"2",
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


Updates price of a SKU or variant SKU in a particular price list.

### Resource Information
| | |
--------- | ----------- |
URI | `Product/Pricelist/{MerchantId}/{PricelistRefCode}/upload`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Pricelist/{MerchantId}/{PricelistRefCode}/upload`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
sku* | string |	SKU of the product of a specific location for which you want to update stock and price
variantsku | string |	The variant SKU of the current item
Qty* | int | The quantity of the item for which you want to update the price
MRP* | float | Retail price of the item
WebPrice | float | Selling price of the item
TokenPrice | float | Minimum amount required for the customer to reserve the item and purchase later on

<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Delete Products

Deletes the slab of products in the pricelist.

> Sample Request

```html
https://www.martjack.com/developerapi/Details/Delete/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx/3456
```

> Sample POST Request (Raw)

```json
productId=14149215&quantity=7
```

> Sample POST Request (x-www-form-urlencoded Payload)

```json
MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={
"productId":14149215,
"quantity":7
}



> Sample Response

```json

```

### Resource Information
| | |
--------- | ----------- |
URI | `Product/Pricelist/Details/Delete/{MerchantId}/{PricelistRefCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Pricelist/Details/Delete/{MerchantId}/{PricelistRefCode}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | Unique GUID of the merchant
PricelistRefCode* | string | Unique reference code of the pricelist

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
productid* | int | Unique id of the product that you want to delete
quantity* | int | Quantity of items that you want to delete