# Category

Category is a group used to organize products. Products are categorized in a tree structure based on any parameters such as product types.




## Get Category Information

Retrieves the details of a specific category.

> Sample Request

```html
https://www.martjack.com/developerapi/Category/Information/98d18d82-ba59-4957-9c92-3f89207a34f6/CU00216534
```


> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "Category": {
        "CategoryId": "CU00216534",
        "CategoryName": "Desserts",
        "ParentCategoryId": "CU00216530",
        "Lineage": "/CU00216530/CU00216534/",
        "Depth": 1,
        "IsLeaf": true,
        "ReferenceCode": "CU00216534",
        "ProductCount": 2
    },
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Category/Information/{MerchantId}/{CategoryId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Category/Information/{MerchantId}/{CategoryId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
CategoryId* | string | Unique id of the category for which you want to fetch details

<aside class="notice">All parameters marked by * are mandatory. </aside>
