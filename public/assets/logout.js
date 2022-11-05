const logout = async () => {
    const response = await fetch("/api/account/logout", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/signin');
    } else {
      alert(response.statusText);
    }
  };
  
  document
  .getElementById("logoutbtn")
  .addEventListener("click", logout)