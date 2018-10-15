# Location



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

Retrieves the entire details of a specific location such as parent location, address & contact details, recent activities, supported delivery modes, and operation timing. 


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
Parameter | Description
--------- | -----------
MerchantId | The unique id (GUID) of the merchant concerning the location that you want to fetch
LocationId | Unique location id for which you want to see details


