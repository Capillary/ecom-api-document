# Shopping List

Shopping list is a wish list or favorite list of a customer. This resource consists of APIs to add and manage a customer's wish list.


## Add Shopping List
> Sample Request

```html
https://www.martjack.com/developerapi/ShoppingList/add/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "ShoppingList":{
      "UserId":"f4473f55-b6b0-4a4c-8ffa-fc1010abbb1f",
      "ShoppingListName":"AWS1",
      "privacyLevel":"Private",
      "refCode":"123456"
     
   }
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

Creates a shopping list for a specific customer. This just creates a shopping list bucket and does not include any items in it. Use `/ShoppingList/list` to add items.

### Resource Information
|  |  |
--------- | ----------- |
URI | `ShoppingList/add/{{MerchantId}}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/ShoppingList/add/{{MerchantId}}`

### Request Parameters
Parameter | Description
--------- | -----------
UserId* | The unique user identifier of the customer whose wish list details need to be added
ShoppingListName* | Specify a name for the current wish list
privacyLevel | Specify whether to make the wish list public to make it to everyone or private to make it visible only for you (Value: `Pr`, `Pu`). Default value: `Pr`
refCode | Specify a reference code for your wish list. It is a free flowing text and accepts any string that you pass

<aside class="notice"> All parameters marked by * are mandatory.</aside>





## Get Shopping List Details

> Sample Request

```html
https://www.martjack.com/developerapi/ShoppingList/81e77da2-723b-483d-8c0d-49f800c1exxx/f4473f55-b6b0-4a4c-8ffa-fc1010abxxxx/43700/true
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ShoppingList": [
        {
            "ShoppingListId": 43787,
            "ShoppingListName": "AWS1",
            "PrivacyLevel": "Pr",
            "UserId": "f4473f55-b6b0-4a4c-8ffa-fc1010abxxxx",
            "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
            "CreatedDate": "/Date(1535913000000+0530)/",
            "ModifiedDate": "/Date(1535913000000+0530)/",
            "UserGroupId": 0,
            "AllowUserToAddItems": true,
            "DisplayinMyAccount": true,
            "CreatedBy": 1,
            "RefCode": "0"
        },
        {
            "ShoppingListId": 31852,
            "ShoppingListName": "MyWishList",
            "PrivacyLevel": "Pr",
            "UserId": "00000000-0000-0000-0000-000000000000",
            "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
            "CreatedDate": "/Date(1457461800000+0530)/",
            "ModifiedDate": "/Date(1457461800000+0530)/",
            "UserGroupId": 0,
            "AllowUserToAddItems": true,
            "DisplayinMyAccount": true,
            "CreatedBy": 0,
            "RefCode": "0"
        }
    ],
    "ErrorCode": 0
}
```

Retrieves the details of a specific wish list of a customer.


### Resource Information
|  |  |
--------- | ----------- |
URI | `ShoppingList/{{MerchantId}}/UserId/{shopping list id}/true`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/ShoppingList/add/{{MerchantId}}/{UserId}/{shoppinglistId}/{get default wish list - true/false}`


### Request Parameters
Parameter | Description
--------- | -----------
MerchantId* | The unique id (GUID) of the merchant account from which you want to fetch customer's wish list 
UserId* | The unique user identifier of the customer whose details need to be retrieved
shoppinglistId | The shopping list id that you want to fetch
GetDefaultWishlist | Specify `true` to retrieve even the default wish list along with customer's (merchant level), `false` to retrieve only the customer's wish list

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
UserGroupId | int | Unique user group id associated to the user
AllowUserToAddItems | boolean | Whether the user is allowed to add products to the shopping lsit
DisplayinMyAccount | boolean | Whether the shopping list is shown to the end-user 
CreatedBy | int | The value is `1` for the created the shopping list and `0` for merchant has created the shopping list 
RefCode | string | Unique reference code of the specific shopping list







## Add Items to a Shopping List

> Sample Request

```html
https://www.martjack.com/developerapi/ShoppingList/items/add/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "ShoppingListView":{
      "UserId":"f4473f55-b6b0-4a4c-8ffa-fc1010abxxxx",
      "merchantId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
      "Item":{
         "ShoppingListId":"0",
         "ProductId":"12688208",
         "VarProductId":"9727843",
         "Quantity":"1",
         "IsSelected":"False",
         "Status":"A"
      }
   }
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

Adds items to an existing wish list of a customer

### Resource Information
|  |  |
--------- | ----------- |
URI | `ShoppingList/items/add/{{MerchantId}}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/developerapi/ShoppingList/items/add/{{MerchantId}}`

### Request Body Parameters

Parameter | Description
--------- | -----------
UserId* | The unique user identifier of the customer whose wish list details need to be added
merchantId* | The unique id (GUID) of the merchant account in which the customer's wish list is created
ShoppingListId* | Specify a name for the current wish list
ProductId | The unique product id that you want to add to the wish list
VarProductId | The unique variant product id (if applicable) 
Quantity | The quantity of the item that you want to add to the wish list
IsSelected | Value: true/false

<aside class="notice"> All parameters marked by * are mandatory.</aside>







## Get Shopping List Items 
> Sample Request

```html
https://www.martjack.com/developerapi/ShoppingList/items/81e77da2-723b-483d-8c0d-49f800c1exxx/2345/f4473f55-b6b0-4a4c-8ffa-fc1010abxxxx
```

> Sample Response

```json
{
    "ShoppingListItems": [
        {
            "ProductId": 12688208,
            "VariantProductID": "9727843",
            "ShoppingListId": 31852,
            "ShoppingListItemId": 47465921,
            "Quantity": 1,
            "IsSelected": "False",
            "Items": []
        }
    ],
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Retrieves items of a specific wish list

### Resource Information
| |  |
--------- | ----------- |
URI | `/ShoppingList/Items/{merchantId}/{shoppingListId}/{userId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/ShoppingList/Items/{merchantId}/{shoppingListId}/{userId}`


### Request Parameters
Parameter | Description
--------- | -----------
MerchantId* | The unique id (GUID) of the merchant account from which you want to fetch customer's wish list 
UserId* | The unique user identifier of the customer whose shopping list items need to be retrieved
shoppinglistId | The shopping list id that you want to fetch

<aside class="notice"> All parameters marked by * are mandatory.</aside>



