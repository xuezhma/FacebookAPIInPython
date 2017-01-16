$(".lang-py").removeClass('hidden_elem')
$(".lang-cpp").addClass('hidden_elem')
$("Ads API Python SDK").addClass('_42fs')
const buttons = document.getElementsByTagName("button")
const searchPythonText = "Ads API Python SDK"
const searchPHPText = "Ads API PHP SDK"
for (let i = 0; i < buttons.length; i++) {
  const found = $(buttons[i])
  found.removeClass("_42fs")
  if (buttons[i].textContent === searchPythonText) {
    const found = $(buttons[i])
    found.addClass("_42fs")
  }
}
