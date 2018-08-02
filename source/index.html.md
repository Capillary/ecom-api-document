---
title: Capillary ECom API Document

language_tabs:
  - json
  
  

toc_footers:
  - <a href='#'>Capillary ECom API Documentation</a>
  - <a href=''></a>

includes:
  - order
  - customer


search: true
---

# Introduction

Capillary e-com APIs are RESTful APIs that can be used to configure merchant data, handle customer activities, and manage orders. ECOM APIs can be used for various in-house products and 3rd party integrations.

This document provides detailed information about each e-com API with appropriate sample codes.


# Authentication (Merchant Setup on Admin Portal)
Capillary e-com APIs can be authenticated in two ways and the Authentication Headers differ based on the type you choose. 


## OAuth 1.0 Authentication
OAuth protocol authenticates users via tokens (a unique string that identifies a user), that is, instead of sending actual credentials to the server on every request, you can first exchange your user credentials for a 'token', and then authenticate the user based on this 'token'. The frequency of users passing credentials over the network will be less.

To access data through authorized e-com Developer APIs, it is required to use oAuth authentication as the input. 

### Headers
|  | |
---|---|
Accept | application/json |
Content-Type | application/x-www-form-urlencoded |

### Authorization Header
To obtain access, you first need to obtain customer key and consumer secret of the app from the MartJack's **Control Panel** > **Apps** > **App Store** and configure the header. 

|  | |
---|---|
Authorization Type | OAuth 1.0 |
PublicKey | ${PublicKey} |
Consumer Secret | {app's secret value} |

## JWT Authentication
**JSON Web Token (JWT) Authentication** is a new standard for creating token also called Token Based Authentication. This standard basically provides a set of rules for creating tokens in a very specific way, which makes tokens more useful for you in general.

The developer APIs provide sample code to create oAuth authentication token which contains Merchant Secret Key, Public Key and a few other parameters. For each data request, you need to pass the query string parameter with new oAuth signature along with other input parameters to the REST API.

To enable JWT for a merchant API integration app, you need to set the column `EnableJWT`=1 in the 'martjack.tblmerchantaddons` table for a specific merchant and public key combination.

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
AuthToken | ${AuthToken} |
MerchantId | ${merchantId} |




# Request Information

Entry | Description
----- | -----------
URL | https://<host>/developerapi/{resource}/. We recommend using secure HTTPS requests instead of http for all your calls
Host | The server to which the API calls are made. This should be the URL of the respective cluster from where the calls are made. <br> - **India**: `www.martjack.com` <br> - **YUM**: `www9.martjack.com` <br> - **AM**: `www1.martjack.com` <br> - **PH India**: `www2.martjack.com`  <br> - **Walmart**: `www8.martjack.com` <br> - **LuLu**: `www3.martjack.com`
Resource | Resource for which you want to perform an action. **Supported resources**: Banners, Brand, Carts, Category, Customer, CustomerGroups,GiftVoucher, Location, MailList, Merchant, Navigation, Order, PickList, Post, Pricelist, Product, ProductTags, ShoppingList, Store, and Voucher
HTTP Methods | GET, POST
Response Format | JSON






