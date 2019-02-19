---
title: Capillary Anywhere Commerce API Document

language_tabs:
  - json
  
  

toc_footers:
  - <a href="https://capillary.github.io/v1.1-API-Documentation/">Capillary CRM API Documentation v1.1</a>
  - <a href="https://capillary.github.io/api-documentation/">Capillary CRM API Documentation v2.0</a>
  

includes:
  - customer
  - product
  - cart
  - pricelist
  - shoppingList
  - order
  - picklist
  - store
  - location
  - merchant
  - category
  - errors


search: true
---

# Introduction

Capillary Anywhere Commerce APIs are RESTful APIs that can be used to configure merchant data, handle customer activities, and manage orders. Anywhere Commerce APIs can be used for various in-house products and 3rd party integrations.

This document provides detailed information about each Anywhere Commerce API with appropriate sample codes.


## Authentication (Merchant Setup on Admin Portal)
Capillary Anywhere Commerce APIs can be authenticated in two ways and the Authentication Headers differ based on the type you choose. 


### OAuth 1.0 Authentication
OAuth protocol authenticates users via tokens (a unique string that identifies a user), that is, instead of sending actual credentials to the server on every request, you can first exchange your user credentials for a 'token', and then authenticate the user based on this 'token'. The frequency of users passing credentials over the network will be less.


### Headers

To use Anywhere Commerce Developer APIs, you need to include your application's `Authorization` in the header in every request. However, you might require additional headers for few APIs which are mentioned in the respective sections.

|  | |
---|---|
Accept | application/json |
Content-Type | application/x-www-form-urlencoded |

**Authorization**

Authorization determines what permissions an authenticated identity has. To obtain access, you first need to obtain customer key and consumer secret of the app from the MartJack's **Control Panel** > **Apps** > **App Store** and configure the header. 

|  | |
---|---|
Authorization Type | OAuth 1.0 |
PublicKey | ${PublicKey} |
Consumer Secret | {app's secret value} |
APIVersion | 3 |

### JWT Authentication
**JSON Web Token (JWT) Authentication** is a new standard for creating token also called Token Based Authentication. This standard basically provides a set of rules for creating tokens in a very specific way, which makes tokens more useful for you in general.

The developer APIs provide sample code to create oAuth authentication token which contains Merchant Secret Key, Public Key and a few other parameters. For each data request, you need to pass the query string parameter with new oAuth signature along with other input parameters to the REST API.

To enable JWT for a merchant API integration app, you need to set the column `EnableJWT`=1 in the 'martjack.tblmerchantaddons` table for a specific merchant and public key combination.

** Back-end configuration required**
To obtain access, you first need to add the app in the control panel and generate the Auth token (public key) for that app.

To generate Auth token use the API
`developerapi/OAuth/Token/${PublicKey}`



### Authorization Header
|  | |
---|---|
Accept | application/json |
Content-Type | application/x-www-form-urlencoded |
PublicKey | ${PublicKey} |
AuthToken | ${AuthToken} |
MerchantId | ${merchantId} |
languagecode | The language of the application chosen by the end user in case on multilingual application. For example: `en` or `ar`



## Request Information

Entry | Description
----- | -----------
URL | https://<host>/developerapi/{resource}/. We recommend using secure HTTPS requests instead of http for all your calls
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. <br> - **India**: `sg.ecom.capillary.in` <br> - **YUM**: `eu.ecom.capillary.in` <br> - **AM**: `www1.martjack.com` <br> - **PH India**: `mb.ecom.capillary.in`  <br> - **Walmart**: `www8.martjack.com` <br> - **LuLu**: `www3.martjack.com` <br> - **Staging**: `staging.ecom.capillary.in` <br> - **Nightly**: `nightly.ecom.capillary.in`
Resource | Resource for which you want to perform an action. **Supported resources**: Banners, Brand, Carts, Category, Customer, CustomerGroups,GiftVoucher, Location, MailList, Merchant, Navigation, Order, PickList, Post, Pricelist, Product, ProductTags, ShoppingList, Store, and Voucher
HTTP Methods | GET, POST
Response Format | JSON


### How to pass POST body?
You always need to pass the POST body in the format specified below:

`
InputData={
<JSON PAYLOAD>
}&InputFormat=application/json`

FOr example:

InputData={
"customer":{
"MobileNo":"917411639xxx",
"UserName":"917411639xxx",
"merchantId":"98d18d82-ba59-4957-9c92-3f89207auyf6
"}}&InputFormat=application/json



## Generating Signature for Developer APIs

An API signature is a credential that consists of consumer key along with nonce, timestamp, oauth version and signature associated to the specific app. You can create API signature to authenticate your merchant app and access Anywhere Commerce APIs instead of the app's consumer key and password. The signature allows our servers to verify whether a request generated using the API key is authorized. In an API call, signature is validated first followed by app permissions.

The following process guides you how to to generate and use signature.


### What parameters are required for signature?

Following are the different parameters required to generate signature.

* oauth_consumer_key
* oauth_nonce
* oauth_signature_method
* oauth_timestamp
* oauth_version
* oauth_signature


### How to generate the parameters required for signature?

The following steps guide you how to generate each parameter required for generating signature. The value of `oauth_signature_method` is HMAC-SHA1 and `oauth_version` is  1.0.

The following sub-sections provide the process for generating values of other parameters.

#### Nonce:

You can generate Nonce using the following API

`http://{{url}}/developerapi/OAuth/Nounce`


#### Generating TimeStamp

Use the following API to generate TimeStamp

`http://{{url}}/developerapi/OAuth/TimeStamp`


#### Generating Outh Signature


To generate Outh Signature use the following 

`developerapi/OAuth/Signature/{public_key}/{secret_key}/{timeStamp}/{nonce}/{GET/POST}?url={URL}`




Example:

`http://www.martjack.com/developerapi/OAuth/Signature//QFTBNOUC/NDH1BYBFRYHSPDJXFV3RGISB/1548658024/5681074/POST?url=http://www.martjack.com/Customer/06e2d5fc-402b-475e-be79-592c2df95398/Create`


Once you get the oauth_signature, you can make API calls.
For example:
 
 


### How to pass the signature?

You can pass the signature either as Headers or directly in the URL as explained below.

### Passing as headers:

merchantId={merchantId}

**oauth_consumer_key**:{consumer key}

**oauth_nonce**:{Value generated from the nonce API}

**oauth_signature_method**: HMAC-SHA1

**oauth_timestamp**:{value generated from the timeStamp API}

**oauth_version**:1.0

**oauth_signature**:{generated through OAuth/Signature}



Passing directly in the request URL:

{API Request}?oauth_consumer_key=QFTBNOUC&oauth_nonce={oauth_nonce}&oauth_signature_method={HMAC-SHA1{&oauth_timestamp={timeStamp}
&oauth_version=1.0&oauth_signature={oauth_signature}


For example: 
http://staging.ecom.capillary.in/developerapi/carts/applyvoucher/06e2d5fc-402b-475e-be79-592c2df95398/testvoucherCV1?
oauth_consumer_key=QFTSEOUC
&oauth_nonce=jREyWynNuaKAy3IA7s6l
&oauth_signature_method=HMAC-SHB1
&oauth_timestamp=1548658766
&oauth_version=1.0
&oauth_signature=AeBXqh%2BfPmuVmUdksCAJ%2FyxNv3c%3D







