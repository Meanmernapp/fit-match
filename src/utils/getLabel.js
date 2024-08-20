export const getLabel = (value) => {
    switch (value) {
      case 'Range_25_50':
        return '$25-50';
      case 'Range_50_75':
        return '$50-75';
      case 'Range_75_100':
        return '$75-100';
      case 'Range_100_Plus':
        return '$100+';
      default:
        return value;
    }
  };