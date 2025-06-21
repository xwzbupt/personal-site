````bash
# 脚本验证

## 一、3台服务器的ssh免密登录

使用了三台云服务器，1台腾讯云，2台华为云。

| 服务器    | IP地址        |
| --------- | ------------- |
| 主-腾讯云 | 124.70.39.252 |
| 从-华为云 | 124.70.6.97   |
| 从-华为云 | 120.46.193.37 |

> 为了容易区分，下面的cdh1、cdh2、cdh3分别对应上面表格的三台服务器。

```bash
#三台机器互相免密登录
#1、三台机器执行以下命令
[root@cdh1 ~]# ssh-keygen -t rsa
[root@cdh2 ~]# ssh-keygen -t rsa
[root@cdh3 ~]# ssh-keygen -t rsa

#2、进入/.ssh/目录 该目录存放密钥对
[root@cdh1 ~]# cd ~/.ssh/

#3、新建authorized_keys并设置权限
[root@cdh1 .ssh]# touch authorized_keys
[root@cdh1 .ssh]# chmod 600 authorized_keys 

#4、公钥追加 authorized_keys 
[root@cdh1 .ssh]# cat id_rsa.pub >> authorized_keys

#5、另外两台机器也执行如下操作
#cdh2
[root@cdh2 ~]# cd ~/.ssh/
[root@cdh2 .ssh]# touch authorized_keys
[root@cdh2 .ssh]# chmod 600 authorized_keys 
[root@cdh2 .ssh]# cat id_rsa.pub >> authorized_keys
#cdh3
[root@cdh3 ~]# cd ~/.ssh/
[root@cdh3 .ssh]# touch authorized_keys
[root@cdh3 .ssh]# chmod 600 authorized_keys 
[root@cdh3 .ssh]# cat id_rsa.pub >> authorized_keys

#6、把cdh2的公钥追加到cdh1的authorized_keys
[root@cdh2 .ssh]# scp id_rsa.pub cdh1:/home/
scp id_rsa.pub 124.70.39.252:/home/
[root@cdh1 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#7、把cdh1的公钥追加到cdh2的authorized_keys
[root@cdh1 .ssh]# scp id_rsa.pub cdh2:/home/
[root@cdh2 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#8、把cdh1的公钥追加到cdh3的authorized_keys
[root@cdh1 .ssh]# scp id_rsa.pub cdh3:/home/
[root@cdh3 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#9、把cdh2的公钥追加到cdh3的authorized_keys
[root@cdh2 .ssh]# scp id_rsa.pub cdh3:/home/
[root@cdh3 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#10、把cdh3的公钥追加到cdh1的authorized_keys
[root@cdh3 .ssh]# scp id_rsa.pub cdh1:/home/
[root@cdh1 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#10、把cdh3的公钥追加到cdh2的authorized_keys
[root@cdh3 .ssh]# scp id_rsa.pub cdh2:/home/
[root@cdh2 .ssh]# cat /home/id_rsa.pub >> ./authorized_keys

#此时cdh1、cdh2、cdh3互相免密
```

## 二、安装ansible环境

略

## 三、验证presto的yml脚本

进入hosts修改hostname和ip地址的映射关系。

运行`ansible-playbook -i hosts deploy-cluster.yml`命令。

![image-20220607152541141](C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607152541141.png)

报错有：python库导入不成功，防火墙不运行（按理说集群应该关闭防火墙才对，开启防火墙后该报错消失），SELinux is disabled.

![image-20220607155317220](C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607155317220.png)

## 四、验证redis的yml脚本

![image-20220607160532084](C:/Users/Weiser/AppData/Roaming/Typora/typora-user-images/image-20220607160532084.png)

redis_join_cluster.sh出了错误，导致redis1failed了。其他均无问题。xxxxxxxxxx1 1$ git push origin :refs/tags/<tagname>bash
````
