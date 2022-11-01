  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const filter = species.find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.sex).length;
  return filter;