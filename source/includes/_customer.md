# Customer
A Customer is a user of a merchant's online store. This resource consists of APIs to create new customer accounts and manage their details and preferences.



## Register Customer Account

This API lets you create a new user account on MartJack platform for a specific merchant.

> Sample Request

```html
https://www.martjack.com/developerapi/Customer/12345678-1234-1234-1234-1234567890AB/Create
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
      "PhoneNo":null,
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
      "merchantId":"81e77da2-723b-483d-8c0d-49f800c1e288",
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
        "PhoneNo": "917411639213",
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
Parameter | Description
--------- | -----------
URI | `Customer/{{merchantId}}/Create`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

### Request URL
`https://{host}/developerapi/Customer/{merchantId}/Create`

### Request Attributes
Parameter | Description
--------- | -----------
UserName* | The unique identifier of the customer as configured for the merchant. It could be email, mobile, or any other identifier
merchantId* | The unique id (GUID) of the merchant in which you want to register customer
Password* | Password of the customer account. Password policy is as configured for the merchant on the Merchant Panel
CommunicationType | The preferred communication channel(s) of the customer. Possible Values: SMS, EMAIL
City | Unique code of the city (as saved in the system) such as 0562 (for Agra), and 250 (Victoria)
CityName | Full name of the city. Example: Bangalore, Delhi, Tokyo, Singapore and Paris
State | State's postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
StateName | Full name of the state. Example: Karnataka, California, and Indiana
Country | alpha-2 code of the country. Example: IN (for India), AU (for Australia), and BR (for Brazil)
CountryName |  Full name of the country. Example: India, Australia, and Brazil


## Customer Login


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
      "UserId":"132d3c1d-7d71-4b87-9a69-a4d216d634fa",
      "MerchantId":"81e77da2-723b-483d-8c0d-49f800c1e288"
   },
   "ErrorCode":0
}
```


Logs in a registered customer to the merchant's e-commerce store. A customer has to log in to perform customer tasks such as fetching customer details, modifying customer details and updating profile attributes. Upon successful login, user receives a `UserId` which is required to fetch customer details.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/login`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Customer/{merchantId}/login`

### Request Attributes
Parameter | Description
--------- | -----------
username* | Username of the customer account
password* | Password of the customer account


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
      "UserName":"NewTeatUser19@capillarytech.com",
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

Retrieves details of a specific customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/{UserId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No



### Request URL
`https://{host}/developerapi/Customer/{merchantId}/{UserId}`

### Request Parameters
Parameter | Description
--------- | -----------
merchantId | The unique id (GUID) of the merchant account from which you want to fetch customer details
UserId | The unique user identifier of the customer whose details need to be retrieved



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

Modifies the existing details of a registered customer other than the customer's unique identifier.


### Resource Information
Parameter | Description
--------- | -----------
URI | `Customer/{merchantId}/Update`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://{host}/developerapi/Customer/{merchantId}/Update`

### Request Attributes
Parameter | Description
--------- | -----------
UserId | Unique identifier of the customer as generated by the MartJack system.
City | Unique code of the city (as saved in the system) Example: 0562 (for Agra), 250 (Victoria) 
CityName | Full name of the city. Example: Bangalore, 
State | State's postal abbreviation. Example: KA (for Karnataka), CA (for California), IN (for Indiana)
StateName | Full name of the state such as Karnataka, California, and Indiana
Country | alpha-2 code of the country such as IN (for India), AU (for Australia), BR (for Brazil)
CountryName |  Full name of the country such as India, Australia, and Brazil

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
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/UpdateUserProfile`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://{host}/developerapi/Customer/{merchantId}/UpdateUserProfile`

### Request Attributes
Parameter | Description
--------- | -----------
ProfileAttributeId* | ID of the attribute that needs to be updated 
ProfileAttributeValue | Customer's preferred attribute value 


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
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://{host}/developerapi/Customer/{merchantId}`


## Login with OTP

## Reset Password using OTP
ResetPasswordWithOTP





Retrieves the shipping address of a specific customer.

### Resource Information
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/GetShippingAddress/{UserId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No



### Request URL
`https://{host}/developerapi/Customer/{merchantId}`






## Get Customer's Shipping Address
```html
> Sample Request

http://www.martjack.com/developerapi/Customer/GetShippingAddress/81e77da2-723b-483d-8c0d-49f800c1xxxx/4cded968-8ee1-4591-a50b-41649387bxxx

```

```json
> Sample Response

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
Parameter | Description
--------- | -----------
URI | `/Customer/{merchantId}/`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

### Additional Header Required
Header Name | Value
----------- | ------
apiversion | 4

### Request URL
`https://{host}/developerapi/Customer/{merchantId}/GetShippingAddress/{UserId}`


### Request Parameters
Parameter | Description
--------- | -----------
merchantId* | The unique id (GUID) of the merchant from which you want to fetch the customer's shipping address
UserId* | The unique user identifier of the customer whose details need to be retrieved


## Delete Shipping Address
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
Parameter | Description
--------- | -----------
URI | `Customer/DeleteShippingAddress/{MerchantId}/{UserId}/{ShippingAddressId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`http://{host}/developerapi/Customer/DeleteShippingAddress/{MerchantId}/{UserId}/{ShippingAddressId}`

### Request Parameters
Parameter | Description
--------- | -----------
MerchantId | The unique id (GUID) of the merchant in which you want the order is created
UserId | The unique user identifier of the customer to which the order is associated
ShippingAddressId | Unique id of the order shipment that you want to delete


