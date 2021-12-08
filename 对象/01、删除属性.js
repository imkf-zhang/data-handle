// 从一个对象中 delete
// 一个属性是非常不好的（性能不好），此外，它还会产生很多副作用。

const removeProperty = (target, propertyToRemove) => {
  const { [propertyToRemove]: _, ...newTarget } = target;
  return newTarget;
};
const toto = { a: 55, b: 66 };
console.log({...toto})
const totoWithoutB = removeProperty(toto, "b"); // { a: 55 }

console.log(totoWithoutB);
