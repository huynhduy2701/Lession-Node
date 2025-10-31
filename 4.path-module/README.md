
# PATH MODULE
Đây là module xử lý đường dẫn file và thư mục rất quan trọng.


## Demo

    const { log } = require('console');
    const path = require('path');

    console.log("Directory file name " ,path.dirname(__filename));
    console.log("Directory directory name " ,path.dirname(__dirname));

    console.log("file name :  " ,path.basename(__filename));

    console.log("File extension :  " ,path.extname(__filename));

    const joinPath = path.join("/user","huynhduy","documents","node","lession");
    console.log("Joined path : ", joinPath);

    const resolvePath = path.resolve("user","documents","node","lession");
    console.log("Resolve path : ", resolvePath);

    const normalizePath = path.normalize("/user/.documents/../node/project");
    console.log("normalize Path:" ,normalizePath)


## 🧱 1️⃣ Import module và chuẩn bị

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  const { log } = require('console');
  const path = require('path');
```

Dòng `require('path')` nạp module tích hợp sẵn của Node.js để làm việc với đường dẫn file/thư mục.

Dòng `require('console')` lấy module console (ở đây bạn lấy ra hàm log — tương tự console.log).

## 📁 2️⃣ Lấy thư mục chứa file hiện tại

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  console.log("Directory file name ", path.dirname(__filename));
```

Dòng `__filename` là đường dẫn tuyệt đối đến file hiện tại, ví dụ:

            /Users/huynhduy/Documents/node/app.js

Dòng `path.dirname(__filename)` trả về thư mục chứa file:

            /Users/huynhduy/Documents/node

👉 Nó giống như “nơi mà file này đang nằm”.


## 📂 3️⃣ Lấy thư mục cha của thư mục hiện tại

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  console.log("Directory directory name ", path.dirname(__dirname));
```

Dòng `__dirname` là thư mục chứa file hiện tại.

Dòng `path.dirname(__dirname)` llấy thư mục cha của thư mục chứa file.

Ví dụ nếu :

     __dirname là /Users/huynhduy/Documents/node,

thì `path.dirname(__dirname)` là:  /Users/huynhduy/Documents



## 📄 4️⃣ Lấy tên file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  console.log("file name :  ", path.basename(__filename));
```

Dòng `path.basename(__filename)` lấy tên file cuối cùng (không gồm đường dẫn)

Ví dụ:

    app.js

## 🧩 5️⃣ Lấy phần mở rộng file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  console.log("File extension :  ", path.extname(__filename));
```

Dòng `path.extname(__filename)` ấy đuôi file (phần mở rộng).

Ví dụ:

    .js

## 🛠️ 6️⃣ Ghép nhiều phần của đường dẫn lại

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
const joinPath = path.join("/user","huynhduy","documents","node","lession");
console.log("Joined path : ", joinPath);
```

Dòng `path.join()` sẽ nối các phần lại với nhau theo đúng hệ điều hành (macOS, Windows, Linux).
→ Nó cũng tự bỏ các dấu `/` thừa.

Kết quả:

    /user/huynhduy/documents/node/lession

## 🚀 7️⃣ Tạo đường dẫn tuyệt đối

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  const resolvePath = path.resolve("user","documents","node","lession");
  console.log("Resolve path : ", resolvePath);
```

- Dòng `path.resolve()` cũng nối lại giống join, nhưng:

  - Nó sẽ bắt đầu từ thư mục hiện tại `(__dirname)` để tạo đường dẫn tuyệt đối.

  - Nếu chuỗi bắt đầu bằng /, nó hiểu đó là đường dẫn gốc luôn.
- Ví dụ (nếu file bạn đang ở `/Users/huynhduy/Desktop)`:

```bash
      /Users/huynhduy/Desktop/user/documents/node/lession
```

## 8️⃣ Chuẩn hóa đường dẫn (loại bỏ .. hoặc .)

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  const normalizePath = path.normalize("/user/.documents/../node/project");
  console.log("normalize Path:" ,normalizePath)
```

- Dòng `path.normalize()` sẽ:

  - Loại bỏ những phần dư thừa như `..` (trở về thư mục cha), hoặc `.`

  - Hợp nhất lại thành một đường dẫn hợp lệ.
- Ví dụ :


```bash
     /user/node/project
```

(vì `.documents/.. `→ quay về thư mục `/user`)

