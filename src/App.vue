<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
// console.log(import.meta.env);

// 1. 类装饰器，用于配置 target 对象，扩展对象方法
function Greeter(greeting: string) {
  return function (target: Function) {
    // target: 返回装饰的对象
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}

@Greeter("Hello TS!")
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello TS!';

// 2. 属性装饰器
function logProperty(property: string) {
  return (target: any, key: string) => {
    target[key] = property;
    console.log(property);
  };
}

class Person {
  @logProperty("参数")
  personName: string;

  constructor() {
    this.personName = "constructor";
  }
}

const p1 = new Person();
console.log(p1);

// 3.

// 1. ⽅法装饰器
// 2. target: Object - 被装饰的类
//    1. class Task
// 3. propertyKey: string | symbol - ⽅法名
// 4. descriptor: TypePropertyDescript - 属性描述符

// i. {

// value: [Function: runTask], writable: true,

// enumerable: false, configurable: true

// }
// ```ts
// function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//   let originalMethod = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     console.log("wrapped function: before invoking " + propertyKey);
//     let result = originalMethod.apply(this, args);
//     console.log("wrapped function: after invoking " + propertyKey);
//     return result;
//   };
// }

// class Task {
//   @log
//   runTask(arg: any): any {
//     console.log("runTask invoked, args: " + arg);
//     return "finished";
//   }
// }

// let task = new Task();
// let result = task.runTask("learn ts");
// console.log("result: " + result);
// ```

// 1. 参数装饰器
// 2. target: Object - 被装饰的类
//    1. class Greeter
// 3. propertyKey: string | symbol - ⽅法名
//    1. undefined
// 4. parameterIndex: number - ⽅法中参数的索引值
//    1.  0
// ```ts
// function Log(target: Function, key: string, parameterIndex: number) {
//   let functionLogged = key || target.prototype.constructor.name;
//   console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
// 	been decorated`);
// }

// class Greeter {
//   greeting: string;
//   constructor(@Log phrase: string) {
// 	this.greeting = phrase;
//   }
// }
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
