# JavaScript Execution Context

Everything in JavaScript happens inside an **Execution Context**.

## **What is an Execution Context?**
An **Execution Context** is like a **Big Box** that has two main components:

1. **Memory Component** (also called **Variable Environment**)
   - This stores **variables and functions** as key-value pairs.
   
2. **Code Component** (also called **Thread of Execution**)
   - This is where JavaScript **executes code line by line**.

JavaScript is a **synchronous single-threaded language**, meaning it executes one command at a time in a specific order.

---

## **What Happens When We Run a JavaScript Program?**
Whenever a JavaScript program runs, an **Execution Context is created**, consisting of two phases:

### **1️⃣ Memory Creation Phase (Variable Environment)**
   - All variables are initially assigned `undefined`.
   - Functions are stored in memory as complete definitions.

### **2️⃣ Code Execution Phase (Thread of Execution)**
   - `undefined` values are replaced with actual values.
   - Functions are executed when invoked, creating **new Execution Contexts**.

---

## **Step-by-Step Execution Example**
```javascript
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
```

### **Step 1: Global Execution Context (GEC)**
When the script starts, the **Global Execution Context (GEC)** is created with two phases:

#### **Memory Creation Phase (Variable Environment)**
- `n` → `undefined`
- `square` → stores the function definition
- `square2` → `undefined`
- `square4` → `undefined`

#### **Code Execution Phase (Thread of Execution)**
- `n = 2` ✅ (value is updated)
- `square` function remains unchanged ✅ (function stays in memory)
- `square2 = square(n);` **(function invocation - new Execution Context is created)**

---

### **Step 2: Function Execution Context (FEC) for `square(n)`**
Since `square(n)` is invoked, a **new Execution Context** is created.

#### **Memory Creation Phase (Variable Environment)**
- `num` → `undefined`
- `ans` → `undefined`

#### **Code Execution Phase (Thread of Execution)**
- `num = 2` ✅
- `ans = num * num` → `ans = 2 * 2 = 4` ✅
- `return ans` → returns `4` ✅
- `square2` is updated with `4` ✅
- **Function Execution Context is removed from the Call Stack** ❌

Back to **Global Execution Context (GEC)**, continuing execution at `square4 = square(4);`

---

### **Step 3: Function Execution Context (FEC) for `square(4)`**
A new **Function Execution Context** is created again.

#### **Memory Creation Phase (Variable Environment)**
- `num` → `undefined`
- `ans` → `undefined`

#### **Code Execution Phase (Thread of Execution)**
- `num = 4` ✅
- `ans = num * num` → `ans = 4 * 4 = 16` ✅
- `return ans` → returns `16` ✅
- `square4` is updated with `16` ✅
- **Function Execution Context is removed from the Call Stack** ❌

---

## **Summary**
✔ **Execution Context is created in two phases:**  
   - **Memory Creation Phase** (variables & functions stored in memory)  
   - **Code Execution Phase** (line-by-line execution happens)  

✔ **Function calls create a new Execution Context.**  
✔ **Each function execution has its own memory space (Variable Environment).**  
✔ **Once a function returns a value, its Execution Context is deleted from the Call Stack.**  



---------------------
---------------------
---------------------


### Shortest function in JavaScript is the empty file of JS

## Code Breakdown:

```javascript
var a = 10;

function b() {
    var x = 1100;
}
```

### Global Scope:
- The variable `a` is declared using `var`, so it is hoisted to the global execution context.
- In the browser, the global execution context is associated with the `window` object, meaning you can access `a` as `window.a`.

### Function Scope:
- The function `b` is also in the global scope, meaning it is accessible as `window.b`.
- However, the variable `x` inside `b()` is not global. It is function-scoped and only exists while `b` is executing.

### Checking in the Browser Console:
You can verify this by running:

```javascript
console.log(window.a); // 10
console.log(window.b); // function b() { var x = 1100; }
console.log(window.x); // undefined (because x is not in the global scope)
```




---------------------
---------------------
---------------------


# Hoisting in JavaScript

## 🚀 What is Hoisting?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution. However, **only declarations are hoisted, not initializations**.

---

## 1️⃣ Hoisting with `var`, `let`, and `const`

```javascript
console.log(a);  // ❌ ReferenceError
let a = 10;
console.log(a); // ✅ 10

const x = 1000;
console.log(x); // ✅ 1000

var b = 30;
console.log(b); // ✅ 30
```

### 🔹 Key Points:
- **`var`** is hoisted and initialized with `undefined`.
- **`let` and `const`** are hoisted but **not initialized**, causing a **ReferenceError** if accessed before declaration.

---

## 2️⃣ Temporal Dead Zone (TDZ)
TDZ is the time between a `let` or `const` variable's hoisting and its initialization.

```javascript
console.log(a);  // ❌ ReferenceError (TDZ)
let a = 10;  // TDZ ends here
console.log(a);  // ✅ 10
```

- Accessing a variable in **TDZ throws a ReferenceError**.

---

## 3️⃣ `var` vs `let` & `const` in Global Scope

```javascript
console.log(window.b); // ✅ 30
console.log(window.a); // ❌ undefined
```

- **`var` attaches to `window`** in browsers.
- **`let` and `const` are stored separately** in a different memory space.

---

## 4️⃣ `const` is More Strict Than `let`

```javascript
let c; // ✅ Allowed, can be initialized later
c = 20;

const d; // ❌ SyntaxError: Must be initialized
```

- **`let` allows declaration without initialization**.
- **`const` must be initialized at declaration**.

---

## 5️⃣ Types of Errors
| **Error Type**  | **Cause** |
|---------------|------------|
| **SyntaxError** | Incorrect syntax (e.g., `const d;`). |
| **TypeError** | Changing a `const` variable. |
| **ReferenceError** | Accessing a variable before declaration (TDZ). |

---

##  In Short

✅ **Hoisting:** `var` is initialized as `undefined`, `let` and `const` are not.

---

✅ **TDZ:** Accessing `let` or `const` before initialization causes a **ReferenceError**.

---

✅ **Global Scope:** `var` is in `window`, `let` & `const` are stored separately.

---

✅ **Errors:** SyntaxError, TypeError, ReferenceError.



-------------
-------------
-------------



# JavaScript Blocks and Scope

##  What is a Block?
A **block** in JavaScript is defined by `{}` and is also known as a **compound statement**. It groups multiple JavaScript statements where a **single statement is expected**.

```javascript
if (true) {  // JavaScript expects a single statement
    var a = 10;
}
```

---

## 1️⃣ Block Scope

```javascript
{
    var a = 10;
    let b = 20;
    const c = 30;
    
    console.log(a); // ✅ 10
    console.log(b); // ✅ 20
    console.log(c); // ✅ 30
}

console.log(a); // ✅ 10 (because `var` is global)
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError
```

### 🔹 Key Points:
- **`let` and `const` are block-scoped** (only accessible inside the block).
- **`var` is function-scoped** (accessible outside the block if not inside a function).

---

## 2️⃣ Shadowing
When a **variable inside a block has the same name** as one outside, the inner variable **shadows** the outer variable.

```javascript
var a = 100;
{
    var a = 67;  // Shadows the outer `a`
    let b = 45;
    const c = 98;
    console.log(a); // ✅ 67
    console.log(b); // ✅ 45
    console.log(c); // ✅ 98
}
console.log(a); // ✅ 67 (var is updated globally)
```

- **With `var`, the outer variable is also modified.**
- **With `let` and `const`, shadowing does not affect the outer variable.**

---

## 3️⃣ Illegal Shadowing
Using `let` outside and `var` inside the block with the same name is **illegal**.

```javascript
let x = 20;
{
    var x = 30;  // ❌ SyntaxError: Identifier 'x' has already been declared
}
```

---

## 4️⃣ Lexical Scope & Environment
Each block has its **own lexical environment**, which includes:
- **Local memory (variables declared inside the block).**
- **Reference to the lexical environment of its parent.**

```javascript
const a = 20;
{
    const a = 10;
    {
        const a = 33;
        console.log(a); // ✅ 33 (innermost scope has priority)
    }
}
```

---

## 5️⃣ Arrow Functions 🚀
Arrow functions are a shorthand way to write functions in JavaScript.

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // ✅ 8
```



