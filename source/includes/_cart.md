# Carts
Cart keeps the record of the items that a customer selects from the merchant store to buy. The `carts` resource provides APIs to make modifications to the cart items, shipping modes, coupons; and retrieve cart items, shipping modes, payment options, and online payment types.



## Send OTP
> Sample POST Request

```json
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


## Validate OTP
> Sample Request

```html

```

> Sample POST Request

```json
{
"OTP": "345432",
"mobile": "7411000000”
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


### Request Attributes
Attribute | Description
--------- | -----------
DeliverySlotID | The unique id of the delivery slot ((valid id)
DemandedDeliveryDate | The customer's preferred delivery date in `MM-DD-YYYY HH:MM:SS` format
ShippingModeId | 
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


