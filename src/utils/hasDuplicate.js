const hasDuplicate = (list) => list.length !== new Set(list).size;

export default hasDuplicate;
