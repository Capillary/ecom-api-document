---
title: Capillary Anywhere Commerce API Document

language_tabs:
  - json
  
  

toc_footers:
  - <a href="https://capillary.github.io/v1.1-API-Documentation/">Capillary CRM API Documentation v1.1</a>
  - <a href="https://capillary.github.io/api-documentation/">Capillary CRM API Documentation v2.0</a>
  

includes:
  - customer
  - groups
  - product
  - productTags
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
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. <br> - **India**: `sg.ecom.capillary.in` <br> - **YUM**: `eu.ecom.capillary.in` <br> - **PH India**: `mb.ecom.capillary.in`  <br> - **Walmart**: `wm.ecom.capillary.in` <br> - **Staging**: `staging.ecom.capillary.in` <br> - **Nightly**: `nightly.ecom.capillary.in`
Resource | Resource for which you want to perform an action. **Supported resources**: Banners, Brand, Carts, Category, Customer, CustomerGroups,GiftVoucher, Location, MailList, Merchant, Navigation, Order, PickList, Post, Pricelist, Product, ProductTags, ShoppingList, Store, and Voucher
HTTP Methods | GET, POST, PATCH
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




## OAuth SDKs

Alternatively, you can also use SDKs for oAuth generation.

### PHP SDK

**Installation**

Install pecl OAuth packages as mentioned below:

`yum install pecl`

`sudo apt-get install php7.2-dev`

`pecl install oAuth`


**Usage**

Go to examples and run

`php7.2 ./request_signing.php`




### Java SDK

**oauth1-signature-builder**:

Java 8 minimal library to create tailor-made OAuth-1.0a signatures (weights 24.5 KB).

**Compatibility**: Java 7 or above


**Usage**

Run the java code in a compatible platform.

`public static void main(String[] args) {

		OAuthConfig oauthConfig = new OAuthConfigBuilder("myApiKey", "myApiSecret")
				.setTokenKeys("myAccessKey", "myAccessSecret")
				.build();

		OAuthSignature signature = oauthConfig.buildSignature(HttpMethod.GET, "http://serviceUrl")
				.addQueryParam("aParam", "aValue")
				.addFormUrlEncodedParam("myParam", "anotherValue")
				.create();

		System.out.println(signature.getAsHeader());
}
`

**This code will generate the value for a ready-to-be-used "Authorization" Header**:
	
`Authorization:	OAuth oauth_nonce="1906386233", oauth_signature="sQYmuXQV2ROJS3ukvpeaNNl2Jp8=", oauth_token="myAccessKey", oauth_consumer_key="myApiKey", oauth_version="1.0", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1461291933"`


### Javascript SDK

The following process guides you in generating OAuth 1.0a signature for node and the browser

**Installation**

Install with npm:

`npm install oauth-signature`


**Usage**

To generate the OAuth signature call the following method:

`
oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, options)`

<aside class="notice">Both 	tokenSecret` and `options` are optional</aside>


The default options parameter is as follows

`var options = {
	encodeSignature: true // will encode the signature following the RFC 3986 Spec by default
}`

Example

The following is an example on how to generate the signature for the reference sample

`var httpMethod = 'GET',
	url = 'http://photos.example.net/photos',
	parameters = {
		oauth_consumer_key : 'dpf43f3p2l4k3l03',
		oauth_token : 'nnch734d00sl2jdk',
		oauth_nonce : 'kllo9940pd9333jh',
		oauth_timestamp : '1191242096',
		oauth_signature_method : 'HMAC-SHA1',
		oauth_version : '1.0',
		file : 'vacation.jpg',
		size : 'original'
	},
	consumerSecret = 'kd94hf93k423kf44',
	tokenSecret = 'pfkkdhi9sl3r4s00',
	// generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
	encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret),
	// generates a BASE64 encode HMAC-SHA1 hash
	signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret,
		{ encodeSignature: false});
`

The `encodedSignature` variable will contain the RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash, ready to be used as a query parameter in a request: `tR3%2BTy81lMeYAr%2FFid0kMTYa%2FWM%3D`.

The `signature` variable will contain the BASE64 HMAC-SHA1 hash, without encoding: `tR3+Ty81lMeYAr/Fid0kMTYa/WM=`.


### PHP SDK

OAuth Generator is a .NET project written in C#.

**Requirements**

Visual Studio should be installed and .NET packages installed.

**Usage**

Open OAuth.sln using Visual Studio and run directly to get a console window. The user will be prompted to enter the consumer key and consumer secret. The option for entering other values will be provided.



