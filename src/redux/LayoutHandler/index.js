export default {
  measure(id, specs) {
    return {
      type: 'MEASURE',
      payload: { id, specs }
    };
  }
};
