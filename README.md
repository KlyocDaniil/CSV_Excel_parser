# Node.js (v12.22.9)
## Install Node
### To install node.js use the following command:

**sudo apt install nodejs**

### Once installed, verify it by checking the installed version using the following command:

**node -v or node –version**

### **Note**: It is recommended to install Node Package Manager(NPM) with Node.js. NPM is an open source library of Node.js packages.
### To install NPM, use the following commands:

**sudo apt install npm**
**npm -v** *or* **npm –version**
___
# Классы 

## FileParser
    Класс, который необходим для создания массива массивов. 
    Содержит 3 метода: 

    readFile() - этот метод необходим для чтения файла. При вызове функции, принимает 
    путь до файла, который нужно прочитать.

    parseFile() - необходим для создания массива массивов.

    getFirstRow() - возваращет первую строку из инпут файла (заголовки).
## FileSorter
    Необходим, для сортировки входных значений. 
    Содержит 5 методов: 

    filterByNationality(natioanlity) - Фильтрация массива на нахождение такого элемента, который содержит nationality === (национальность, которую указали в параметрах).

    searchWeightBetween(min, max) - Фильтрация по минимальному и максимальному значению веса.

    searchBeginningName(nameMember) - Проверка каждого имени человека на содержание nameMember. 

    showSurnameLess(lengthSurname) - Фильтрация по длине фамилии.

    showBmiMember() - Рассчет индекса массы тела каждому элементу.
## FileWriter
    Предназначен для записи результата в выходной файл. 
    Содержит 8 методов:

    write(path, result) - Простой метод для построчной записи в файл, принимает путь до файла и результат, который нужно записать.

    addHeaders(header) - Добавление заголовков к уже существующим(из input).

    writeHeaders(pathToOutput, header) - Запись заголовков в output.

    writeFileOutput(pathToOutput, result) - Запись результата в output.

    writeLogs(pathToTxt, result) - Запись логов(Название аутпута + количество строк).

    writeCountRows(pathToOutput, pathToTxt) - Запись количества строк в логи.

    writeNameFile(pathToOutput, pathToTxt) - Запись названия файла.

    writeInfoFile(pathToOutput, pathToTxt) - Объединение двух, вышеуказанных методов.
## ExcelWriter
    Нужен для записи результата напрямую в Excel при помощи библиотеки excel4node.
    Содержит 3 метода:

    addHeadersExcel(positionY, header) - Добавление заголовков в excel файл. Принимает на вход столбик в который нужно вставить header.

    writeHeadersExcel - Запись заголовков.

    writeOutputExcel(nameFunction) - Запись результата, принимает название функции, в данном случае, функции которые будут вызваны в App.mjs
## App.mjs
    Главный класс, отвечающий за вызов методов остальных классов.
    Содержит 4 метода:

    writeResult(pathToOutput, pathToTxt, nameFunction, header) - метод содержащий в себе функции записи заголовков,результата и логов выходного файла в .csv формат.
    
    writeExcel(nameFunction) - запись результата сортировки в .xlsx формат.

    writeHeadersExcel(positionY, header) - Добавление заголовков в .xlsx файл. Принимает на вход столбик в который нужно вставить header.

    run() - основной метод, который запускает программу, содержит в себе конструкцию switch case, куда на вход подается номер задания, предназначенный для определения пути для методов записи результата и заголовков

## index.mjs 
    setFunction(taskNumber) - функция, передающая номер задания в App.mjs