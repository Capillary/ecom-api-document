# Customer
A customer is an individual who buys products from a merchant's online store. This resource consists of APIs to create new customer accounts and manage their details and preferences.



## Create Customer Account

This API lets you create a new user account on the Capillary's Anywhere Commerce Platform for a specific merchant.

> Sample Request

```html
https://www.martjack.com/developerapi/Customer/12345678-1234-1234-1234-123456789xxx/Create
```

> Sample POST Request

```json
{  
   "customer":{  
      "UserName":"tom.sawyer@capillarytech.com",
      "FirstName":"Tom",
      "LastName":"Sawyer",
      "PostalAddress":"100, Santa Plaza",
      "AlternateEmail":"alternateEmail@gmail.com",
      "City":"3451",
      "Pin":"560001",
      "State":"KA",
      "Country":"IN",
      "Street":"MG Road",
      "MobileNo":"917000000000",
      "BirthDate":"1/1/1994 12:00:00",
      "Gender":"F",
      "Occupation":"Professor",
      "Industry":"Education",
      "OtherArea":"otherArea",
      "CountryName":"India",
      "StateName":"Karnataka",
      "CityName":"Bangalore",
      "AreaName":"Area Name",
      "OtherCity":"OtherCity",
      "IsReceiveOffers":false,
      "States":null,
      "merchantId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
      "Password":"ABG-704@cp",
      "CommunicationType":null
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Customer": {
        "UserProfiles": null,
        "UserInfoId": "00000000-0000-0000-0000-000000000000",
        "UserId": "9b0df0ca-101c-4525-ac55-33829319085a",
        "MerchantId": "81e77da2-723b-483d-8c0d-49f800cxxxx",
        "UserName": "tom.sawyer@capillarytech.com",
        "FirstName": "Tom",
        "LastName": "Sawyer",
        "PostalAddress": "100, Santa Plaza",
        "AlternateEmail": "alternateEmail@gmail.com",
        "City": "3451",
        "Pin": "560001",
        "State": "KA",
        "Country": "IN",
        "Street": "MG Road",
        "MobileNo": "917000000000",
        "BirthDate": "1/1/1994 12:00:00 PM",
        "Gender": "M",
        "Occupation": "Job",
        "Industry": "Private",
        "OtherArea": "otherArea",
        "CountryName": "India",
        "StateName": "Karnataka",
        "CityName": "Bangalore",
        "AreaName": "Area Name",
        "OtherCity": "OtherCity",
        "IsReceiveOffers": false,
        "Password": null,
        "ConfirmPassword": null,
        "Countries": null,
        "States": null,
        "CommunicationType": "nochannel",
        "MarketingNotificationType": "sms|email|push"
    },
    "ErrorCode": 0
}

```


### Resource Information
| | |
--------- | ----------- | 
URI | `Customer/{{merchantId}}/Create`
Response Formats | JSON
HTTP Method | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details





### Request URL
`https://{host}/developerapi/Customer/{merchantId}/Create`

### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
UserName* | string | The unique identifier of the customer as configured for the merchant. It could be email, mobile, or any other identifier
merchantId* | string | The unique id (GUID) of the merchant in which you want to register customer
Password* | string |  Password of the customer account. Password policy is as configured for the merchant on the Merchant Panel
CommunicationType |enum | The preferred communication channel(s) of the customer. Possible Values: SMS, EMAIL
City | int | Unique code of the city (as saved in the system) such as 0562 (for Agra), and 250 (Victoria)
CityName | string | Full name of the city. Example: Bangalore, Delhi, Tokyo, Singapore and Paris
State | string | State's postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
StateName | string | Full name of the state. Example: Karnataka, California, and Indiana
Country | string | alpha-2 code of the country. Example: IN (for India), AU (for Australia), and BR (for Brazil)
CountryName | string | Full name of the country. Example: India, Australia, and Brazil
IsReceiveOffers | boolean | For merchant with CRM enabled, Subscribe (`true`) or unsubscribe (`false`) customer's mobile number/email id in CRM

<aside class=notice>All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.



Parameter | Type | Description
-------- | ----- | ----------
UserProfiles | array | Customer level custom field details
UserInfoId | string | GUID generated for the customer internally. UserInfoId is used in APIs like customer update along with the UserId
MarketingNotificationType | string | 




## Register Customer through OTP

> Sample Request

```html

```

> Sample POST Request

```json

```

> Sample Response

```json

```


### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | Yes
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Customer/{merchantId}`









## Reset Password



> Sample Request

```html
https://www.martjack.com/developerapi/Customer/f48fdd16-92db-4188-854d-1ecd9b62xxxx/132d3c1d-7d71-4b87-9a69-a4d216d63xxx/ChangePassword=1234
```



> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Your Password changed Successfully",
   "ErrorCode":0
}
```

Resets the password of the customer's current account. 

<aside class="notice"> No POST request payload is required for this API </aside>


### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/{UserId}/ChangePassword={new password}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes


* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL
`https://{host}/developerapi/Customer/{merchantId}/{UserId}/ChangePassword={new password}`

### Request Path Parameters

Parameter | Type | Description
-------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant associated to the user account
UserId* | string | Unique GUID of the user for which password needs to be changed
newPassword* | string | New password that you want to have for the account

<aside class=notice>All parameters marked by * are mandatory.</aside>




## Customer Login (with OTP)


> Sample Request

```html
https://www.martjack.com/developerapi/Customer/81e77da2-723b-483d-8c0d-49f800c1exxx/LoginWithOTP/true?username=599999999&oTP=2222
```

> Sample POST Request

```json
{
"OTP": "2222", 
"UserName": 599999999
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Logged In successfully",
   "Token":{  
      "AccessToken":"i1z1ouqyb3roglpei1vmpowe",
      "issued_at":"/Date(1533029929318+0530)/",
      "UserId":"132d3c1d-7d71-4b87-9a69-a4d216d63xxx",
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1exxx"
   },
   "ErrorCode":0
}
```


Authorizes login OTP of a registered customer.

<aside class="notice">
When a customer logs in, he receives a unique `UserId` which is required for using customer APIs. 

The customer has to be logged in to his account to perform to perform any task tasks such as fetching customer details, modifying customer details or updating profile attributes. 

</aside>


### Resource Information
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/LoginWithOTP/true?username={username}&oTP={OTP}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/developerapi/Customer/{merchantId}/LoginWithOTP/true?username={username}&oTP={OTP}`

### Additional Headers Required

Header | Description
------ | -----------
AccessToken | Access token of the current session (generate using GET AccessToken API)
otptoken | OTP token of the issued OTP (Generated in the SendOTP API response)

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
username* | string | Username of the customer account
oTP* | int | Unique verification code received to the customer's registered mobile number or email id (through SendOTP API)

<aside class=notice>All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
AccessToken | string | An object or string that identifies the current user. Access token is required for making customer related API calls such as validate token, update customer details, update profile attributes, and so on
issued_at | date-time | The date and time when the access token was generated for the user




## Customer Login (with Credentials)


> Sample Request

```html
https://www.martjack.com/developerapi/Customer/12345678-1234-1234-1234-1234567890AB/login
```

> Sample POST Request

```json
{  
   "username":"tom.sawyer@capillarytech.com",
   "password":"123456!"
}
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Logged In successfully",
   "Token":{  
      "AccessToken":"i1z1ouqyb3roglpei1vmpowe",
      "issued_at":"/Date(1533029929318+0530)/",
      "UserId":"132d3c1d-7d71-4b87-9a69-a4d216d63xxx",
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1exxx"
   },
   "ErrorCode":0
}
```


Authorizes login of a registered user on the merchant's e-commerce store. Once the customer logs in with the OTP, he receives a unique `UserId` which is required to make customer API calls. 

<aside class="notice">The customer has to be logged in to his account to perform to perform any task tasks such as fetching customer details, modifying customer details or updating profile attributes. 

.</aside>

### Resource Information
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/login`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Customer/{merchantId}/login`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -----------
username* | string | Username of the customer account
password* | string | Password of the customer account

<aside class=notice>All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
AccessToken | string | An object or string that identifies the current user. Access token is required for making customer related API calls such as validate token, update customer details, update profile attributes, and so on
issued_at | date-time | The date and time when the access token was generated for the user



## Customer Login with Third Party Provider

Lets you login customers to the merchant store with a third party provider.

> Sample Request

```html
http://martjack.com/developerapi/Customer/9820eca5-d11f-4df1-9b20-983a45ea9631/LoginWithThirdPartyProvider
```

> Sample POST Request

```json
{
   "provider":"gmail",
   "profileId":"example123",
   "email":"tom.sawyer@capillarytech.com",
   "MobileNo":"91-7411600000",
   "FirstName":"Tom",
   "LastName":"Sawyer",
   "gender":"M",
   "loginId":"tom.sawyer@capillarytech.com",
   "subscribeToOffers":"true"
}
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Logged In successfully",
  "Token": {
    "AccessToken": "50p2yjcmiizlfyltl3vrltvj",
    "issued_at": "/Date(1543483006985+0530)/",
    "UserId": "5820c36d-7148-4154-afa7-32b0798f21f6",
    "MerchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631"
  },
  "ErrorCode": 0
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/LoginWithThirdPartyProvider`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Customer/{merchantId}/LoginWithThirdPartyProvider`

### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
provider | string | Name of the third party login service provider
profileId | string | Unique profile id of the service provider
email | string | Email id of the user registered with the provider
firstName | string | First name of the user
lastName | string | Last name of the user	
gender | string | `M` for make and `F` for female
loginId	| string | Log in id of the user
mobileNo | string | Registered mobile number of the user with the provider
subscribeToOffers | enum | Specify `true` to subscribe user to merchant offers, else specify `false`

<aside class=notice>All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
AccessToken | string | An object or string that identifies the current user. Access token is required for making customer related API calls such as validate token, update customer details, update profile attributes, and so on
issued_at | date-time | The date and time when the access token was generated for the user




## Customer Logout

> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Customer/81e77da2-723b-483d-8c0d-49f800c1exxx/Logout

```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Logout Successfully",
  "ErrorCode": 0
}
```

Logs out current user. No POST body is required for this API.

### Resource Information

| | |
--------- | ----------- |
URI | `/Customer/{{MerchantId}}/Logout`
Response Formats | JSON
HTTP Methods | POST (No POST body is required)
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/developerapi/Customer/{merchantId}/Logout`


### Additional Header Required

Header | Description
------ | ------
accesstoken* | Access token of the logged in user that you want to logout


### Request Parameters
Parameter | Type | Description
--------- | ----- | ------
merchantId* | string | The unique id (GUID) of the merchant from which you want to logout user


<aside class=notice>All parameters and headers marked by * are mandatory.</aside>






## Get Access Token

> Sample POST Request

```html
 https://www.martjack.com/developerapi/Customer/GetAccessToken/6c57599f-2c43-4c82-806a-e07c3410xxx
```



> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Logged In successfully",
  "Token": {
    "AccessToken": "gmah4uer4x5clfm1pxczhxxx",
    "issued_at": "/Date(1534759560943+0530)/",
    "UserId": "f72da7b6-9566-4c99-b0e6-aa882e7acxxx",
    "MerchantId": "6c57599f-2c43-4c82-806a-e07c3410xxx"
  },
  "ErrorCode": 0
}
```


Creates a dummy access token for a user who did not log in to the merchant store. No POST body is required for this API.

### Resource Information

| | |
--------- | ----------- |
URI | `Customer/GetAccessToken/{MerchantId}`
Response Formats | JSON
HTTP Methods | POST (No POST body is required)
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Customer/GetAccessToken/{MerchantId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -------
merchantId* | string | The unique id (GUID) of the merchant

<aside class="notice"> All parameters marked by * are mandatory</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
AccessToken | string | An object or string that identifies the current session
issued_at | date-time | Date and time when the access token is generated



## Validate Access Token

> Sample POST Request

```html
https://www.martjack.com/developerapi/Customer/81e77da2-723b-483d-8c0d-49f800c1exxx/gmah4uer4x5clfm1pxczhxxx/ValidateToken
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "SessionValid": "true",
    "ErrorCode": 0
}
```

Verifies if the provided access token is valid or invalid.

### Resource Information

| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/{accesstoken}/ValidateToken`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Customer/{merchantId}/{accesstoken}/ValidateToken`

### Request Parameters
Parameter | Type | Description
--------- | ----- | ------
merchantId* | string | The unique id (GUID) of the merchant in which you want to validate access token
accesstoken* | string | The access token generated for a user session (use `/Customer/GetAccessToken/` to get access token of a user session)

<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Fetch Customers (Search)


> Sample Request

```html
https://www.martjack.com/developerapi/Customer/f48fdd16-92db-4188-854d-1ecd9b62xxxx/Search
```

> Sample POST Request

```json
{  
   "customerSearch":{  
      "UserName":"tom"
   }
}
```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Customers": [
        {
            "UserProfiles": [],
            "UserInfoId": "4370d39c-d5e6-44e3-8fa3-2e3caf9432bf",
            "UserId": "07e8f0eb-8c5d-4ad7-ab6e-ca7a72687d63",
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62xxxx",
            "UserName": "tom.sawyer@example.com",
            "FirstName": "Pallav",
            "LastName": "Kumar",
            "PostalAddress": "silkboard",
            "AlternateEmail": "",
            "City": "32",
            "Pin": "560068",
            "State": "KA",
            "Country": "IN",
            "PhoneNo": "91-",
            "Street": "",
            "MobileNo": "91-7411639213",
            "BirthDate": "1/1/1900",
            "Gender": "",
            "Occupation": "",
            "Industry": "",
            "OtherArea": "silkboard",
            "CountryName": "India",
            "StateName": "Karnataka",
            "CityName": "Bangalore",
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

Retrieves customers based on the search keyword (containing the search keyword )

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/Search`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Customer/{merchantId}/Search`

### Request Body Parameters

Parameter | Type | Description
-------- | ---- | -----------
UserName* | string | Fetches all customers matching the specified keyword in the username

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
UserProfiles | array | Customer level custom field details
UserInfoId | string | GUID generated for the customer internally. UserInfoId is used in APIs like customer update along with the UserId
CommunicationType | string | The preferred communication channel(s) of the customer. Possible Values: SMS, EMAIL
MarketingNotificationType | string | 




## Get Customer Details
> Sample Request

```html
https://www.martjack.com/developerapi/Customer/81e77da2-723b-483d-8c0d-49f800c1xxxx/132d3c1d-7d71-4b87-9a69-a4d216d634fa
```

> Sample Response

```json
{  
   "messageCode":"1004",
   "Message":"Successful",
   "Customer":{  
      "UserProfiles":[  
         {  
            "UserId":"132d3c1d-7d71-4b87-9a69-a4d216d634fa",
            "ProfileAttributeId":660,
            "ProfileAttributeValueId":0,
            "ProfileAttributeName":"Favorite Game",
            "ProfileAttributeValue":"Football"
         }
      ],
      "UserInfoId":"08a0dffe-86f0-45b6-9fae-df276fe9abb5",
      "UserId":"132d3c1d-7d71-4b87-9a69-a4d216d634fa",
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1xxxx",
      "UserName":"tom.sawyer@capillarytech.com",
      "FirstName":"Tom",
      "LastName":"Sawyer",
      "PostalAddress":"",
      "AlternateEmail":"",
      "City":"32",
      "Pin":"560001",
      "State":"KA",
      "Country":"IN",
      "PhoneNo":"",
      "Street":"MG Road",
      "MobileNo":"917000000000",
      "BirthDate":"1/1/1994",
      "Gender":"male",
      "Occupation":"Professor",
      "Industry":"Education",
      "OtherArea":"",
      "CountryName":"India",
      "StateName":"Karnataka",
      "CityName":"Bangalore",
      "AreaName":"MG Road",
      "OtherCity":"OtherCity",
      "IsReceiveOffers":false,
      "Password":null,
      "ConfirmPassword":null,
      "Countries":null,
      "States":null,
      "CommunicationType":"nochannel",
      "MarketingNotificationType":"sms|email|push"
   },
   "ErrorCode":0
}

```

Retrieves the details of a specific customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/{UserId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Customer/{merchantId}/{UserId}`

### Request Parameters
Parameter | Type | Description
--------- | ----- | ------
merchantId* | string | The unique id (GUID) of the merchant account from which you want to fetch customer details
UserId* | string | The unique user identifier of the customer whose details need to be retrieved

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
UserProfiles | array | Customer level custom field details
UserInfoId | string | GUID generated for the customer internally. UserInfoId is used in APIs like customer update along with the UserId
CommunicationType | string | The preferred communication channel(s) of the customer. Possible Values: SMS, EMAIL
MarketingNotificationType | string | 



### Success/Error Codes

Status Code | Description
--------- | ------------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1009 | No Record Found
1016 | Invalid Input
1030 | Service is not Authorized



## Update Customer Details

> Sample Request

```html
https://www.martjack.com/developerapi/Customer/7c778337-4652-4944-934f-09e0fe56xxxx/Update
```

> Sample POST Request

```json
{  
   "customer":{  
      "UserInfoId":"021e57ca-f19a-42c4-8214-180ad7202044",
      "UserId":"1142e724-0f59-4b43-ace6-f10e0e2fxxxx",
      "merchantId":"7c778337-4652-4944-934f-09e0fe56xxxx",
      "UserName":"tom.sawyer@capillarytech.com",
      "FirstName":"Tom",
      "LastName":"Sawyer",
      "PostalAddress":"",
      "AlternateEmail":"",
      "City":"32",
      "Pin":"560001",
      "State":"KA",
      "Country":"IN",
      "PhoneNo":"",
      "Street":"",
      "MobileNo":"917400000000",
      "BirthDate":"01/01/1993",
      "Gender":"male",
      "Occupation":"",
      "Industry":"",
      "OtherArea":"",
      "CountryName":"",
      "IsReceiveOffers":false
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Lets you update the details of a registered customer other than the customer’s unique identifier.

### Resource Information
| | |
--------- | ----------- |
URI | `Customer/{merchantId}/Update`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Customer/{merchantId}/Update`


### Additional Header Required

Header | Description
----- | ----------
accesstoken* 	Access token of the logged in user to validate the session


### Request Body Parameters

Parameter | Type | Description
--------- | ---- | -----------
UserId* | string | Unique id of the customer that is generated in the system.
City | string | Unique code of the city (as saved in the system) Example: 0562 (for Agra), 250 (Victoria) 
CityName | string | Full name of the city. Example: Bangalore, 
State | string | State's postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
StateName | string | Full name of the state such as Karnataka, California, and Indiana
Country | string | alpha-2 code of the country such as IN (for India), AU (for Australia), BR (for Brazil)
CountryName | string | Full name of the country such as India, Australia, and Brazil

<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
IsReceiveOffers | boolean | Whether the user is subscribed to receive offers from the merchant 



### Success/Error Codes

Status Code | Description
------------ | ---------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1017 | User doesn't exit
1030 | Service is not Authorized







## Update Profile Attributes (Custom Fields)

> Sample Request

```html
https://www.martjack.com/developerapi/Customer/7c778337-4652-4944-934f-09e0fe56xxxx/UpdateUserProfile
```

> Sample POST Request

```json
{  
   "UserProfile":{  
      "UserId":"3562a74e-1292-4d47-ba17-bc0a06af3xxx",
      "ProfileAttributes":{  
         "ProfileAttribute":{  
            "ProfileAttributeId":"1058",
            "ProfileAttributeValue":"Football"
         }
      }
   }
}
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Updated Successfully",
    "ErrorCode": 0
}
```

Captures or updates custom field details of a customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/{merchantId}/UpdateUserProfile`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Additional Header Required

Header | Description
----- | ----------
accesstoken* | Access token of the logged in user to validate the session


### Request URL
`https://{host}/developerapi/Customer/{merchantId}/UpdateUserProfile`

### Request Body Parameters
Parameter | Type | Description
--------- | ----- | ------
ProfileAttributeId* | string | ID of the attribute that needs to be updated 
ProfileAttributeValue | string | Customer's preferred attribute value 

<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Add/Update Shipping Address
> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Customer/AddShippingAddress/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample POST Request

```json
{  
   "shippingaddress":{  
      "shippingaddressid":"0",
      "userId":"4cded968-8ee1-4591-a50b-41649387bxxx",
      "firstname":"Tom",
      "lastname":"Sawyer",
      "address1":"H.no.6-51, plot.31, ECIL",
      "address2":"",
      "state":"KA",
      "pin":"560068",
      "countrycode":"IN",
      "citycode":"32",
      "phoneno":"",
      "mobileno":"91-7411000000",
      "email":"tom.sawyer@example.com",
      "AddressType":"Home Address"
   }
}

```

> Sample POST Request

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ShippingAddresses": [
        {
            "shippingaddressid": 1714453,
            "userId": "00000000-0000-0000-0000-000000000000",
            "firstname": null,
            "lastname": null,
            "address1": null,
            "address2": null,
            "state": null,
            "pin": null,
            "countrycode": null,
            "citycode": null,
            "phoneno": null,
            "mobileno": null,
            "email": null,
            "othercity": null
        }
    ],
    "ErrorCode": 0
}
```


Lets you add a new shipping address to the customer's account or update existing shipping address. 

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/AddShippingAddress/{merchantId}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/developerapi/Customer/AddShippingAddress/{merchantId}`

### Request Body Parameters
Parameter | Type | Description
--------- | ---- | -------
ShippingAddressId* |  | Unique id of the order shipment that you want to update. Just pass `0` to create a new shipping address
userId* | string |  Registered identifier of the customer
firstname* | string |  The first name of the customer
lastname* | string |  The last name of the customer 
address1*, address2	 | string |  Specify the customer’s shipping address related information
state | string |  State’s postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
pin | string |  Specify the PIN of the shipping address
countrycode | string |  alpha-2 code of the country. Example: IN (for India), AU (for Australia), and BR (for Brazil)
citycode | string |  Unique code of the city (as saved in the system) such as 0562 (for Agra), and 250 (Victoria)
phoneno | string |  The landline number of the recipient
mobileno | string |  The mobile number of recipient 
email | string |  The email id of the recipient 
addressType | string | Type of address. For example Home, Office

<aside class="notice"> All parameters marked by * are mandatory. </aside>





## Get Customer's Shipping Address


> Sample Request

```html

http://www.martjack.com/developerapi/Customer/GetShippingAddress/81e77da2-723b-483d-8c0d-49f800c1xxxx/4cded968-8ee1-4591-a50b-41649387bxxx

```


> Sample Response

```json

{
   "messageCode":"1004",
   "Message":"Successful",
   "ShippingAddresses":[
      {
         "shippingaddressid":1711980,
         "userId":"4cded968-8ee1-4591-a50b-41649387bxxx",
         "firstname":"Tom",
         "lastname":"Sawyer",
         "address1":"H.no.6-51, plot.31, ECIL",
         "address2":"",
         "state":"KA",
         "pin":"560068",
         "countrycode":"IN",
         "citycode":"32",
         "phoneno":"91-",
         "mobileno":"91-7411000000",
         "email":"tom.sawyer@example.com",
         "othercity":"Bangalore",
         "CityName":"Bangalore",
         "StateName":"Karnataka",
         "CountryName":"India",
         "AddressType":"1"
      },
      {
         "shippingaddressid":1714178,
         "userId":"4cded968-8ee1-4591-a50b-41649387bxxx",
         "firstname":"Tom",
         "lastname":"Sawyer",
         "address1":"Door: 12, 4th Floor, #12",
         "address2":"3rd cross, Roopena agrahara",
         "state":"KA",
         "pin":"560068",
         "countrycode":"IN",
         "citycode":"32",
         "phoneno":"91-",
         "mobileno":"91-7411000000",
         "email":"tom.sawyer@example.com",
         "othercity":"Bangalore",
         "CityName":"Bangalore",
         "StateName":"Karnataka",
         "CountryName":"India",
         "AddressType":"1"
      }
   ],
   "ErrorCode":0
}
```

Retrieves the shipping address of a specific customer.

### Resource Information
| | |
--------- | ----------- |
URI | `/Customer/GetShippingAddress/{merchantId}/{UserId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Additional Header Required
Header Name | Value
----------- | ------
apiversion | 4

### Request URL
`https://{host}/developerapi/Customer/GetShippingAddress/{merchantId}{UserId}`


### Request Path Parameters
Parameter | Type | Description
--------- | ---- | -------
merchantId* | string |  The unique id (GUID) of the merchant from which you want to fetch the customer's shipping address
UserId* | string |  The unique user identifier of the customer whose details need to be retrieved

### Success/Error Codes

Status Code | Description
----- | ---------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1009 | No Record Found
1030 | Service is not Authorized



## Delete Customer's Shipping Address
> Sample Request

```html
http://www.martjack.com/DeveloperAPI/Customer/DeleteShippingAddress/81e77da2-723b-483d-8c0d-49f800c1exxx/4cded968-8ee1-4591-a50b-41649387bxxx/1711980
```

> Sample Response

```json
{  
   "Message":"Success",
   "messageCode":"1004"
}
```

Deletes customer's shipping address for the current session that is logged in.

### Resource Information
| | |
--------- | ----------- |
URI | `Customer/DeleteShippingAddress/{MerchantId}/{UserId}/{ShippingAddressId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`http://{host}/developerapi/Customer/DeleteShippingAddress/{MerchantId}/{UserId}/{ShippingAddressId}`

### Request Parameters
Parameter | Type | Description
--------- | ---- | -----------
MerchantId* | string |  The unique id (GUID) of the merchant in which you want the order is created
UserId* | string |  The unique user identifier of the customer to which the order is associated
ShippingAddressId* | string |  Unique id of the order shipment that you want to delete

<aside class="notice"> All parameters marked by * are mandatory. </aside>



### Success/Error Codes

Status Code | Description
----- | ---------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1009 | No Record Found
1016 | Invalid Input
1030 | Service is not Authorized


## Get Customer Count

Retrieves the number of registered customers of the merchant.

> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Customer/81e77da2-723b-483d-8c0d-49f800c1exxx/Count
```

> Sample Response

```json
{
  "Count": 100,
  "Message": "Successful",
  "messageCode": "1004"
}
```





### Resource Information
| | |
--------- | ----------- |
URI | `Customer/{MerchantId}/Count`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`http://{host}/developerapi/Customer/{merchantId}/Count`

### Success/Error Codes

Code | Description
----- | ---------
1000 | Unhandled Exception
1003 | Authentication Failed
1004 | Successful
1009 | No Record Found
1030 | Service is not Authorized


## Get Product Recommendations

> Sample Request

```html
https://www.martjack.com/DeveloperAPI/Customer/TargetBlocks/81e77da2-723b-483d-8c0d-49f800c1exxx
```

> Sample Response

```json
{
    "ProductIds": [
        13067043,
        13067125,
        13067247
    ],
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

Retrieves product recommendations based on the cart items.


### Resource Information
| | |
--------- | ----------- |
URI | `Customer/TargetBlocks/{merchantId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | No
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`http://{host}/developerapi/Customer/TargetBlocks/{merchantId}`

### Additional Header Required

Header | Description
----- | -----------
AccessToken* | Access token of the current session (you can generate using GET AccessToken API)