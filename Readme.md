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

---
This structured breakdown helps understand how JavaScript handles function calls and execution order. 🚀

