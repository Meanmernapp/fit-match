
export function formatPriceRange(apiResponse) {
    const parts = apiResponse?.split('_');
    if (parts?.length === 3 && parts[0] === 'Range') {
      return `$${parts[1]}-${parts[2]}`;
    } else {
      return 'Invalid format';
    }
  }
  