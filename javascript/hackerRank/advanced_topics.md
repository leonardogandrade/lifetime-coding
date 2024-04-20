# FUNCTIONS

## The classic definition of a function has this as a global scope. On the example below you this h

```{.js .numberLines}
const module = {
    value: 10
    sum: function(){ return this.value}
}
```
