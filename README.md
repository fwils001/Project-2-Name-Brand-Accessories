# Project-2-Name-Brand-Accessories

Welcome! This is my e-commerce site that is an extension of my eBay store. I already have nearly 300 positive reviews, I have 54 followers, and I have been selling on the site since 2000. I wanted a place to sell my items without having to take a loss on my profits anymore by being forced to use eBay as the middle man.

I have a models folder with the information stored in an seed.js file. There is an index page, a show page for each item, and a checkout page for the buyer. The site does allow customers to create accounts so that they can log in with a password each time, but they need to know the URL to do so. As an administrator, I have the ultimate ability to manage the listings.

I also have a views folder with index.ejs and show.ejs. The models directory has an items.ejs file.

Index route: GET /accessories/ allows users to see the items for sale on the landing page.
Show page: GET /accessories/:id allows users to see the product from different angles and purchase.
Checkout page: PUT /accessories/checkout allows users to purchase item.
Edit page: POST /accessories/edit allows me to edit the item.
Create page: POST/accessories/new allows me to add a new item.
Delete page: POST/accessories/delete allows me to delete an item.

I also use a controllers folder through which the routes are forwarded.

I integrated the Buy button through Paypal on my checkout page.

Check out my wireframes:

![image](https://user-images.githubusercontent.com/25629429/134082703-4845fdd2-552a-4a04-b8ec-545f23f4d923.png)

![image](https://user-images.githubusercontent.com/25629429/134082794-6fa21348-01d9-4b64-bc1b-15c4a6916771.png)


User Stories:

As a casual shopper, I want to peruse a small number of handpicked listings so that I can purchase a beautiful and collectible designer item.

As a collector, I would like to have direct access to the best deals on designer items so that I can brag to my friends.

As a casual eBay shopper, I can have access to the same quality items but at better prices.

As a store owner, I can sell straight to the consumer rather than go through eBay so that I can save (and make) money.

MVP Goals:

Build a very basic e-commerce site to showcase designer items.

Build show pages for each item.

Allow user to buy items.

Stretch Goals:

I accomplished my stretch goal which was to allow users to log into their accounts.
