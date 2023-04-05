async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
  return response.json();
  } else {
  throw new Error(response.status);
  }
  }
  
  try {
  const result = await loadJson('no-such-user.json');
  console.log(result);
  } catch (error) {
  alert(error);
  }