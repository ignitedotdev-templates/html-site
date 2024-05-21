window.onload = function () {
  const currentPath = window.location.href;

  const pathName = document.getElementsByClassName("pathname")[0];

  if (pathName) {
    pathName.innerHTML = currentPath;
    window.alert(currentPath);
  }
};
