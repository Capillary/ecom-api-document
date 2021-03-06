# Location

Location is a determination of the place where a product is available or shipped from. It could be a physical store or just a warehouse. This resource contains APIs related to accessing and managing store/warehouse location details.


## Store Delivery Area Mapping

> Sample Request

```html
https://www.martjack.com/developerapi/Location/StoreDeliveryAreaMapping/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
InputFormat=application/json&MerchantId=f48fdd16-92db-4188-854d-1ecd9b62e234&ETAfor=ALL&InputData={
   "StoreDeliveryAreaMappings":{
      "StoreDeliveryAreaMapping":[
         {
            "LocationRefCode":"Hyd001",
            "DeliveryType":"H",
            "AreaRefCode":"12146",
            "Operation":"remove"
         },
		 {
            "LocationRefCode":"Hyd001",
            "DeliveryType":"H",
            "AreaRefCode":"12146",
            "Operation":"add"
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
   "FailedStoreDeliveryAreaMapping": [
       {
           "LocationRefCode": null,
           "DeliveryType": null,
           "AreaRefCode": null,
           "Operation": null,
           "ErrorMessage": null
       }
   ],
   "ErrorCode": 0
}
```


Maps a store location to a delivery area



### Resource Information
| | |
--------- | ----------- |
URI | `/Location/StoreDeliveryAreaMapping/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/StoreDeliveryAreaMapping/{MerchantId}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
LocationRefCode | string | The location reference code that you want to map to a delivery area
DeliveryType | string  | The type of delivery of the location.  Value: `H` if the type is Home delivery, `S` for store pickup, `N` if the store supports both pickup and delivery
AreaRefCode | string | Delivery area reference code that you want to assign
Operation | string | Specify `add` to add delivery area to a location, 	`remove` to delete the delivery area from a location








## Update Store Location

> Sample Request

```html
https://www.martjack.com/developerapi/Location/UpdateLocation/f48fdd16-92db-4188-854d-1ecd9b62xxxx/12146

```

> Sample PATCH Request

```json
[
   {
      "op":"replace",
      "path":"/IsParticipateInStock",
      "value":"true"
   },
   {
      "op":"replace",
      "path":"/ReasonCode",
      "value":"TR"
   },
   {
      "op":"replace",
      "path":"/isInStorePickup",
      "value":"true"
   },
   {
      "op":"replace",
      "path":"/LocationName",
      "value":"Chennai"
   },
   {
      "op":"replace",
      "path":"/Contact1",
      "value":"9008000000"
   },
   {
      "op":"replace",
      "path":"/Address1",
      "value":"Near Silky Board1"
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

Updates location of a specific store

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/UpdateLocation/{MerchantId}/{LocationrefCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | PATCH
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/UpdateLocation/{MerchantId}/{LocationrefCode}`


### Header Modification Required

Pass `content-type` as application/json-patch+json

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
op* | string | Specify `replace` to update the existing information
path | string | Path of the key
value | string | New value of the current path






## Update Store Timings



> Sample Request

```html
https://www.martjack.com/developerapi/Location/UpdateStoreTimings/f48fdd16-92db-4188-854d-1ecd9b62xxxx/OCDEL
```

> Sample POST Request

```json
InputFormat=application/json&MerchantId=f48fdd16-92db-4188-854d-1ecd9b62e234&ETAfor=ALL&InputData={  
   "LocationOpenandCloseTimings":{  
      "DelveryMode":"H",
      "OpenLeadTime":"1",
      "CloseLeadTime":"10",
      "WeekDayId":"0",
      "OnTime":"11:10:10",
      "OffTime":"22:11:11",
      "userId":"f48fdd16-92db-4188-854d-1ecd9b62d066"
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

Updates the operation timings of a store location.


### Resource Information
| | |
--------- | ----------- |
URI | `/Location/UpdateStoreTimings/{MerchantId}/{Locationrefcode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL
`{host}/developerapi/Location/UpdateStoreTimings/{MerchantId}/{Locationrefcode}`

### Request Path Parameters
Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant for which you want to update location timings
Locationrefcode* | string | The reference code of the location for which you want to update timings


### Request Body Parameters
Parameter | Type | Description
-------- | ----- | -----------
DelveryMode | enum | Specify the mode of delivery for the location. `S` for store pick up and `H` for home delivery, `L` for store 
OpenLeadTime | int | The maximum possible delay (in minutes) in the store open time (on-time)
CloseLeadTime | int | The maximum possible delay (in minutes) in the store close time (off-time)
WeekDayId | int | Specify for which day of the week the current timing is configured. Supported values: 0, 1, 2, 3, 4, 5, 6. Where `0` for Sunday and `6` for Saturday (Multiple values not supported)
OnTime | time | Store open time in `HH:MM:SS` format
OffTime | time | Store close time in `HH:MM:SS` format 
userId | string | CP user id who is updating the store timing








## Search Locations

> Sample Request

```html
https://www.martjack.com/developerapi/Location/f48fdd16-92db-4188-854d-1ecd9b62xxxx/Search

```

> Sample POST Request (RAW TEXT)

```json
zipcode=500090&deliveryarea=hyderabad&deliveryareaid=16696&outputfield=additional,deliveryarea
```


> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "Locations": [
    {
      "DistancefromInputLatLong": 0,
      "ParentLocationID": 0,
      "LocationId": 16696,
      "LocationCode": "OCDEL",
      "LocationName": "Holisol Delhi",
      "Address1": "Holisol Logistics Pvt. Ltd, Plot No. #434/2, Phirni Road (Budh Bazar Road), Mundka New Delhi - 110041\r\n",
      "Address2": "",
      "City": "19759",
      "CityName": null,
      "Area": "",
      "State": "DL",
      "StateName": null,
      "Country": "IN",
      "CountryName": null,
      "Pin": "110019",
      "Contact1": "91-9266604xxx",
      "Contact2": "",
      "Description": "Holisol Warehouse",
      "Latitude": 28.6826,
      "Longitude": 77.022,
      "LocationType": null,
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsDistributionCenter": true,
      "EmailId": "customercare@example.com",
      "IsParticipateInStock": true,
      "IsDefaultLocation": true,
      "IsOfflinneCheckoutEnabled": false,
      "IsPointOfSale": true,
      "IsOfflineDeals": false,
      "IsInStorePickup": true,
      "Remarks": null,
      "CST": "HOLDCST",
      "VAT": "HOLDVAT",
      "TINNo": "HOLDTIN",
      "GSTINNO": "HOLDGSTIN",
      "IsReversePickupEnabled": true,
      "IsDefaultLNG_LocationName": false,
      "IsDefaultLNG_Description": false,
      "IsDefaultLNG_Address1": false,
      "StoreTimings": null,
      "HomeDeliveryTimings": null,
      "TakeawayTimings": null
    },
    {
      "DistancefromInputLatLong": 0,
      "ParentLocationID": 0,
      "LocationId": 17430,
      "LocationCode": "OCBLR",
      "LocationName": "Holisol Bangalore",
      "Address1": "Holisol logistics Pvt Ltd - BIBA Apparels Pvt Ltd ,C/O Garuda Polyflex Foods Pvt. Ltd.No.11, Bommasandra Jigani Link Road, Anekal Taluk,Bangalore",
      "Address2": "",
      "City": "32",
      "CityName": null,
      "Area": "",
      "State": "KA",
      "StateName": null,
      "Country": "IN",
      "CountryName": null,
      "Pin": "560105",
      "Contact1": "011-39585715",
      "Contact2": "",
      "Description": "Holisol Warehouse Bangalore",
      "Latitude": 12.8032,
      "Longitude": 77.661,
      "LocationType": null,
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsDistributionCenter": true,
      "EmailId": "test@example.com",
      "IsParticipateInStock": true,
      "IsDefaultLocation": false,
      "IsOfflinneCheckoutEnabled": false,
      "IsPointOfSale": true,
      "IsOfflineDeals": false,
      "IsInStorePickup": true,
      "Remarks": null,
      "CST": "",
      "VAT": "",
      "TINNo": "",
      "GSTINNO": "",
      "IsReversePickupEnabled": false,
      "IsDefaultLNG_LocationName": false,
      "IsDefaultLNG_Description": false,
      "IsDefaultLNG_Address1": false,
      "StoreTimings": null,
      "HomeDeliveryTimings": null,
      "TakeawayTimings": null
    }
  ],
  "ErrorCode": 0
}

```

Retrieves locations of a specific delivery area.


### Resource Information
| | |
--------- | ----------- |
URI | `/Location/{MerchantId}/Search`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/{MerchantId}/Search`



### Path Parameters

Parameter | Type | Description
--------- | ---- | ----
merchantId* | string | Unique GUID of the merchant


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
zipcode*	| string | Area PIN code that you want to fetch. Example value: 110019
deliveryarea* | string | Name of the delivery area. Example: Karnataka
deliveryareaId*	| int | Unique id of the delivery area. Example: 234
outputfield	| enum | Pass `additional` to include additional details in the response, `deliveryarea` to include delivery areas in the response

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
DistancefromInputLatLong | float | Distance of the location from the latitude and longitude. Available only if latitude and longitude are set for the location
IsParticipateInStock | boolean | Whether the location is participating in stock. The location appears on the storefront only if this is set to true
IsOfflinneCheckoutEnabled | boolean | Whether offline ordering is available for the location
IsOfflineDeals | boolean | Whether promotions are applied offline for the location



## Search Delivery Areas
Fetches delivery areas of a specific city.

> Sample Request

```html
https://www.martjack.com/developerapi/Location/7c778337-4652-4944-934f-09e0fe5606d3/SearchDeliveryAreas

```

> Sample POST Request (RAW)

```json
cityid=36618

```


> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "DeliveryAreas":[
      {
         "DeliveryAreaID":431864,
         "DeliveryAreaName":"UYGARKENT",
         "AreaType":"CT",
         "MerchantID":"7c778337-4652-4944-934f-09e0fe5606d3",
         "IsArchive":false,
         "DeliveryRefCode":"UYGARKENT",
         "AreaTypeIDs":"36618,"
      },
      {
         "DeliveryAreaID":431866,
         "DeliveryAreaName":"TRİO PARK ÇORLU",
         "AreaType":"CT",
         "MerchantID":"7c778337-4652-4944-934f-09e0fe5606d3",
         "IsArchive":false,
         "DeliveryRefCode":"TRİO PARK ÇORLU",
         "AreaTypeIDs":"36618,"
      },
      {
         "DeliveryAreaID":431868,
         "DeliveryAreaName":"TİCARET VE SANAYİ ODASI İ.Ö.O",
         "AreaType":"CT",
         "MerchantID":"7c778337-4652-4944-934f-09e0fe5606d3",
         "IsArchive":false,
         "DeliveryRefCode":"TİCARET VE SANAYİ ODASI İ.Ö.O",
         "AreaTypeIDs":"36618,"
      }
   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Location/{merchantid}/SearchDeliveryAreas`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/{merchantid}/SearchDeliveryAreas`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
cityid* | int | Unique city id for which you want to fetch delivery locations 


<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
-------- | ----- | -----------
DeliveryAreaID | int | Unique id of the delivery area
DeliveryAreaName | string | Name of the respective delivery area
AreaType | enum | `cn` for delivery type country, `ct` for city, and `st` for state
IsArchive | boolean | Whether the delivery area is active or archived
AreaTypeIDs | string | 

















## Get Location Information

> Sample Request

```html
https://www.martjack.com/developerapi/Location/Information/f48fdd16-92db-4188-854d-1ecd9b62xxxx/18340
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Location":{  
      "DistancefromInputLatLong":0,
      "ParentLocationID":0,
      "LocationId":18340,
      "LocationCode":"1001",
      "LocationName":"Example Mumbai Store",
      "Address1":"Capillary Retail India Ltd.Malad Link Road, Malad West, Mumbai",
      "Address2":"",
      "City":"321",
      "CityName":"Mumbai",
      "Area":"",
      "State":"MH",
      "StateName":"Maharashtra",
      "Country":"IN",
      "CountryName":"India",
      "Pin":"400064",
      "Contact1":"91-9090900000",
      "Contact2":"",
      "Description":"",
      "Latitude":0,
      "Longitude":0,
      "LocationType":null,
      "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62xxxx",
      "IsDistributionCenter":true,
      "EmailId":"care@example.com",
      "IsParticipateInStock":false,
      "IsDefaultLocation":true,
      "IsOfflinneCheckoutEnabled":true,
      "IsPointOfSale":true,
      "IsOfflineDeals":true,
      "IsInStorePickup":true,
      "Remarks":null,
      "CST":"",
      "VAT":"",
      "TINNo":"",
      "GSTINNO":"GST_HYC_1001",
      "IsReversePickupEnabled":true,
      "IsDefaultLNG_LocationName":false,
      "IsDefaultLNG_Description":false,
      "IsDefaultLNG_Address1":false,
      "AdditionalDetails":[  
         {  
            "Key":"LocationId",
            "Value":"18340"
         },
         {  
            "Key":"IsDispatchEnable",
            "Value":"False"
         },
         {  
            "Key":"StoreAuthKey",
            "Value":""
         },
         {  
            "Key":"LastSeen",
            "Value":"1/1/2000 12:00:00 PM"
         },
         {  
            "Key":"StoreOnTime",
            "Value":"00:00:00"
         },
         {  
            "Key":"StoreOffTime",
            "Value":"00:00:00"
         },
         {  
            "Key":"Lastlogout",
            "Value":"1/1/2000 12:00:00 PM"
         },
         {  
            "Key":"VendorId",
            "Value":"00000000-0000-0000-0000-000000000000"
         },
         {  
            "Key":"lastloginafterStoreOn",
            "Value":"1/1/2000 12:00:00 PM"
         },
         {  
            "Key":"isEnablePromotion",
            "Value":"False"
         },
         {  
            "Key":"isEnablePrivatelabel",
            "Value":"False"
         },
         {  
            "Key":"MaxPromotionPerDay",
            "Value":"0"
         },
         {  
            "Key":"isDineIn",
            "Value":"False"
         },
         {  
            "Key":"LocationPrefix",
            "Value":""
         },
         {  
            "Key":"EnableReversePickup",
            "Value":"False"
         },
         {  
            "Key":"AdvanceTaxPrefix",
            "Value":""
         },
         {  
            "Key":"isKDS",
            "Value":"False"
         },
         {  
            "Key":"isDriverTracking",
            "Value":"False"
         },
         {  
            "Key":"isStoreManagerApp",
            "Value":"False"
         },
         {  
            "Key":"JDECode",
            "Value":""
         },
         {  
            "Key":"ChamsId",
            "Value":""
         },
         {  
            "Key":"TechnologyCode",
            "Value":""
         },
         {  
            "Key":"HomeDeliveryETA",
            "Value":"{\"StartTime\":\"30\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"Min\"}"
         },
         {  
            "Key":"TakeAwayETA",
            "Value":"{\"StartTime\":\"20\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"Min\"}"
         },
         {  
            "Key":"PickupPointsETA",
            "Value":"{\"StartTime\":\"10\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"Min\"}"
         }
      ],
      "DeliveryModes":[  
         {  
            "Mode":"Home Delivery",
            "State":"False",
            "ReasonCode":"OR"
         },
         {  
            "Mode":"Takeaway",
            "State":"True",
            "ReasonCode":""
         },
         {  
            "Mode":"Pickup Timings",
            "State":"False",
            "ReasonCode":""
         }
      ],
      "StoreTimings":[  
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":5224,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":0
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":9442,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":1
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":9444,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":2
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":9538,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":3
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":9540,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":4
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":9542,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":5
         },
         {  
            "CloseLeadTime":10,
            "Deliverymode":"L",
            "ID":5236,
            "Locationid":18340,
            "OffTime":"03:00:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":10,
            "WeekDayId":6
         }
      ],
      "HomeDeliveryTimings":[  
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":5196,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":0
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":9446,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":1
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":9558,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":2
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":9560,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":3
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":9562,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":4
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":5206,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":5
         },
         {  
            "CloseLeadTime":55,
            "Deliverymode":"H",
            "ID":5208,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"05:00:00",
            "OpenLeadTime":55,
            "WeekDayId":6
         }
      ],
      "TakeawayTimings":[  
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":5210,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":0
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":9448,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":1
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":9592,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":2
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":9594,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":3
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":9596,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":4
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":5220,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":5
         },
         {  
            "CloseLeadTime":1,
            "Deliverymode":"S",
            "ID":5222,
            "Locationid":0,
            "OffTime":"23:59:00",
            "OnTime":"00:00:00",
            "OpenLeadTime":1,
            "WeekDayId":6
         }
      ]
   },
   "ErrorCode":0
}
```

Retrieves the details of a specific store location such as parent location, address, contact details, recent activities, supported delivery modes, and business hours. 


### Resource Information
| | |
--------- | ----------- |
URI | `/Location/Information/{MerchantId}/{{LocationId}}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/Information/{MerchantId}/{{LocationId}}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details
LocationId* | int | Location id for which you want to see the details


<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
DistancefromInputLatLong | float | Distance of the location from latitude and longitude. Available only if latitude and longitude are set for the location
IsParticipateInStock | boolean | Whether the location is participating in stock. The location appears on the storefront only if this is set to true 
IsOfflinneCheckoutEnabled | boolean | Whether offline ordering is available for the location. For example, orders placed through phone calls are offline orders.
IsDefaultLNG_LocationName | boolean | Whether the language is the default language of the current location or not
IsReversePickupEnabled | boolean | Whether reverse pickup is applicable for the product in case of returns







## Get Delivery Cities

> Sample Request

```html
https://www.martjack.com/developerapi/Location/f48fdd16-92db-4188-854d-1ecd9b62xxxx/GetCities
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "DeliveryCities": [
    {
      "DeliveryAreaID": 2654,
      "DeliveryCityID": 32,
      "DeliveryCityName": "Bangalore"
    },
    {
      "DeliveryAreaID": 2824,
      "DeliveryCityID": 195,
      "DeliveryCityName": "Hyderabad"
    },
    {
      "DeliveryAreaID": 3226,
      "DeliveryCityID": 241,
      "DeliveryCityName": "Karimnagar"
    },
    {
      "DeliveryAreaID": 3004,
      "DeliveryCityID": 250,
      "DeliveryCityName": "Khammam"
    },
    {
      "DeliveryAreaID": 2824,
      "DeliveryCityID": 263,
      "DeliveryCityName": "Kothagudem"
    }
  ],
  "ErrorCode": 0
}
```


Retrieves all the delivery cities configured for the merchant including the details such as city id, city name, and delivery area id.

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/{MerchantId}/GetCities`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/{MerchantId}/GetCities`

### Request Path Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details

<aside class="notice"> All parameters marked by * are mandatory.</aside>



## Add Delivery Area

Adds delivery areas to a city, state or country.






> Sample Request

```html
https://www.martjack.com/developerapi/Location/AddDeliveryArea/f48fdd16-92db-4188-854d-1ecd9b62d066

```

> Sample POST Request (RAW)

```json
MerchantId=f48fdd16-92db-4188-854d-1ecd9b62d066&pincodes=500090&deliveryAreaName=hyderabad&areaType=cn&isArchive=false&deliveryRefCode=hyd&areaTypeIDs=36618


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
URI | `/Location/AddDeliveryArea/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/AddDeliveryArea/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
pincodes | string | PIN codes that you want to associate to the delivery area. Specify each PIN code separating with comma 
deliveryAreaName | string | Name of the delivery area without space
areaType | enum | Type of delivery area. Value: `cn` for country, `ct` for city, `st` for state
areaTypeIDs | string | 
isArchive | boolean | Specify `false` to make the delivery area active
deliveryAreaID | int | Unique id of the delivery area



<aside class="notice"> All parameters marked by * are mandatory. </aside>








## Get Delivery Areas

> Sample Request

```html
https://www.martjack.com/developerapi/Location/DeliveryAreas/9820eca5-d11f-4df1-9b20-983a45eaxxxx/12343
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "DeliveryAreas": [
    {
      "DeliveryAreaID": 3746,
      "DeliveryAreaName": "Holisol_Delhi",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "Holisol_Del",
      "AreaTypeIDs": null
    },
    {
      "DeliveryAreaID": 2498,
      "DeliveryAreaName": "jammu and kashmir",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "J & K",
      "AreaTypeIDs": null
    },
    {
      "DeliveryAreaID": 2500,
      "DeliveryAreaName": "Haryana",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "haryana",
      "AreaTypeIDs": null
    },
    
    {
      "DeliveryAreaID": 2516,
      "DeliveryAreaName": "Uttar pradesh",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "UP",
      "AreaTypeIDs": null
    },
    {
      "DeliveryAreaID": 2520,
      "DeliveryAreaName": "uttarakhand",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "uttarakhand",
      "AreaTypeIDs": null
    },
    {
      "DeliveryAreaID": 2524,
      "DeliveryAreaName": "himachal pradesh",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "HP",
      "AreaTypeIDs": null
    },
    
    {
      "Pincodes": [
        "500032",
        "500055"
      ],
      "DeliveryAreaID": 2502,
      "DeliveryAreaName": "Telangana",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "TS",
      "AreaTypeIDs": null
    },
    {
      "Pincodes": [
        "560029",
        "560076"
      ],
      "DeliveryAreaID": 2506,
      "DeliveryAreaName": "Karnataka",
      "AreaType": "ST",
      "MerchantID": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
      "IsArchive": false,
      "DeliveryRefCode": "KA",
      "AreaTypeIDs": null
    }
  ],
  "ErrorCode": 0
}
```

Retrieves delivery areas of a specific location.

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/DeliveryAreas/{merchantId}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/DeliveryAreas/{merchantId}/{locationId}`

### Request Path Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details
locationId* | int | Unique id of the location for which you want to get delivery areas

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
DistancefromInputLatLong | float | Distance of the location from latitude and longitude. Available only if latitude and longitude are set for the location
IsParticipateInStock | boolean | Whether the location is participating in stock. The location appears on the storefront only if this is set to true
AdditionalDetails | json obj | Details of custom fields configured for the location





## Get Location Information

> Sample Request

```html
https://www.martjack.com/developerapi/Location/Information/9820eca5-d11f-4df1-9b20-983a45eaxxxx/16696
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "Location": {
    "DistancefromInputLatLong": 0,
    "ParentLocationID": 0,
    "LocationId": 16696,
    "LocationCode": "OCDEL",
    "LocationName": "Holisol Delhi",
    "Address1": "Holisol Logistics Pvt. Ltd, Plot No. #434/2, Phirni Road (Budh Bazar Road), Mundka New Delhi - 110041\r\n",
    "Address2": "",
    "City": "19759",
    "CityName": "New Delhi",
    "Area": "",
    "State": "DL",
    "StateName": "Delhi",
    "Country": "IN",
    "CountryName": "India",
    "Pin": "110019",
    "Contact1": "91-9266604xxx",
    "Contact2": "",
    "Description": "Holisol Warehouse",
    "Latitude": 28.6826,
    "Longitude": 77.022,
    "LocationType": null,
    "MerchantId": "9820eca5-d11f-4df1-9b20-983a45eaxxxx",
    "IsDistributionCenter": true,
    "EmailId": "customercare@example.com",
    "IsParticipateInStock": true,
    "IsDefaultLocation": true,
    "IsOfflinneCheckoutEnabled": false,
    "IsPointOfSale": true,
    "IsOfflineDeals": false,
    "IsInStorePickup": true,
    "Remarks": null,
    "CST": "HOLDCST",
    "VAT": "HOLVAT",
    "TINNo": "HOLTIN",
    "GSTINNO": "HOLGSTIN",
    "IsReversePickupEnabled": true,
    "IsDefaultLNG_LocationName": false,
    "IsDefaultLNG_Description": false,
    "IsDefaultLNG_Address1": false,
    "AdditionalDetails": [
      {
        "Key": "LocationId",
        "Value": "16696"
      },
      {
        "Key": "IsDispatchEnable",
        "Value": "False"
      },
      {
        "Key": "StoreAuthKey",
        "Value": ""
      },
      {
        "Key": "LastSeen",
        "Value": "1/1/2000 12:00:00 PM"
      },
      {
        "Key": "StoreOnTime",
        "Value": "00:00:00"
      },
      {
        "Key": "StoreOffTime",
        "Value": "00:00:00"
      },
      {
        "Key": "Lastlogout",
        "Value": "1/1/2000 12:00:00 PM"
      },
      {
        "Key": "VendorId",
        "Value": "00000000-0000-0000-0000-000000000000"
      },
      {
        "Key": "lastloginafterStoreOn",
        "Value": "1/1/2000 12:00:00 PM"
      },
      {
        "Key": "isEnablePromotion",
        "Value": "False"
      },
      {
        "Key": "isEnablePrivatelabel",
        "Value": "False"
      },
      {
        "Key": "MaxPromotionPerDay",
        "Value": "0"
      },
      {
        "Key": "isDineIn",
        "Value": "False"
      },
      {
        "Key": "LocationPrefix",
        "Value": "HD"
      },
      {
        "Key": "EnableReversePickup",
        "Value": "False"
      },
      {
        "Key": "AdvanceTaxPrefix",
        "Value": "HOLDATV"
      },
      {
        "Key": "isKDS",
        "Value": "False"
      },
      {
        "Key": "isDriverTracking",
        "Value": "False"
      },
      {
        "Key": "isStoreManagerApp",
        "Value": "False"
      },
      {
        "Key": "JDECode",
        "Value": ""
      },
      {
        "Key": "ChamsId",
        "Value": ""
      },
      {
        "Key": "TechnologyCode",
        "Value": ""
      },
      {
        "Key": "HomeDeliveryETA",
        "Value": "{\"StartTime\":\"01\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"HOURS\"}"
      },
      {
        "Key": "TakeAwayETA",
        "Value": "{\"StartTime\":\"0\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"MIN\"}"
      },
      {
        "Key": "PickupPointsETA",
        "Value": "{\"StartTime\":\"0\",\"EndTime\":\"0\",\"ETAType\":0,\"ETAUnits\":\"MIN\"}"
      }
    ],
    "DeliveryModes": [
      {
        "Mode": "Home Delivery Timings",
        "State": "False",
        "ReasonCode": ""
      }
    ],
    "StoreTimings": [
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9388,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 0
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9390,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 1
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9392,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 2
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9394,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 3
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9396,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 4
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9398,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 5
      },
      {
        "CloseLeadTime": 0,
        "Deliverymode": "L",
        "ID": 9400,
        "Locationid": 16696,
        "OffTime": "23:00:00",
        "OnTime": "00:00:00",
        "OpenLeadTime": 0,
        "WeekDayId": 6
      }
    ],
    "HomeDeliveryTimings": [
      {
        "CloseLeadTime": 10,
        "Deliverymode": "H",
        "ID": 20588,
        "Locationid": 0,
        "OffTime": "17:00:00",
        "OnTime": "12:00:00",
        "OpenLeadTime": 1,
        "WeekDayId": 1
      }
    ],
    "TakeawayTimings": []
  },
  "ErrorCode": 0
}
```

Retrieves the details of a specific location.

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/Information/{merchantId}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/Information/{merchantId}/{locationId}`


### Request Path Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant
locationId* | int | Unique id of the location that you want to fetch

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
DistancefromInputLatLong | float | Distance of the location from latitude and longitude. Available only if latitude and longitude are set for the location
AdditionalDetails | json obj | Details of custom fields configured for the location 
IsParticipateInStock | boolean | Whether the location is participating in stock. The location appears on the storefront only if this is set to true
IsOfflinneCheckoutEnabled | boolean | Whether offline ordering is available for the location
IsDefaultLNG_LocationName | boolean | Whether the language is default language of the location or not




## Get Reason Codes

> Sample Request

```html
https://www.martjack.com/developerapi/Location/ReasonCodes/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ReasonCodes": [
    {
      "Description": "Operational Reasons",
      "ReasonCode": "OR"
    },
    {
      "Description": "Technical Reasons",
      "ReasonCode": "TR"
    }
  ],
  "ErrorCode": 0
}
```

Retrieves configured reason codes for updating delivery modes of a store - open for available and close for unavailable. For example, you need to pass the specific reason code while updating the availability of a delivery mode of a store such as home delivery, or in-store pickup.


### Resource Information
| | |
--------- | ----------- |
URI | `/Location/ReasonCodes/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/ReasonCodes/{merchantId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant

<aside class="notice"> All parameters marked by * are mandatory.</aside>





## Update Order ETA

> Sample Request

```html
https://www.martjack.com/developerapi/Location/UpdateLocationETA/f48fdd16-92db-4188-854d-1ecd9b62e234/ALL
```

> Sample POST Request

```json
InputFormat=application/json&MerchantId=f48fdd16-92db-4188-854d-1ecd9b62e234&ETAfor=ALL&InputData={  
   "LocationCode":"110",
   "HomeDeliveryETA":{  
      "StartTime":"10",
      "EndTime":"20",
      "ETAType":0,
      "ETAUnits":"Min"
   },
   "TakeAwayETA":{  
      "StartTime":"10",
      "EndTime":"50",
      "ETAType":0,
      "ETAUnits":"Min"
   },
   "PickupPointsETA":{  
      "StartTime":"10",
      "EndTime":"30",
      "ETAType":0,
      "ETAUnits":"Min"
   }
}
```

> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Location ETA details Updated Successfully",
	"ErrorCode": 0
}

```

Lets you add or update order ETA (Estimated Time of Arrival) for a location including the type of delivery location with location code.


<aside class="notice"> The ETA of the only type specified in the URL will be updated (If you do not want to update all,). So, you have to provide the specific ETA body that you want to update. </aside>


### Resource Information

| | |
--------- | ----------- |
URI | `/Location/UpdateLocationETA/{merchantId}/{OrderDeliveryType}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/UpdateLocationETA/{merchantId}/{OrderDeliveryType}`

### Request Query Parameters
Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
OrderDeliveryType | enum | Type of order delivery. Supported values: `H` for Home Delivery, `T` for Takeaway, `P` for store pickup, and `ALL` if all types are supported

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
LocationCode* | string | Location code for which you want to update order ETA
HomeDeliveryETA* | obj | Updates ETA for home delivery orders
TakeAwayETA | obj | Updated ETA for take away orders
PickupPointsETA | obj | Updates ETA for store pick up orders
StartTime* | string | Estimated minimum delivery time as per the selected ETA units
EndTime* | string | Estimated maximum delivery time as per the selected ETA units
ETAType* | enum | Specify `0` for a fixed ETA. For example 2 days from the ordered date. <br> Specify `1` for ETA within a specified period from the ordered date. For example, 5-7 days
ETAUnits* | enum | Preferred unit for time - minutes, hours, or days. Value: `Min`, `Hours`, `Days`

<aside class="notice"> All parameters marked by * are mandatory.</aside>





## Get Location ETA

> Sample Request

```html
https://www.martjack.com/developerapi/Location/Information/f48fdd16-92db-4188-854d-1ecd9b62e234/110/ALL
```

> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Successful",
	"ErrorCode": 0,
	"LocationETA": {
    	"HomeDeliveryETA": {
        	"ETAType": 1,
        	"ETAUnits": "MIN",
        	"EndTime": "20",
        	"StartTime": "10"
    	},
    	"LocationCode": "BTM",
    	"PickupPointsEta": {
        	"ETAType": 1,
        	"ETAUnits": "MIN",
        	"EndTime": "30",
        	"StartTime": "15"
    	},
    	"TakeAwayETA": {
        	"ETAType": 0,
        	"ETAUnits": "MIN",
        	"EndTime": "0",
        	"StartTime": "45"
    	}
	}
}

```

Retrieves Estimated Time of Arrival (ETA) of an order for a specific location and the type of location delivery with location code.


### Resource Information

| | |
--------- | ----------- |
URI | `/Location/Information/{merchantId}/{LocationCode}/{OrderDeliveryType}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/Information/{merchantId}/{LocationCode}/{OrderDeliveryType}`

### Request Query Parameters

Parameter | Type | Description
-------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
LocationCode* | string | Location code for which you want to fetch order ETA details
OrderDeliveryType* | string | Specific order type for which you want to fetch ETA. Values `H` for HomeDelivery, `T` for TakeAway, `P` for Pickup, `ALL` for all types

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
ETAType | enum | Specifies whether a fixed ETA or not. `0` for a fixed ETA and `1` for ETA between `StartTime` and `EndTime`
ETAUnits | enum | The unit of measurement of time for the ETA for `StartTime` and `EndTime`. It could be `Min` (for minutes), `Hours`, or `Days` 



## Get Delivery Area PINCodes & Area Details

Retrieves the details of delivery areas along with PINCodes based on the input parameters.


> Sample Request

```html
https://www.martjack.com/developerapi/Location/f48fdd16-92db-4188-854d-1ecd9b62d066/SearchDeliveryPincodes

```

> Sample POST Request (RAW)

```json

MerchantId=f48fdd16-92db-4188-854d-1ecd9b62d066&countryid=IN&stateid=HR&cityid=58&pincodes=500090&deliveryareaid=1231


```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "DeliveryAreas": [
        {
            "Pincodes": [
                "400062",
                "400064",
                "400068",
                "400072",
                "400092"
            ],
            "DeliveryAreaID": 3088,
            "DeliveryAreaName": "Mumbai",
            "AreaType": "State",
            "MerchantID": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "IsArchive": false,
            "DeliveryRefCode": "mumbai",
            "AreaTypeIDs": null
        }
]
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Location/{MerchantId}/SearchDeliveryPincodes`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/{MerchantId}/SearchDeliveryPincodes`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
countryid | string | Alpha-2 code of the country for which you want to fetch delivery areas. Example: IN (for India), AU (for Australia), and BR (for Brazil)
stateid | string | Fetch delivery areas by State code. For example, KA for Karnataka, AR for Arunachal Pradesh, TS for Telangana 
cityid | int | Fetch delivery areas by city id. Pass the unique id of the city
pincodes | string | Fetch delivery areas by area pincodes 
deliveryareaid | string | Specify the delivery area id to fetch the details of that specific delivery area





<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Get Location Log

Retrieves logs of the merchant for a specific location.




> Sample Request

```html
https://www.martjack.com/developerapi/Location/Log/f48fdd16-92db-4188-854d-1ecd9b62d066/1001/02-02-2018/01-01-2019

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "StoreLog": [
        {
            "locationname": "Sample Mumbai store1",
            "locationcode": "1001",
            "logtype": "StoreTime",
            "logdetails": "Home Delivery Timings",
            "logdetailsvalue": "",
            "logdatetime": "11/20/2018 6:29:14 PM",
            "user": "hypertown@cj_test.com",
            "reasoncode": "",
            "weekdayid": "0",
            "weekdayname": "Sunday",
            "starttime": "17:00:00",
            "endtime": "02:30:00",
            "startleadtime": "30",
            "endleadtime": "30"
        },
        {
            "locationname": "Sample Mumbai store1",
            "locationcode": "1001",
            "logtype": "StoreTime",
            "logdetails": "Home Delivery Timings",
            "logdetailsvalue": "",
            "logdatetime": "11/20/2018 5:57:45 PM",
            "user": "hypertown@cj_test.com",
            "reasoncode": "",
            "weekdayid": "0",
            "weekdayname": "Sunday",
            "starttime": "17:00:00",
            "endtime": "02:30:00",
            "startleadtime": "30",
            "endleadtime": "30"
        }
]
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Location/Log/{merchantId}/{locationCode}/{fromDate}/{toDate}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`{host}/developerapi/Location/Log/{merchantId}/{locationCode}/{fromDate}/{toDate}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
locationCode* | string | Location code for which you want to see the logistics
fromDate* | date | Specify the duration for which you want to see the log in `fromDate` and `toDate`. Specify the date in `MM-DD-YYYY` format
toDate* | date | Specify the duration for which you want to see the log in `fromDate` and `toDate`. Specify the date in `MM-DD-YYYY` format


<aside class="notice"> All parameters marked by * are mandatory. </aside>





