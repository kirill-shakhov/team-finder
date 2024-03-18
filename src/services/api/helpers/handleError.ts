export function handleError(error: any) {
  if (error.response) {
    console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
    console.error('API Error: The request was made but no response was received');
  } else {
    console.error('API Error:', error.message);
  }
}
