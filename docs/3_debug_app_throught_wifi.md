# Cách debug app thông qua wifi
1. Check ip máy tính
- Gõ lệnh `ipconfig`
```txt
IPv4 Address. . . . . . . . . . . : 192.168.1.5
```
- Host: 192.168.1.5

2. Run app
```bash
npm run android 
# open metro start => press d in here
# on android device => select setting => debug server host => fill 192.168.1.5:8081

```

3. Each time coding without reload => close app and reopen


