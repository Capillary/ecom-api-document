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


## Delete Product Slab

Deletes the slab of the product in the pricelist.

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
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
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



## Get Pricelist

Retrieves all locations for which pricelist is configured.







> Sample Request

```html
https://www.martjack.com/developerapi/Pricelist/9820eca5-d11f-4df1-9b20-983a45ea9631

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "PriceListDetails": [
    {
      "Id": 2498,
      "Name": "India",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17038,
      "CreatedDate": "/Date(1469171538000+0530)/",
      "Status": true,
      "ReferenceCode": "IND"
    },
    {
      "Id": 2500,
      "Name": "International",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17036,
      "CreatedDate": "/Date(1469171604000+0530)/",
      "Status": true,
      "ReferenceCode": "INTL"
    },
    {
      "Id": 2878,
      "Name": "India",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17038,
      "CreatedDate": "/Date(1493272531000+0530)/",
      "Status": true,
      "ReferenceCode": "INDFK"
    },
    {
      "Id": 2890,
      "Name": "India",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17038,
      "CreatedDate": "/Date(1493368445000+0530)/",
      "Status": true,
      "ReferenceCode": "IndiaFK"
    },
    {
      "Id": 2900,
      "Name": "Telangana",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 18692,
      "CreatedDate": "/Date(1494482769000+0530)/",
      "Status": false,
      "ReferenceCode": "Test111"
    },
    {
      "Id": 2912,
      "Name": "TestP",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17038,
      "CreatedDate": "/Date(1495716987000+0530)/",
      "Status": true,
      "ReferenceCode": "TEtst"
    },
    {
      "Id": 3108,
      "Name": "Delhi",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 16696,
      "CreatedDate": "/Date(1509702432000+0530)/",
      "Status": true,
      "ReferenceCode": "delhi"
    },
    {
      "Id": 3673,
      "Name": "bang",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 0,
      "LocationId": 17430,
      "CreatedDate": "/Date(1547027898000+0530)/",
      "Status": true,
      "ReferenceCode": "bang001"
    },
    {
      "Id": 3757,
      "Name": "bang",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserGroupId": 8496,
      "LocationId": 17430,
      "CreatedDate": "/Date(1549448228000+0530)/",
      "Status": true,
      "ReferenceCode": "bang002"
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Pricelist/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Pricelist/{merchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant for which you want to fetch available price lists


### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
Id | int | Unique pricelist id
Name | string | Name  of the location
LocationId | int | Unique id of the location
CreatedDate | date | Date when the price list is created
Status | enum | Current status of the price list. Value: `true` for Active and `false` for inactive
ReferenceCode | string | Unique location reference code





