# Picklist

Picklist is a document that contains the list of order items to be picked up from inventory for further processing. Picklist is maintained by shippers with large inventory or multiple orders. This resource provides all APIs related creating and managing picklist.


## Create Picklist

Lets you create order picklist for a specific location.

> Sample Request

```html
https://www.martjack.com/developerapi/Pricelist/createPicklist/fd986588-63df-4d76-9ddd-5d8b984518a5
```

> Sample POST Request

```json
MerchantId=fd986588-63df-4d76-9ddd-5d8b984518a5&InputFormat=application/json&InputData={
"PicklistCreate": {
"PickerName": "Test",
"LoginUserID": "fd986588-63df-4d76-9ddd-5d8b984518a5",
"CreatedBy": "Test",
"ZoneID": 0,
"PickerID": "c70640f3-6a9f-471d-aeac-895089846e0f",
"LocationId": "26191",
"DeliverySlotID": 0,
"MerchantId": "fd986588-63df-4d76-9ddd-5d8b984518a5",
"DeliveryDate": "2018/04/27",
"PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
"PicklistCreateOrderDetails": [{
"PicklistCreateItemDetails": [{
"ChildProductId": "0",
"IsBundleParentProduct": "False",
"LocationId": "26191",
"Quantity": "1",
"ProductId": "14497553",
"OrderItemID": "28141571"
}],
"OrderId": "7676691"
}],
"PicklistName": "test"
}
}
```

> Sample Response

```json
{
"Message": "Successful",
"PicklistID": 195095,
"messageCode": "1004",
"ErrorCode": 0
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/picklist/createPicklist/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/picklist/createPicklist/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
PickerName | string | Specify a name for the picklist
LoginUserID | string | Unique GUID of the current logged in user
CreatedBy | string | Name of the operator who is creating the picklist
ZoneID | int | Unique id of the zone. Default value is `0`
PickerID* | string | Unique picker id assigned to the picklist 
LocationId* | int | Unique id of the order fulfillment location
DeliverySlotID | int | Unique id of the delivery slot. Specify a valid id
DeliveryDate | date | Specify the estimated delivery date of the items of the picklist in `YYYY/MM/DD` format 
PicklistOperatorID | string | Unique GUID of the picklist operator 
ChildProductId | int | Unique id of the variant product or child product of the bundle
IsBundleParentProduct | boolean | Whether the item is a parent product of a bundle 
Quantity | int | Quantity of the current item that you want to add
ProductId | int | Unique id of the parent product 
OrderItemID | int | Unique order line-item id of the current product 
OrderId* | int | Order id associated to the current item
PicklistName | string |Specify a name for the current picklist

<aside class="notice">All parameters marked by * are mandatory. </aside>



##  Confirm Picklist

Lets you update picklist of an order item.


> Sample Request

```html
https://www.martjack.com/developerapi/PickList/ConfirmPicklistItems/81e77da2-723b-483d-8c0d-49f800c1exxx

```


> Sample POST Request

```json

MerchantID=81e77da2-723b-483d-8c0d-49f800c1exxx&InputFormat=application/json&InputData={ 
  "PickListOrderLines": {
    "PickListOrderLine": [
      {
        "picklistOrderDetailId": "3236041",
        "PickListItemStatus": "C",
        "PickListId": "173273",
        "UserId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
        "Weight": "1",
        "ActualPrice": "30",
        "isVariance": true
      } 
    ]
  }   
}
```


> Sample Response

```json

{
   "Code": "1007",
   "Message": "Updated Successfully",
   "ErrorCode": "0",
   "AllocatedItems": "false"
}
```





### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/ConfirmPicklist/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/ConfirmPicklistItems/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
picklistOrderDetailId* | int | Unique picklist id of the item
PickListItemStatus* | enum | The status of the current item. `F` for found, `N` for not found, `C` for cancel. If no value is passed, not found is considered as the default value
PickListId* | int | Unique id of the picklist
UserId* | string | Unique GUID of the user associated to the order item
Weight | int | Weight of the item 
ActualPrice | float | Net price of the item. The item price can be changed if `isVariance` is set to true
isVariance* | boolean | Whether there is change in the price of the current item while creating picklist. If there is a difference, the item price can be changed by passing the `ActualPrice` of the item

<aside class="notice">All parameters marked by * are mandatory.</aside>


## Process Picklist


> Sample Request

```html
https://www.martjack.com/developerapi/PickList/ProcessPicklist/f48fdd16-92db-4188-854d-1ecd9b62d066
```

> Sample POST Request

```json
MerchantId=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData={  
   "Picklist":{  
      "MerchantID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
      "PicklistID":"168695",
      "SubStatus":"QC",
      "PicklistOperatorID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
      "Comments":"please start QC",
      "ConfirmPicking":1,
      "ProcessPicklistItemDetails":[  
         {  
            "OrderPickListDetailId":"3113505",
            "RetransactionID":"7504189",
            "PicklistID":"168695",
            "RedetailsID":"27148501",
            "SubStatus":"QC",
            "PicklistOperatorID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
            "Comments":"QC started for item",
            "BatchNo":"123",
            "PickListItemStatus":"F",
            "Weight":1,
            "PickingPrice":40,
            "IsVariance":1,
            "ActualPrice":1060,
            "PicklistCustomFields":[  

            ]
         },
          {  
            "OrderPickListDetailId":"3113507",
            "RetransactionID":"7504189",
            "PicklistID":"168695",
            "RedetailsID":"27148501",
            "SubStatus":"QC",
            "PicklistOperatorID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
            "Comments":"QC started for item",
            "BatchNo":"123",
            "PickListItemStatus":"N",
            "Weight":2,
            "PickingPrice":50,
            "IsVariance":1,
            "ActualPrice":1060,
            "PicklistCustomFields":[  

            ]
         },
          {  
            "OrderPickListDetailId":"3113509",
            "RetransactionID":"7504189",
            "PicklistID":"168695",
            "RedetailsID":"27148501",
            "SubStatus":"QC",
            "PicklistOperatorID":"f48fdd16-92db-4188-854d-1ecd9b62d066",
            "Comments":"QC started for item",
            "BatchNo":"123",
            "PickListItemStatus":"C",
            "Weight":3,
            "PickingPrice":60,
            "IsVariance":1,
            "ActualPrice":1060,
            "PicklistCustomFields":[  

            ]
         }
      ]
   }
}
```

> Sample Response

```json
{
   "Code": "1004",
   "Message": "Successful",
   "ErrorCode": "0",
   "AllocatedItems": "false"
}
```


Process the picklist once created from verification to confirmation.


### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/ProcessPicklist/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/ProcessPicklist/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantID* | string | Unique GUID of the merchant
PickListId* | int | Unique id of the picklist
SubStatus* | enum | Unique 2 character code of the sub-status of the picklist or picklist item. Values are as per configured in the CP for that merchant
PicklistOperatorID* | string | Unique id of the staff that confirms the picklist
Comments | string | Any comments related to the picklist at the request level/item level
ConfirmPicking* | enum | Specify `1` to confirm pick up, `0` if not confirmed. The default value is '0'
OrderPickListDetailId* | int | Unique internal reference id generated for each picklist item
RetransactionID* | int | Order id of the item for which you want to update picklist
PicklistID* | int | Unique id of the picklist
RedetailsID* | int | Unique item id as in the REtransaction table 
PicklistOperatorID | string | Unique id of the operator
PickListItemStatus | enum | The status of the current item. Values: `F` for found, `N` for not found, `C` for cancel. If no value is passed, not found is considered as the default value
Weight | int | Weight of the item if applicable
ActualPrice | float | Net price of the item. The item price can be changed if `isVariance` is set to true
isVariance* | boolean | Whether there is change in the price of the current item when picklist is created. If there is a price difference, the item price can be changed by passing the `ActualPrice` of the item
PickingPrice* | int | Additional price charged for packing (if applicable). For example, in restaurants additional charge will be levied on takeaway orders for packing
PicklistCustomFields | obj | Picklist level custom field details - key and value pairs

<aside class="notice">All parameters marked by * are mandatory.</aside>





## Get Picklist Summary

Retrieves the details of a specific  picklist.


> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetPickListSummary/f48fdd16-92db-4188-854d-1ecd9b62e546/168891

```



> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "PickList": {
    "PickListId": 168891,
    "PickListName": "FabTest",
    "PickListCode": "PK168890",
    "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62e546",
    "PickerName": "Tim James",
    "PickListStatus": "Completed",
    "CreatedBy": "tim.james@capillarytech.com",
    "CreatedOn": "/Date(1549867811000+0530)/",
    "ModifiedOn": "1/1/0001 12:00:00 AM",
    "ModifiedBy": null,
    "LocationId": 18340,
    "PickListOrder": [
      {
        "ChannelId": 0,
        "OrderPickListId": 1586811,
        "PickListId": 168891,
        "PickListOrderItems": [
          {
            "ProductTitle": "Onion Red",
            "ProductSKU": "100556",
            "VariantSKU": "100556-1kg",
            "CategoryCode": "CU00373956",
            "PickListCode": null,
            "BarCodes": [
              {
                "BarCode": "100556-123"
              },
              {
                "BarCode": "100556-1kg"
              }
            ],
            "CategoryName": "MID",
            "ProductCost": 0,
            "variantDescription": "Weight=1000gm",
            "MRP": 1009,
            "CurrencyCode": null,
            "UOM": "Gms",
            "OrderPickListDetailId": 3114155,
            "PickListId": 168891,
            "OrderId": 7506553,
            "OrderLineId": 26152287,
            "ProductId": 14106036,
            "ChildProductId": 10178766,
            "Quantity": 1,
            "PickQuantity": 0,
            "OrderItemPickStatus": "N",
            "LocationID": 18340,
            "ShelveCode": "",
            "IsHold": "False",
            "Weight": 1000,
            "variantattributevalue": null,
            "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
            "SubStatus": "",
            "Comments": ""
          },
          {
            "ProductTitle": "Onion Red",
            "ProductSKU": "100556",
            "VariantSKU": "100556-1kg",
            "CategoryCode": "CU00373956",
            "PickListCode": null,
            "BarCodes": [
              {
                "BarCode": "100556-123"
              },
              {
                "BarCode": "100556-1kg"
              }
            ],
            "CategoryName": "MID",
            "ProductCost": 0,
            "variantDescription": "Weight=1000gm",
            "MRP": 1009,
            "CurrencyCode": null,
            "UOM": "Gms",
            "OrderPickListDetailId": 3114157,
            "PickListId": 168891,
            "OrderId": 7506553,
            "OrderLineId": 26152287,
            "ProductId": 14106036,
            "ChildProductId": 10178766,
            "Quantity": 1,
            "PickQuantity": 0,
            "OrderItemPickStatus": "N",
            "LocationID": 18340,
            "ShelveCode": "",
            "IsHold": "False",
            "Weight": 1000,
            "variantattributevalue": null,
            "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
            "SubStatus": "",
            "Comments": ""
          },
          {
            "ProductTitle": "Go Buttermilk - Masala Chaas Ginger & Jeera",
            "ProductSKU": "1000681",
            "VariantSKU": "101101241",
            "CategoryCode": "CU00333530",
            "PickListCode": null,
            "BarCodes": [
              {
                "BarCode": "101101241"
              },
              {
                "BarCode": "8906001028352"
              }
            ],
            "CategoryName": "Flavoured Milk",
            "ProductCost": 0,
            "variantDescription": "Volume=1L Tetra Pack",
            "MRP": 50,
            "CurrencyCode": null,
            "UOM": "Pieces",
            "OrderPickListDetailId": 3114159,
            "PickListId": 168891,
            "OrderId": 7506553,
            "OrderLineId": 26152289,
            "ProductId": 12322046,
            "ChildProductId": 9076978,
            "Quantity": 1,
            "PickQuantity": 0,
            "OrderItemPickStatus": "N",
            "LocationID": 18340,
            "ShelveCode": "",
            "IsHold": "False",
            "Weight": 0,
            "variantattributevalue": null,
            "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
            "SubStatus": "",
            "Comments": ""
          },
          {
            "ProductTitle": "Go Buttermilk - Masala Chaas Ginger & Jeera",
            "ProductSKU": "1000681",
            "VariantSKU": "101101241",
            "CategoryCode": "CU00333530",
            "PickListCode": null,
            "BarCodes": [
              {
                "BarCode": "101101241"
              },
              {
                "BarCode": "8906001028352"
              }
            ],
            "CategoryName": "Flavoured Milk",
            "ProductCost": 0,
            "variantDescription": "Volume=1L Tetra Pack",
            "MRP": 50,
            "CurrencyCode": null,
            "UOM": "Pieces",
            "OrderPickListDetailId": 3114161,
            "PickListId": 168891,
            "OrderId": 7506553,
            "OrderLineId": 26152289,
            "ProductId": 12322046,
            "ChildProductId": 9076978,
            "Quantity": 1,
            "PickQuantity": 0,
            "OrderItemPickStatus": "N",
            "LocationID": 18340,
            "ShelveCode": "",
            "IsHold": "False",
            "Weight": 0,
            "variantattributevalue": null,
            "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
            "SubStatus": "",
            "Comments": ""
          }
        ],
        "Status": "PICKING",
        "TotalAmount": 2118,
        "TotalNoOfItems": 4,
        "channelName": null
      }
    ],
    "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
    "SubStatus": "",
    "Comments": ""
  },
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/GetPickListSummary/{MerchantId}/{pickListId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/GetPickListSummary/{MerchantId}/{pickListId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
pickListId* | int | Unique id of the picklist to fetch the summary





## Get PickLists of a Merchant

Lets you fetch picklists of the merchant based on the input parameters. By default, the details of the picklists of the last one week will be retrieved.

> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetPickLists/f48fdd16-92db-4188-854d-1ecd9b62d066

```


> Sample POST Request

```json

MerchantID=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData=
{
"Createdon":"2019-02-13",
"PickListCode": "",
"status": ""
}


```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "PickLists": [
    {
      "PickListId": 176599,
      "PickListName": "FabTest",
      "PickListCode": "PK176598",
      "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
      "PickerName": "James",
      "PickListStatus": "Completed",
      "CreatedBy": "james@example.com",
      "CreatedOn": "/Date(1550023525000+0530)/",
      "ModifiedOn": "2/13/2019 7:35:48 AM",
      "ModifiedBy": "2/13/2019 7:35:48 AM",
      "LocationId": 18340,
      "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
      "SubStatus": "",
      "Comments": ""
    },
    {
      "PickListId": 176597,
      "PickListName": "FabTest",
      "PickListCode": "PK176596",
      "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
      "PickerName": "James",
      "PickListStatus": "Completed",
      "CreatedBy": "james@example.com",
      "CreatedOn": "/Date(1550023438000+0530)/",
      "ModifiedOn": "2/13/2019 7:34:25 AM",
      "ModifiedBy": "2/13/2019 7:34:25 AM",
      "LocationId": 18340,
      "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
      "SubStatus": "",
      "Comments": ""
    },
    {
      "PickListId": 176565,
      "PickListName": "FabTest",
      "PickListCode": "PK176564",
      "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
      "PickerName": "Malad Picker1",
      "PickListStatus": "Created",
      "CreatedBy": "tom.sawyer@capillarytech.com",
      "CreatedOn": "/Date(1550020430000+0530)/",
      "ModifiedOn": "2/13/2019 6:43:50 AM",
      "ModifiedBy": "2/13/2019 6:43:50 AM",
      "LocationId": 18340,
      "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
      "SubStatus": "",
      "Comments": ""
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/GetPickLists/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/GetPickLists/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
status | string | Fetch picklists by status. Values: `Created`, `In Picking` (in progress), `Completed` or `Picked` (picked up)
picklistCode | string | Unique code of the picklist to fetch details by picklist code
createdOn | date | Fetch picklists created on a specific date. Pass the date in `MM/DD/YYYY` format
locationId | int | Fetch picklists of a specific location by location id
searchFromDate | date | Get picklists created on and after a specific date. Pass the date in `MM/DD/YYYY` format
searchSku | string | Fetch picklists consisting a specific SKU.
pageNumber | int | If results are too long and displayed in multiple pages, specify the page number to see the picklist of that particular page
pageSize | int | Specify the number of results to be shown per page
pickerId | string | Picker id assigned to the picklist
picklistOperatorID | string | Fetch picklists  of a specific operator. Pass the unique GUID of the operator
subStatusCode | enum | Unique 2 character code of the picklist item sub-status. Values are as per configured in the CP
channelId | string | Channel id of the marketplace to get the picklists of that specific channel










## Get PickList with Order Info

Retrieves details of a picklist along with the order details based on the input parameters. 


> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetPickListswithOrdersInfo/f48fdd16-92db-4188-854d-1ecd9b62d066
```


> Sample POST Request

```json

MerchantID=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData={
"Createdon":"2019-02-13",
"PickListCode": "",
"status": ""

}

```

> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "PickerPickLists":[
      {
         "PickListId":176599,
         "PickListName":"FabTest",
         "PickListCode":"PK176598",
         "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
         "PickerName":"s animesh",
         "PickListStatus":"Completed",
         "CreatedBy":"hyctest@martjack.com",
         "CreatedOn":"2/13/2019 7:35:25 AM",
         "ModifiedOn":"1/1/0001 12:00:00 AM",
         "ModifiedBy":null,
         "LocationId":18340,
         "PickListOrder":[
            {
               "DeliveryOption":"ship",
               "DeliverySlotEndTime":"9:30 PM",
               "DeliverySlotID":33380,
               "DeliverySlotStartTime":"7:00 PM",
               "DemandedDeliveryDate":"13-Feb-2019",
               "OrderDate":"2/13/2019 7:29:54 AM",
               "OrderPickListId":1648637,
               "PickListId":176599,
               "PickListOrderItems":[
                  {
                     "BarCodes":[
                        {
                           "BarCode":"100556-123"
                        },
                        {
                           "BarCode":"100556-1kg"
                        }
                     ],
                     "CategoryCode":"CU00373956",
                     "CategoryName":"MID",
                     "ChildProductId":10178766,
                     "Comments":"",
                     "CurrencyCode":null,
                     "CustomFieldValues":null,
                     "IsHold":"False",
                     "LocationCode":"1001",
                     "LocationID":18340,
                     "MRP":1009,
                     "OrderId":7752939,
                     "OrderItemPickStatus":"N",
                     "OrderLineId":26696085,
                     "OrderPickListDetailId":3313945,
                     "PickListCode":null,
                     "PickListId":176599,
                     "PickQuantity":0,
                     "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
                     "ProductCost":1009,
                     "ProductId":14106036,
                     "ProductSKU":"100556",
                     "ProductTitle":"Onion Red",
                     "Quantity":1,
                     "ShelveCode":"",
                     "SubStatus":"",
                     "UOM":"Gms",
                     "VariantSKU":"100556-1kg",
                     "Weight":1000,
                     "variantDescription":"Weight=1000gm",
                     "variantattributevalue":null
                  },
                  {
                     "BarCodes":[
                        {
                           "BarCode":"100556-123"
                        },
                        {
                           "BarCode":"100556-1kg"
                        }
                     ],
                     "CategoryCode":"CU00373956",
                     "CategoryName":"MID",
                     "ChildProductId":10178766,
                     "Comments":"",
                     "CurrencyCode":null,
                     "CustomFieldValues":null,
                     "IsHold":"False",
                     "LocationCode":"1001",
                     "LocationID":18340,
                     "MRP":1009,
                     "OrderId":7752939,
                     "OrderItemPickStatus":"N",
                     "OrderLineId":26696085,
                     "OrderPickListDetailId":3313947,
                     "PickListCode":null,
                     "PickListId":176599,
                     "PickQuantity":0,
                     "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
                     "ProductCost":1009,
                     "ProductId":14106036,
                     "ProductSKU":"100556",
                     "ProductTitle":"Onion Red",
                     "Quantity":1,
                     "ShelveCode":"",
                     "SubStatus":"",
                     "UOM":"Gms",
                     "VariantSKU":"100556-1kg",
                     "Weight":1000,
                     "variantDescription":"Weight=1000gm",
                     "variantattributevalue":null
                  }
               ],
               "Status":"PICKED",
               "TotalAmount":2018,
               "TotalNoOfItems":2,
               "channelId":0,
               "channelName":null
            }
         ],
         "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
         "SubStatus":"",
         "Comments":""
      },
      {
         "PickListId":176597,
         "PickListName":"FabTest",
         "PickListCode":"PK176596",
         "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
         "PickerName":"s animesh",
         "PickListStatus":"Completed",
         "CreatedBy":"hyctest@martjack.com",
         "CreatedOn":"2/13/2019 7:33:58 AM",
         "ModifiedOn":"1/1/0001 12:00:00 AM",
         "ModifiedBy":null,
         "LocationId":18340,
         "PickListOrder":[
            {
               "DeliveryOption":"ship",
               "DeliverySlotEndTime":"9:30 PM",
               "DeliverySlotID":33380,
               "DeliverySlotStartTime":"7:00 PM",
               "DemandedDeliveryDate":"13-Feb-2019",
               "OrderDate":"2/13/2019 7:29:52 AM",
               "OrderPickListId":1648635,
               "PickListId":176597,
               "PickListOrderItems":[
                  {
                     "BarCodes":[
                        {
                           "BarCode":"100556-123"
                        },
                        {
                           "BarCode":"100556-1kg"
                        }
                     ],
                     "CategoryCode":"CU00373956",
                     "CategoryName":"MID",
                     "ChildProductId":10178766,
                     "Comments":"",
                     "CurrencyCode":null,
                     "CustomFieldValues":null,
                     "IsHold":"False",
                     "LocationCode":"1001",
                     "LocationID":18340,
                     "MRP":1009,
                     "OrderId":7752937,
                     "OrderItemPickStatus":"N",
                     "OrderLineId":26696083,
                     "OrderPickListDetailId":3313941,
                     "PickListCode":null,
                     "PickListId":176597,
                     "PickQuantity":0,
                     "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
                     "ProductCost":1009,
                     "ProductId":14106036,
                     "ProductSKU":"100556",
                     "ProductTitle":"Onion Red",
                     "Quantity":1,
                     "ShelveCode":"",
                     "SubStatus":"",
                     "UOM":"Gms",
                     "VariantSKU":"100556-1kg",
                     "Weight":1000,
                     "variantDescription":"Weight=1000gm",
                     "variantattributevalue":null
                  },
                  {
                     "BarCodes":[
                        {
                           "BarCode":"100556-123"
                        },
                        {
                           "BarCode":"100556-1kg"
                        }
                     ],
                     "CategoryCode":"CU00373956",
                     "CategoryName":"MID",
                     "ChildProductId":10178766,
                     "Comments":"",
                     "CurrencyCode":null,
                     "CustomFieldValues":null,
                     "IsHold":"False",
                     "LocationCode":"1001",
                     "LocationID":18340,
                     "MRP":1009,
                     "OrderId":7752937,
                     "OrderItemPickStatus":"F",
                     "OrderLineId":26696083,
                     "OrderPickListDetailId":3313943,
                     "PickListCode":null,
                     "PickListId":176597,
                     "PickQuantity":0,
                     "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
                     "ProductCost":1009,
                     "ProductId":14106036,
                     "ProductSKU":"100556",
                     "ProductTitle":"Onion Red",
                     "Quantity":1,
                     "ShelveCode":"",
                     "SubStatus":"",
                     "UOM":"Gms",
                     "VariantSKU":"100556-1kg",
                     "Weight":1000,
                     "variantDescription":"Weight=1000gm",
                     "variantattributevalue":null
                  }
               ],
               "Status":"PICKED",
               "TotalAmount":2018,
               "TotalNoOfItems":2,
               "channelId":0,
               "channelName":null
            }
         ],
         "PicklistOperatorID":"00000000-0000-0000-0000-000000000000",
         "SubStatus":"",
         "Comments":""
      }
   ]
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/GetPickListswithOrdersInfo/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/GetPickListswithOrdersInfo/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId | string | Unique GUID of the merchant
status | string | Fetch picklists by status. Values: `Created`, `In Picking` (in progress), `Completed` or `Picked` (picked up)
picklistCode | string | Specify the unique picklist code to fetch
createdOn | date | Fetch picklists created on a specific date. Pass the date in `MM/DD/YYYY` format
locationId | int | Fetch picklist of a specific location. Pass the location id
searchFromDate | date | Get picklists created on and after a specific date. Pass the date in `MM/DD/YYYY` format
searchSku | string | Fetch picklists containing a specific SKU
pageNumber | int | If the results are too long and appear in multiple pages, you can specify a page number to see the results on that particular page
pageSize | int | Specify the number of results to be shown per page
pickerId | string | Picker id assigned to the picklist
picklistOperatorID | string | Fetch picklists  of a specific operator. Pass the unique GUID of the operator
subStatusCode | enum | Unique 2 character code of the picklist item sub-status. Values are as per configured in the CP
channelId | string | Channel id of the marketplace to get picklists of that specific channel




## Get PickList Items

Retrieves items of a specific picklist by item status.



> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetPickListItems/f48fdd16-92db-4188-854d-1ecd9b62d066/168917/P

```




> Sample Response

```json
{
   "Code": "1004",
   "Message": "Successful",
   "ErrorCode": "0",
   "PickListOrderItems": [
      {
         "ProductTitle": "Blue Straight Cotton Jacket",
         "ProductSKU": "WINTERW12140BLU",
         "VariantSKU": "8907319139341",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=34",
         "MRP": "2599.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114191",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154847",
         "ProductId": "11481094",
         "ChildProductId": "7800898",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      },
      {
         "ProductTitle": "Blue Straight Cotton Jacket",
         "ProductSKU": "WINTERW12140BLU",
         "VariantSKU": "8907319139341",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=34",
         "MRP": "2599.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114193",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154847",
         "ProductId": "11481094",
         "ChildProductId": "7800898",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      },
      {
         "ProductTitle": "Blue Straight Cotton Jacket",
         "ProductSKU": "WINTERW12140BLU",
         "VariantSKU": "8907319139334",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=32",
         "MRP": "2599.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114195",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154849",
         "ProductId": "11481094",
         "ChildProductId": "7800896",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      },
      {
         "ProductTitle": "Blue Straight Cotton Jacket",
         "ProductSKU": "WINTERW12140BLU",
         "VariantSKU": "8907319139334",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=32",
         "MRP": "2599.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114197",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154849",
         "ProductId": "11481094",
         "ChildProductId": "7800896",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      },
      {
         "ProductTitle": "Blue Straight Poly Cotton Kurta",
         "ProductSKU": "WINTERW13282AW17BLU",
         "VariantSKU": "8907319271133",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=M",
         "MRP": "4995.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114199",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154851",
         "ProductId": "12407946",
         "ChildProductId": "9186262",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      },
      {
         "ProductTitle": "Blue Straight Poly Cotton Kurta",
         "ProductSKU": "WINTERW13282AW17BLU",
         "VariantSKU": "8907319271133",
         "CategoryCode": "CU00302566",
         "PickListCode": "PK168916",
         "CategoryName": "Jackets",
         "ProductCost": "0",
         "variantDescription": "Size=M",
         "MRP": "4995.0000",
         "UOM": "Pieces",
         "OrderPickListDetailId": "3114201",
         "PickListId": "168917",
         "OrderId": "7507597",
         "OrderLineId": "26154851",
         "ProductId": "12407946",
         "ChildProductId": "9186262",
         "Quantity": "1",
         "PickQuantity": "0",
         "OrderItemPickStatus": "A",
         "LocationID": "0",
         "ShelveCode": [],
         "IsHold": "False",
         "Weight": "0",
         "BarCodes": [],
         "PicklistOperatorID": "00000000-0000-0000-0000-000000000000",
         "SubStatus": [],
         "Comments": []
      }
   ],
   "AllocatedItems": "false"
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/GetPickListItems/{MerchantId}/{pickListId}/{orderItemStatus}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/GetPickListItems/{MerchantId}/{pickListId}/{orderItemStatus}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
pickListId* | int | Unique id of the picklist to see the picklist items
orderItemStatus* | string | Get picklist items by item status. Values: `P` for Pending, `F` for Found, `N` for Not Found,  `R` for Removed, `C` for  Canceled





## Get Substitutes of Picklist Item

Retrieves the list of alternative products of a specific picklist item by product id.

Substitutes are the product alternatives used during pickup in case of unavailability or insufficient quantity of actual product. 






> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetItemsubstitutes/9820eca5-d11f-4df1-9b20-983a45ea9631/11989616

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "SubstituteViews": [
        {
            "Merchantid": "9820eca5-d11f-4df1-9b20-983a45ea9631",
            "ProductId": 11989616,
            "VariantProductId": 0,
            "ProductSKU": "101356308",
            "VariantSKU": "",
            "ProductTitle": "Pepsi Mini Can-150 ml",
            "Sequence": 1,
            "UOM": "Pieces",
            "BuyingWeight": 0,
            "ProductImage": "http://images.sg.content-cdn.io/cdn/in-resources/f48fdd16-92db-4188-854d-1ecd9b62d066/Images/ProductImages/Source/No-image.jpg"
        }
    ],
    "ErrorCode": 0
}



```



### Resource Information
| | |
--------- | ----------- |
URI | `/PickList/GetItemsubstitutes/{merchantId}/{productId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/PickList/GetItemsubstitutes/{merchantId}/{productId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
ProductId* | int | Unique product id for which you want to fetch substitutes

<aside class="notice">All parameters marked by * are mandatory.</aside>











