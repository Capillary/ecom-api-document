# Mail List


## Get Mailing List

Retrieves the list of subscribed  email ids and the details of a given mailing list.

> Sample Request

```html

http://www.martjack.com/developerapi/MailList/f48fdd16-92db-4188-854d-1ecd9b62d066/8566
```

> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Consumers":[
      {
         "Maillinglistid":8566,
         "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62e066",
         "Id":"801452",
         "Email":"email_961823",
         "CreatedOn":"9/22/2017",
         "ModifiedOn":"9/22/2017",
         "issubscribed":"True"
      },
      {
         "Maillinglistid":8566,
         "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62e066",
         "Id":"801528",
         "Email":"email_579694",
         "CreatedOn":"9/22/2017",
         "ModifiedOn":"9/22/2017",
         "issubscribed":"True"
      },
      {
         "Maillinglistid":8566,
         "MerchantId":"f48fdd16-92db-4188-854d-1ecd9b62e066",
         "Id":"802148",
         "Email":"email_880428",
         "CreatedOn":"9/24/2017",
         "ModifiedOn":"9/24/2017",
         "issubscribed":"True"
      }
   ]
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/MailList/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/MailList/{merchantId}/{EmailListID}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
emailListId* | int | Unique id of the email list

<aside class="notice">All parameters marked by * are mandatory.</aside>




