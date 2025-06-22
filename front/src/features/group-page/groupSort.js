const groupSort = (groupsList) => {
  const sortedOrder = [];

  const groupFilter = (groupType) => {
    for (const group of groupsList) {
      if (group.type === groupType) {
        sortedOrder.push(group);
      }
    }
  };

  // Add inbox
  groupFilter('inbox');

  // Add recommended
  groupFilter('recommended');

  // Add repeat
  groupFilter('repeat');

  // Add rise from expreme to low
  groupFilter('riseExtreme');
  groupFilter('riseHigh');
  groupFilter('riseLow');

  // Add struggle
  groupFilter('struggle');

  // Add defaults
  groupFilter('default');

  return sortedOrder;
};

export { groupSort };
