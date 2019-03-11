# Merchant

Merchant is an entry associated with the Capillary that runs their business on the Capillary Anywhere Commerce Platform. This resource lets Capillary Admin users manage merchant accounts in different countries as per needed. 

Merchant users can use the resource to access their Blob server and merchant details.

## Get Signed URL
```html
https://www.martjack.com/developerapi/Merchant/GetSignedUrl/{MerchantId}
```

> Sample Response

```json
{
   "Code": "1004",
   "Message": "Successful",
   "ErrorCode": "0",
   "Url": "http://martjackstorage.blob.care.windows.net/test-resources/f48fdd16-92db-4188-854d-1ecd9b62xxxx/temp/Upload/Data?sv=2012-02-12&sr=c&si=mypolicy&sig=pT4Fy6iQ0vuX%2BDUGoBSHt4imVcWO2Cq51Ob88n%2FaM4A%3D",
   "AllocatedItems": "false"
}
```

Provides authentication to the Merchant to access the Blob server.

### Resource Information
| | |
--------- | ----------- |
URI | `Merchant/GetSignedUrl/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Merchant/GetSignedUrl/{MerchantId}`




