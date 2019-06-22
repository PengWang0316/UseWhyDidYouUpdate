export const useWhyDidYouUpdate = (react, name = '', props, disableInProduction = true) => {
  // Do not run under the production by default
  if (disableInProduction && process.env.NODE_ENV === 'production') return;
  if (!react) throw new Error('The react parameter has to be provided');
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = react.useRef();

  react.useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach((key) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate;
