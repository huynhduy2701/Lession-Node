
# FILE SYSTEM
🧩 File System là gì?

**File System (hệ thống tệp tin) là cách mà hệ điều hành lưu trữ, tổ chức và quản lý dữ liệu trên ổ đĩa** (như SSD, HDD, USB, v.v.).

Nói đơn giản:

Nó là **“bộ quản lý dữ liệu” của máy tính — nơi quyết định file nằm ở đâu, tên gì, dung lượng bao nhiêu, ai được truy cập**, v.v. 

## Ví dụ dễ hiểu

Giống như một tủ hồ sơ trong văn phòng:

- Mỗi ngăn tủ = thư mục (folder)

- Mỗi tờ giấy trong tủ = file (tệp tin)

- File system = người quản lý tủ hồ sơ, biết:

  - File nào nằm trong ngăn nào

  -  Ai được quyền đọc, sửa, xóa

  -  Dung lượng còn trống bao nhiêu

  -  Khi bạn lưu file, nó cất đúng chỗ

  -  Khi bạn mở file, nó tìm và đọc cho bạn

## DEMO
Trong Node.js, có một **module tên là** fs **(File System)** 

→ giúp bạn **làm việc với file** và **thư mục bằng JavaScript**.

Ví dụ :
```
const fs = require('fs');
// Tạo file
fs.writeFileSync('hello.txt', 'Xin chào Duy!');

// Đọc file
const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data);

// Thêm nội dung
fs.appendFileSync('hello.txt', '\nChúc bạn học Node.js vui!');
```

Bạn có thể:

- 📝 Ghi file (writeFileSync, appendFileSync)

- 📖 Đọc file (readFileSync)

- 📁 Tạo thư mục (mkdirSync)

- 🗑️ Xóa file/thư mục (unlinkSync, rmdirSync)

- 🔍 Kiểm tra sự tồn tại (existsSync)
## 🔹 1️⃣ Import module

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  const fs = require('fs');
  const path = require('path');
```

Dòng `fs` viết tắt của **File System** – cho phép **tạo, đọc, ghi, xóa, kiểm tra file hoặc thư mục**.

Dòng `path` **giúp xử lý đường dẫn file/thư mục** (kết hợp, tách, lấy tên file, v.v.) mà **hoạt động ổn trên mọi hệ điều hành**.

**🧠 Cách nhớ:**

  > “fs = làm việc với file, path = xử lý đường dẫn.”

## 🔹 2️⃣ Tạo đường dẫn thư mục “data”

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
 const dataFolder = path.join(__dirname, "data");
```

- Dòng `__dirname` đường dẫn **thư mục hiện tại của file đang chạy**.
- Dòng `path.join()` ghép các đoạn đường dẫn lại thành **một đường dẫn hoàn chỉnh**.

👉 Kết quả: */Users/nguyenlehuynhduy/Documents/.../data*

🧠 Cách nhớ:

>“**__dirname** là nơi file đang ở. Dùng path.join để ghép đường dẫn mà không sợ lỗi dấu `/` hay `\` . ”

## 🔹 3️⃣ In ra kiểm tra

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
console.log(__dirname);
console.log(__filename);
console.log(dataFolder);
```

Dòng `__filename` là **đường dẫn đầy đủ đến chính file hiện tại**.

Ví dụ :
```
/Users/nguyenlehuynhduy/Documents/lession-node/5.file-system
/Users/nguyenlehuynhduy/Documents/lession-node/5.file-system/index.js
/Users/nguyenlehuynhduy/Documents/lession-node/5.file-system/data
```


## 🔹 4️⃣ Kiểm tra và tạo thư mục

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data folder created : ");
}

```

- Dòng `fs.existsSync(path):` kiểm tra xem **thư mục hoặc file có tồn tại không**.
- Dòng `fs.mkdirSync()` Nếu chưa có, dùng  **để tạo mới thư mục**
- *Sync* nghĩa là **đồng bộ** (sẽ **chặn chương trình** cho tới khi lệnh hoàn thành).

*🧠 Cách nhớ:*

>“**existsSync** để hỏi ‘đã có chưa?’, **mkdirSync** để nói ‘nếu chưa có thì tạo đi’.”



## 🔹 5️⃣ Tạo đường dẫn đến file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  console.log("File extension :  ", path.extname(__filename));
```

Dòng `path.extname(__filename)` ấy đuôi file (phần mở rộng).



## 🔹 6️⃣ Tạo và ghi nội dung vào file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
fs.writeFileSync(filePath, "hello, Im Nguyen Le Huynh Duy!!");
console.log("File created successfully!!");
```

- `fs.writeFileSync(path, content)`: tạo file mới và ghi nội dung vào.
Nếu file **đã tồn tại**, thì **nội dung cũ sẽ bị ghi đè**.

**🧠 Cách nhớ**:

>**“writeFileSync** = viết file (**nếu chưa có thì tạo, nếu có thì thay nội dung**).”

## 🔹 7️⃣ Đọc nội dung file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log("File content : ", readContentFromFile);
```

- `fs.readFileSync(path, encoding)`: đọc nội dung file.

- Dùng `'utf-8'` để nhận **về chuỗi văn bản** (nếu không sẽ nhận dạng “buffer” – dạng nhị phân).

**🧠 Cách nhớ**:

>“**readFileSync** = **_đọc file, nhớ thêm 'utf-8'_** để đọc ra chữ thay vì mã.”


## 🔹 8️⃣ Thêm nội dung mới vào file

Mình sẽ giải thích từng dòng để bạn hiểu rõ cách hoạt động 👇

```bash
  fs.appendFileSync(filePath, "\n Tôi đang sống ở Hàn Quốc~");
  console.log("Đã thêm nội dung mới !");
```

- `fs.appendFileSync(path, newContent)`: thêm nội dung **vào cuối file**.

- `\n` nghĩa là **xuống dòng mới** trước khi thêm nội dung.

**🧠 Cách nhớ**:

>**“append** = *nối thêm chứ không ghi đè*.”
###


# Sự khác nhau giữa đồng bộ (Sync) và bất đồng bộ (Async)



Đặc điểm lớn nhất
| Đặc điểm            | Đồng Bộ (Sync)                |     Bất đồng bộ (Async)                                  |
| ----------------- | -------------------- | ------------------------------------- |
| Cách hoạt động | Chạy tuần tự, dòng trên xong mới đến dòng dưới | Gọi lệnh xong **không chờ**, chạy tiếp, kết quả trả về qua **callback**|
| Gây chặn chương trình |✅ Có (chờ thực thi xong mới làm việc khác)|❌ Không (Node.js tiếp tục làm việc khác)|
| Dễ viết | ✅ Dễ (chạy từ trên xuống, dễ hiểu) |❌ Khó hơn (phải dùng callback hoặc async/await)|
| Hiệu suất |❌ Thấp nếu xử lý nhiều file/lớn|✅ Cao hơn, không bị “đơ”|
| Khi nào dùng | khi test,demo hoặc xử lý nhỏ |Khi làm thật, thao tác với file lớn hoặc nhiều người dùng cùng lúc|

### 🔹 9 Giải thích từng phần code bất đồng bộ
**🔸 Ghi file (không chờ)**
```
fs.writeFile(asyncFilePath, "Hello Async node js", (err) => {
    if (err) throw err;
    console.log("Async file created successfully!");
```
**🧠 Giải thích:**

- `fs.writeFile()` là **phiên bản bất đồng bộ** của `fs.writeFileSync()`.

- Node.js **sẽ không chờ** việc ghi file hoàn tất mà **chạy tiếp các lệnh khác**.

- Khi ghi xong, **callback function**  `(err) => {...}` được gọi.

**🧩 Ghi nhớ**:

>`“Async` = gọi xong đi làm việc khác, khi xong thì báo lại.”
***

**🔸 Đọc file (trong callback)**
```
fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Async file content : ", data);
```

**🧠 Giải thích**:

- `fs.readFile()` cũng bất đồng bộ → không chờ đọc xong.

- Khi đọc xong, dữ liệu `(data)` được truyền vào callback để xử lý.
***


**🔸 Thêm nội dung mới**
```
fs.appendFile(asyncFilePath, "\n Them mot dong moi", (err) => {
    if (err) throw err;
    console.log("New line added to async");
```

**🧠 Giải thích**:

- `fs.appendFile()` thêm nội dung vào file **mà không chặn chương trình**.

- Chỉ khi Node.js nhận được tín hiệu “xong rồi”, nó mới chạy callback tiếp theo.

**🔸 Đọc lại để xem kết quả cuối**
```
fs.readFile(asyncFilePath, 'utf-8', (err, updateData) => {
    if (err) throw err;
    console.log("Async updateData file content : ", updateData);
});
```

### 🔁 10 Dòng chảy logic (Callback Chain)

Đoạn async của bạn có dạng:

1️⃣ Ghi file

⬇️

2️⃣ Đọc file sau khi ghi xong

⬇️

3️⃣ Thêm nội dung

⬇️

4️⃣ Đọc lại nội dung cuối cùng


Tất cả đều nằm **lồng nhau** để đảm bảo **thứ tự đúng**, vì Node.js **không chờ** từng bước tự động.

🧠 Đây gọi là **callback hell** (địa ngục callback) — nhìn nhiều dấu ngoặc `})})` đó chính là nó 😅


### ✨ 11 Cách ghi nhớ đơn giản

>**🧩 Sync** = “Chờ tôi làm xong rồi mới làm tiếp.”

>**🧩 Async** = “Cứ tiếp tục đi, xong tôi gọi lại báo kết quả.”


### ⚙️ 12 Nên dùng loại nào?
|Trường hợp |	Nên dùng |
| ----------| ---------- |
|Code học, demo nhỏ| Sync (dễ hiểu, ngắn gọn) |
|Ứng dụng thật, nhiều người dùng, xử lý file lớn| Async (hiệu suất cao hơn, không chặn luồng chính) |
	
	
### 💡 13 Cách hiện đại hơn để viết async (dễ đọc hơn callback)

Dùng **Promise + async/await**:

```
const fs = require("fs").promises;
const path = require("path");

(async () => {
  const filePath = path.join(__dirname, "data", "async-await.txt");

  await fs.writeFile(filePath, "Hello async/await!");
  console.log("✅ File created!");

  let data = await fs.readFile(filePath, "utf-8");
  console.log("📄 File content:", data);

  await fs.appendFile(filePath, "\nThêm dòng mới bằng async/await");
  console.log("✍️ Content appended!");

  data = await fs.readFile(filePath, "utf-8");
  console.log("📄 Updated content:", data);
})();
```

🧠 Ưu điểm:

- Dễ đọc (giống đồng bộ)

- Không bị callback hell

- Vẫn chạy bất đồng bộ
