之所以想单独开个Java基础专区，是想总结一下在工作学习中老是会遗漏掉的一些重要知识点，查缺补漏，常看常新。

## 1.静态代码块、构造方法、代码块、父类与子类之间执行顺序及父类子类实例化对象


### 1.1 静态代码块

在java中使用static关键字声明的代码块。每个静态代码块只会执行一次。JVM在加载类时会执行静态代码块，静态代码块先于主方法执行。

```java
static{
    System.out.println("这是静态代码块");
}
```
:::tip
注意： 静态代码块不能存在于任何方法体内。
:::

### 1.2 构造代码块(实例初始化块)：

直接在类中定义且没有加static关键字的代码块称为{}构造代码，在创建实例对象的时候先于构造函数被调用执行。

```java
class Test{
    int id;
    String name;
	// JVM加载class时执行
	static{
		System.out.println("这是静态代码块");
	}
    // 新建对象的时候执行，构造代码块会先于构造函数被调用时执行
    {
        this.id= 5;
        this.name = "测试";
        System.out.println("这是构造代码块");
    }
    
    Test(int id){
        this.id = id;
    }
    
    public String toString(){
        return "name: "+this.name +"  ,   "+"id: "+ this.id ;    
    }
}
```

### 1.3 普通代码块：

在方法或语句内出现的{}就称为普通代码块。普通代码块和一般的语句执行顺序由他们在代码中出现的次序决定–“先出现先执行”。

```java
public class GeneralCodeBlock01{
    public static void main(String[] args){
        //如下为普通代码块
          {
            int x=3;
            System.out.println("1,普通代码块内的变量x="+x);    
          }
          
          int x=1;
          System.out.println("主方法内的变量x="+x);
          
          {
             int y=7;
             System.out.println("2,普通代码块内的变量y="+y);    
          }
        }
  }
```

属性、方法、构造方法和代码块都是类中的成员，在创建对象时，各成员的执行顺序如下：
- 父类静态成员和静态初始化块，按在代码中出现的顺序依次执行；
- 子类静态成员和静态初始化块，按在代码中出现的顺序依次执行；
- 父类实例成员和实例初始化块，按在代码中出现的顺序依次执行；
- 执行父类构造方法；
- 子类实例成员和实例初始化块，按在代码中出现的顺序依次执行；
- 执行子类构造方法
  
## 2.父类、子类之间代码块与构造方法
```java

public class HelloA {
    static{
        System.out.println("static A");
    }
    
    {System.out.println("I'm A class");}
    
    public HelloA(){

        System.out.println("HelloA");
    }
    public HelloA(String s){

        System.out.println(s+"HelloA");
    }
    
    public static void main(String[] args) {
        new HelloB();
    }
}
 class HelloB extends HelloA{
    public HelloB () {
    	//只能调用一个父类的构造方法
//    	super();
    	super("parent");
        System.out.println("HelloB");
    }
    {System.out.println("I'm B class");}
    static{
        System.out.println("static B");
    }
}
```
结果：
```
static A
static B
I'm A class
parentHelloA
I'm B class
HelloB
```

## 3.父类、子类与super()
```java
public class People {
	String name;
	public People() {
		System.out.println(1);
	}
	public People(String name) {
		System.out.println(2);
		this.name = name;
	}
}
 class Child extends People{
	 People father;
	public Child () {
		//super()系统会默认添加的
		System.out.println(4);
	}
	public Child (String name) {
		//super()系统会默认添加的
		System.out.println(3);
		this.name = name;
		father = new People(name+":F");
	}
	public static void main(String[] args) {
		new Child("mike");
	}
}
```
结果：132

## 4.类中添加静态变量
```java
public class ExA {  
	//静态成员
    private static ExA a = new ExA();  
    //静态代码块
    static {  
        System.out.println("父类--静态代码块");  
    }  
    //构造方法
    public ExA() {  
        System.out.println("父类--构造函数");  
    }  
	  // 实例化代码块
    {  
        System.out.println("父类--非静态代码块");  
    }  
  
    public static void main(String[] args) {  
        new ExB();  
    }  
}  
  
class ExB extends ExA {  
	
    private static ExB b = new ExB();
    
    static {  
        System.out.println("子类--静态代码块");  
    }  
    {  
        System.out.println("子类--非静态代码块");  
    }  
  
    public ExB() {  
        System.out.println("子类--构造函数");  
    }  
}
```
结果：
```
// 父类静态成员
父类--非静态代码块
父类--构造函数

//父类静态代码块
父类--静态代码块

父类--非静态代码块
父类--构造函数

子类--非静态代码块
子类--构造函数

子类--静态代码块

父类--非静态代码块
父类--构造函数

子类--非静态代码块
子类--构造函数
```