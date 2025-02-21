# Linux的一些命令

## 获取Springboot应用的进程号等信息
```bash
ps aux | grep "java -jar" | grep -v "grep"
```
```bash
cd /proc/进程号
```
```bash
ll
```
就能看到cwd->项目所在位置
