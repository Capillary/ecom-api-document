# Product Tags

Product tags are a way of organizing or relating products on the Capillary Anywhere Commerce platform. ProductTags provide APIs to access and manage product tags of a merchant.


## Get Product Tags

Retrieves all the product tags of the merchant.






> Sample Request

```html
https://www.martjack.com/developerapi/ProductTags/f48fdd16-92db-4188-854d-1ecd9b62d066

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductTags": [
        {
            "Tag": "Best-deals",
            "TagDescription": "Best deals",
            "CreateDate": "/Date(1482299299000+0530)/"
        },
        {
            "Tag": "Best-Offers",
            "TagDescription": "Best Offers",
            "CreateDate": "/Date(1482299299000+0530)/"
        }
]
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/ProductTags/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/ProductTags/{MerchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant



<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Get Tag Details

Retrieves the details of a specific product tag.






> Sample Request

```html
https://www.martjack.com/developerapi/ProductTags/f48fdd16-92db-4188-854d-1ecd9b62d066/Featured

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductTags": [
        {
            "Tag": "Featured",
            "TagDescription": "Featured",
            "CreateDate": "/Date(-2208988800000)/"
        }
    ],
    "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/ProductTags/{MerchantId}/{ProductTag}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/ProductTags/{MerchantId}/{ProductTag}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
ProductTag* | string | Specify the product tag that you want to fetch


<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Get Tag Count

Retrieves the count of product tags configured for the merchant.







> Sample Request

```html
https://www.martjack.com/developerapi/ProductTags/f48fdd16-92db-4188-854d-1ecd9b62d066/count

```




> Sample Response

```json

{
    "Count": 50,
    "Message": "Successful",
    "messageCode": "1004"
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `ProductTags/{MerchantId}/count`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/ProductTags/{MerchantId}/count`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant



<aside class="notice"> All parameters marked by * are mandatory. </aside>





	