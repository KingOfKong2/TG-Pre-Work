# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.
We start with typing the url into our browser. Our browser then makes a DNS request to find what ip is associated with the url and then sends a request for the index.html file at port 80 of that ip.
The server receives the request and establishes a connection. Once the connection is complete it sends the requested file and the html is rendered in the browser.

By looking at the techtonicgroup.com site we are immediately redirected to www.techtonic.com where we load the index.html file.
From looking at the source I can see that several JS layouts are preloaded with the meta tag, then the fonts are loaded from Google. Next the icons for the navigation bar are loaded and positioned, followed by the rest of the page content. It appears that most of the site is filled by JavaScript with very few HTML elements present.

## From start to finish how does that data reach you to be rendered in the browser?

The browser gets a request to find the page and looks up the IP address of that url using DNS. IP packets are routed toward that destination where a connection is established (SYN, ACK, and SYN-ACK). Then a TLS handshake occurs for https sites. After the connection is confirmed and switched to encryption the server sends the html index file for the browser to digest.

## What code is rendered in the browser?

The index.html file is rendered at the start page. HTML is able to call several other files (JavaScript and CSS) to help preform formatting and complex functions.
So JavaScript and HTML(with css rules) are rendered in our browsers.

## What is the server-side code’s main function?

Server side code is meant to process incoming data and serve the webpage to visitors. Server side code could also be handling databases, calls to api's, JavaScript, serving files, or many other things that the client side code should not be doing.

## What is the client-side code’s main function?

Client side code is meant to digest what the client receives from the server. The client also has a way to send data back to the server with GET and POST requests. The client can also store data about its previous visit to the site so that it may be retrieved later.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

By checking the number of GET requests that were made with loading the site I can see 49 unique client side assets that needed to be collected.
(Insert ScreenShot)

## How many instances of the server-side code are available at any given time?

The server should only have 1 webserver running that is able to handle thousands of requests. This may depend on network architecture and load balancing. I cannot see any server side code from inspecting the index.html so I am not sure if I am answering this question correctly.

## What is runtime?

Runtime refers to code that is currently executing. A programming language like JavaScript is compiled at runtime and will not evaluate variables or functions until they are called.

## How many instances of the the databases connected to the server application are created?

Ideally there would only be one database, but there may be more. If we wanted to keep a login database separate from a product database it would be a good idea.
Again I cannot see any sign of a database from the version of the site that I am loading so I think I am missing part of the question here.
