# Here we have studied about how to use typescript api to make changes in the interface and use it effectively

**Pick**
- Pick allows you to create a new type bhy selecting a set of properties from an existing type.
- Imagine you have a User model with several properties, but for a user profiel dispaly, you only need a subset of these properties then you can use pick.

**Partial**
- This is used to convert the the existing types to partail types by picking it with *Pick* and then makeing it *partial*.

**Readonly**
- When you have a configuration object that should not be altered after intialization, making it *Readonly* ensueres its properties cannot be changed.

**Record and Map**

- Record lets you create a cleaner type to an object
- for eg: type user = *Record<string, {age:number; address:{houseNO: number, society: string;}}>*

- Map is used to create a key value pair object like in we do in programming languages like Java, C++ etc;
- We do have set to set the key value pair and get to get the value from the key

**Exclude**
- It will basically exclude certail value from the type where its syntax looks like Exclude<Type, 'property_to_Exclude'>

**Type inference in zod**
- When using zod, we're done runtime validation.
- For example, the following code makes sure that the user is sending the right inputs to update their profile information.
