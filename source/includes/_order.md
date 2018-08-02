# Order
An order is a completed purchase request of a customer. This resource consists APIs related to creating and managing orders of a merchant shop. 


## Create Bulk Order
This API lets you create batch orders. You can also captute vertical specific product attributes such as variants, bundle, and combo.


```html
# Sample Request

http://www.martjack.com/developerapi/Order/BulkOrderCreation

```


```json
# Sample POST Request

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

```json
# Sample Response

{  
   "messageCode":"1018",
   "Message":"Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
   "Taskid":"2156",
   "ErrorCode":0
}


```





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
orderdate* | Date on which the order is made in `d/m/y` format
deliveredon* | 
customertype | Type of the user as per the Martjack system. Supported Values: Guest User (for all marketplace), Registered User (If registered on Martjack platform)
userid | Registered identifier of the customer. Required when `customertype="Registered User"`
ordervalue | Net order amount
orderstatus | Supported values: Pending, Authorized
orderconfirmationmail | Supported values: Yes, No. If set to `Yes`, an order confirmation email is sent to the customer
paymentlinkstatus | 
calculateshippingtax | Supported values: Yes, No. Set to `No` if the order value includes all the tax and service charges. Else, you need to specify other charges separately.
shipfirstname, shiplastname, shipaddress1 ... | Specify the customer's shipping address related information in these fields
billfirstname, billlastname, billaddress1 ... | Specify the customer's billing address related information in these fields
giftmsg | In case of gift orders, specify the customer's personalized message that needs to sent to the recipient
locationcode | Reference code of the  order fulfillment location
isselfship | Supported Value: True, False. If the order shipment is handled by marketplace such as Amazon or Flipkart specify False. If the shipment is handled by the merchant himself, set the value to True
channelrefcode | Channel from which the order has come from (specific to Sellerworx). A channel is an instance of marketplace. A seller can have multiple channels.
channelorderid | Order id as maintained by that specific channel  (pecific to Sellerworx)
sellerwroxorderid | Order id generated at Sellerworx. Maps Channel order id to Sellerworx order id
items* | Specify the details of each line-item in `item` attribute
Payments* | Specify the payment details and `orderrefno` of the order in `payment`. The orderrefno value at payment level should be same as that of the order level
 
 

