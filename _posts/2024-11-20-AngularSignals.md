---
layout: post
title: "Angular Signals"
date: 2024-11-20
categories: ELECTRON
image: /assets/uploads/angularsignals.png
---
Let's understand **Why? What? Where? How?** and **When?** to use Angular Signals

**Why Angular Signals are introduced?**

Signals improves Angular's change detection mechanism, which also improves performance, and makes the code more reactive.Signals provide a new way for our code to tell our templates (and other code) that our data has changed.

Initially, Angular was dependent upon **change detection** to keep the Template and Data in sync and update the DOM (whenever there is a change). The change detection always worked through the component tree. It would start at the root component and works its way through all child components and their child components.
After that, AngularJS introduced **timer based change detection**, meaning it would constantly check every expression if there have been any changes.

Then Angular made a change and  introduced zone.js for **event-based change detection**. Events will be triggered on browser events, like mouse move, click, scroll, etc but also things like promise resolves.
Later, Angular introduced another mechanism with **ChangeDetectionStrategy.OnPush**. This tries to limit the paths of the component tree that need a change detection.

However there were still some outstanding problem:
• The change detection would always work from the root component to the leaf/child components, which is not ideal for big applications.
• It is dependent on zone.js (Third Party Library)

Hence, with Angular 16, Signals were introduces
With **Angular Signals**, the change detection works locally, That means it will not traverse down the entire component tree but can just refresh a specific components (and it’s children if needed).
Angular can detect itself (via the logic of signals) whether something has changed or not.
Also, Angular Signals were introduced to simplify reactivity and provide a clear, efficient way to manage state in Angular applications. It allows you to define reactive values and express dependencies between them. There for we can build reactive websites more efficiently using Angular Signals

**What is Angular Signals?**

A signal is just a special type of variable that holds a value. But unlike other variables, a signal also provides notification when the variable value changes. It is reactive,  hence called "Reactive Primitive". It will always have in a value. Signals are synchronous and they are not a replacement of RxJS and Observables for asynchronous operations.

        In Layman terms:
        Signal = Variable + notification

**Where can we use signals?**

 Signals can be used in component to track local component state. It can also be used in Services and directives to share state across component. We can read and display the value of signals from template. Basically signals can be used anywhere in the code.

**How to use Signals?**

**Creating a Signal**

Use the signal() function to create a reactive variable.
    import { signal } from '@angular/core';
    const count = signal<number>(0);

Its optional but a good practice to provide a generic type parameter to define the signal's data type.

**Read A Signal**

Signals behave like functions. To access their current value, call them:
    console.log(count()); //output 0

**Updating Signal Values**

To update a signal, use the set, update, or mutate methods:
1. **set:** Replaces the current value.

    count.set(5);
    // Sets the count signal to 5

2. **update:** Modifies the value using a callback.

    count.update(value => value + 1);  // Increments the count signal

3. **mutate:** Directly modifies the value if it's a mutable object (like arrays or objects).

    const todos = signal([{ id: 1, text: "Learn Angular", done: false }]);
    todos.mutate((list) =>
    list.push({ id: 2, text: "Learn Signals", done: false })
    );

**Computed Signals**

Use computed to derive values from one or more signals:

    import { computed } from '@angular/core';
    const doubleCount = computed(() => count() * 2);
    console.log(doubleCount()); // Outputs: 10 if count is 5

**the value of a computed signal is re-computed when:**
- One or more of its dependent signals is changed.
- AND the value of the computed signal is read.

**Effect()**

There may be times that you need to run code when a signal changes, and that code has side effects.
By side effects I mean code that calls an API or performs another operation not related to the signal. In these cases, you'll use an effect().

    import { effect } from '@angular/core';
    effect(() => {
    console.log('Count changed:', count());
    });
    count.set(10); // Logs: 'Count changed: 10'

**When to Use Signals?**

Use a signal or a computed signal in a component for any state that could change. In this context, state refers to any data that the component manages. We can use Signals when a state changes should automatically update the UI without extra logic. With signals,  RxJS library will eventually become an opt-in rather than being mandatory. For simple and straight forward event handling signals are a good choice. For everything more complex that require Observable pipes RxJS is a better option.

**Signals and RxJS complement each other for different use cases and should not be seen as rivals.**
