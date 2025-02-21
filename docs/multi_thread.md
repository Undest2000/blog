# 多线程相关

学习网站：

[Java Thread类](http://www.51gjie.com/java/717.html)

[知乎:JUC并发编程](https://zhuanlan.zhihu.com/p/365420697#:~:text=JUC%E7%AE%80%E4%BB%8B%20%E6%9D%A5%E6%BA%90%E4%BA%8E%20java.util.concurrent%E3%80%81java.util.concurrent.atomic%E3%80%81java.util.concurrent.locks,%E8%BF%99%E4%B8%89%E4%B8%AA%E5%8C%85%EF%BC%88%E7%AE%80%E7%A7%B0JUC%20%EF%BC%89%EF%BC%8C%E5%9C%A8%E6%AD%A4%E5%8C%85%E4%B8%AD%E5%A2%9E%E5%8A%A0%E4%BA%86%E5%9C%A8%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E4%B8%AD%E5%BE%88%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7%E7%B1%BB%EF%BC%8C%E7%94%A8%E4%BA%8E%E5%AE%9A%E4%B9%89%E7%B1%BB%E4%BC%BC%E4%BA%8E%E7%BA%BF%E7%A8%8B%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AD%90%E7%B3%BB%E7%BB%9F%EF%BC%8C%E5%8C%85%E6%8B%AC%E7%BA%BF%E7%A8%8B%E6%B1%A0%E3%80%81%E5%BC%82%E6%AD%A5%20IO%20%E5%92%8C%E8%BD%BB%E9%87%8F%E7%BA%A7%E4%BB%BB%E5%8A%A1%E6%A1%86%E6%9E%B6%E3%80%82)

让多个线程按照顺序执行的几种方法：

[在子线程中通过join()方法指定顺序](https://blog.csdn.net/jqc874789596/article/details/100557300#t0)

[在主线程中通过join()方法指定顺序](https://blog.csdn.net/jqc874789596/article/details/100557300#t1)

[通过倒数计时器CountDownLatch实现](https://blog.csdn.net/jqc874789596/article/details/100557300#t2)

[通过创建单一化线程池newSingleThreadExecutor()实现](https://blog.csdn.net/jqc874789596/article/details/100557300#t3)

1、在子线程中通过join()方法指定顺序
通过join()方法使当前线程“阻塞”，等待指定线程执行完毕后继续执行。举例：在线程thread2中，加上一句thread1.join()，其意义在于，当前线程2运行到此行代码时会进入阻塞状态，直到线程thread1执行完毕后，线程thread2才会继续运行，这就保证了线程thread1与线程thread2的运行顺序。

```java
public class ThreadJoinDemo {
    public static void main(String[] args) throws InterruptedException {
        final Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("打开冰箱！");
            }
        });

        final Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    thread1.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("拿出一瓶牛奶！");
            }
        });

        final Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    thread2.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("关上冰箱！");
            }
        });

        //下面三行代码顺序可随意调整，程序运行结果不受影响，因为我们在子线程中通过“join()方法”已经指定了运行顺序。
        thread3.start();
        thread2.start();
        thread1.start();

    }
}
```

结果：

1. 打开冰箱！

2. 拿出一瓶牛奶！

3. 关上冰箱

2、在主线程中通过join()方法指定顺序

```java
public class ThreadMainJoinDemo {
    public static void main(String[] args) throws InterruptedException {
        final Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("打开冰箱！");
            }
        });

        final Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("拿出一瓶牛奶！");
            }
        });

        final Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("关上冰箱！");
            }
        });

        thread1.start();
        thread1.join();
        thread2.start();
        thread2.join();
        thread3.start();
    }
}
```

结果：

1. 打开冰箱！

2. 拿出一瓶牛奶！

3. 关上冰箱

3、通过倒数计时器[CountDownLatch](https://so.csdn.net/so/search?q=CountDownLatch&spm=1001.2101.3001.7020)实现

CountDownLatch通过计数器提供了更灵活的控制，只要检测到计数器为0当前线程就可以往下执行而不用管相应的thread是否执行完毕。

```java
public class ThreadCountDownLatchDemo {

    private static CountDownLatch countDownLatch1 = new CountDownLatch(1);

    private static CountDownLatch countDownLatch2 = new CountDownLatch(1);

    public static void main(String[] args) {
        final Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("打开冰箱！");
                countDownLatch1.countDown();
            }
        });

        final Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    countDownLatch1.await();
                    System.out.println("拿出一瓶牛奶！");
                    countDownLatch2.countDown();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        final Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    countDownLatch2.await();
                    System.out.println("关上冰箱！");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        //下面三行代码顺序可随意调整，程序运行结果不受影响
        thread3.start();
        thread1.start();
        thread2.start();
    }
}
```

4、 通过创建单一化[线程池](https://so.csdn.net/so/search?q=%E7%BA%BF%E7%A8%8B%E6%B1%A0&spm=1001.2101.3001.7020)newSingleThreadExecutor()实现

单线程化线程池(newSingleThreadExecutor)的优点，串行执行所有任务。

```java
public class ThreadPoolDemo {

   static ExecutorService executorService = Executors.newSingleThreadExecutor();

    public static void main(String[] args) {
        final Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("打开冰箱！");
            }
        });

        final Thread thread2 =new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("拿出一瓶牛奶！");
            }
        });

        final Thread thread3 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("关上冰箱！");
            }
        });
        executorService.submit(thread1);
        executorService.submit(thread2);
        executorService.submit(thread3);
        executorService.shutdown();        //使用完毕记得关闭线程池
    }

}
```

关于interrupt()方法：

1它只是设置线程的中断标志位为true,并不实际进行中断

2要实际进行中断要设立一个“开关” 它是原子性的，即内存共享变量

比如：

```java
private volatile (static) boolean on =false;
```

然后在线程run方法里作判断：

```java
//开关被打开 线程正常运行
 @Override
public void run() {
while(!on){
            if(Thread.currentThread().isInterrupted()){
                System.out.println("Yes,I am interruted,but I am still running");
            }else{
                System.out.println("not yet interrupted");
            }
        }

```

3为了解决线程阻塞的过程中并不会去判断开关这一问题：

```java
@Override
public void run() {
        while(!on){
            try {
                //省略一些拿着锁才能做的操作,比如有可能是同步方法
                Thread.sleep(10000000);//开关打开后进来了，开始不停睡觉阻塞，
                                       //锁不释放给其他线程造成性能浪费                 
            } catch (InterruptedException e) {
                System.out.println("caught exception: "+e);
            }
        }
}
```

我们在调用这个线程的线程里加上救世主interrupt函数

完整代码：

```java
public class InterruptionInJava implements Runnable{
    private volatile static boolean on = false;
    public static void main(String[] args) throws InterruptedException {
        Thread testThread = new Thread(new InterruptionInJava(),"InterruptionInJava");
        //start thread
        testThread.start();
        Thread.sleep(1000);
        InterruptionInJava.on = true;
        testThread.interrupt();//这里才让下面的异常得以抛出，线程不再阻塞
 
        System.out.println("main end");
 
    }
 
    @Override
    public void run() {
        while(!on){
            try {
                Thread.sleep(10000000);
            } catch (InterruptedException e) {
                System.out.println("caught exception right now: "+e);
            }
        }
    }
}
```

原理：Object.wait()方法 Thread.sleep()、Thread.join()方法会不断扫描中断标志位，如果它被设置成了true(也就是调用了interrupt函数)，那么这些方法会抛出一个

```java
InterruptedException
```

异常，从而把阻塞的线程释放出来，此时中断标志位被清除为false

如果我们在后续的主线程中需要根据中断标志位作判断对这个线程进行处理，那么要在

catch块里再次调用一次：

```java
Thread.currentThread().interrupt();
```

来把标志位重新设置为true

需要注意的是

如果线程在I/O操作进行时被阻塞，通常io阻塞会立即抛出一个SocketException，我们用同样的方法进行处理就可以了。
