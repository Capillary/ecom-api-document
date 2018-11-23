# Carts
Cart keeps the record of the items that a customer selects from the merchant store to buy. The `carts` resource provides APIs to make modifications to the cart items, shipping modes, coupons; and retrieve cart items, shipping modes, payment options, and online payment types.



## Send OTP

> Sample POST Request

```html
https://www.martjack.com/developerapi/carts/SendOTP/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{
  "customer": {
    "UserName": "tom.sawyer@example.com",
    "merchantId": "81e77da2-723b-483d-8c0d-49f800c1exxx",
    "MobileNo": "917000000000"
  }
}
```

### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/SendOTP/{{MerchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/carts/SendOTP/{{MerchantId}}`

### Request Parameters
Parameter | Description
--------- | -----------
UserName* | Username of the customer's account (mobile number or email id)
merchantId* | The unique id (GUID) of the merchant in which the customer has registered
MobileNo* | The registered mobile number to which the OTP has to be sent 

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


## Validate OTP
> Sample Request

```html

```

> Sample POST Request

```json
{
"OTP": "345432",
"mobile": "7411000000"
}	

```

> Sample POST Request

```json

```

Validates OTP sent to a customer's registered mobile number.

### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/V2/ValidateOTP/{{merchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/carts/V2/ValidateOTP/{{merchantId}}`

### Request Parameters
Parameter | Description
--------- | -----------
OTP* | The verification code received by the customer on his/her mobile number
mobile* | The registered mobile number to which the OTP has to be sent 



## Add Items to Cart (Normal/Variant/Default Bundle) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{
   "cart":{
      "DelveryMode":"H",
      "Item":{
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
   }
}
```

> Sample POST Request

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

Add items normal, variant, and/or  product and non-customized default bundle product

### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`



### Request Body Parameters

Header Name | Type | Value
----------- | ---- | --
DelveryMode | enum | Values: `H` for home delivery and `S` for store pickup
Status | enum | Status of the cart item. Specify `A` to add item to cart
VariantProductID | long | Unique id of the variant product 
LocationId | long | Unique id of the current store location 
CartReferenceKey | string | Unique id of the line item added to cart. It is used in updating item quantity in cart
ProductID | long | Unique id of the product generated by the system
Quantity | string | Quantity of the items that you want to add or update in cart






## Add Items to Cart (Default Deal) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{
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

> Sample POST Request

```json

```

Lets you add normal product items, variant product details, and non-customized default bundle products to cart.

### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`

### Request Attributes
Header Name | Value
----------- | ------
ShipCity | Unique code of the city (as saved in the system) to which the item has to be shipped. Example: 0562 (for Agra), and 250 (Victoria)
ShipCountry | Alpha-2 code of the country. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipState | State’s postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
DelveryMode | The preferred delivery mode of the current item. Value: `H` for home delivery, `S` for takeaway items
Item | Details of the product with the attributes mentioned below
ProductID | Unique id of the parent product that you want to add to cart
VariantProductID | Unique id of the variant product that you want to add to cart
Quantity | Quantities of the item that you want to add
Status | A
LocationId | Location id of the order fulfillment location
Portion | W, R, L (whole, left, right applies for topping)
CartReferenceKey | Internal reference id of the specific item of the cart
ChildItem | Similar to the parent product details, specify the details of child items that you want add to cart
ProductID | 8293826
VariantProductID | 0
Quantity | Quantities of the specific item
Status | A
Portion | Only applicable for toppings. W, R, L (whole, left, right applies for topping)
GroupID | The group id of the specific item. Applicable in case of a bundle or deal product








## Add Items to Cart (Customized Bundle/Deal) 

> Sample Request

```html
https://www.martjack.com/developerapi/carts/AddCartItems/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json

```

> Sample POST Request

```json

```


### Resource Information
Parameter | Description
--------- | -----------
URI | `carts/AddCartItems/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`https://{host}/developerapi/carts/AddCartItems/{merchantId}`

### Request Attrtbutes
Header Name | Value
----------- | ------




## Update Quantity of Cart Items



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

Updates the quantity of an existing cart item.

### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/Update/{merchantId}/{cartReferenceKey}/{new quantity}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


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
new quantity* | string | The new quantity of the current cart item


## Update Cart Properties

> Sample Request

```html
https://www.martjack.com/developerapi/carts/UpdateCartProperties/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{  
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
               "Value":"true",
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

```

Updates existing checkout details such as Add delivery slot, add shipping address, and add order attributes. However, country, state, and city code has to be  as per the values specified by the customer before adding items to the cart.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/carts/UpdateCartProperties/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/carts/UpdateCartProperties/{{merchantId}}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session

### Request Attributes
Attribute | Description
--------- | -----------
DeliverySlotID | The unique id of the delivery slot ((valid id)
DemandedDeliveryDate | The customer's preferred delivery date in `MM-DD-YYYY HH:MM:SS` format
ShippingModeId | -NA for now-
locationID | The location id of the store 
BillingAddress | Specify the billing address of the customer in the respective attributes
ShippingAddress | Specify the preferred shipping address of the customer in the respective attributes
OrderAttributes | Provide the details of order attributes that you want to add/update in the parameters explained below
EntityFieldID | Specify the id of the order attribute that you want to update
MerchantID | The unique id (GUID) of the merchant
EntityFieldName | Specify the name of the order attribute that you want to update
Type | Specify the type of the field area. `1` for single select drop-down box, `2` for radio button, `3` for check-box type
IsPredefined | Specify `true` if the order attribute are predefined in the Control Panel, specify `false` for free-flow values
IsMandatory |  Specify `true` if the order attribute is set as a mandatory field, else specify `false`
SelectedValue |  Specify `true` if the input for the order attribute is mandatory, else specify `false`
lstOMSEntityFieldValues | For predefined order attribute values (`IsPredefined` is true) provide the attribute values as per options configured on Control Panel 
EntityFieldValueID | Specify the unique id the order attribute value for predefined attribute name and values (`IsPredefined` is true)
EntityFieldID |  Specify the unique id the order attribute name that you want to input for predefined attribute name and values (`IsPredefined` is true)
Value | Specify the value of the order attribute that you want to set for the customer. You can use this for free-flow attribute values (`IsPredefined` is false)
IsSelected | 




## Update Address

> Sample Request

```html
https://www.martjack.com/developerapi/carts/UpdateCartProperties/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{
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

Lets you update shipping and billing address of an order.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/carts/UpdateAddress`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/carts/UpdateAddress/{{merchantId}}`


### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Attributes
Attribute | Description
locationID* | The location id of the store 
--------- | -----------
BillingAddress | Specify the billing address of the customer in the respective attributes
ShippingAddress | Specify the preferred shipping address of the customer in the respective attributes
BillMobile | Mobile number associated to billing address
BillCountry | Full name of the country associated to the  billing address
BillZip | ZIP code of the billing address
BillCity | City name of the billing address
BillCountryCode | Alpha-2 code of the country with respect to billing address. Example: IN (for India), AU (for Australia), and BR (for Brazil) 
BillLastName | Customer's last name associated to the billing address 
BillState | Full name of the state associated to the billing address
BillAddress | Billing address - door number, building name, street, area and so on
BillAddress1 | Any missing information in BillAddress. For example, landmark
BillTelephone | Landline number associated to the billing address (without STD code)
BillTelephoneCode | STD code of the landline number
BillMobileCode, ShipLastName,ShipTelephone..  | Similar to the billing address details, specify the shipping address in respective fields
SkipDeliveryAreaValidation | Specify `true` to validate the delivery location before updating the details. Specify `false` to ignore shipping area validation
IsShippingAddressDifferent | Specify `true` if shipping address is different from billing address, else, specify `false`. If shipping address and billing address are same, you can just pass billing address details and make this attribute 'false'. 



## Apply Voucher on Cart Items



> Sample Request

```html
https://www.martjack.com/developerapi/Carts/ApplyVoucher/f48fdd16-92db-4188-854d-1ecd9b62xxxx/SAMPLE123
```



> Sample Response

```json
 
        variantsku string
{  
   "messageCode":"1004",
   "Message":"Successful",
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

Lets you redeem vouchers on the cart. It supports discount vouchers and rule based vouchers.

<aside class="notice"> Vouchers can be created on Anywhere Commerce's Control Panel. </aside>

### Resource Information
| | |
--------- | ----------- |
URI | `/`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://{host}/developerapi/`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session



## Get Cart Promotions

> Sample Request

```html
https://www.martjack.com/developerapi/carts/GetAllPromotions/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{
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


> Sample POST Request

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
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/carts/GetAllPromotions/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session


### Request Attributes
Attribute | Description
--------- | -----------
locationcode | The location code of the store to fetch the offers associated to the specific store
deliverymode | Filter results (promotions) by delivery mode. Values: `ship` for promotions on online orders, `pickup` for promotions on store pickup orders
promotiontype | Filter results by promotion type. Values: `cart` for cart items based promotions, `catalogue` for catalogue based promotions 
hasvouchers | Specify `true` to get only the list of promotions having coupon codes, `false` to get only promotions without coupon codes. You can leave it blank to see both kind of promotions
fromdate | Get promotions available for a specific duration. Pass the duration in MM/DD/YY format `fromdate` and `todate` respectively
todate | Get promotions available for a specific duration. Pass the duration in `fromdate` and `todate`
activestatus | Specify `true` to fetch the list of only active promotions, `false` to fetch both active and inactive coupons
channeltype | 
externalcouponmapped | Specify `true` to fetch the list of only promotions that are mapped to external coupons. For example, CRM coupons
userid | The unique identifier of the customer to fetch the list of promotions of a specific customer


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

Retrieves the payment options supported for the current cart of the user.


### Resource Information
| | |
--------- | ----------- |
URI | `/Carts/PaymentOptions/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL
`https://{host}/developerapi/Carts/PaymentOptions/{merchantId}`

### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user to validate the session



