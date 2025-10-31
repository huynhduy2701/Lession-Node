
## Lession Node Module
What did you learn while building this project? What challenges did you face and how did you overcome them?


## Installation

Install my-project with npm

```bash
  npm i lodash
```
Lodash là một thư viện tiện ích giúp xử lý mảng, chuỗi, object dễ dàng hơn.
    
## Demo

const lodash = require('lodash');

const names = ["duy", "thuan", "anh", "tuyen"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);

    1. const lodash = require('lodash');

    Dòng này import thư viện Lodash vào trong file JS.

    Lodash là một thư viện tiện ích giúp xử lý mảng, chuỗi, object dễ dàng hơn.

    2. const names = ["duy", "thuan", "anh", "tuyen"];

    Đây là một mảng gồm các chuỗi tên, tất cả đang ở chữ thường.

    3. const capitalize = lodash.map(names, lodash.capitalize);

    lodash.map() là hàm tương tự như Array.map(), nó sẽ duyệt qua từng phần tử trong mảng names.

    Với mỗi phần tử, nó sẽ gọi hàm lodash.capitalize.

    🔹 lodash.capitalize() sẽ:

    Viết chữ cái đầu tiên in hoa.

    Viết các chữ còn lại in thường.

    👉 Ví dụ:

    lodash.capitalize("duy")  // -> "Duy"
    lodash.capitalize("thuan")  // -> "Thuan"


    Nên:

    lodash.map(names, lodash.capitalize);


    sẽ tạo ra mảng mới:

    ["Duy", "Thuan", "Anh", "Tuyen"]

    4. console.log(capitalize)

    In ra kết quả:

    [ 'Duy', 'Thuan', 'Anh', 'Tuyen' ]

    🧾 Tóm tắt:
    Dòng	Chức năng
    require('lodash')	Nhúng thư viện Lodash
    names = [...]	Mảng tên gốc
    lodash.map(names, lodash.capitalize)	Tạo mảng mới với tên viết hoa chữ cái đầu
    console.log(capitalize)	In kết quả