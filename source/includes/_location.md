# Location

Location is a determination of the place where a product is available or shipped from. It could be a physical store or just a warehouse. This resource contains APIs related to accessing and managing store/warehouse location details.


## Store Delivery Area Mapping

> Sample Request

```html
https://www.martjack.com/developerapi/Location/StoreDeliveryAreaMapping/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
{
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
URI | `/Location/StoreDeliveryAreaMapping/{{MerchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/StoreDeliveryAreaMapping/{{MerchantId}}`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
LocationRefCode | string | The location reference code that you want to map to a delivery area
DeliveryType | string  | The type of delivery of the location.  Value: H (Home delivery), S (store pickup), N (for both pickup and delivery)
AreaRefCode | string | Delivery area reference code that you want to assign
Operation | string | Value: add, remove. Specify `add` delivery address to a location, 	`remove` to delete




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
      "path":"/LocationName",
      "value":"ADELIYA1"
   },
   {  
      "op":"replace",
      "path":"/Latitude",
      "value":"36.5"
   },
   {  
      "op":"replace",
      "path":"/AdditionalDetails",
      "value":[  
         {  
            "Key":"isKDSEnabled",
            "Value":"True"
         }
      ]
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
URI | `/Location/UpdateLocation/{{MerchantId}}/{LocationrefCode}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | PATCH
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/UpdateLocation/{{MerchantId}}/{LocationrefCode}`


### Header Modification

Pass `content-type` as `application/json-patch+json`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
op* | string | Specify `replace` to update the existing information
path | string | Path of the key
value | string | New value of the specified path


## Fetch Locations

> Sample Request

```html
https://www.martjack.com/developerapi/Location/f48fdd16-92db-4188-854d-1ecd9b62xxxx/Search

```

> Sample POST Request

```json


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
      "Description": "Holisol Warehouse bangalore",
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

Retrieves the details of locations of a specific delivery area.


### Resource Information
| | |
--------- | ----------- |
URI | `/Location/{{MerchantId}}/Search`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/UpdateLocation/{{MerchantId}}/Search`



### Path Parameters

Parameter | Type | Description
--------- | ---- | ----
merchantId* | string | Unique GUID of the merchant


### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
zipcode*	| string | Area PIN code that you want to fetch
deliveryarea* | string | Name of the delivery area. Example: Karnataka
deliveryareaId*	| int | Unique id of the delivery area 
outputfield	| | 






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
URI | `/Location/Information/{{MerchantId}}/{{LocationId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/Information/{{MerchantId}}/{{LocationId}}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details
LocationId* | int | Location id for which you want to see the details


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


Retrieves all the configured delivery cities of the merchant with details such as city id, city name, and delivery area id.

### Resource Information
| | |
--------- | ----------- |
URI | `/Location/Information/{{MerchantId}}/GetCities`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/Information/{{MerchantId}}/GetCities`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details







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
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/DeliveryAreas/{merchantId}/{locationId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant for which you want to fetch location details
locationId* | int | Unique id of the location for which you want to get delivery areas







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
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/Information/{merchantId}/{locationId}`


### Request Path Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant
locationId* | int | Unique id of the location that you want to fetch



## Get Reason Codes

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



### Resource Information
| | |
--------- | ----------- |
URI | `/Location/ReasonCodes/{merchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Location/ReasonCodes/{merchantId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string | The unique id (GUID) of the merchant





## Response Codes

Code | Description
---- | -----------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1009 | No Record Found
1030 | Service is not Authorized