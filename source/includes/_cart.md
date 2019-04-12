# Carts
Cart keeps the record of the items that a customer selects from the merchant store to buy. The `carts` resource provides APIs to make modifications to the cart items, shipping modes, coupons; and retrieve cart items, shipping modes, payment options, and online payment types.



## Send OTP

> Sample Request

```html
https://www.martjack.com/developerapi/carts/V2/SendOTP/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "customer": {
    "UserName": "tom.sawyer@example.com",
    "merchantId": "81e77da2-723b-483d-8c0d-49f800c1exxx",
    "MobileNo": "917000000000"
  }
}
```

> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "OTPToken":"x2yiqjhjhoqulghae2wtp4u2",
   "ErrorCode":0,
   "IsEmailSentToAlternateEmail":"True"
}
```

Sends OTP to the specified mobile number or email id.


### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/V2/SendOTP/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/V2/SendOTP/{MerchantId}`



### Additional Header

Header | Description
------ | ------
APISessionRequired* | Pass `true` to not see OTP in the response. If not passed, you will see OTP sent to the customer in the response

### Request Parameters
Parameter | Description
--------- | -----------
UserName* | Username of the customer's account (mobile number or email id)
merchantId* | The unique id (GUID) of the merchant associated to the customer account
MobileNo* | The registered mobile number to which the OTP has to be sent 





## Validate OTP
> Sample Request

```html
https://www.martjack.com/developerapi/carts/V2/ValidateOTP/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
"OTP": "345432",
"mobile": "7411000000"
}	

```

> Sample Response

```json
{
"messageCode":"1004",
"Message":"Successful",
"ErrorCode":0
}
```

Validates OTP sent to a customer's registered mobile number.

### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/V2/ValidateOTP/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/V2/ValidateOTP/{merchantId}`

### Request Parameters
Parameter | Description
--------- | -----------
mobile* | The registered mobile number of the customer to which the OTP has sent
OTP* | The verification code or OTP received to the mobile number
 



## Add Items to Cart (Normal/Variant) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={  
   "cart":{  
      "DelveryMode":"H",
      "Item":[  
         {  
            "Status":"A",
            "VariantProductID":"9727627",
            "LocationId":"22612",
            "CartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ProductID":"12688220",
            "Quantity":"1"
         },
         {  
            "Status":"A",
            "VariantProductID":"9727682",
            "LocationId":"22612",
            "CartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ProductID":"12688543",
            "Quantity":"2"
         }
      ]
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Carts": {
        "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
        "ProductCost": 60.528000000000006,
        "ShippingCost": 12.9,
        "VoucherDiscount": 0,
        "PromotionDiscount": 0,
        "TaxAmount": 0,
        "OrderTotal": 73.428,
        "VoucherCode": "",
        "UserSelectedCurrency": "INR",
        "Bill_FirstName": "Tom",
        "Bill_LastName": "Sawyer",
        "Bill_Address1": "#103, MG Road",
        "Bill_Address2": "",
        "Bill_CountryCode": "IN",
        "_Bill_StateCode": "KA",
        "Bill_City": "Bangalore",
        "Bill_CityCode": "2148",
        "Bill_OtherCityName": "",
        "Bill_Telephone": "9967000000",
        "Bill_Mobile": "9967000000",
        "Bill_PostCode": "",
        "Bill_Email": "",
        "Ship_FirstName": "Tom",
        "Ship_LastName": "Sawyer",
        "Ship_Address1": "AutoTestAddres1Bill",
        "Ship_Address2": "",
        "Ship_CountryCode": "IN",
        "Ship_StateCode": "KA",
        "Ship_City": "2148",
        "Ship_CityCode": "2148",
        "Ship_OtherCityName": "",
        "Ship_Telephone": "9967000000",
        "Ship_Mobile": "9967000000",
        "Ship_PostCode": "",
        "Ship_Email": "",
        "CartItems": [
            {
                "ProductId": 12688208,
                "VariantProductId": 0,
                "MRP": 4.5,
                "WebPrice": 0,
                "Quantity": 1,
                "description": "Seafood Supreme",
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                "CartReferenceKey": "18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                "IsFreeProduct": false,
                "PriceCapped": false,
                "TotalCap": 0,
                "CappedRefKey": "00000000-0000-0000-0000-000000000000",
                "CatalogpromotionDiscount": 0,
                "BundleCartReferenceKey": "00000000-0000-0000-0000-000000000000",
                "BundleCartItems": [
                    {
                        "ProductId": 12688172,
                        "VariantProductId": 9727843,
                        "MRP": 5.9,
                        "WebPrice": 4.5,
                        "Quantity": 1,
                        "description": "Seafood Supreme Crust",
                        "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                        "CartReferenceKey": "752b5193-af86-43ea-86e4-b9e5ccb8a941",
                        "TotalCap": 0,
                        "CatalogpromotionDiscount": 0,
                        "BundleCartReferenceKey": "18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                        "ItemPromotionDiscountAmount": 0,
                        "IsPrimaryProduct": true,
                        "IsPromotionProduct": false,
                        "VariantsInfo": [
                            {
                                "PropertyName": "Crust",
                                "Value": "Pan"
                            },
                            {
                                "PropertyName": "Size",
                                "Value": "Medium"
                            }
                        ],
                        "Por": "",
                        "IsDefaultBundleItem": true,
                        "CartPromotionRules": [],
                        "CategoryId": "CN00215782",
                        "CategoryName": null,
                        "BrandId": "311548",
                        "BrandName": "PizzaHut",
                        "GroupId": 0
                    }
                ],
                "IsPrimaryProduct": false,
                "ItemPromotionDiscountAmount": 0,
                "IsPromotionProduct": false,
                "Por": "",
                "IsDefaultBundleItem": false,
                "ProductImage": "//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-SEAFOOD_ISLAND_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
                "CartPromotionRules": [],
                "CategoryId": "CN00215794",
                "CategoryName": null,
                "BrandId": "311548",
                "BrandName": "PizzaHut",
                "ParentCartItems": null
            },
            {
                "ProductId": 12688220,
                "VariantProductId": 0,
                "MRP": 90.567,
                "WebPrice": 50.328,
                "Quantity": 1,
                "description": "Classic Pepperoni",
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                "CartReferenceKey": "ff462a81-699f-4798-9b73-4f9d9753xxxx",
                "IsFreeProduct": false,
                "PriceCapped": false,
                "TotalCap": 0,
                "CappedRefKey": "00000000-0000-0000-0000-000000000000",
                "CatalogpromotionDiscount": 0,
                "BundleCartReferenceKey": "00000000-0000-0000-0000-000000000000",
                "BundleCartItems": [
                    {
                        "ProductId": 12688160,
                        "VariantProductId": 0,
                        "MRP": 5.7,
                        "WebPrice": 5.7,
                        "Quantity": 1,
                        "description": "Classic Pepperoni Crust",
                        "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                        "CartReferenceKey": "ab59003f-81b5-45ea-8de8-4cd76f9bxxxx",
                        "TotalCap": 0,
                        "CatalogpromotionDiscount": 0,
                        "BundleCartReferenceKey": "ff462a81-699f-4798-9b73-4f9d97536xxx",
                        "ItemPromotionDiscountAmount": 0,
                        "IsPrimaryProduct": false,
                        "IsPromotionProduct": false,
                        "VariantsInfo": [],
                        "Por": "",
                        "IsDefaultBundleItem": true,
                        "CartPromotionRules": [],
                        "CategoryId": "CN0021xxxx",
                        "CategoryName": null,
                        "BrandId": "311548",
                        "BrandName": "Capillary",
                        "GroupId": 0
                    }
                ],
                "IsPrimaryProduct": false,
                "ItemPromotionDiscountAmount": 0,
                "IsPromotionProduct": false,
                "Por": "",
                "IsDefaultBundleItem": false,
                "ProductImage": "//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-Classic_Pepperoni_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
                "CartPromotionRules": [],
                "CategoryId": "CN00215792",
                "CategoryName": null,
                "BrandId": "311548",
                "BrandName": "PizzaHut",
                "ParentCartItems": null
            }
        ],
        "Suppliers": [
            {
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                "SupplierName": "Capillary Pizza",
                "IsSelected": false,
                "OrderStatus": null
            }
        ],
        "ShippingOptions": [
            {
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                "ShippingMode": "12174",
                "ShippingModeId": 12174,
                "isselected": true
            }
        ],
        "PaymentOptionsChannel": [
            {
                "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                "PaymentType": "COD",
                "Paymentoption": "COD",
                "GatewayId": "0",
                "GatewayTitle": "COD",
                "PaidAmount": 0,
                "EnalbeOTP": false
            }
        ],
        "ErrorCollection": null,
        "GiftMsg": "",
        "DemandedDeliveryDate": "/Date(1536228000000+0530)/",
        "RemainTotal": 0,
        "ShippingZoneType": null,
        "DeliverySlotID": 0,
        "FailedProducts": null,
        "PickupFirstName": "AutoTestNameBillg23fff",
        "PickupLastName": "AutoTestLastNameBill",
        "PickupEmail": "",
        "PickupMobile": "9967819918",
        "LocationId": "22612",
        "TaxDetail": [],
        "ComboSuggestion": [],
        "ConvertedDeals": []
    },
    "ErrorCode": 0
}
```

Lets you add items of normal and variant products to cart.

### Resource Information

|  | |
| --------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
DelveryMode* | enum | Preferred delivery mode. Values: `H` for home delivery and `S` for store pickup
Status* | enum | Status of the cart item. Specify `A` to add an item to the cart, `D` to delete an item from cart
VariantProductID | int | Unique id of the variant product to add
LocationId | int | Unique id of the current store location 
CartReferenceKey | string | Unique reference code of a line item added to the cart. It is used in updating item quantity in cart
ProductID* | int | Unique id of the product generated by the system
Quantity* | string | Quantity of the items that you want to add the cart

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CartReferenceKey | string | Unique GUID of the item in the cart
IsFreeProduct | boolean | Whether the item is a free or gift product
Por | enum | The portion of the product for which the topping is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
CartPromotionRules | array | The rules that are applied to the cart items
DemandedDeliveryDate | date | Date and time of delivery as requested by the customer
RemainTotal | float | -Deprecated-
ShippingZoneType | string | Dictionary containing merchant id mapping to the payment type. It is used in validations
ComboSuggestion | array | Suggestions related to deal products based on the cart items
ConvertedDeals | array | The cart items that are converted to deal items 
PriceCapped | float | Deprecated
TotalCap | float | Deprecated
CappedRefKey | string | Deprecated


### Success/Error Codes

Code | Description
---- | -----------
5001 | No Bundle items present for the specified product id
5002 | Invalid Delivery Mode: {DeliveryMode} for Product as IsShip/IsOnline/Instore Pickup is not set
5003 | Invalid Delivery Mode: {DeliveryMode} for Location Id: {LocationId}
5004 | ProductId is not available at the specified locationId
5005 | Product with the specified ProductId is not available
5006 | Product with the specified ProductId has type 'A' which is not allowed. You cannot add an add-on product directly
5007 | Invalid variant ProductId



## Add Items to Cart (Default Deal) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "cart":{
      "ShipCity":"10773",
      "ShipCountry":"IN",
      "ShipState":"KA",
      "DelveryMode":"H",
      "Item":[
         {
            "ProductID":8293532,
            "VariantProductID":0,
            "Quantity":2,
            "Status":"A",
            "LocationId":15254,
            "Portion":"W",
            "CartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "Price":204,
            "ChildItem":[
               {
                  "ProductID":8293826,
                  "VariantProductID":0,
                  "Quantity":8,
                  "Status":"A",
                  "Portion":"W",
                  "GroupID":21104
               },
               {
                  "ProductID":8286856,
                  "VariantProductID":0,
                  "Quantity":4,
                  "Status":"A",
                  "Portion":"W",
                  "GroupID":20608
               },
               {
                  "ProductID":8286858,
                  "VariantProductID":0,
                  "Quantity":4,
                  "Status":"A",
                  "Portion":"W",
                  "GroupID":20608
               },
               {
                  "ProductID":8293052,
                  "VariantProductID":0,
                  "Quantity":2,
                  "Status":"A",
                  "Portion":"W",
                  "GroupID":20606
               },
               {
                  "ProductID":8286910,
                  "VariantProductID":0,
                  "Quantity":2,
                  "Status":"A",
                  "Portion":"W",
                  "GroupID":20604
               }
            ]
         }
      ]
   }
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
      "ProductCost":5.650000000000001,
      "ShippingCost":0.5,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":6.15,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Pallav",
      "Bill_LastName":"Kumar",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"55555555",
      "Bill_PostCode":"",
      "Bill_Email":"tom.sawyer@example.com",
      "Ship_FirstName":"Pallav",
      "Ship_LastName":"Kumar",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW2",
      "Ship_City":"846",
      "Ship_CityCode":"846",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"55555555",
      "Ship_PostCode":"",
      "Ship_Email":"tom.sawyer@example.com",
      "CartItems":[  
         {  
            "ProductId":13047461,
            "VariantProductId":0,
            "MRP":0,
            "WebPrice":0,
            "Quantity":1,
            "description":"BUY ONE GET ONE FREE- Medium",
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "CartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":13047273,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357451",
                  "CategoryName":"Chicken",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047215,
                  "VariantProductId":9757487,
                  "MRP":4.25,
                  "WebPrice":3.25,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0ab3f8ab-7840-4d40-bad5-950e64da288a",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Classic"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"d2b252a0-58ff-4a56-8a2f-a4b828bc15a6",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047267,
                  "VariantProductId":9757725,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Sliced Black Olives",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"c946dfbb-c7d4-4482-be3a-0f55ea0ff701",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047231,
                  "VariantProductId":9757689,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chargrilled Chicken",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a944f99d-5729-41f1-a51a-a6ca7b7d8637",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a6d6f5ee-0b60-49b1-a504-9a63b42a4789",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047235,
                  "VariantProductId":9757693,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Calamari Catch",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"5caec831-1597-45ca-af9d-11beafc35b91",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047237,
                  "VariantProductId":9757691,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"ca206f95-ec4b-4a07-8651-652b61838960",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047241,
                  "VariantProductId":9757697,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"10ec62e0-0938-4b4e-a066-254d9aa65818",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"b3aa047a-091d-488f-b8a8-abde211ad008",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13133
               },
               {  
                  "ProductId":13047319,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357450",
                  "CategoryName":"Beef",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047219,
                  "VariantProductId":9757497,
                  "MRP":4.25,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0255ff10-0bc2-4518-aef5-9af37668750d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047247,
                  "VariantProductId":9757709,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Chillies",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"368a2174-938e-47f2-94e9-aafed11206f8",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047249,
                  "VariantProductId":9757711,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Pepper Strips",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"cff5fc90-375e-4914-b09b-1a3a97b64c1e",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047251,
                  "VariantProductId":9757713,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Jalapeno",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"9b9e43cd-a4e2-4ad2-aa5a-eb165c371ecf",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"8a61d1b4-c496-4b41-8a3a-c70a0fa510ef",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"920be3f6-7eff-41d7-9521-fceaae03cd30",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13221
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"fe6c9b1b-55b4-4db0-aea7-fe5bd253865b",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13223
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/4d00cd2b-28e8-4950-b8b9-2ecf50e44933/Images/ProductImages/Source/PWA-PHBOGOF-270718.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00357471",
            "CategoryName":"Deals",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "SupplierName":"KuwaitTestStore",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "ShippingMode":"12141",
            "ShippingModeId":12141,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}
```

Provides a payload to add non-customized default bundle products to cart.

### Resource Information
| | |
--------- | ----------- |
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
ShipCity | string | Unique code of the shipping city (as saved in the system). Example: 0562 (for Agra), and 250 (Victoria)
ShipCountry | string | Alpha-2 code of the shipping country. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipState | string | State’s postal abbreviation (shipping state). Example: KA (for Karnataka), CA (for California), IN (for Indiana)
DelveryMode | enum | Preferred mode of delivery for the current item. Value: `H` for home delivery, `S` for takeaway items
Item | obj | Details of the product with the attributes mentioned below
ProductID | int | Unique id of the parent product that you want to add to cart
VariantProductID | int | Unique id of the variant product that you want to add to cart
Quantity | int | Number of the current item you want to add
Status | enum | Status of the cart item. Specify `A` to add item to cart, `D` to delete item from cart
LocationId | int | Unique id of the order fulfillment location
Portion | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
CartReferenceKey | string | Unique reference id of the specific cart item
ChildItem | obj | Similar to the parent product details, specify the details of child items that you want add to cart
GroupID | string | The group id of the specific item. Applicable for bundle or deal products

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CartReferenceKey | string | Unique reference key of the specific item in the cart
IsFreeProduct | boolean | Whether the item is a free gift item
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
CartPromotionRules | array | The rules that are applied to the cart items
DemandedDeliveryDate | date | Customer preferred date and time of delivery
RemainTotal | float | Deprecated
ShippingZoneType | string | Dictionary containing merchant id mapping to the payment type. It is being used in validations
ComboSuggestion | array | Suggestions related the deal items based on the cart items
ConvertedDeals | array | The cart items that are converted to deal items

### Success/Error Codes

Code | Description
---- | -----------
5001 | No Bundle items present for the specified product id
5002 | Invalid Delivery Mode: {DeliveryMode} for Product as IsShip/IsOnline/Instore Pickup is not set
5003 | Invalid Delivery Mode: {DeliveryMode} for Location Id: {LocationId}
5004 | ProductId is not available at the specified locationId
5005 | Product with the specified ProductId is not available
5006 | Product with the specified ProductId has type 'A' which is not allowed. You cannot add an add-on product directly
5007 | Invalid variant ProductId



## Add to Cart (Customized Deal)

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "cart": {
    "ShipCity": "846",
    "ShipCountry": "KW",
    "ShipState": "KW2",
    "DelveryMode": "H",
    "Item": [
      {
        "ProductID": 13047461,
        "VariantProductID": 0,
        "Quantity": 1,
        "Status": "A",
        "LocationId": 27299,
        "Portion": "W",
        "CartReferenceKey": "00000000-0000-0000-0000-000000000000",
        "Price": 3.25,
        "ChildItem": [
          {
            "ProductID": 13047273,
            "VariantProductID": 0,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13317,
            "ChildItem": [
              {
                "childItems": [],
                "productId": 13047215,
                "variantProductId": 9757487,
                "quantity": 1,
                "portion": "W",
                "bundleProductId": 13047273,
                "groupId": 13317
              },
              {
                "childItems": [],
                "productId": 13047255,
                "variantProductId": 9757701,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88013,
                "portion": "W",
                "title": "Mozarella",
                "type": "V",
                "groupId": 13129
              },
              {
                "childItems": [],
                "productId": 13047267,
                "variantProductId": 9757725,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88019,
                "portion": "W",
                "title": "Sliced Black Olives",
                "type": "V",
                "groupId": 13129
              },
              {
                "childItems": [],
                "productId": 13047231,
                "variantProductId": 9757689,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88029,
                "portion": "W",
                "title": "Chargrilled Chicken",
                "type": "V",
                "groupId": 13131
              },
              {
                "childItems": [],
                "productId": 13047233,
                "variantProductId": 9757695,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88025,
                "portion": "W",
                "title": "Beef Pepperoni",
                "type": "V",
                "groupId": 13131
              },
              {
                "childItems": [],
                "productId": 13047235,
                "variantProductId": 9757693,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88027,
                "portion": "W",
                "title": "Calamari Catch",
                "type": "V",
                "groupId": 13131
              },
              {
                "childItems": [],
                "productId": 13047237,
                "variantProductId": 9757691,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88023,
                "portion": "W",
                "title": "Beef",
                "type": "V",
                "groupId": 13131
              },
              {
                "childItems": [],
                "productId": 13047241,
                "variantProductId": 9757697,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88031,
                "portion": "W",
                "title": "Chicken Pepperoni",
                "type": "V",
                "groupId": 13131
              },
              {
                "childItems": [],
                "productId": 13047257,
                "variantProductId": 9757699,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047273,
                "bundleItemId": 88039,
                "portion": "W",
                "title": "Pizza Sauce",
                "type": "V",
                "groupId": 13133
              }
            ]
          },
          {
            "ProductID": 13047319,
            "VariantProductID": 0,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13319,
            "ChildItem": [
              {
                "childItems": [],
                "productId": 13047219,
                "variantProductId": 9757497,
                "quantity": 1,
                "portion": "W",
                "bundleProductId": 13047319,
                "groupId": 13319
              },
              {
                "childItems": [],
                "productId": 13047247,
                "variantProductId": 9757709,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88457,
                "portion": "W",
                "title": "Green Chillies",
                "type": "V",
                "groupId": 13219
              },
              {
                "childItems": [],
                "productId": 13047249,
                "variantProductId": 9757711,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88459,
                "portion": "W",
                "title": "Green Pepper Strips",
                "type": "V",
                "groupId": 13219
              },
              {
                "childItems": [],
                "productId": 13047251,
                "variantProductId": 9757713,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88461,
                "portion": "W",
                "title": "Jalapeno",
                "type": "V",
                "groupId": 13219
              },
              {
                "childItems": [],
                "productId": 13047255,
                "variantProductId": 9757701,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88465,
                "portion": "W",
                "title": "Mozarella",
                "type": "V",
                "groupId": 13219
              },
              {
                "childItems": [],
                "productId": 13047233,
                "variantProductId": 9757695,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88477,
                "portion": "W",
                "title": "Beef Pepperoni",
                "type": "V",
                "groupId": 13221
              },
              {
                "childItems": [],
                "productId": 13047257,
                "variantProductId": 9757699,
                "quantity": 1,
                "isBundle": false,
                "bundleProductId": 13047319,
                "bundleItemId": 88491,
                "portion": "W",
                "title": "Pizza Sauce",
                "type": "V",
                "groupId": 13223
              }
            ]
          }
        ]
      }
    ]
  }
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
      "ProductCost":5.650000000000001,
      "ShippingCost":0.5,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":6.15,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Pallav",
      "Bill_LastName":"Kumar",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"55555555",
      "Bill_PostCode":"",
      "Bill_Email":"tom.sawyer@example.com",
      "Ship_FirstName":"Pallav",
      "Ship_LastName":"Kumar",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW2",
      "Ship_City":"846",
      "Ship_CityCode":"846",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"55555555",
      "Ship_PostCode":"",
      "Ship_Email":"tom.sawyer@example.com",
      "CartItems":[  
         {  
            "ProductId":13047461,
            "VariantProductId":0,
            "MRP":0,
            "WebPrice":0,
            "Quantity":1,
            "description":"BUY ONE GET ONE FREE- Medium",
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "CartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":13047273,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357451",
                  "CategoryName":"Chicken",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047215,
                  "VariantProductId":9757487,
                  "MRP":4.25,
                  "WebPrice":3.25,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0ab3f8ab-7840-4d40-bad5-950e64da288a",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Classic"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"d2b252a0-58ff-4a56-8a2f-a4b828bc15a6",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047267,
                  "VariantProductId":9757725,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Sliced Black Olives",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"c946dfbb-c7d4-4482-be3a-0f55ea0ff701",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047231,
                  "VariantProductId":9757689,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chargrilled Chicken",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a944f99d-5729-41f1-a51a-a6ca7b7d8637",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a6d6f5ee-0b60-49b1-a504-9a63b42a4789",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047235,
                  "VariantProductId":9757693,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Calamari Catch",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"5caec831-1597-45ca-af9d-11beafc35b91",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047237,
                  "VariantProductId":9757691,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"ca206f95-ec4b-4a07-8651-652b61838960",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047241,
                  "VariantProductId":9757697,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"10ec62e0-0938-4b4e-a066-254d9aa65818",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"b3aa047a-091d-488f-b8a8-abde211ad008",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13133
               },
               {  
                  "ProductId":13047319,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357450",
                  "CategoryName":"Beef",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047219,
                  "VariantProductId":9757497,
                  "MRP":4.25,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0255ff10-0bc2-4518-aef5-9af37668750d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047247,
                  "VariantProductId":9757709,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Chillies",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"368a2174-938e-47f2-94e9-aafed11206f8",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047249,
                  "VariantProductId":9757711,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Pepper Strips",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"cff5fc90-375e-4914-b09b-1a3a97b64c1e",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047251,
                  "VariantProductId":9757713,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Jalapeno",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"9b9e43cd-a4e2-4ad2-aa5a-eb165c371ecf",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"8a61d1b4-c496-4b41-8a3a-c70a0fa510ef",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"920be3f6-7eff-41d7-9521-fceaae03cd30",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13221
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"fe6c9b1b-55b4-4db0-aea7-fe5bd253865b",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13223
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/4d00cd2b-28e8-4950-b8b9-2ecf50e44933/Images/ProductImages/Source/PWA-PHBOGOF-270718.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00357471",
            "CategoryName":"Deals",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "SupplierName":"KuwaitTestStore",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "ShippingMode":"12141",
            "ShippingModeId":12141,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}
```

Lets you add customized deal products to the cart.


### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`

### Request Body Parameters

Parameter | Type | Description
---------- | --- | -----------
ShipCity | string | Unique code of the shipping city (as saved in the system) to which the item has to be shipped. Example: 0562 (for Agra), and 250 (Victoria)
ShipCountry | string | Alpha-2 code of the country of the shipping address. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipState | string | State code associated to the shipping city
DelveryMode | enum | The mode of delivery. Value: `S` for store pick up and `H` for home delivery
ProductID | int | Unique id of the product that you want to add
VariantProductID | int | Unique id of the variant product
Quantity  | int | Quantity of the current item that you want to add to cart
Status | enum | Status of the cart item. Specify `A` to add item to cart, `D` to delete item from cart
LocationId | int | Unique id of the delivery location
Portion  | enum | The portion of the current child item. Value: `W` for whole,`L` for left, `R` for right
CartReferenceKey | string | Unique reference key associated to the cart item
Price | float | Price of the current item
ChildItem | json obj | All add-ons are child items of a bundle. For example, crust, sauce, and toppings
GroupID | int | Unique user group id associated to the product group. One group can have only one type of item. For example, in a group you can either add only pizzas, drinks, appetizers or deserts

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CartReferenceKey | string | Unique reference key of the specific cart item
IsFreeProduct | boolean | Whether the item is a free gift item
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
CartPromotionRules | array | The rules that are applied to the cart items
DemandedDeliveryDate | date-time | Customer preferred delivery time
RemainTotal | float | Deprecated
ShippingZoneType | string | Dictionary containing merchant id mapping to the payment type. It is used in validations 
ComboSuggestion | array | Suggestions related to deal items based on the items in the cart
ConvertedDeals | array | The cart items that are converted to deal items 




## Add Items to Cart (Customized Bundle) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "cart": {
    "ShipCity": "",
    "ShipCountry": "",
    "ShipState": "",
    "DelveryMode": "H",
    "Item": [
      {
        "ProductID": 13047325,
        "VariantProductID": 0,
        "Quantity": 1,
        "Status": "A",
        "LocationId": 27299,
        "Portion": "W",
        "CartReferenceKey": "027ea92e-65f2-408c-b78f-42d860b59d32",
        "Price": 7.25,
        "ChildItem": [
          {
            "ProductID": 13047223,
            "VariantProductID": 9757573,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W"
          },
          {
            "ProductID": 13047239,
            "VariantProductID": 9757649,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13245
          },
          {
            "ProductID": 13047245,
            "VariantProductID": 9757653,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13245
          },
          {
            "ProductID": 13047247,
            "VariantProductID": 9757655,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13245
          },
          {
            "ProductID": 13047255,
            "VariantProductID": 9757645,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13245
          },
          {
            "ProductID": 13047231,
            "VariantProductID": 9757639,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13249
          },
          {
            "ProductID": 13047233,
            "VariantProductID": 9757641,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13249
          },
          {
            "ProductID": 13047235,
            "VariantProductID": 9757635,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13249
          },
          {
            "ProductID": 13047237,
            "VariantProductID": 9757637,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13249
          },
          {
            "ProductID": 13047257,
            "VariantProductID": 9757643,
            "Quantity": 1,
            "Status": "A",
            "Portion": "W",
            "GroupID": 13251
          }
        ]
      }
    ]
  }
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
      "ProductCost":5.75,
      "ShippingCost":0.5,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":6.25,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Pallav",
      "Bill_LastName":"Kumar",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"55555555",
      "Bill_PostCode":"",
      "Bill_Email":"pallav.kumar@capillarytech.com",
      "Ship_FirstName":"Pallav",
      "Ship_LastName":"Kumar",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW2",
      "Ship_City":"846",
      "Ship_CityCode":"846",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"55555555",
      "Ship_PostCode":"",
      "Ship_Email":"pallav.kumar@capillarytech.com",
      "CartItems":[  
         {  
            "ProductId":13047325,
            "VariantProductId":0,
            "MRP":4.25,
            "WebPrice":0,
            "Quantity":1,
            "description":"New Spicy Chicken Ranch",
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "CartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":13047223,
                  "VariantProductId":9757573,
                  "MRP":4.25,
                  "WebPrice":4.25,
                  "Quantity":1,
                  "description":"New Spicy Chicken Ranch",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"37fedeb2-749b-4b08-9f70-3143d553f0c8",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Classic"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13241
               },
               {  
                  "ProductId":13047239,
                  "VariantProductId":9757649,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Onions",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"d8888912-96ef-4ac5-bc84-82bceebaaa0c",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13245
               },
               {  
                  "ProductId":13047245,
                  "VariantProductId":9757653,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Tomatoes",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"ae4cad02-31bc-4cd9-99d2-3aa574b19c25",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13245
               },
               {  
                  "ProductId":13047247,
                  "VariantProductId":9757655,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Green Chillies",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"17b0bb8e-87a2-4d29-978e-29ad71773d1a",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13245
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757645,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"3de9a60b-54d6-4a47-82f0-ee4fc79a3ab7",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13245
               },
               {  
                  "ProductId":13047231,
                  "VariantProductId":9757639,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chargrilled Chicken",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"d783e091-92cc-435c-bc11-ecfaa1db3e25",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13249
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757641,
                  "MRP":0.5,
                  "WebPrice":0.5,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"5e0d5dd6-41f7-42ae-a180-72bcf61f6c16",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Store",
                  "GroupId":13249
               },
               {  
                  "ProductId":13047235,
                  "VariantProductId":9757635,
                  "MRP":0.5,
                  "WebPrice":0.5,
                  "Quantity":1,
                  "description":"Calamari Catch",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a0b6eebd-c051-49aa-915d-fe99847a8ea8",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13249
               },
               {  
                  "ProductId":13047237,
                  "VariantProductId":9757637,
                  "MRP":0.5,
                  "WebPrice":0.5,
                  "Quantity":1,
                  "description":"Beef",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0fa3e24d-ae93-434a-9475-50b8e13e2c13",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Store",
                  "GroupId":13249
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757643,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"2db7ebad-2f53-4f94-87ae-383f735af331",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97da4fe2-89da-43c8-afc9-5fd8c487d546",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Large"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Store",
                  "GroupId":13251
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"/Images/ProductImages/Source/FCDS-newtxt-spycy-pizza.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00357451",
            "CategoryName":"Chicken",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "SupplierName":"KuwaitTestStore",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "ShippingMode":"12141",
            "ShippingModeId":12141,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "ErrorCode":0
}
```


Lets you add customized bundle items to the cart.


### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Additional Header Required

Header | Description
------ | -----------
accesstoken* | Access token of the logged in user to validate the session


### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`

### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
ShipCity | string | Unique code of the shipping city (as saved in the system) to which the item has to be shipped. Example: 0562 (for Agra), and 250 (Victoria)
ShipCountry | string | Alpha-2 code of the country of the shipping address. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipState | string | State code associated to the shipping city
DelveryMode | string | Mode of delivery. Value: `S` for store pick up, `H` for home delivery
Item | obj | Details of each cart item
ProductID | int | Unique id of the product
VariantProductID | int | Unique id of the variant product
Quantity | int | Number of the current items that you want to add to cart
Status | enum | Status of the cart item. Specify `A` to add item to cart, `D` to delete item from cart
LocationId | int | Unique id of the fulfillment location
Portion | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
CartReferenceKey | string | Unique reference key of the cart item
Price | float | Price of the current item 
ChildItem | obj | Details of each child item. Applicable for bundle products
Portion | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
GroupID | int | Group id associated to the specific item. Applicable in case of a bundle or deal products

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | Whether the item is a free gift item
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
CartPromotionRules | array | The rules that are applied to the cart items
DemandedDeliveryDate | date | Customer preferred date and time of delivery
RemainTotal | float | -Deprecated-
ShippingZoneType | string | Dictionary containing merchant id mapping to the payment type. It is being used in validations
ComboSuggestion | array | Suggestions related to the deal items based on the cart items
ConvertedDeals | array | The cart items that are converted to deal items 


## Location Add to Cart


> Sample Request

```html
http://www.martjack.com/developerapi/Carts/LocationCart/993c939a-a2e8-4934-bbf5-390f37457a55/13038134/9972544/1/24342/INR
```

> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{
      "MerchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
      "ProductCost":7660.0,
      "ShippingCost":120.0,
      "VoucherDiscount":0.0,
      "PromotionDiscount":0.0,
      "TaxAmount":0.0,
      "OrderTotal":7780.0,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":null,
      "Bill_LastName":"Test",
      "Bill_Address1":"AutoTestAddres1Bill",
      "Bill_Address2":"",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"KA",
      "Bill_City":"Bangalore",
      "Bill_CityCode":"32",
      "Bill_OtherCityName":"195",
      "Bill_Telephone":"040-33123456",
      "Bill_Mobile":"91-9898989898",
      "Bill_PostCode":"560029",
      "Bill_Email":"",
      "Ship_FirstName":"AutoTestNameBill2337g1",
      "Ship_LastName":"Test",
      "Ship_Address1":"AutoTestAddres1Bill",
      "Ship_Address2":"",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"KA",
      "Ship_City":"32",
      "Ship_CityCode":"32",
      "Ship_OtherCityName":"195",
      "Ship_Telephone":"040-33123456",
      "Ship_Mobile":"91-9898989898",
      "Ship_PostCode":"560029",
      "Ship_Email":"",
      "CartItems":[
         {
            "ProductId":13037156,
            "VariantProductId":9970442,
            "MRP":1500.0,
            "WebPrice":1200.0,
            "Quantity":3.0,
            "description":"Format Shirt 01",
            "SupplierId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "CartReferenceKey":"c4f7081a-89b2-460a-a60a-b5f312a79c50",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "VariantsInfo":[
               {
                  "PropertyName":"Size",
                  "Value":"Medium"
               }
            ],
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//test-resources/993c939a-a2e8-4934-bbf5-390f37457a55/Images/ProductImages/Source/formalshirt.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[

            ],
            "CategoryId":"CU00366338",
            "CategoryName":null,
            "BrandId":"All001",
            "BrandName":"Allen Solly",
            "ParentCartItems":null
         },
         {
            "ProductId":13038134,
            "VariantProductId":9972546,
            "MRP":1500.0,
            "WebPrice":1355.0,
            "Quantity":2.0,
            "description":"TShirt Product 01",
            "SupplierId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "CartReferenceKey":"2a48bc32-bf8c-4097-9a85-0a728749dc57",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "VariantsInfo":[
               {
                  "PropertyName":"Size",
                  "Value":"Small"
               }
            ],
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//test-resources/993c939a-a2e8-4934-bbf5-390f37457a55/Images/ProductImages/Source/71FItmnzmdL._UL1500_.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[

            ],
            "CategoryId":"CU00366336",
            "CategoryName":null,
            "BrandId":"Nik002",
            "BrandName":"NIKE",
            "ParentCartItems":null
         },
         {
            "ProductId":13038134,
            "VariantProductId":9972544,
            "MRP":1500.0,
            "WebPrice":1350.0,
            "Quantity":1.0,
            "description":"TShirt Product 01",
            "SupplierId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "CartReferenceKey":"8dd9ce47-e35d-4f23-b37c-d8299ea7c95b",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "VariantsInfo":[
               {
                  "PropertyName":"Size",
                  "Value":"Medium"
               }
            ],
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//test-resources/993c939a-a2e8-4934-bbf5-390f37457a55/Images/ProductImages/Source/71FItmnzmdL._UL1500_.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[

            ],
            "CategoryId":"CU00366336",
            "CategoryName":null,
            "BrandId":"Nik002",
            "BrandName":"NIKE",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[
         {
            "SupplierId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "SupplierName":"testorg2",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[
         {
            "SupplierId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "ShippingMode":"0",
            "ShippingModeId":0,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[
         {
            "MerchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {
            "MerchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "PaymentType":"ChequeDD",
            "Paymentoption":"ChequeDD",
            "GatewayId":"10994",
            "GatewayTitle":"ChequeDD",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {
            "MerchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10996",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"1900-01-01T00:00:00Z",
      "RemainTotal":0.0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupLastName":"Test",
      "PickupEmail":"",
      "PickupMobile":"91-9898989898",
      "LocationId":"24342",
      "TaxDetail":[

      ],
      "ComboSuggestion":[

      ],
      "ConvertedDeals":[

      ]
   },
   "ErrorCode":0
}
```


Adds products of a specific location to the cart.


### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/LocationCart/{merchantId}/{productId}/{varProductId}/{quantity}/{locationId}/{currency}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/LocationCart/{merchantId}/{productId}/{varProductId}/{quantity}/{locationId}/{currency}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Unique id the parent product that you want to add to cart
varProductId* | string | Unique variant id of the variant product
quantity* | int | Quantity of items that you want to add
locationId* | int | Location id of the  current store location
currency* | float | Currency code as per the store location 


<aside class="notice"> All parameters marked by * are mandatory. </aside>







## Edit Cart Item

Lets you modify a current cart item with a different variant, quantity and bundle item. 




> Sample Request

```html
https://www.martjack.com/developerapi/carts/edit/2002cbfe-9adf-42ac-9bfd-8e013fee7c18

```

> Sample POST Request

```json
InputData={
   "CartID":"5yef3kq51no12tgqwmyqdtsy",
   "DeliveryMode":"S",
   "Item":{
      "ProductID":8504427,
      "VariantProductID":0,
      "Quantity":1,
      "Status":"A",
      "LocationId":13250,
      "Portion":"W",
      "CartReferenceKey":"757eca2a-edac-435d-9025-0ecc3487d847",
      "Price":2.95,
      "ChildItem":[
         {
            "ProductID":8302873,
            "VariantProductID":55531,
            "Quantity":1,
            "Status":"A",
            "Portion":"W"
         },
         {
            "ProductID":8302905,
            "VariantProductID":55669,
            "Quantity":1,
            "Status":"A",
            "Portion":"W",
            "GroupID":25865
         },
         {
            "ProductID":8302895,
            "VariantProductID":55673,
            "Quantity":1,
            "Status":"A",
            "Portion":"W",
            "GroupID":25873
         }
      ]
   }
}&InputFormat=application/json

```


> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{
      "MerchantId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
      "ProductCost":2.95,
      "ShippingCost":0.0,
      "VoucherDiscount":0.0,
      "PromotionDiscount":0.0,
      "TaxAmount":0.0,
      "OrderTotal":2.95,
      "VoucherCode":"",
      "UserSelectedCurrency":"KWD",
      "Bill_FirstName":null,
      "Bill_LastName":"",
      "Bill_Address1":"",
      "Bill_Address2":null,
      "Bill_CountryCode":"",
      "_Bill_StateCode":null,
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":null,
      "Bill_Telephone":null,
      "Bill_Mobile":null,
      "Bill_PostCode":null,
      "Bill_Email":"",
      "Ship_FirstName":null,
      "Ship_LastName":"",
      "Ship_Address1":"",
      "Ship_Address2":null,
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW13",
      "Ship_City":"39432",
      "Ship_CityCode":"39432",
      "Ship_OtherCityName":null,
      "Ship_Telephone":null,
      "Ship_Mobile":null,
      "Ship_PostCode":null,
      "Ship_Email":null,
      "CartItems":[
         {
            "ProductId":8504427,
            "VariantProductId":0,
            "MRP":2.95,
            "WebPrice":0.0,
            "Quantity":1.0,
            "description":"Margherita",
            "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
            "CartReferenceKey":"fcea905c-281a-4d2f-9f25-bba358fd724c",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[
               {
                  "ProductId":8302873,
                  "VariantProductId":55531,
                  "MRP":3.95,
                  "WebPrice":2.95,
                  "Quantity":1.0,
                  "description":"Margherita",
                  "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
                  "CartReferenceKey":"ca541045-a4d3-4ff1-9bfa-5edfb00200f3",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"fcea905c-281a-4d2f-9f25-bba358fd724c",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[
                     {
                        "PropertyName":"Crust",
                        "Value":"San Francisco"
                     },
                     {
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[

                  ],
                  "CategoryId":"CU00215634",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":25857
               },
               {
                  "ProductId":8302905,
                  "VariantProductId":55669,
                  "MRP":0.5,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Mozarella",
                  "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
                  "CartReferenceKey":"fe969f1b-a3a7-4907-9df4-fa130709056e",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"fcea905c-281a-4d2f-9f25-bba358fd724c",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[
                     {
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[

                  ],
                  "CategoryId":"CU00217392",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":25865
               },
               {
                  "ProductId":8302895,
                  "VariantProductId":55673,
                  "MRP":0.5,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Pizza Sauce",
                  "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
                  "CartReferenceKey":"7f2cb6a7-9787-4d56-bcda-a8a5980ca9bf",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"fcea905c-281a-4d2f-9f25-bba358fd724c",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[
                     {
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[

                  ],
                  "CategoryId":"CU00217392",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":25873
               }
            ],
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//imagecdn.pizzahut.me/azure//yum-resources/2002cbfe-9adf-42ac-9bfd-8e013fee7c18/Images/ProductImages/Large/PWA-Margherita.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[

            ],
            "CategoryId":"CU00215658",
            "CategoryName":"Vegetarian",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[
         {
            "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
            "SupplierName":"Pizza Hut",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[
         {
            "SupplierId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
            "ShippingMode":"9276",
            "ShippingModeId":9276,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[
         {
            "MerchantId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {
            "MerchantId":"2002cbfe-9adf-42ac-9bfd-8e013fee7c18",
            "PaymentType":"Credit",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[

      ],
      "ComboSuggestion":[

      ],
      "ConvertedDeals":[

      ]
   },
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/carts/edit/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/edit/{merchantId}`


### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
CartID* | string | Unique id of the current cart
DeliveryMode | enum | Mode of delivery. Value: `H` for home delivery, `S` for takeaway
ProductID | int | Unique id of the parent product that you want to add to cart
VariantProductID | int | Unique id of the variant product that you want to add to cart
Quantity | int | Number of the current item you want to add
Status | enum | Status of the cart item. Specify `A` to add item to cart, `D` to delete item from cart
LocationId | int | Unique id of the order fulfillment location
Portion | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
CartReferenceKey | string | Unique reference id of the specific cart item
ChildItem | obj | Similar to the parent product details, specify the details of child items that you want add to cart
GroupID | string | The group id of the specific item. Applicable for bundle or deal products




<aside class="notice"> All parameters marked by * are mandatory. </aside>







## Update Quantity of a Cart Item



> Sample Request

```html
https://www.martjack.com/developerapi/Carts/Update/dc21b529-2057-402a-972a-e1ba0c8a08eb/4a2a68a9-208d-4039-8635-7d26611f4dcd/3
```


> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
      "ProductCost":0.75,
      "ShippingCost":50,
      "VoucherDiscount":0,
      "PromotionDiscount":0.025,
      "TaxAmount":0.03,
      "OrderTotal":50.255,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Smoke",
      "Bill_LastName":"Automation",
      "Bill_Address1":"Hyderabad",
      "Bill_Address2":"Hyderabad",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"TG",
      "Bill_City":"Hyderabad",
      "Bill_CityCode":"195",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"-8899887xxx",
      "Bill_Mobile":"91-8899887xxx",
      "Bill_PostCode":"500002",
      "Bill_Email":"store2@example.com",
      "Ship_FirstName":"Smoke",
      "Ship_LastName":"Automation",
      "Ship_Address1":"Hyderabad",
      "Ship_Address2":"Hyderabad",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"TG",
      "Ship_City":"195",
      "Ship_CityCode":"195",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"-8899887xxx",
      "Ship_Mobile":"91-8899887xxx",
      "Ship_PostCode":"500002",
      "Ship_Email":"store2@qaenv1.com",
      "CartItems":[  
         {  
            "ProductId":13071204,
            "VariantProductId":0,
            "MRP":0.25,
            "WebPrice":0.25,
            "Quantity":3,
            "description":"7Up Can",
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "CartReferenceKey":"d2defd3d-a8d3-49cb-9f75-b521cd3f9568",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0.025,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/dc21b529-2057-402a-972a-e1ba0c8a08eb/Images/ProductImages/Source/7up_showcase-min.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  
               {  
                  "Description":"Sample description",
                  "DiscountAmount":0.025,
                  "RuleId":33742,
                  "Title":"Sample Rule",
                  "VoucherCode":""
               }
            ],
            "CategoryId":"CU00368302",
            "CategoryName":null,
            "BrandId":"316792",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "SupplierName":"Testorg13",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "ShippingMode":"12292",
            "ShippingModeId":12292,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"/images/paymentoptions/Payment_RazorPay.jpg\" style=\"margin-left:4px;\" /><div >You can pay using RazorPay</div></div>",
            "GatewayId":"13084",
            "GatewayTitle":"RazorPAy",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
                 
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"James",
      "PickupLastName":"Thomas",
      "PickupEmail":"store2@example.com",
      "PickupMobile":"91-8899887888",
      "LocationId":"0",
      "TaxDetail":[  
         {  
            "TaxCategory":"CGST",
            "TaxRate":"6",
            "TaxAmount":0.015,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4542"
         },
         {  
            "TaxCategory":"SGST",
            "TaxRate":"6",
            "TaxAmount":0.0135,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4544"
         },
         {  
            "TaxCategory":"IGST",
            "TaxRate":"0",
            "TaxAmount":0,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4546"
         }
      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}
```

Updates the quantity of a specific item in the cart.

### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/Update/{merchantId}/{cartReferenceKey}/{new quantity}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/Update/{merchantId}/{cartReferenceKey}/{new quantity}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request Query Parameters

Parameter | Type | Description
--------- | ---- | ----------
merchantId* | string | Unique GUID of the merchant associated to the cart
cartReferenceKey* | string | Unique reference id of the cart item that you want to update
new quantity* | string | The new quantity of the current cart item. This will override the existing value

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
SupplierId | | Unique GUID of the merchant (product supplier)
IsFreeProduct | boolean | Whether the product is a gift item or deal item available for free







## Update Cart Properties

> Sample Request

```html
https://www.martjack.com/developerapi/carts/UpdateCartProperties/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "DeliverySlotID":415329,
   "DemandedDeliveryDate":"09-06-2018 15:15:00",
   "ShippingModeId":0,
   "locationID":121212,
   "BillingAddress":{  
      "FirstName":"Tom",
      "LastName":"Sawyer",
      "Street":"MG Road",
      "Street1":"Sham Plaza, Bangalore, India",
      "Country":"IN",
      "State":"KA",
      "City":"23924",
      "CityName":"23924",
      "OtherCityName":null,
      "Phone":"9967819918",
      "Mobile":"9967819918",
      "PIN":"744103",
      "EmailID":"tom.sawyer@example.com",
      "Type":null,
      "AddressType":null,
      "Latitude":11.6233774,
      "Longitude":92.7264828
   },
   "ShippingAddress":{  
      "FirstName":"Tom",
      "LastName":null,
      "Street":"MG Road",
      "Street1":"Sham Plaza, Bangalore, India",
      "Country":"IN",
      "State":"KA",
      "City":"23924",
      "CityName":"23924",
      "OtherCityName":null,
      "Phone":"",
      "Mobile":"9967000000",
      "PIN":"744103",
      "EmailID":"tom.sawyer@example.com",
      "Type":null,
      "AddressType":null,
      "Latitude":11.6233774,
      "Longitude":92.7264828
   },
   "OrderAttributes":[  
      {  
         "EntityFieldID":1,
         "MerchantID":"81e77da2-723b-483d-8c0d-49f800c1e288",
         "EntityFieldName":"phIndiatest",
         "Type":"1",
         "IsPredefined":false,
         "IsMandatory":true,
         "SelectedValue":"test",
         "lstOMSEntityFieldValues":[  
            {  
               "EntityFieldValueID":1,
               "MerchantID":"81e77da2-723b-483d-8c0d-49f800c1e288",
               "EntityFieldID":1,
               "Value":"test",
               "IsSelected":true
            }
         ]
      },
      {  
         "EntityFieldID":2,
         "MerchantID":"00000000-0000-0000-0000-000000000000",
         "EntityFieldName":"channel",
         "Type":"1",
         "IsPredefined":true,
         "IsMandatory":true,
         "SelectedValue":"PWA,android",
         "lstOMSEntityFieldValues":[  
            {  
               "EntityFieldValueID":2,
               "MerchantID":"00000000-0000-0000-0000-000000000000",
               "EntityFieldID":2,
               "Value":"PWA,android",
               "IsSelected":true
            }
         ]
      }
   ],
   "MerchantID":"81e77da2-723b-483d-8c0d-49f800c1e288",
   "IsShippingAddressDifferent":"false",
   "SkipDeliveryAreaValidation":true,
   "SkipShippingModeValidation":false
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
      "ProductCost":60.528000000000006,
      "ShippingCost":12.9,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":73.428,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Tom",
      "Bill_LastName":"Sawyer",
      "Bill_Address1":"#103, MG Road",
      "Bill_Address2":"",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"KA",
      "Bill_City":"Bangalore",
      "Bill_CityCode":"2148",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"9967000000",
      "Bill_Mobile":"9967000000",
      "Bill_PostCode":"",
      "Bill_Email":"",
      "Ship_FirstName":"Tom",
      "Ship_LastName":"Sawyer",
      "Ship_Address1":"AutoTestAddres1Bill",
      "Ship_Address2":"",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"KA",
      "Ship_City":"2148",
      "Ship_CityCode":"2148",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"9967000000",
      "Ship_Mobile":"9967000000",
      "Ship_PostCode":"",
      "Ship_Email":"",
      "CartItems":[  
         {  
            "ProductId":12688208,
            "VariantProductId":0,
            "MRP":4.5,
            "WebPrice":0,
            "Quantity":1,
            "description":"Seafood Supreme",
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "CartReferenceKey":"18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":12688172,
                  "VariantProductId":9727843,
                  "MRP":5.9,
                  "WebPrice":4.5,
                  "Quantity":1,
                  "description":"Seafood Supreme Crust",
                  "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
                  "CartReferenceKey":"752b5193-af86-43ea-86e4-b9e5ccb8a941",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CN00215782",
                  "CategoryName":null,
                  "BrandId":"311548",
                  "BrandName":"PizzaHut",
                  "GroupId":0
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-SEAFOOD_ISLAND_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CN00215794",
            "CategoryName":null,
            "BrandId":"311548",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         },
         {  
            "ProductId":12688220,
            "VariantProductId":0,
            "MRP":90.567,
            "WebPrice":50.328,
            "Quantity":1,
            "description":"Classic Pepperoni",
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "CartReferenceKey":"ff462a81-699f-4798-9b73-4f9d9753xxxx",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":12688160,
                  "VariantProductId":0,
                  "MRP":5.7,
                  "WebPrice":5.7,
                  "Quantity":1,
                  "description":"Classic Pepperoni Crust",
                  "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
                  "CartReferenceKey":"ab59003f-81b5-45ea-8de8-4cd76f9bxxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"ff462a81-699f-4798-9b73-4f9d97536xxx",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CN0021xxxx",
                  "CategoryName":null,
                  "BrandId":"311548",
                  "BrandName":"Capillary",
                  "GroupId":0
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-Classic_Pepperoni_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CN00215792",
            "CategoryName":null,
            "BrandId":"311548",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
            "SupplierName":"Capillary Pizza",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
            "ShippingMode":"12174",
            "ShippingModeId":12174,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(1536228000000+0530)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"AutoTestNameBillg23fff",
      "PickupLastName":"AutoTestLastNameBill",
      "PickupEmail":"",
      "PickupMobile":"9967810000",
      "LocationId":"22612",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "ErrorCode":0
}
```

Updates existing checkout details such as Add delivery slot, add shipping address, add order attributes, and location id. However, country, state, and city code has to be as per the values specified by the customer before adding items to the cart.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/carts/UpdateCartProperties/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/UpdateCartProperties/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
DeliverySlotID* | string | The unique id of the delivery slot. Specify a valid id
DemandedDeliveryDate* | date-time | The customer's preferred delivery date in `MM-DD-YYYY HH:MM:SS` format
ShippingModeId | int | -NA for now-
locationID | int | The location id of the fulfillment store 
BillingAddress | obj | Specify the billing address of the customer in the respective attributes
ShippingAddress | obj | Specify the preferred shipping address of the customer in the respective attributes
OrderAttributes | obj | Provide the details of order attributes that you want to add/update in the parameters explained below
EntityFieldID | int | Specify the id of the order attribute that you want to update
MerchantID | string | The unique id (GUID) of the merchant
EntityFieldName | string | Specify the name of the order attribute that you want to update
Type | enum | Specify the type of the field area. `1` for single select drop-down box, `2` for radio button, `3` for check-box type
IsPredefined | boolean | Specify `true` if the order attribute is predefined in the Control Panel, specify `false` if free-flow values
IsMandatory | boolean |  Specify `true` if the order attribute is set as a mandatory field, else specify `false`
SelectedValue | boolean |  Specify `true` if the input for the order attribute is mandatory, else specify `false`
lstOMSEntityFieldValues | string | For predefined order attribute values (`IsPredefined` is true) provide values of the attribute as per options configured on Control Panel 
EntityFieldValueID | string | Specify the unique id the order attribute value. Applicable for predefined only attribute names and values (`IsPredefined` is true)
EntityFieldID |  string | Specify the unique id the order attribute name that you want to input for predefined attribute name and values (`IsPredefined` is true)
Value | string | Specify the value of the order attribute that you want to set for the customer. You can use this for free-flow attribute values (`IsPredefined` is false)
IsSelected | boolean | Whether the selected attribute value is applicable for the customer or not

<aside class="notice"> All parameters marked by * are mandatory. </aside>











## Get Cart Items

Retrieves cart items of the user based on the current session.





> Sample Request

```html
https://www.martjack.com/developerapi/Carts/cart/81e77da2-723b-483d-8c0d-49f800c1exxx

```




> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
      "ProductCost":5.650000000000001,
      "ShippingCost":0.5,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":6.15,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Pallav",
      "Bill_LastName":"Kumar",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"55555555",
      "Bill_PostCode":"",
      "Bill_Email":"tom.sawyer@example.com",
      "Ship_FirstName":"Tom",
      "Ship_LastName":"Sawyer",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW2",
      "Ship_City":"846",
      "Ship_CityCode":"846",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"55555555",
      "Ship_PostCode":"",
      "Ship_Email":"tom.sawyer@example.com",
      "CartItems":[  
         {  
            "ProductId":13047461,
            "VariantProductId":0,
            "MRP":0,
            "WebPrice":0,
            "Quantity":1,
            "description":"BUY ONE GET ONE FREE- Medium",
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "CartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":13047273,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357451",
                  "CategoryName":"Chicken",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047215,
                  "VariantProductId":9757487,
                  "MRP":4.25,
                  "WebPrice":3.25,
                  "Quantity":1,
                  "description":"Chicken Supreme",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0ab3f8ab-7840-4d40-bad5-950e64da288a",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Classic"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13317
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"d2b252a0-58ff-4a56-8a2f-a4b828bc15a6",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047267,
                  "VariantProductId":9757725,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Sliced Black Olives",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"c946dfbb-c7d4-4482-be3a-0f55ea0ff701",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13129
               },
               {  
                  "ProductId":13047231,
                  "VariantProductId":9757689,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chargrilled Chicken",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a944f99d-5729-41f1-a51a-a6ca7b7d8637",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"a6d6f5ee-0b60-49b1-a504-9a63b42a4789",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047235,
                  "VariantProductId":9757693,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Calamari Catch",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"5caec831-1597-45ca-af9d-11beafc35b91",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047237,
                  "VariantProductId":9757691,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"ca206f95-ec4b-4a07-8651-652b61838960",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047241,
                  "VariantProductId":9757697,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"10ec62e0-0938-4b4e-a066-254d9aa65818",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"b3aa047a-091d-488f-b8a8-abde211ad008",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13133
               },
               {  
                  "ProductId":13047319,
                  "VariantProductId":0,
                  "MRP":0,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"97fe77f4-412e-4aea-8d3c-e95dd0423861",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"W",
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357450",
                  "CategoryName":"Beef",
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047219,
                  "VariantProductId":9757497,
                  "MRP":4.25,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Classic Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"0255ff10-0bc2-4518-aef5-9af37668750d",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357457",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13319
               },
               {  
                  "ProductId":13047247,
                  "VariantProductId":9757709,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Chillies",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"368a2174-938e-47f2-94e9-aafed11206f8",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047249,
                  "VariantProductId":9757711,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Green Pepper Strips",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"cff5fc90-375e-4914-b09b-1a3a97b64c1e",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047251,
                  "VariantProductId":9757713,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Jalapeno",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"9b9e43cd-a4e2-4ad2-aa5a-eb165c371ecf",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047255,
                  "VariantProductId":9757701,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Mozarella",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"8a61d1b4-c496-4b41-8a3a-c70a0fa510ef",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13219
               },
               {  
                  "ProductId":13047233,
                  "VariantProductId":9757695,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Beef Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"920be3f6-7eff-41d7-9521-fceaae03cd30",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13221
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"fe6c9b1b-55b4-4db0-aea7-fe5bd253865b",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13223
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/4d00cd2b-28e8-4950-b8b9-2ecf50e44933/Images/ProductImages/Source/PWA-PHBOGOF-270718.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00357471",
            "CategoryName":"Deals",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "SupplierName":"KuwaitTestStore",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "ShippingMode":"12141",
            "ShippingModeId":12141,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/cart/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/cart/{merchantId}`



### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session






## Get Cart Items (by AccessToken)

Retrieves cart items of the user based on the current session.





> Sample Request

```html
https://www.martjack.com/developerapi/Carts/cart/81e77da2-723b-483d-8c0d-49f800c1exxx/fj2vrg1g3bpppsypqn4ynxrt

```




> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
      "ProductCost":5.650000000000001,
      "ShippingCost":0.5,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":6.15,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Pallav",
      "Bill_LastName":"Kumar",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Other",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"55555555",
      "Bill_PostCode":"",
      "Bill_Email":"tom.sawyer@example.com",
      "Ship_FirstName":"Pallav",
      "Ship_LastName":"Kumar",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"KW",
      "Ship_StateCode":"KW2",
      "Ship_City":"846",
      "Ship_CityCode":"846",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"55555555",
      "Ship_PostCode":"",
      "Ship_Email":"tom.sawyer@example.com",
      "CartItems":[  
               {  
                  "ProductId":13047237,
                  "VariantProductId":9757691,
                  "MRP":0.5,
                  "WebPrice":0.4,
                  "Quantity":1,
                  "description":"Beef",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"ca206f95-ec4b-4a07-8651-652b61838960",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047241,
                  "VariantProductId":9757697,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Chicken Pepperoni",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"10ec62e0-0938-4b4e-a066-254d9aa65818",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13131
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"b3aa047a-091d-488f-b8a8-abde211ad008",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"13a4fab9-3bbc-484c-b081-b3ed72d83342",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13133
               },
               {  
                  "ProductId":13047257,
                  "VariantProductId":9757699,
                  "MRP":0.5,
                  "WebPrice":0,
                  "Quantity":1,
                  "description":"Pizza Sauce",
                  "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
                  "CartReferenceKey":"fe6c9b1b-55b4-4db0-aea7-fe5bd253865b",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"e4d5eecd-62a1-40a6-bd00-7607f3d1107d",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"W",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00357497",
                  "CategoryName":null,
                  "BrandId":"BB1760",
                  "BrandName":"Pizza Hut",
                  "GroupId":13223
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/4d00cd2b-28e8-4950-b8b9-2ecf50e44933/Images/ProductImages/Source/PWA-PHBOGOF-270718.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00357471",
            "CategoryName":"Deals",
            "BrandId":"BB1760",
            "BrandName":"Pizza Hut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "SupplierName":"KuwaitTestStore",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "ShippingMode":"12141",
            "ShippingModeId":12141,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"4d00cd2b-28e8-4950-b8b9-2ecf50e44933",
            "PaymentType":"OnlineBankTrans",
            "Paymentoption":"OnlineBankTransfer",
            "GatewayId":"10961",
            "GatewayTitle":"OnlineBankTrans",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"Tom",
      "PickupLastName":"Sawyer",
      "PickupEmail":"tom.sawyer@example.com",
      "PickupMobile":"55555555",
      "LocationId":"27299",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/cart/{merchantId}/{accesstoken}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/cart/{merchantId}/{accesstoken}`



### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session





















## Remove a Cart Item

Removes an item of a specific quantity from the current cart.




> Sample Request

```html
https://www.martjack.com/developerapi/Carts/Remove/{MerchantId}/{cartReferneKey}/{quantity}

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
URI | `/Carts/Remove/{MerchantId}/{cartReferneKey}/{quantity}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/Remove/{MerchantId}/{cartReferneKey}/{quantity}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session



### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
cartReferenceKey* | string | Unique reference key of the cart item that you want to remove
quantity* | int | Quantity of the items that you want to remove


<aside class="notice"> All parameters marked by * are mandatory.</aside>






## Remove All Cart Items

> Sample Request

```html
https://www.martjack.com/developerapi/carts/RemoveAll/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample Response

```json
{
    
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Removes all items of the current cart. This does not remove shipping address, billing address or location information.


### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/RemoveAll/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/RemoveAll/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request Path Parameters

Parameter | Type | Description
--------- | ---- | ----------
merchantId* | string | Unique GUID of the merchant

<aside class="notice"> All parameters marked by * are mandatory. </aside>








## Clear Cart Items

Removes entire cart details which include cart items, location, billing address and shipping address.





> Sample Request

```html
https://www.martjack.com/developerapi/Carts/clear/81e77da2-723b-483d-8c0d-49f800c1exxx

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
URI | `/Carts/clear/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/clear/{MerchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant




## Add Order Attributes

Adds order attributes to the cart items which will be reflected once the order is placed. Order attributes are custom fields of an order.




> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddOrderAttributes/98d18d82-ba59-4957-9c92-3f89207a34f6

```


> Sample POST Request

```json
InputFormat=application/json&InputData=[
   {
      "EntityFieldID":1,
      "EntityFieldName":"IsImmediateOrder",
      "Type":"1",
      "IsPredefined":true,
      "IsMandatory":true,
      "SelectedValue":"true",
      "OrderEntityFieldValues":[
         {
            "EntityFieldValueID":1,
            "EntityFieldID":1,
            "Value":"true",
            "IsSelected":true
         }
      ]
   },
   {
      "EntityFieldID":2,
      "EntityFieldName":"channel",
      "Type":"1",
      "IsPredefined":true,
      "IsMandatory":true,
      "SelectedValue":"APP,android",
      "OrderEntityFieldValues":[
         {
            "EntityFieldID":2,
            "EntityFieldValueID":2,
            "Value":"APP,android",
            "IsSelected":true
         }
      ]
   }
]
```


> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/carts/AddOrderAttributes/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/AddOrderAttributes/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
EntityFieldID* | int | Unique id of the order attribute
EntityFieldName | string | Name of the attribute
Type | enum | Specify the type of the field area. `1` for single select drop-down box, `2` for radio button, `3` for check-box type
IsPredefined | boolean | Whether the current attribute is predefined (true) or user defined (false)
IsMandatory | boolean | Whether the current attribute is mandatory (true) or optional (false)
SelectedValue | string | Value selected for the specified attribute
 



<aside class="notice"> All parameters marked by * are mandatory. </aside>































## Update Address

> Sample Request

```html
https://www.martjack.com/developerapi/carts/UpdateAddress/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "Cart":{
      "BillFirstName":"Tom Sawyer",
      "BillMobile":"",
      "BillCountry":"India",
      "BillZip":"",
      "BillCity":"2148",
      "BillCountryCode":"IN",
      "BillOtherCity":"",
      "BillLastName":"Sawyer",
      "BillState":"KA",
      "BillAddress":"#103/1, MG Road",
      "BillAddress1":"#31-220, Town Hall Road",
      "BillTelephone":"",
      "BillTelephoneCode":"",
      "BillMobileCode":"",
      "ShipLastName":"James",
      "ShipTelephone":"1234567899",
      "ShipState":"KA",
      "ShipMobile":"1234567899",
      "ShipCountryCode":"IN",
      "ShipAddress2":"",
      "ShipMobileCode":"",
      "ShipOtherCity":"",
      "ShipAddress1":"",
      "ShipCity":"2148",
      "ShipZip":"",
      "ShipTelephoneCode":"",
      "ShipFirstName":"Tom",
      "ShipCountry":"India",
      "SkipDeliveryAreaValidation":"false",
      "IsShippingAddressDifferent":"false"
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Carts": {
        "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1e288",
        "ProductCost": 60.528000000000006,
        "ShippingCost": 12.9,
        "VoucherDiscount": 0,
        "PromotionDiscount": 0,
        "TaxAmount": 0,
        "OrderTotal": 73.428,
        "VoucherCode": "",
        "UserSelectedCurrency": "OMR",
        "Bill_FirstName": "AutoTestNameBillg23fff",
        "Bill_LastName": "AutoTestLastNameBill",
        "Bill_Address1": "AutoTestAddres1Bill",
        "Bill_Address2": "",
        "Bill_CountryCode": "OM",
        "_Bill_StateCode": "OM1",
        "Bill_City": "AL KHUWAIR",
        "Bill_CityCode": "2148",
        "Bill_Telephone": "9967819918",
        "Bill_Mobile": "9967819918",
        "Bill_PostCode": "",
        "Bill_Email": "",
        "Ship_FirstName": "AutoTestNameBillg23fff",
        "Ship_LastName": "AutoTestLastNameBill",
        "Ship_Address1": "AutoTestAddres1Bill",
        "Ship_Address2": "",
        "Ship_CountryCode": "OM",
        "Ship_StateCode": "OM1",
        "Ship_City": "2148",
        "Ship_CityCode": "2148",
        "Ship_OtherCityName": "",
        "Ship_Telephone": "9967819918",
        "Ship_Mobile": "9967819918",
        "Ship_PostCode": "",
        "Ship_Email": "",
        "CartItems": [
            {
                "ProductId": 12688208,
                "VariantProductId": 0,
                "MRP": 4.5,
                "WebPrice": 0,
                "Quantity": 1,
                "description": "Seafood Supreme",
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                "CartReferenceKey": "18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                "IsFreeProduct": false,
                "PriceCapped": false,
                "TotalCap": 0,
                "CappedRefKey": "00000000-0000-0000-0000-000000000000",
                "CatalogpromotionDiscount": 0,
                "BundleCartReferenceKey": "00000000-0000-0000-0000-000000000000",
                "BundleCartItems": [
                    {
                        "ProductId": 12688172,
                        "VariantProductId": 9727843,
                        "MRP": 5.9,
                        "WebPrice": 4.5,
                        "Quantity": 1,
                        "description": "Seafood Supreme Crust",
                        "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                        "CartReferenceKey": "752b5193-af86-43ea-86e4-b9e5ccb8a941",
                        "TotalCap": 0,
                        "CatalogpromotionDiscount": 0,
                        "BundleCartReferenceKey": "18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                        "ItemPromotionDiscountAmount": 0,
                        "IsPrimaryProduct": true,
                        "IsPromotionProduct": false,
                        "VariantsInfo": [
                            {
                                "PropertyName": "Crust",
                                "Value": "Pan"
                            },
                            {
                                "PropertyName": "Size",
                                "Value": "Medium"
                            }
                        ],
                        "Por": "",
                        "IsDefaultBundleItem": true,
                        "CartPromotionRules": [],
                        "CategoryId": "CN00215782",
                        "CategoryName": null,
                        "BrandId": "311548",
                        "BrandName": "PizzaHut",
                        "GroupId": 0
                    }
                ],
                "IsPrimaryProduct": false,
                "ItemPromotionDiscountAmount": 0,
                "IsPromotionProduct": false,
                "Por": "",
                "IsDefaultBundleItem": false,
                "ProductImage": "//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-SEAFOOD_ISLAND_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
                "CartPromotionRules": [],
                "CategoryId": "CN00215794",
                "CategoryName": null,
                "BrandId": "311548",
                "BrandName": "PizzaHut",
                "ParentCartItems": null
            },
            {
                "ProductId": 12688220,
                "VariantProductId": 0,
                "MRP": 90.567,
                "WebPrice": 50.328,
                "Quantity": 1,
                "description": "Classic Pepperoni",
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                "CartReferenceKey": "ff462a81-699f-4798-9b73-4f9d97536099",
                "IsFreeProduct": false,
                "PriceCapped": false,
                "TotalCap": 0,
                "CappedRefKey": "00000000-0000-0000-0000-000000000000",
                "CatalogpromotionDiscount": 0,
                "BundleCartReferenceKey": "00000000-0000-0000-0000-000000000000",
                "BundleCartItems": [
                    {
                        "ProductId": 12688160,
                        "VariantProductId": 0,
                        "MRP": 5.7,
                        "WebPrice": 5.7,
                        "Quantity": 1,
                        "description": "Classic Pepperoni Crust",
                        "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                        "CartReferenceKey": "ab59003f-81b5-45ea-8de8-4cd76f9be21e",
                        "TotalCap": 0,
                        "CatalogpromotionDiscount": 0,
                        "BundleCartReferenceKey": "ff462a81-699f-4798-9b73-4f9d97536099",
                        "ItemPromotionDiscountAmount": 0,
                        "IsPrimaryProduct": false,
                        "IsPromotionProduct": false,
                        "VariantsInfo": [],
                        "Por": "",
                        "IsDefaultBundleItem": true,
                        "CartPromotionRules": [],
                        "CategoryId": "CN00215782",
                        "CategoryName": null,
                        "BrandId": "311548",
                        "BrandName": "PizzaHut",
                        "GroupId": 0
                    }
                ],
                "IsPrimaryProduct": false,
                "ItemPromotionDiscountAmount": 0,
                "IsPromotionProduct": false,
                "Por": "",
                "IsDefaultBundleItem": false,
                "ProductImage": "//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-Classic_Pepperoni_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
                "CartPromotionRules": [],
                "CategoryId": "CN00215792",
                "CategoryName": null,
                "BrandId": "311548",
                "BrandName": "PizzaHut",
                "ParentCartItems": null
            }
        ],
        "Suppliers": [
            {
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                "SupplierName": "Pizza Hut test",
                "IsSelected": false,
                "OrderStatus": null
            }
        ],
        "ShippingOptions": [
            {
                "SupplierId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                "ShippingMode": "12174",
                "ShippingModeId": 12174,
                "isselected": true
            }
        ],
        "PaymentOptionsChannel": [
            {
                "MerchantId": "81e77da2-723b-483d-8c0d-49f800c1e288",
                "PaymentType": "COD",
                "Paymentoption": "COD",
                "GatewayId": "0",
                "GatewayTitle": "COD",
                "PaidAmount": 0,
                "EnalbeOTP": false
            }
        ],
        "ErrorCollection": null,
        "GiftMsg": "",
        "DemandedDeliveryDate": "/Date(1536228000000+0530)/",
        "RemainTotal": 0,
        "ShippingZoneType": null,
        "DeliverySlotID": 0,
        "FailedProducts": null,
        "PickupFirstName": "AutoTestNameBillg23fff",
        "PickupLastName": "AutoTestLastNameBill",
        "PickupEmail": "",
        "PickupMobile": "9967819918",
        "LocationId": "22612",
        "TaxDetail": [],
        "ComboSuggestion": [],
        "ConvertedDeals": []
    },
    "ErrorCode": 0
}
```

Updates shipping address and billing address of an order.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/carts/UpdateAddress/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/UpdateAddress/{merchantId}`


### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Body Parameters

Parameter | Type | Description 
--------- | ---- | ----------
locationID* | int | The location id of the order fulfillment store
BillingAddress | obj | Specify the billing address of the customer in the respective attributes
ShippingAddress | obj | Specify the preferred shipping address of the customer in the respective attributes
BillMobile | string | Mobile number of the customer as per the billing address
BillCountry | string | Full name of the country associated to the billing address
BillZip | string | ZIP code of the billing address
BillCity | string | City name of the billing address
BillCountryCode | string | Alpha-2 code of the country with respect to the billing address. Example: IN (for India), AU (for Australia), and BR (for Brazil) 
BillLastName | string | Last name of the customer as per the billing address 
BillState | string | Full name of the state associated to the billing address
BillAddress | string | Specify door number, building name, street, area and and other details of the billing address
BillAddress1 | string | Specify any missing information in the `BillAddress`. For example, landmark
BillTelephone | string | Land line number associated to the billing address (without STD code)
BillTelephoneCode | string | STD code of the land line number
BillMobileCode, ShipLastName,ShipTelephone..  | obj | Similar to the billing address details, specify the shipping address in respective fields
SkipDeliveryAreaValidation | boolean | Specify `true` to validate the delivery location before updating the details. Specify `false` to ignore shipping area validation
IsShippingAddressDifferent | boolean | Specify `true` if shipping address is different from the billing address, specify `false` if shipping and billing addresses are same. You can just pass billing address details and make this attribute 'false' to automatically consider  billing address as shipping address 

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | If the item is a gift item and is given for free of cost
PriceCapped | float | -Deprecated-
TotalCap | float | -Deprecated-
CappedRefKey | string | -Deprecated-
SupplierId | string | Unique GUID of the merchant (product supplier)
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
GroupId | int | Unique group id associated to the product. Applicable for bundle or deal products







## Apply Voucher to Cart Items


> Sample Request

```html
https://www.martjack.com/developerapi/Carts/ApplyVoucher/f48fdd16-92db-4188-854d-1ecd9b62xxxx/SAMPLE123
```



> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Discount Voucher SAMPLE123 has been applied successfully",
   "Carts":{  
      "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
      "ProductCost":0.75,
      "ShippingCost":50,
      "VoucherDiscount":10,
      "PromotionDiscount":0.025,
      "TaxAmount":0.03,
      "OrderTotal":50.255,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Smoke",
      "Bill_LastName":"Automation",
      "Bill_Address1":"Hyderabad",
      "Bill_Address2":"Hyderabad",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"TG",
      "Bill_City":"Hyderabad",
      "Bill_CityCode":"195",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"-8899887xxx",
      "Bill_Mobile":"91-8899887xxx",
      "Bill_PostCode":"500002",
      "Bill_Email":"store2@example.com",
      "Ship_FirstName":"Smoke",
      "Ship_LastName":"Automation",
      "Ship_Address1":"Hyderabad",
      "Ship_Address2":"Hyderabad",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"TG",
      "Ship_City":"195",
      "Ship_CityCode":"195",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"-8899887xxx",
      "Ship_Mobile":"91-8899887xxx",
      "Ship_PostCode":"500002",
      "Ship_Email":"store2@qaenv1.com",
      "CartItems":[  
         {  
            "ProductId":13071204,
            "VariantProductId":0,
            "MRP":0.25,
            "WebPrice":0.25,
            "Quantity":3,
            "description":"7Up Can",
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "CartReferenceKey":"d2defd3d-a8d3-49cb-9f75-b521cd3f9568",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0.025,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/dc21b529-2057-402a-972a-e1ba0c8a08eb/Images/ProductImages/Source/7up_showcase-min.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  
               {  
                  "Description":"Sample description",
                  "DiscountAmount":10,
                  "RuleId":33742,
                  "Title":"Sample Rule",
                  "VoucherCode":"SAMPLE123"
               }
            ],
            "CategoryId":"CU00368302",
            "CategoryName":null,
            "BrandId":"316792",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "SupplierName":"Testorg13",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "ShippingMode":"12292",
            "ShippingModeId":12292,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"/images/paymentoptions/Payment_RazorPay.jpg\" style=\"margin-left:4px;\" /><div >You can pay using RazorPay</div></div>",
            "GatewayId":"13084",
            "GatewayTitle":"RazorPAy",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
                 
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"James",
      "PickupLastName":"Thomas",
      "PickupEmail":"store2@example.com",
      "PickupMobile":"91-8899887888",
      "LocationId":"0",
      "TaxDetail":[  
         {  
            "TaxCategory":"CGST",
            "TaxRate":"6",
            "TaxAmount":0.015,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4542"
         },
         {  
            "TaxCategory":"SGST",
            "TaxRate":"6",
            "TaxAmount":0.0135,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4544"
         },
         {  
            "TaxCategory":"IGST",
            "TaxRate":"0",
            "TaxAmount":0,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4546"
         }
      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}
```

Lets you redeem a voucher on the cart items. You can use either a discount voucher or rule based voucher.

<aside class="notice"> Vouchers are created on the Anywhere Commerce's Control Panel. </aside>

### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/ApplyVoucher/{merchantId}/{voucherCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/ApplyVoucher/{merchantId}/{voucherCode}`

### Additional Header Required

Header | Description
------ | -----------
accesstoken* | Access token of the logged in user to validate the session


### Request Path Parameters

Parameter | Type | Description
------- | ------ | ---------
merchantId* | string | Unique GUID of the merchant 
voucherCode* | string | The voucher code that you want to apply

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | If the item is a gift item and is given for free of cost
PriceCapped | float | Deprecated
TotalCap | float | Deprecated
CappedRefKey | string | Deprecated
SupplierId | string | Unique GUID of the merchant (supplier of the product)
Por | enum | The portion of the product for which the voucher is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
GroupId | int | Determines the bundle group id of the nested cart item. Applicable for bundle products
ComboSuggestion | array | Product suggestions based on the cart items to increase the basket/cart size





## Remove Applied Voucher

> Sample Request

```html
https://www.martjack.com/developerapi/Carts/RemoveVoucher/f48fdd16-92db-4188-854d-1ecd9b62xxxx/SAMPLE123
```



> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Discount Voucher SAMPLE123 has been Removed  successfully",
   "Carts":{  
      "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
      "ProductCost":0.75,
      "ShippingCost":50,
      "VoucherDiscount":10,
      "PromotionDiscount":0.025,
      "TaxAmount":0.03,
      "OrderTotal":50.255,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Smoke",
      "Bill_LastName":"Automation",
      "Bill_Address1":"Hyderabad",
      "Bill_Address2":"Hyderabad",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"TG",
      "Bill_City":"Hyderabad",
      "Bill_CityCode":"195",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"-8899887xxx",
      "Bill_Mobile":"91-8899887xxx",
      "Bill_PostCode":"500002",
      "Bill_Email":"store2@example.com",
      "Ship_FirstName":"Smoke",
      "Ship_LastName":"Automation",
      "Ship_Address1":"Hyderabad",
      "Ship_Address2":"Hyderabad",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"TG",
      "Ship_City":"195",
      "Ship_CityCode":"195",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"-8899887xxx",
      "Ship_Mobile":"91-8899887xxx",
      "Ship_PostCode":"500002",
      "Ship_Email":"store2@qaenv1.com",
      "CartItems":[  
         {  
            "ProductId":13071204,
            "VariantProductId":0,
            "MRP":0.25,
            "WebPrice":0.25,
            "Quantity":3,
            "description":"7Up Can",
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "CartReferenceKey":"d2defd3d-a8d3-49cb-9f75-b521cd3f9568",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0.025,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/dc21b529-2057-402a-972a-e1ba0c8a08eb/Images/ProductImages/Source/7up_showcase-min.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  
               {  
                  "Description":"Sample description",
                  "DiscountAmount":10,
                  "RuleId":33742,
                  "Title":"Sample Rule",
                  "VoucherCode":"SAMPLE123"
               }
            ],
            "CategoryId":"CU00368302",
            "CategoryName":null,
            "BrandId":"316792",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "SupplierName":"Testorg13",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "ShippingMode":"12292",
            "ShippingModeId":12292,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"/images/paymentoptions/Payment_RazorPay.jpg\" style=\"margin-left:4px;\" /><div >You can pay using RazorPay</div></div>",
            "GatewayId":"13084",
            "GatewayTitle":"RazorPAy",
            "PaidAmount":0,
            "EnalbeOTP":false
         },
                 
         {  
            "MerchantId":"dc21b529-2057-402a-972a-e1ba0c8a08eb",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(-2208988800000)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"James",
      "PickupLastName":"Thomas",
      "PickupEmail":"store2@example.com",
      "PickupMobile":"91-8899887888",
      "LocationId":"0",
      "TaxDetail":[  
         {  
            "TaxCategory":"CGST",
            "TaxRate":"6",
            "TaxAmount":0.015,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4542"
         },
         {  
            "TaxCategory":"SGST",
            "TaxRate":"6",
            "TaxAmount":0.0135,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4544"
         },
         {  
            "TaxCategory":"IGST",
            "TaxRate":"0",
            "TaxAmount":0,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"4546"
         }
      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "FailedItems":[  

   ],
   "ErrorCode":0
}
```

Removes an applied voucher from the current cart.


### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/RemoveVoucher/{merchantId}/{voucherCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/RemoveVoucher/{merchantId}/{voucherCode}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Path Parameters

Parameter | Type | Description
------- | ------ | ---------
merchantId* | string | Unique GUID of the merchant 
voucherCode* | string | The applied voucher code that you want to remove from the cart

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
ComboSuggestion | array | Suggestions related deal items based on the items in the cart
ConvertedDeals | array | The cart items that are converted to deal items automatically based on the items in the cart
Por | enum | The portion for which the product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
IsDefaultBundleItem | boolean | Whether the current item is in the default bundle item (true) or customized bundle item (false)







## Get Cart Promotions

> Sample Request

```html
https://www.martjack.com/developerapi/carts/GetAllPromotions/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "locationcode": "btm",
  "deliverymode": "ship",
  "promotiontype": "cart",
  "hasvouchers": "true",
  "fromdate": "2018-09-13",
  "todate": "2018-09-13",
  "activestatus": "true",
  "channeltype": "",
  "totime": "",  
  "externalcouponmapped": "",
  "userid": ""
}
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "EligiblePromotions": [
        {
            "promotionid": 30136,
            "promotionname": "CRMTest",
            "promotionrefcode": "9903",
            "description": "CRMTest",
            "locationcodes": [
                "0"
            ],
            "starttime": "/Date(1526992440000+0530)/",
            "endtime": "/Date(1582997160000+0530)/",
            "repetitive": true,
            "allowfurtherpromotions": true,
            "voucherbased": true,
            "firstactivevouchercode": ""
        },
        {
            "promotionid": 30198,
            "promotionname": "VoucherBasedPromotion",
            "promotionrefcode": "VoucherBasedPromotion",
            "description": "VoucherBasedPromotion",
            "locationcodes": [
                "BTM"
            ],
            "starttime": "/Date(1536175860000+0530)/",
            "endtime": "/Date(1538328600000+0530)/",
            "repetitive": true,
            "allowfurtherpromotions": true,
            "voucherbased": true,
            "firstactivevouchercode": "SmokeAutomation"
        }
    ],
    "ErrorCode": 0
}
```

Retrieves the list of offers of the merchant based on the input parameters.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/carts/GetAllPromotions/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/carts/GetAllPromotions/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Body Parameters
Parameter | Type | Description
--------- | ---- | ----------
locationcode | string | The location code of the store to fetch offers associated to the specific store
deliverymode | enum | Filter results (promotions) by delivery mode. Values: `ship` to get promotions applicable only to online orders, `pickup` to get promotions on store pickup orders
promotiontype | enum | Filter results by promotion type. Values: `cart` for cart items based promotions, `catalogue` for catalogue based promotions 
hasvouchers | boolean | Specify `true` to get the list of promotions that have coupon codes, `false` to get promotions that do not have any coupon codes. You can leave it blank to see both kind of promotions
fromdate | date | Get promotions available for a specific duration. Pass the duration in MM/DD/YY format in `fromdate` and `todate` respectively
todate | date | Get promotions available for a specific duration. Pass the duration in MM/DD/YY format between `fromdate` and `todate`
activestatus | boolean | Specify `true` to fetch the list of active promotions only, `false` to fetch both active and inactive coupons
channeltype | string | The channel from which the order is placed. Channel types are predefined in promotions in CP. Example values: Amazon, Myntra, Web
externalcouponmapped | boolean | Specify `true` to fetch promotions that are mapped to external coupons. For example, CRM coupons
userid | string | The unique GUID of the customer to fetch the list of promotions available for that specific customer

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
starttime | date-time | Start date and time of the current promotion
endtime | date-time | End date and time of the current promotion
repetitive | boolean | Whether the promotion rules are repeated for each item or not
allowfurtherpromotions | boolean | Whether further 'Cart Promotions' is allowed to the cart item (even after applying a promotion)









## Get Cart Payment Options


> Sample Request

```html
https://www.martjack.com/developerapi/Carts/PaymentOptions/2c7f2299-9129-4131-839f-b80663cec2e2
```



> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "PaymentOptionsChannel": [
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "5678",
            "Paymentoption": "5678",
            "GatewayId": "10957",
            "GatewayTitle": null,
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "Credit",
            "Paymentoption": "NETWORKONLINE",
            "GatewayId": "12309",
            "GatewayTitle": "Visa/ Master Card",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "OnlineBankTrans",
            "Paymentoption": "OnlineBankTransfer",
            "GatewayId": "10925",
            "GatewayTitle": "Deposit to our Bank Account",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "ChequeDD",
            "Paymentoption": "ChequeDD",
            "GatewayId": "10924",
            "GatewayTitle": "Send Cheque/DD to us",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "Credit",
            "Paymentoption": "Capillary",
            "GatewayId": "12542",
            "GatewayTitle": "CRM Points",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "Credit",
            "Paymentoption": "NOONPAY",
            "GatewayId": "12617",
            "GatewayTitle": "NoonPay",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "COD",
            "Paymentoption": "COD",
            "GatewayId": "0",
            "GatewayTitle": "Pay Cash On Delivery",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "Credit",
            "Paymentoption": "NeoNetwork",
            "GatewayId": "12659",
            "GatewayTitle": "Visa/ Master Card",
            "PaidAmount": 0,
            "EnalbeOTP": false
        },
        {
            "MerchantId": "2c7f2299-9129-4131-839f-b80663cec2e2",
            "PaymentType": "GV",
            "Paymentoption": "Gift Voucher",
            "GatewayId": null,
            "GatewayTitle": "Gift Voucher",
            "PaidAmount": 0,
            "EnalbeOTP": false
        }
    ],
    "ErrorCode": 0
}
```

Retrieves all the supported payment options of the current cart.


### Resource Information

| | |
--------- | ----------- |
URI | `/Carts/PaymentOptions/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/PaymentOptions/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
EnalbeOTP | boolean | Whether OTP based authentication is required for that particular payment option







## Update Shipping Mode

> Sample Request

```html
https://www.martjack.com/developerapi/Carts/ShippingMode/81e77da2-723b-483d-8c0d-49f800c1e288/2323/Change/false
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1e288",
      "ProductCost":60.528000000000006,
      "ShippingCost":12.9,
      "VoucherDiscount":0,
      "PromotionDiscount":0,
      "TaxAmount":0,
      "OrderTotal":73.428,
      "VoucherCode":"",
      "UserSelectedCurrency":"OMR",
      "Bill_FirstName":"AutoTestNameBillg23fff",
      "Bill_LastName":"AutoTestLastNameBill",
      "Bill_Address1":"AutoTestAddres1Bill",
      "Bill_Address2":"",
      "Bill_CountryCode":"OM",
      "_Bill_StateCode":"OM1",
      "Bill_City":"AL KHUWAIR",
      "Bill_CityCode":"2148",
      "Bill_Telephone":"9967819918",
      "Bill_Mobile":"9967819918",
      "Bill_PostCode":"",
      "Bill_Email":"",
      "Ship_FirstName":"AutoTestNameBillg23fff",
      "Ship_LastName":"AutoTestLastNameBill",
      "Ship_Address1":"AutoTestAddres1Bill",
      "Ship_Address2":"",
      "Ship_CountryCode":"OM",
      "Ship_StateCode":"OM1",
      "Ship_City":"2148",
      "Ship_CityCode":"2148",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"9967819918",
      "Ship_Mobile":"9967819918",
      "Ship_PostCode":"",
      "Ship_Email":"",
      "CartItems":[  
         {  
            "ProductId":12688208,
            "VariantProductId":0,
            "MRP":4.5,
            "WebPrice":0,
            "Quantity":1,
            "description":"Seafood Supreme",
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "CartReferenceKey":"18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":12688172,
                  "VariantProductId":9727843,
                  "MRP":5.9,
                  "WebPrice":4.5,
                  "Quantity":1,
                  "description":"Seafood Supreme Crust",
                  "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
                  "CartReferenceKey":"752b5193-af86-43ea-86e4-b9e5ccb8a941",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"18e18f60-a1a9-44f0-b256-536e2fe0a3a7",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Medium"
                     }
                  ],
                  "Por":"",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CN00215782",
                  "CategoryName":null,
                  "BrandId":"311548",
                  "BrandName":"PizzaHut",
                  "GroupId":0
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-SEAFOOD_ISLAND_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CN00215794",
            "CategoryName":null,
            "BrandId":"311548",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         },
         {  
            "ProductId":12688220,
            "VariantProductId":0,
            "MRP":90.567,
            "WebPrice":50.328,
            "Quantity":1,
            "description":"Classic Pepperoni",
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "CartReferenceKey":"ff462a81-699f-4798-9b73-4f9d97536099",
            "IsFreeProduct":false,
            "PriceCapped":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":12688160,
                  "VariantProductId":0,
                  "MRP":5.7,
                  "WebPrice":5.7,
                  "Quantity":1,
                  "description":"Classic Pepperoni Crust",
                  "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
                  "CartReferenceKey":"ab59003f-81b5-45ea-8de8-4cd76f9be21e",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0,
                  "BundleCartReferenceKey":"ff462a81-699f-4798-9b73-4f9d97536099",
                  "ItemPromotionDiscountAmount":0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  

                  ],
                  "Por":"",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CN00215782",
                  "CategoryName":null,
                  "BrandId":"311548",
                  "BrandName":"PizzaHut",
                  "GroupId":0
               }
            ],
            "IsPrimaryProduct":false,
            "ItemPromotionDiscountAmount":0,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images-cdn-test.azureedge.net/azure/test-resources/81e77da2-723b-483d-8c0d-49f800c1e288/Images/ProductImages/Source/Opt-Classic_Pepperoni_showcase.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CN00215792",
            "CategoryName":null,
            "BrandId":"311548",
            "BrandName":"PizzaHut",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c11e288",
            "SupplierName":"Pizza Hut test",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "ShippingMode":"2323",
            "ShippingModeId":2323,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1e288",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"/Date(1536228000000+0530)/",
      "RemainTotal":0,
      "ShippingZoneType":null,
      "DeliverySlotID":0,
      "FailedProducts":null,
      "PickupFirstName":"AutoTestNameBillg23fff",
      "PickupLastName":"AutoTestLastNameBill",
      "PickupEmail":"",
      "PickupMobile":"9967819918",
      "LocationId":"22612",
      "TaxDetail":[  

      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "ErrorCode":0
}
```

Updates shipping mode of the cart for the current customer.

### Resource Information

| | |
--------- | ----------- |
URI | `/Carts/ShippingMode/{merchantId}/{shippingModeID}/Change/{ispickupshippingMode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/ShippingMode/{merchantId}/{shippingModeID}/Change/{ispickupshippingMode}`

### Additional Header Required

Header | Description
------ | -----------
accesstoken* | Access token of the logged in user to validate the session


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
shippingModeID* | int | Unique id of the new shipment mode
ispickupshippingMode* | boolean | Specify `true` for in store pickup, else specify `false`

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | Whether the current item is a gift product that is given for free or along with other product
PriceCapped | boolean | -NA-
CatalogpromotionDiscount | float | Catalog promotion discount amount applied on the cart items 








## Set Delivery Slot

> Sample Request

```html
https://www.martjack.com/developerapi/carts/SetDeliverySlot/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
InputFormat=application/json&InputData={  
   "DeliverySlotId":59849,
   "DeliveryDate":"08-31-2018 09:00:00"
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
      "ProductCost":1001.0,
      "ShippingCost":0.0,
      "VoucherDiscount":0.0,
      "PromotionDiscount":0.0,
      "TaxAmount":0.0,
      "OrderTotal":1001.0,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Tom",
      "Bill_LastName":"Sawyer",
      "Bill_Address1":"Hanuman tekdi",
      "Bill_Address2":"goregaon",
      "Bill_CountryCode":"IN",
      "_Bill_StateCode":"MH",
      "Bill_City":"Mumbai",
      "Bill_CityCode":"321",
      "Bill_OtherCityName":"Mumbai",
      "Bill_Telephone":"8080537xxx",
      "Bill_Mobile":"8080537xxx",
      "Bill_PostCode":"400063",
      "Bill_Email":"tom@example.com",
      "Ship_FirstName":"Tom",
      "Ship_LastName":"Sawyer",
      "Ship_Address1":"Hanuman tekdi",
      "Ship_Address2":"goregaon",
      "Ship_CountryCode":"IN",
      "Ship_StateCode":"MH",
      "Ship_City":"321",
      "Ship_CityCode":"321",
      "Ship_OtherCityName":"Mumbai",
      "Ship_Telephone":"8080537xxx",
      "Ship_Mobile":"8080537xxx",
      "Ship_PostCode":"400063",
      "Ship_Email":"tom.s@example.com",
      "CartItems":[  
         {  
            "ProductId":12106630,
            "VariantProductId":8652986,
            "MRP":140.0,
            "WebPrice":91.0,
            "Quantity":11.0,
            "description":"Sunday Refined Sunflower Oil",
            "SupplierId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "CartReferenceKey":"79e37f50-0a67-4c9a-b4c7-15947ea0b8f1",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "VariantsInfo":[  
               {  
                  "PropertyName":"Volume",
                  "Value":"1L Pouch"
               }
            ],
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"//images.sg.content-cdn.io/cdn//in-resources/e04386d8-7ca8-4fa3-b8b8-6c606844d257/Images/ProductImages/Source/100053825_H.jpg;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00328762",
            "CategoryName":null,
            "BrandId":"293130",
            "BrandName":"Sunday",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "SupplierName":"Hypercity Fresh",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "ShippingMode":"11334",
            "ShippingModeId":11334,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"//storage.sg.content-cdn.io/in-resources/e04386d8-7ca8-4fa3-b8b8-6c606844d257/Stylesheet/images/logo/razor_pay_cc.png\" alt=\"RazorPay - CC\" /></div>\n",
            "GatewayId":"12186",
            "GatewayTitle":"Credit/Debit Card",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"//storage.sg.content-cdn.io/in-resources/e04386d8-7ca8-4fa3-b8b8-6c606844d257/Stylesheet/images/logo/razor_pay_netbanking.png\"  alt=\"RazorPay - NetBanking\" /></div>",
            "GatewayId":"12188",
            "GatewayTitle":"Net Banking",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img alt=\"RazorPay _Wallets\" src=\"//storage.sg.content-cdn.io/in-resources/e04386d8-7ca8-4fa3-b8b8-6c606844d257/Stylesheet/images/logo/razor_pay_wallets1.png\" /></div>\n",
            "GatewayId":"12190",
            "GatewayTitle":"Wallets",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img alt=\"RazorPay - PayTm\" src=\"//storage.sg.content-cdn.io/in-resources/e04386d8-7ca8-4fa3-b8b8-6c606844d257/Stylesheet/images/logo/razor_pay_paytm.png\" style=\"display:inline-block;\" /></div>",
            "GatewayId":"12192",
            "GatewayTitle":"PAYTM",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"/images/paymentoptions/Payment_RazorPay.jpg\" style=\"margin-left:4px;\" /><div >You can pay using PaymentWallet</div></div>",
            "GatewayId":"12516",
            "GatewayTitle":"Wallets",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         }
      ],
      "ErrorCollection":null,
      "GiftMsg":"",
      "DemandedDeliveryDate":"2018-11-28T00:00:00",
      "RemainTotal":0.0,
      "ShippingZoneType":null,
      "DeliverySlotID":33494,
      "FailedProducts":null,
      "PickupFirstName":"amit",
      "PickupLastName":"kumar",
      "PickupEmail":"jva@gmail.com",
      "PickupMobile":"8080537377",
      "LocationId":"18360",
      "TaxDetail":[  
         {  
            "TaxCategory":"",
            "TaxRate":"0",
            "TaxAmount":0.0,
            "IsTaxRatePercentage":false,
            "TaxCode":"0",
            "TaxCategoryID":"0"
         }
      ],
      "ComboSuggestion":[  

      ],
      "ConvertedDeals":[  

      ]
   },
   "ErrorCode":0
}
```

Lets you set delivery slot for the current cart.


### Resource Information

| | |
--------- | ----------- |
URI | `/Carts/SetDeliverySlot/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Carts/SetDeliverySlot/{merchantId}`

### Additional Header Required

Header | Description
------ | -----------
accesstoken* | Access token of the logged in user to validate the session


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
DeliverySlotId* | int | Unique id of the delivery slot to which you want to set the delivery slot
DeliveryDate* | date-time | Customer preferred delivery slot

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | Whether the item is a free gift item
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
ComboSuggestion | array | Deal item suggestions based on the cart items
ConvertedDeals | array | The cart items that are converted to deal items 



## Get Delivery Slots

> Sample Request

```html
https://www.martjack.com/developerapi/carts/DeliverySlots/e04386d8-7ca8-4fa3-b8b8-6c606844d257
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "DaySlots":[  
      {  
         "Day":"Today",
         "ETA":0.0,
         "Slots":[  
            {  
               "FormatedSlotRange":"10:00 AM - 01:00 PM",
               "FormatedDate":null,
               "IsDisabled":true,
               "DeliveryDate":"2018-11-28T13:48:39.5872032",
               "DeliverySlotDate":"11/28/2018",
               "DeliverySlotID":33466,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T10:00:00",
               "EndTime":"2018-11-20T13:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"01:00 PM - 04:00 PM",
               "FormatedDate":null,
               "IsDisabled":true,
               "DeliveryDate":"2018-11-28T13:48:39.5872032",
               "DeliverySlotDate":"11/28/2018",
               "DeliverySlotID":33480,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T13:00:00",
               "EndTime":"2018-11-20T16:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"04:00 PM - 07:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-28T13:48:39.5872032",
               "DeliverySlotDate":"11/28/2018",
               "DeliverySlotID":33494,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T16:00:00",
               "EndTime":"2018-11-20T19:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"07:00 PM - 10:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-28T13:48:39.5872032",
               "DeliverySlotDate":"11/28/2018",
               "DeliverySlotID":36716,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T19:00:00",
               "EndTime":"2018-11-20T22:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            }
         ],
         "DeliveryDate":"2018-11-28T13:48:39.5872032",
         "DeliverySlotDate":"11282018"
      },
      {  
         "Day":"Tomorrow ",
         "ETA":0.0,
         "Slots":[  
            {  
               "FormatedSlotRange":"10:00 AM - 01:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-29T13:48:39.5872032",
               "DeliverySlotDate":"11/29/2018",
               "DeliverySlotID":33468,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T10:00:00",
               "EndTime":"2018-11-20T13:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"01:00 PM - 04:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-29T13:48:39.5872032",
               "DeliverySlotDate":"11/29/2018",
               "DeliverySlotID":33482,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T13:00:00",
               "EndTime":"2018-11-20T16:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"04:00 PM - 07:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-29T13:48:39.5872032",
               "DeliverySlotDate":"11/29/2018",
               "DeliverySlotID":33496,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T16:00:00",
               "EndTime":"2018-11-20T19:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"07:00 PM - 10:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-29T13:48:39.5872032",
               "DeliverySlotDate":"11/29/2018",
               "DeliverySlotID":36718,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T19:00:00",
               "EndTime":"2018-11-20T22:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            }
         ],
         "DeliveryDate":"2018-11-29T13:48:39.5872032",
         "DeliverySlotDate":"11292018"
      },
      {  
         "Day":"30 Nov, Fri",
         "ETA":0.0,
         "Slots":[  
            {  
               "FormatedSlotRange":"10:00 AM - 01:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-30T13:48:39.5872032",
               "DeliverySlotDate":"11/30/2018",
               "DeliverySlotID":33470,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T10:00:00",
               "EndTime":"2018-11-20T13:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"01:00 PM - 04:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-30T13:48:39.5872032",
               "DeliverySlotDate":"11/30/2018",
               "DeliverySlotID":33484,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T13:00:00",
               "EndTime":"2018-11-20T16:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"04:00 PM - 07:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-30T13:48:39.5872032",
               "DeliverySlotDate":"11/30/2018",
               "DeliverySlotID":33498,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T16:00:00",
               "EndTime":"2018-11-20T19:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":24.0,
               "Status":true,
               "IsExpress":false
            },
            {  
               "FormatedSlotRange":"07:00 PM - 10:00 PM",
               "FormatedDate":null,
               "IsDisabled":false,
               "DeliveryDate":"2018-11-30T13:48:39.5872032",
               "DeliverySlotDate":"11/30/2018",
               "DeliverySlotID":33512,
               "MerchantID":"e04386d8-7ca8-4fa3-b8b8-6c606844d257",
               "StartTime":"2018-11-20T19:00:00",
               "EndTime":"2018-11-20T22:00:00",
               "LeadTime":120.0,
               "Intervel":0.0,
               "MaxOrders":20.0,
               "Status":true,
               "IsExpress":false
            }
         ],
         "DeliveryDate":"2018-11-30T13:48:39.5872032",
         "DeliverySlotDate":"11302018"
      }
   ],
   "ErrorCode":0
}
```



Retrieves all the available delivery slots of the current cart items

### Resource Information

| | |
--------- | ----------- |
URI | `/Carts/DeliverySlots/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL
`https://{host}/developerapi/Carts/DeliverySlots/{merchantId}`

### Additional Header Required

Header | Description
------ | -----------
accesstoken* | Access token of the logged in user to validate the session


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsFreeProduct | boolean | Whether the item is a free gift item
Por | enum | The portion of the product for which the topping is applied. Value: W for whole, R for right, L for left (left, right usually applies for toppings)
ComboSuggestion | array | Suggestions related the deal items based on the items in the cart
ConvertedDeals | array | The cart items that are converted to deal items 







## Get Product Recommendations

> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Carts/TargetBlocks/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample Response

```json
{
    "ProductIds": [
        13067043,
        13067125,
        13067247
    ],
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Retrieves product recommendations based on the cart items.


### Resource Information
| | |
--------- | ----------- |
URI | `Carts/TargetBlocks/{merchantId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`http://{host}/developerapi/Carts/TargetBlocks/{merchantId}`

### Additional Header Required

Header | Description
----- | -----------
AccessToken* | Access token of the current session (you can generate using GET AccessToken API)





## Get Common Stores for Cart Items

Retrieves the details of stores in which the stock of a specific cart item is available. You can also search by he available stock quantity.



> Sample Request

```html
https://www.martjack.com/developerapi/Carts/GetCommonStoresforCartItems/f48fdd16-92db-4188-854d-1ecd9b62d066

```

> Sample POST Request

```json

MerchantID=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData=
{
  "products": [
    {
      "ProductId": "0",
      "VariantProductId": "0",
      "ProductSku": "61751356",
      "Quantity": 1
    }
  ],
  "Longitude": "",
  "Latitude": ""
}

```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Locations received",
    "Locations": [
        {
            "DistancefromInputLatLong": 0,
            "ParentLocationID": 0,
            "LocationId": 22880,
            "LocationCode": "PIJ",
            "LocationName": "7-PIJ-Justice Pondok Indah",
            "Address1": "Pondok Indah Mall 2 2nd Floor, 210",
            "Address2": "",
            "City": "25676",
            "CityName": null,
            "Area": "",
            "State": "ID10",
            "StateName": null,
            "Country": "ID",
            "CountryName": null,
            "Pin": "12310",
            "Contact1": "021-75920875",
            "Contact2": "",
            "Description": "",
            "Latitude": -6.26557,
            "Longitude": 106.784,
            "LocationType": null,
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "IsDistributionCenter": true,
            "EmailId": "justice.pon.ind@exampleretail.com",
            "IsParticipateInStock": true,
            "IsDefaultLocation": false,
            "IsOfflinneCheckoutEnabled": false,
            "IsPointOfSale": false,
            "IsOfflineDeals": false,
            "IsInStorePickup": true,
            "Remarks": null,
            "CST": "",
            "VAT": "",
            "TINNo": "",
            "GSTINNO": "",
            "IsReversePickupEnabled": false,
            "IsDefaultLNG_LocationName": true,
            "IsDefaultLNG_Description": true,
            "IsDefaultLNG_Address1": true,
            "StoreTimings": null,
            "HomeDeliveryTimings": null,
            "TakeawayTimings": null
        },
        {
            "DistancefromInputLatLong": 0,
            "ParentLocationID": 0,
            "LocationId": 22888,
            "LocationCode": "KKJ",
            "LocationName": "7-KKJ-Justice Kota Kasablanka  ",
            "Address1": "Level-2, 239A\r\n",
            "Address2": "",
            "City": "25676",
            "CityName": null,
            "Area": "",
            "State": "ID10",
            "StateName": null,
            "Country": "ID",
            "CountryName": null,
            "Pin": "12870",
            "Contact1": "021-29626167",
            "Contact2": "",
            "Description": "",
            "Latitude": -6.22387,
            "Longitude": 106.843,
            "LocationType": null,
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "IsDistributionCenter": true,
            "EmailId": "justice.kot.kas@exampleretail.com",
            "IsParticipateInStock": true,
            "IsDefaultLocation": false,
            "IsOfflinneCheckoutEnabled": false,
            "IsPointOfSale": false,
            "IsOfflineDeals": false,
            "IsInStorePickup": true,
            "Remarks": null,
            "CST": "",
            "VAT": "",
            "TINNo": "",
            "GSTINNO": "",
            "IsReversePickupEnabled": false,
            "IsDefaultLNG_LocationName": true,
            "IsDefaultLNG_Description": true,
            "IsDefaultLNG_Address1": true,
            "StoreTimings": null,
            "HomeDeliveryTimings": null,
            "TakeawayTimings": null
        },
        {
            "DistancefromInputLatLong": 0,
            "ParentLocationID": 0,
            "LocationId": 25687,
            "LocationCode": "LPJ",
            "LocationName": "7-LPJ-Justice Lippo Puri",
            "Address1": "Jl Puri Indah Raya Blok U 1, Puri Indah CBD, Jakarta Barat",
            "Address2": "",
            "City": "",
            "CityName": null,
            "Area": "",
            "State": "ID-JK",
            "StateName": null,
            "Country": "ID",
            "CountryName": null,
            "Pin": "11610",
            "Contact1": "",
            "Contact2": "",
            "Description": "",
            "Latitude": -6.18758,
            "Longitude": 106.739,
            "LocationType": null,
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "IsDistributionCenter": true,
            "EmailId": "justice.lip.pur@examplegroup.com",
            "IsParticipateInStock": true,
            "IsDefaultLocation": false,
            "IsOfflinneCheckoutEnabled": false,
            "IsPointOfSale": false,
            "IsOfflineDeals": false,
            "IsInStorePickup": true,
            "Remarks": null,
            "CST": "",
            "VAT": "",
            "TINNo": "",
            "GSTINNO": "",
            "IsReversePickupEnabled": false,
            "IsDefaultLNG_LocationName": true,
            "IsDefaultLNG_Description": true,
            "IsDefaultLNG_Address1": true,
            "StoreTimings": null,
            "HomeDeliveryTimings": null,
            "TakeawayTimings": null
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `Carts/GetCommonStoresforCartItems/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Carts/GetCommonStoresforCartItems/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
ProductId** | int | Unique id of the product to get the stores stocking that specific product
ProductSKU** | string | Unique SKU of the product to get the stores stocking that specific product
VariantProductSKU | string | Unique SKU of the variant product for which you want to fetch available stores. Default value: 0
Quantity | int | To get stores stocking a specific quantity of the product, specify the stock quantity
Latitude | float | Get common stores in the specific latitude and longitude
Longitude | float | Get common stores in the specific latitude and longitude



<aside class="notice"> **Pass any one parameter - either ProductId or ProductSKU. </aside>



## Get Saved Cart Items

Retrieves the details of cart items saved for a specific user. Cart abandoned items will be saved in the cart automatically.





> Sample Request

```html
https://www.martjack.com/developerapi/Customer/SavedCart/9820eca5-d11f-4df1-9b20-983a45ea9631/0025fc54-a2d2-4ba8-800f-3c0ac91d9385

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "SavedCartItems": [
    {
      "CartItemId": 13222238,
      "ProductId": 11000246,
      "VariantProductId": 6752012,
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "StockAvailability": true,
      "LastUpdated": "/Date(1474022999000+0530)/"
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/SavedCart/{merchantId}/{UserId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Customer/SavedCart/{merchantId}/{UserId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
user* | string | Unique GUID of the user to fetch saved cart items


<aside class="notice"> All parameters marked by * are mandatory. </aside>



### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
CartItemId | int | Unique cart id
ProductId | long | Unique id of the product in cart
VariantProductId | long | Unique id of the variant product
StockAvailability | boolean | Whether the product is in stock or not
LastUpdated | date | Date (in UST) when the cart is recently updated








