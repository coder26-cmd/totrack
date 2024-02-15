// главный процесс Electron
const { app, BrowserWindow } = require('electron')
const path = require('path') // запросить нужные библиотеки

function createWindow () {
  const win = new BrowserWindow({ // создать новый оконный процесс
    width: 800,
    height: 600,
    icon: 'images/icon.png'
  })
  win.loadFile('views/welcome.html') // загрузить HTML файл
  win.maximize()// расширить окно
}

app.whenReady().then(() => {
  createWindow() // создать окно
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) { // если окон не открыто
      createWindow() // создать окно
    }
  })
})

app.on('window-all-closed', () => { // обработать закрытие окна
  if (process.platform !== 'darwin') { // если операционная система не MacOS
    app.quit() // закрыть
  }
})