function darkmode() {
  var SetTheme = document.body
  SetTheme.classList.toggle('dark-mode')
  var theme
  if (SetTheme.classList.contains('dark-mode')) {
    console.log('Dark mode')
    theme = 'DARK'
  } else {
    console.log('Light mode')
    theme = 'LIGHT'
  }
  // save to localStorage option mode
  localStorage.setItem('PageTheme', JSON.stringify(theme))
  // ensure you convert to JSON with -----JSON.stringify(theme)
}

// Set a range to check if the class is
setInterval(() => {
  let toggleButton = document.querySelector('.toggle')
  let GetTheme = JSON.parse(localStorage.getItem('PageTheme'))
  console.log(GetTheme)
  if (GetTheme === 'DARK') {
    document.body.classList = 'dark-mode'
    toggleButton.classList.add('active')
  } else {
    document.body.classList = ''
    toggleButton.classList.remove('active')
  }
}, 5)
