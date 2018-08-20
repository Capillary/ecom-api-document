# Order
An order is a completed purchase request of a customer. This resource consists of APIs related to creating and managing orders of a marketplace, PWA or storefront. 


## Create Bulk Order
This API lets you create batch orders. You can also capture vertical specific product attributes such as variants, bundle, and combo.

> Sample Request

```html

http://www.martjack.com/developerapi/Order/BulkOrderCreation

```

> Sample POST Request

```json

{  
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
                     },
                     "bundleitems":{  
                        "item":[  
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
                              "catalogcode":"B",
                              "bundleparentproduct":"IN-PZ-VG-VEGGIEITALINO",
                              "isdefault":"NO",
                              "deliverymode":"S",
                              "portion":"",
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
                              "sku":"IN-Crt-Veggie Italiano",
                              "variantsku":"IN-Crt-Veggie Italiano-Pan-Mdm",
                              "qty":"1",
                              "unitprice":"545",
                              "shippingamount":"0",
                              "tax":"0",
                              "shippingdiscount":"0",
                              "linediscount":"0",
                              "catalogcode":"B",
                              "bundleparentproduct":"IN-PZ-VG-VEGGIEITALINO",
                              "isdefault":"YES",
                              "deliverymode":"S",
                              "portion":"",
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
                     "transaciondate":"07\/26\/2018",
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

Creates a new order with complete details.



### Resource Information
Information | Value
----------- | -----
URI | `Order/BulkOrderCreation`
Authentication | Yes
HTTP Method | POST
Batch Support | Yes


### Request URL

`https://{host}/developerapi/Order/BulkOrderCreation`

### Request Attributes
Parameter | Description
--------- | -----------
orderrefno* | Reference number of the order
orderdate* | Ordered date in `dd/mm/yy` format
deliveredon | Specify the estimated delivery of the item if applicable for the merchant in `dd/mm/yy` format
customertype | Type of the user as per the Martjack system. Supported Values: Guest User (for all marketplace), Registered User (If registered on Martjack platform)
userid | Registered identifier of the customer. Required when `customertype="Registered User"`
ordervalue | Net order amount
orderstatus | Supported values: Pending, Authorized
orderconfirmationmail | Supported values: Yes, No. If set to `Yes`, an order confirmation email is sent to the customer
paymentlinkstatus | Status of the payment. Values: Pending (Bank transfer, Cheque,), Authorized (COD, Prepaid)
calculateshippingtax | Supported values: Yes, No. Set to `No` if the order value includes all the tax and service charges. Else, you need to specify other charges separately.
shipfirstname, shiplastname, shipaddress1 ... | Specify the customer's shipping address related information in these fields
billfirstname, billlastname, billaddress1 ... | Specify the customer's billing address related information in these fields
giftmsg | In case of gift orders, specify the customer's personalized message that needs to sent to the recipient
locationcode | Reference code of the  order fulfillment location
isselfship | Supported Value: True, False. If the order shipment is handled by marketplace such as Amazon or Flipkart specify False. If the shipment is handled by the merchant himself, set the value to True
channelrefcode | Channel from which the order has come from (specific to Sellerworx). A channel is an instance of marketplace. A seller can have multiple channels.
channelorderid | Order id as maintained by that specific channel  (specific to Sellerworx)
sellerwroxorderid | Order id generated at Sellerworx. Maps Channel order id to Sellerworx order id
items* | Specify the details of each line-item in `item` attribute
Payments* | Specify the payment details and `orderrefno` of the order in `payment`. The orderrefno value at payment level should be same as that of the order level





## Place Order (Single)
> Sample Request

```html
http://{{url}}/developerapi/Order/PlaceOrder/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{  
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
Parameter | Description
--------- | -----------
URI | `/Order/PlaceOrder/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL
`http://{host}/developerapi/Order/PlaceOrder/{{MerchantId}}`

### Additional Header
Header | Description
------ | -----------
Access token* | The access token generated for the  current user session

### Request Attributes
Attribute | Description
--------- | -----------
merchantId* | The unique id (GUID) of the merchant in which you want to place order
PaymentOption* | The name of the payment gateway. For example, RazorPay, EBS, OnlineBankTransfer, COD, CreditCard, ChequeDD, Wallet, and eGiftVoucher
paymentType* | The payment type used for the order - OBT (Online bank transfer),  TPG (Third party gateway), Credit, GV (Gift voucher) and so on
gatewayId* | Gateway id through which the payment is made
channelType* | 
payBackPoints |  
payBackCardNo |  
bankCode | 
capillaryMobileNo | 
skipDeliveryAreaValidation | Specify `true` to validate delivery location before order creation, `false` to ignore validating





## Fetch Order History

> Sample Request
```html
http://{www.martjack.com/developerapi/Order/History/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{  
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
               "PaymentDate":"1\/1\/1900",
               "PaymentDetailsId":539740,
               "PaymentOption":"OnlineBankTransfer",
               "PaymentResponse":"",
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

Retrieves the history of orders of a merchant or customer based on the input parameters.

### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/History/{{MerchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No




### Request URL

`https://{host url}/developerapi/Order/History/{{MerchantId}}`

### Request Parameters
Parameter | Description
--------- | -----------
UserId | The unique user identifier of the customer whose details need to be retrieved
FromDate | Specify the duration for which you want to fetch the order history (mm-dd-yyyy hh:mm:ss format) in FromDate and ToDate
ToDate |  Specify the duration for which you want to fetch the order history (mm-dd-yyyy hh:mm:ss format) in FromDate and ToDate
Status | Filter the search results by order status(P=Pending, F=Cancel, A=Approved)
ShipDateFrom | Filter the search results by shipped date range - from (ShipDateFrom) and to (ShipDateTo) in  (mm-dd-yyyy hh:mm:ss format). If ShipDateFrom is specified, then you also need to specify ShipDateTo
ShipDateTo | Filter the search results by shipped date range - from (ShipDateFrom) and to (ShipDateTo) in  (mm-dd-yyyy hh:mm:ss format). If ShipDateFrom is specified, then you also need to specify ShipDateTo
Sku | Filter the search results by SKU id based on the ids matching the specified value. For example, if you specify 100,  you will get the list of orders with item SKU ids starting with 100. You can also fetch a specific ordered item by passing the exact SKU id.
OrderId | Filter the search results by order id or order number. For example, if you specify 5550,  you will get the list of all orders with order ids starting with 5500. You can also fetch a specific order by passing the exact order id.
FromOrder | Order Id / Number (can use to get the latest orders )
store | Store type it can be a keyword are merchantid(It can be optional)
WithRewards | Retrieve the list of orders with loyalty rewards. Send  ‘True’ if you required reward/loyalty details. By default value will be ‘False’
OperatorId | ---
LocationId | Order fulfillment location






## Authorize Order

> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Order/Authorize
```

> Sample POST Request

```json
{  
   "AuthorizeOrder":{  
      "merchantId":"edc2b51f-b826-414d-9e52-e8331ddbxxxx",
      "OrderId":"6390614",
      "Date":"02-15-2018",
      "Comment":"sample comment",
      "PaymentType":"Credit Card-Visa",
      "BankInstrumentNumber":"",
      "BankName":"",
      "PGResponse":"123456",
      "PGReferenceID":"0255"
   }
}
```

> Sample Response

```json
{
   "messageCode": "1001",
   "message": "Order Authorized successfully."
}
```

Authorizes a pending order, i.e., updates an order status from `Pending` to `Authorized`.

### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/Authorize`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No




### Request URL

`https://{host}/developerapi/Order/Authorize`

### Request Parameters
Parameter | Description
--------- | -----------
Merchant Id* | The unique id (GUID) of the merchant in which the order is made
Date* | Date of authorization
Order Id* | The order id that you need to authorize
Comment | 
BankInstrumentNumber | The unique reference number generated at the banks or financial systems for payments other than CODs(Cards, credit transfers, direct debits, Cheques/DDs)
BankName | Specify the bank name through which the transaction is made
GatewayOption* | (GatewayOption=IVR/EBS/HDFC)
PGResponse | Response payload received from the payment gateway for the specific order



## Get Invoice Details

> Sample Request

```html
https://www.martjack.com/developerapi/Order/Invoice/6c57599f-2c43-4c82-806a-e07c3410fxxx/invoice_hyc-2017-2018-00000127
```

> Sample POST Request

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Orders":[  
      {  
         "OrderId":5648247,
         "Status":"S",
         "sku":null,
         "shipdate":null,
         "MerchantId":"6c57599f-2c43-4c82-806a-e07c3410f5d3",
         "UserId":"f72da7b6-9566-4c99-b0e6-aa882e7acc43",
         "TotalAmount":451,
         "AmountPayable":451,
         "OrderDate":"15/02/2018",
         "BillFirstname":"Tom Sawyer",
         "BillLastname":"N",
         "BillCountry":"India",
         "BillingState":"Karnataka",
         "BillCity":"32",
         "BillEmail":"tom.sawyer@example.com",
         "BillZIP":"560068",
         "BillPhone":"NA",
         "BillMobile":"9098000000",
         "BillAddress1":"#304-39,Brigade Enclave,Hosakerehalli,Banglore",
         "ShipFirstname":"Tom Sawyer",
         "ShipLastname":" - ",
         "ShipCountry":"India",
         "ShipState":"Karnataka",
         "ShipCity":"32",
         "ShipEmail":"tom.sawyer@example.com",
         "ShipZip":"560047",
         "ShipPhone":"9098000000",
         "ShipMobile":"9098000000",
         "ShipAddress1":"A5-415, Malaprabha Block&#10;National Games Village, Koramangala",
         "ShipOtherCity":null,
         "DeliveryOption":"ship",
         "TAXTotal":40.90,
         "VoucherCode":"",
         "LeadTime":"",
         "BillAddress2":"",
         "ShipAddress2":"",
         "IsGift":false,
         "SupplierID":"00000000-0000-0000-0000-000000000000",
         "ConversionFactor":"1",
         "cpuserid":"00000000-0000-0000-0000-000000000000",
         "OrderLineId":[  
            {  
               "OrderLineId":21411124,
               "OrderId":5648247,
               "ProductId":11139502,
               "VariantProductId":7086906,
               "IsParentProduct":true,
               "Description":"",
               "Quantity":1,
               "ShippingCost":1,
               "ProductPrice":459.09,
               "TotalPromotionDiscount":50,
               "ReturnReason":"",
               "ReturnAction":"",
               "StockAction":"",
               "ReturnQty":0,
               "IsBackOrder":false,
               "TotalVoucherDiscount":0,
               "TotalTaxAmount":40.9091,
               "ShippingVoucherDiscount":0,
               "CustomFields":"",
               "VariantMasterProductId":0,
               "LocationCode":"OCDEL",
               "ShippingStatus":"S",
               "DeliveryMode":"",
               "VendorId":"00000000-0000-0000-0000-000000000000",
               "ItemStatus":"S",
               "SKU":"INDIGOF11515WHT",
               "VariantSku":"8907319010800",
               "ProductTitle":"White Cotton Skirt",
               "BundleProductId":"0",
               "ParentReDetailsId":"0",
               "ImageUrl":"http://images-cdn-stage.azurewebsites.net/azure/stage-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/INDIGOF11515WHT1-optimized.jpg;width=300",
               "IsPrimaryProduct":"false",
               "Portion":"",
               "MRP":"0",
               "TaxAmount":"40.90",
               "TaxDetails":[  
                  {  
                     "TaxCategory":"IGST",
                     "TaxRate":"10",
                     "TaxAmount":40.9091,
                     "IsTaxRatePercentage":true,
                     "TaxCode":null
                  }
               ],
               "IsTaxable":"True",
               "HSNCode":"",
               "UOM":"Pieces",
               "ActualWeight":"0.000"
            }
         ],
         "PaymentDetails":[  
            {  
               "PointsBurned":"0",
               "AgentId":"",
               "GV":"",
               "Channel":"",
               "CurrencyCode":"INR",
               "PaymentResponse":"",
               "PaymentStatus":"A",
               "Amount":"130",
               "PaymentDate":"8/6/2017",
               "PaymentType":"",
               "OrderId":5648247,
               "PaymentDetailsId":5743268,
               "checkOutGroup":"",
               "PaymentOption":"",
               "clientIP":"",
               "ResponseCode":"N",
               "ClientUserAgent":"GuzzleHttp/6.2.0 curl/7.35.0 PHP/5.5.9-1ubuntu4.19"
            }
         ],
         "Rewards":null,
         "ShippingDiscount":0,
         "VoucherDiscount":0,
         "PromotionDiscount":50,
         "OriginalOrderId":"5648247",
         "ReturnOrderId":"0",
         "ReferenceNo":"443",
         "DemandedDeliveryDate":"",
         "deliveryslots":{  
            "StartTime":"",
            "EndTime":""
         },
         "GiftMessage":"",
         "LanguageCode":"",
         "ShipStateCode":"KA",
         "ShipCountryCode":"IN",
         "BillStateCode":"KA",
         "BillCountryCode":"IN",
         "RefundAmount":"0",
         "Promotions":null,
         "TaxDetails":[  
            {  
               "TaxCategory":"IGST",
               "TaxRate":"10",
               "TaxAmount":40.9091,
               "IsTaxRatePercentage":true,
               "TaxCode":null
            }
         ],
         "MerchantGSTIN":"07650296886",
         "CustomerGSTIN":"",
         "TaxableInvoiceNumber":"tax/2017-2018/0048",
         "BillofSupplyInvoiceNumber":""
      }
   ]
}
```

Retrieves details of a specific invoice.

### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/Invoice/{merchantId}/{InvoiceNumber}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No




### Request URL

`https://{host}/developerapi/order/invoice/{merchantid}/{InvoiceNumber}/{LocationRefCode}`

### Request Parameters
Parameter | Description
--------- | -----------
merchantid* | The unique id (GUID) of the merchant in which the invoice is available
InvoiceNumber* | The invoice number that you want to fetch
LocationRefCode* | The location code of the order fulfillment store




## Ship Order

> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Order/Ship
```

> Sample POST Request


```json
{  
   "shipment":{  
      "merchantId":"179efd4e-f62d-4d34-ac13-fe42605e5xxx",
      "OrderId":123456,
      "AWBNumber":"123",
      "CourierName":"ARAMEX",
      "ShipDate":"01-20-2018",
      "ShipmentType":"normal",
      " LocationRefCode":"12146",
      "lineitems":[  
         {  
            "OrderLineId":466157049,
            "Quantity":1
         },
         {  
            "OrderLineId":466157049,
            "Quantity":2
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
      }
   }
}
```

> Sample Response

```json
{  
   "Message":"Successful",
   "messageCode":"1004"
}
```

Lets you create shipping details of a specific order (that is ready to ship).


### Resource Information
Parameter | Description
--------- | -----------
URI | `/Order/Ship`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Order/Ship`

### Request Parameters
Parameter | Description
--------- | -----------
MerchantId* | The unique id (GUID) of the merchant in which the order is registered or placed
OrderId* | The order id of the current shipment item 
AWBNumber* | The air way bill number generated for the shipment
CourierName* | The courier service used for shipment
ShipDate* | The date on which the order is shipped in `dd/mm/yy` format
ShipmentType* | The type of shipment. Values: normal, 
LocationRefCode* | Location reference code of the order fulfillment store
lineitems* | The details of each line item. Specify `OrderLineId` and `Quantity`
ShipmentTrip | Provide more details details of the shipping using the parameters specified below. You can use this if applicable for the current merchant
RiderID | Specify the rider id as available in the merchant system
RiderCode | Specify the rider code as available in the merchant system
TripRefNo | Specify the trp reference number as per the merchant system
VehicleNumber | Specify the vehicle number delivery vehicle
Attributes | Specify any additional information such as delivery guy's mobile number
 














## Get Specific Order Details

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
Parameter | Description
--------- | -----------
URI | `Order/Details/{MerchantId}/{OrderId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Additional Header Required
Header Name | Value
----------- | ------
token_secret | Unique authentication key generated for the request


### Request URL

`https://{host}/developerapi/Order/{merchant id}/{order id}`

### Request Parameters
Parameter | Description
--------- | -----------
merchantId* | The unique id (GUID) of the merchant from which you want to fetch order details
order id* | The order id that you want to fetch



## Cancel Order
> Sample Request

```html
https://www.martjack.com/developerapi/Order/Cancel
```

> Sample POST Request

```json
{
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

Cancels a specific order of a customer placed on a merchant store. However, an order can be canceled only if
 
* The logged in user has sufficient permission to cancel the order
* The order is either in Authorized (A) or Pending (P) Status
* The order is not shipped


### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/Cancel`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL

`http://{host}/developerapi/Order/Cancel`

### Request Parameters
Parameter | Description
--------- | -----------
Merchant Id* | The unique id (GUID) of the merchant in which the order is placed
OrderId* | Provide the order id that you want to cancel
Date* | The date on which the order is created in mm/dd/yy format
Comment | Specify the customer's reason for the order cancellation
DisplayCommentToUser | Value: True/False. Specify whether to make the comment visible or invisible to the customer 
PGResponse | The response received from the payment gateway
OperatorID | Current user id - It could be store, admin, manager
DisplayCommentToUser | Value: true, false
CancelReason* | Value: Auto populated reason
 
 
## Cancel Order Lineitem
> Sample Request

```html
https://www.martjack.com/developerapi/Order/CancelItem
```

> Sample POST Request

```json
{  
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

 
 Lets you cancel specific items of an order (partial cancellation). However, you can cancel an order item only if
 
* The logged in user has sufficient permission to cancel
* The order is either in Authorized (A) or Pending (P) Status
* The order item is not shipped

### Resource Information
Parameter | Description
--------- | -----------
URI | `Order/CancelItem`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL

`http://{host}/developerapi/Order/CancelItem`

### Request Parameters
Parameter | Description
--------- | -----------
Merchant Id* | The unique id (GUID) of the merchant in which the order is placed
OrderId* | Provide the order id that you want to cancel
Date* | The date on which the order is created in mm/dd/yy format
Comment | Specify the customer's reason for the order cancellation
DisplayCommentToUser | Value: True/False. Specify whether to make the comment visible or invisible to the customer 
PGResponse | The response received from the payment gateway for that specific order
OperatorID | Current user id - It could be store's, admin's, or manager's
DisplayCommentToUser | Specify `true` to show the user's comment to the end-user
CancelReason* | Specify the reason for order cancellation. In UI, these are auto-populated in the UI.
TobeCancelledOrderItems | Specify the items that you want to cancel in `OrderItemID` and `CancelQuantity`