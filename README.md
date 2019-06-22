# UseWhyDidYouUpdate React Hook

A React Hook to show why did your component was updated.
This original code was written by Bruno Lemos and I found it from Gabe Ragland's useHooks.com. Please visit this amazing website to see more useful hooks.

# Installing

```
npm install --save @kevinwang0316/use-why-did-you-update
```

# Usage

````javascript
import React from 'react';
import useWhyDidYouUpdate from '@kevinwang0316/use-why-did-you-update';

export const yourComponent = (props) => {
  useWhyDidYouUpdate(react, 'name you want', props);
  return <div></div>;
};
````

# Parameters
````javascript
useWhyDidYouUpdate(name, props, isDisableProduction);
````
| parameter| definition| require| type |default value  |
| ------------- |:-------------:|:-------------:| :-------------:|:-------------:|
| react| The React reference you imported in your component | yes | Object | null|
| name| A name will show when print the difference | yes | String | ''|
| props| props or stats you want to monitor | yes | Object |null|
| isDisableProduction| whether disable the monitor under the production | no | Boolean |true |

# Result will show in the console
![alt text](https://github.com/PengWang0316/UseWhyDidYouUpdate/blob/master/ShowCases/1.png?raw=true)

# License

RedisHelper is licensed under MIT License - see the [License file](https://github.com/PengWang0316/UseWhyDidYouUpdate/blob/master/LICENSE).
