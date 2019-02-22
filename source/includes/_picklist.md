# Picklist

Picklist is a document that contains the list of order items to be picked up from inventory for further processing. Picklist is maintained by shippers with large inventory or multiple orders. This resource provides all APIs related creating and managing picklist.




##  Confirm picklist

Lets you update item picklist of an order.


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

`https://{host}/developerapi/PickList/ConfirmPicklistItems/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
picklistOrderDetailId* | int | Unique picklist id of the item
PickListItemStatus | enum | The status of the current item. `F` for found, `N` for not found, `C` for cancel. If no value is passed, not found is considered as the default value
PickListId* | int | Unique id of the picklist
UserId* | string | Unique GUID of the user associated to the order item
Weight | int | Weight of the item 
ActualPrice | float | Net price of the item. The item price can be changed if `isVariance` is set to true
isVariance | boolean | Whether there is change in the price of the current item  during picklist creation. In case of any difference, the item price can be changed by passing the `ActualPrice` of the item

<aside class="notice">All parameters marked by * are mandatory.</aside>


## Process Picklist


> Sample Request

```html
https://{host}/developerapi/PickList/ProcessPicklist/f48fdd16-92db-4188-854d-1ecd9b62d066
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

`https://{host}/developerapi/PickList/ProcessPicklist/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantID | string | Unique GUID of the merchant
PickListId* | int | Unique id of the picklist
SubStatus | enum | Unique 2 character code of the picklist/picklist item sub-status. Values are as per configured in the CP
PicklistOperatorID | string | Unique id of the staff who confirms the picklist
Comments | string | Any comments related to the picklist. You can pass this both at the request level and item level
ConfirmPicking | enum | Specify `1` to confirm pick up, `0` if not confirmed. `0` will be considered as the default value if no value is passed
OrderPickListDetailId | int | 
RetransactionID | int | Order id of the item
PicklistID | int | Unique id of the picklist
RedetailsID | int | Unique item id as in the REtransaction table 
PicklistOperatorID | string | Unique id of the operator
PickListItemStatus | enum | The status of the current item. `F` for found, `N` for not found, `C` for cancel. If no value is passed, not found is considered as the default value
Weight | int | Weight of the item 
ActualPrice | float | Net price of the item. The item price can be changed if `isVariance` is set to true
isVariance | boolean | Whether there is change in the price of the current item  during picklist creation. In case of any difference, the item price can be changed by passing the `ActualPrice` of the itemPickingPrice":60,
PicklistCustomFields | obj | Picklist level custom field details - key and value pairs

<aside class="notice">All parameters marked by * are mandatory.</aside>





## Get Picklist Summary

Retrieves the details of a specific  specific  picklist.


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
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/PickList/GetPickListSummary/{MerchantId}/{pickListId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
pickListId* | int | Unique id of the picklist that you want to fetch





## Get PickLists of a Merchant

Lets you fetch picklists of a specific merchant based on the input parameters. By default, it will fetch the details of the last one week.

> Sample Request

```html
https://www.martjack.com/developerapi/PickList/f48fdd16-92db-4188-854d-1ecd9b62d066

```


> Sample POST Request

```json

MerchantID=f48fdd16-92db-4188-854d-1ecd9b62d066&InputFormat=application/json&InputData={
"Createdon":"2019-02-13",
"PickListCode": "",
"status": "",




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
URI | `/PickList/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/PickList/{MerchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId | string | Unique GUID of the merchant
status | string | Fetch picklists by status. Values: Created, In Picking (in progress), Completed/Picked (picked up)
picklistCode | string | Unique code of the picklist to fetch details by picklist code
createdOn | date | Fetch picklists created on a specific date. Pass the date in `MM/DD/YYYY` format
locationId | int | Fetch picklist of a specific location by location id
searchFromDate | date | Get picklists created on and after a specific date. Pass the date in `MM/DD/YYYY` format
searchSku | string | Fetch picklists consisting of a specific SKU.
pageNumber | int | For results in multiple pages, specify the page number that you want to see
pageSize | int | Specify the number of results to be shown per page
pickerId | string | Picker id assigned to the picklist
picklistOperatorID | string | Fetch picklists  of a specific operator. Pass the unique GUID of the operator
subStatusCode | enum | Unique 2 character code of the picklist item sub-status. Values are as per configured in the CP
channelId | string | Channel id of the marketplace














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

`https://{host}/developerapi/PickList/GetPickListswithOrdersInfo/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId | string | Unique GUID of the merchant
status | string | Fetch picklists by status. Values: Created, In Picking (in progress), Completed/Picked (picked up)
picklistCode | string | Unique code of the picklist to fetch details by picklist code
createdOn | date | Fetch picklists created on a specific date. Pass the date in `MM/DD/YYYY` format
locationId | int | Fetch picklist of a specific location by location id
searchFromDate | date | Get picklists created on and after a specific date. Pass the date in `MM/DD/YYYY` format
searchSku | string | Fetch picklists consisting of a specific SKU.
pageNumber | int | For results in multiple pages, specify the page number that you want to see
pageSize | int | Specify the number of results to be shown per page
pickerId | string | Picker id assigned to the picklist
picklistOperatorID | string | Fetch picklists  of a specific operator. Pass the unique GUID of the operator
subStatusCode | enum | Unique 2 character code of the picklist item sub-status. Values are as per configured in the CP
channelId | string | Channel id of the marketplace


## Get PickList Items






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
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/PickList/GetPickListItems/{MerchantId}/{pickListId}/{orderItemStatus}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
pickListId* | int | Unique id of the picklist for which you want to fetch items
orderItemStatus* | string | Get the order items by item status. Values: `P` for Pending, `F` for Found, `N` for Not Found,  `R` for Removed, `C` for  Canceled





## Get Substitutes of Picklist Item

Retrieves the list of alternative products of a specific picklist item by product id.

Substitutes are the product alternatives used in case of unavailability or insufficient quantity of actual product during pickup. 






> Sample Request

```html
https://www.martjack.com/developerapi/PickList/GetItemsubstitutes/9820eca5-d11f-4df1-9b20-983a45ea9631/14105696

```




> Sample Response

```json


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

`https://{host}/developerapi/PickList/GetItemsubstitutes/{merchantId}/{productId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
ProductId* | int | Unique product id for which you want to fetch substitutes

<aside class="notice">All parameters marked by * are mandatory.</aside>











