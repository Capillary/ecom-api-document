# Product

A product is an item that a merchant sells on the Anywhere Commerce platform. This resource consists of APIs related managing product inventory of a merchant such as variable and bundle items, product categories, location, and promotions; and also to fetch product details.








## Update Location wise Stock & Price

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateLocationWiseStock
```

> Sample POST Body


```json
MerchantId="0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx"&InputFormat="application/json"&InputData={
	"products": {
		"product": {
			"sku":"sku1234121",
			"variantsku":"",
			"stock":"10",
			"locationrefcode":"4702",
			"Quantity":"1",
			"MRP":"444",
			"WebPrice":"333",
			"TokenPrice":"222"
		},
		"product": {
			"sku":"sun1234121",
			"variantsku":"",
			"stock":"10",
			"locationrefcode":"48976",
			"Quantity":"2",
			"MRP":"200",
			"WebPrice":"190",
			"TokenPrice":"50"
		}
	}
  }

```

> Sample Response

```json
{
   "messageCode":"1018",
   "Message":"Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
   "Taskid":"2718751",
   "ErrorCode":0
}

```

Updates item stock and price of a specific location.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/UpdateLocationWiseStock`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes


### Request URL

`https://{host}/developerapi/product/UpdateLocationWiseStock`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
sku* | string | SKU of the product of a specific location for which you want to update stock and price
variantsku* | string | The variant SKU of the current item (only for variant products)
stock | int | Number of available items of the current SKU. Specify NA for out of stock
locationrefcode* | string | Location reference code of the location for which product stock/price update is made (physical store or warehouse)
Quantity  | int | The quantity of the item for which you want to update the price
MRP  | float | Retail price of the item
WebPrice | float | Selling price of the item
TokenPrice | float | Minimum amount required for the customer to reserve the item and purchase later on

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current update location task


## Update Product Information (normal)

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateProductInfo	

```

> Sample POST Request (for normal product)


```json
MerchantId="0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx"&InputFormat="application/json"&InputData={  
   "products":{  
      "product":[{  
         "sku":"458636",
         "variantsku":"",
         "BrandID":"1756",
         "ProductTitle":"Capillary Mens Jeans",
         "Inventory":"2000",
         "MRP":"499",
         "Webprice":"499",
         "Availability":"Y",
         "ProductType":"P",
         "SmallImage":"filename.jpg",
         "LargeImage":"image.jpg",
         "ShortDescription":"Mens jeans blue denim",
         "ProductDescription":"Example description",
         "PaymentOptionOnline":"Y",
         "PaymentOptionChequeOrDD":"Y",
         "PaymentOptionBankTransfer":"N",
         "PaymentOptionCOD":"Y",
         "DeliveryOptionShip":"Y",
         "DeliveryOptionOffline":"N",
         "DeliveryOptionOnline":"Y",
         "DeliveryOptionInStorePickup":"Y",
         "LocationBased":"Y",
         "ShippingCode":"flat",
         "TaxCode":"GST",
         "DeliveryTime":"2-5 business days",
         "CatalogSequence":"50",
         "ProductWeight":"200",
         "BankProductId":"654786",
         "OfferProductDescription":"example.xml",
         "OfferProductImage":"image.jpg",
         "PageTitle":"Mens Trousers",
         "Keywords":"",
         "KeywordDescription":"",
         "SEOURL":"example.com",
         "SmallImageAltText":"altimage.jpg",
         "LargeImageAltText":"altimage.jpg",
         "StartDate":"11/03/2018",
         "EndDate":"1/03/2020",
         "StartTime":"12:00:00",
         "EndTime":"1:00:00",
         "PeriodicityType":"monthly",
         "PeriodicityRangeWeekly":"1-30",
         "ShowExpired":"Y",
         "UOM":"gms",
         "LBH":"",
         "BuyingWeight":"250",
         "PkgQty":"1",
         "MinimumOrderQuantity":"1",
         "MaximumOrderQuantity":"5",
         "PreOrder":"Y",
         "BackOrder":"10",
         "StockAvailableMessage":"Stock will be available in 2 days",
         "ProductCondition":"",
         "Warrantybearer":"",
         "WarrantyInMonths":"",
         "ReserveQuantity":"",
         "Reorderstocklevel":"",
         "StockAlertQuantity":"5",
         "BarCode":"barcode123,barcode2",
         "ModelNumber":"UG654",
         "CatalogCode":"P",
         "PurchaseDate":"",
         "ProductNote":"Mens blue jeans",
         "FormCode":"",
         "CheckoutWithTokenPrice":"Y",
         "TokenPrice":"50",
         "CostPrice":"350",
         "HidePrice":"N",
         "FulfillmentServiceRefCode":"",
         "SectionRefCode":"",
         "StdProductCode":"72.02.01-01",
         "MPN":"",
         "Vendor":"SampleVendor",
         "VendorSKU":"SV123",
         "StdProductType":"HSN"
      }
	  ]
   }
}

```



> Sample Response

```json
{
    "messageCode": "1018",
    "Message": "Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
    "Taskid": "2718747",
    "ErrorCode": 0
}
```

Lets you update normal product details.

### Resource Information
| | |
--------- | ----------- |
URI | `Product/UpdateProductInfo`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/UpdateProductInfo`

### Request Body Parameters
Parameter | Type | Description 
-------- | --------- | -----------
SKU* | string | Unique SKU of the product
VariantSKU | string  | Unique SKU of the variant product. *Required for a variant product
VariantProperty | string | The property of the variant product such as size, color, and weight. *Required for Variant Product
VariantValue | string | The value of the specified property. *Required for Variant Product
BrandID* | string | Unique id of the brand associated to the product
ProductTitle* | string | Title of the product to appear on the product's page
ProductType* | string | Type of the product. Values: `P` for a normal product, `A` for an add-on products, and `B` for a bundle product or deal product
CategoryRefCode | string | Reference code of the product category
Inventory | int |  The number of available products of the current SKU (stock)
MRP | float  | Retail price of the product
Webprice | float | Selling price of the product on the storefront
Availability | string | Specify the availability of the product. Values: `Y` if available, `N` if unavailable
BarCode | string | Bar code of the product
SmallImage | string | Source image of the product -  small size (supported formats: .png, jpg,jpeg, .svc, and .gif)
LargeImage | string | Source image of the product - large size (supported formats: .png, jpg,jpeg, .svc, and .gif)
ShortDescription | string | Short description of the product. This will appear on the product showcase page
ProductDescription | string | Description of the product. This will appear on the product page
PaymentOptionOnline | enum | Specify `Y` if online payment is supported for the product; `N` if not supported
PaymentOptionChequeOrDD |enum | Specify `Y` if payment through cheque or DD is supported for the product; `N` if not supported
PaymentOptionBankTransfer | enum | Specify `Y` if payment through online bank transfer is supported for the product; `N` if not supported
PaymentOptionCOD | enum | Specify `Y` if cash on delivery is supported for the product; `N` if not supported
DeliveryOptionShip | enum | Specify `Y` if the product can be shipped outside the state, `N` if not
DeliveryOptionOffline | enum | pecify `Y` if the product can be purchased offline else specify `N`
DeliveryOptionOnline | enum | Y, N. If the product can be delivered online (home delivery)
DeliveryOptionInStorePickup | enum | Specify `Y` if the product is available in Store for pick up, else specify `N`
LocationBased | enum | Specify `Y` if the shipping price is on location basis, Specify `N` for common shipping price to all locations
ShippingCode | enum | The code of the the type of shipping charges. Most commonly used: flat, india, international, surfaceways, airways
TaxCode | enum | The tax code applicable for the product. Value: CSST, IGST, SGST, USST
DeliveryTime  | string | The estimated delivery time to be shown on the product page. Example: This product will be delivered in 7 days from the date of order
CatalogSequence | int | Rank of the product to show up on the storefront
ProductWeight | float | Weight of the product
BankProductId | string | System generated id for the product source
OfferProductDescription | string | .xml file name related to the product offer. Use for sale items
OfferProductImage | string | Preferred image of the offer product (supported formats: .png, jpg,jpeg, .svc, and .gif)
PageTitle | string | Title of the product you prefer for SEO
Keywords | string | Preferred search keyword for the product
KeywordDescription | | Description of the specified search keyword
SEOURL | string | The redirect URL when searched on Google
SmallImageAltText | string | The mouse hover text for small image
LargeImageAltText | string | The mouse hover text for large image 
StartDate | date | From when the product has to be displayed on the storefront in `DD/MM/YY` format
EndDate | date | Until when you want to show the product on the storefront in `DD/MM/YY` format
StartTime | time | The time from when you want to show on the storefront on the specified start date. Format: `HH:MM:SS`
EndTime | time | The time from when you want to stop showing the product on the storefront on the specified end date. Format: `HH:MM:SS`
PeriodicityType | enum | Use this to show items on the storefront specific days. Values: Monthly, Weekly, oneTime  
PeriodicityRange | string | The days when you want to show the product. For example: in monthly, 1-30 to show on all days of a month, in weekly you can have 1, 3, 5, to display of Sun, Tue, and Thu respectively.  No value is required for `oneTime`. To pass multiple days, use comma separated values. For example, 1,2,5,10
ShowExpired | enum | Y, N. To show if the product has to be displayed irrespective of the periodicityRange
UOM | enum | Unit of measurement of the product. Values: ltrs, kgs, gms
LBH | string | Dimensions of the product (Length*Bredth*Height) or the product volume
BuyingWeight | float | Weight of the product as per the specified UOM. For example, if UOM is kgs then it will consider the specified value in kilo grams
PkgQty | int |  Quantity of the product in each package
MinimumOrderQuantity | int | Minimum allowed product quantity per order
MaximumOrderQuantity | int | Maximum allowed product quantity per order
PreOrder | enum | Specify `Y` to allow the product booking in advance, else, specify `N`
BackOrder | enum | Specify `Y` if you want to allow users to place orders even in no stock (0). Specify `N` to disable ordering in case of out of stock
StockAvailableMessage | string | Specify the stock availability message to show on the priduct page when it goes out of stock. For example, "Stock will be available in 2 days"
ProductCondition | enum | Current condition of the product. Value: New, Used
Warrantybearer | enum | Warranty bearer. Value: No Warranty, Manufacturer
WarrantyInMonths | int | Warranty period in months
ReserveQuantity | int | Quantity of items the merchant can reserve in order to fulfill loyal customers
StockAlertQuantity | int | Sends an alert when the quantity of the product is less than this value
BarCode | string | Barcode of the product. You can pass comma separated values in case of multiple bar codes
ModelNumber | string | Model number of the product
CatalogCode | string | Classification code of the product in catalogue
PurchaseDate | date | Required for the used product. Date when the used product is purchased in `MM:DD:YY` format
ProductNote | string | Additional information to mention about the product
FormCode | enum | Predefined form codes for deal products
CheckoutWithTokenPrice | enum | Specify `Y` to enable checkout with token price (preorder amount)
TokenPrice | float | The token amount required for preorder (if `CheckoutWithTokenPrice` is enabled)
CostPrice | float | The cost price of the product
HidePrice | enum | Specify `Y` to hide the price on the storefront, `N` to show the product price
StdProductCode | int | HSN (Homogeneous Serial Number) of the product
MPN | string | Manufacturer's product number
Vendor | enum | Vendor name associated to the measurement for the product (Predefined vendor)
VendorSKU | string | SKU of the product in the vendor system
StdProductType | enum | HSN of the product type. Values: UPC, EAN, GTIN, ASIIN, ISBN10, ISBN13
FulfillmentServiceRefCode | string | Reference code of the order fulfillment location

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current update task

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------


## Update Product Information (Variant)

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateProductInfo	

```

> Sample POST Request


```json
MerchantId="0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx"&InputFormat="application/json"&InputData={  
   "products":{  
      "product":{  
         "sku":"458636",
         "variantsku":"",
         "BrandID":"1756",
         "ProductTitle":"Capillary Mens Jeans",
         "Inventory":"2000",
         "MRP":"499",
         "Webprice":"499",
         "Availability":"Y",
         "ProductType":"P",
         "SmallImage":"filename.jpg",
         "LargeImage":"image.jpg",
         "ShortDescription":"Mens jeans blue denim",
         "ProductDescription":"Example description",
         "PaymentOptionOnline":"Y",
         "PaymentOptionChequeOrDD":"Y",
         "PaymentOptionBankTransfer":"N",
         "PaymentOptionCOD":"Y",
         "DeliveryOptionShip":"Y",
         "DeliveryOptionOffline":"N",
         "DeliveryOptionOnline":"Y",
         "DeliveryOptionInStorePickup":"Y",
         "LocationBased":"Y",
         "ShippingCode":"flat",
         "TaxCode":"GST",
         "DeliveryTime":"2-5 business days",
         "CatalogSequence":"50",
         "ProductWeight":"200",
         "BankProductId":"654786",
         "OfferProductDescription":"example.xml",
         "OfferProductImage":"image.jpg",
         "PageTitle":"Mens Trousers",
         "Keywords":"",
         "KeywordDescription":"",
         "SEOURL":"example.com",
         "SmallImageAltText":"altimage.jpg",
         "LargeImageAltText":"altimage.jpg",
         "StartDate":"11/03/2018",
         "EndDate":"1/03/2020",
         "StartTime":"12:00:00",
         "EndTime":"1:00:00",
         "PeriodicityType":"monthly",
         "PeriodicityRangeWeekly":"1-30",
         "ShowExpired":"Y",
         "UOM":"gms",
         "LBH":"",
         "BuyingWeight":"250",
         "PkgQty":"1",
         "MinimumOrderQuantity":"1",
         "MaximumOrderQuantity":"5",
         "PreOrder":"Y",
         "BackOrder":"10",
         "StockAvailableMessage":"Stock will be available in 2 days",
         "ProductCondition":"",
         "Warrantybearer":"",
         "WarrantyInMonths":"",
         "ReserveQuantity":"",
         "Reorderstocklevel":"",
         "StockAlertQuantity":"5",
         "BarCode":"barcode123,barcode2",
         "ModelNumber":"UG654",
         "CatalogCode":"P",
         "PurchaseDate":"",
         "ProductNote":"Mens blue jeans",
         "FormCode":"",
         "CheckoutWithTokenPrice":"Y",
         "TokenPrice":"50",
         "CostPrice":"350",
         "HidePrice":"N",
         "FulfillmentServiceRefCode":"",
         "SectionRefCode":"",
         "StdProductCode":"72.02.01-01",
         "MPN":"",
         "Vendor":"SampleVendor",
         "VendorSKU":"SV123",
         "StdProductType":"HSN"
      },
	   {  
        "sku":"458636",
        "variantsku":"variantSKU1",
        "BrandID":"1756",
        "ProductTitle":"Capillary Mens Jeans",
        "Inventory":"2000",
        "MRP":"499",
        "Webprice":"499",
        "Availability":"Y",
        "ProductType":"P",
        "VariantProperty1":"color",
        "value1":"red",
        "VariantProperty2":"",
        "value2":"",
        "SmallImage":"filename.jpg",
        "LargeImage":"image.jpg",
        "ShortDescription":"Mens jeans blue denim",
        "ProductDescription":"Example description",
        "PaymentOptionOnline":"Y",
        "PaymentOptionChequeOrDD":"Y",
        "PaymentOptionBankTransfer":"N",
        "PaymentOptionCOD":"Y",
        "DeliveryOptionShip":"Y",
        "DeliveryOptionOffline":"N",
        "DeliveryOptionOnline":"Y",
        "DeliveryOptionInStorePickup":"Y",
        "LocationBased":"Y",
        "ShippingCode":"flat",
        "TaxCode":"GST",
        "DeliveryTime":"2-5 business days",
        "CatalogSequence":"50",
        "ProductWeight":"200",
        "VariantProperty1":"Color",
        "Value1":"Red",
        "VariantProperty2":"Size",
        "Value2":"S",
        "VariantProperty3":"",
        "Value3":"",
        "BankProductId":"654786",
        "OfferProductDescription":"example.xml",
        "OfferProductImage":"image.jpg",
        "PageTitle":"Mens Trousers",
        "Keywords":"",
        "KeywordDescription":"",
        "SEOURL":"example.com",
        "SmallImageAltText":"altimage.jpg",
        "LargeImageAltText":"altimage.jpg",
        "StartDate":"11/03/2018",
        "EndDate":"1/03/2020",
        "StartTime":"12:00:00",
        "EndTime":"1:00:00",
        "PeriodicityType":"monthly",
        "PeriodicityRangeWeekly":"1-30",
        "ShowExpired":"Y",
        "UOM":"gms",
        "LBH":"",
        "BuyingWeight":"250",
        "PkgQty":"1",
        "MinimumOrderQuantity":"1",
        "MaximumOrderQuantity":"5",
        "PreOrder":"Y",
        "BackOrder":"10",
        "StockAvailableMessage":"Stock will be available in 2 days",
        "ProductCondition":"",
        "Warrantybearer":"",
        "WarrantyInMonths":"",
        "ReserveQuantity":"",
        "Reorderstocklevel":"",
        "StockAlertQuantity":"5",
        "BarCode":"barcode123,barcode2",
        "ModelNumber":"UG654",
        "CatalogCode":"P",
        "PurchaseDate":"",
        "ProductNote":"Mens blue jeans",
        "FormCode":"",
        "CheckoutWithTokenPrice":"Y",
        "TokenPrice":"50",
        "CostPrice":"350",
        "HidePrice":"N",
        "FulfillmentServiceRefCode":"",
        "SectionRefCode":"",
        "StdProductCode":"72.02.01-01",
        "MPN":"",
        "Vendor":"SampleVendor",
        "VendorSKU":"SV123",
        "StdProductType":"HSN"
     }
   }
}

```



> Sample Response

```json
{
    "messageCode": "1018",
    "Message": "Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
    "Taskid": "2718747",
    "ErrorCode": 0
}
```

Lets you update variant product details.

### Resource Information
| | |
--------- | ----------- |
URI | `Product/UpdateProductInfo`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/UpdateProductInfo`

### Request Body Parameters
Parameter | Type | Description 
-------- | --------- | -----------
SKU* | string | Unique SKU of the product
VariantSKU | string  | Unique SKU of the variant product. *Required for a variant product
VariantProperty | string | The property of the variant product such as size, color, and weight. *Required for Variant Product
VariantValue | string | The value of the specified property. *Required for Variant Product
BrandID* | string | Unique id of the brand associated to the product
ProductTitle* | string | Title of the product to appear on the product's page
ProductType* | string | Type of the product. Values: `P` for a normal product, `A` for an add-on products, and `B` for a bundle product or deal product
CategoryRefCode | string | Reference code of the product category
Inventory | int |  The number of available products of the current SKU (stock)
MRP | float  | Retail price of the product
Webprice | float | Selling price of the product on the storefront
Availability | string | Specify the availability of the product. Values: `Y` if available, `N` if unavailable
BarCode | string | Bar code of the product
SmallImage | string | Source image of the product -  small size (supported formats: .png, jpg,jpeg, .svc, and .gif)
LargeImage | string | Source image of the product - large size (supported formats: .png, jpg,jpeg, .svc, and .gif)
ShortDescription | string | Short description of the product. This will appear on the product showcase page
ProductDescription | string | Description of the product. This will appear on the product page
PaymentOptionOnline | enum | Specify `Y` if online payment is supported for the product; `N` if not supported
PaymentOptionChequeOrDD |enum | Specify `Y` if payment through cheque or DD is supported for the product; `N` if not supported
PaymentOptionBankTransfer | enum | Specify `Y` if payment through online bank transfer is supported for the product; `N` if not supported
PaymentOptionCOD | enum | Specify `Y` if cash on delivery is supported for the product; `N` if not supported
DeliveryOptionShip | enum | Specify `Y` if the product can be shipped outside the state, `N` if not
DeliveryOptionOffline | enum | pecify `Y` if the product can be purchased offline else specify `N`
DeliveryOptionOnline | enum | Y, N. If the product can be delivered online (home delivery)
DeliveryOptionInStorePickup | enum | Specify `Y` if the product is available in Store for pick up, else specify `N`
LocationBased | enum | Specify `Y` if the shipping price is on location basis, Specify `N` for common shipping price to all locations
ShippingCode | enum | The code of the the type of shipping charges. Most commonly used: flat, india, international, surfaceways, airways
TaxCode | enum | The tax code applicable for the product. Value: CSST, IGST, SGST, USST
DeliveryTime  | string | The estimated delivery time to be shown on the product page. Example: This product will be delivered in 7 days from the date of order
CatalogSequence | int | Rank of the product to show up on the storefront
ProductWeight | float | Weight of the product
BankProductId | string | System generated id for the product source
OfferProductDescription | string | .xml file name related to the product offer. Use for sale items
OfferProductImage | string | Preferred image of the offer product (supported formats: .png, jpg,jpeg, .svc, and .gif)
PageTitle | string | Title of the product you prefer for SEO
Keywords | string | Preferred search keyword for the product
KeywordDescription | | Description of the specified search keyword
SEOURL | string | The redirect URL when searched on Google
SmallImageAltText | string | The mouse hover text for small image
LargeImageAltText | string | The mouse hover text for large image 
StartDate | date | From when the product has to be displayed on the storefront in `DD/MM/YY` format
EndDate | date | Until when you want to show the product on the storefront in `DD/MM/YY` format
StartTime | time | The time from when you want to show on the storefront on the specified start date. Format: `HH:MM:SS`
EndTime | time | The time from when you want to stop showing the product on the storefront on the specified end date. Format: `HH:MM:SS`
PeriodicityType | enum | Use this to show items on the storefront specific days. Values: Monthly, Weekly, oneTime  
PeriodicityRange | string | The days when you want to show the product. For example: in monthly, 1-30 to show on all days of a month, in weekly you can have 1, 3, 5, to display of Sun, Tue, and Thu respectively.  No value is required for `oneTime`. To pass multiple days, use comma separated values. For example, 1,2,5,10
ShowExpired | enum | Y, N. To show if the product has to be displayed irrespective of the periodicityRange
UOM | enum | Unit of measurement of the product. Values: ltrs, kgs, gms
LBH | string | Dimensions of the product (Length*Bredth*Height) or the product volume
BuyingWeight | float | Weight of the product as per the specified UOM. For example, if UOM is kgs then it will consider the specified value in kilo grams
PkgQty | int |  Quantity of the product in each package
MinimumOrderQuantity | int | Minimum allowed product quantity per order
MaximumOrderQuantity | int | Maximum allowed product quantity per order
PreOrder | enum | Specify `Y` to allow the product booking in advance, else, specify `N`
BackOrder | enum | Specify `Y` if you want to allow users to place orders even in no stock (0). Specify `N` to disable ordering in case of out of stock
StockAvailableMessage | string | Specify the stock availability message to show on the priduct page when it goes out of stock. For example, "Stock will be available in 2 days"
ProductCondition | enum | Current condition of the product. Value: New, Used
Warrantybearer | enum | Warranty bearer. Value: No Warranty, Manufacturer
WarrantyInMonths | int | Warranty period in months
ReserveQuantity | int | Quantity of items the merchant can reserve in order to fulfill loyal customers
StockAlertQuantity | int | Sends an alert when the quantity of the product is less than this value
BarCode | string | Barcode of the product. You can pass comma separated values in case of multiple bar codes
ModelNumber | string | Model number of the product
CatalogCode | string | Classification code of the product in catalogue
PurchaseDate | date | Required for the used product. Date when the used product is purchased in `MM:DD:YY` format
ProductNote | string | Additional information to mention about the product
FormCode | enum | Predefined form codes for deal products
CheckoutWithTokenPrice | enum | Specify `Y` to enable checkout with token price (preorder amount)
TokenPrice | float | The token amount required for preorder (if `CheckoutWithTokenPrice` is enabled)
CostPrice | float | The cost price of the product
HidePrice | enum | Specify `Y` to hide the price on the storefront, `N` to show the product price
StdProductCode | int | HSN (Homogeneous Serial Number) of the product
MPN | string | Manufacturer's product number
Vendor | enum | Vendor name associated to the measurement for the product (Predefined vendor)
VendorSKU | string | SKU of the product in the vendor system
StdProductType | enum | HSN of the product type. Values: UPC, EAN, GTIN, ASIIN, ISBN10, ISBN13
FulfillmentServiceRefCode | string | Reference code of the order fulfillment location

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current update task


## Get SKU Price

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Price/81e77da2-723b-483d-8c0d-49f800c1exxx/PZLG-WM
```

> Sample POST Request

```json
{
  "sku": "TEQUILA11547BLK",
  "variantsku": "11547BLK",
  "usergroupid": 67,
  "locationrefcode": "",
  "channelrefcode": "string"
}
```


> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "CurrentPrice":[
      {
         "merchantid":"81e77da2-723b-483d-8c0d-49f800c1exxx",
         "sku":"100002587",
         "variantsku":"0",
         "usergroupname":null,
         "locationrefcode":"1001",
         "channelrefcode":null,
         "mrp":6402,
         "webprice":6401,
         "quantity":1,
         "tokenprice":0
      },
      {
         "merchantid":"f48fdd16-92db-4188-854d-1ecd9b62d066",
         "sku":"100002587",
         "variantsku":"0",
         "usergroupname":null,
         "locationrefcode":"Azmi Nagar",
         "channelrefcode":null,
         "mrp":6402,
         "webprice":6401,
         "quantity":1,
         "tokenprice":0
      }
   ]
}
```




Retrieves the price of a specific item

### Resource Information
| | |
--------- | ----------- |
URI | `Product/Price/{MerchantId}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/Price/{MerchantId}`

### Request Body Parameters Information
Parameter | Type | Description 
--------- | -------- | -----------
sku* | string | SKU of the item
variantsku | string | SKU of the variant product (required for variant product)
usergroupid | int | Specify the user group id to associate the price list to a specific group
locationrefcode  |  string | Location/store code associated to the price list
channelrefcode | string  | Channel code to which the price list is associated

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
usergroupname | string | 
tokenprice | float | Minimum amount required for the customer to reserve the item and purchase later on
channelrefcode | string | Channel code to which the price list is associated






## Get Product Reviews

```html
https://www.martjack.com/developerapi/Product/GetReviews/81e77da2-723b-483d-8c0d-49f800c1exxx/PZLG-WM
```



> Sample Response

```json
{
	"messageCode": "1004",
	"Message": "Successful",
	"Reviews": [{
			"UserId": "0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx",
			"UserName": "Tom",
			"ProductTitle": "Capillary Men's Slim Fit Striped Collar Shirt",
			"ReviewTitle": "Special occasion wear",
			"ReviewDescription": "Looks semi-formal as per my liking. The shirt is very comfortable and feels really nice for both as a casual wear or occasional wear.",
			"CreatedDateTime": "10/9/2018 5:46:25 AM",
			"Rating": 1,
			"IsGoLive": "True"
		},
		{
			"UserId": "0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx",
			"UserName": "James",
			"ProductTitle": "Capillary Men's Slim Fit Striped Collar Shirt",
			"ReviewTitle": "Nice material and comfortable wear",
			"ReviewDescription": "Beautiful color, and material. A very well made shirt",
			"CreatedDateTime": "10/9/2018 12:44:00 AM",
			"Rating": 1,
			"IsGoLive": "False"
		}
	]
}
```

Retrieves the user reviews of a specific product. 

### Resource Information
| | |
--------- | ----------- |
URI | `Product/GetReviews/{MerchantId}/{Sku}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/GetReviews/{MerchantId}/{Sku}`


### Request Body Parameters

Parameter | Type | Description
--------- | --- | ----------- 
MerchantId* | string | The unique GUID of the merchant
Sku* | string | SKU of the product for which you want to fetch reviews

<aside class="notice"> All parameters marked by * are mandatory.</aside>






## Attach Product Images



> Sample Request

```html
https://www.martjack.com/developerapi/Product/AttachImages/f48fdd16-92db-4188-854d-1ecd9b62xxxx
```

> Sample POST Request

```json
[
  {
    "sku": "sku42134125",
    "variants": [
      {
        "variantsku": "sku4113231",
        "images": [
          {
            "filename": "filnemae.jpg",
            "sequence": 1,
            "deepzoom": "file.xml(deprecated",
            "zoom": "filename.png",
            "smallimage": "filename.jpg",
            "thumbnail": "filename.jpg",
            "alttext": "product image text",
            "viewport": "Front"
          }
        ],
        "documents": [
          {
            "type": "Specifications",
            "seoinfo": "specifications of the product ",
            "filename": "filename.Doc",
            "sequence": 1
          }
        ],
        "videos": [
          {
            "type": "Youtube",
            "seoinfo": "video description of the product",
            "filename": "filename.etxn",
            "sequence": 1
          }
        ],
        "view360": [
          {
            "type": "Local_flash",
            "seoinfo": "desc of the product",
            "filename": "filename.png",
            "sequence": 0
          }
        ]
      }
    ],
    "images": [
      {
        "variantproperty": "Color",
        "variantvalue": "Yellow",
        "filename": "Filename.png",
        "sequence": 1,
        "deepzoom": "file.xml",
        "zoom": "filename.xml",
        "smallimage": "filename.jpg",
        "thumbnail": "filename.png",
        "alttext": "test of the image",
        "viewport": "Back"
      }
    ],
    "swatchimages": [
      {
        "variantproperty": "color",
        "variantvalue": "Red",
        "filename": "filename.png"
      }
    ],
    "documents": [
      {
         "type": "Specifications",
         "seoinfo": "specifications of the product ",
         "filename": "filename.Doc",
         "sequence": 1
      }
    ],
    "videos": [
      {
         "type": "Youtube",
            "seoinfo": "video description of the product",
            "filename": "filename.etxn",
            "sequence": 1
      }
    ],
    "view360": [
      {
         "type": "Local_flash",
            "seoinfo": "desc of the product",
            "filename": "filename.png",
            "sequence": 0
      }
    ]
  }
]
```

> Sample Response

```json
{
    "messageCode": "1018",
    "Message": "Data update added to task queue. You can view the status of update in control panel. Also email will be send to merchant registered email after task completion.",
    "Taskid": "2718747",
    "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/AttachImages/{{MerchantId}}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes


### Request URL
`https://{host}/developerapi/Product/AttachImages/{{MerchantId}}`

### Request Body Parameters

PageTitle | Type | Description
------- | ------ | ---------
sku | string | SKU of the item for which you want to add images
images | json obj | Image details to be attached based on the variant property and value
filename | string  | Name of the image file
sequence| int | Sequence rank of the image. 1 appears 1st. 
deepzoom | string | .xml file regarding the zooming effects on mouse hover or product clicks
zoom | string | The large image that you need to show when clicked on the product ((supported formats: .png, jpg,jpeg, .svc, and .gif))
smallimage | string | The small image that appears on the product quick view - showcase (supported formats: .png, jpg,jpeg,.svc, and .gif)
thumbnail | string | Thumbnails of the product images that appears on the product view page (supported formats: .png, jpg,jpeg,.svc, and .gif)
alttext | string | The alt text that needs to appear on mouse hover for the image (filename)
viewport | enum | The view angle of the current image. Values: Front, Back, Left, Right, Bottom
swatchimages  | | Represents the property values of the variant product - illustration of accurate representation of color, pattern or texture
variantproperty | enum | Property name of the current variant. Property names as defined for the merchant
variantvalue | enum | Property value of the current variant. Supported value as defined for the property for the merchant
filename | string | File name of the swatch image with extension (supported formats: .png, jpg,jpeg,.svc, and .gif)
documents | | Documents of the product pertaining to the product information
type | string | Document purpose. Supported Values: Overview, Product Tour, Specifications, Menu, How it works, Terms and Conditions
seoinfo | string | Search Engine Optimization of the document
filename | string | Document type with extension. Supported formats: .doc, .docx, .pdf
sequence | 0 | Sequence order of the document to appear on the product page
videos | | Videos related to the product   
type | string | Source of the video. Supported Values: YouTube, Vimeo, Scribd, 
seoinfo | string | Search Engine Optimization information of the video
filename | string | Filename of the video with extension
sequence | 0 | Sequence order of the video
view360 | | 3d images of the product
type | string | Type of the view 360 degree file name. Value: `local_flash`
seoinfo | string | Search Engine Optimization for the 360 degree video
filename | string | File name of the video with the respective extension
sequence | 0 | Sequence order in which the view 360 video has to appear on the product page

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current task

## Get Product Details by Location

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Information/9820eca5-d11f-4df1-9b20-983a45ea9631/11982534/16696
```

> Sample Response

```json
"{
    "messageCode":"1004",
    "Message":"Successful",
    "Product":
    {
        "ProductId":11982534,
        "ProductTitle":"Mothers Dairy Safal Frozen Vegetables - Mixed Vegetables,",
        "MRP":50.0,
        "WebPrice":50.0,
        "CostPrice":0.0,
        "Rating":0,
        "IsParentProduct":false,
        "Availability":true,
        "BrandId":"0",
        "CatlogSequence":0,
        "CatalogCode":",
        "SKU":"100040621",
        "Taxtotal":0,
        "MarkupPrice":0,
        "MarkupType":",
        "BulkQuantity":1,
        "ProductWeight":0.0,
        "ProductType":"P",
        "SmallImageAltText":"0",
        "IsShippingConfigured":false,
        "IsTaxConfigured":false,
        "StartDate":"\/Date(1537209000000+0530)\/",
        "EndDate":"\/Date(1537295400000+0530)\/",
        "SeoURL":"http:\/\/www.example.martjack.com\/mothers-dairy-safal-frozen-vegetables---mixed-vegetables\/p\/11982534",
        "DeliveryTime":"Delivered in 5 Working days",
        "TokenPriceCheckout":false,
        "IsReferPrice":false,
        "ShortDescription":",
        "TokenPrice":0.0,
        "SmallImage":",
        "Brandname":"Safal",
        "CategoryId":"CU00333866",
        "CategoryName":"Frozen Mixed Vegetable",
        "Fulldescription":",
        "NoofReview":"0",
        "BarCode":"9876567892",
        "Inventory":"120",
        "PreOrder":"0",
        "BackOrder":"0",
        "OfferDescription":",
        "RefProductId":"0",
        "Sellerid":"00000000-0000-0000-0000-000000000000",
        "ShippingCodes":"Cart amount",
        "IsInStock":"true",
        "ProductSequence":0,
        "UOM":"Pieces"
    },
    "ErrorCode":0
}"


```

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Information/{merchantId}/{productId}/{locationId}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes
Rate Limited? | No
Authentication | Yes


### Request URL
`https://{host}/developerapi/Product/Information/{merchantId}/{productId}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Product id  of the SKU
locationId* | int | Location id of the location

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CatlogSequence | int | Sequence of the product in catalog
MarkupPrice | | 
MarkupType | | 
IsShippingConfigured | boolean | 
IsTaxConfigured | boolean | 
StartDate | | 
EndDate | 
SeoURL | 
TokenPriceCheckout | float | Minimum amount required for the customer to reserve the item during checkout and purchase later on
IsReferPrice | 
NoofReview | 
UOM | string | Unit of metrics. It could be the `pieces` for items that are sold as a piece and the respective measure for other items such as kgs, and gms 


## Get Product Details (by SKU)

> Sample Request

```html
https://www.martjack.com/developerapi/Product/SKU/81e77da2-723b-483d-8c0d-49f800c1exxx/100040621
```

> Sample Response

```json

{
    "messageCode":"1004",
    "Message":"Successful",
    "Product":
    {
        "ProductId":11982534,
        "ProductTitle":"Mothers Dairy Safal Frozen Vegetables - Mixed Vegetables,",
        "MRP":50.0,
        "WebPrice":50.0,
        "CostPrice":0.0,
        "Rating":0,
        "IsParentProduct":false,
        "Availability":true,
        "BrandId":"0",
        "CatlogSequence":0,
        "CatalogCode":",
        "SKU":"100040621",
        "Taxtotal":0,
        "MarkupPrice":0,
        "MarkupType":",
        "BulkQuantity":0,
        "ProductWeight":0.0,
        "ProductType":"P",
        "SmallImageAltText":"0",
        "IsShippingConfigured":false,
        "IsTaxConfigured":false,
        "StartDate":"\/Date(1537209000000+0530)\/",
        "EndDate":"\/Date(1537295400000+0530)\/",
        "SeoURL":",
        "DeliveryTime":"Delivered in 5 Working days",
        "TokenPriceCheckout":false,
        "IsReferPrice":false,
        "ShortDescription":",
        "TokenPrice":0.0,
        "SmallImage":",
        "Brandname":null,
        "CategoryId":"CU00333866",
        "CategoryName":null,
        "Fulldescription":null,
        "NoofReview":null,
        "BarCode":null,
        "ProductSequence":0,
        "UOM":null
    },
    "ErrorCode":0
}

```



Retrieves the details of a specific product by SKU.


### Resource Information
| | |
--------- | ----------- |
URI | `/Product/SKU/{merchantId}/{sku}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes
Rate Limited? | No
Authentication | Yes


### Request URL
`https://{host}/developerapi/Product/SKU/{merchantId}/{sku}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string |  SKU of the product that you want to fetch


<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CatlogSequence | | The sequence of the product in catalog
MarkupPrice | | 
MarkupType | | 
BulkQuantity | | 
NoofReview | | 
UOM | | 





## Get Product Variants

> Sample Request

```html
https://www.martjack.com/developerapi/Product/9820eca5-d11f-4df1-9b20-983a45ea9631/12322048/true
```


> Sample Response

```json
{
    "messageCode":"1004",
    "Message":"Successful",
    "ProductVarient":
    [
        {
            "variantProductId":"9076980",
            "productId":12322048,
            "MRP":400,
            "WebPrice":400.0,
            "SKU":"100309195",
            "Inventory":110,
            "ReferenceProductVariantId":0,
            "productType":"",
            "merchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
            "BulkQuantity":1,
            "Availability":true,
            "StartDate":"\/Date(-2209008600000+0530)\/",
            "EndDate":"\/Date(-2209008600000+0530)\/",
            "CostPrice":0,
            "BarCode":"100309195,8906001020547",
            "CatalogCode":"",
            "IsDropShipping":false,
            "MarkupPrice":0,
            "MarkupType":"",
            "IsReferProductInfo":false,
            "IsReferPrice":false,
            "TokenPrice":0,
            "Flag":"",
            "ReserveQuantity":0,
            "ReOrderStockLevel":0,
            "StockAlertQuantity":0,
            "PreOrderMessage":"",
            "PreOrder":false,
            "BackOrder":false,
            "IsStockEnabled":false,
            "WebPriceWithoutDiscount":0,
            "ProductVariantValueViews":
            [
                {
                    "valueId":14870754,
                    "variantProductId":9076980,
                    "variantPropertyId":13068,
                    "variantPropertyValueId":297444,
                    "IsDisplaySwatch":false,
                    "Rank":100375,
                    "variantPropertyName":"Weight",
                    "variantValue":"1kg Box",
                    "flag":""
                }
            ]
        },
        {
            "variantProductId":"9077536",
            "productId":12322048,
            "MRP":115,
            "WebPrice":115.0,
            "SKU":"100258508",
            "Inventory":120,
            "ReferenceProductVariantId":0,
            "productType":"",
            "merchantId":"f48fdd16-92db-4188-854d-1ecd9b62d066",
            "BulkQuantity":1,
            "Availability":true,
            "StartDate":"\/Date(-2209008600000+0530)\/",
            "EndDate":"\/Date(-2209008600000+0530)\/",
            "CostPrice":0,
            "BarCode":"100258508,8906001020431",
            "CatalogCode":"",
            "IsDropShipping":false,
            "MarkupPrice":0,
            "MarkupType":"",
            "IsReferProductInfo":false,
            "IsReferPrice":false,
            "TokenPrice":0,
            "Flag":"""""""",
            "ReserveQuantity":0,
            "ReOrderStockLevel":0,
            "StockAlertQuantity":0,
            "PreOrderMessage":"",
            "PreOrder":false,
            "BackOrder":false,
            "IsStockEnabled":false,
            "WebPriceWithoutDiscount":0,
            "ProductVariantValueViews":
            [
                {
                    "valueId":14871310,
                    "variantProductId":9077536,
                    "variantPropertyId":13068,
                    "variantPropertyValueId":297450,
                    "IsDisplaySwatch":false,
                    "Rank":100378,
                    "variantPropertyName":"Weight",
                    "variantValue":"200g Box",
                    "flag":""
                }
            ]
        }
    ],
    "ErrorCode":0
}


```





Retrieves all the available variants of a product.

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Varients/{merchantId}/{productId}/{availability}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes
Rate Limited? | No
Authentication | Yes


### Request URL
`https://{host}/developerapi/Product/Varients/{merchantId}/{productId}/{availability}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | string |  Unique id of the product for which you want to fetch available variants
availability | boolean | Pass `true` to retrieve only active variant products, `false` to retrieve both active and inactive variant products

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
ReferenceProductVariantId | | 
StartDate | | 
EndDate | | 
MarkupPrice | | 
MarkupType | | 
IsReferProductInfo | | 
IsReferPrice | | 
ReserveQuantity | | 
ReOrderStockLevel | | 
IsDisplaySwatch | | 
flag | | 





## Get Product by Tag

> Sample Request

```html
https://www.martjack.com/developerapi/Product/9820eca5-d11f-4df1-9b20-983a45ea9631/bestoffers/16654
```

> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Products":
   [
       {
           "ProductId":11631476,
           "ProductTitle":"Fresho Pomegranate - Peeled, 200 gm 12",
           "MRP":1000.0,
           "WebPrice":1000.0,
           "CostPrice":0.0,
           "Rating":0,
           "IsParentProduct":false,
           "Availability":false,
           "BrandId":"282504",
           "CatlogSequence":1,
           "CatalogCode":"1234",
           "SKU":"Fruits0001",
           "Taxtotal":0,
           "MarkupPrice":0,
           "MarkupType":"",
           "BulkQuantity":1,
           "ProductWeight":150.0,
           "ProductType":"P",
           "SmallImageAltText":"Fresho Pomegranate - Peeled, 200 gm 12",
           "IsShippingConfigured":false,
           "IsTaxConfigured":false,
           "StartDate":"\/Date(1525372200000+0530)\/",
           "EndDate":"\/Date(1528050600000+0530)\/",
           "SeoURL":"http:\/\/www.hyctest.stagesites.capillary.in\/seo-url\/p\/11631476",
           "DeliveryTime":"2-4 days",
           "TokenPriceCheckout":false,
           "IsReferPrice":false,
           "ShortDescription":"api_test",
           "TokenPrice":0.0,
           "SmallImage":",
           "Brandname":"Fresho",
           "CategoryId":"CU00325882",
           "CategoryName":"Cut & Peeled Fruits",
           "Fulldescription":null,
           "NoofReview":"0",
           "BarCode":",
           "ProductSequence":0,
           "UOM":"Pieces"
       }
   ],
   "ErrorCode":0
}
```



Retrieves products of a specific tag.

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/{productTag}/{locationId}`
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes
Rate Limited? | No
Authentication | Yes


### Request URL
`https://{host}/developerapi/Product/{merchantId}/{productTag}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
productTag* | string | Tag name for which you want to fetch available products
locationId* | int | Fetch products of a specific location. Pass `0` to choose the default location of the merchant


<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
MarkupPrice |  | 
MarkupType | | 
TokenPriceCheckout | | 
IsReferPrice | | 
UOM | | 





## Add Review

```html
https://www.martjack.com/developerapi/Product/AddReview/81e77da2-723b-483d-8c0d-49f800c1exxx/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx/PZLG-WM
```

> Sample Request

```json
{
	"title": "Title31",
	"message": "message75",
	"isGoLive": "True"
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

Publishes customer review for a specific product. 


### Resource Information
| | |
--------- | ----------- |
URI | `Product/AddReview/{MerchantId}/{UserId}/{SKU}`
Rate Limited? | Yes
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No


### Request URL

`https://{host}/developerapi/Product/AddReview/{MerchantId}/{UserId}/{SKU}`



### Request Query Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Specify the merchant id for which the review has to be associated
UserId* | string | Specify the unique id of the customer that provided the review
SKU* | string  | Specify the product SKU for which the review has to be associated

### Request Body Parameters

Attribute | Description
-------- | ----------
title* | Specify the title of the product review as provided by the customer
message* | Specify the entire review content as entered by the customer
isGoLive* | 

<aside class="notice"> All parameters marked by * are mandatory.</aside>