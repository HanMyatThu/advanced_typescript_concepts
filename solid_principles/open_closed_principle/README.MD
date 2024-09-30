## Open Closed Principle (OCP)

This means that a class,module or function should be opened for extension but closed for modification. You should be able to add a new functionality without modifying its existing code. You can extend the behavior of the code but not modify the source code.

### Detailed Explanation:

Open for extension: This means that the behavior of the software entity can be extended, that is, we should be able to add new features or behavior to it.

Closed for modification: This means that once the software entity is developed and it has been reviewed and tested, the code should not be touched (to correct the software behavior).

The idea behind the OCP is that it promotes greater flexibility in your code. When you need to add new behavior or features, instead of modifying existing code (and thus possibly introducing new bugs), you write new code that extends the old code.

## Why we use OCP ?

![image](https://github.com/user-attachments/assets/4528f43a-f873-4fa6-a5bd-bc93d840c67a)


### Running Example Code

```
  npx ts-node ./index.ts
```



## Authors

- [@hanthu][@Draz](https://github.com/HanMyatThu)

