function classNames(deps = {}) {
  return Object.entries(deps).reduce((classNamesStr, entry, index) => {
    const [key, value] = entry;
    return `${classNamesStr}${value ? `${index > 0 ? " " : ""}${key}` : ""}`;
  }, "");
}

export { classNames };
