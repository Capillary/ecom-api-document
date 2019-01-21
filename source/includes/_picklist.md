# Picklist






##  Confirm picklist

Lets you update item picklist of an order.


> Sample Request

```html
https://www.martjack.com/developerapi/

```


> Sample POST Request

```json

MerchantID={{Merchantid}}&InputFormat=application/json&InputData={ 
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
URI | `/Order/PickList/ConfirmPicklist/{MerchantId}`
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