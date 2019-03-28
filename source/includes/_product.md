# Product

A product is an item that a merchant sells on the Anywhere Commerce platform. You can use this resource to create and manage inventory items and its groups across channels.




## Update Location wise Stock & Price

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateLocationWiseStock
```

> Sample POST Body


```json
MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={
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

Updates stock and price of an item for a specific location.

### Resource Information
| | |
--------- | ----------- |
URI | `/product/UpdateLocationWiseStock`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/product/UpdateLocationWiseStock`

### Request Body Parameters
Parameter | Datatype | Description
--------- | -------- | ----------
sku* | string | SKU of the product for which you want to update stock and price
variantsku* | string | The variant SKU to update variant product
stock | int | Number of available items of the current SKU. Specify `NA` if product needs to be dissociated with the location, `0` for out of stock
locationrefcode* | string | Location reference code of the location for which product stock/price update is made (physical store or warehouse)
Quantity  | int | The quantity of the item for which you want to update the price
MRP  | float | Retail price of the item
WebPrice | float | Selling price of the item
TokenPrice | float | Minimum amount required for the customer to reserve the item and purchase later on (prebooking price)

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current update location task







## Update Product Information (normal product)

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateProductInfo	

```

> Sample POST Request


```json
MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={  
   "products":{  
      "product":[{  
         "CategoryReference":"CU00378158",
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

Updates the details of a normal product.

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/UpdateProductInfo`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details


### Request URL

`https://{host}/developerapi/Product/UpdateProductInfo`

### Request Body Parameters
Parameter | Type | Description 
-------- | --------- | -----------
CategoryReference* | string | Unique category reference code 
SKU* | string | Unique SKU of the product
VariantSKU | string  | Unique SKU of the variant product to update
VariantProperty | string | The property of the variant product such as size, color, and weight. *Required for a Variant Product update
VariantValue | string | The value of the specified variantProperty. *Required for a Variant Product
BrandID* | string | Brand id associated to the product
ProductTitle* | string | Title of the product to appear on the product's page of the storefront
ProductType* | string | Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product or deal product
CategoryRefCode | string | Reference code of the product category
Inventory | int | New stock count of the current product
MRP | float  | Retail price of the product
Webprice | float | Selling price of the product to show up on the storefront. Cannot be more than MRP
Availability | string | Specify `Y` if the product is in stock, `N` if unavailable
BarCode | string | Bar code of the product
SmallImage | string | Name (with extension) of the product's small image (100*100) shown in the product showcase. This param is required if the Custom Type of the image is not defined and the Extended Properties section of that product showcase is not configured accordingly. Supported formats: .png, jpg,jpeg, .svc, and .gif
LargeImage | string | Name (with extension) of the product's large image (300*300) shown on the product details page of the storefront. Supported formats: .png, jpg,jpeg, .svc, and .gif
ShortDescription | string | Brief description of the product within 500 characters. This will appear on the product details page
ProductDescription | string | Detailed description of the product which will appear in the Description tab of the product page. Supports up to 50000 characters
PaymentOptionOnline | enum | Specify `Y` if the product can be purchased online through options such as Credit Card,Debit Card, and Net Banking, `N` if not supported
PaymentOptionChequeOrDD |enum | Specify `Y` if payment through cheque or DD is supported for the product; `N` if not supported
PaymentOptionBankTransfer | enum | Specify `Y` if payment through online bank transfer is supported for the product; `N` if not supported
PaymentOptionCOD | enum | Specify `Y` if cash on delivery is supported for the product; `N` if not supported
DeliveryOptionShip | enum | Specify `Y` if the product is available for shipping, `N` if cannot be shipped
DeliveryOptionOffline | enum | Specify `Y` if the product can be ordered offline such as 'Call for actions'
DeliveryOptionOnline | enum | Specify `Y` for online delivery products such as such as movies, music, ringtones, donations, mobile recharges, gift cards, softwares etc, else specify `N`
DeliveryOptionInStorePickup | enum | Specify `Y` if store pick up is supported for the product, else specify `N`
LocationBased | enum | Specify `Y` if the product inventory needs to be considered as per the shipping location or store, else specify `N`
ShippingCode | enum | The code of the the type of shipping charges. Most commonly used: flat, india, international, surfaceways, airways
TaxCode | string | The tax code applicable for the product. Tax code have configured in the CP first. You can associate the relevant value here. For example, CSST, IGST, SGST, USST, SGI18
DeliveryTime  | string | The estimated delivery time to be shown on the product page. Example: This product will be delivered in 7 days from the date of order
CatalogSequence | int | Sequence of the product to show up on the storefront
ProductWeight | float | Weight of the product as per the UOM mentioned
BankProductId | string | System generated id for the product source
OfferProductDescription | string | .xml file name related to the product offer. Use for sale items
OfferProductImage | string | Preferred image of the offer product (supported formats: .png, jpg,jpeg, .svc, and .gif)
PageTitle | string | Title of the product you prefer to appear in the search results for SEO
Keywords | string | Preferred meta tag search keyword for the product
KeywordDescription | string | Description of the specified search keyword
SEOURL | string | The redirect URL when searched on Google
SmallImageAltText | string | The mouse hover text for small image
LargeImageAltText | string | The mouse hover text for large image 
StartDate | date | The date when you want to begin showing the product on the storefront in `DD/MM/YY` format
EndDate | date | The date when you want to end showing the product on the storefront in `DD/MM/YY` format
StartTime | time | The time (on the specified StartDate) from when you want to show the product on the storefront. Format: `HH:MM:SS`
EndTime | time | The time (on the specified EndDate) when you want to stop showing the product on the storefront on the specified end date. Format: `HH:MM:SS`
PeriodicityType | enum | The recurring interval when you want to show the product on the storefront. Values: Monthly, Weekly, oneTime  
PeriodicityRange | string | The days of the recurring interval (PeriodicityType) that you want to show the product. For example: in `Monthly` recurring interval, if you set `PeriodicityRange` 1-30, you will see products on all 30 days of a month. Similarly, in a weekly `PeriodicityType`, if you set 1, 3, 5 in PeriodicityRange, you will see the product on Sun, Tue, and Thu respectively.  No value is required for `oneTime`. To pass multiple days, use comma separated values. For example, 1,2,5,10. You can either pass as 1-5, or 1, 2, 3, 4, 5 and so on. Not required for onetime
ShowExpired | enum | Y, N. To show if the product has to be displayed irrespective of the periodicityRange
UOM | enum | Unit of measurement of the product. Values: ltrs, kgs, gms, pieces
LBH | string | Dimensions of the product (Length*Breadth*Height) or the product volume
BuyingWeight | float | Weight of the product as per the specified UOM. For example, if UOM is kgs then it will consider the specified value in kilo grams
PkgQty | int |  Lot size (package quantity) of the product that can be purchased. Customer can buy the product only in multiples of the specified `PkgQuantity`
MinimumOrderQuantity | int | Minimum allowed product quantity per order
MaximumOrderQuantity | int | Maximum allowed product quantity per order
PreOrder | enum | Preorder facilitates booking or reserving an item in advance, usually prebooking new products even before it is launched. Specify `Y` to allow the product booking in advance, else, specify `N`
BackOrder | enum |Backorder lets users to place an order even if the product is out of stock. Specify `Y` if you want to allow users to place orders even in no stock (0). Specify `N` to disable ordering in case of out of stock
StockAvailableMessage | string | Specify the stock availability message to show on the product page when it goes out of stock. For example, "Stock will be available in 2 days"
ProductCondition | enum | Current condition of the product. Value: New, Used
Warrantybearer | enum | Warranty bearer. Value: No Warranty, Manufacturer, Dealer
WarrantyInMonths | int | Warranty period in months (if Warrantybearer is Manufacturer or Dealer)
ReserveQuantity | int | Quantity of items the merchant needs to reserve for special purposes. For example, merchant could reserve some products to fulfill for loyalty customers
StockAlertQuantity | int | Sends an alert when the quantity of the product is less than this value
BarCode | string | Barcode of the product. You can pass comma separated values in case of multiple bar codes
ModelNumber | string | Model number of the product (if applicable)
CatalogCode | string | Catelogue code of the product (if any)
PurchaseDate | date | Required for the used product. Date when the used product is purchased in `MM:DD:YY` format
ProductNote | string | Additional information to mention about the product for internal reference
FormCode | enum | Predefined form codes for deal products. Ad-hoc Forms allow you to create customised web forms with a number of custom fields and you can use them to receive customized orders from end-users. 
CheckoutWithTokenPrice | enum | Specify `Y` to enable checkout with token price (preorder amount)
TokenPrice | float | The token amount required for preorder (if `CheckoutWithTokenPrice` is enabled)
CostPrice | float | The cost price of the product
HidePrice | enum | Specify `Y` to hide the price on the storefront, `N` to show the product price. You can show 'Price on Request' Call for Action to reveal the price on customer requests
StdProductCode | int | For international standard product, specify the HSN (Homogeneous Serial Number) of the product as per the chosen standard product type
MPN | string | Manufacturer's part number - A unique part number given by the manufacturer of the product
Vendor | enum | Vendor name associated to the measurement for the product (Predefined vendor)
VendorSKU | string | SKU of the product in the vendor system for supplier product
StdProductType | enum | For international standard products, specify the type of identification or HSN of the product type. Values: `UPC` (Universal Product Code), `EAN` (European Article Numbering), `GTIN`  (Global Trade Item Number), `ASIIN`  (Amazon Standard Identification Number), `ISBN10`, `ISBN13` (International Standard Book Number)
FulfillmentServiceRefCode | string | Reference code of the order fulfillment service. These services are required for the fulfillment of a deal or online product deliveries such as music, ringtones, movies. It's mandatory for Local Deals

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current update task







## Update Product Information (Variant)

> Sample Request

```html
https://www.martjack.com/developerapi/product/UpdateProductInfo	

```

> Sample POST Request


```json
MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={  
   "products":{  
      "product":[{  
		 "CategoryReference":"CU00378158",
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
     }]
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
URI | `/Product/UpdateProductInfo`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/UpdateProductInfo`

### Request Body Parameters
Parameter | Type | Description 
-------- | --------- | -----------
CategoryReference* | string | Unique category reference code
SKU* | string | Unique SKU of the product
VariantSKU* | string  | Unique SKU of the variant product
VariantProperty* | string | The property of the variant product such as size, color, and weight
VariantValue* | string | The value of the specified property. *Required for Variant Product
BrandID* | string | Unique id of the brand associated to the product
ProductTitle* | string | Title of the product to appear on the product's page
ProductType* | string | Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product or deal product
CategoryRefCode | string | Reference code of the product category
Inventory | int |  The number of available stock of the current SKU (quantity)
MRP | float  | Retail price of the product
Webprice | float | Selling price of the product on the storefront. Cannot be more than MRP
Availability | string | Specify `Y` if the product is in stock, `N` if unavailable
BarCode | string | Bar code of the product
SmallImage | string | Name (with extension) of the product's small image (100*100) shown in the product showcase. This param is required if the Custom Type of the image is not defined and the Extended Properties section of that product showcase is not configured accordingly. Supported formats: .png, jpg,jpeg, .svc, and .gif
LargeImage | string | Name (with extension) of the product's large image (300*300) shown on the product details page of the storefront. Supported formats: .png, jpg,jpeg, .svc, and .gif
ShortDescription | string | Brief description of the product within 500 characters. This will appear on the product details page
ProductDescription | string | Detailed description of the product which will appear in the Description tab of the product page. Supports up to 50000 characters
PaymentOptionOnline | enum | Specify `Y` if the product can be purchased online through options such as Credit Card,Debit Card, and Net Banking, `N` if not supported
PaymentOptionChequeOrDD |enum | Specify `Y` if payment through cheque or DD is supported for the product; `N` if not supported
PaymentOptionBankTransfer | enum | Specify `Y` if payment through online bank transfer is supported for the product; `N` if not supported
PaymentOptionCOD | enum | Specify `Y` if cash on delivery is supported for the product; `N` if not supported
DeliveryOptionShip | enum | Specify `Y` if the product is available for shipping, `N` if cannot be shipped
DeliveryOptionOffline | enum | Specify `Y` 
DeliveryOptionOnline | enum | Specify `Y` for online delivery products such as such as movies, music, ringtones, donations, mobile recharges, gift cards, softwares etc, else specify `N`
DeliveryOptionInStorePickup | enum | Specify `Y` if store pick up is supported for the product, else specify `N`
LocationBased | enum | Specify `Y` if the product inventory needs to be considered as per the shipping location or store, else specify `N`
ShippingCode | enum | The code of the the type of shipping charges. Most commonly used: flat, india, international, surfaceways, airways
TaxCode | string | The tax code applicable for the product. Tax code have configured in the CP first. You can associate the relevant value here
DeliveryTime  | string | The estimated delivery time to be shown on the product page. Example: This product will be delivered in 7 days from the date of order
CatalogSequence | int | Sequence of the product to show up on the storefront
ProductWeight | float | Weight of the product
BankProductId | string | System generated id for the product source
OfferProductDescription | string | .xml file name related to the product offer. Use for sale items
OfferProductImage | string | Preferred image of the offer product (supported formats: .png, jpg,jpeg, .svc, and .gif)
PageTitle | string | Title of the product you prefer to appear in the search results for SEO
Keywords | string | Preferred meta tag search keyword for the product
KeywordDescription | | Description of the specified search keyword
SEOURL | string | The redirect URL when searched on Google
SmallImageAltText | string | The mouse hover text for small image
LargeImageAltText | string | The mouse hover text for large image 
StartDate | date | The date when you want to begin showing the product on the storefront in `DD/MM/YY` format
EndDate | date | The date when you want to end showing the product on the storefront in `DD/MM/YY` format
StartTime | time | The time (on the specified StartDate) from when you want to show the product on the storefront. Format: `HH:MM:SS`
EndTime | time | The time (on the specified EndDate) when you want to stop showing the product on the storefront on the specified end date. Format: `HH:MM:SS`
PeriodicityType | enum | The recurring interval when you want to show the product on the storefront. Values: Monthly, Weekly, oneTime  
PeriodicityRange | string | The days of the recurring interval (PeriodicityType) that you want to show the product. For example: in `Monthly` recurring interval, if you set `PeriodicityRange` 1-30, you will see products on all 30 days of a month. Similarly, in a weekly `PeriodicityType`, if you set 1, 3, 5 in PeriodicityRange, you will see the product on Sun, Tue, and Thu respectively.  No value is required for `oneTime`. To pass multiple days, use comma separated values. For example, 1,2,5,10. You can either pass as 1-5, or 1, 2, 3, 4, 5 and so on. Not required for onetime
ShowExpired | enum | Y, N. To show if the product has to be displayed irrespective of the periodicityRange
UOM | enum | Unit of measurement of the product. Values: ltrs, kgs, gms, pieces
LBH | string | Dimensions of the product (Length*Breadth*Height) or the product volume
BuyingWeight | float | Weight of the product as per the specified UOM. For example, if UOM is kgs then it will consider the specified value in kilo grams
PkgQty | int |  Lot size (package quantity) of the product that can be purchased. Customer can buy the product only in multiples of the specified `PkgQuantity`
MinimumOrderQuantity | int | Minimum allowed product quantity per order
MaximumOrderQuantity | int | Maximum allowed product quantity per order
PreOrder | enum | Preorder facilitates booking or reserving an item in advance, usually prebooking new products even before it is launched. Specify `Y` to allow the product booking in advance, else, specify `N`
BackOrder | enum |Backorder lets users to place an order even if the product is out of stock. Specify `Y` if you want to allow users to place orders even in no stock (0). Specify `N` to disable ordering in case of out of stock
StockAvailableMessage | string | Specify the stock availability message to show on the product page when it goes out of stock. For example, "Stock will be available in 2 days"
ProductCondition | enum | Current condition of the product. Value: New, Used
Warrantybearer | enum | Warranty bearer. Value: No Warranty, Manufacturer, Dealer
WarrantyInMonths | int | Warranty period in months (if Warrantybearer is Manufacturer or Dealer)
ReserveQuantity | int | Quantity of items the merchant needs to reserve for special purposes. For example, merchant could reserve some products to fulfill for loyalty customers
StockAlertQuantity | int | Sends an alert when the quantity of the product is less than this value
BarCode | string | Barcode of the product. You can pass comma separated values in case of multiple bar codes
ModelNumber | string | Model number of the product (if applicable)
CatalogCode | string | Catelogue code of the product (if any)
PurchaseDate | date | Required for the used product. Date when the used product is purchased in `MM:DD:YY` format
ProductNote | string | Additional information to mention about the product for internal reference
FormCode | enum | Predefined form codes for deal products. Ad-hoc Forms allow you to create customised web forms with a number of custom fields and you can use them to receive customized orders from end-users. 
CheckoutWithTokenPrice | enum | Specify `Y` to enable checkout with token price (preorder amount)
TokenPrice | float | The token amount required for preorder (if `CheckoutWithTokenPrice` is enabled)
CostPrice | float | The cost price of the product
HidePrice | enum | Specify `Y` to hide the price on the storefront, `N` to show the product price. You can show 'Price on Request' Call for Action to reveal the price on customer requests
StdProductCode | int | For international standard product, specify the HSN (Homogeneous Serial Number) of the product as per the chosen standard product type
MPN | string | Manufacturer's part number - A unique part number given by the manufacturer of the product
Vendor | enum | Vendor name associated to the measurement for the product (Predefined vendor)
VendorSKU | string | SKU of the product in the vendor system for supplier product
StdProductType | enum | For international standard products, specify the type of identification or HSN of the product type. Values: `UPC` (Universal Product Code), `EAN` (European Article Numbering), `GTIN`  (Global Trade Item Number), `ASIIN`  (Amazon Standard Identification Number), `ISBN10`, `ISBN13` (International Standard Book Number)
FulfillmentServiceRefCode | string | Reference code of the order fulfillment service. These services are required for the fulfillment of a deal or online product deliveries such as music, ringtones, movies. It's mandatory for Local Deals

<aside class="notice"> All parameters marked by * are mandatory.</aside>


### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
taskid | int | Unique id generated for the current update task





## Attach Product Images

Associates images to a parent product, variant product and variant properties & values.

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
URI | `/Product/AttachImages/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Product/AttachImages/{MerchantId}`


### Additional Header Required

Header | Value
------ | -----------
content-type* | Pass this as `application/json`




### Request Body Parameters

PageTitle | Type | Description
------- | ------ | ---------
sku | string | SKU of the item for which you want to add images
images | json obj | Image details to be attached based on the variant property and value
filename | string  | Name of the image file
deepzoom | string | .xml file regarding the zooming effects on mouse hover or product clicks
zoom | string | The large image that you need to show when clicked on the product ((supported formats: .png, jpg,jpeg, .svc, and .gif))
smallimage | string | The small image that appears on the product quick view - showcase (supported formats: .png, jpg,jpeg,.svc, and .gif)
thumbnail | string | Thumbnails of the product images that appears on the product view page (supported formats: .png, jpg,jpeg,.svc, and .gif)
alttext | string | The alternative text or mouse hover text for the image
viewport | enum | The view angle of the current image. Values: Front, Back, Left, Right, Bottom
swatchimages  | obj | A swatch image is used to provide an accurate representation of color, and also illustrate a pattern or texture of a product. A swatch is a small image that represents the accurate color or pattern of each variant
variantproperty | enum | Property name of the current variant. Property names as defined for the merchant
variantvalue | enum | Property value of the current variant. Supported value as defined for the property for the merchant
filename | string | File name of the swatch image with extension (supported formats: .png, jpg,jpeg,.svc, and .gif)
documents | | Documents of the product pertaining to the product information
type | string | Document purpose. Supported Values: Overview, Product Tour, Specifications, Menu, How it works, Terms and Conditions
seoinfo | string | Search Engine Optimization of the document
filename | string | Document type with extension. Supported formats: .doc, .docx, .pdf
sequence | int | Sequence order of the respective document/picture/video on the product page
videos | obj | Videos related to the product   
type | string | Source of the video. Supported Values: YouTube, Vimeo, Scribd, 
seoinfo | string | Search Engine Optimization information of the video
filename | string | Filename of the video with the respective extension
view360 | obj | 3d images of the product
type | string | Type of the view 360 degree file name. Value: `local_flash`

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
Taskid | int | Unique id generated for the current task












## Get SKU Price

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Price/f48fdd16-92db-4188-854d-1ecd9b62e234
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
URI | `/Product/Price/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Price/{MerchantId}`


### Additional Header Required

Header | Value
------ | -----------
content-type* | Pass this as `application/json`



### Request Body Parameters Information
Parameter | Type | Description 
--------- | -------- | -----------
sku* | string | SKU of the item
variantsku | string | SKU of the variant product (required for variant product)
usergroupid | int | Specify the user group id associated to the price list
locationrefcode  | string | Location/store code associated to the price list
channelrefcode | string  | Channel reference code to which the price list is associated

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
usergroupname | string | Name of the user group. It can be related to promotions, subscription events, etc.
tokenprice | float | Minimum amount required for the customer for prebooking the item
channelrefcode | string | Channel code to which the price list is associated




## Get Product Price and Inventory (LocationStockPrice)

Retrieves the details of inventory and price of a specific product across all locations or a particular location based on the input parameters passed.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/f48fdd16-92db-4188-854d-1ecd9b62d066/LocationStockPrice

```




> Sample POST Request (RAW)

```json

MerchantId=f48fdd16-92db-4188-854d-1ecd9b62d066&sku=&variantsku=&productid=14106036&locationid=17586


```



> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "LocationStockPrices": [
        {
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "PriceListId": 0,
            "LocationId": 17586,
            "UserGroupId": 0,
            "ProductId": 14106036,
            "VariantProductId": 10178766,
            "Quantity": 0,
            "MRP": 0,
            "WebPrice": 0,
            "Inventory": "100"
        },
        {
            "MerchantId": "f48fdd16-92db-4188-854d-1ecd9b62d066",
            "PriceListId": 2838,
            "LocationId": 18340,
            "UserGroupId": 8402,
            "ProductId": 14106036,
            "VariantProductId": 0,
            "Quantity": 0,
            "MRP": 0,
            "WebPrice": 0,
            "Inventory": "11"
        }
    ]

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/LocationStockPrice`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/{merchantId}/LocationStockPrice`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku | string | SKU of product for which you want to see inventory and price details
variantSKU | string | SKU of variant product for which you want to see inventory and price details
productId | int | Specify the product id for which you want to see inventory and price details
locationId | int | Retrieves the inventory and product details of a specific location


<aside class="notice"> All parameters marked by * are mandatory. </aside>





















## Get Product Information (by Location)

Retrieves the details of a product for a specific location.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Information/9820eca5-d11f-4df1-9b20-983a45ea9631/11982534/16696
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
        "CatalogCode":"",
        "SKU":"100040621",
        "Taxtotal":0,
        "MarkupPrice":0,
        "MarkupType":"",
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
        "ShortDescription":"",
        "TokenPrice":0.0,
        "SmallImage":"",
        "Brandname":"Safal",
        "CategoryId":"CU00333866",
        "CategoryName":"Frozen Mixed Vegetable",
        "Fulldescription":"",
        "NoofReview":"0",
        "BarCode":"9876567892",
        "Inventory":"120",
        "PreOrder":"0",
        "BackOrder":"0",
        "OfferDescription":"",
        "RefProductId":"0",
        "Sellerid":"00000000-0000-0000-0000-000000000000",
        "ShippingCodes":"Cart amount",
        "IsInStock":"true",
        "ProductSequence":0,
        "UOM":"Pieces"
    },
    "ErrorCode":0
}


```

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Information/{merchantId}/{productId}/{locationId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | Yes
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

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
CatlogSequence | int | Sequence of the product in the respective product category to appear on the storefront
MarkupPrice | float | -NA-
MarkupType | string | -NA-
IsShippingConfigured | boolean | Whether the shipping is enabled for the item or not
IsTaxConfigured | boolean | Whether tax is enabled for the item or not
StartDate | date-time | The duration for which the product is shown on the storefront (StartDate - EndDate)
EndDate | date-time | The duration for which the product is shown on the storefront (StartDate - EndDate)
SeoURL | string | The SEO friendly URL of the product 
TokenPriceCheckout | float | Minimum amount required for the customer to reserve the item during checkout and purchase later on
IsReferPrice | boolean | -NA-
NoofReview | string | Number of reviews received for the product
UOM | string | Unit of measurement of the product. It could be `pieces` for the items that are sold in numbers and the respective measure for other items such as kgs, and gms 





## Get Product Information with Attributes
Retrieves details of a specific product along with the product attributes based on the product id passed.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/InformrationNAttr/993c939a-a2e8-4934-bbf5-390f37457a55/13036942

```

> Sample Response

```json
{
   "Message":"Successful",
   "messageCode":"1004",
   "Products":[
      {
         "ProductId":"13036942",
         "ProductTitle":"AutomationProduct_pdd",
         "MRP":"9999",
         "WebPrice":"9995",
         "Rating":"0",
         "IsParentProduct":"True",
         "Availability":"True",
         "BrandId":"Nik002",
         "CatlogSequence":"0",
         "CatalogCode":"",
         "SKU":"AutoSKU085",
         "BulkQuantity":"1",
         "ProductWeight":"0",
         "ProductType":"A",
         "SmallImageAltText":"",
         "StartDate":"1/1/1900",
         "EndDate":"1/1/1900",
         "DeliveryTime":"",
         "IsTokenPriceCheckout":"False",
         "ShortDescription":"",
         "TokenPrice":"0",
         "CategoryId":"CU00366336",
         "Inventory":"1200",
         "PreOrder":"1",
         "BackOrder":"0",
         "RefProductId":"0",
         "Sellerid":"00000000-0000-0000-0000-000000000000",
         "ShippingCodes":[

         ],
         "ReserveQuantity":"0",
         "ProductVariantList":[

         ],
         "lstProductAttribute":[
            {
               "Attributeid":"CU00366336-002",
               "Name":"ClothMaterial",
               "Unit":"1",
               "Iscompulsory":false,
               "Ispredefined":false,
               "Description":"",
               "Attributegroup":"1",
               "AttributeValue":"1",
               "ObjAttributeValueEnt":[

               ],
               "IsDisplay":false,
               "CategoryId":"CU00366336",
               "Rank":0,
               "PredefinedValueId":0,
               "IsParentCategoryAttribute":false,
               "AttributeValueId":"",
               "DataType":"String",
               "NoOfColumns":1,
               "ReferenceCode":"cmat"
            },
            {
               "Attributeid":"CU00366336-001",
               "Name":"Fit",
               "Unit":"1",
               "Iscompulsory":false,
               "Ispredefined":false,
               "Description":"",
               "Attributegroup":"2",
               "AttributeValue":"1",
               "ObjAttributeValueEnt":[

               ],
               "IsDisplay":false,
               "CategoryId":"CU00366336",
               "Rank":1,
               "PredefinedValueId":0,
               "IsParentCategoryAttribute":false,
               "AttributeValueId":"",
               "DataType":"String",
               "NoOfColumns":0,
               "ReferenceCode":"fit"
            },
            {
               "Attributeid":"CU00366334-001",
               "Name":"new",
               "Unit":"1",
               "Iscompulsory":false,
               "Ispredefined":false,
               "Description":"",
               "Attributegroup":"new",
               "AttributeValue":"1",
               "ObjAttributeValueEnt":[

               ],
               "IsDisplay":false,
               "CategoryId":"CU00366334",
               "Rank":1,
               "PredefinedValueId":0,
               "IsParentCategoryAttribute":false,
               "AttributeValueId":"",
               "DataType":"String",
               "NoOfColumns":0,
               "ReferenceCode":"CU00366334_001"
            }
         ],
         "IsLocationShip":"True",
         "DeliveryOptions":{
            "IsLocationShip":"True",
            "IsOffline":"False",
            "IsOnline":"False",
            "IsShip":"True"
         },
         "BrandName":"NIKE",
         "IsInStock":"True",
         "IsQtyBasedPricing":"False",
         "SoldOut":"False"
      }
   ]
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/InformationNAttr/{merchantid}/{productid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/InformationNAttr/{merchantid}/{productid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productid* | int | Unique id of the product that you want to fetch


<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
-------- | ----- | -----------
CatlogSequence | int | Sequence of the product in the respective product category (to appear on the storefront)
CatalogCode | string | Catalog code associated to the product
BulkQuantity | int | Lot size or batch size of the product. Value will 0 if not applicable
ProductType | enum | Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product, `D` for deal product
SmallImageAltText | string | Mouse hover text for small image
IsTokenPriceCheckout | boolean | For out of stock products, you can sell them as pre-orders allowing customers to book an item with a minimum price (token price) and pay rest when the product is in stock. This parameter states whether the product supports pre-order booking with token price or not.
TokenPrice | float | Token price for preorder if `IsTokenPriceCheckout` is enabled
CategoryId | string | Products are grouped into categories based on the type and each category will have a unique category id
Inventory | int | The number of products (stock) available 
BackOrder | enum | Whether the order can be placed even when the product is out of stock
Sellerid | string | Unique GUID of the product seller
ReserveQuantity | int | Quantity of items reserved for special purposes. For example, merchant could reserve some products for the fulfillment for loyalty customers
_ProductAttribute | obj | Details of each product attribute in prefex 1st, 2nd, 3rd and so on.








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
        "CatalogCode":"",
        "SKU":"100040621",
        "Taxtotal":0,
        "MarkupPrice":0,
        "MarkupType":"",
        "BulkQuantity":0,
        "ProductWeight":0.0,
        "ProductType":"P",
        "SmallImageAltText":"0",
        "IsShippingConfigured":false,
        "IsTaxConfigured":false,
        "StartDate":"\/Date(1537209000000+0530)\/",
        "EndDate":"\/Date(1537295400000+0530)\/",
        "SeoURL":"",
        "DeliveryTime":"Delivered in 5 Working days",
        "TokenPriceCheckout":false,
        "IsReferPrice":false,
        "ShortDescription":"",
        "TokenPrice":0.0,
        "SmallImage":"",
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
HTTP Methods | GET
Batch Support | Yes
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Product/SKU/{merchantId}/{sku}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string | SKU of the product that you want to fetch

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CatlogSequence | int | Sequence of the product in the respective product category to appear on the storefront
BulkQuantity | int | Lot size or batch size of the product. Value will be `0` if not applicable 
NoofReview | string | Number of reviews received for the product
UOM | string | Unit of measurement of the product. The value will be `pieces` for items that are sold as pieces and the respective measure for other items sold on weight basis -`kgs` for kilograms, and `gms` for grams




## Get Products by Product Tag & Location


Retrieves products with a specific product tag in a given location.



> Sample Request

```html
https://www.martjack.com/developerapi/Product/993c939a-a2e8-4934-bbf5-390f37457a55/Automation9/24342

```




> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Products":[
      {
         "ProductId":13038134,
         "ProductTitle":"TShirt Product 01",
         "MRP":1500,
         "WebPrice":1350,
         "CostPrice":0,
         "Rating":2,
         "IsParentProduct":true,
         "Availability":true,
         "BrandId":"0",
         "CatlogSequence":0,
         "CatalogCode":"",
         "SKU":"tshirt-001",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"t-shirt",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "SeoURL":"http://www.example.martjack.com/products/mens-t-shirts/nike/tshirt-product-01/pid-13038134.aspx",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"NIKE",
         "CategoryId":"CU00366336",
         "CategoryName":"T-Shirts",
         "Fulldescription":null,
         "NoofReview":"12",
         "BarCode":"",
         "ProductSequence":1,
         "UOM":"Pieces"
      },
      {
         "ProductId":13038136,
         "ProductTitle":"TShirt Product 02",
         "MRP":1500,
         "WebPrice":1350,
         "CostPrice":0,
         "Rating":0,
         "IsParentProduct":true,
         "Availability":true,
         "BrandId":"0",
         "CatlogSequence":0,
         "CatalogCode":"",
         "SKU":"tshirt-002",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"TShirt Product 02",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "SeoURL":"http://www.example.martjack.com/products/mens-t-shirts/nike/tshirt-product-02/pid-13038136.aspx",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"NIKE",
         "CategoryId":"CU00366336",
         "CategoryName":"T-Shirts",
         "Fulldescription":null,
         "NoofReview":"0",
         "BarCode":"",
         "ProductSequence":0,
         "UOM":"Pieces"
      }
   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/{productTag}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/{merchantId}/{productTag}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productTag* | string | Specify the name of product tag by which you want to fetch products
locationId* | int | Location id for which you want to fetch products with specified tag


<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Get Products (by Type & Page Number)

Retrieves the details of products of a specific category by product type and page number.







> Sample Request

```html
https://www.martjack.com/developerapi/Product/Category/f48fdd16-92db-4188-854d-1ecd9b62d066/CU00333414/P/1

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Products": [
        {
            "ProductId": 11996474,
            "ProductTitle": "Y Cook Sweet, Corn Kernels Boiled,African Peri, Peri Seasoning, 100g Pouch",
            "MRP": 35,
            "WebPrice": 35,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "298460",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100646952",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Y Cook Sweet, Corn Kernels Boiled,African Peri, Peri Seasoning, 100g Pouch",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.hyctest.nightlysites.capillary.in/y-cook-sweet-corn-kernels-boiledafrican-peri-peri-seasoning-100g-pouch/p/11996474",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Healthy No 1",
            "CategoryId": "CU00333414",
            "CategoryName": "Fresh Vegetables",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        },
        {
            "ProductId": 11997154,
            "ProductTitle": "Y Cook Sweet Corn Boiled - Double, 2 Pieces Pouch",
            "MRP": 68,
            "WebPrice": 68,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "298460",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100646951",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Y Cook Sweet Corn Boiled - Double, 2 Pieces Pouch",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.hyctest.nightlysites.capillary.in/y-cook-sweet-corn-boiled---double-2-pieces-pouch/p/11997154",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Healthy No 1",
            "CategoryId": "CU00333414",
            "CategoryName": "Fresh Vegetables",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        }
]
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Category/{merchantId}/{categoryId}/{productType}/{pageNumber}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Category/{merchantId}/{categoryId}/{productType}/{pageNumber}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
categoryId* | string | Unique id of the category by which you want to fetch products
productType | enum | Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product, `D` for deal product 
pageNumber | int | Get products of a specific page number based on the pagination set. Supported value: 1-100


<aside class="notice"> All parameters marked by * are mandatory. </aside>







## Get Multiple Parent Products


Retrieves the details of parent products based on the variant product ids you specify. You can pass multiple variant product IDs (batch) in a request.




> Sample Request

```html
https://www.martjack.com/developerapi/Product/993c939a-a2e8-4934-bbf5-390f37457a55/GetMultipleParentproducts

```

> Sample POST Request (RAW)

```json
MerchantId=993c939a-a2e8-4934-bbf5-390f37457a55&varientProductIds=10603855,10604855

```



> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "ProductVarient":[
      {
         "variantProductId":"10603855",
         "productId":14577393,
         "MRP":1000,
         "WebPrice":900,
         "SKU":"AutoVarSKU28625553183",
         "Inventory":100,
         "ReferenceProductVariantId":0,
         "productType":"",
         "merchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
         "BulkQuantity":1,
         "Availability":true,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "CostPrice":0,
         "BarCode":"",
         "CatalogCode":"",
         "IsDropShipping":false,
         "MarkupPrice":0,
         "MarkupType":"",
         "IsReferProductInfo":false,
         "IsReferPrice":false,
         "TokenPrice":0,
         "Flag":null,
         "ReserveQuantity":0,
         "ReOrderStockLevel":0,
         "StockAlertQuantity":0,
         "PreOrderMessage":"",
         "PreOrder":false,
         "BackOrder":false,
         "IsStockEnabled":false,
         "WebPriceWithoutDiscount":0,
         "ProductVariantValueViews":[
            {
               "valueId":18096205,
               "variantProductId":10603855,
               "variantPropertyId":14682,
               "variantPropertyValueId":319514,
               "IsDisplaySwatch":false,
               "Rank":2,
               "variantPropertyName":"Size",
               "variantValue":"Small",
               "flag":""
            }
         ]
      },
      {
         "variantProductId":"10604855",
         "productId":14577393,
         "MRP":1000,
         "WebPrice":900,
         "SKU":"AutoVarSKU28625553183",
         "Inventory":100,
         "ReferenceProductVariantId":0,
         "productType":"",
         "merchantId":"993c939a-a2e8-4934-bbf5-390f37457a55",
         "BulkQuantity":1,
         "Availability":true,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "CostPrice":0,
         "BarCode":"",
         "CatalogCode":"",
         "IsDropShipping":false,
         "MarkupPrice":0,
         "MarkupType":"",
         "IsReferProductInfo":false,
         "IsReferPrice":false,
         "TokenPrice":0,
         "Flag":null,
         "ReserveQuantity":0,
         "ReOrderStockLevel":0,
         "StockAlertQuantity":0,
         "PreOrderMessage":"",
         "PreOrder":false,
         "BackOrder":false,
         "IsStockEnabled":false,
         "WebPriceWithoutDiscount":0,
         "ProductVariantValueViews":[
            {
               "valueId":18096205,
               "variantProductId":10604855,
               "variantPropertyId":14682,
               "variantPropertyValueId":319514,
               "IsDisplaySwatch":false,
               "Rank":2,
               "variantPropertyName":"Size",
               "variantValue":"Small",
               "flag":""
            }
         ]
      }
   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/GetMultipleParentproducts`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/{merchantId}/GetMultipleParentproducts`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
variantProductId* | int | Specify the variant product ids for which you want to fetch parent products


<aside class="notice"> All parameters marked by * are mandatory. </aside>



### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description 
-------- | --------- | -----------
VariantProperty | string | Unique id associated to the variant property such as size, color, and weight
VariantPropertyName | string | Name of the variant property
VariantValue | string | Value of that specific variant property
ProductTitle | string | Title of the product that appears on the product's page on the storefront
ProductType | string | Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product, `D` for deal product
BarCode | string | Bar code of the product
CatalogCode | string | Catalog code associated to the product
IsDropShipping | boolean | 
ReserveQuantity | int | Quantity of items reserved for special purposes. For example, merchant could reserve some products for the fulfillment of loyalty customers
ReOrderStockLevel | int | Minimum stock (quantity of the product) level when you want to allow reorder
StockAlertQuantity | int | Sends an alert to the POCs when the quantity of the product is less than this value
PreOrderMessage | string | 
PreOrder | boolean | Whether prebooking is available for the product
BackOrder | boolean | Whether can the product be ordered even when out of stock
IsStockEnabled | boolean | 
WebPriceWithoutDiscount | float | Price on the storefront excluding discount
Rank | int | sequence of the variant product in the 


















## Get Product Variants (by Parent Product ID)

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Varients/9820eca5-d11f-4df1-9b20-983a45ea9631/12322048/true
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



Retrieves all variants of a parent product.



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Varients/{merchantId}/{ParentProductId}/{availability}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | Yes
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Product/Varients/{merchantId}/{ParentProductId}/{availability}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | string |  Unique id of the parent product for which you want to fetch available variants
availability | enum | Specify `active` to get only active variants

<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
ReferenceProductVariantId | int | Reference id of the product variant
StartDate | date-time | The duration (between `StartDate` and `EndDate`) for which the product is shown on the storefront 
EndDate | date-time | The duration (between `StartDate` and `EndDate`) for which the product is shown on the storefront
IsReferPrice | float | -NA-
ReserveQuantity | int | Quantity of items the merchant needs to reserve for special purposes. For example, merchant could reserve some products to fulfill for loyalty customers
ReOrderStockLevel | int | Minimum stock (quantity of the product) when you want to allow reorder
IsDisplaySwatch | boolean | Whether the illustration of accurate representation of color, pattern or texture of the product is shown on the storefront





## Get Product Variants (by Variant ID)

Retrieves the details of all products of a variant (by variant id).

> Sample Request

```html
https://www.martjack.com/developerapi/Product/ProductVarient/0639f7a6-34cc-48b2-9fd9-a80e2ed88dfe/27686

```


> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductVarient": [
        {
            "variantProductId": "27686",
            "productId": 8283282,
            "MRP": 70,
            "WebPrice": 70,
            "SKU": "IN-Veg-Cheese-Rglr-Mdm",
            "Inventory": 15540000,
            "ReferenceProductVariantId": 0,
            "productType": "",
            "merchantId": "98d18d82-ba59-4957-9c92-3f89207a34f6",
            "BulkQuantity": 1,
            "Availability": true,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "CostPrice": 0,
            "BarCode": "",
            "CatalogCode": "",
            "IsDropShipping": false,
            "MarkupPrice": 0,
            "MarkupType": "",
            "IsReferProductInfo": false,
            "IsReferPrice": false,
            "TokenPrice": 0,
            "Flag": null,
            "ReserveQuantity": 0,
            "ReOrderStockLevel": 0,
            "StockAlertQuantity": 0,
            "PreOrderMessage": "",
            "PreOrder": false,
            "BackOrder": false,
            "IsStockEnabled": false,
            "WebPriceWithoutDiscount": 0,
            "ProductVariantValueViews": [
                {
                    "valueId": 5008728,
                    "variantProductId": 27686,
                    "variantPropertyId": 2108,
                    "variantPropertyValueId": 24374,
                    "IsDisplaySwatch": false,
                    "Rank": 1,
                    "variantPropertyName": "Size",
                    "variantValue": "Medium | Serves 2",
                    "flag": ""
                },
                {
                    "valueId": 5008730,
                    "variantProductId": 27686,
                    "variantPropertyId": 2110,
                    "variantPropertyValueId": 24378,
                    "IsDisplaySwatch": false,
                    "Rank": 1,
                    "variantPropertyName": "Strength",
                    "variantValue": "Regular",
                    "flag": ""
                }
            ]
        }
    ],
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/ProductVarient/{MerchantId}/{variantProductId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/ProductVarient/{MerchantId}/{variantProductId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
variantProductId* | int | Unique id of the variant product that you want to fetch

<aside class="notice">All parameters marked by * are mandatory. </aside>
















## Get Attributes of Variant Products


Retrieves all attributes of a variant product for a specific location.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/LocationAttribute/993c939a-a2e8-4934-bbf5-390f37457a55/formalshirt-001/formalshirt-var-001/Begur

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "LocationProductAttribute": [
        {
            "SKU": "formalshirt-001",
            "VariantSKU": "formalshirt-var-001",
            "LocationRefCode": "Begur",
            "Attributeid": "CU00366338-003",
            "AttributeValue": "Cotton_test"
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/LocationAttribute/{merchantId}/{sku}/{variantSku}/{locationRefCode}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/LocationAttribute/{merchantId}/{sku}/{variantSku}/{locationRefCode}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string | SKU of the product
variantsku* | string | SKU of the variant product for which you want to fetch attributes
locationrefcode* | string | Unique location reference code for which you want to see attributes


<aside class="notice"> All parameters marked by * are mandatory. </aside>





## Get Products by Tag

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
           "SeoURL":"http:\/\/www.test.stagesites.capillary.in\/seo-url\/p\/11631476",
           "DeliveryTime":"2-4 days",
           "TokenPriceCheckout":false,
           "IsReferPrice":false,
           "ShortDescription":"api_test",
           "TokenPrice":0.0,
           "SmallImage":"",
           "Brandname":"Fresho",
           "CategoryId":"CU00325882",
           "CategoryName":"Cut & Peeled Fruits",
           "Fulldescription":null,
           "NoofReview":"0",
           "BarCode":"",
           "ProductSequence":0,
           "UOM":"Pieces"
       }
   ],
   "ErrorCode":0
}
```



Retrieves products with a specific product tag.

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/{productTag}/{locationId}`
Response Formats | JSON
HTTP Methods | GET
Batch Support | Yes
Rate Limited? | No
Authentication | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL
`https://{host}/developerapi/Product/{merchantId}/{productTag}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
--------- | ---- | -----------
merchantId* | string | Unique GUID of the merchant
productTag* | string | Associated Tag name by which you want to fetch products
locationId* | int | Fetch products of a specific location. Pass `0` to choose the default location of the merchant


<aside class="notice"> All parameters marked by * are mandatory.</aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
TokenPriceCheckout | float | Prebooking price for the product, i.e., Minimum amount required for the customer to reserve the item during checkout and purchase later on
IsReferPrice | boolean | -NA-
UOM | string | Unit of measurement of the product. Value will be `pieces` for items that are sold in numbers and `kgs` or `gms` for items sold in kilograms or grams respectively



## Get Multiple Products Information

Retrieves the details of multiple products based on the product ids passed.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/993c939a-a2e8-4934-bbf5-390f37457a55/GetMultipleProductInformation

```

> Sample POST Request (RAW)

```json
MerchantId=993c939a-a2e8-4934-bbf5-390f37457a55&productIds=14577401,14577451
```



> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Products":[
      {
         "ProductId":14577401,
         "ProductTitle":"AutoTitle11316542375",
         "MRP":1000,
         "WebPrice":900,
         "CostPrice":0,
         "Rating":0,
         "IsParentProduct":true,
         "Availability":true,
         "BrandId":"322101",
         "CatlogSequence":0,
         "CatalogCode":"",
         "SKU":"AutoSKU77721210280",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"AutoTitle11316542375",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "SeoURL":"http://www.testorg2.martjack.com/products/automation-productaddupdate/automation/autotitle11316542375/pid-14577401.aspx",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"Automation",
         "CategoryId":"CU00379869",
         "CategoryName":"productadd/update",
         "Fulldescription":null,
         "NoofReview":"0",
         "BarCode":"",
         "Inventory":"100",
         "PreOrder":"0",
         "BackOrder":"0",
         "RefProductId":"0",
         "ProductSequence":0,
         "UOM":"Pieces"
      },
      {
         "ProductId":14577451,
         "ProductTitle":"AutoTitle64610622188",
         "MRP":1000,
         "WebPrice":900,
         "CostPrice":0,
         "Rating":0,
         "IsParentProduct":false,
         "Availability":false,
         "BrandId":"322101",
         "CatlogSequence":0,
         "CatalogCode":"",
         "SKU":"AutoSKU36398752078",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"AutoTitle64610622188",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(1549521000000+0530)/",
         "EndDate":"/Date(1579737600000+0530)/",
         "SeoURL":"http://www.testorg2.martjack.com/products/automation-productaddupdate/automation/autotitle64610622188/pid-14577451.aspx",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"AutomationProduct",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"Automation",
         "CategoryId":"CU00379869",
         "CategoryName":"productadd/update",
         "Fulldescription":null,
         "NoofReview":"0",
         "BarCode":"87451721735",
         "Inventory":"100",
         "PreOrder":"1",
         "BackOrder":"0",
         "RefProductId":"0",
         "ProductSequence":0,
         "UOM":"Pieces"
      }
   ],
   "ErrorCode":0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{merchantId}/GetMultipleProductInformation`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | Yes

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/{merchantId}/GetMultipleProductInformation`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant



<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
Rating | int | Rating received for the product from customers
IsParentProduct | boolean | Whether the product is a parent product or not
Availability | boolean | Whether the product is in stock or not
BrandId | int | Unique id of the product brand
CatlogSequence | int | Sequence of the product in the respective product category as on the storefront
CatalogCode | string | Catalog code associated to the product
StartDate | date | The duration for which the product is shown on the storefront (StartDate - EndDate)
EndDate | date | The duration for which the product is shown on the storefront (StartDate - EndDate)
SmallImageAltText | string | The mouse hover text for small image
SeoURL | string | The redirect URL when searched on Google
BackOrder | enum |  Can the product be ordered even when it is out of stock
NoofReview | int | Number of reviews available for the product
TokenPriceCheckout | float | Prebooking price - Minimum amount required for the customer to reserve the item during checkout and purchase later on
UOM | string | Unit of measurement of the product. It could be the `pieces` for items that are sold in numbers and the respective measure for other items such as kgs, and gms




## Get Products Tags

Retrieves all the product tags associated to a product.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/GetProductsTagsByProductId/20993c939a-a2e8-4934-bbf5-390f37457a55/13036942

```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ProductTags": [
	{
  	"Tag": "Best-Prices",
  	"TagDescription": null,
  	"CreateDate": "/Date(1527842767000+0530)/"
	},
	{
  	"Tag": "FE",
  	"TagDescription": null,
  	"CreateDate": "/Date(1527842767000+0530)/"
	},
	{
  	"Tag": "New Tag 01",
  	"TagDescription": null,
  	"CreateDate": "/Date(1525795514000+0530)/"
	}
  ],
  "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/GetProductsTagsByProductId/{merchantid}/{productid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/GetProductsTagsByProductId/{merchantid}/{productid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Specify the product id to fetch the product tags associated to it


<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Get Products by Category

Retrieves product details based on the category id passed.


> Sample Request

```html
https://www.martjack.com/developerapi/Product/Category/188a59ab-e1b0-4dae-be64-654f5c4dd531/CU00378213/ALL
```




> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "Products":[
      {
         "ProductId":14498019,
         "ProductTitle":"ALDA GRAPHITO NON STICK GRILL PAN  26 CM",
         "MRP":1490,
         "WebPrice":1341,
         "CostPrice":0,
         "Rating":0,
         "IsParentProduct":false,
         "Availability":true,
         "BrandId":"318923",
         "CatlogSequence":2,
         "CatalogCode":"",
         "SKU":"027617",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"ALDA GRAPHITO NON STICK GRILL PAN  26 CM",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "SeoURL":"https://www.onlydbest.in/alda-graphito-non-stick-grill-pan--26-cm/p/14498019",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"ALDA GRAPHITO NON STICK GRILL PAN  26 CM",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"ALDA GRAPHITO",
         "CategoryId":"CU00378213",
         "CategoryName":"Grill Pans",
         "Fulldescription":null,
         "NoofReview":"0",
         "BarCode":"",
         "ProductSequence":2,
         "UOM":"Pieces"
      },
      {
         "ProductId":14559259,
         "ProductTitle":"Vinod Non Stick Double Griller Zpsgdw",
         "MRP":2490,
         "WebPrice":2241,
         "CostPrice":0,
         "Rating":0,
         "IsParentProduct":false,
         "Availability":true,
         "BrandId":"318939",
         "CatlogSequence":2,
         "CatalogCode":"",
         "SKU":"010788",
         "Taxtotal":0,
         "MarkupPrice":0,
         "MarkupType":"",
         "BulkQuantity":1,
         "ProductWeight":0,
         "ProductType":"P",
         "SmallImageAltText":"Vinod Non Stick Double Griller Zpsgdw",
         "IsShippingConfigured":false,
         "IsTaxConfigured":false,
         "StartDate":"/Date(-2209008600000+0530)/",
         "EndDate":"/Date(-2209008600000+0530)/",
         "SeoURL":"https://www.onlydbest.in/vinod-non-stick-double-griller-zpsgdw/p/14559259",
         "DeliveryTime":"",
         "TokenPriceCheckout":false,
         "IsReferPrice":false,
         "ShortDescription":"Vinod Non Stick Double Griller Zpsgdw",
         "TokenPrice":0,
         "SmallImage":"",
         "Brandname":"VINOD",
         "CategoryId":"CU00378213",
         "CategoryName":"Grill Pans",
         "Fulldescription":null,
         "NoofReview":"0",
         "BarCode":"",
         "ProductSequence":2,
         "UOM":"Pieces"
      }
   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Category/{merchantid}/{CatagoryId}/{availibility}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Category/{merchantid}/{CatagoryId}/{availibility}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
CatagoryId* | int | Unique category id by which you want to fetch products
availibility* | enum | Specify `Active` to get only active products, `All` to get all products


<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.

Parameter | Type | Description
--------- | ---- | -----------
CatlogSequence | int | Sequence of the product in the respective product category to appear on the storefront
IsShippingConfigured | boolean | Whether the shipping is enabled for the item or not
IsTaxConfigured | boolean | Whether tax is enabled for the item or not
StartDate | date-time | The duration for which the product is shown on the storefront (StartDate - EndDate)
EndDate | date-time | The duration for which the product is shown on the storefront (StartDate - EndDate)
SeoURL | string | The SEO friendly URL of the product 
TokenPriceCheckout | float | Minimum amount required for the customer to reserve the item during checkout and purchase later on
IsReferPrice | boolean | -NA-
NoofReview | string | Number of reviews received for the product
UOM | string | Unit of measurement of the product. It could be `pieces` for the items that are sold in numbers and the respective measure for other items such as kgs, and gms 






























## Add Review

```html
https://www.martjack.com/developerapi/Product/AddReview/81e77da2-723b-483d-8c0d-49f800c1exxx/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx/PZLG-WM
```

> Sample POST Request

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
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/AddReview/{MerchantId}/{UserId}/{SKU}`



### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Specify the merchant id for which the review has to be associated
UserId* | string | Specify the unique id of the customer that provided the review
SKU* | string  | Specify the product SKU for which the review has to be associated

<aside class="notice"> All parameters marked by * are mandatory </aside>

### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
title* | string | Specify the title of the product review as provided by the customer
message* | string | Specify the entire review content as entered by the customer
isGoLive* | boolean | Specify `true` to show the review on the storefront, `false` to hide it 

<aside class="notice"> All parameters marked by * are mandatory.</aside>




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
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/GetReviews/{MerchantId}/{Sku}`


### Request Body Parameters

Parameter | Type | Description
--------- | --- | ----------- 
MerchantId* | string | The unique GUID of the merchant
Sku* | string | SKU of the product for which you want to fetch reviews

<aside class="notice"> All parameters marked by * are mandatory.</aside>








## Update Product Attribute

Lets you update an attribute of a product by SKU or product id.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/UpdateProductAttribute/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx

```


> Sample POST Request

```json

MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData={
  "ProductAttribute": {
    "sku": "Fruits0023",
    "variantsku": "Fruits0023-1",
    "locationrefcode": "Hyd001",
    "AttributeId": "CU00325850-001",
    "AttributeValue": "NewValue",
    "ProductId": "11631696"
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



### Resource Information
| | |
--------- | ----------- |
URI | `Product/UpdateProductAttribute/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/UpdateProductAttribute/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
sku | string | SKU of the product for which you want to update attributes
variantsku | string | SKU of the variant product 
locationrefcode | string | Location reference code of the product
AttributeId | string | Unique id of the attribute that you want to update
AttributeValue | string | New value of the current attribute
ProductId | int | Unique id of the product (to update product by product id)



## Get Bundle Items by Bundle Product ID

Retrieves the items of a specific bundle by product id. You can also fetch the details of all default items of each bundle group. 


> Sample Request

```html
https://www.martjack.com/developerapi/Product/GetBundleItemsbyBundleProductId/4d00cd2b-28e8-4950-b8b9-2ecf50e88933/8284396

```


> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "BundleItems": [
        {
            "ProductId": 8284396,
            "VariantProductId": "28732",
            "ProductSku": "IN-veg-GreenCapsicum",
            "VariantSKU": "IN-veg-GreenCapsicum-Rglr-Mdm",
            "ProductTitle": "Green Capsicum",
            "ProductType": "A",
            "MRP": 70,
            "WebPrice": 70
        },
        {
            "ProductId": 8284396,
            "VariantProductId": "28734",
            "ProductSku": "IN-veg-GreenCapsicum",
            "VariantSKU": "IN-veg-GreenCapsicum-Rglr-Sml",
            "ProductTitle": "Green Capsicum",
            "ProductType": "A",
            "MRP": 50,
            "WebPrice": 50
        },
        {
            "ProductId": 8284396,
            "VariantProductId": "29028",
            "ProductSku": "IN-veg-GreenCapsicum",
            "VariantSKU": "IN-Veg-GreenCapsicum-GrDip",
            "ProductTitle": "Green Capsicum",
            "ProductType": "A",
            "MRP": 100,
            "WebPrice": 100
        },
        {
            "ProductId": 8283298,
            "VariantProductId": "27750",
            "ProductSku": "IN-Veg-Onion",
            "VariantSKU": "IN-Veg-Onion-Rglr-Mdm",
            "ProductTitle": "Onion",
            "ProductType": "A",
            "MRP": 70,
            "WebPrice": 70
        },
        {
            "ProductId": 8283298,
            "VariantProductId": "27754",
            "ProductSku": "IN-Veg-Onion",
            "VariantSKU": "IN-Veg-Onion-Rglr-Sml",
            "ProductTitle": "Onion",
            "ProductType": "A",
            "MRP": 50,
            "WebPrice": 50
        },
        {
            "ProductId": 8283298,
            "VariantProductId": "28984",
            "ProductSku": "IN-Veg-Onion",
            "VariantSKU": "IN-Veg-Onion-GrDip",
            "ProductTitle": "Onion",
            "ProductType": "A",
            "MRP": 100,
            "WebPrice": 100
        },
        {
            "ProductId": 8283296,
            "VariantProductId": "27742",
            "ProductSku": "IN-Veg-Sweet-Corn",
            "VariantSKU": "IN-Veg-Sweet-Corn-Rglr-Mdm",
            "ProductTitle": "Sweet Corn",
            "ProductType": "A",
            "MRP": 70,
            "WebPrice": 70
        },
        {
            "ProductId": 8283296,
            "VariantProductId": "27746",
            "ProductSku": "IN-Veg-Sweet-Corn",
            "VariantSKU": "IN-Veg-Sweet-Corn-Rglr-Sml",
            "ProductTitle": "Sweet Corn",
            "ProductType": "A",
            "MRP": 50,
            "WebPrice": 50
        },
        {
            "ProductId": 8283296,
            "VariantProductId": "29014",
            "ProductSku": "IN-Veg-Sweet-Corn",
            "VariantSKU": "IN-Veg-Sweet-Corn-GrDip",
            "ProductTitle": "Sweet Corn",
            "ProductType": "A",
            "MRP": 100,
            "WebPrice": 100
        }
    ],
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/GetBundleItemsbyBundleProductId/{Merchantid}/{Productid}/{isdefault}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/GetBundleItemsbyBundleProductId/{Merchantid}/{Productid}/{isdefault}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
ProductId* | int | Product id of the bundle product that you want fetch
isdefault | boolean | Specify `true` to get the details of only bundle default items

<aside class="notice">All parameters marked by * are mandatory. </aside>



### Response Parameters

Parameter | Type | Description
--------- | ---- | -----------
ProductTitle | string | Product title as appears on the product page of the storefront
ProductType | enum |  Type of the product. Values: `P` for a normal product, `A` for an add-on product, and `B` for a bundle product, `D` for deal product
MRP | float | Retail price of the product
WebPrice | float | Selling price of the product





## Get MSMQ Task Details

Retrieves the details of the specific bulk task. Bulk tools could be bulk product upload, bundle upload, product images upload, pricelist upload, stock-price upload and so on. 

MSMQ: Microsoft Messaging Queue






> Sample Request

```html
https://www.martjack.com/developerapi/Product/MSMQTaskDetails/993c939a-a2e8-4934-bbf5-390f37457a55/7374227

```




> Sample Response

```json
{

    "Message": "Successful",

    "TaskMsmqDetails": {

        "StartDate": "/Date(1550819955000+0530)/",

        "Validations": null,

        "TaskID": 7374227,

        "NoOfRows": 1,

        "TaskName": "LctnWiseStocknPriceUploadTask",

        "CreatedDate": "/Date(1550819985882+0530)/",

        "ParamValue": "/mnt/bulkupload/Resources/993c939a-a2e8-4934-bbf5-390f37457a55/Upload/API_LocationWiseStock[22022019124914475].xlsx",

        "MerchantId": "993c939a-a2e8-4934-bbf5-390f37457a55",

        "LastUpdated": "/Date(1550819985882+0530)/",

        "TaskStatus": "C",

        "ParamName": " (stock-price) "

    },

    "messageCode": "1004",

    "ErrorCode": 0

}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/MSMQTaskDetails/{merchantid}/{taskid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/MSMQTaskDetails/{merchantid}/{taskid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId* | string | Unique GUID of the merchant
taskId* | int | Unique id of the bulk upload task

<aside class="notice">All parameters marked by * are mandatory. </aside>

### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.


Parameter | Type | Description
--------- | ---- | -----------
taskId | int | Unique id generated for the task


## Get MSMQ Error Details

Retrieves error details of a specific bulk upload task. Bulk tools could be bulk product upload, bundle upload, product images upload, pricelist upload, stock-price upload and so on.







> Sample Request

```html
https://www.martjack.com/developerapi/Product/MSMQErrorDetails/993c939a-a2e8-4934-bbf5-390f37457a55/7374227

```




> Sample Response

```json
{

    "Message": "Successful",

    "TaskMsmqDetails": {

        "StartDate": "/Date(1550819955000+0530)/",

        "Validations": null,

        "TaskID": 7374227,

        "NoOfRows": 1,

        "TaskName": "LctnWiseStocknPriceUploadTask",

        "CreatedDate": "/Date(1550819985882+0530)/",

        "ParamValue": "/mnt/bulkupload/Resources/993c939a-a2e8-4934-bbf5-390f37457a55/Upload/API_LocationWiseStock[22022019124914475].xlsx",

        "MerchantId": "993c939a-a2e8-4934-bbf5-390f37457a55",

        "LastUpdated": "/Date(1550819985882+0530)/",

        "TaskStatus": "C",

        "ParamName": " (stock-price) "

    },

    "messageCode": "1004",

    "ErrorCode": 0

}




```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/MSMQErrorDetails/{merchantid}/{taskid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/MSMQErrorDetails/{merchantid}/{taskid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
taskId* | int | Unique id of the bulk upload task

<aside class="notice">All parameters marked by * are mandatory. </aside>




### Response Parameters

Following table contains descriptions of a few response parameters that require more information. It does not include the parameters that are already in the request body or self explanatory.



Parameter | Type | Description
--------- | ---- | -----------
TaskStatus | enum | Status of the task. Values `C` for completed, `U` for in progress, `F` for failed
ParamValue  | string | Path of the file with file name
Task name | string | Name of the task based on the bulk action. Example, LctnWiseStocknPriceUploadTask, ProductPriceListUpload, and BulkProductTagsUpload




## Add Product Tags

Adds tags to a specific product for a particular location. An email will be sent to the registered email id of the merchant when the task is completed.






> Sample Request

```html
https://www.martjack.com/developerapi/product/AddLocationTagtoProduct/0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx

```


> Sample POST Request

```json

MerchantId=0639f7a6-34cc-48b2-9fd9-a80e2ed8xxxx&InputFormat=application/json&InputData=
{
  "products": {
    "product": {
      "sku": "100040621",
      "locationrefcode": "4702",
      "tag": "Discounted"
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



### Resource Information
| | |
--------- | ----------- |
URI | `/product/AddLocationTagtoProduct/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/product/AddLocationTagtoProduct/{merchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string | SKU of the product for which you want to update tags
locationrefcode | int | Unique reference code of the product location to update tags if the specific location 
tag* | string | Tag that you want to add to the product. Tags are predefined for the merchant


<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Remove Product Tag

Removes a tag of a product for a specific location.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/RemoveLocationTagFromProduct/f48fdd16-92db-4188-854d-1ecd9b62d066

```

> Sample POST Request (RAW)

```json

merchantid=f48fdd16-92db-4188-854d-1ecd9b62d066&sku=100359979&producttag=MixTag&locationid=18340

```



> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/RemoveLocationTagFromProduct/{MerchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/RemoveLocationTagFromProduct/{MerchantId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku | string | SKU of the product for which you want to remove a product tag
producttag | string | Name of the product tag that you want to remove
locationid | int | Location id for which you want to remove the product tag

<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Search Products

> Sample Request

```html
https://www.martjack.com/developerapi/Product/81e77da2-723b-483d-8c0d-49f800c1exxx/Search
```

> Sample POST Request

```json
InputFormat=application/json&InputData={
  "merchantId": "9820eca5-d11f-4df1-9b20-983a45ea9631"
}

```



> Sample Response

```json
{
  "Message": "Successful",
  "ProductIds": [
    "11360864",
    "11360866",
    "11360868",
    "11360870",
    "11360872",
    "11360896",
    "11360898",
    "11360900",
    "11360902",
    "11360904",
    "11360906",
    "11360908",
    "11148708"
  ],
  "messageCode": "1004"
}

```

Retrieves product ids based on the input parameters

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/{MerchantId}/Search`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/{MerchantId}/Search`



### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
MerchantId | string | Unique GUID of the merchant
keyword | string | Search product by meta tag keyword
SKU | string  | Search product by SKU
catalogcode | string | Fetch products of a specific catalog code
category | string | Search by category 
brand | string | Search product ids by brand
productTag | string | Search product ids by an associated product tag 
pageNumber | int | Page number from which you want to fetch products on storefront
pageSize | int | Number of results to be shown per page







## Get Product Tags (By ProductId)

Retrieves all the associated product tags based on the product id passed.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/GetProductsTagsByProductId/f48fdd16-92db-4188-854d-1ecd9b62d066/11995006/18340

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductTags": [
        {
            "Tag": "Eggtag",
            "TagDescription": null,
            "CreateDate": "/Date(1522158891000+0530)/"
        },
        {
            "Tag": "13.3HF",
            "TagDescription": null,
            "CreateDate": "/Date(1543886875000+0530)/"
        },
        {
            "Tag": "MixTag",
            "TagDescription": null,
            "CreateDate": "/Date(1544748971000+0530)/"
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/GetProductsTagsByProductId/{merchantid}/{productid}/{locationid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/GetProductsTagsByProductId/{merchantid}/{productid}/{locationid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Unique id of the product for which you want to fetch tags
locationId | int | Location id of the product

<aside class="notice"> All parameters marked by * are mandatory. </aside>




## Get Product Attributes

Retrieves the details of all product attributes (custom fields) associated to the product.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/Attribute/993c939a-a2e8-4934-bbf5-390f37457a55/13036942

```




> Sample Response

```json
{
   "messageCode":"1004",
   "Message":"Successful",
   "ProductAttributes":[
      {
         "Attributeid":"CU00366336-002",
         "Name":"ClothMaterial",
         "Unit":"1",
         "Iscompulsory":false,
         "Ispredefined":false,
         "Description":"",
         "Attributegroup":"1",
         "AttributeValue":"1",
         "ObjAttributeValueEnt":[

         ],
         "IsDisplay":false,
         "CategoryId":"CU00366336",
         "Rank":0,
         "PredefinedValueId":0,
         "IsParentCategoryAttribute":false,
         "AttributeValueId":"",
         "DataType":"String",
         "NoOfColumns":1,
         "ReferenceCode":"cmat"
      },
      {
         "Attributeid":"CU00366334-001",
         "Name":"new",
         "Unit":"1",
         "Iscompulsory":false,
         "Ispredefined":false,
         "Description":"",
         "Attributegroup":"new",
         "AttributeValue":"1",
         "ObjAttributeValueEnt":[

         ],
         "IsDisplay":false,
         "CategoryId":"CU00366334",
         "Rank":1,
         "PredefinedValueId":0,
         "IsParentCategoryAttribute":false,
         "AttributeValueId":"",
         "DataType":"String",
         "NoOfColumns":0,
         "ReferenceCode":"CU00366334_001"
      }
   ],
   "ErrorCode":0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Attribute/{merchantid}/{productid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Attribute/{merchantid}/{productid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productid* | int | Unique id of the product for which you want to fetch attributes.

<aside class="notice"> All parameters marked by * are mandatory. </aside>




















## Get Product Comments

Retrieves a specific comment received for a product based on the post id passed.

> Sample Request

```html
https://www.martjack.com/developerapi/Product/Comments/13038134/28958/993c939a-a2e8-4934-bbf5-390f37457a55
```

> Sample Response

```json
{
  "messageCode": "1004",
  "Message": "Successful",
  "ProductComment": [
	{
  	"Id": "5b09ffb12ac24337b48e3e1e",
  	"ParentId": "5b09ffb12ac24337b48e3e1e",
  	"RootParentId": "5b09ffb12ac24337b48e3e1e",
  	"Type": "C",
  	"UserName": "Capillary ",
  	"TargetName": "TShirt Product 01",
  	"MerchantId": "993c939a-a2e8-4934-bbf5-390f37457a55",
  	"Title": "Title12",
  	"Description": "message18",
  	"ModuleType": "C",
  	"IsGoLive": false,
  	"IsAbusive": false,
  	"HelpfulCount": 0,
  	"NotHelpfulCount": 0,
  	"TotalCount": 0,
  	"HelpfulControlId": "5b09ffb12ac24337b48e3e1e_yes",
  	"NotHelpfulControlId": "5b09ffb12ac24337b48e3e1e_no",
  	"AbusiveControlId": "5b09ffb12ac24337b48e3e1e_abuse",
  	"ReplyControlId": "5b09ffb12ac24337b48e3e1e_reply",
  	"CreatedDateTime": "27-May-2018",
  	"UpdatedDateTime": "27-May-2018",
  	"Margin": "margin-left: 0px;",
  	"Level": 0,
  	"Rating": 4,
  	"RatingClass": "rating_result_verygood",
  	"FacebookScript": "<div class='social_twitter'><fb:like href=\"http://www.testorg2.martjack.com/products/mens-t-shirts/nike/tshirt-product-01/pid-13038134.aspx#5b09ffb12ac24337b48e3e1e\" layout=\"button_count\" show_faces=\"false\" action=\"like\" width=\"100\" font=\"verdana\"></fb:like></div><div class='clear'></div>",
  	"TwitterScript": "<div class='social_twitter'><a href=\"http://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://www.testorg2.martjack.com/products/mens-t-shirts/nike/tshirt-product-01/pid-13038134.aspx#5b09ffb12ac24337b48e3e1e\" data-via=\"\" data-related=\"anywhere:The Javascript API\" data-count=\"horizontal\">Tweet</a></div><div class='clear'></div>",
  	"ShareScript": "<div class=\"addthis_toolbox addthis_default_style \"><a href=\"http://www.addthis.com/bookmark.php?v=250&amp;pubid=xa-4d8997d82887abcd\" class=\"addthis_button_compact\">Share</a></div>"
	},
	{
  	"Id": "5b09faaf2ac24337b48e3e1d",
  	"ParentId": "5b09faaf2ac24337b48e3e1d",
  	"RootParentId": "5b09faaf2ac24337b48e3e1d",
  	"Type": "C",
  	"UserName": "Capillary ",
  	"TargetName": "TShirt Product 01",
  	"MerchantId": "993c939a-a2e8-4934-bbf5-390f37457a55",
  	"Title": "Title18",
  	"Description": "message71",
  	"ModuleType": "C",
  	"IsGoLive": true,
  	"IsAbusive": false,
  	"HelpfulCount": 0,
  	"NotHelpfulCount": 0,
  	"TotalCount": 0,
  	"HelpfulControlId": "5b09faaf2ac24337b48e3e1d_yes",
  	"NotHelpfulControlId": "5b09faaf2ac24337b48e3e1d_no",
  	"AbusiveControlId": "5b09faaf2ac24337b48e3e1d_abuse",
  	"ReplyControlId": "5b09faaf2ac24337b48e3e1d_reply",
  	"CreatedDateTime": "27-May-2018",
  	"UpdatedDateTime": "27-May-2018",
  	"Margin": "margin-left: 0px;",
  	"Level": 0,
  	"Rating": 2,
  	"RatingClass": "rating_result_average",
  	"FacebookScript": "<div class='social_twitter'><fb:like href=\"http://www.testorg2.martjack.com/products/mens-t-shirts/nike/tshirt-product-01/pid-13038134.aspx#5b09faaf2ac24337b48e3e1d\" layout=\"button_count\" show_faces=\"false\" action=\"like\" width=\"100\" font=\"verdana\"></fb:like></div><div class='clear'></div>",
  	"TwitterScript": "<div class='social_twitter'><a href=\"http://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://www.testorg2.martjack.com/products/mens-t-shirts/nike/tshirt-product-01/pid-13038134.aspx#5b09faaf2ac24337b48e3e1d\" data-via=\"\" data-related=\"anywhere:The Javascript API\" data-count=\"horizontal\">Tweet</a></div><div class='clear'></div>",
  	"ShareScript": "<div class=\"addthis_toolbox addthis_default_style \"><a href=\"http://www.addthis.com/bookmark.php?v=250&amp;pubid=xa-4d8997d82887abcd\" class=\"addthis_button_compact\">Share</a></div>"
	}
  ],
  "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Comments/{productid}/{postid}/{merchantid}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Comments/{productid}/{postid}/{merchantid}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productid* | int | Product id for which you want to see a specific comment
postId* | string | Specify the unique post id generated for the actual review (root comment) 


<aside class="notice"> All parameters marked by * are mandatory. </aside>

### Response Parameters

Parameter | Type | Description
-------- | ----- | -----------
Id | string | Unique id of the comment
ParentId | string | Unique id of the comment to which the current reply is posted. This will be same as the id if no parent comment exists 
RootParentId | string | Unique id of the root of the comment (actual review).  This will be same as the id if no parent comment exists
Type | enum | Type will be `C` for comment
UserName | string | Username linked to the customer account who commented
TargetName | string |  Product title to which the comment is posted
Title | string | Title of the root comment
Description | string | Actual content of the comment
ModuleType | enum | Module type will be `C` for comment
IsAbusive | boolean | Whether the comment is abusive or not
HelpfulCount | int | Number of likes (helpful) received to the comment 
NotHelpfulCount | int | Number of dislikes received to the comment
TotalCount | int | Total helpful and not helpful count
HelpfulControlId | string | Unique id associated to the action `Helpful`
NotHelpfulControlId | string | Unique id associated to the action `Not Helpful`
AbusiveControlId | string | Unique id associated to the action `Report Abusive`
ReplyControlId | string | Unique id associated to the action `Reply`
CreatedDateTime | date | Date when the comment was added
UpdatedDateTime | date | Date when the comment was recently updated
Rating | int | Rating provided for the current review





## Get Product Contents

Retrieves additional product information such as images, variant property details, product file repository & groupId.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/Contents/f48fdd16-92db-4188-854d-1ecd9b62d066/14106036

```




> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "ProductContent": [
        {
            "ProductId": 14106036,
            "FileRepositoryGroupId": "51429671",
            "VariantValueId": 0,
            "VariantValueName": "",
            "VariantPropertyId": 0,
            "VariantPropertyName": "",
            "LargeImage": "//images.sg.content-cdn.io/cdn//test-resources/f48fdd16-92db-4188-854d-1ecd9b62d066/Images/ProductImages/Source/;width=500",
            "ThumbNail": "//images.sg.content-cdn.io/cdn//test-resources/f48fdd16-92db-4188-854d-1ecd9b62d066/Images/ProductImages/Source/;width=92",
            "LargeIcon": "http://storage.sg.content-cdn.io/test-resources/f48fdd16-92db-4188-854d-1ecd9b62d066/Images/ProductImages/Swatch/Large_Icon/",
            "ZoomType": "Zoom",
            "ZoomPath": "//images.sg.content-cdn.io/cdn//test-resources/f48fdd16-92db-4188-854d-1ecd9b62d066/Images/ProductImages/Source/;width=100",
            "ZoomContent": null,
            "LargeImageSequence": 1,
            "FileName": "",
            "ProductFileRepositoryId": 0,
            "FileType": "AdditionalImage",
            "ContentType": "LargeImage",
            "Sequence": 0,
            "DeepZoomPath": ""
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Contents/{merchantId}/{productId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Contents/{merchantId}/{productId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Unique id of the product for which you want to see additional content details


<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Get Featured Products

Retrieves featured products of the merchant. Featured products are a great way to promote intended products or brands on the ecommerce platform.



> Sample Request

```html
https://www.martjack.com/developerapi/Product/Featured/f48fdd16-92db-4188-854d-1ecd9b62d066

```



> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Products": [
        {
            "ProductId": 11982546,
            "ProductTitle": "Amul Kool Milkshake - Badam, 200ml Pack bottle",
            "MRP": 15,
            "WebPrice": 15,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "0",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100703792",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Amul Kool Milkshake - Badam, 200ml Pack bottle",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.hyctest.nightlysites.capillary.in/amul-kool-milkshake---badam-200ml-pack-bottle/p/11982546",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Amul",
            "CategoryId": "CU00333530",
            "CategoryName": "Flavoured Milk",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `Product/Featured/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Featured/{merchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant


<aside class="notice"> All parameters marked by * are mandatory. </aside>


















## Update Product Stock (of Default Location)


Updates inventory or stock of a product for the default location.







> Sample Request

```html
https://www.martjack.com/developerapi/product/updatestock

```

> Sample POST Request (RAW)

```json
merchantid={{MerchantId}}&sku=100556&Inventory=100


```


> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/product/updatestock`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/product/updatestock`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string | SKU of the product for which you want to update inventory
Inventory* | int | New stock count that you want to update with



<aside class="notice"> All parameters marked by * are mandatory. </aside>












## Update Product Stock (by Location)

Updates inventory of a product for a specific location.


> Sample Request

```html
https://www.martjack.com/developerapi/Product/UpdateLocationProductStock

```


> Sample POST Request

```json
merchantid=f48fdd16-92db-4188-854d-1ecd9b62d066&sku=100359979&locationReferenceCode=Hyd001&Inventory=100
```


> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/UpdateLocationProductStock`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/UpdateLocationProductStock`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
sku* | string | Unique SKU of the product that you want to update
locationReferenceCode* | string | Unique location reference code for which you want to update the product inventory
Inventory* | int | New stock count available for sale or distribution


<aside class="notice"> All parameters marked by * are mandatory. </aside>





## Get Similar Products

Retrieves similar products based on the product id passed. Similar products are either mapped manually or automatically in the CP based on the criteria set. These are used for cross selling.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/Similar/f48fdd16-92db-4188-854d-1ecd9b62d066/11997154/0

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Products": [
        {
            "ProductId": 11991732,
            "ProductTitle": "Sangam Eggs - Nutri, 6 Pieces Pack",
            "MRP": 26,
            "WebPrice": 26,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "284010",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100492832",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Sangam Eggs - Nutri, 6 Pieces Pack",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.example.nightlysites.capillary.in/sangam-eggs---nutri-6-pieces-pack/p/11991732",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Sangam",
            "CategoryId": "CU00333436",
            "CategoryName": "Regular Eggs",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        }
    ],
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/Similar/{merchantId}/{productId}/{LocationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/Similar/{merchantId}/{productId}/{LocationId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Unique id of the product for which you want to fetch similar products
LocationId* | int | Fetch similar products by location id of the product

<aside class="notice"> All parameters marked by * are mandatory. </aside>





## Get Tier Price Details

Retrieves tier pricing of a product associated to a user group for a specific location. Tier pricing refers to the variation of the product price based on the purchase quantity and user group.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/GetTierPriceDetailsbyproductId/993c939a-a2e8-4934-bbf5-390f37457a55/0639f7a6-34cc-48b2-9fd9-a80e2ed87458/13037156/24342

```




> Sample Response

```json

{
    "messageCode": "1004",
    "Message": "Successful",
    "TierPrice": [
        {
            "MRP": 1500,
            "Qty": 1,
            "Webprice": 1100
        },
        {
            "MRP": 1400,
            "Qty": 3,
            "Webprice": 1000
        }
    ],
    "ErrorCode": 0
}

```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/GetTierPriceDetailsbyproductId/{merchantId}/{userId}/{productId}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/GetTierPriceDetailsbyproductId/{merchantId}/{userId}/{productId}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
userId* |  string | Unique GUID of the user to get tier price associated to the user group 
productId* | int | Unique id of the product for which you want to see tier pricing details
locationId* | int | Location id for which you want to see tier pricing


<aside class="notice"> All parameters marked by * are mandatory. </aside>






## Check PIN Code Serviceability of a Product 



Checks whether a product can be shipped to a specific PIN code.







> Sample Request

```html
https://www.martjack.com/developerapi/Product/PincodeServiceability/f48fdd16-92db-4188-854d-1ecd9b62d066/11997156

```

> Sample POST Request (RAW)

```json

MerchantId=f48fdd16-92db-4188-854d-1ecd9b62d066&productid=11997156&pincode=500090&locationid=18340

```


> Sample Response

```json
{
    "messageCode": "1027",
    "Message": "Service is not available.",
    "IsServiceable": "False",
    "ServiceableForPostpaid": "False",
    "ServiceableForPrepaid": "False",
    "ErrorCode": 0
}


```



### Resource Information
| | |
--------- | ----------- |
URI | `/Product/PincodeServiceability/{merchantId}/{productId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | POST
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/PincodeServiceability/{merchantId}/{productId}`


### Request Body Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Product id to check the serviceability
pincode* | int | Checks the serviceability for the PIN code specified here
locationid* | int | Specify the location id of the specified PIN code. A location will  have multiple PIN codes


<aside class="notice"> All parameters marked by * are mandatory. </aside>









## Get Product IDs (Auto Complete)

Retrieves product ids of a specific location matching the search keyword. You can limit the number of results to display.

> Sample Request

```html
http://www.martjack.com/developerapi/Product/ProductAutoComplete/993c939a-a2e8-4934-bbf5-390f37457a55/t-shirt/5/24342
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Suggestions": [
        "13036942"
    ],
    "ErrorCode": 0
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/ProductAutoComplete/{merchantId}/{keyword}/{limit}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/ProductAutoComplete/{merchantId}/{keyword}/{limit}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
keyword* | string | Search meta tag keyword by which you want to get product ids
limit* | int | Limit number of results to be displayed
locationId* | int | Location id from which you want to fetch product ids


<aside class="notice"> All parameters marked by * are mandatory. </aside>



## Get Upscale Products

Retrieves all up sale products of a specific location along with the respective product details. 


> Sample Request

```html
http://www.martjack.com/developerapi/Product/UpSale/f48fdd16-92db-4188-854d-1ecd9b62d066/11996474/0
```

> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "Products": [
        {
            "ProductId": 11997154,
            "ProductTitle": "Y Cook Sweet Corn Boiled - Double, 2 Pieces Pouch",
            "MRP": 68,
            "WebPrice": 68,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "298460",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100646951",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Y Cook Sweet Corn Boiled - Double, 2 Pieces Pouch",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.hyctest.nightlysites.capillary.in/y-cook-sweet-corn-boiled---double-2-pieces-pouch/p/11997154",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Healthy No 1",
            "CategoryId": "CU00333414",
            "CategoryName": "Fresh Vegetables",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        },
        {
            "ProductId": 11997156,
            "ProductTitle": "Y Cook Sweet Corn Boiled - Single, 1 Piece Pouch",
            "MRP": 35,
            "WebPrice": 35,
            "CostPrice": 0,
            "Rating": 0,
            "IsParentProduct": false,
            "Availability": true,
            "BrandId": "298460",
            "CatlogSequence": 0,
            "CatalogCode": "",
            "SKU": "100646950",
            "Taxtotal": 0,
            "MarkupPrice": 0,
            "MarkupType": "",
            "BulkQuantity": 1,
            "ProductWeight": 0,
            "ProductType": "P",
            "SmallImageAltText": "Y Cook Sweet Corn Boiled - Single, 1 Piece Pouch",
            "IsShippingConfigured": false,
            "IsTaxConfigured": false,
            "StartDate": "/Date(-2209008600000+0530)/",
            "EndDate": "/Date(-2209008600000+0530)/",
            "SeoURL": "http://www.hyctest.nightlysites.capillary.in/y-cook-sweet-corn-boiled---single-1-piece-pouch/p/11997156",
            "DeliveryTime": "Delivered in 5 Working days",
            "TokenPriceCheckout": false,
            "IsReferPrice": false,
            "ShortDescription": "",
            "TokenPrice": 0,
            "SmallImage": "",
            "Brandname": "Healthy No 1",
            "CategoryId": "CU00333414",
            "CategoryName": "Fresh Vegetables",
            "Fulldescription": null,
            "NoofReview": "0",
            "BarCode": "",
            "ProductSequence": 0,
            "UOM": "Pieces"
        }
    ],
    "ErrorCode": 0
}
```


### Resource Information
| | |
--------- | ----------- |
URI | `/Product/UpSale/{merchantId}/{productId}/{locationId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GEY
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/UpSale/{merchantId}/{productId}/{locationId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Product id for which you want to fetch upscale products
locationId* | int | Provide the specific location id

<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Validate Location

Validates whether a specific inventory of a variant product is available in a specific location. 

> Sample Request

```html
http://www.martjack.com/developerapi/Product/ValidateLocation/f48fdd16-92db-4188-854d-1ecd9b62d066/14106036/10178766/500090/18340/1
````

> Sample Response:

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```

### Resource Information
| | |
--------- | ----------- |
URI | `/Product/ValidateLocation/{merchantId}/{productId}/{variantProductId}/{pinCode}/{locationId}/{quantity}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/ValidateLocation/{merchantId}/{productId}/{variantProductId}/{pinCode}/{locationId}/{quantity}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant
productId* | int | Unique id of the parent product
variantProductId* | int | Unique id of the variant product that you want to validate the stock available
pinCode* | int | PIN code for which you want to validate the stock availability
locationId* | int | Specify the location id associated to the specified PIN code
quantity* | int | Quantity of items that you want to check the availability


<aside class="notice"> All parameters marked by * are mandatory. </aside>


## Remove Offer Text

Removes all offer descriptions of the merchant.






> Sample Request

```html
https://www.martjack.com/developerapi/Product/RemoveOfferText/f48fdd16-92db-4188-854d-1ecd9b62d066

```




> Sample Response

```json
{
    "messageCode": "1004",
    "Message": "Successful",
    "ErrorCode": 0
}
```



### Resource Information
| | |
--------- | ----------- |
URI | `Product/RemoveOfferText/{merchantId}`
Rate Limited? | No
Authentication | Yes
Response Formats | JSON
HTTP Methods | GET
Batch Support | No

* **Rate limiter** controls the number of incoming and outgoing traffic of a network
* **Authentication** verifies the identity of the current user or integration. See Introduction > Authentication (Merchant Setup on Admin Portal) for more details

### Request URL

`https://{host}/developerapi/Product/RemoveOfferText/{merchantId}`


### Request Path Parameters

Parameter | Type | Description
-------- | ----- | -----------
merchantId* | string | Unique GUID of the merchant



<aside class="notice"> All parameters marked by * are mandatory. </aside>


