// This is an assign function that copies full descriptors
export function completeAssign(target, ...sources) {
  sources.forEach(source => {
    const descriptors = Object.keys(source).reduce((sourceDescriptors, key) => {
      // eslint-disable-next-line no-param-reassign
      sourceDescriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return sourceDescriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

export function omit(entity, property) {
  const newEntity = completeAssign({}, entity);
  delete newEntity[property];
  return newEntity;
}
