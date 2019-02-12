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
PicklistCustomFields | obj | Picklist level custom field details as a key and value pairs


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





