# Order
An order is a completed purchase request of a customer. This resource consists of APIs related to creating and managing orders of a marketplace, PWA or storefront. 


## Create Bulk Order (Normal)



> Sample Request

```html

http://www.martjack.com/developerapi/Order/BulkOrderCreation

```

> Sample POST Request

```json

MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData{  
   "orders":{  
      "order":[  
         {  
            "orderrefno":2731792,
            "orderdate":"07/26/2018",
            "deliveredon":"07/26/2018",
            "customertype":"Guest User",
            "userid":"tom.sawyer@example.com",
            "orderamountstatus":"NO",
            "ordervalue":9495,
            "orderstatus":"Authorized",
            "orderconfirmationmail":"NO",
            "paymentlinkstatus":"YES",
            "calculateshippingtax":"NO",
            "vouchercode":"",
            "shipfirstname":"Tom",
            "shiplastname":"Sawyer",
            "shipaddress1":"H.no.6-51, plot.31",
            "shipaddress2":"",
            "shipcity":"Hyderabad",
            "shipstate":"Telangana",
            "shipcountry":"India",
            "shipzip":"500062",
            "shiplandline":"8500000000",
            "shipmobile":"8500111111",
            "shipemail":"tom.sawyer@example.com",
            "billfirstname":"Tom",
            "billlastname":"Sawyer",
            "billaddress1":"H.no.6-51, ECIL",
            "billaddress2":"",
            "billcity":"Hyderabad",
            "billstate":"Telangana",
            "billcountry":"India",
            "billzip":"500062",
            "billlandline":"8500000000",
            "billmobile":"8500111111",
            "billemail":"tom.sawyer@example.com",
            "giftmsg":"Many happy returns of the  day from James and family",
            "locationcode":"3835",
            "storelocationcode":"",
            "isselfship":false,
            "channelrefcode":2338,
            "channelorderid":"6068438350",
            "sellerwroxorderid":2731792,
            "deliveryslotcode":"",
			"storelocationcode": "",
			"latitude": "28.7041",
			"longitude": "-77.1025",
            "shippingmode":"",
            "customfields":{  
               "customfield":[  
                  {  
                     "orderrefno":"5",
                     "id":"0",
                     "name":"PaymentDetails",
                     "value":"12345678910"
                  },
                  {  
                     "orderrefno":"5",
                     "id":"0",
                     "name":"PaymentDetails",
                     "value":"COD"
                  }
               ]
            },
            "items":{  
               "item":[  
                  {  
                     "tax":null,
                     "sku":"FS4656",
                     "shippingamount":0,
                     "shippingdiscount":0,
                     "variantsku":null,
                     "qty":1,
                     "unitprice":9495,
                     "orderrefno":2731792,
                     "linediscount":0,
                     "itemcustomfields":{  
                        "itemcustomfield":[  
                           {  
                              "Name":"CustomRefOrderLineID",
                              "Value":"2850981410"
                           }
                        ]
                     }
                  },
                  {  
                     "orderrefno":2731792,
                     "sku":"IN-PZ-VG-VEGGIEITALINO",
                     "variantsku":"",
                     "qty":"1",
                     "unitprice":"0",
                     "shippingamount":"0",
                     "tax":"0",
                     "shippingdiscount":"0",
                     "linediscount":"0",
                     "catalogcode":"P",
                     "bundleparentproduct":"IN-PZ-VG-VEGGIEITALINO",
                     "isdefault":"NO",
                     "portion":"",
                     "deliverymode":"S",
                     "itemcustomfields":{  
                        "itemcustomfield":[  
                           {  
                              "Name":"CustomRefOrderLineID",
                              "Value":"2850981410"
                           }
                        ]
                     }
                  }
               ]
            },
            "payments":{  
               "payment":[  
                  {  
                     "orderrefno":2731792,
                     "checkouttype":"Online Payment",
                     "paymentno":"",
                     "amount":9495,
                     "transaciondate":"07/26/2018",
                     "paymentstatus":"Authorized"
                  }
               ]
            }
         }
      ]
   }
}


```

> Sample Response

```json

{  
   "messageCode":"1018",
   "Message":"Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
   "Taskid":"2156",
   "ErrorCode":0
}


```

This API lets you create batch orders. You can also capture vertical specific product attributes such as variants, bundle, and combo details.



### Resource Information

| | |
--------- | ----------- |
URI | `Order/BulkOrderCreation`
Response Formats | JSON
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/BulkOrderCreation`

### Request Body Parameters
Parameter |  Type | Description
--------- | ------ | --------
orderrefno* | string | Reference number of the order
orderdate* | date |  Ordered date in `mm/dd/yyyy` or `yyyy/mm/dd` format
deliveredon | date  |  Specify the estimated delivery of the item if applicable for the merchant in `mm/dd/yyyy` or `yyyy/mm/dd` or 
customertype | enum |  Type of the user as per the Martjack system. Supported Values: Guest User (for all marketplace), Registered User (If registered on Martjack platform)
userid | string |  Registered identifier of the customer used for login. Required when `customertype="Registered User"`
ordervalue | float |  Net order amount
orderstatus |  enum |  Status of the order. Values: `Pending`, `Authorized`
orderconfirmationmail | enum  |  Specify `Yes` to send an order confirmation email to the customer, else set `No`
paymentlinkstatus | enum | Whether payment link needs to sent to customer (Yes) or not (No). Use only if the Order status is Pending. A link for making the payment will be sent to the customer with all the available payment options
Storelocationcode | string | Source location of the order from where the order was initiated
calculateshippingtax | enum |  Whether tax or shipping charges should be calculated based on CP Configuration. If `Yes` it will be calculated based on the CP Configuration rules. Specify `No` to consider input values from the payload
shipfirstname, shiplastname, shipaddress1 ... | obj |  Specify the shipping address and name of the customer in the respective fields
billfirstname, billlastname, billaddress1 ... | obj |  Specify the billing address and name of customer in the respective fields
giftmsg | string  |  Specify the customer's preferred personalized message for the recipient (for gift orders)
locationcode | string |  Location code of the order fulfillment location (Generally used for Location specific merchants)
isselfship | boolean |  If the order shipment is handled by marketplace such as Amazon or Flipkart specify `False`, if the shipment is handled by the merchant itself, set the value to `True`
channelrefcode | string |  Reference code of the channel from which the order has come from (specific to Sellerworx). A channel is an instance of marketplace. A seller can have multiple channels
channelorderid | string |  Order id as maintained by that specific channel  (specific to Sellerworx)
sellerwroxorderid | string |  Order id generated at Sellerworx. Maps Channel order id to Sellerworx order id
items* | obj |  Specify the details of each line-item in `item` attribute
Payments* | obj |  Specify the payment details and `orderrefno` of the order in `payment`. The value of `orderrefno` at payment level and order level should be same
paymentstatus | enum | The payment status of the current order. Value: `Authorized`, `Pending`
paymentno | string | The reference number generated for order payment. This is provided by the respective payment gateway
CheckOutType | string | Type of check out. Values: Online Payment, Cash on Delivery, Bank Transfer, Cheque/DD, Gift Voucher, Net Banking, Payback Points, Wallet
vouchercode | string | Coupon code applied for the transaction, if any. This is just for viewing purpose and the API does not do any calculation based on the voucher code
customfield |  | Pass this only if you have preconfigured custom fields at the order level
itemcustomfield | string | Pass line-item level custom field details if available
deliveryslotcode | string | Pass the delivery slot code if you want to associate a delivery slot with the order 
shippingmode | string |  Pass the shipping mode that you want to associate with the order. Note that the API does not validate the provided shipping mode
shippingamount | float | Pass the shipping charge for the specific item (Order item level)
shippingdiscount | int | Pass the discount amount availed on the shipping charge (Order item level discount)
linediscount | int |  Pass the line item level discount availed for the order
latitude | float | Latitudinal distance of the store
longitude | float | Longitudinal distance of the store

<aside class="notice">All parameters marked by * are mandatory.</aside>










## Create Bulk Order (Deal & Bundle)

> Sample Request

```html
http://www.martjack.com/developerapi/Order/BulkOrderCreation
```


> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData{  
   "orders":{  
      "order":{  
         "orderrefno":"5455",
         "orderdate":"2018-12-13",
         "customertype":"Guest User",
         "userid":"tom.sawyer@capillarytech.com",
         "orderamountstatus":"Authorized",
         "ordervalue":4.750,
         "orderstatus":"Authorized",
         "orderconfirmationmail":"No",
         "paymentlinkstatus":"NO",
         "calculateshippingtax":"No",
         "vouchercode":"",
         "shipfirstname":"Tom",
         "shiplastname":"Sawyer",
         "shipaddress1":"test",
         "shipaddress2":"test23233",
         "shipcity":"Al Qurain",
         "shipstate":"Kuwait City",
         "shipcountry":"Kuwait",
         "shipzip":"1",
         "shiplandline":"55555555",
         "shipmobile":"55555555",
         "shipemail":"tom.sawyer@capillarytech.com",
         "billfirstname":"Tom",
         "billlastname":"Sawyer",
         "billaddress1":"example address",
         "billaddress2":"example address2",
         "billcity":"Al Qurain",
         "billstate":"Kuwait City",
         "billcountry":"Kuwait",
         "billzip":"1",
         "billlandline":"55555555",
         "billmobile":"55555555",
         "billemail":"tom.sawyer@capillarytech.com",
         "giftmsg":"Happy wedding anniversary",
         "deliveredon":"2018-12-13",
         "locationcode":"SURRA",
         "storelocationcode":"PH Adeliya",
         "isselfship":"NO",
         "channelrefcode":"",
         "channelorderid":"",
         "sellerwroxorderid":"",
         "deliveryslotcode":"",
		 "latitude": "28.7041",
		 "longitude": "-77.1025",
         "shippingmode":"H",
         "items":{  
            "item":[  
               {  
                  "orderrefno":"5455",
                  "sku":"Dls-130032",
                  "variantsku":"",
                  "qty":1,
                  "unitprice":0,
                  "shippingamount":0,
                  "tax":0,
                  "shippingdiscount":0,
                  "linediscount":0,
                  "catalogcode":"D",
                  "bundleparentproduct":"",
                  "isdefault":"NO",
                  "portion":"",
                  "deliverymode":"H",
                  "bundleitems":{  
                     "item":[  
                        {  
                           "orderrefno":"5455",
                           "sku":"Pz-Chicken-Supreme",
                           "variantsku":"",
                           "qty":1,
                           "unitprice":0,
                           "shippingamount":0,
                           "tax":0,
                           "shippingdiscount":0,
                           "linediscount":0,
                           "catalogcode":"D",
                           "bundleparentproduct":"Dls-130032",
                           "isdefault":"NO",
                           "portion":"",
                           "deliverymode":"H",
                           "bundleitems":{  
                              "item":[  
                                 {  
                                    "orderrefno":"5455",
                                    "sku":"Crt-10",
                                    "variantsku":"Crt-10-102580-Pan-Large",
                                    "qty":1,
                                    "unitprice":4.25,
                                    "shippingamount":0.50,
                                    "tax":0,
                                    "shippingdiscount":0,
                                    "linediscount":0,
                                    "catalogcode":"B",
                                    "bundleparentproduct":"Pz-Chicken-Supreme",
                                    "isdefault":"NO",
                                    "deliverymode":"H",
                                    "portion":"W"
                                 },
                                 {  
                                    "orderrefno":"5455",
                                    "sku":"Mozarella_30",
                                    "variantsku":"Mozarella_30_111100_Large",
                                    "qty":1,
                                    "unitprice":0,
                                    "shippingamount":0,
                                    "tax":0,
                                    "shippingdiscount":0,
                                    "linediscount":0,
                                    "catalogcode":"B",
                                    "bundleparentproduct":"Pz-Chicken-Supreme",
                                    "isdefault":"NO",
                                    "deliverymode":"H",
                                    "portion":"W"
                                 }
                              ]
                           }
                        },
                        {  
                           "orderrefno":"4452",
                           "sku":"Omn-App-GlcBrd",
                           "variantsku":"Omn-App-GlcBrd-2-NCH",
                           "qty":1,
                           "unitprice":0,
                           "shippingamount":0,
                           "tax":0,
                           "shippingdiscount":0,
                           "linediscount":0,
                           "catalogcode":"D",
                           "bundleparentproduct":"OmnDls-FmlyBx",
                           "isdefault":"NO",
                           "portion":"",
                           "deliverymode":"H"
                        }
                     ]
                  }
               }
            ]
         },
         "payments":{  
            "payment":{  
               "orderrefno":"5455",
               "checkouttype":"Cash on Delivery",
               "paymentno":"123",
               "amount":4.750,
               "transaciondate":"2018-12-13",
               "paymentstatus":"Authorized"
            }
         }
      }
   }
}
```

> Sample Response

```json
{  
   "messageCode":"1018",
   "Message":"Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
   "Taskid":"2156",
   "ErrorCode":0
}

```

This API lets you create batch orders for deal and bundle products.



### Resource Information

| | |
--------- | ----------- |
URI | `Order/BulkOrderCreation`
Response Formats | JSON
Rate Limited? | No
Authentication | Yes
HTTP Method | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/BulkOrderCreation`

### Request Body Parameters
Parameter |  Type | Description
--------- | ------ | --------
orderrefno* | string | Reference number of the order
orderdate* | date | Ordered date in `mm/dd/yyyy` or `yyyy/mm/dd` format
deliveredon | date  | Specify the estimated delivery of the item if applicable for the merchant in `mm/dd/yyyy` or `yyyy/mm/dd` format
customertype | enum | Type of the user as per the Martjack system. Supported Values: Guest User (for all marketplace), Registered User (If registered on Martjack platform)
userid | string | Registered identifier of the customer used for login. Required when `customertype:"Registered User"`
ordervalue | float | Net order amount
orderstatus |  enum | Status of the order. Value: `Pending`, `Authorized`
orderconfirmationmail | enum  | Specify `Yes` to send an order confirmation email to the customer, else set `No`
paymentlinkstatus | enum | Whether payment link needs to sent to customer (Yes) or not (No). Use only if the Order status is Pending. A link for making the payment will be sent to the customer with all the available payment options
calculateshippingtax | enum | Whether tax or shipping charges should be calculated based on CP Configuration. If `Yes` it will be calculated based on the CP Configuration rules. Specify `No` to consider input values from the payload
shipfirstname, shiplastname, shipaddress1 ... | - |  Specify the customer's shipping address related information in the respective fields
billfirstname, billlastname, billaddress1 ... | - |  Specify the customer's billing address related information in the respective fields
giftmsg | string  | Specify the customer’s preferred personalized message for the recipient (for gift orders)
storelocationcode | string | Source location of the order from where the order was initiated
locationcode | string | Location code of the order fulfillment location (Generally used for Location specific merchants)
isselfship | boolean | If the order shipment is handled by marketplace such as Amazon or Flipkart specify `False`, if the shipment is handled by the merchant itself, set the value to `True`
channelrefcode | string | Channel from which the order is received (specific to Sellerworx). A channel is an instance of marketplace. A seller can have multiple channels
channelorderid | string | Order id as maintained by that specific channel  (specific to Sellerworx)
sellerwroxorderid | string | Order id generated at Sellerworx. Maps Channel order id to Sellerworx order id
items* | obj | Specify the details of each line-item in `item` attribute
bundleitems | obj | Details of bundle items
Payments* | obj | Specify the payment details and `orderrefno` of the order in the `payment` object. The value of `orderrefno` at payment level should be same as that of the order level
paymentstatus | enum | The payment status of the current order. Value: `Authorized`, `Pending`
paymentno | string | The reference number for order payment provided by the respective payment gateway
CheckOutType | string | Type of check out. Values: Online Payment, Cash on Delivery, Bank Transfer, Cheque/DD, Gift Voucher, Net Banking, Payback Points, Wallet
vouchercode | string | Coupon code applied for the transaction if any. This is just for viewing purpose and the API does not do any calculation based on the voucher code
customfield | json obj | Pass this only if you have preconfigured custom fields at the order level
itemcustomfield | json obj | Pass line-item level custom field details if available
deliveryslotcode | string | Pass the delivery slot code if you want to associate a delivery slot with the order 
latitude | float | Latitudinal distance of the store
longitude | float | Longitudinal distance of the store
shippingmode | string | Pass the shipping mode that you want to associate with the order. Note that the API does not validate the provided shipping mode
shippingamount | float | Pass the shipping charge for the specific item (Order item level)
shippingdiscount | int | Pass the discount amount availed for the order in shipping charge (Order item level discount)
linediscount | int | Pass the line item level discount availed
catalogcode | enum | Type of the product category, Value: `D` for deal, `B` for bundle 
unitprice | float | Price of a single item
bundleparentproduct | string | SKU of the parent bundle product
isdefault | enum | Is the item default for the bundle. Value: `Yes`, `No`
portion | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
deliverymode | enum | Mode of delivery of the item. Values: `H` for home delivery, `S` for store pick-up


<aside class="notice">All Parameters marked by * are mandatory.</aside>






## Place Order (Single)
> Sample Request

```html
http://www.martjack.com/developerapi/Order/PlaceOrder/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData{  
   "PaymentOption":"COD",
   "PaymentType":"COD",
   "GateWayId":"0",
   "skipDeliveryAreaValidation":true,
   "ClearCart":true,
   "transaction":true
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "OrderCreationResponse":{  
      "OrderID":2744271,
      "ValidationResponse":null
   }
}
```

Lets you add payment details and submit a transaction. You can use this API for checkout process. 


### Resource Information

| | |
--------- | ----------- |
URI | `/Order/PlaceOrder/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`{host}/developerapi/Order/PlaceOrder/{MerchantId}`

### Additional Header
Header | Description
------ | -----------
Access token* | The access token generated for the  current user session

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | The unique id (GUID) of the merchant in which you want to place order
PaymentOption* | string | The name of the payment gateway. Pass only the supported modes configured in the back-end. For example, RazorPay, EBS, OnlineBankTransfer, COD, CreditCard, ChequeDD, Wallet, and eGiftVoucher
paymentType* | string | The payment type used for the order - OBT (Online bank transfer),  TPG (Third party gateway), Credit, GV (Gift voucher) and so on
gatewayId* | string | Gateway id through which the payment is made
skipDeliveryAreaValidation | boolean | Specify `true` to validate delivery location before creating the order, `false` to ignore validation


### Sample Validation Messages

* Invalid Mobile Number

`{
{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"CapillaryPGValidator",
         "CheckoutValidationType":4,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`



* Delivery area

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"DeliveryAreaValidator",
         "CheckoutValidationType":14,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 

* Delivery mode

`
{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"DeliveryModeValidator",
         "CheckoutValidationType":16,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}
`


* Discount voucher 

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"DiscountVoucherValidator",
         "CheckoutValidationType":7,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 

* Gift voucher

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"GiftVoucherValidator",
         "CheckoutValidationType":7,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 


* Payment transactions

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"MerchantTransactionValidator",
         "CheckoutValidationType":15,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`


* Order amount max min

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"OrderAmountValidator",
         "CheckoutValidationType":9,
         "Status":"False",
         "ValidationMessage":"Min/Max/Both"
      }
   ]
},
"ErrorCode":0
}` 

* Missing payment params

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"OrderInputValidator",
         "CheckoutValidationType":0,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 


* Allowing offline payments for an order with multiple payments

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"PartialOrderValidator",
         "CheckoutValidationType":5,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`


* Selected country is not supported for the payment option

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"PaymentoptionValidator",
         "CheckoutValidationType":21,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`

 
* PIN code not serviceable

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"PincodeServiceablityValidator",
         "CheckoutValidationType":17,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 


* ShippingModeValidator

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"ShippingModeValidator",
         "CheckoutValidationType":16,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`  


* Invalid address parameters

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"ShippingAddressValidator",
         "CheckoutValidationType":18,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}` 


* Zero shipping profile

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"ShippingValidator",
         "CheckoutValidationType":1,
         "Status":"False",
         "ValidationMessage":""
      }
   ]
},
"ErrorCode":0
}`



* Invalid max order qty

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"StockValidator",
         "CheckoutValidationType":13,
         "Status":"False",
         "ValidationMessage":"Failed products"
      }
   ]
},
"ErrorCode":0
}`


* Zero inventory

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"StockValidator",
         "CheckoutValidationType":2,
         "Status":"False",
         "ValidationMessage":"Failed products"
      }
   ]
},
"ErrorCode":0
}`

* Delivery slot not in  store time

`{
   "OrderID":0,
   "ValidationResponse":[
      {
         "Validator":"StoreTimingsValidator",
         "CheckoutValidationType":19,
         "Status":"False",
         "ValidationMessage":"DeliveryslotNotInStoreTime"
      }
   ]
},
"ErrorCode":0
}`


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
ValidationResponse | json obj | Response object received from the payment gateway





## Authorize Order

Authorizes a pending order (an order with pending payment status) or failed order.



> Sample Request

```html
https://www.martjack.com/developerapi/order/Authorize

```



> Sample POST Request (RAW)

```json
MerchantID=fd986588-63df-4d76-9ddd-5d8b984518a5&InputFormat=application/json&InputData={
"AuthorizeOrder":
 {
 "merchantId": "fd986588-63df-4d76-9ddd-5d8b984518a5",
 "OrderId": "7557689",
 "Date": "03/12/2019",
 "Comment":"TestComment",
 "PaymentType": "Credit",
 "BankInstrumentNumber": "12444",
 "BankName": "KOTAK",
 "PGResponse": "ewe23232323232"
 }
}
```



> Sample Response

```json
{
   "Code": "1005",
   "Message": "Order Authorized successfully",
   "ErrorCode": "0",
   "AllocatedItems": "false"
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/order/Authorize`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/order/Authorize`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
OrderID* | int | Unique id of the order that you want to authorize 
Date | date | Date of authorization 
Comment | string | Specify if you want to provide any comment related to the order authentication
PaymentType* | string | The type of payment for the order. Only values predefined for the merchant in the back-end are supported. Example: OBT (Online bank transfer), TPG (Third party gateway), Credit, GV (Gift voucher) and so on
bankInstrumentNumber | string | Instrument number generated for payment clearance
bankName | string | Name of the bank
PGResponse* | string | The response received from the payment gateway 

<aside class="notice">All parameters marked by * are mandatory. </aside>











## Process Transaction

> Sample Request

```html
https://www.martjack.com/developerapi/Order/ProcessTransaction/81e77da2-723b-483d-8c0d-49f800c1xxxx
```

> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData{  
   "Transaction":{  
      "OrderID":3146000,
      "ID":"",
      "PaymentType":"TPG",
      "Provider":"RAZORPAY",
      "GatewayID":"10033",
      "CPUserID":"",
      "PaymentDetails":[  
         {  
            "GVCode":"",
            "RespCode":"",
            "RespMessage":"",
            "PointsBurned":"",
            "BankCode":"",
            "BankEMICharges":"",
            "PGReferenceId":"",
            "ChequeRefNo":"",
            "DrawnOn":"",
            "PaidAmount":"",
            "BankName":"",
            "IFSC":""
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
   "Transaction":{  
      "TransactionID":3157xxx,
      "Amount":40425.0,
      "PaymentMessage":[  
         {  
            "Key":"ProviderAccountID",
            "Value":"rzp_live_1Rvb6UCZhctxxx"
         },
         {  
            "Key":"ProviderOrderID",
            "Value":"{\r\n  \"id\": \"order_Ap0o1g0hKYpxxx\",\r\n  \"entity\": \"order\",\r\n  \"amount\": 40425,\r\n  \"amount_paid\": 0,\r\n  \"amount_due\": 40425,\r\n  \"currency\": \"INR\",\r\n  \"receipt\": \"3146817\",\r\n  \"offer_id\": null,\r\n  \"status\": \"created\",\r\n  \"attempts\": 0,\r\n  \"notes\": {\r\n    \"MJOrderID\": \"3146817\",\r\n    \"StoreID\": \"15648\"\r\n  },\r\n  \"created_at\": 1535043452\r\n}"
         },
         {  
            "Key":null,
            "Value":null
         }
      ]
   },
   "ErrorCode":0
}
```

Processes pending transactions. When an order other than COD is placed, just an order instance is created and will be in `Pending` status by default. An order is processed only when the payment details are validated against the transaction. This is not applicable for COD orders.

### Resource Information

| | |
--------- | ----------- |
URI | `/ProcessTransaction/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`{host}/developerapi/Order/ProcessTransaction/{MerchantId}`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
OrderID* | int |  The order id that you want to process
ID | int |  The transaction id of the order 
PaymentType* | string |  The payment type used for the order. Only  values predefined for the merchant in the back-end are supported. OBT (Online bank transfer), TPG (Third party gateway), Credit, GV (Gift voucher) and so on
Provider* | string |  The provider of the payment gateway service
GatewayID* | string |  The respective payment gateway id
CPUserID | string |  Unique CP user id generated by the system 
PaymentDetails* | json obj |  Pass the payment details 
GVCode | string |  The gift voucher code used for the transaction (if any)
RespCode | string |  The unique response code generated at the payment gateway for the transaction (to our system)
RespMessage | string |  The entire response payload generated at the payment gateway for the transaction (to our system)
PointsBurned | int |  The number of points redeemed for the transaction (if any) 
 
<aside class="notice"> All parameters marked by * are mandatory. </aside>
 


 
 
 
## Update Transaction

Updates status of a specific transaction based on the input parameters.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateTransaction/f48fdd16-92db-4188-854d-1ecd9b72d066

```


> Sample POST Request

```json

InputFormat=application/json&InputData={
"Transaction":
  {
    "OrderId":"7448357",
    "PaymentStatus":"A",
    "RespCode":"",
    "CurrencyCode":"",
    "TxnID":"7600793",
    "RespMsg":"",
    "PaymentType":"",
    "DeliverOption":"",
    "GatewayOption":""
  }
}


```

> Sample Response

```json
{
  "messageCode": "1007",
  "Message": "Updated Successfully",
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/UpdateTransaction/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateTransaction/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
orderId* | int | Unique id of the order for which you want to update transaction details
paymentStatus | enum | New status of the current transaction. Values: `P` for pending, `A` for authorized, `F` for failed
respCode | string | Unique code generated for the transaction from the payment gateway 
txnID | long | Unique id of the specific transaction that you want to update. Required to update a specific transaction of an order
respMsg | string | Response message received for the transaction from the payment gateway
gVcode | string | Coupon code used for the order (to update gift voucher transaction )
pointsBurned | int | Number of points burned for the transaction (to update points based transaction)
bankEMICharges | string | Monthly EMI charges for the transaction (for transaction through card EMI)
pGReferenceId | string | Unique id generated for the transaction by the payment gateway

<aside class="notice">All parameters marked by * are mandatory. You also need to pass the dependent parameters based on the transaction type.</aside>








 

 
 


## Search Orders

Retrieves orders matching the specified inputs.

> Sample Request
 
```html
https://www.martjack.com/Order/Search/1b3420ce-002f-4f66-bbda-cd0828aa2af8
```

> Sample POST Request

```json
MerchantId=1b3420ce-002f-4f66-bbda-cd0828aa2af8&InputFormat=application/json&InputData={
  "OrderSearch": {
    "Action": "",
    "CheckOutType": "Online Payment",
    "DateFrom": "09/15/2017",
    "DateTo": "09/16/2017",
    "DateType": "",
    "EmailID": "",
    "FristName": "",
    "LastName": "",
    "MobileNo": "8801312595",
    "OrderNo": "",
    "OrderPriceFrom": "",
    "OrderPriceTo": "",
    "OrderStatus": "A",
    "ProductSku": "",
    "store": "all",
    "ShippingCostFrom": "",
    "ShippingCostTo": "",
    "RecordFrom": 0,
    "RecordTo": 2
  }
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Orders":[  
      {  
         "OrderId":5897350,
         "Status":"A",
         "MerchantId":"1b3420ce-002f-4f66-bbda-cd0828aa2af8",
         "UserId":"41f01343-8771-4bdb-b066-5fadd7b6edbe",
         "TotalAmount":200,
         "AmountPayable":200,
         "OrderDate":"/Date(1505501647000+0530)/",
         "PaymentDetails":[  

         ],
         "Rewards":null,
         "ShippingDiscount":0,
         "VoucherDiscount":0,
         "PromotionDiscount":0,
         "GiftMessage":null,
         "Promotions":null,
         "SubStatus":"",
         "OrderAttributes":null,
         "SourceLocationID":null,
         "SourceLocationCode":null,
         "OrderDateLocal":null,
         "AutoUpdateTime":"/Date(1547208085386+0530)/",
         "TimeZone":null
      },
      {  
         "OrderId":5897344,
         "Status":"A",
         "MerchantId":"1b3420ce-002f-4f66-bbda-cd0828aa2af8",
         "UserId":"41f01343-8771-4bdb-b066-5fadd7b6edbe",
         "TotalAmount":200,
         "AmountPayable":200,
         "OrderDate":"/Date(1505501453000+0530)/",
         "PaymentDetails":[  

         ],
         "Rewards":null,
         "ShippingDiscount":0,
         "VoucherDiscount":0,
         "PromotionDiscount":0,
         "GiftMessage":null,
         "Promotions":null,
         "SubStatus":"",
         "OrderAttributes":null,
         "SourceLocationID":null,
         "SourceLocationCode":null,
         "OrderDateLocal":null,
         "AutoUpdateTime":"/Date(1547208085386+0530)/",
         "TimeZone":null
      },
      {  
         "OrderId":5895476,
         "Status":"A",
         "MerchantId":"1b3420ce-002f-4f66-bbda-cd0828aa2af8",
         "UserId":"41f01343-8771-4bdb-b066-5fadd7b6edbe",
         "TotalAmount":200,
         "AmountPayable":200,
         "OrderDate":"/Date(1505456608000+0530)/",
         "PaymentDetails":[  

         ],
         "Rewards":null,
         "ShippingDiscount":0,
         "VoucherDiscount":0,
         "PromotionDiscount":0,
         "GiftMessage":null,
         "Promotions":null,
         "SubStatus":"",
         "OrderAttributes":null,
         "SourceLocationID":null,
         "SourceLocationCode":null,
         "OrderDateLocal":null,
         "AutoUpdateTime":"/Date(1547208085386+0530)/",
         "TimeZone":null
      }
   ],
   "ErrorCode":0
}
```
 
### Resource Information

| | |
--------- | ----------- |
URI | `order/Search/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/order/Search/{merchantId}`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
CheckOutType | string | Type of check out. Values: Online Payment, Cash on Delivery, Bank Transfer, Cheque/DD, Gift Voucher, Net Banking, Payback Points, Wallet
DateFrom | date | Search orders of a specific duration between `DateFrom` and `DateTo`. The duration is considered on the basis of specified `DateType'. Pass the date in `MM/DD/YYYY` format
DateTo | date | Search orders of a specific duration between `DateFrom` and `DateTo`. The duration is considered on the basis of specified `DateType'. Pass the date in `MM/DD/YYYY` format
DateType | enum | Activity of the specified date range. Values: `OD` for Order Date, `SD` for Ship Date, `RD` for Return Date, `DD` for Delivered Date, `DS` for Dispatch Date
EmailID | string | Specify registered email id of a customers to fetch all orders of that customer
FristName | string | Search orders by customers' first name. For example, if you specify `Tom`, it will fetch the list of all orders of customers whose first name is Tom
LastName | string | Search orders by customers' last name. For example, if you specify `Sawyer`, it will fetch the list of all orders of customers whose last name is Sawyer
MobileNo | string | Search orders of a specific customer by mobile number
OrderNo | int | Fetch details of a specific order by order number
OrderPriceFrom | float | Search orders in a specific price range. Specify the price range in `OrderPriceFrom` and `OrderPriceTo`
OrderPriceTo | float |  Search orders in a specific price range. Specify the price range in `OrderPriceFrom` and `OrderPriceTo`
OrderStatus | string | Search order by order status `P` for Pending, `A` for Authorized
ProductSku | string | Search orders containing a specific item. Pass the item SKU
store | string | Search orders of a store. Specify the store code to fetch orders of that specific store, specify `all` to fetch orders of all stores
ShippingCostFrom | float | Search orders by shipping cost. Specify the shipping cost range in `ShippingCostFrom` and `ShippingCostTo`
ShippingCostTo | float | Search orders by shipping cost. Specify the shipping cost range in `ShippingCostFrom` and `ShippingCostTo`
RecordFrom | int | Filter the results by record range. Specify the range in `RecordFrom` and `RecordTo`. For example, out of 80 results you can prefer to see only records after 30 or between 30-60
RecordTo | int | Filter the results by record range. Specify the range in `RecordFrom` and `RecordTo`. For example, out of 80 results you can prefer to see only records after 30 or between 30-60 prefer to see first 30 records only or records between 30-70
 

 
 
 

 
## Save Merchant Transaction
 
> Sample Request
 
```html
https://www.martjack.com/Order/SaveMerchantTransaction/81e77da2-723b-483d-8c0d-49f800c1xxxx
```

> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData{
   "PaymentOption":"OnlineBankTransfer",
   "PaymentType":"OnlineBankTrans",
   "OrderId":1894720,
   "MerchantId":"b7095ff2-12fe-4c18-9b0a-946980d12202",
   "status":"Pending",
   "amount":2088.8
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

Saves the current merchant transaction.

### Resource Information

| | |
--------- | ----------- |
URI | `order/SaveMerchantTransaction/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/order/SaveMerchantTransaction/{merchantId}`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
PaymentOption* | string |  The name of the payment gateway. For example, RazorPay, EBS, OnlineBankTransfer, COD, CreditCard, ChequeDD, Wallet, and eGiftVoucher
PaymentType* | PaymentOption |  The mode of payment chosen for the transaction. Values could be OBT (Online bank transfer), TPG (Third party gateway), Credit, GV (Gift voucher) and so on
OrderId* | int |  The unique id of the order
MerchantId* | PaymentOption |  The unique id (GUID) of the merchant in which the order is registered
status* | enum |  The status of the current payment. Value: Pending, Authorized
amount* | float |  The amount paid through the current payment type for the transaction

<aside class="notice"> All parameters marked by * are mandatory.</aside>







## Reorder
> Sample Request

```html
https://www.martjack.com/DeveloperAPI/order/ReOrder/98d18d82-ba59-4957-9c92-3f89207a34f6
```
> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData={
   "orderId":3146765,
   "orderItemId":0,
   "userId":"3cdd1838-7028-40c9-b5c2-bef371fexxxx"
}
```


> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Carts":{  
      "MerchantId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
      "ProductCost":325.0,
      "ShippingCost":0.0,
      "VoucherDiscount":0.0,
      "PromotionDiscount":0.0,
      "TaxAmount":16.25,
      "OrderTotal":341.25,
      "VoucherCode":"",
      "UserSelectedCurrency":"INR",
      "Bill_FirstName":"Tom Sawyer",
      "Bill_LastName":"",
      "Bill_Address1":"",
      "Bill_Address2":"",
      "Bill_CountryCode":"",
      "_Bill_StateCode":"",
      "Bill_City":"Bangalore",
      "Bill_CityCode":"554",
      "Bill_OtherCityName":"",
      "Bill_Telephone":"",
      "Bill_Mobile":"7355000000",
      "Bill_PostCode":"",
      "Bill_Email":"tom.sawyer@example.com",
      "Ship_FirstName":"Tom Sawyer",
      "Ship_LastName":"",
      "Ship_Address1":"",
      "Ship_Address2":"",
      "Ship_CountryCode":"",
      "Ship_StateCode":"",
      "Ship_City":"554",
      "Ship_CityCode":"554",
      "Ship_OtherCityName":"",
      "Ship_Telephone":"",
      "Ship_Mobile":"7355000000",
      "Ship_PostCode":"",
      "Ship_Email":"tom.sawyer@example.com",
      "CartItems":[  
         {  
            "ProductId":8284702,
            "VariantProductId":0,
            "MRP":325.0,
            "WebPrice":0.0,
            "Quantity":1.0,
            "description":"Paneer Soya Supreme",
            "SupplierId":"98d18d82-ba59-4957-9c92-3f89207a34f6",
            "CartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f84202",
            "PriceCapped":false,
            "IsFreeProduct":false,
            "TotalCap":0,
            "CappedRefKey":"00000000-0000-0000-0000-000000000000",
            "CatalogpromotionDiscount":0.0,
            "BundleCartReferenceKey":"00000000-0000-0000-0000-000000000000",
            "BundleCartItems":[  
               {  
                  "ProductId":8284692,
                  "VariantProductId":29085,
                  "MRP":545.0,
                  "WebPrice":325.0,
                  "Quantity":1.0,
                  "description":"Paneer Soya Supreme",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"d2e73ea4-6e92-4a69-8379-3e5decd6xxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":true,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Crust",
                        "Value":"Pan"
                     },
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216554",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9984
               },
               {  
                  "ProductId":8283286,
                  "VariantProductId":27706,
                  "MRP":70.0,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Paneer",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"1e1458f2-877d-4148-9f77-7ce3112cxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     },
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216550",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9985
               },
               {  
                  "ProductId":8283298,
                  "VariantProductId":27754,
                  "MRP":70.0,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"9a05622e-61f6-47c0-bc71-888db53bxxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     },
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216550",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9985
               },
               {  
                  "ProductId":8283304,
                  "VariantProductId":27778,
                  "MRP":70.0,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Red Paprika",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"7b4ba0bb-e388-4c9a-be26-62a9518bxxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     },
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216550",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9985
               },
               {  
                  "ProductId":8284396,
                  "VariantProductId":28734,
                  "MRP":70.0,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Green Capsicum",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"4e5f0efe-2b24-42bb-a1cd-95c23256xxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     },
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216550",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9985
               },
               {  
                  "ProductId":8284687,
                  "VariantProductId":29062,
                  "MRP":70.0,
                  "WebPrice":0.0,
                  "Quantity":1.0,
                  "description":"Masala Soya Chunk",
                  "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
                  "CartReferenceKey":"6fafa915-45d2-4c70-a24b-18da4af8xxxx",
                  "TotalCap":0,
                  "CatalogpromotionDiscount":0.0,
                  "BundleCartReferenceKey":"b1fdc6b5-edc1-4e82-9b5b-ed5358f8xxxx",
                  "ItemPromotionDiscountAmount":0.0,
                  "IsPrimaryProduct":false,
                  "IsPromotionProduct":false,
                  "VariantsInfo":[  
                     {  
                        "PropertyName":"Size",
                        "Value":"Personal | Serves 1"
                     },
                     {  
                        "PropertyName":"Strength",
                        "Value":"Regular"
                     }
                  ],
                  "Por":"w",
                  "IsDefaultBundleItem":true,
                  "CartPromotionRules":[  

                  ],
                  "CategoryId":"CU00216550",
                  "CategoryName":null,
                  "BrandId":"207294",
                  "BrandName":"Capillary",
                  "GroupId":9985
               }
            ],
            "ItemPromotionDiscountAmount":0.0,
            "IsPrimaryProduct":false,
            "IsPromotionProduct":false,
            "Por":"",
            "IsDefaultBundleItem":false,
            "ProductImage":"/inc-yum-resources/98d18d82-ba59-4957-9c92-3f89207a34f6/Images/ProductImages/Source/1-aug-new-Paneer-Soya-Supreme.png;width=100;height=100;scale=canvas;anchor=bottomcenter",
            "CartPromotionRules":[  

            ],
            "CategoryId":"CU00216600",
            "CategoryName":"Pizza",
            "BrandId":"207294",
            "BrandName":"Capillary",
            "ParentCartItems":null
         }
      ],
      "Suppliers":[  
         {  
            "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
            "SupplierName":"PizzaHut",
            "IsSelected":false,
            "OrderStatus":null
         }
      ],
      "ShippingOptions":[  
         {  
            "SupplierId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
            "ShippingMode":"0",
            "ShippingModeId":0,
            "isselected":true
         }
      ],
      "PaymentOptionsChannel":[  
         {  
            "MerchantId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
            "PaymentType":"COD",
            "Paymentoption":"COD",
            "GatewayId":"0",
            "GatewayTitle":"COD",
            "PaidAmount":0.0,
            "EnalbeOTP":false
         },
         {  
            "MerchantId":"98d18d82-ba59-4957-9c92-3f89207axxxx",
            "PaymentType":"Credit",
            "Paymentoption":"<div style=\"padding-left:30px;\"><img src=\"/images/paymentoptions/Payment_RazorPay.jpg\" style=\"margin-left:4px;\" /><div >You can pay using RazorPay</div"
         }
      ]
   }
}
```

Adds an existing order items of a customer to the cart.


### Resource Information

| | |
--------- | ----------- |
URI | `order/ReOrder/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/ReOrder/{merchantId}`

### Request Path Parameters

Parameter | Type | Description
--------- | ----- | ----------
merchantId* | string | Unique merchant id (GUID) in which the order is placed

### Request Body Parameters
Parameter | Type | Description
--------- | ----- | ------
OrderId* | int | Existing Order id of the customer that you want to order again
orderItemId | int | Specify the order item id to reorder a specific item; `0` to consider the entire order items
UserId* | string  | Unique GUID of the customer associated to the order

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
PriceCapped | float | -Deprecated-
TotalCap | - | -Deprecated-
CappedRefKey | - | -Deprecated-
Por | enum | The portion for which the child product is applied. Value: `W` for whole, `R` for right, `L` for left (left, right usually applies for toppings)
GroupId | int | Determines the bundle group id of the nested cart item
IsFreeProduct | enum | Whether the current item is a free gift item. Value: Yes, No









## Get Order History

> Sample Request

```html
http://www.martjack.com/developerapi/Order/History/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData={  
   "UserId":"94b5215f-28d4-44f5-a1db-c47c5e1c9477",
   "FromDate":"02-02-2018 16:08:45",
   "ToDate":"20-02-2018 23:59:45"
}
```

> Sample Response

```json
{  
   "Message":"Successful ",
   "Orders":[  
      {  
         "AmountPayable":106200,
         "BillAddress1":"#103 1st Street SE",
         "BillAddress2":"MG Road",
         "BillCity":"Bangalore",
         "BillCountry":"India",
         "BillEmail":"tom.sawyer@example.com",
         "BillFirstname":"stagging first",
         "BillLastname":"stagging last",
         "BillMobile":"91-9090000000",
         "BillPhone":"91-9090000000",
         "BillZIP":"500001",
         "BillingState":"Karnataka",
         "ConversionFactor":"1",
         "DeliveryOption":"ship",
         "IsGift":false,
         "IsGift":false,
         "LeadTime":"",
         "MerchantId":"2c58c9c6-c9c9-49cf-b424-7acbc4e1xxx",
         "OrderDate":"02-02-2018 16:08:45",
         "OrderId":567282,
         "OrderLineId":null,
         "PaymentDetails":[  
            {  
               "AgentId":"",
               "Amount":"0",
               "Channel":"W",
               "ClientUserAgent":"Mozilla\/5.0 (Windows NT 6.1; rv:16.0) Gecko\/20100101 Firefox\/16.0",
               "CurrencyCode":"INR",
               "GV":"",
               "OrderId":567282,
               "PaymentDate":"1/1/1900",
               "PaymentDetailsId":539740,
               "PaymentOption":"OnlineBankTransfer",
               "PaymentResponse":"{\"TransactionType\":\"TPG\",\"Mode\":\"TPG\",\"Card\":\"xxxxxxxxxxxx\",\"ResponseMessage\":\"{\\\"MID\\\":\\\"CPWHOL99145646120719\\\",\\\"ORDERID\\\":\\\"6979181\\\",\\\"TXNAMOUNT\\\":\\\"7801.00\\\",\\\"CURRENCY\\\":\\\"INR\\\",\\\"TXNID\\\":\\\"70001001203\\\",\\\"BANKTXNID\\\":\\\"1233957\\\",\\\"STATUS\\\":\\\"TXN_SUCCESS\\\",\\\"RESPCODE\\\":\\\"01\\\",\\\"RESPMSG\\\":\\\"Txn Successful.\\\",\\\"TXNDATE\\\":\\\"2018-07-26 18:49:23.0\\\",\\\"GATEWAYNAME\\\":\\\"WALLET\\\",\\\"BANKNAME\\\":\\\"\\\",\\\"PAYMENTMODE\\\":\\\"PPI\\\",\\\"CHECKSUMHASH\\\":\\\"qLXOxRBDS5SHAjZu1xLcQovmM4OLv7kYa93lZO76XqgXR8mHfK7KsxNIEYQA2KgU8B6eXf2ZzWf95k6DoKY34ZQa7S/TvP5gasePQDjS+fA=\\\",\\\"orderID\\\":\\\"6979181\\\"}\"}",
               "PaymentStatus":"",
               "PaymentType":"OBT",
               "PointsBurned":"0",
               "ResponseCode":"N",
               "checkOutGroup":"",
               "clientIP":"183.82.0.171"
            }
         ],
         "PromotionDiscount":0,
         "Rewards":null,
         "ShipAddress1":"#001 Siva Enclave; MG Road",
         "ShipAddress2":"Stagging1 #001",
         "ShipCity":"Bangalore",
         "ShipCountry":"India",
         "ShipEmail":"tom.sawyer@example",
         "ShipFirstname":"stagging first",
         "ShipLastname":"stagging last",
         "ShipMobile":"91-9090909090",
         "ShipOtherCity":"Banglore",
         "ShipPhone":"91-9090000000",
         "ShipState":"Karnataka",
         "ShipZip":"500033",
         "ShippingDiscount":0,
         "Status":"P",
         "SupplierID":"00000000-0000-0000-0000-000000000000",
         "TAXTotal":0,
         "TotalAmount":106200,
         "UserId":"b97b0533-cb6b-4256-8730-26de981b9d02",
         "VocuherDiscount":0,
         "VoucherCode":null,
         "VoucherDiscount":0,
         "cpuserid":"00000000-0000-0000-0000-000000000000",
         "shipdate":null,
         "sku":null
      }
   ],
   "messageCode":"1004"
}
```

Retrieves order history of a merchant or customer based on the input parameters.

### Resource Information

| | |
--------- | ----------- |
URI | `Order/History/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`{host}/developerapi/Order/History/{MerchantId}`

### Request Body Parameters
Parameter | Type | Description
--------- | ----- | ------
UserId | string |  The unique GUID of the customer whose details need to be retrieved
FromDate | date-time | Specify the duration for which you want to fetch the order history in `FromDate` and `ToDate`. Supported date format `mm-dd-yyyy hh:mm:ss`
ToDate | date-time | Specify the duration (in `FromDate` and `ToDate`) for which you want to fetch the order history. Supported date format: `mm-dd-yyyy hh:mm:ss` 
Status | enum | Filter the search results by order status. Values: `P` for Pending, `F` for Cancel, `A` for Approved)
ShipDateFrom | date-time | Search orders shipped in a specific duration. Specify the shipped duration in  `ShipDateFrom` and `ShipDateTo` in `mm-dd-yyyy hh:mm:ss`. If ShipDateFrom is specified, then you also need to specify ShipDateTo
ShipDateTo | date-time | FilSearch orders shipped in a specific duration. Specify the shipped duration in  `ShipDateFrom` and `ShipDateTo` in `mm-dd-yyyy hh:mm:ss`. If ShipDateFrom is specified, then you also need to specify ShipDateTo
Sku | string | Fetch orders containing a specific product (SKU). You can also fetch with partial SKU to get the list of orders having SKUs that start with the keyword specified
OrderId | int | Retrieves the details of a orders with order id starting starting with the specified keyword. For example, if you specify 5550,  you will get the list of all orders with order ids starting with 5500. You can also fetch a specific order by passing the complete order id.
FromOrder | string | The orderId sequence from which you want to fetch orders.  For example, if you pass 34000, you will get all orders with orderId greater than or equal to 34000
store | string | Fetch orders based on the user role. Values: mystore, all, GUID and so on. For example, you can pass the GUID of a supplier to get all orders of the supplier 
WithRewards | boolean | Fetch orders with loyalty rewards. Specify  ‘True’ if you require reward/loyalty details. The default value will be ‘False’
LocationId | string | Order fulfillment location id
OperatorId | string | The logged in user id (of Anywhere Commerce's Control Panel).

<aside class="notice"> Any one among the above parameters is mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
LeadTime | int | Minimum time period (in minutes) prior to the booking slot when the user is allowed for booking the slot. For example, if 60 minutes and booking slot is from 1 pm to 3 pm, user cannot book this slot anytime after 12 pm




## Get Invoice Details

> Sample Request

```html
https://www.martjack.com/developerapi/Order/Invoice/f48fdd16-92db-4188-854d-1ecd9b62d067/invoice_hyc-00000576/18340
```

> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "InvoiceOrders": [
        {
            "OrderId": 7520003,
            "InvoiceDate": "27-Mar-2019",
            "ShipmentID": 5516645,
            "InvoiceNumber": "invoice_hyc-00000576",
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d067",
            "UserId": "00000000-0000-0000-0000-000000000000",
            "OrderTotalAmount": 549,
			"externalInvoiceNumber": "HYC-123-1234",
            "InvoiceAmount": 549,
            "OrderDate": "27-Mar-2019",
            "OrderRefNumber": "3550",
            "BillFirstname": "Sana",
            "BillLastname": "Ta Minh",
            "BillCountry": "India",
            "BillingState": "Karnataka",
            "BillCity": "Bengaluru",
            "BillEmail": "sah.garj@example.com",
            "BillZIP": "560078",
            "BillPhone": "",
            "BillMobile": "7411982768",
            "BillAddress1": "Yen Lac",
            "BillAddress2": "",
            "BillCityCode": "19761",
            "BillStateCode": "KA",
            "BillCountryCode": "IN",
            "ShipFirstname": "Sana",
            "ShipLastname": "Ta Minh",
            "ShipCountry": "India",
            "ShipState": "Karnataka",
            "ShipCity": "Bengaluru",
            "ShipEmail": "sah.garj@example.com",
            "ShipZip": "560078",
            "ShipPhone": "7411982768",
            "ShipMobile": "7411982768",
            "ShipAddress1": "Yen Lac",
            "ShipAddress2": "Yen Lac",
            "ShipOtherCity": "",
            "ShipCityCode": "19761",
            "ShipStateCode": "KA",
            "ShipCountryCode": "IN",
            "ShipLat": 0,
            "ShipLong": 0,
            "LocationCode": "1001",
            "TaxTotal": 0,
            "ShippingCost": 0,
            "IsGift": false,
            "Rewards": null,
            "PromotionDiscount": 0,
            "DemandedDeliveryDate": "01-Jan-1900",
            "MerchantGSTIN": "",
            "TaxableInvoiceNumber": null,
            "BillofSupplyInvoiceNumber": "invoicebill_hyc-002194",
            "deliveryslot": {
                "StartTime": "12: 00 AM",
                "EndTime": "12:00 AM",
                "DeliverySlotId": null
            },
            "InvoiceLineItem": [
                {
                    "ShipmentItemId": 22091385,
                    "OrderLineId": 26178585,
                    "OrderId": 7520003,
                    "ProductId": 11995626,
                    "VariantProductId": 0,
                    "Quantity": 1,
                    "ShippingCost": 0,
                    "ProductPrice": 549,
                    "PromotionDiscount": 0,
                    "TaxAmount": "0",
                    "DeliveryMode": "H",
                    "VendorId": "00000000-0000-0000-0000-000000000000",
                    "SKU": "100011145",
                    "VariantSku": null,
                    "ProductTitle": "Nestle Milkmaid - 400g Tin",
                    "HSNCode": "04029920",
                    "MRP": "115.000",
                    "CatalogDiscount": 0,
                    "UOM": "Pieces",
                    "AverageWeight": "0",
                    "IsTaxable": "False",
                    "TaxDetails": [],
                    "BatchNo": null,
                    "PickingPrice": 0,
                    "PickListCustomFields": [],
                    "TotalTaxOnDeliveryCharge": 0,
                    "ShipmentCustomFields": null
                }
            ],
            "ShippingStatus": "R"
        }
    ],
    "ErrorCode": 0
}
```

Retrieves details of a specific invoice.

### Resource Information

| | |
--------- | ----------- |
URI | `Order/Invoice/{merchantId}/{InvoiceNumber}/{LocationRefCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`{host}/developerapi/order/invoice/{merchantid}/{InvoiceNumber}/{LocationRefCode}`

### Request Path Parameters
Parameter | Type | Description
--------- | ----- | ------
merchantid* | string  | The unique id (GUID) of the merchant associated to the order invoice
InvoiceNumber* | string |  The invoice number that you want to fetch
LocationRefCode* | string |  The location code of the order fulfillment store

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
LeadTime | int | Minimum time period (in minutes) prior to the booking slot when the user is allowed for booking the slot. For example, if 60 minutes and booking slot is 1 pm to 3 pm, user cannot book this slot anytime after 12 pm
ConversionFactor | float | The currency conversion ratio. Applicable for merchants with multiple currencies
StockAction | string | Whether the item participates in reduction of stock or not. Value: `UpdateStock`,`Do Not UpdateStock`, `None` 
IsBackOrder | enum | Can the item be ordered even when out of stock. Value: `true`, or `false`



















## Get Order Details

> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Order/Details/81e77da2-723b-483d-8c0d-49f800c1xxxx/55783
```

> Sample Response

```json
{  
   "Message":"Successful ",
   "OrderLines":[  
      {  
         "CustomFields":"",
         "Description":"Set of 3 lunch boxes",
         "IsBackOrder":false,
         "IsParentProduct":true,
         "OrderId":55783,
         "OrderLineId":64970,
         "ProductId":524306,
         "ProductPrice":14.43,
         "Quantity":1,
         "ReturnAction":"",
         "ReturnQty":0,
         "ReturnReason":"0",
         "ShippingCost":1.0878,
         "ShippingVoucherDiscount":0,
         "StockAction":"",
         "TotalPromotionDiscount":0,
         "TotalTaxAmount":0,
         "TotalVoucherDiscount":0,
         "VariantMasterProductId":0,
         "VariantProductId":53587
      }
   ],
   "messageCode":"1004"
}

```

Retrieves details of a specific order.


### Resource Information

| | |
--------- | ----------- |
URI | `Order/Details/{MerchantId}/{OrderId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details




### Request URL

`{host}/developerapi/Order/Details/{MerchantId}/{OrderId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -------
MerchantId* | string | The unique id (GUID) of the merchant from which you want to fetch order details
OrderId* |  int | The order id that you want to fetch

<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
VariantMasterProductId | int | Master product id of the variant product
VariantProductId | int | Unique id of the variant product


## Get Order Information (V2)

> Sample Request

```html
https://www.martjack.com/developerapi/Order/V2/81e77da2-723b-483d-8c0d-49f800c1xxxx/3390199
```

> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Successful",
	"Orders": [
    	{
        	"OrderId": 3390199,
        	"Status": "S",
        	"MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
        	"UserId": "7b0873e5-e8ed-45b4-bee8-204489a2axxx",
        	"TotalAmount": 3.25,
        	"AmountPayable": 3.25,
        	"OrderDate": "/Date(1541771716000+0530)/",
        	"BillFirstname": "Tom",
        	"BillLastname": "Sawyer",
        	"BillCountry": "الكويت",
        	"BillingState": "حولي",
        	"BillCity": "السالمية",
        	"BillEmail": "tom.sawyer@example.com",
        	"BillZIP": "0",
        	"BillPhone": "97175040",
        	"BillMobile": "97175040",
        	"BillAddress1": "Block 12, Abo Horaira Street",
        	"ShipFirstname": "Tom",
        	"ShipLastname": "",
        	"ShipCountry": "الكويت",
        	"ShipState": "حولي",
        	"ShipCity": "السالمية",
        	"ShipEmail": "tom.sawyer@example.com",
        	"ShipZip": "0",
        	"ShipPhone": "97175040",
        	"ShipMobile": "97175040",
        	"ShipAddress1": "",
        	"ShipOtherCity": null,
        	"DeliveryOption": "pickup",
        	"TAXTotal": 0,
        	"VoucherCode": "",
        	"LeadTime": "",
        	"BillAddress2": "",
        	"ShipAddress2": "",
        	"IsGift": false,
        	"SupplierID": "00000000-0000-0000-0000-000000000000",
        	"ConversionFactor": "1",
        	"cpuserid": "00000000-0000-0000-0000-000000000000",
        	"OrderLineId": [
            	{
                	"OrderLineId": 21160149,
                	"OrderId": 3390199,
                	"ProductId": 8303029,
                	"VariantProductId": 0,
                	"IsParentProduct": false,
                	"Description": "",
                	"Quantity": 1,
                	"ShippingCost": 0,
                	"ProductPrice": 0,
                	"TotalPromotionDiscount": 0,
                	"ReturnReason": "",
                	"ReturnAction": "",
                	"StockAction": "",
                	"ReturnQty": 0,
                	"IsBackOrder": false,
                	"TotalVoucherDiscount": 0,
                	"TotalTaxAmount": 0,
                	"ShippingVoucherDiscount": 0,
                	"CustomFields": "",
                	"VariantMasterProductId": 0,
                	"LocationCode": "111",
                	"ShippingStatus": "W",
                	"DeliveryMode": "S",
                	"VendorId": "2002cbfe-9adf-42ac-9bfd-8e013fee7gtr",
                	"ItemStatus": "S",
                	"SKU": "Dls-130031",
                	"VariantSku": "",
                	"ProductTitle": "BUY ONE GET ONE FREE- Medium",
                	"BundleProductId": "8303029",
                	"ParentReDetailsId": "0",
                	"IsPrimaryProduct": "false",
                	"Portion": "",
                	"MRP": "0.0000",
                	"TaxDetails": [],
                	"LocationId": 13360,
                	"CategoryId": "CU00215646",
                	"CategoryName": "Deals",
                	"CancelQuantity": 0,
                	"DerivedStatus": "Waiting for Collection - Instore",
                	"DerivedStatusCode": "W",
                	"EstimatedDeliveryTime": "01-Jan-0001 12:00:00 AM",
                	"PromotionIds": null,
                	"SubStatus": ""
            	},
            	{
                	"OrderLineId": 21160151,
                	"OrderId": 3390199,
                	"ProductId": 8303031,
                	"VariantProductId": 0,
                	"IsParentProduct": false,
                	"Description": "",
                	"Quantity": 1,
                	"ShippingCost": 0,
                	"ProductPrice": 0,
                	"TotalPromotionDiscount": 0,
                	"ReturnReason": "",
                	"ReturnAction": "",
                	"StockAction": "",
                	"ReturnQty": 0,
                	"IsBackOrder": false,
                	"TotalVoucherDiscount": 0,
                	"TotalTaxAmount": 0,
                	"ShippingVoucherDiscount": 0,
                	"CustomFields": "",
                	"VariantMasterProductId": 0,
                	"LocationCode": "111",
                	"ShippingStatus": "W",
                	"DeliveryMode": "S",
                	"VendorId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                	"ItemStatus": "S",
                	"SKU": "Pz-New-Spicy-Chicken-Ranch",
                	"VariantSku": "",
                	"ProductTitle": "New Spicy Chicken Ranch",
                	"BundleProductId": "8303029",
                	"ParentReDetailsId": "21160149",
                	"IsPrimaryProduct": "false",
                	"Portion": "W",
                	"MRP": "0.0000",
                	"TaxDetails": [],
                	"LocationId": 13360,
                	"CategoryId": "CU00215656",
                	"CategoryName": "Chicken",
                	"BundleCartReferenceKey": "00b623ee-cc01-4aaf-8b02-69c047fb4c66",
                	"CancelQuantity": 0,
                	"DerivedStatus": "Waiting for Collection - Instore",
                	"DerivedStatusCode": "W",
                	"EstimatedDeliveryTime": "01-Jan-0001 12:00:00 AM",
                	"PromotionIds": null,
                	"SubStatus": ""
            	},
            	
        	],
        	"PaymentDetails": [
            	{
                	"PointsBurned": "0",
                	"AgentId": "",
                	"GV": "",
                	"Channel": "W",
                	"CurrencyCode": "KWD",
                	"PaymentResponse": "",
                	"PaymentStatus": "A",
                	"Amount": "3.2500",
                	"PaymentDate": "11/9/2018 7:25:16 PM",
                	"PaymentType": "COD",
                	"OrderId": 3390199,
                	"PaymentDetailsId": 3395813,
                	"checkOutGroup": "",
                	"PaymentOption": "COD",
                	"clientIP": "",
                	"ResponseCode": "N",
                	"ClientUserAgent": "API"
            	}
        	],
        	"Rewards": null,
        	"ShippingDiscount": 0,
        	"VoucherDiscount": 0,
        	"PromotionDiscount": 0,
        	"OriginalOrderId": "",
        	"ReturnOrderId": "",
        	"ReferenceNo": "",
        	"DemandedDeliveryDate": "09-Nov-2018",
        	"deliveryslots": {
            	"StartTime": "08:00 PM",
            	"EndTime": "08:15 PM",
            	"DeliverySlotId": "14136"
        	},
        	"PickupFirstName": "",
        	"PickupLastName": "",
        	"PickupEmail": "",
        	"PickupMobile": "",
        	"Latitude": "0",
        	"Longitude": "0",
        	"GiftMessage": "جبن زيادة",
        	"LanguageCode": "ar",
        	"ShipCityCode": "39440",
        	"ShipStateCode": "KW13",
        	"BillCityCode": "39440",
        	"ShipCountryCode": "KW",
        	"BillStateCode": "KW13",
        	"BillCountryCode": "KW",
        	"RefundAmount": "0",
        	"ChannelID": "0",
        	"IsSelfShip": "False",
        	"ChannelOrderID": "0",
        	"Promotions": null,
        	"SubStatus": "IK",
        	"OrderAttributes": [
            	{
                	"OrderId": 3390199,
                	"MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                	"AttributeID": 18,
                	"AttributeName": "IsImmediateOrder",
                	"Value": "true"
            	},
            	{
                	"OrderId": 3390199,
                	"MerchantId": "81e77da2-723b-483d-8c0d-49f800c1xxxx",
                	"AttributeID": 32,
                	"AttributeName": "channelid",
                	"Value": "PWA,android"
            	}
        	],
        	"SourceLocationID": "13360",
        	"SourceLocationCode": "111",
        	"OrderDateLocal": null,
        	"AutoUpdateTime": "/Date(1541781700000+0530)/"
    	}
	],
	"ErrorCode": 0
}

```


Retrieves the details of a specific order of a merchant.


| | |
--------- | ----------- |
URI | `order/V2/{{MerchantId}}/{orderID}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`{host}/developerapi/order/V2/{MerchantId}/{orderID}`

### Request Path Parameters
Parameter | Type | Description
--------- | ----- | ------
MerchantId* | string | Unique GUID of the merchant associated to the order
orderID* | int | Order id for which you want to fetch details
V2* | string | Supported API version

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
IsBackOrder | enum | Can the item be ordered even when out of stock. Value: `true`, or `false`
VariantMasterProductId | int | Unique id of the master product for the current variant




## Get Order Details (by ReferenceNo)

Retrieves the details of a specific order based on the order reference number passed.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/DetailsByRefCode/9820eca5-d11f-4df1-9b20-983a45ea9631/order1

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "OrderLines": [
    {
      "OrderLineId": 26808837,
      "OrderId": 7804535,
      "ProductId": 14105696,
      "VariantProductId": 10175720,
      "IsParentProduct": true,
      "Description": "Size=10-11 yrs",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 8750,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "0",
      "ReturnAction": "",
      "StockAction": "",
      "ReturnQty": 0,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": null,
      "VariantMasterProductId": 0,
      "Orderrefreneceno": "order1",
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    },
    {
      "OrderLineId": 26493499,
      "OrderId": 7664867,
      "ProductId": 12973016,
      "VariantProductId": 9929422,
      "IsParentProduct": true,
      "Description": "Size=FREE",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 8750,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "1",
      "ReturnAction": "RP",
      "StockAction": "DS",
      "ReturnQty": 1,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": null,
      "VariantMasterProductId": 0,
      "Orderrefreneceno": "order1",
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    },
    {
      "OrderLineId": 26105069,
      "OrderId": 7483875,
      "ProductId": 12973016,
      "VariantProductId": 9929422,
      "IsParentProduct": true,
      "Description": "Size=FREE",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 8750,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "0",
      "ReturnAction": "",
      "StockAction": "",
      "ReturnQty": 0,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": null,
      "VariantMasterProductId": 0,
      "Orderrefreneceno": "order1",
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    },
    {
      "OrderLineId": 25927335,
      "OrderId": 7400925,
      "ProductId": 10997762,
      "VariantProductId": 6740894,
      "IsParentProduct": true,
      "Description": "Colour=Yellow;Size=32",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 8750,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "0",
      "ReturnAction": "",
      "StockAction": "",
      "ReturnQty": 0,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": null,
      "VariantMasterProductId": 0,
      "Orderrefreneceno": "order1",
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    },
    {
      "OrderLineId": 24075722,
      "OrderId": 6593334,
      "ProductId": 11002174,
      "VariantProductId": 6763842,
      "IsParentProduct": true,
      "Description": "Colour=Orange;Size=32",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 5000,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "0",
      "ReturnAction": "",
      "StockAction": "",
      "ReturnQty": 0,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": null,
      "VariantMasterProductId": 0,
      "Orderrefreneceno": "order1",
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/DetailsByRefCode/{merchantId}/{orderReferenceNo}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/DetailsByRefCode/{merchantId}/{orderReferenceNo}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
orderReferenceNo* | string | Reference number of the order that you want to fetch


<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters


Parameter | Type | Description
-------- | ----- | -----------
TotalPromotionDiscount | float | Total promotional discount received for the product
ReturnReason | string | Reason for returning the item. Applicable for return items. Values:<br> WID - Wrong item delivered <br> BAQ - Bad Quality <br> DLP - Did not like the product <br> DPR - Defective/Damage product received <br> RD - Received Damaged DP - Defective Product<br> II - Incorrect Item received<br> UW	Unwanted Gift<br> US - Unsuitable<br> UP - Unlike Photo, TS - Too Small<br> OT - Other<br> FD - Fraud<br> IE - Incorrect Size<br> PDR - Product is damaged<br> WPD - Product is not as per website description<br> CR - Customer Remorse<br> PWF - Product is not properly functioning
IsBackOrder | boolean | Whether the item can be ordered even when it is out of stock
ShippingVoucherDiscount | float | Discount amount, though voucher, availed on the shipment
SubStatus | enum | Sub status of the order as configured in the CP. For example, RJ for rejected. You can find the order sub-statuses configured on the CP Settings > Application settings > Order settings > Order Substatus
IsFreebie | enum | Whether the item is a free gift item or not. Value `0` for no, `1` for yes
FreebieParent | string | Unique id of the freebie parent product 




## Get Order Lineitem Details

Retrieves the details line items of a specific order.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/LineItem/9820eca5-d11f-4df1-9b20-983a45ea9631/24075722

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "OrderLines": [
	{
      "OrderLineId": 24075722,
      "OrderId": 6593334,
      "ProductId": 11002174,
      "VariantProductId": 6763842,
      "IsParentProduct": true,
      "Description": "Colour=Orange;Size=32",
      "Quantity": 1,
      "ShippingCost": 0,
      "ProductPrice": 5000,
      "TotalPromotionDiscount": 0,
      "ReturnReason": "0",
      "ReturnAction": "",
      "StockAction": "",
      "ReturnQty": 0,
      "IsBackOrder": false,
      "TotalVoucherDiscount": 0,
      "TotalTaxAmount": 0,
      "ShippingVoucherDiscount": 0,
      "CustomFields": "",
      "VariantMasterProductId": 0,
      "LocationCode": "OCDEL",
      "DeliveryMode": "H",
      "VendorId": "00000000-0000-0000-0000-000000000000",
      "ItemStatus": "IC",
      "SKU": "RB3196",
      "VariantSku": "RB3196-8903098726550",
      "ProductTitle": "Chanderi Straight Suit Set By Rohit Bal(Colour=Orange;Size=32)",
      "LocationId": 16696,
      "CancelQuantity": 0,
      "PromotionIds": null,
      "SubStatus": null,
      "IsFreebie": 0,
      "FreebieParent": null
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/LineItem/{merchantId}/{orderLineId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/LineItem/{merchantId}/{orderLineId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
orderLineId* | int | Unique id of the order line item


<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters


Parameter | Type | Description
-------- | ----- | -----------
TotalPromotionDiscount | float | Total promotional discount received for the item
ReturnReason | string | Reason for returning the item. Applicable for return items. Values:<br> WID - Wrong item delivered <br> BAQ - Bad Quality <br> DLP - Did not like the product <br> DPR - Defective/Damage product received <br> RD - Received Damaged DP - Defective Product<br> II - Incorrect Item received<br> UW	Unwanted Gift<br> US - Unsuitable<br> UP - Unlike Photo, TS - Too Small<br> OT - Other<br> FD - Fraud<br> IE - Incorrect Size<br> PDR - Product is damaged<br> WPD - Product is not as per website description<br> CR - Customer Remorse<br> PWF - Product is not properly functioning
IsBackOrder | boolean | Can the item be ordered even when out of stock
ShippingVoucherDiscount | float | Discount on shipping through voucher
VendorId | string | Unique GUID of the supplier of the item
ItemStatus | enum | Current status of the item. Authorized - `A`, Return Initiated - `RI`, Reverse Shipment Initiated - `RS`, Reverse Shipment Received - `RR`, Shipment Closed - `RC`, Shipment Created - `S`, RTO Initiated - `I`, RTO Received - `O`, RTO Lost - `L`, Others - `X`, Dispatched - `R`, In Transit - `T`, Out for Delivered - `U`, Delivered - `D`, RTO Closed - `C`, Refund - `AF`, Reverse Shipment Picked - `RP`, Returned - `SR`, Cancelled - `IC`, Failed - `F`, Partially Cancelled - `PC`, Pending - `P`, Picklist Created - `PLC`, Picklist Completed - `PLCL`, In Picking - `PLIP`, Cancelled - Refund Initiated - `ICI`, Cancelled & Refunded - `ICC`, Partial Cancelled & Refund Initiated - `PCI`, Partial Cancelled - Refunded - `PCC`, RTO - Refunded/Replacement Closed - `E`, Waiting for Collection - `W`, At Gate - `G`.
SubStatus | enum | Sub status of the as configured in the CP. For example, RJ for rejected. You can find the order sub-statuses configured on the CP Settings > Application settings > Order settings > Order Substatus
IsFreebie | enum | Whether the item is a free gift item. Value `0`, for no and `1` for yes
FreebieParent | string | Unique freebie id of the parent product (parent product for which the item is free)













## Get Order Status



> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetOrderStatus/f48fdd16-92db-4188-854d-1ecd9b62d066/7506651

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": null,
  "ErrorCode": 0,
  "OrderStatus": {
    "OrderId": 7506651,
    "status": "D",
    "subStatus": ""
  }
}

```

Retrieves current status of an order based on the order id.


### Resource Information
| | |
--------- | ----------- |
URI | `Order/GetOrderStatus/{MerchantId}/{orderId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`{host}/developerapi/Order/GetOrderStatus/{MerchantId}/{orderId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
orderId* | int | Order id for which you want to see the current status 

<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
status | enum | Current status of an order. Values: `P` for pending, `C` for canceled, `F` failed, `A` for authorized,  `S` for shipped, `D` for delivered
SubStatus | enum | Sub status of the order as configured in the CP. For example, RJ for rejected. You can find all available sub-statuses in CP Settings > Application settings > Order settings > Order Substatus





## Cancel Order

> Sample Request

```html
https://www.martjack.com/developerapi/Order/Cancel
```

> Sample POST Request

```json
MerchantID=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData={
   "merchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
   "OrderId":"6261090",
   "Comment":"Ordered wrong item",
   "PGResponse":"",
   "OperatorID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
   "DisplayCommentToUser":"false",
   "date":"01/24/2018 4:12:32 PM",
   "CancelReason":"NDA"
}

```

> Sample Response

```json
{
  "messageCode": "1002",
  "Message": "Cancelled successfully"
}
```

Cancels a specific order of a customer placed on a merchant store. An order can be canceled only if the logged in user has sufficient permission to cancel the order and the order is not shipped at the time of cancellation.

However, you can cancel the order if
 
* it is either in Authorized (A) or Pending (P) Status
* the picklist is either created or completed for any of the order items


### Resource Information

| | |
--------- | ----------- | 
URI | `Order/Cancel`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/Cancel`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
Merchant Id* | string  | The unique id (GUID) of the merchant associated to the order
OrderId* | int | Provide the order id that you want to cancel
Date* | date-time | Date and time when the order is created in `MM/DD/YYYY HH:MM:SS AM/PM` format
Comment | string | Specify the customer's reason for the order cancellation
DisplayCommentToUser | boolean  | Value: True/False. Specify whether to make the custom comment visible (True) or invisible (False) to the end-customer 
PGResponse |  string | The response received from the payment gateway
OperatorID | string  | Current user id - It could be store, admin, manager
CancelReason* | string  | Specify the predefined reason code for the order cancellation. Values: <br>`NDA`: Order not in delivery Area<br> `ICI`: Incorrect Contact information<br> `ODM`: Order less than order delivery minimum value<br> OND: Order not delivered<br> `SLA`: SLA expired in Acknowledgment<br> `SLN`: SLA expired in New Order<br> `QMA`: Order Expired due to Quantity Mismatch from Aggregator<br> `RDA`: Retailer did Not allocate items to aggregator<br> `CPR`: Cancellation as per customer request<br> `INA`: Item Not available/Unsellelable<br> `OPM`: Order placed by mistake<br> `DTM`: Order delivery Is taking too much time<br> `OEQ`: By mistake ordered extra quantity<br> `BFS`: Bought it from somewhere else<br> `CSA`: I want to change my shipping address<br> `CMP`: I want to change my mode of payment<br> `CHA`: Product cost Is high compared to another website<br> `SCH`: Shipping charges are too high<br> `PNR`: Payment not received

<aside class="notice"> All parameters marked by * are mandatory. </aside>


 
## Cancel Order Lineitem

> Sample Request

```html
https://www.martjack.com/developerapi/Order/CancelItem
```

> Sample POST Request

```json
MerchantID=98d18d82-ba59-4957-9c92-3f89207a3xxx&InputFormat=application/json&InputData={  
   "merchantId":"98d18d82-ba59-4957-9c92-3f89207a3xxx",
   "OrderId":"2658242",
   "Comment":"Test",
   "PGResponse":"",
   "OperatorID":"98d18d82-ba59-4957-9c92-3f89207a3xxx",
   "DisplayCommentToUser":"false",
   "date":"11/08/2017 4:12:32 PM",
   "CancelReason":"NDA",
   "TobeCancelledOrderItems":[  
      {  
         "OrderItemID":8518882,
         "CancelQuantity":1
      }
   ]
}

```

> Sample Response

```json
{
  "messageCode": "1002",
  "Message": "Cancelled successfully"
}
```

 
 Lets you cancel specific items of an order (partial cancellation). You can cancel an order item only if
 
* The logged in user has sufficient permission to cancel
* The order is either in Authorized (A) or Pending (P) Status
* The order item is not shipped

### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/CancelItem`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/CancelItem`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -------
Merchant Id* | string | The unique id (GUID) of the merchant in which the order is placed
OrderId* | int | Provide the order id that you want to cancel
Date* | date | Date and time when the order is created in `MM/DD/YYYY HH:MM:SS AM/PM` format
Comment | string | Specify the customer's reason for the order cancellation
DisplayCommentToUser | boolean |  Value: True/False. Specify whether to make the comment visible (True) or hidden (False) to the end-customer 
PGResponse | string | The response received from the payment gateway for that specific order
OperatorID | string | Current CP user id
CancelReason* | string | Specify the predefined reason code for the order cancellation. Values: <br>`NDA`: Order not in delivery Area<br> `ICI`: Incorrect Contact information<br> `ODM`: Order less than order delivery minimum value<br> OND: Order not delivered<br> `SLA`: SLA expired in Acknowledgment<br> `SLN`: SLA expired in New Order<br> `QMA`: Order Expired due to Quantity Mismatch from Aggregator<br> `RDA`: Retailer did Not allocate items to aggregator<br> `CPR`: Cancellation as per customer request<br> `INA`: Item Not available/Unsellelable<br> `OPM`: Order placed by mistake<br> `DTM`: Order delivery Is taking too much time<br> `OEQ`: By mistake ordered extra quantity<br> `BFS`: Bought it from somewhere else<br> `CSA`: I want to change my shipping address<br> `CMP`: I want to change my mode of payment<br> `CHA`: Product cost Is high compared to another website<br> `SCH`: Shipping charges are too high<br> `PNR`: Payment not received
TobeCancelledOrderItems | obj | Specify the items that you want to cancel in `OrderItemID` and `CancelQuantity`

<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Add Order Lineitem

Lets you add an item to an existing order.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/AddOrderLineItem/98d18d82-ba59-4957-9c92-3f89207a32d4

```


> Sample POST Request

```json

MerchantID=98d18d82-ba59-4957-9c92-3f89207a32d4&InputFormat=application/json&InputData={  
   "OrderID":6419643,
   "SKU":"Fruits0025",
   "VarientSKU":"Fruits0025-2-New",
   "Quantity":1,
   "LocationCode":"20518",
   "DeliveryMode":"H",
   "ItemAction":1
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
URI | `/Order/AddOrderLineItem/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/AddOrderLineItem/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
OrderID* | int | Unique id of the order to which you want to add items
SKU* | string | SKU of the product that you want to add/update
VarientSKU | string | Variant SKU of the item that you want to add. Required to add variant product
Quantity* | int | Quantity of the current item (SKU/variantSKU) that you want to add. The value you mention herein will add to the existing quantity but not overrides the existing quantity
LocationCode* | int | Location code of the item
DeliveryMode* | enum | Mode of delivery of the current item. Values: `H` for home delivery, `S` for store pick-up
ItemAction* | enum | Specify `1` to add items to the existing list. Only one value is supported currently









## Process Return

> Sample Request

```html
https://www.martjack.com/developerapi/Order/ProcessReturn/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
InputFormat=application/json&merchantId=f48fdd16-92db-4188-854d-1ecd9b62xxxx&InputData={    
   "OrderId":"6071567",
   "ReturnRequestId":"72380",
   "ReturnChangeAction":{  
      "Substatus":"RA",
      "SubstatusChangeComments":"QC done"
   },
   "returnrequestdetails":[  
      {  
         "ReturnRequestDetailId":"109134",
         "ReturnItemChangeAction":{  
            "Substatus":"RA",
            "SubstatusChangeComments":"QC comment"
         }
      }
   ]
}
```

> Sample Response

```json
{
    "messageCode": "1007",
    "Message": "Updated Successfully",
    "ErrorCode": 0
}
```

Lets you process return requests and change the sub-status of the return requests.


For return requests, a brand could configure multiple sub-statuses according to its work-flow.

### Resource Information
| | |
--------- | ----------- |
URI | `/Order/ProcessReturn/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/ProcessReturn/{MerchantId}`

### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -------
OrderId* | int | Order ID of the return items
ReturnRequestId | int |  Return Request ID. Leave this blank if you want to just modify the return details
Substatus |  string | Sub-status code of the return request (Preconfigured values only). Leave this blank if you want to just modify the return details
SubstatusChangeComments | string  | Specify the reason for return sub-status change. You can enter up to 50 characters

<aside class="notice"> All parameters marked by * are mandatory. </aside>






## Update Return Request Status

Lets you update the status of a return request.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateReturnRequestStatus/9820eca5-d11f-4df1-9b20-983a45ea9631

```

> Sample POST Request

```json
MerchantId=9820eca5-d11f-4df1-9b20-983a45ea9631&InputFormat=application/json&InputData={
   "UpdateReturnRequestStatus":{
      "ReturnRequestID":"820083",
      "Status":"P",
      "OperatorId":"6c57599f-2c43-4c82-806a-e07c3410f5d3"
   }
}

```


> Sample Response

```json
{
   "messageCode":"1007",
   "Message":"Updated Successfully",
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/UpdateReturnRequestStatus/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateReturnRequestStatus/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
ReturnRequestID* | int | Unique id of the return request that you want to update
Status* | enum | New status of the return request. Values: Refund Completed - `RC`, Initiated - `I`, Received - `R`, Picked - `P`, Pending Pickup - `S`, Closed - `C`
OperatorId | string | Unique id of the store operator that is updating the status


<aside class="notice"> All parameters marked by * are mandatory. </aside>








## Ship Order (Create Shipment)

> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Order/Ship
```

> Sample POST Request


```json
MerchantID=fccabc5b-aa81-4346-b536-0fd6bc94c837&InputFormat=application/json&InputData={  
   "shipment":{  
      "OrderId":"7503709",
      "LocationRefCode":"",
      "LogisticsType": "ConfiguredProvider",
	  "ShipDate":"2019/11/01",
      "ShipmentType":"normal",
      "CourierName":"test",
      "AWBNumber":"12345",
      "lineitems":[  
         {  
            "OrderLineId":"26147149",
            "Weight":"3",
            "Quantity":"1"
         }
      ],
      "ShipmentTrip":{  
         "RiderID":2,
         "RiderCode":"",
         "TripRefNo":"WRWGG123456",
         "VehicleNumber":"1234",
         "Comments":"Sample comment",
         "Attributes":[  
            {  
               "Name":"Mobile",
               "Value":"9090000000"
            }
         ]
      },
      "MerchantId":"fccabc5b-aa81-4346-b536-0fd6bc94c837"
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Shipments": [
        {
            "LocationId": 0,
            "ShipmentType": null,
            "ReceivedBy": null,
            "DeliveredDate": null,
            "ShipmentId": 5516207,
            "OrderId": 0,
            "ServiceProvider": null,
            "DocketNumber": null,
            "ShippingDate": null
        }
    ],
    "ErrorCode": 0
}
```

Lets you add shipment details for a specific order.


### Resource Information

| | |
--------- | ----------- |
URI | `/Order/Ship`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/Ship`

### Request Body Parameters
Parameter | Type |  Description
--------- | ---- | -------
MerchantId* | string |  The unique id (GUID) of the merchant in which the order is registered or placed
OrderId* | int |  The order id of the current shipment item 
AWBNumber* | string |  The air way bill number generated for the shipment
CourierName* | string |  The courier service used for shipment
LogisticsType | enum | Specify `ConfiguredProvider` if the logistic provider is configured for the merchant; else leave it blank. You need to pass the AWBNumber and CourierName if LogisticType is blank. If `ConfiguredProvider`, AWB number will be considered or assigned as per configured
ShipDate* | date |  The date on which the order is shipped in `yyyy/mm/dd` format
ShipmentType* | enum |  The type of shipment. Value: `Normal` for shipments from warehouse to customer, `Reverse` for return shipments, i.e., customer to warehouse
LocationRefCode* | string |  Location reference code of the order fulfillment store
lineitems* | obj |  The details of each line item. Specify `OrderLineId` and `Quantity`
ShipmentTrip | obj |  Provide more details of the shipment in the parameters specified below. Use this only if applicable for the current merchant
RiderID | int |  Specify the rider id as available in the merchant system
RiderCode | string |  Specify the rider code as available in the merchant system
TripRefNo | string |  Specify the trip reference number as per the merchant system
VehicleNumber | string |  Specify the vehicle number of the delivery vehicle
Attributes | obj |  Specify any additional information such as delivery guy's mobile number
 
<aside class="notice"> All parameters marked by * are mandatory. </aside>










## Create Shipment Packages

> Sample Request

```html
https://www.martjack.com/developerapi/Order/CreateShipmentPackages/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
InputFormat=application/json&merchantId=f48fdd16-92db-4188-854d-1ecd9b62xxxx&InputData={
  "CreateShipmentPackages": {
	"OrderID": "6402591",
	"ShipmentType": "Normal",
	"AirwayBillNo": "123456",
	"CourierName": "Custom",
	"ShipmentPickupDate": "2018/10/30",
	"LocationCode": "1001",
	"ShipmentPackageInputs": [
  	{
    		"PackageCode": "FN322",
    		"PackingSupplyRefCode": "LOOSE",
    		"PackageID": "16",
    		"ShipmentPackageItems": [
      		{
        			"OrderItemId": "23356065",
        			"Quantity": 1
      		},
      		{
        			"OrderItemId": "23356068",
        			"Quantity": 1
      		}
    	     ]
  	},
  	{
    		"PackageCode": "NEW44",
    		"PackingSupplyRefCode": "HIGH",
    		"PackageID": "18",
    		"ShipmentPackageItems": [
      		{
        			"OrderItemId": "23356080",
        			"Quantity": 2
      		},
      		{
        			"OrderItemId": "23356088",
        			"Quantity": 1
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
   "ErrorCode":0
}
```

Creates shipment packages for a specific order.

### Resource Information
| | |
--------- | ----------- |
URI | `/Order/CreateShipmentPackages/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/CreateShipmentPackages/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
OrderID* | int | The order id for which you want to create shipment packages
ShipmentType* | string  | Type of shipment. Value: `Normal` for shipments from warehouse to customer, `Reverse` for shipments customer to warehouse (return pickup)
AirwayBillNo* | string | Airway bill number provided by the courier service
CourierName* | string | Name of the courier service used for shipment
ShipmentPickupDate* | date-time | Pickup date of the shipment in `YYYY/MM/DD` format
LocationCode* | string | Location code of the order fulfillment location (Generally used for Location specific merchants)
PackageCode | string | Unique code generated for the package
PackingSupplyRefCode | string | Unique reference code generated for the package while creating
PackageID | int | Unique id of the package 
OrderItemId* | int | Order line item id of that specific item
Quantity* | int | Quantity of the current order item

<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Change Order Sub-status

Lets you modify the sub-status of an order or item to rejected (to trigger the allocation rules again).


> Sample Request

```html
https://www.martjack.com/developerapi/Order/ChangeSubStatus/81e77da2-723b-483d-8c0d-49f800c1xxxx/7680905
```


> Sample POST Request

```json
MerchantId=81e77da2-723b-483d-8c0d-49f800c1xxxx&InputFormat=application/json&InputData={
   "ChangeSubStatus":{
      "SubStatus":"",
      "OperatorId":"",
      "ItemLevelSubStatus":[
         {
            "OrderLineId":"26529393",
            "SubStatus":"RJ"
         },
         {
            "OrderLineId":"26529395",
            "SubStatus":"RJ"
         },
         {
            "OrderLineId":"26529397",
            "SubStatus":"RJ"
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
    "ErrorCode": 0
}
```




### Resource Information
| | |
--------- | ----------- |
URI | `/Order/ChangeSubStatus/{MerchantId}/{OrderId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/ChangeSubStatus/{MerchantId}/{OrderId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the order
OrderId* | int | Order id for which you want to update sub-status



### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
OperatorId | string | Unique id of the staff updating the order substatus.
OrderLineId* | int | Line item id of the order for which you want to update status
SubStatus* | enum | New status of the order or order line item as configured in the CP. These can be predefined or user defined. You can either pass it at the order level or line-item. For example, `EX` for Order Expired, `SE` for Successful to ERP/POS, `RJ` for	Order Rejected, `FE` for Failed to ERP/POS, `IP` for In Progress. <br>	
You can find the predefined and user defined sub-statuses in the CP Settings > Application settings > Order settings > Order Substatus



## Update Shipment Trip Details

Lets you update the trip details of a specific shipment. For example, you can provide rider details, vehicle number, contact details, tracking URL and so on.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateShipmentTripDetails/81e77da2-723b-483d-8c0d-49f800c1xxxx

```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "ShipmentId": 123456,
  "RiderId": 0,
  "RiderCode": "PH001",
  "VehicleNumber": "MH01123456",
  "TripRefNo": "123456",
  "Comments": "Shipment is on vehicle for final delivery",
  "OperatorID": "00000000-0000-0000-0000-000000000000",
  "ShipmentTripAttributes": [
    {
      "Name": "Mobile",
      "Value": "6362245119"
    },
    {
      "Name": "Name",
      "Value": "Jane Doe"
    },
    {
      "Name": "Map URL",
      "Value": "www.capillarytech.in"
    }
  ]
}

```


> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Shipment Trip Information is saved successfully.",
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/UpdateShipmentTripDetails/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateShipmentTripDetails/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
ShipmentId* | int | Unique id of the shipment that you want to update
RiderId** | int | Unique id of the rider who delivers the shipment. Rider ID has to be preconfigured for the merchant. Either RiderId or RiderCode is mandatory
RiderCode** | string | Unique code of the rider who delivers the shipment. Rider Code has to be preconfigured for the merchant. Either RiderId or RiderCode is mandatory
VehicleNumber | string | Vehicle number of the delivery vehicle
TripRefNo | string | Unique trip reference number
Comments | string | Specify any comments that need to be specified for the shipment
OperatorID | string | Unique CP user GUID who updates the shipment trip details
ShipmentTripAttributes | obj | Provide additional details of the shipment in each obj Name-Value (key-value) pairs. You can pass your preferred combination of attribute name and value as applicable



<aside class="notice"> 
* All parameters marked by * are mandatory.
* ** You need to provide either rider id or rider code
* You need to pass other parameters that are applicable to the shipment type 
</aside>






## Update Shipment Status

Updates the status of a shipment.


> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateShipmentStatus/81e77da2-723b-483d-8c0d-49f800c1xxxx
```

> Sample POST Request

```json
InputFormat=application/json&merchantId=81e77da2-723b-483d-8c0d-49f800c1xxxx&InputData={  
   "UpdateShipmentStatus":{  
      "ShipmentId":"2205635",
      "Shippingstatus":"D",
      "ShippingMessage":"Shipment is completed",
	  "reason":"done",
	  "userId":""
   }
}
```

> Sample Response

```json
{
    "messageCode": "1007",
    "Message": "Updated Successfully",
    "ErrorCode": 0
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `Order/UpdateShipmentStatus/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateShipmentStatus/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
ShipmentId* | string  | Unique id of the shipment that you want to update
Shippingstatus* | enum | New status of the current shipment. Values: `I` - RTO initiated, `O` - RTO Received, `L` - RTO Lost, `X` - Others, `S` - Shipment created, `R` - Dispatched, `T` - In transit, `U` - Out for delivery, `D` - Delivered, `C` - RTO Closed, `F` - Cancelled, `E` - RTO Refunded/Replacement closed, `W` - Waiting for Collection (in-store), `G` - At Gate
ShippingMessage | string | Message that you want to provide for the shipment
reason | string | Reason that you want to specify for the shipment update
userId | string | Unique id of the operator who is updating the status


 


## Get Shipment Packages

> Sample Request

```html
https://www.martjack.com/developerapi/Order/ShipmentPackages/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ShipmentPackages": [
	{
  	"PackageId": 38,
  	"PackageType": "HYC",
  	"LWH": "1X1X1",
  	"Weight": 10,
  	"UOM": "Kgs",
  	"PackingSupplyRefCode": "36478"
	},
	{
  	"PackageId": 18,
  	"PackageType": "test",
  	"LWH": "",
  	"Weight": 100,
  	"UOM": "Gms",
  	"PackingSupplyRefCode": "test"
	}
  ],
  "ErrorCode": 0
}

```

Retrieves all shipment packages of the merchant.

### Resource Information
| | |
--------- | ----------- |
URI | `/Order/ShipmentPackages/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/ShipmentPackages/{merchantId}`


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
-------- | ----- | -----------
PackageType | string | Name of the package supply
PackingSupplyRefCode | string | Unique reference code generated for the package while creating
UOM | string | Unit of measurement of the product. Values: ltrs, kgs, gms, pieces


## Get Shipment Details

> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Order/ShipmentDetails/f48fdd16-92db-4188-854d-1ecd9b62xxxx/5471021
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Shipments":[  
      {  
         "LocationId":25633,
         "ShipmentType":"Normal",
         "ReceivedBy":"",
         "DeliveredDate":"01-Jan-1900",
         "ShipmentId":5471021,
         "OrderId":7405405,
         "ServiceProvider":"ITOCHU",
         "DocketNumber":"ABC",
		 "externalInvoiceNumber": "HYC-123-1234",
         "ShippingDate":"22-Nov-2018",
         "ShippingCharges":"0",
         "ShipmentItems":[  
            {  
               "OrderLineId":25937891,
               "Quantity":2,
               "ShipmentCustomFields":null
            }
         ]
      }
   ],
   "ErrorCode":0
}
```

Retrieves the details of a specific shipment.

<aside class="notice"> No POST body is required for this API</aside>


### Resource Information

| | |
--------- | ----------- |
URI | `/Order/ShipmentDetails/{merchantId}/{shipmentId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See **Introduction** > **Authentication (Merchant Setup on Admin Portal)** for more details


### Request URL

`{host}/developerapi/Order/ShipmentDetails/{merchantId}/{shipmentId}`

### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
shipmentId* | int | Unique id of the shipment that you want to retrieve

<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
-------- | ----- | -----------
DocketNumber | string | AWB number of the shipment



## Get Order Activity History

> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetOrderActivityHistory/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
MerchantId=f48fdd16-92db-4188-854d-1ecd9b62xxxx&InputFormat=application/json&InputData={  
   "orderfieldchangehistory":"false",
   "activityhistory":"true",
   "orderids":[  
      3725777,7401027
   ]
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "ErrorCode":0,
   "ListOfOrderActivities":[  
      {  
         "OrderID":7401121,
         "OrderFieldChangeHistory":[  

         ],
         "OrderItemFieldChangeHistory":[  

         ],
         "OrderActivityHistory":[  
            {  
               "ConversationLogId":69710993,
               "ConversationDate":"/Date(1542770207000+0530)/",
               "ConversationText":"Order ID: 7401121 has been created successfully. ",
               "RETransactionId":7401121,
               "ConversationType":"SOL",
               "CPUserId":"00000000-0000-0000-0000-000000000000",
               "LogAction":"P",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542770207000+0530)/"
            },
            {  
               "ConversationLogId":69710995,
               "ConversationDate":"/Date(1542770207000+0530)/",
               "ConversationText":"Payment through 'RAZORPAY' mode has been saved successfully.",
               "RETransactionId":7401121,
               "ConversationType":"SOL",
               "CPUserId":"00000000-0000-0000-0000-000000000000",
               "LogAction":"P",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542770207000+0530)/"
            },
           
            {  
               "ConversationLogId":69711003,
               "ConversationDate":"/Date(1542770227000+0530)/",
               "ConversationText":"Inventory for SKU 100140259  has been reduced against the Order ID: 7401121 ",
               "RETransactionId":7401121,
               "ConversationType":"SOL",
               "CPUserId":"00000000-0000-0000-0000-000000000000",
               "LogAction":"A",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542770227000+0530)/"
            }
         ]
      },
      {  
         "OrderID":7401027,
         "OrderFieldChangeHistory":[  

         ],
         "OrderItemFieldChangeHistory":[  
            {  
               "Status":"A",
               "OrderId":7401027,
               "OrderItemId":25927549,
               "Message":"",
               "LogDateTime":"/Date(1542767189000+0530)/",
               "OldQty":1,
               "NewQty":0,
               "OldPrice":0,
               "NewPrice":0,
               "OldDiscount":0,
               "NewDiscount":0,
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "OldLocationId":0,
               "NewLocationId":18340,
               "OldMRP":0,
               "NewMRP":0
            }
         ],
         "OrderActivityHistory":[  
            {  
               "ConversationLogId":69710055,
               "ConversationDate":"/Date(1542767153000+0530)/",
               "ConversationText":"Order ID: 7401027 has been created successfully. (Processed by -  tom@example.com)",
               "RETransactionId":7401027,
               "ConversationType":"SOL",
               "CPUserId":"5ed51807-e592-4cd2-85fe-34e80ffe0e2a",
               "LogAction":"P",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542767153000+0530)/"
            },
            {  
               "ConversationLogId":69710063,
               "ConversationDate":"/Date(1542767189000+0530)/",
               "ConversationText":"Payment through COD has been Saved successfully.Remarks:jjh(Processed by -  tom@example.com)",
               "RETransactionId":7401027,
               "ConversationType":"SOL",
               "CPUserId":"5ed51807-e592-4cd2-85fe-34e80ffe0e2a",
               "LogAction":"P",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542767189000+0530)/"
            },
            {  
               "ConversationLogId":69710065,
               "ConversationDate":"/Date(1542767189000+0530)/",
               "ConversationText":"Inventory for SKU 100152015  has been reduced against the Order ID: 7401027 ",
               "RETransactionId":7401027,
               "ConversationType":"SOL",
               "CPUserId":"00000000-0000-0000-0000-000000000000",
               "LogAction":"A",
               "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
               "UpdatedDate":"/Date(1542767189000+0530)/"
            }
         ]
      }
   ]
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/Order/GetOrderActivityHistory/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`{host}/developerapi/Order/GetOrderActivityHistory/{MerchantId}`



### Request Body Parameters
Parameter | Type | Description
-------- | ---- | ----------
orderfieldchangehistory | boolean | Specify `true` to retrieve the history of change in order or order item attributes. Default value is `false`
activityhistory | boolean | Specify `true` to retrieve activity log of an order such as order authorized, order shipped, and payment authorized
orderids* | int | Specify the order id(s) that you want to fetch. You can specify multiple order ids separating each by a comma

<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | ----------
ConversationLogId | int | Unique id of the activity for internal reference
RETransactionId | int | Unique Order id for which you want to get activity history
LogAction | enum | Action associated to the log. For example, P (payment), and S (shipment)
ConversationType | - | -Deprecated-




## Get Order Shipments

Retrieves shipment details of a specific order.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/9820eca5-d11f-4df1-9b20-983a45ea9631/176543/Shipments

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "Shipments": [
    {
      "LocationId": 14856,
      "ShipmentType": "Normal",
      "ReceivedBy": "",
      "DeliveredDate": "26-Feb-2019",
      "ShipmentId": 5516837,
      "OrderId": 7508407,
	  "externalInvoiceNumber": "HYC-123-1234",
      "ServiceProvider": "BMSP",
      "DocketNumber": "AWB3399204",
      "ShippingDate": "26-Feb-2019",
      "ShippingCharges": "0",
      "ShipmentItems": [
        {
          "OrderLineId": 26156133,
          "Quantity": 1,
          "ShipmentCustomFields": null
        }
      ],
      "CollectableAmount": "0"
    },
    {
      "LocationId": 14856,
      "ShipmentType": "Normal",
      "ReceivedBy": "",
      "DeliveredDate": "26-Feb-2019",
      "ShipmentId": 5516839,
      "OrderId": 7508407,
      "ServiceProvider": "BNPS",
      "DocketNumber": "awb6385902",
      "ShippingDate": "26-Feb-2019",
      "ShippingCharges": "0",
      "ShipmentItems": [
        {
          "OrderLineId": 26156123,
          "Quantity": 2,
          "ShipmentCustomFields": null
        }
      ],
      "CollectableAmount": "0"
    },
    {
      "LocationId": 14856,
      "ShipmentType": "Normal",
      "ReceivedBy": "",
      "DeliveredDate": "26-Feb-2019",
      "ShipmentId": 5516841,
      "OrderId": 7508407,
      "ServiceProvider": "BMPS",
      "DocketNumber": "AWB9972903",
      "ShippingDate": "26-Feb-2019",
      "ShippingCharges": "0",
      "ShipmentItems": [
        {
          "OrderLineId": 26156131,
          "Quantity": 2,
          "ShipmentCustomFields": null
        }
      ],
      "CollectableAmount": "0"
    },
    {
      "LocationId": 14856,
      "ShipmentType": "Normal",
      "ReceivedBy": "",
      "DeliveredDate": "26-Feb-2019",
      "ShipmentId": 5516843,
      "OrderId": 7508407,
      "ServiceProvider": "BMPS",
      "DocketNumber": "AWB77920023",
      "ShippingDate": "26-Feb-2019",
      "ShippingCharges": "0",
      "ShipmentItems": [
        {
          "OrderLineId": 26156129,
          "Quantity": 2,
          "ShipmentCustomFields": null
        }
      ],
      "CollectableAmount": "0"
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/{merchantId}/{orderId}/Shipments`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/{merchantId}/{orderId}/Shipments`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
orderId* | int | Unique id of the order for which you want to fetch shipments

<aside class="notice">All parameters marked by * are mandatory. </aside>



### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are self explanatory or already in the request body.


Parameter | Type | Description
--------- | ---- | -----------
ShipmentType | enum | Type of shipment. Value: `Normal` for shipments from warehouse to customer, `Reverse` for shipments from customer to warehouse
ReceivedBy | string | Customer who received the shipment
ServiceProvider | string | Name of the logistic provider
CollectableAmount | int | Amount to be collected from the receiver (used for COD orders)






## Get Shipments

> Sample Request

```html
https://www.martjack.com/developerapi/Order/getshipments/389d3f1a-8c9a-41bd-9b3a-e6c2f031527d/6564132
```



> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Successful",
	"Shipments": [{
		"LocationId": 18576,
		"ShipmentType": "normal",
		"ReceivedBy": "",
		"DeliveredDate": "01-Jan-1900",
		"ShipmentId": 4908822,
		"OrderId": 6564132,
		"ServiceProvider": null,
		"DocketNumber": null,
		"ShippingDate": "15-Apr-2018",
		"ReferenceNumber": "",
		"ShippingCharges": "0",
		"ShipmentItems": [{
			"ShipmentId": "4908822",
			"OrderLineId": 23995066,
			"Quantity": 1,
			"ShippingDetailsID": "20734158",
			"ShipmentCustomFields": null
		}],
		"CourierName": "",
		"AWBNumber": "",
		"ShippingStatus": "S",
		"StatusUpdatedDate": "15-Apr-2018",
		"UseMailBoxAddress": "False",
		"DeliveryMode": "H",
		"VerificationMethod": "",
		"VerificationValue": "",
		"Remarks": "",
		"ProviderCode": "",
		"CMSID": "0",
		"Width": "0",
		"Length": "0",
		"Height": "0",
		"Weight": "0.00",
		"ReturnRequestId": "0",
		"InvoiceNumber": "00001320",
		"InvoiceAmount": "9995",
		"externalInvoiceNumber": "HYC-123-1234",
		"CollectableAmount": "0",
		"IslabelReady": "False",
		"LogisticID": "",
		"LogisticResponse1": ""
	}],
	"ErrorCode": 0
}
```


Retrieves shipment details of a specific order




### Resource Information
| | |
--------- | ----------- |
URI | `Order/getshipments/{merchantId}/{orderID}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/getshipments/{merchantId}/{orderID}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
orderID* | int | Unique id the order for which you want to track shipment details

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
UseMailBoxAddress | boolean | Whether the user's mail address of the location is used or not 
VerificationMethod | string | Verification type used for item delivery or return pick-up. Currently we support `OTP`
VerificationValue | string | Value of the specified `VerificationMethod`





## Get Shipment History 

> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetShipmentHistory/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
MerchantId=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData={
  "CreatedDateTo": "2018-12-17",
  "ShippingStatus": "S,R,D",
  "CreatedDateFrom": "2018-12-17"
}


```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "ShipmentIds":{  
      "OrderID":[  
         7499817,
         7499777,
         7499599,
         7498383,
         7497987
      ],
      "ShipmentID":[  
         5515529,
         5515515,
         5515339,
         5514925,
         5513479
      ]
   },
   "ErrorCode":0
}

```



Retrieves shipment ids and order ids of the merchant based on the input parameters.


### Resource Information
| | |
--------- | ----------- |
URI | `Order/GetShipmentHistory/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/GetShipmentHistory/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
CreatedDateFrom | date | Get shipments created in a specific duration. Specify the duration in `CreatedDateFrom` and `CreatedDateTo`
CreatedDateTo | date | Get shipments created in a specific duration. Specify the preferred duration in `CreatedDateFrom` and `CreatedDateTo`
ShippingStatus | enum | Get shipments of a specific shipment status(s). You can pass multiple values separated by comma. Values: `I` - RTO initiated, `O`	- RTO Received, `L`	- RTO Lost, `X`	- Others, `S` - Shipment created, `R`	- Dispatched, `T`	- In transit, `U`	- Out for delivery, `D` - Delivered, `C`	- RTO Closed, `F`	- Canceled, `E`	- RTO Refunded/Replacement closed, `W`	- Waiting for Collection  (in-store), `G`	- At Gate



## Update Shipment Courier Details

Updates courier details of a specific shipment.







> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateShipmentCourierDetails/9820eca5-d11f-4df1-9b20-983a45ea9631

```


> Sample POST Request


```json
MerchantId=9820eca5-d11f-4df1-9b20-983a45ea9631&InputFormat=application/json&InputData={
"Shipment": {
"ShipmentId": "4230982",
"MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
"UserId": "00000000-0000-0000-0000-000000000000",
"AWBNumber": "1234567890",
"IslabelReady": "false",
"ProviderId": "FedEx",
"externalInvoiceNumber": "HYC-123-1234"
}
}

```




> Sample Response

```json
{
    "messageCode": "1007",
    "Message": "Updated Successfully",
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/UpdateShipmentCourierDetails/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateShipmentCourierDetails/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
shipmentId | long | New shipment id that you want to update with
aWBNumber | string | New AWB number that you want to update with
islabelReady | enum | Specify `true` only if the merchant uses invoice or dispatch note and the the label is ready, else specify `false`. You will get an option to download the shipment label as PDF if available
userId | string | Logged in user id of the CP who is updating shipment details
providerId | int | Unique id of the shipment provider
externalInvoiceNumber | string | Specify the invoice number of the shipment
dispatchLabelContentType | | 

<aside class="notice"> Provide at least one of the above parameters that you want to update. </aside>    















## Calculate Tax (Normal Product)

Calculates tax amount for a product on the basis of source and destination location.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/CalculateTax/dc21b529-2057-402a-972a-e1ba0c8a08eb
```

> Sample POST Request

```json
MerchantID=dc21b529-2057-402a-972a-e1ba0c8a08eb&InputFormat=application/json&InputData={
   "SourceLocationCode":"108",
   "SourceLocationId":"",
   "SourceCityName":"New Delhi",
   "SourceCityCode":"26352",
   "SourceCountryName":"INDIA",
   "SourceCountryCode":"IN",
   "SourceStateName":"Delhi",
   "SourceStateCode":"DL",
   "ShipCityName":"New Delhi",
   "ShipCityCode":"26352",
   "ShipCountryName":"INDIA",
   "ShipCountryCode":"IN",
   "ShipStateName":"Delhi",
   "ShipStateCode":"DL",
   "Items":[
      {
         "SKU":"IN-DR-Pepsi",
         "VarientSKU":"0",
         "Quantity":1,
         "DeliveryMode":"H",
         "UnitPrice":57
      }
   ]
}
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductTaxDetails": {
        "TotalTaxAmount": 2.85,
        "Items": [
            {
                "Sku": "IN-DR-Pepsi",
                "VariantSku": null,
                "Quantity": "1",
                "UnitPrice": 57,
                "TotalTaxAmount": 2.85,
                "DeliveryMode": "H",
                "BundleItem": null,
                "TaxDetails": [
                    {
                        "TaxCategory": "C-GST",
                        "TaxAmount": 1.425,
                        "TaxCodeId": "35868",
                        "IsTaxOnShipping": false,
                        "IsPercentage": true
                    },
                    {
                        "TaxCategory": "S-GST",
                        "TaxAmount": 1.425,
                        "TaxCodeId": "35868",
                        "IsTaxOnShipping": false,
                        "IsPercentage": true
                    }
                ]
            }
        ]
    },
    "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `Order/CalculateTax/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/CalculateTax/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantID* | string | Unique GUID of the merchant
SourceLocationCode | int | Location code of the order fulfillment location (Generally used for Location specific merchants)
SourceLocationId | int | Unique location id of the product
SourceCityName | string | City name of the product location
SourceCityCode | string | Unique city code of the product location
SourceCountryName | string | Country name of the product location
SourceCountryCode | string | Alpha-2 code of the country of the product location . Example: IN (for India), AU (for Australia), and BR (for Brazil)
SourceStateName | string | State name of the product location
SourceStateCode | string | State code of the product location
ShipCityName | string | City name of the product delivery location
ShipCityCode | string | Unique city code of the product delivery location
ShipCountryName | string | Country name of the product delivery location
ShipCountryCode | string | Alpha-2 code of the country of the product delivery location. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipStateName | string | State name of the product delivery location
ShipStateCode | string | State code of the product delivery location
SKU* | string | SKU of the product for which you want to calculate tax (Required for variant product)
VarientSKU | string | SKU of the variant product for which you want to calculate tax
Quantity* | int | Number of items for which you want to calculate tax
DeliveryMode* | enum | Mode of delivery of the current item. Values: `H` for home delivery, `S` for store pick-up
UnitPrice* | float | Price of a single item

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Sample Response Parameters

Parameter | Type | Description
-------- | ----- | -----------
BundleItem | json obj | Applicable for bundle products
TaxCategory | string | Category of tax
TaxCodeId | int | Unique id of the tax code
IsTaxOnShipping | boolean | Whether tax is applied on shipping charges
IsPercentage | boolean | If true, tax rate is calculated on the percentage of the price and `false` for flat amount tax 





## Calculate Tax (Bundle Product)

Calculates tax (amount) for a product on the basis of source and destination location.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/CalculateTax/dc21b529-2057-402a-972a-e1ba0c8a08eb
```

> Sample POST Request

```json
MerchantID=dc21b529-2057-402a-972a-e1ba0c8a08eb&InputFormat=application/json&InputData={
   "SourceLocationCode":"108",
   "SourceLocationId":"",
   "SourceCityName":"New Delhi",
   "SourceCityCode":"26352",
   "SourceCountryName":"INDIA",
   "SourceCountryCode":"IN",
   "SourceStateName":"Delhi",
   "SourceStateCode":"DL",
   "ShipCityName":"New Delhi",
   "ShipCityCode":"26352",
   "ShipCountryName":"INDIA",
   "ShipCountryCode":"IN",
   "ShipStateName":"Delhi",
   "ShipStateCode":"DL",
   "Items":[
      {
         "SKU":"IN-PZ-VG-TANDOORIPANEER",
         "VarientSKU":"0",
         "Quantity":1,
         "DeliveryMode":"H",
         "UnitPrice":0,
         "BundleItem":[
            {
               "SKU":"IN-Crt-Tndripnr",
               "VarientSKU":"IN-Crt-Tndripnr-Pan-Mdm",
               "Quantity":1,
               "DeliveryMode":"H",
               "UnitPrice":"515"
            }
         ]
      }
   ]
}
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductTaxDetails": {
        "TotalTaxAmount": 25.75,
        "Items": [
            {
                "Sku": "IN-PZ-VG-TANDOORIPANEER",
                "VariantSku": null,
                "Quantity": "1",
                "UnitPrice": 0,
                "TotalTaxAmount": 0,
                "DeliveryMode": "H",
                "BundleItem": [
                    {
                        "Sku": "IN-Crt-Tndripnr",
                        "VariantSku": null,
                        "Quantity": "1",
                        "UnitPrice": 515,
                        "TotalTaxAmount": 25.75,
                        "DeliveryMode": "H",
                        "BundleItem": null,
                        "TaxDetails": [
                            {
                                "TaxCategory": "C-GST",
                                "TaxAmount": 12.875,
                                "TaxCodeId": "35868",
                                "IsTaxOnShipping": false,
                                "IsPercentage": true
                            },
                            {
                                "TaxCategory": "S-GST",
                                "TaxAmount": 12.875,
                                "TaxCodeId": "35868",
                                "IsTaxOnShipping": false,
                                "IsPercentage": true
                            }
                        ]
                    }
                ],
                "TaxDetails": [
                    {
                        "TaxCategory": "C-GST",
                        "TaxAmount": 0,
                        "TaxCodeId": "35868",
                        "IsTaxOnShipping": false,
                        "IsPercentage": true
                    },
                    {
                        "TaxCategory": "S-GST",
                        "TaxAmount": 0,
                        "TaxCodeId": "35868",
                        "IsTaxOnShipping": false,
                        "IsPercentage": true
                    }
                ]
            }
        ]
    },
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `Order/CalculateTax/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/CalculateTax/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantID* | string | Unique GUID of the merchant
SourceLocationCode | int | Location code of the product
SourceLocationId | int | Unique location id of the product
SourceCityName | string | City name of the product location
SourceCityCode | string | Unique city code of the product location
SourceCountryName | string | Country name of the product location
SourceCountryCode | string | Alpha-2 code of the country of the product location. Example: IN (for India), AU (for Australia), and BR (for Brazil)
SourceStateName | string | State name of the product location
SourceStateCode | string | State code of the product location
ShipCityName | string | City name of the product delivery location
ShipCityCode | string | Unique city code of the product delivery location
ShipCountryName | string | Country name of the product delivery location
ShipCountryCode | string | Alpha-2 code of the country of the product delivery location. Example: IN (for India), AU (for Australia), and BR (for Brazil)
ShipStateName | string | State name of the product delivery location
ShipStateCode | string | State code of the product delivery location
BundleItem | obj | Details of the bundle product
SKU* | string | SKU of the product for which you want to calculate tax (Required for variant product)
VarientSKU | string | SKU of the variant product for which you want to calculate tax
Quantity* | int | Number of the items for which you want to calculate tax
DeliveryMode* | enum | Mode of delivery of the current item. Values: `H` for home delivery, `S` for store pick-up
UnitPrice* | float | Price of a single item

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
-------- | ----- | -----------
TaxCategory | string | Category of tax
TaxCodeId | int | Unique id of the tax code
IsTaxOnShipping | boolean | Whether tax is applied on shipping charges
IsPercentage | boolean | If true, tax rate is calculated on the percentage of the price and false flat amount tax



## Balance Enquiry

Retrieves the wallet balance of a customer of a specific service. For example, balance of loyalty card, RazorPay and so on.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/BalanceEnquiry/81e77da2-723b-483d-8c0d-49f800c1xxxx
```

> Sample POST Request

```json
{
   "merchantId": "276f9496-0e5c-4465-b9ce-784514788ae9",
   "Provider": "RazorPayWallet",
   "GatewayId": "34",
   "UserId": "0d7ded82-fcf4-4931-9216-32a9cb85864e",
   "CardNumber": "",
   "CardPin": ""
}
```



> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "BalanceEnquiryResponseView":{  
      "Status":"1",
      "Balance":"200",
      "Code":"103",
      "Message":""
   }
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `Order/BalanceEnquiry/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/BalanceEnquiry/{merchantId}`






### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
provider* | string | Service provider for which you want to fetch the wallet balance. Example: RazorPayWallet
userId* | string | Unique GUID of the user for which you want to fetch the wallet balance



<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Update Order Custom Attribute Values

Lets you update values of custom attributes of an order.

> Sample Request

```html
developerapi/Order/UpdateOrderCustomAttributesValues/1b3420ce-002f-4f66-bbda-cd0828aa2af8 

```

> Sample POST Request

```json
MerchantId=1b3420ce-002f-4f66-bbda-cd0828aa2af8&InputFormat=application/json&InputData=
{
   "Orders":[{
   
      "OrderID":"8283199",
     "OrderItems":
     [
     
     {
     "OrderLineID":"51796945",
     "OrderItemCustomFieldValues":[{"test":"254.1"}]
}
]
}
   ]
}
```


> Sample Response

```json
{
    "isupdated": true,
    "messageCode": "1004",
    "Message": "All orderItem custom fields updated",
    "updateOrderCustomResponses": [
        {
            "OrderID": 8283199,
            "isupdated": false,
            "Message": null,
            "updateOrderItemCustomResponses": [
                {
                    "OrderLineID": 51796945,
                    "isupdated": true,
                    "Message": "All orderitem custom fields are updated for the above OrderLineID"
                }
            ]
        }
    ]
} 
```

### Resource Information
| | |
--------- | ----------- |
URI | `Order/UpdateOrderCustomAttributesValues/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/Order/UpdateOrderCustomAttributesValues/{merchantId}`



### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
OrderID | int | Order id for which you want to update custom field values.
OrderLineID | int | Order line item id for which you want to update custom field values.
OrderItemCustomFieldValues | obj | Pass the attribute names that you want to update with the new attribute values as key:value pairs.






## Update Order Reference

Updates external reference number of an order.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateOrderReference/81e77da2-723b-483d-8c0d-49f800c1xxxx

```


> Sample POST Request

```json
InputFormat=application/json&merchantId=81e77da2-723b-483d-8c0d-49f800c1xxxx&InputData={
	"OrderId":"4091391",
	"ReferenceNo":"11751201"
}

```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Order Reference =11751201-success has been applied successfully",
   "ErrorCode":0
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `Order/UpdateOrderReference/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/UpdateOrderReference/{merchantId}`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
orderID* | string | Order id for which you want to update reference number
referenceNumber* | string | Preferred reference number for the order

<aside class="notice">All parameters marked by * are mandatory. </aside>



## Create Return Request

Lets you create a new return request - A request made by a customer to return partial or complete items of an order that are delivered.







> Sample Request

```html
https://www.martjack.com/developerapi/DeveloperAPI/Order/CreateReturnRequest/fc93a3a8-f69b-444c-8b76-9848de9338d0

```


> Sample POST Request

```json

MerchantID=fc93a3a8-f69b-444c-8b76-9848de9338d0&InputFormat=application/json&InputData={
  "ReturnRequest": {
    "MerchantId": "e04386d8-7ca8-4fa3-b8b8-6c606844d257",
    "OrderId": "6102899",
    "Comments": "Return Order",
    "Source": "2",
    "Status": "I",
    "RequestType": "CU",
    "RefundStatus": "A",
    "PaymentMode": "",
    "BankName": "",
    "IFSCCOde": "",
    "AccountNumber": "",
    "AccountName": "",
    "BranchName": "",
    "FirstName": "Tom",
    "Address1": "A-501, symphony towers, new link road",
    "CountryCode": "IN",
    "CountryName": "India",
    "StateCode": "OR",
    "StateName": "Odisha",
    "CityCode": "60",
    "CityName": "Bhubaneshwar",
    "OtherCity": "",
    "PostCode": "751018",
    "Email": "tom.sawyer@capillarytech.com",
    "TelephoneCode": "1",
    "Telephone": "",
    "MobileCode": "91",
    "Mobile": "9005657048",
    "RefundAmount": "0",
    "RefundedAmount": "0",
    "ConfirmedRefundAmount": "0",
    "IsSelfShip": "",
    "ShipmentId": "4437188",
    "ReturnRequestShipmentDetails": {
      "CourierName": "Test",
      "AirWayBillNo": "123456"
    },
    "ReturnRequestDetails": {
      "Sku": "101432375",
      "Reason": "OT",
      "SuggestedReturnAction": "RF",
      "ReturnQty": "1",
      "IsReceived": "False",
      "ReceivedQty": "0",
      "CreatedDate": "11-21-2017",
      "RefundAmount": "0",
      "ConfirmedRefundAmount": "0"
    },
    {
      "Sku": "201001-1000",
      "Reason": "BAQ",
      "SuggestedReturnAction": "RF",
      "ReturnQty": "1",
      "IsReceived": "False",
      "ReceivedQty": "0",
      "CreatedDate": "11-21-2017",
      "RefundAmount": "0",
      "ConfirmedRefundAmount": "0"
    }
  }
}
```



> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ReturnRequestDetail": {
    "ReturnRequestId": 22931,
    "CustomMessage": "Return Request has been generated for the order : 5257435Return Request ID :22931"
  }
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/DeveloperAPI/Order/CreateReturnRequest/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/DeveloperAPI/Order/CreateReturnRequest/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
OrderId* | int | Unique order id for which you want to create return request
Comments | string | Any comment related to the return request
Source | enum | Source from which the return request is made. Values: 1, 2, 3, 4, 5. Example, 1 stands for storefront
Status | enum | Current status of the return request. Values: `I` for initiated, `C` for closed
RequestType | enum | Type of the return request. `R` for return to origin (RTO) `C` for customer return and `CU` for Return created due to item cancellation
RefundStatus | enum | Current status of the refund, `I` for refund initiated, `A` for refund approved
PaymentMode | string | Mode of refund. Values: NEFT Cheque/DD, Credit Card, eVoucher
BankName | string | Bank name to which the refund will be made(for refund through NEFT payment)
IFSCCOde | string | IFSC code of the specified bank (for refund through NEFT payment)
AccountNumber | string | Account number to which the return amount needs to be refunded (for refund through NEFT payment)
AccountName | string | Name of the customer account as per the specified bank (for refund through NEFT payment)
BranchName | string | Branch name of the specified account (for refund through NEFT payment)
FirstName | string | First name of the customer associated to the order
Address1 | string | Complete shipping address of the customer
CountryCode | string | Alpha-2 code of the country of the shipment address. Example: IN (for India), AU (for Australia), and BR (for Brazil)
CountryName | string | Name of the country of the shipment address
StateCode | string | State code of the shipment location
StateName | string | Name of the state as per the shipping address
CityCode | string | Unique city code of the product shipment location
CityName | string | City name of the product shipment location
PostCode | string | ZIP Code of the shipment location
Email | string | Registered email id of the customer
TelephoneCode | string | Land line number area code
Telephone  | string | Land line number of the customer excluding the country code
MobileCode | string | Country code for the mobile number
Mobile | string | Mobile number of the customer excluding country code
RefundAmount | float | Total amount to be refunded to the customer (once the item return is initiated)
RefundedAmount | float | Actual amount refunded to the customer
ConfirmedRefundAmount | float | Refund amount confirmed by the staff (at the warehouse)
IsSelfShip | enum | Specify `Yes` if the user will ship the return package to the merchant, `No` if the merchant has to pickup the package from the user
ShipmentId | int | Unique id of the return shipment
ReturnRequestShipmentDetails | obj | Details of each return item
CourierName | string | Name of the courier service chosen for return shipment
AirWayBillNo | string | Airway bill number of the return shipment
ReturnRequestDetails | obj | Details of return shipment
Sku | string | Unique SKU of each return item
Reason | string | Return reason code. Values:<br> WID - Wrong item delivered <br> BAQ - Bad Quality <br> DLP - Did not like the product <br> DPR - Defective/Damage product received <br> RD - Received Damaged DP - Defective Product<br> II - Incorrect Item received<br> UW	Unwanted Gift<br> US - Unsuitable<br> UP - Unlike Photo, TS - Too Small<br> OT - Other<br> FD - Fraud<br> IE - Incorrect Size<br> PDR - Product is damaged<br> WPD - Product is not as per website description<br> CR - Customer Remorse<br> PWF - Product is not properly functioning
SuggestedReturnAction | string | Reason for item return
ReturnQty* | int | Return quantity of the current item initiated by the customer
IsReceived* | boolean | Whether the current item is received at the warehouse or not
ReceivedQty** | int | Quantity of the current item received at the warehouse
CreatedDate* | date | Date when the return request is created in `MM-DD-YYYY` format


<aside class="notice"> All parameters marked by * are mandatory. </aside>







## Search Return Requests

Returns the order ids that are returned based on the input parameters.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetReturnRequestHistory/81e77da2-723b-483d-8c0d-49f800c1xxxx

```

> Sample POST Request


```json
MerchantId=fc93a3a8-f69b-444c-8b76-9848de9338d0&InputFormat=application/json&InputData={
	"FromDate":"2018-12-06",
	"ToDate":"2018-12-06"
}

```


> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "ReturnRequestIds":{  
      "ReturnRequest":[  
         236285,
         236279,
         236267,
         236265,
         236263,
         236261,
         236259,
         236257,
         236251,
         236233,
         236189,
         236185,
         236147,
         236141,
         236131,
         236095,
         236089,
         235855,
         235853,
         235849,
         235847,
         235843
      ]
   },
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `Order/GetReturnRequestHistory/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/GetReturnRequestHistory/{merchantId}`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
fromDate | date | Duration for which you want to fetch return orders (fromDate - toDate)
toDate | date | Duration for which you want to fetch return orders (fromDate - toDate)
refundStatus | string | Status of the refund. Value: `I` for refund initiated, `C` for refund complete
status | string | Status of the return. Value: `RC` for Refund completed, `I` for initiated, `R` received, `P` for picked up, `S` pending pickup, `C` closed
orderId | int | Unique id of the order
paymentMode | string | Fetch return orders by mode of payment(refund). Values: NEFT Cheque/DD, Credit Card, eVoucher

<aside class="notice"> MerchantId and any one among the other parameters are mandatory.</aside>



## Get Return Request Details (by RequestId)

Retrieves the details of a specific return request based on the return request id passed.


> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetReturnRequest/f48fdd16-92db-4188-854d-1ecd9b62d066/211003

```

> Sample Response


```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ReturnRequest": {
    "ReturnRequestId": 211003,
    "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
    "ShipmentId": 5392397,
    "OrderId": 7238823,
    "InvoiceNumber": "invoice_hyc-00000460",
    "DateInitiated": "08-Oct-2018 07:45:12 AM",
    "DateReceived": "08-Oct-2018 07:47:27 AM",
    "BillOfSupplyCreditNoteNumber": "",
    "TaxableCreditNoteNumber": "HYCCNTV_009741",
    "Source": "2",
    "RequestStatus": "C",
    "RequestType": "C",
    "RefundStatus": "C",
    "RefundedAmount": 113.66,
    "ConfirmedRefundAmount": 113.66,
    "IncludeShippingCost": "False",
    "IsSelfShip": "False",
    "ReturnRequestDetail": [
      {
        "ReturnRequestDetailId": 330945,
        "ReturnRequestId": 211003,
        "OrderItemId": 25601069,
        "SuggestedReturnAction": "RF",
        "Reason": "BAQ",
        "ReturnQty": "1",
        "IsReceived": "True",
        "ReceivedQty": "1",
        "MRP": 114,
        "ProductPrice": 113.66,
        "PromotionDiscount": 0,
        "UOM": "Pieces",
        "AverageWeight": 0,
        "IsTaxable": "True",
        "TaxDetails": [
          {
            "TaxCategory": "SGST",
            "TaxRate": "9",
            "TaxAmount": 8.66,
            "IsTaxRatePercentage": true,
            "TaxCode": "SGI18",
            "TaxCategoryID": "3580"
          },
          {
            "TaxCategory": "CGST",
            "TaxRate": "9",
            "TaxAmount": 8.66,
            "IsTaxRatePercentage": true,
            "TaxCode": "CGI18",
            "TaxCategoryID": "3578"
          }
        ],
        "RefundAmount": 113.66,
        "ConfirmedRefundAmount": 113.66,
        "SKU": "100011145",
        "VariantSKU": null,
        "ProductID": 11995626,
        "VariantProductID": 0,
        "ProductTitle": "Nestle Milkmaid - 400g Tin",
        "SubStatus": "'",
        "SubStatusComments": "'"
      }
    ],
    "RequestedPaymentMode": {
      "PaymentMode": "GV",
      "BankName": "",
      "BranchName": "",
      "IFSCCOde": "",
      "AccountNumber": "",
      "AccountName": "",
      "CityName": ""
    },
    "ReturnRequestPayments": [
      {
        "ReturnRequestId": 211003,
        "PaymentDate": "08-Oct-2018 12:00:00 AM",
        "PaymentMode": "GV",
        "ReferenceNumber": "ref444333",
        "Amount": "113.66",
        "Remarks": "test333",
        "BankName": null,
        "IFSCCOde": null,
        "AccountNumber": "",
        "AccountName": "",
        "BranchName": null
      }
    ],
    "PickupDetails": {
      "Address1": "kandavali malad west",
      "Address2": "",
      "CountryCode": "IN",
      "CountryName": "India",
      "StateCode": "MH",
      "StateName": "Maharashtra",
      "CityCode": "554",
      "CityName": "",
      "PostCode": "400064",
      "Email": "",
      "FirstName": "Vijay ",
      "LastName": "",
      "Mobile": "91-9885296960"
    },
    "SubStatus": "",
    "SubStatusComments": ""
  },
  "ErrorCode": 0
}
```




### Resource Information
| | |
--------- | ----------- |
URI | `Order/GetReturnRequest/{merchantId}/{returnRequestId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details



### Request URL

`{host}/developerapi/Order/GetReturnRequest/{merchantId}/{returnRequestId}`

### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
returnRequestId* | int | Unique id of the return request that you want to fetch

<aside class="notice">All parameters marked by star are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
BillOfSupplyCreditNoteNumber | string | Credit note is generated for a customer returned item received at the merchant warehouse.  Non-taxable items will have "Bill of supply Credit note number" 
TaxableCreditNoteNumber | string | Credit note is generated for any customer returned item received to merchant warehouse. Taxable Items will have this "Taxable credit note number"
Source | int | values from 1-5. Source from which the return request is made. Example, `1` stands for storefront
RequestStatus | enum | Current status of the return request. Values: `I` for initiated, `C` for closed
RequestType | enum | Type of the return request. `R` for return to origin (RTO) `C` for customer return and `CU` for Return created due to item cancellation
RefundStatus | enum | Current status of the refund. Values: `I` for initiated, `C` for closed
IncludeShippingCost | enum | The value will be `Yes` if the shipping cost is included in the return item, `No` if shipping cost is not included 
IsSelfShip | enum | The value will be ‘Yes` if the user will ship the return package to the merchant, `No`, if the merchant has to pickup the package from the user
SubStatus | string | The sub-status code of the return request


## Get Return Request (by Order ID)

Returns all return request details of a specific order.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetReturnRequestByOrderID/9403244b-2231-4550-ae96-2dbb5d0c1694/6758025

```


> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ReturnRequests": [
    {
      "ReturnRequestId": 201782,
      "MerchantId": "9403244b-2231-4550-ae96-2dbb5d0c1694",
      "ShipmentId": 0,
      "OrderId": 7124734,
      "InvoiceNumber": "",
      "DateInitiated": "10-Sep-2018 12:34:26 PM",
      "DateReceived": "10-Sep-2018 12:34:26 PM",
      "BillOfSupplyCreditNoteNumber": "",
      "TaxableCreditNoteNumber": "",
      "Source": "2",
      "RequestStatus": "R",
      "RequestType": "CU",
      "RefundStatus": "I",
      "RefundedAmount": 0,
      "ConfirmedRefundAmount": 1019,
      "IncludeShippingCost": "False",
      "IsSelfShip": "False",
      "ReturnRequestDetail": [
        {
          "ReturnRequestDetailId": 317918,
          "ReturnRequestId": 201782,
          "OrderItemId": 25364654,
          "SuggestedReturnAction": "RF",
          "Reason": "NDA",
          "ReturnQty": "1",
          "IsReceived": "True",
          "ReceivedQty": "1",
          "MRP": 1695.000,
          "ProductPrice": 1019,
          "PromotionDiscount": 0,
          "UOM": "Pieces",
          "AverageWeight": 0,
          "IsTaxable": "False",
          "TaxDetails": [
            
          ],
          "RefundAmount": 1019,
          "ConfirmedRefundAmount": 1019,
          "SKU": "103694029",
          "VariantSKU": null,
          "ProductID": 13133426,
          "VariantProductID": 0,
          "ProductTitle": "USHA STEAM IRON TEFLON3713",
          "SubStatus": "'",
          "SubStatusComments": "'"
        }
      ],
      "RequestedPaymentMode": {
        "PaymentMode": "",
        "BankName": "",
        "BranchName": "",
        "IFSCCOde": "",
        "AccountNumber": "",
        "AccountName": "",
        "CityName": ""
      },
      "ReturnRequestPayments": [
        {
          "ReturnRequestId": 201782,
          "PaymentDate": "19-Sep-2018 10:51:44 AM",
          "PaymentMode": "PAYTM",
          "ReferenceNumber": "20180919111212801300168654405302427",
          "Amount": "1,019",
          "Remarks": "Refund request was raised for this transaction. But it is pending state.",
          "BankName": null,
          "IFSCCOde": null,
          "AccountNumber": "",
          "AccountName": "",
          "BranchName": null
        }
      ],
      "PickupDetails": {
        "Address1": "",
        "Address2": "",
        "CountryCode": "",
        "CountryName": "",
        "StateCode": "",
        "StateName": "",
        "CityCode": "",
        "CityName": "",
        "PostCode": "",
        "Email": "",
        "FirstName": "",
        "LastName": "",
        "Mobile": ""
      },
      "SubStatus": "",
      "SubStatusComments": ""
    }
  ],
  "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/GetReturnRequestByOrderID/{MerchantId}/{OrderId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/GetReturnRequestByOrderID/{MerchantId}/{OrderId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
OrderId* | int | Unique order id for which you want to fetch return request details





### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
BillOfSupplyCreditNoteNumber | string | Credit note is generated for a customer returned item that is received at the merchant warehouse.  Non-taxable items will have "Bill of supply Credit note number" 
TaxableCreditNoteNumber | string | Credit note is generated for a customer returned item that is received at the merchant warehouse. Taxable Items will have  "Taxable credit note number"
Source | int | Source from which the return request is made. values from 1-5. Example, `1` stands for storefront
RequestStatus | enum | Current status of the return request. Values: `I` for initiated, `C` for closed
RequestType | enum | Type of the return request. Values: `R` for return to origin (RTO) `C` for customer return and `CU` for Return created due to item cancellation
RefundStatus | enum | Current status of the refund. Values: `I` for initiated, `C` for closed
IncludeShippingCost | enum | `Yes` if the shipping cost is included in the return item, `No` if shipping cost is not included 
IsSelfShip | enum | ‘Yes` if the user will ship the return package to the merchant, `No` if the merchant has to pickup the package from the user
SubStatus | string | The sub-status code of the return request





## Edit Order Lineitem Price

Lets you modify the price of an existing order item.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/EditOrderLineItem/81e77da2-723b-483d-8c0d-49f800c1exxx

```


> Sample POST Request

```json

MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData=[  
   {  
      "OrderID":7504015,
      "OrderItemID":"26147611",
      "Price":"1250",
      "MRP":"2600",
      "ConsiderCurrentPriceandMRP":"False",
      "ReasonForPriceOverride":"check price override"
   }
]


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
URI | `/Order/EditOrderLineItem/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/EditOrderLineItem/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
OrderID* | int | Unique id of the order for which you want to update an item price
OrderItemID | int | Unique id of the order item that you want to update
Price | float | New price of the order item
MRP | float | New maximum retail price of the order item
ConsiderCurrentPriceandMRP | boolean | Specify `False` to use the new prices specified, `True` to consider the prices as per the CP
ReasonForPriceOverride | string | Specify the reason for updating the order item price

<aside class="notice">All parameters marked by * and other parameters that are required to update order item price are mandatory. </aside> 



## Get Document
Generates either a dispatch or invoice document.

> Sample Request

```html
https://www.martjack.com/developerapi/Order/GetDocument/81e77da2-723b-483d-8c0d-49f800c1exxx/7752817/invoice/invoice_hyc-00000571

```




> Response: You will see an option to download the document.





### Resource Information
| | |
--------- | ----------- |
URI | `/Order/GetDocument/{MerchantId}/{OrderId}/{objectType}/{objectValue}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/GetDocument/{MerchantId}/{OrderId}/{objectType}/{objectValue}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
orderId* | int | Order id for which you want to generate the required document
objectType* | enum | Specify `Invoice` to generate invoice of the order, `Shipment` to get the dispatch document of the order
objectValue* | string | Specify invoice id or shipment id that you want to fetch based on the `objectType` passed

<aside class="notice">All parameters marked by * are mandatory.</aside>



## Add Manifest

Adds shipping manifest details for multiple shipments.



> Sample Request

```html
https://www.martjack.com/developerapi/Order/AddManifest/{merchantId}

```

> Sample POST Request

```json
MerchantId=89d3f1a-8c9a-41bd-9b3a-e6c2f031527d&InputFormat=application/json&InputData={
   "MerchantId":"389d3f1a-8c9a-41bd-9b3a-e6c2f031527d",
   "ShippingProvider":"eKart",
   "UserId":"00000000-0000-0000-0000-000000000000",
   "LocationId":"18584",
   "ChannelId":"32",
   "items":[
      {
         "shipmentId":"6123456"
      },
      {
         "shipmentId":"2123456"
      },
      {
         "shipmentId":"9123456"
      }
   ],
   "TripId":"TRIP-7935"
}


```


> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ManifestIds": {
    "ManifestId": 149069,
    "ManifestMessages": [
      {
        "ShipmentID": 6123456,
        "Message": "Success"
      },
      {
        "ShipmentID": 2123456,
        "Message": "Success"
      },
      {
        "ShipmentID": 9123456,
        "Message": "No record found"
      }
    ],
    "ErrorMessages": null
  },
  "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/AddManifest/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/AddManifest/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
ShippingProvider* | string | Name of the shipping service
UserId | string | Unique GUID of the current user that updates the manifest details
LocationId | int | Unique location id of the shipment
LocationCode | string | Unique location code of the shipment
ChannelId* | int | Channel id of the marketplace
shipmentId* | long | Unique id of each shipment
TripId | string | Unique id of the shipment trip. A trip is a shipment containing multiple orders assigned to a delivery associate which need to be delivered to end customers. Each trip will have a unique trip id



<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Update Manifest Status

Lets you update the status of a manifest.




> Sample Request

```html
https://www.martjack.com/developerapi/Order/UpdateManifest/9820eca5-d11f-4df1-9b20-983a45ea9631

```

> Sample POST Request

```json
InputFormat=application/json&InputData={
   "Status":"Closed",
   "ManifestId":"149057"
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



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/UpdateManifest/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/UpdateManifest/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
ManifestId* | int | Unique id of the manifest that you want to update
status | enum | New status of the manifest. Values: `Created`, `Closed`
tripId | string | Unique id of the shipment trip. A trip is a shipment containing multiple orders assigned to a delivery associate which need to be delivered to end customers. Each trip will have a unique trip id



<aside class="notice"> All parameters marked by * are mandatory. </aside>





## Get Manifest Details

Retrieves the details of a specific shipping manifest.

> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Order/GetManifest/81e77da2-723b-483d-8c0d-49f800c1exxx/138931
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "Manifests": [
    {
      "ManifestId": 138931,
      "ManifestNo": "00005604",
      "NoOfItems": 1,
      "LocationId": 14908,
      "LocName": "Holisol Delhi",
      "ShippingProvider": "FedEx",
      "CreatedDate": "/Date(1549889694000+0530)/"
    }
  ],
  "ErrorCode": 0
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/Order/GetManifest/{MerchantId}/{ManifestId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/GetManifest/{MerchantId}/{ManifestId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
ManifestId* | int | Unique id of the shipping manifest for which you want to fetch details









## Get Advance Tax Voucher

Retrieves Advance Tax Voucher (ATV) details of a specific order.






> Sample Request

```html
https://www.martjack.com/developerapi/Order/TaxVoucher/9820eca5-d11f-4df1-9b20-983a45ea9631/7704209

```




> Sample Response

```json

{
  "messageCode": "1004",
  "Message": "Successful",
  "TaxVouchers": [
    {
      "TaxVoucherNumber": "atv_biba/001052",
      "OrderId": 7704209,
      "BillFirstname": "Tom",
      "LocationCode": null,
      "BillLastname": null,
      "VoucherItems": [
        {
          "OrderLineId": 26578947,
          "sku": "AFROFUSION10302",
          "VariantSku": "AFROFUSION10302-8903098887787",
          "ProductPrice": 599,
          "HSNCode": "62114210",
          "Qty": 1,
          "MRP": 999,
          "TaxDetails": [
            {
              "TaxCategory": "CGST",
              "TaxRate": "2.5",
              "TaxAmount": 15.72,
              "IsTaxRatePercentage": true,
              "TaxCode": "GST_TEST"
            },
            {
              "TaxCategory": "SGST",
              "TaxRate": "2.5",
              "TaxAmount": 15.72,
              "IsTaxRatePercentage": true,
              "TaxCode": "GST_TEST"
            }
          ],
          "UOM": "Pieces",
          "BuyingWeight": 0
        }
      ],
      "BillCountry": "India",
      "BillingState": "Telangana",
      "GSTBillingStateUTCode": "36",
      "BillCity": "Hyderabad",
      "BillEmail": "tom.sawyer@caapillarytech.com",
      "BillZIP": "500033",
      "BillPhone": "",
      "BillMobile": "9422996500",
      "BillAddress1": "sample address",
      "ShipFirstname": "Tom",
      "ShipLastname": "Sawyer",
      "ShipCountry": "India",
      "ShipState": "Telangana",
      "GSTShipStateUTCode": "36",
      "ShipCity": "Hyderabad",
      "ShipEmail": "tom.sawyer@caapillarytech.com",
      "ShipZip": "500033",
      "ShipPhone": "",
      "ShipMobile": "9422000000",
      "ShipAddress1": "sample address1",
      "ShipOtherCity": ""
    }
  ],
  "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/TaxVoucher/{merchantId}/{orderId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/TaxVoucher/{merchantId}/{orderId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
orderId* | int | Unique id of the order for which you want to fetch advanced tax details

<aside class="notice"> All parameters marked by * are mandatory. </aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
-------- | ----- | -----------
TaxVoucherNumber | string | Advance tax voucher number (as generated through the Document Series in Advanced Settings)
LocationCode | int | Location code of the order fulfillment location (Generally used for Location specific merchants)
OrderLineId | int | Unique id of the order line item
HSNCode | string | The HSN code is the 'Harmonized System Nomenclature code number' that is required for GST. The 'HSN code' is shown at item level
TaxCategory | string | Category of the current tax. For example: STT, VAT, GST, and CST
IsTaxRatePercentage | enum | True for percentage based tax rates and false for flat rate tax
TaxCode | string | Unique tax code that you want to associate to the product.  Tax code should be configured in the CP first to associate to products.
UOM | string | Unit of measurement of the current item
BuyingWeight | float | Weight of the current item if `UOM` is kgs or gms




## Lead Search


Searches leads based on the input parameters.





> Sample Request

```html
https://www.martjack.com/developerapi/Order/LeadSearch/fc93a3a8-f69b-444c-8b76-9848de9338d0

```

> Sample POST Request


```json
MerchantId=fc93a3a8-f69b-444c-8b76-9848de9338d0&InputFormat=application/json&InputData={ 
    "fromDate": "03-15-2019", 
    "toDate": "03-28-2019", 
    "status": "P", 
    "leadId": "12345",
    "userName": "jane.doe@gmail.com", 
    "mobileNumber": "9999991234", 
    "sKU": "123456", 
    "firstName": "jane",     
    "lastName": "done", 
    "locationIds": "371,372", 
    "callForActionId": ""     
}

```



> Sample Response

```json

{
  "messageCode": "1004",
  "Message": "Successful",
  "Leads": [
    {
      "LeadId": 771559,
      "UserId": "00000000-0000-0000-0000-000000000000",
      "TotalAmount": 0.0,
      "Status": "P",
      "LeadDate": "2019-03-27T12:21:45",
      "FirstName": "Tom Sawyer",
      "Email": "tom.sawyer@example.com",
      "MobileNumber": "",
      "Address": null,
      "City": "",
      "State": null,
      "Country": null,
      "ZipCode": null,
      "TAXTotal": 0.0,
      "CustomDescription": "First Name:Tom,Last Name:Sawyer,Email Address:skanda676@gmail.com,Country Code:,Mobile Number:551133160,Date of Birth:08/29/1989,Nationality:India,Anniversary:02/10/2019,Gender:Male,Emirate:Dubai,Occupation:Private_Corporate,Status:Married,Children:No,Address:3904| Capillary technologies| One Lake Plaza\r\nJLT Cluster T\r\nJumeirah Lake towers,Please select your offer preference/s:Select All,Skin Care,Hair Care,Personal Care,Baby and Mother,Nutrition,Medical Equipments,Rehab,First Aid and SupportPO Box:,",
      "CheckOutId": 7134,
      "UpLoadedFiles": "",
      "LeadLines": [
        {
          "LeadLineId": 754073,
          "LeadId": 771559,
          "ProductId": 0,
          "VariantProductId": 0,
          "IsParentProduct": false,
          "Description": "",
          "Quantity": 0.0,
          "ProductPrice": 0.0,
          "_locationid": 0
        }
      ]
    },
    {
      "LeadId": 771421,
      "UserId": "00000000-0000-0000-0000-000000000000",
      "TotalAmount": 0.0,
      "Status": "P",
      "LeadDate": "2019-03-27T08:40:47",
      "FirstName": "James Diyas",
      "Email": "james.diyas@example.com",
      "MobileNumber": "",
      "Address": null,
      "City": "",
      "State": null,
      "Country": null,
      "ZipCode": null,
      "TAXTotal": 0.0,
      "CustomDescription": "First Name:James,Last Name:Diyas,Email Address:noelinedias@gmail.com,Country Code:,Mobile Number:504929486,Date of Birth:26/12/1960,Nationality:Sri Lanka,Anniversary:28/05/1988,Gender:Female,Emirate:Abu_Dhabi,Occupation:Private_Corporate,Status:Married,Children:Yes,Address:Hamdan street Abu dhabi,Please select your offer preference/s:NutritionPO Box:3658,",
      "CheckOutId": 7134,
      "UpLoadedFiles": "",
      "LeadLines": [
        {
          "LeadLineId": 753935,
          "LeadId": 771421,
          "ProductId": 0,
          "VariantProductId": 0,
          "IsParentProduct": false,
          "Description": "",
          "Quantity": 0.0,
          "ProductPrice": 0.0,
          "_locationid": 0
        }
      ]
    }
  ]
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/Order/LeadSearch/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Order/LeadSearch/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
fromDate | date | Search leads created in a specific duration. Specify the date-range in `fromDate` and `toDate` (in `MM-DD-YYYY` format)
toDate | date | Search leads created in a specific duration. Specify the date-range in `fromDate` and `toDate` (in `MM-DD-YYYY` format)
status | enum | Search by current lead status. Values: `P` - Uninitiated, `I` - Initiated, `R` - Rejected, `C` - Converted 
leadId | int | Specify unique id of the lead that you want to fetch
userName | string | Search leads by a customer's username (email id)
mobileNumber | string | Search leads by a customer's mobile number
SKU | string | Specify the SKU of the product for which you want to see generated leads
firstName | string | Search leads by customer's first name
lastName | string | Search leads by customer's last name
locationIds | string | Fetch leads of your preferred locations. You can pass multiple location ids separating each by a comma (,)
callForActionId | string | Unique id associated to the call-for-action for leads. For example, Call for actions could be Get-a-Call, Reserve Product & Visit Store, Proforma Invoice, and Get-a-Call


<aside class="notice"> All parameters marked by * are mandatory. </aside>







