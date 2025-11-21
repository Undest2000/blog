# 关于docker的一些经验

## 把tomcat应用打包成一个docker容器

```Dockerfile
# 使用 CentOS 7 基础镜像（通过阿里云镜像源修复）
FROM centos:7

# 替换为阿里云镜像源（解决官方源失效问题）
RUN rm -rf /etc/yum.repos.d/*.repo
RUN curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
RUN curl -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo
RUN sed -i -e '/mirrorlist/d' -e 's|#baseurl|baseurl|g' /etc/yum.repos.d/CentOS-Base.repo
RUN yum clean all && yum makecache

# 安装基础工具
RUN yum install -y wget tar

# 自动安装 JDK 7（华为云镜像站）
RUN wget https://repo.huaweicloud.com/java/jdk/7u80-b15/jdk-7u80-linux-x64.tar.gz -P /tmp
RUN tar -xzf /tmp/jdk-7u80-linux-x64.tar.gz -C /usr/local/
RUN mv /usr/local/jdk1.7.0_80 /usr/local/jdk7
RUN rm /tmp/jdk-7u80-linux-x64.tar.gz

# 自动安装 Tomcat 8.0（华为云镜像源）
RUN wget https://mirrors.huaweicloud.com/apache/tomcat/tomcat-8/v8.0.53/bin/apache-tomcat-8.0.53.tar.gz -P /tmp
RUN tar -xzf /tmp/apache-tomcat-8.0.53.tar.gz -C /usr/local/
RUN mv /usr/local/apache-tomcat-8.0.53 /usr/local/tomcat
RUN rm /tmp/apache-tomcat-8.0.53.tar.gz

# 设置环境变量
ENV JAVA_HOME /usr/local/jdk7
ENV CATALINA_HOME /usr/local/tomcat
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin

# 部署 SpringMVC 应用到 Tomcat
COPY ./app/gdfinan_noPay $CATALINA_HOME/webapps/gdfinan_noPay

# 设置时区（解决容器内时间差8小时问题）
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 暴露 Tomcat 端口（映射到主机的8086）
EXPOSE 8080

# 启动 Tomcat（前台运行）
CMD ["catalina.sh", "run"]
```

然后构建这个镜像：
```bash
docker build -t nopay-docker:v1 . (名称:标签 .表示当前目录)
```
再使用docker run启动镜像：
```bash
docker run -d -p 8086:8080 nopay-docker:v1
```

## 通过docker-compose来编排kafka集群和zookeeper
1. 创建一个docker-compose.yml文件，内容如下：
```yml
ersion: '3'
services:
  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - 2182:2181
    restart: always

  kafka1:
    image: wurstmeister/kafka
    container_name: kafka1
    ports:
      - "9093:9092"
    environment:
      KAFKA_BROKER_ID: 0
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
      KAFKA_ZOOKEEPER_CONNECT: 172.17.0.1:2182
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://172.18.200.26:9093
    volumes:
      - /data/docker-compose/kafka/broker1/logs:/opt/kafka/logs
      - /var/run/docker.sock:/var/run/docker.sock
    restart: always

  kafka2:
    image: wurstmeister/kafka
    container_name: kafka2
    ports:
      - "9094:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
      KAFKA_ZOOKEEPER_CONNECT: 172.17.0.1:2182
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://172.18.200.26:9094
    volumes:
      - /data/docker-compose/kafka/broker2/logs:/opt/kafka/logs
      - /var/run/docker.sock:/var/run/docker.sock
    restart: always

  kafka3:
    image: wurstmeister/kafka
    container_name: kafka3
    ports:
      - "9095:9092"
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
      KAFKA_ZOOKEEPER_CONNECT: 172.17.0.1:2182
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://172.18.200.26:9095
    volumes:
      - /data/docker-compose/kafka/broker3/logs:/opt/kafka/logs
      - /var/run/docker.sock:/var/run/docker.sock
    restart: always
```
2. 运行命令：docker-compose up -d 会创建编排的内容容器
3. 停止命令：docker-compose down 会删除编排的内容容器

- -v, --volumes：删除所有由docker-compose up创建的卷。
- --rmi type：删除镜像。type可以是all（删除所有镜像）或local（仅删除没有自定义标签的镜像）。
- --remove-orphans：删除未在docker-compose.yml文件中定义的服务的容器。
- -t, --timeout TIMEOUT：指定关闭容器的超时时间（默认为 10 秒）

4. 启动命令：docker-compose start 仅仅是启动容器
5. 停止命令：docker-compose stop 仅仅是停止容器，不会删除容器