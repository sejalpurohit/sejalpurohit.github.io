---
layout: post
title: "Javascript Coding Question"
date: 2025-05-13
categories: ELECTRON
image: /assets/uploads/javascript.png
---

Collection of Javascript Coding Interview Questions

1.  **Capitalize Every Word**
    Task: Given an array of lowercase words, return a new array where every word starts with a capital letter.

    **Input** let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

    **Output**  ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];

2.  **Add a New Property**
    Task: Create a new array where each object has an additional Boolean property `isAdult` based on whether the age is 18 or above.

    **Input** let arr = [
    { name: "a", age: 50 },
    { name: "b", age: 15 },
    { name: "c", age: 30 },
    { name: "e", age: 18 },
    { name: "e", age: 7 },
    ];

3.  **Extract names**
    Task: Return only the names from an array of objects containing various properties.

    **Input** let arr = [
    { name: "a", age: 50 },
    { name: "b", age: 15 },
    { name: "c", age: 30 },
    { name: "e", age: 18 },
    { name: "e", age: 7 },
    ];

    **Output** ['a', 'b', 'c', 'e', 'e']

4.  **Convert Temperature**
    Task: Convert an array of temperatures in Celsius to Fahrenheit using `.map()`.

5.  **Create HTML Elements**
    Task: Generate strings formatted as HTML `<li>` elements from an array of product names.

6.  **Find Total Price**
    Task: Calculate the total price for items in a shopping cart, based on price and quantity.

    **Input** let arr = [
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    ];

7.  **Group by Category**
    Task: Organize products into categories by grouping them based on their `category` field.

    **Input** let arr = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "TV", category: "Electronics" },
    ];

8.  **Count Frequency**
    Task: Count how frequently each item appears in an array.

    **Input** let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

    **Output** {apple: 3, banana: 2, orange: 1, guvava: 1}

9.  **Find the Longest String**
    Task: Return the longest string from a given array of strings.

    **Input** const strings = ["cat", "elephant", "dog", "giraffe", "hippopotamus", "gof", "hippopotamushhhhhhhhhh",];

10. **Merge Arrays of Objects by ID**
    Task: Use `.reduce()` to merge two arrays of objects by their `id` fields, summing up values for duplicate `id`s.

    **Input** let array1 = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
    ];

    **Input** let array2 = [
    { id: 2, value: 15 },
    { id: 3, value: 25 },
    { id: 4, value: 35 }
    ]

    **Output** [
    { id: 1, value: 10 }, // From array1 (unique)
    { id: 2, value: 35 }, // Sum of id: 2 from array1 (20) and array2 (15)
    { id: 3, value: 55 }, // Sum of id: 3 from array1 (30) and array2 (25)
    { id: 4, value: 35 } // From array2 (unique)
    ] 11. Square the Numbers

11. Task: Return a new array where each number is squared.
    **Input** Example Input: [2, 3, 4, 5]

    **Output** [4, 9, 16, 25]

12. **Format Prices**
    Task: Convert an array of prices in cents to dollar-formatted strings.

    **Input** [199, 2500, 320]

    **Output** ["$1.99", "$25.00", "$3.20"]

13. **Add Timestamps**
    Task: Add a timestamp to each object in an array of logs.

    **Input** [{ action: "login" }, { action: "logout" }]


14. **Sum All Scores**
    Task: Calculate the total score from an array of player objects.

    **Input** [{ name: "A", score: 5 }, { name: "B", score: 8 }, { name: "C", score: 12 }]

    **Output** 25

15. **Create Frequency Map**
    Task: Count the occurrences of each value in an array.

    **Input** ["red", "blue", "red", "green", "blue", "blue"]

    **Output** { red: 2, blue: 3, green: 1 }

16. **Filter Even Numbers**
    Task: Return only even numbers from the input array.

    **Input** [1, 2, 3, 4, 5, 6]

    **Output** [2, 4, 6]

17. **Remove Null or Undefined Values**
    Task: Return a clean array excluding any `null` or `undefined` values.

    **Input** [10, null, 20, undefined, 30]

    **Output** [10, 20, 30]

18. **Normalize and Filter Usernames**
    Task: Trim and convert usernames to lowercase, then filter out names shorter than 4 characters.

    **Input** [" Bob", "ALICE ", "Jo ", " Charlie ", "eve "]

    **Output** ["alice", "charlie"]

19. **Aggregate Expenses by Category**
    Task: Group expenses by category and calculate the total amount per category.

    **Input** [ { category: "Food", amount: 20 },
    { category: "Transport", amount: 15 },
    { category: "Food", amount: 30 } ]

    **Output** { Food: 50, Transport: 15 }

20. **Filter Out Even Numbers**
    Task: From a list of numbers, return only the odd numbers.

    **Input** [1, 2, 3, 4, 5, 6, 7]

    **Output**[1, 3, 5, 7]

21. **Remove Falsy Values**
    Task: Remove all falsy values (false, null, 0, "", undefined, NaN) from an array.

    **Input** [0, 1, false, 2, '', 3, null, undefined]

    **Output** [1, 2, 3]

22. **Filter Active Users**
    Task: From a list of user objects, return only users who are active.
   
    **Input**
    [ { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true } ]

    **Output** Objects for Alice and Charlie.

23. **Find Items in Stock**
    Task: Given an array of products, return only those where stock > 0.
    **Input**
    [{ name: "Pen", stock: 10 },
    { name: "Pencil", stock: 0 },
    { name: "Notebook", stock: 5 }]

    **Output** Pen and Notebook.

24. **Filter by Minimum Score**
    Task: From an array of students with test scores, return those who scored 60 or higher.
   
    **Input**
    [{ name: "Alex", score: 45 },
    { name: "Bella", score: 75 },
    { name: "Chris", score: 60 }]

    **Output** Bella and Chris.

25. **Emails from Specific Domain**
    Task: Filter users whose email ends with @example.com.

    **Input**
    [{ email: "john@example.com" },
    { email: "jane@gmail.com" },
    { email: "doe@example.com" }]

    **Output** John and Doe.

26. **Remove Duplicate IDs**
    Task: From a list of items with IDs, remove duplicates (assume duplicates have the same ID).

    **Input**
    [{ id: 1 },
    { id: 2 },
    { id: 1 },
    { id: 3 }]

    **Output**: Only one of each unique ID.

27. **Filter by String Length**
    Task: Return only strings longer than 5 characters.

    **Input** ["apple", "banana", "kiwi", "strawberry"]

    **Output** ["banana", "strawberry"]

28. **Get Valid Dates**
    Task: Filter an array to remove invalid date strings.

    **Input** ["2023-10-10", "not-a-date", "2022-01-01", "12345"]

    **Output** Only valid date strings that can be parsed.

29. **Adults Only**
    Task: From an array of people, return only those aged 18 or older.

    **Input** [ { name: "Tom", age: 17 },
    { name: "Lucy", age: 22 },
    { name: "Mark", age: 18 }]

    **Output** Lucy and Mark.

30. **Flatten, Filter, and Square**
    Task: Given a nested array of numbers, flatten it, remove odd numbers, and return their squares.

    **Input** [[1, 2], [3, 4], [5]]

    **Output**- Flatten, Filter evens, Square, Expected Output: [4, 16]

31. **Comment Stats**
    Task: Given an array of post objects, each with a comments array, calculate:
    Total number of comments
    Names of users who commented (deduplicated)

    **Input** [{ id: 1, comments: [{ user: "Alice" }, { user: "Bob" }] },
    { id: 2, comments: [{ user: "Bob" }, { user: "Charlie" }] }]

    **Output** { totalComments: 4, users: ["Alice", "Bob", "Charlie"] }

32. **Input** let arr = [
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    { item: "Apple", price: 0.5, quantity: 4 },
    { item: "Banana", price: 0.3, quantity: 6 },
    { item: "Cherry", price: 2.0, quantity: 1 },
    ];

    **Output** apple: {item:apple , price: .5, quantity:8, tota: 4}

33. **What is the difference between exec () and test () methods in javascript?**

34. **What is the output of the following code?**
    const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
    }
    for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);

35. **Write a function that performs binary search on a sorted array**
    function binarySearch(arr,value,startPos,endPos){
    if(startPos > endPos) return -1;

    let middleIndex = Math.floor(startPos+endPos)/2;

    if(arr[middleIndex] === value) return middleIndex;

    elsif(arr[middleIndex] > value){
    return binarySearch(arr,value,startPos,middleIndex-1);
    }
    else{
    return binarySearch(arr,value,middleIndex+1,endPos);
    }
    }   

36. **Build User Lookup by ID**
    Task: Convert an array of users into an object where the key is the user ID, and the value is the full user object.

    **Input** [ { id: 101, name: "A" },
    { id: 102, name: "B" } ]

    **Output** { 101: { id: 101, name: "A" },
    102: { id: 102, name: "B" } }

37. **Filter & Format Available Inventory**
    Task: From a list of inventory items, return a new array of available items (in stock), formatted as strings.

    **Input** [{ item: "Shoes", stock: 5 },
    { item: "Socks", stock: 0 },
    { item: "Jacket", stock: 3 }]

    **Output** ["Shoes (5 left)", "Jacket (3 left)"]

38. **Filter Unique Users by Email**
    Task: Given a list of user objects with email, filter out duplicates (keep only the first occurrence of each unique email).

    **Input** [{ name: "A", email: "a@mail.com" },
    { name: "B", email: "b@mail.com" },
    { name: "A2", email: "a@mail.com" } ]

    **Output** First two objects (3rd one filtered out).

39. **Complex Invoice Summary**
    Task: Given invoices with line items, calculate:
    Total for each invoice
    Filter invoices where total > 100

    **Input** [ { id: 1, items: [{ price: 30 }, { price: 40 }] },
    { id: 2, items: [{ price: 80 }, { price: 50 }] } ]

    **Output** [{ id: 2, total: 130 }]

40. **Find Most Frequent Element**
    Task: From an array of strings, return the element that appears the most.

    **Input** ["apple", "banana", "apple", "orange", "banana", "apple"]

    **Output** "apple"

41. **Filter Objects Based on a Nested Property**
    Task: Filter objects in an array based on the value of a nested property.

    **Input** const posts = [ { id: 1, meta: { published: true } },
    { id: 2, meta: { published: false } } ];

    **Output** Only the objects where `meta.published` is `true`.

42. **Explain Code Behaviour**
    Task: Understand what the following code does:

    **Input** const result = arr.filter((val, index, self) => self.indexOf(val) === index);

    **Explanation** Filters unique elements in the array.
                    `self.indexOf(val)` finds the first occurrence of the value.
                    Keeps the value only if its first occurrence index matches the current index.

43. **Filter Strings Starting with a Capital Letter**
    Task: Filter an array of strings to only include those starting with a capital letter.

    **Input** ["apple", "Banana", "kiwi", "Strawberry"]
    **Output** ["Banana", "Strawberry"]

44. **Write a Polyfill for Array.prototype.filter()**
    Task: Implement a custom version of the `.filter()` method that mimics its functionality.
    Create a function that takes a callback and applies it to each element of an array.

46. **Result of Filtering an Empty Array**
    Task: Understand the behavior when `.filter()` is applied to an empty array.

    **Output** Always returns an empty array, since there are no elements to iterate over.

47. **Optimize `.filter()` for Large Datasets**
    Task: Discuss techniques for efficiently using `.filter()` on large datasets.
    Combine `.filter()` with pagination or chunking to process smaller subsets.

48. **Async/Await in a `.filter()` Callback**
    Task: Can `.filter()` support asynchronous operations inside its callback?

49. **Filter Common Elements in Two Arrays**
    Task: From two arrays, return elements that are present in both.

    **Input** const a = [1, 2, 3, 4];
    const b = [2, 4];

    **Output** [2, 4]

50. **Result of the Following Code**
    Task: Predict the output and explain behavior:

    **Input** const res = [1, 2, 3].filter((x, i, arr) => {
    arr.pop();
    return true;
    });