# Cấu hình font cho ứng dụng

## Step 1: Tải font về dưới dạng .ttf

- Đặt vào thư mục `src/assets/fonts`. Ta có thể chỉnh đường dẫn sau nhưng cứ nhớ vậy đã
- Ví dụ có những font sau

```
Fredoka-Bold.ttf
Fredoka-Light.ttf
Fredoka-Medium.ttf
Fredoka-Regular.ttf
Fredoka-SemiBold.ttf
```

## Step 2: Cấu hình đường dẫn và link

- Vì các static source này android và ios nó không hiểu là cái gì, ở đâu. do đó cần phải chạy lệnh link để nó copy các file vào các thư mục tương ứng
- Mở hoặc tạo file `react-native.config.js`

```js
// react-native.config.js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ["./src/assets/fonts/"], // đây là đường dẫn tới cái thư mục chứa font ở trên
};
```

- Chạy lệnh sau

```bash
npx react-native link
```

- Sau khi chạy thấy đã copy file vào trong thư mục `android/app/src/main/assets/fonts` là oke
- Trên IOS nó sẽ tự động cập nhật lại đường dẫn nên sẽ không thấy copy file. Ta kiểm tra bằng cách search toàn bộ project với tên font => thấy có file trong thư mục ios có là ok

## Step 3: Sử dụng như thế nào

- Đầu tiên vì các tên font rất dễ gõ nhầm, thiếu nên ta viết app constant cho nó dễ dùng

```js
// src/constants/app.js
export const AppBorderRadius = {
  forButton: 3,
  forTextInput: 3,
};

export const AppColor = {
  primary: "#032f54",
  white: "#000000",
  black: "#000000",
};

export const AppFont = {
  regular: "Fredoka-Regular", // tên font sau khi đã bỏ đi cái đuôi là .ttf
  bold: "Fredoka-Bold",
  light: "Fredoka-Light",
  medium: "Fredoka-Medium",
  thin: "Fredoka-Thin",
  black: "Fredoka-Black",
};
```

- Sử dụng trong app

```jsx
// code
<View>
  <Text style={styles.appTitle}>Xin chào</Text>
</View>;

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: AppColor.primary,
    fontFamily: AppFont.bold, // chỗ này muốn nó regular theo ý của mình.
  },
});
```

> Chú ý là không sử dụng thuộc tính fontWeight vì nó ko hoạt động. Không biết tại sao. Tuy nhiên ta có `AppFont.bold` là ok rồi
