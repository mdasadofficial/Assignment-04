 ##1  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 *Answer:
 (1) getElementById একটি নির্দিষ্ট id দিয়ে শুধু একটা element খুঁজে বের করে। id সবসময় ইউনিক হয়।
 (2)  getElementsByClassName: একটি class name দিয়ে একাধিক element খুঁজে বের করে। এটা অনেকগুলো element দিতে পারে (HTMLCollection আকারে)।
 (3) querySelector CSS selector ব্যবহার করে প্রথম matching element খুঁজে বের করে।
 (4) querySelectorAll . CSS selector ব্যবহার করে সব matching element খুঁজে বের করে। এটা NodeList দেয়।



 ##2   How do you create and insert a new element into the DOM?
 *Answer:
 নতুন element বানাতে createElement() ব্যবহার করি, তারপর innerText বা innerHTML দিয়ে লেখা দেই, আর appendChild() দিয়ে DOM এ যোগ করি।


##3  What is Event Bubbling? And how does it work?
*Answer:
Event Bubbling হলো এমন একটি প্রক্রিয়া , যেখানে কোনো element-এ event হলে তা parent element-এ উপরের দিকে ছড়িয়ে যায়।


##4 What is Event Delegation in JavaScript? Why is it useful?
*Answer:
Event Delegation হলো parent element-এ একটাই event listener দিয়ে অনেকগুলো child element-এর event handle করার পদ্ধতি। এটি কোড কমায় এবং পারফরম্যান্স ভালো করে।


##5 What is the difference between preventDefault() and stopPropagation() methods?
*Answer:
preventDefault()  element-এর নিজের default কাজ বন্ধ করে।
stopPropagation()  event-কে parent এ যাওয়া থেকে আটকায়।
