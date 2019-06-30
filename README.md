# E-COMMERCE

# User Routes

Routes| Method | Request Body | Response Description | Response Success | Response Error 
------|--------|--------------|----------------------|--------------|---------------
/user/register | POST | { <br> &nbsp; "firstName": String (**required**), <br> &nbsp; "lastName": String (**required**), <br> &nbsp; "email": String (**required**), <br> &nbsp; "password": String (**required**) <br> } | Registers a new user| res status: 201, *user created*  | res.status: 400, *Email has already been registered*
/user/login | POST |  `{ <br> &nbsp; "email": String (**required**), <br> &nbsp; "password": String (**required**) <br> } | login with an existing user*| res status: 200, <br> { <br> &nbsp; "accessToken": (token value) <br> } | res.status: 400, *Username/password incorrect 


# Product Routes

Routes| Method | Headers | Request Body | Response Description | Response Success | Response Error 
------|--------|---------|--------------|----------------------|------------------|-----------------
/product | GET | access_token | none | returns array of all product data | [<br> &nbsp;{<br> &nbsp; &nbsp; "_id": ObjecId() <br> &nbsp; &nbsp;"name": "example_product" <br> &nbsp; &nbsp; "price": 332 <br> &nbsp; &nbsp; "description" : "example_description" <br> &nbsp; &nbsp; "stock": 20 <br> }<br>] | res.status: 401, *User unauthorized*
/product | POST | access_token (from admin) | {<br> &nbsp; "name": "example_product" (**required**) <br> &nbsp;  "price": 100 (**required**) <br> &nbsp;  "description": "example_description" <br>  &nbsp; "stock": 10 <br> } | adds product to database | res.status: 201, <br> {<br> &nbsp; "_id": ObjectId() <br> &nbsp; "name": "example_product" <br> &nbsp;  "price": 100 <br> &nbsp;  "description": "example_description" <br>  &nbsp; "stock": 10<br> } | res.status: 400, *product already exists* <br><br> res.status: 401, *User unauthorized*
/product/:productId | PATCH | access_token (from admin) | { <br> &nbsp; "name": "example_product" <br> &nbsp;  "price": 89 <br> &nbsp;  "description": "example_description" <br>  &nbsp; "stock": 9 <br> } | updates single or multiple product values based on product id | res.status: 200, *product updated* | res.status: 400, *missing required parameters* <br><br> res.status: 401, *User unauthorized*
/product/:productId | DELETE | access_token (from admin) | none | deletes a product from database based on product id | res.status: 200, *product successfully deleted* | res.status: 401, *User unauthorized*

#Cart Routes
Routes| Method | Headers | Request Body | Response Description | Response Success | Response Error 
------|--------|---------|--------------|----------------------|------------------|-----------------
/carts | GET | access_token | none | returns array of all cart data associated with logged in user | res.status: 200, <br> [<br> &nbsp;{ <br> &nbsp; &nbsp; _id: ObjectId(), <br> &nbsp; &nbsp; user: ObjectId(), <br> &nbsp; &nbsp; product: ObjectId() <br> &nbsp;} <br>] | res.status: 401, *User unauthorized*
/carts| POST | access_token | { productId, price, quantity, totalPrice } | Creates a new cart if one containing the product id doesn't exist, if it exists then the cart quantity and total price will be updated | res.status: 201, <br> {<br> &nbsp; "_id": ObjectId() <br> &nbsp; "user": "ObjectId()" <br> &nbsp;  "product": "objectId()" <br> &nbsp;  "quantity": 2 <br>  &nbsp; "totalPrice": 100<br> &nbsp; "checkoutStatus": false<br>  } | res.status: 500, *Internal server error*
/carts/:cartId | PATCH | access_token | { status: decrement/increment, price } | updates cart quantity and total price based on status (increment or decrement) | res.status:200, *cart edited* | res.status: 500, *internal server error*