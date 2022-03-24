# ReactNative003ToLove

- Cách custome lại thanh điều hướng https://reactnavigation.org/docs/headers

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
# from React Native 0.60 and higher, linking is automatic. So no need to run npm react-native link
npm install @react-navigation/native-stack

# for drawer
npm install --save @react-navigation/drawer react-native-gesture-handler react-native-reanimated
npx react-native link react-native-gesture-handler react-native-reanimated

```
> kill all process before running. After install - remember to run `npm run android`

- When see react-native-screen auto link to our project => it gonna be success

## Navigation

```js
const HomeScreen = ({ navigation }) => {
  // navigation auto pass from parent to screen, so we can use this with out any extra code
  navigation.navigate('Detail');
  navigation.push('Detail');
  navigation.goBack('Detail');
  navigation.popToTop();
  navigation.replace('detail'); // replace current screen to other
};
```

- Ta có thể hiểu cách hoạt động như sau
  - Đầu tiên ta có `initialRoute="Home"`. Khi này nó sẽ đọc xem đã có component Home được khởi tạo chưa, nếu chưa thì tạo một component home mới. và xếp vào đáy của stack
  - Tiếp theo nếu ta navigate to `detail`. Khi này như trên, nó sẽ đọc xem đã có detail chưa, nếu có rồi thì nó sẽ đọc cái detail đó ra, còn không thì sẽ tạo một `DetailScreen` mới. Stack hiện tại `[HomeScreen, DetailScreen]`
  - TH1. Sử dụng `navigate` to `DetailScreen` => vì đang là chính nó rồi, nó sẽ không tạo mới nữa
  - TH2. Sử dụng `push` => khi này ta sẽ push được một thằng DetailScreen nữa
  - TH3. Sử dụng `goBack` => goBack lại màn hình trước đó, pop màn hình hiện tại ra khỏi stack => khi đó thì sẽ xóa các màn hình bị pop
  - TH4. Sử dụng `navigate` => sử dụng navigate tới `Home` => duyệt từ đầu stack, nếu gặp phải Home thì chọn Home và pop lũ còn lại ra khỏi stack

## Truyền dữ liệu giữa các screen

```js
// truyền xuôi từ Screen1 -> Screen2
const Screen1 = ({ navigation }) => {
  navigation.navigate('Screen2', {
    greeting: 'chao may Screen 2',
  });
};

const Screen2 = ({ route, navigation }) => {
  const { greeting } = route.params;
  // console.log(greeting) // 'chao may Screen 2'
};
```

```js
// truyền ngược
const Screen1 = ({ navigation, route }) => {
  useEffect(() => {
    // hứng dữ liệu password
    if (route.params?.password) {
    }
  }, [route.params?.password]);
};

const Screen2 = ({ navigation, route }) => {
  // có nhiều cách để truyền tham số vào function navigate
  navigation.navigate({
    name: 'Screen1',
    params: { password: '123456' },
    merge: true,
  });
};
```


