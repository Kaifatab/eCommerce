# INFINITY
A web application for selling luxury watches and clocks online using MERN stack with administrative and client privileges.
A supplier portal  for  inventory and Orders tracking and a bank for all entities to track their balances. 

<img src='Screenshot (1108).png' width='800'>      

# Languages 
-  **M**ongoDb - **E**xpress.js - **R**eact.js - **N**ode.js -

# Key Points 
- 3 Sections. created An **E-Commerce(Client+Admin), A Supplier and A Bank** Site with MERN. 
- Implemented Interconnecting **API's** of the 3 sections

# How To Run This Project 

**1.** Clone this repository into your local machine. <br/>

**2.** Open a terminal by pressing `Crtl+Alt+T` and run the following commands :<br/>
 ```cd BANK``` <br/>
 ```npm install``` <br/>
 ```npm run dev``` <br/>
 
 **3.** Open another terminal and run the following commands :<br/>
 ```cd ECOMMERCE``` <br/>
 ```cd client``` <br/>
 ```npm install``` <br/>
 ```npm start``` <br/>
 
 **4.** Open another terminal and run the following commands :<br/>
 ```cd ECOMMERCE``` <br/>
 ```cd server``` <br/>
 ```npm install``` <br/>
 ```npm run dev``` <br/>

 The whole project should be running now on different ports of `localhost`

# Description 

In this projects there are three different roles for the users: admin, end users, supplier.

<img src='Screenshot (1109).png' width='400'> <img src='Screenshot (1112).png' width='400'>
<img src='Screenshot (1117).png' width='400'> <img src='Screenshot (1118).png' width='400'>

After logging in, an admin can:
- Create new categories and delete existing ones.
- View all the products, create new products under any category, delete or edit existing products.
- View all the order detail, confirm or change the state of orders.
- See the balance of their bank account in admin dashboard.
  
<img src='Screenshot (1115).png' width='400'>

An unregistered end user can:
- View all the products.
- Filter the products based on category and price range.
- Click on a particular product to see details
- Register to the website.

<img src='Screenshot (1110).png' width='400'> <img src='Screenshot (1111).png' width='400'>

An registered end user can:
- View all the products.
- Filter the products based on category and price range.
- Click on a particular product to see details.
- Login to the website.
(to place a order a user must login)

If logged in, an end user can:
- Add multiple products to the cart; total payment amount would be auto calculated.
- Make payment through bank.
- See the balance of their bank account in user dashboard.
- Edit their profile, bank and address informtion for delivery.
- Reset password.
- See their order history and status of the orders.

<img src='Screenshot (1113).png' width='400'> <img src='Screenshot (1114).png' width='400'>

A supplier can:
- View and filter products if not logged in.
- See all orders, order status and balance of bank account from supplier dashboard while logged in.

Function of the Bank API:
- When a payment is made by the end user, payment amount is deducted from end user's bank account.
- A portion of this payment is added to the supplier's account and rest are added to admin's account.

<img src='Screenshot (1119).png' width='400'>
