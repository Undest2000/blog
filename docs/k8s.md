# MiniKube

## 1. 按照minikube的文档安装
 [minikube](https://minikube.sigs.k8s.io/docs/)

## 2. 本地先拉取kicbase/metrics-scraper/metrics-scraper
```bash
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kicbase:v0.0.47

docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-scraper:v1.0.8
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-scraper:v1.0.8 docker.io/kubernetesui/metrics-scraper:v1.0.8

docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/dashboard:v2.7.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/dashboard:v2.7.0 docker.io/kubernetesui/dashboard:v2.7.0
```

## 2. 把外部的镜像加载到容器内
```bash
#基础容器镜像
minikube image load registry.cn-hangzhou.aliyuncs.com/google_containers/kicbase:v0.0.47
#Dashboard 主镜像
minikube image load docker.io/kubernetesui/dashboard:v2.7.0
#Metrics-scraper 镜像
minikube image load docker.io/kubernetesui/metrics-scraper:v1.0.8
```

## 3. 启动minikube
```bash
#root启动就要带--force 不然不要用root用户
minikube start --force --driver=docker --base-image="registry.cn-hangzhou.aliyuncs.com/google_containers/kicbase:v0.0.47" --image-mirror-country='cn' --image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' --kubernetes-version=v1.23.9
```

## 4.修改dashboard的镜像拉取配置
```bash
kubectl edit deployment kubernetes-dashboard -n kubernetes-dashboard
kubectl edit deployment dashboard-metrics-scraper -n kubernetes-dashboard
```
把里面的image后面的@+hash去掉
在后面加上imagePullPolicy: Never

另一种改法:
```bash
docker exec -it minikube /bin/bash
vi /etc/kubernetes/addons/dashboard-dp.yaml
:set nocompatible
:set backspace=2
```

重启pod:
```bash
kubectl delete pods -l k8s-app=kubernetes-dashboard -n kubernetes-dashboard
```

预防性方案:
```bash
minikube stop
minikube start --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers

minikube ssh
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://<你的阿里云镜像加速地址>"]
}
EOF
sudo systemctl restart docker

#检查 Pod 状态
kubectl get pods -n kubernetes-dashboard
#查看日志确认是否使用本地镜像
kubectl logs <pod-name> -n kubernetes-dashboard | grep(findstr) "Using local image"
```
## 5. 启动dashboard
```bash
minikube dashboard
```

## 6. 查看所有的pod
```bash
kubectl get pods -A
```
