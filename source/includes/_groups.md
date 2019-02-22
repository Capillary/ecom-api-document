# Customer Groups





## Add User to a Customer Group


Lets you add a user to a specific customer group.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/Consumer/9820eca5-d11f-4df1-9b20-983a45ea9631/32124/9820eca5-d11f-4df1-9b20-983a45ea9631/Add

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Customer Created Successfully",
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/Consumer/{merchantId}/{userGroupId}/{userId}/Add`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/Consumer/{merchantId}/{userGroupId}/{userId}/Add`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchantId
userGroupId* | int | Unique id of the customer group in which you want to add customer
userId* | string | Unique GUID of the customer that you want to add

<aside class="notice">All parameters marked by * are mandatory. </aside>


## Get User Group Details

Retrieves the details of a specific user group based on the user group id passed.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/9820eca5-d11f-4df1-9b20-983a45ea9631/8714

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "CostumerGroup": [
    {
      "UserGroupId": 8714,
      "UserGroupName": "NewUser",
      "GroupDescription": "NewGroup",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1498093383000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 0
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/{merchantId}/{userGroupId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/{merchantId}/{userGroupId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
userGroupId* | int | Unique id of the customer group that you want to fetch














## Get Users of a Group

Retrieves the details all members of a specific group based on the group id passed.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/Consumer/9820eca5-d11f-4df1-9b20-983a45ea9631/{userGroupId}

```




> Sample Response

```json

{
  "messageCode": "1004",
  "Message": "Successful",
  "Customers": [
    {
      "UserProfiles": null,
      "UserInfoId": "0597c6ee-eb13-42a2-bbdf-38690b272cc1",
      "UserId": "31a7d819-e4ab-4c2d-985a-5ee9a003d694",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserName": "tom.sawyer@capillarytech.com",
      "FirstName": "Tom",
      "LastName": "Sawyer",
      "PostalAddress": "",
      "AlternateEmail": "",
      "City": "32",
      "Pin": "560001",
      "State": "KA",
      "Country": "IN",
      "PhoneNo": "",
      "Street": "MG Road",
      "MobileNo": "917400000000",
      "BirthDate": "1/1/1993 12:00:00 AM",
      "Gender": "male",
      "Occupation": "",
      "Industry": "",
      "OtherArea": "",
      "CountryName": "India",
      "StateName": "Karnataka",
      "CityName": "Bangalore",
      "AreaName": "MG Road",
      "OtherCity": "OtherCity",
      "IsReceiveOffers": false,
      "Password": null,
      "ConfirmPassword": null,
      "Countries": null,
      "States": null,
      "CommunicationType": null,
      "MarketingNotificationType": null
    },
    {
      "UserProfiles": null,
      "UserInfoId": "9f39c75e-ca82-4284-a1a8-05668a3a9941",
      "UserId": "0025fc54-a2d2-4ba8-800f-3c0ac91e9385",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserName": "Jim.carvan@example.com",
      "FirstName": "Jim",
      "LastName": "Carvan",
      "PostalAddress": "",
      "AlternateEmail": "",
      "City": "554",
      "Pin": "",
      "State": "TG",
      "Country": "IN",
      "PhoneNo": "-",
      "Street": "",
      "MobileNo": "91-9898000000",
      "BirthDate": "1/1/1900 12:00:00 AM",
      "Gender": "M",
      "Occupation": "",
      "Industry": "",
      "OtherArea": "",
      "CountryName": "India",
      "StateName": "Telangana",
      "CityName": "Other",
      "AreaName": "",
      "OtherCity": "554",
      "IsReceiveOffers": false,
      "Password": null,
      "ConfirmPassword": null,
      "Countries": null,
      "States": null,
      "CommunicationType": null,
      "MarketingNotificationType": null
    },
    {
      "UserProfiles": null,
      "UserInfoId": "6fa05537-c88e-4339-833e-45fd0eb2e67b",
      "UserId": "0cdaacfc-b705-4803-9864-56d169d9c65b",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "UserName": "d@p.jo",
      "FirstName": "fn",
      "LastName": "ln",
      "PostalAddress": "zs",
      "AlternateEmail": "",
      "City": "554",
      "Pin": "560076",
      "State": "Bihar",
      "Country": "IN",
      "PhoneNo": "",
      "Street": "",
      "MobileNo": "919843111111",
      "BirthDate": "1/1/0001 12:00:00 AM",
      "Gender": "",
      "Occupation": "",
      "Industry": "",
      "OtherArea": "",
      "CountryName": "India",
      "StateName": "Bihar",
      "CityName": "Other",
      "AreaName": "",
      "OtherCity": "",
      "IsReceiveOffers": false,
      "Password": null,
      "ConfirmPassword": null,
      "Countries": null,
      "States": null,
      "CommunicationType": null,
      "MarketingNotificationType": null
    }
  ],
  "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/Consumer/{merchantId}/{userGroupId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/Consumer/{merchantId}/{userGroupId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchantId
userGroupId* | int | Unique id of the user group

<aside class="notice"> All parameters marked by * are mandatory.</aside>




## Get Customer Groups by User ID

Retrieves the list of all groups in which a specific user is available based on the user id passed.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/Group/9820eca5-d11f-4df1-9b20-983a45ea9631/31a7d819-e4ab-4c2d-985a-5ee9a003d694

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "CostumerGroup": [
    {
      "UserGroupId": 8714,
      "UserGroupName": "NewUser",
      "GroupDescription": "NewGroup",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1498093383000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 2
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/Group/{merchantId}/{userId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/Group/{merchantId}/{userId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchantId
userId* | string | Unique GUID of the user for which you want to fetch user groups

<aside class="notice">All parameters marked by * are mandatory.</aside>





## Get Customer Groups of a Merchant

Retrieves all the customer groups created for the merchant.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/9820eca5-d11f-4df1-9b20-983a45ea9631

```




> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "CostumerGroup": [
    {
      "UserGroupId": 7990,
      "UserGroupName": "Group1",
      "GroupDescription": "Default",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1457510943000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 143
    },
    {
      "UserGroupId": 8188,
      "UserGroupName": "Group2",
      "GroupDescription": "Testing Purpose",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1465542242000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 32
    },
    {
      "UserGroupId": 8496,
      "UserGroupName": "Group3",
      "GroupDescription": "hi",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1488417120000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 2
    },
    {
      "UserGroupId": 9313,
      "UserGroupName": "Group3",
      "GroupDescription": "Testing",
      "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631",
      "CreatedDate": "/Date(1547103219000+0530)/",
      "IsActive": false,
      "MessageDate": "/Date(-2208988800000)/",
      "UpdatedDate": "/Date(-2208988800000)/",
      "MemberCount": 0
    }
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/{merchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant



### Response Parameters

Parameter | Type | Description
-------- | ----- | -----------
CreatedDate | date | Date when the group is created 
IsActive | enum | States whether the group is true or false
MessageDate | date |
UpdatedDate | date | 
MemberCount | int | Total members in the group




## Remove User

Removes a specific member from the group.






> Sample Request

```html
https://www.martjack.com/developerapi/CustomerGroups/Consumer/9820eca5-d11f-4df1-9b20-983a45ea9631/8714/0cdaacfc-b705-4803-9864-56d199d9c65b/Remove

```




> Sample Response

```json

{
  "messageCode": "1004",
  "Message": "Deleted Successfully",
  "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/CustomerGroups/Consumer/{merchantId}/{userGroupId}/{userId}/Remove`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/CustomerGroups/Consumer/{merchantId}/{userGroupId}/{userId}/Remove`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
userGroupId* | int | Unique group id from which you want to remove a user
userId* | string | Unique GUID of the user that you want to remove

<aside class="notice">All parameters marked by * are mandatory.</aside>










