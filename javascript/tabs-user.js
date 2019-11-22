$(document).ready(changeTabs);

function changeTabs(tabs, tab) {
  tab = document.getElementById(tab.id);
  listTabs = document.getElementById(tabs.id);

  formTabs = document.getElementById("form" + tab.id);
  clistTabs = document.getElementById("content" + tabs.id);
}
