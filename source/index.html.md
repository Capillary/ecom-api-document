---
title: Capillary ECom API Document

language_tabs:
  - json
  
  

toc_footers:
  - <a href='#'>Capillary ECom API Documentation</a>
  - <a href=''></a>

includes:
  - order


search: true
---

# Introduction

Capillary e-com APIs are RESTful APIs that can be used to configure merchant data, handle customer activities, and manage orders. ECOM APIs are used for different Inhouse products and 3rd party integrations.

This document provides detailed information about each e-com API with appropriate sample codes.


# Authentication (Merchant Setup on Admin Portal)
Capillary e-com APIs can be authenticated in two ways and the Authentication Headers differ based on the type you choose. 


## OAuth 1.0 Authentication
OAuth protocol authenticates users via tokens (a unique string that identifies a user), that is, instead of sending actual credentials to the server on every request, you can first exchange your user credentials for a 'token', and then authenticate the user based on this 'token'. The frequency of users passing credentials over the network will be less.

To access data through authorized e-com Developer APIs, it is required to use oAuth authentication as the input. 

### Authorization Header
To obtain access, you first need to obtain customer key and consumer secret of the app from the MartJack's **Control Panel** > **Apps** > **App Store** and configure the header. 

|  | |
---|---|
Accept | application/json |
Content-Type | application/x-www-form-urlencoded |
PublicKey | ${PublicKey} |
Authorization Type | OAuth 1.0 |
Consumer Key | {app's consumer key} |
Consumer Secret | {app's secret value} |


**JSON Web Token (JWT) Authentication** is a new standard for creating token also called Token Based Authentication. This standard basically provides a set of rules for creating tokens in a very specific way, which makes tokens more useful for you in general.

The developer APIs provide sample code to create oAuth authentication token which contains Merchant Secret Key, Public Key and a few other parameters. For each data request, you need to pass the query string parameter with new oAuth signature along with other input parameters to the REST API.

### Back-end configuration required
To obtain access, you first need to add the app in the control panel and generate the Auth token (public key) for that app.

To generate Auth token use the API
`developerapi/OAuth/Token/${PublicKey}`



### Authorization Header
|  | |
---|---|
Accept | application/json |
Content-Type | application/x-www-form-urlencoded |
PublicKey | ${PublicKey} |
Content-Type | application/x-www-form-urlencoded |
AuthToken | ${AuthToken} |
MerchantId | ${merchantId} |




## Resource Information

Entry | Description
----- | -----------
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. * India: www.martjack.com * YUM: `https://www9.martjack.com`* AM: https://www1.martjack.com * PH India: `https://www2.martjack.com` * Walmart: `https://www8.martjack.com` * LuLu:'https://www3.martjack.com'
Entity | Resource for which you want to perform an action. **Supported resources**: Banners, Brand, Carts, Category, Customer, CustomerGroups,GiftVoucher, Location, MailList, Merchant, Navigation, Order, PickList, Post, Pricelist, Product, ProductTags, ShoppingList, Store, and Voucher
HTTP Methods | GET, POST
Response Format | JSON






