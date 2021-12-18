const divmod = (number, divisor) => ({
  result: parseInt(number / divisor, 10),
  remainder: number % divisor,
});

export default divmod;
